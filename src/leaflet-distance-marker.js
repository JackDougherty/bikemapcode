/*
 * https://github.com/adoroszlai/leaflet-distance-markers
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Doroszlai Attila
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

L.DistanceMarkers = L.LayerGroup.extend({
	initialize: function (line, map, options) {
		options = options || {};
		var offset = options.offset || 1609.34; /* meters to equal 1 mile */
		var showAll = Math.min(map.getMaxZoom(), options.showAll || 12);
		var cssClass = options.cssClass || 'dist-marker';

		var zoomLayers = {};
		var length = L.GeometryUtil.length(line);
		var count = Math.floor(length / offset);

		for (var i = 1; i <= count; ++i) {
			var distance = offset * i;
			var position = L.GeometryUtil.interpolateOnLine(map, line, distance / length);
			var icon = L.divIcon({ className: cssClass, html: i });
			var marker = L.marker(position.latLng, { title: i, icon: icon });

			// visible only starting at a specific zoom level
			var zoom = this._minimumZoomLevelForItem(i, showAll);
			if (zoomLayers[zoom] === undefined) {
				zoomLayers[zoom] = L.layerGroup();
			}
			zoomLayers[zoom].addLayer(marker);
		}

		var currentZoomLevel = 0;
		var markerLayer = this;
		var updateMarkerVisibility = function() {
			var oldZoom = currentZoomLevel;
			var newZoom = currentZoomLevel = map.getZoom();

			if (newZoom > oldZoom) {
				for (var i = oldZoom + 1; i <= newZoom; ++i) {
					if (zoomLayers[i] !== undefined) {
						markerLayer.addLayer(zoomLayers[i]);
					}
				}
			} else if (newZoom < oldZoom) {
				for (var i = oldZoom; i > newZoom; --i) {
					if (zoomLayers[i] !== undefined) {
						markerLayer.removeLayer(zoomLayers[i]);
					}
				}
			}
		};
		map.on('zoomend', updateMarkerVisibility);

		this._layers = {}; // need to initialize before adding markers to this LayerGroup
		updateMarkerVisibility();
	},

	_minimumZoomLevelForItem: function (item, showAllLevel) {
		var zoom = showAllLevel;
		var i = item;
		while (i > 0 && i % 2 === 0) {
			--zoom;
			i = Math.floor(i / 2);
		}
		return zoom;
	},

});

L.Polyline.include({

	_originalOnAdd: L.Polyline.prototype.onAdd,
	_originalOnRemove: L.Polyline.prototype.onRemove,

	addDistanceMarkers: function () {
		if (this._map && this._distanceMarkers) {
			this._map.addLayer(this._distanceMarkers);
		}
	},

	removeDistanceMarkers: function () {
		if (this._map && this._distanceMarkers) {
			this._map.removeLayer(this._distanceMarkers);
		}
	},

	onAdd: function (map) {
		this._originalOnAdd(map);

		var opts = this.options.distanceMarkers || {};
		if (this._distanceMarkers === undefined) {
			this._distanceMarkers = new L.DistanceMarkers(this, map, opts);
		}
		if (opts.lazy === undefined || opts.lazy === false) {
			this.addDistanceMarkers();
		}
	},

	onRemove: function (map) {
		this.removeDistanceMarkers();
		this._originalOnRemove(map);
	}

});
