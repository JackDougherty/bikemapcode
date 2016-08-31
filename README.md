bikemapcode
===========

Mobile-friendly bike maps, for desktop or smartphone. Share multiple routes or tours (GPX or KML), with optional geotagged Flickr photos, on your own website with free and easy-to-modify open-source code, created with Leaflet.js.

Distributed as-is with no warranty under [an MIT license](https://raw.githubusercontent.com/JackDougherty/bikemapcode/master/LICENSE). Feedback and code contributions welcome on GitHub or email to [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)

## Demo
- http://jackdougherty.github.io/bikemapcode/index.html

### Shortlinks for bike events
- http://bit.ly/bikemapwh (westhartford.html)
- http://bit.ly/bikemapnb (newbritain.html)
- http://bit.ly/bikemapgb (glastonbury.html)
- http://bit.ly/bikemapcode (index.html)

### Bike tours
- http://jackdougherty.github.io/bikemapcode/quebec2015.html
- http://jackdougherty.github.io/bikemapcode/COGAP2015.html
- http://jackdougherty.github.io/bikemapcode/ECG2014.html
- http://jackdougherty.github.io/bikemapcode/portland2014.html
- http://jackdougherty.github.io/bikemapcode/seattle2014.html
- http://jackdougherty.github.io/bikemapcode/oberlin2012.html

## What the tool does NOT do:
- It does not provide routing directions to bike from point A to B
- It does not work without internet access.

## Code credits and open-source licenses
- Leaflet: an open-source JavaScript library for mobile-friendly interactive maps at http://leafletjs.com/ (BSD license)
- Leaflet.Locate to show your map location at https://github.com/domoritz/leaflet-locatecontrol (MIT license, v52, 2016)
- Leaflet-plugins to display GPX, KML, Google layers at https://github.com/shramov/leaflet-plugins (BSD license, 2016)
- Leaflet.Control.Compass to display rotating compass in mobile at https://github.com/stefanocudini/leaflet-compass (unlicensed, June 2016)
- Leaflet-distance-markers to display mileage icons for GPX at https://github.com/adoroszlai/leaflet-distance-markers (MIT license, June 2016)
  - requires https://github.com/makinacorpus/Leaflet.GeometryUtil
- Mapzen leaflet-geocoder to search locations (requires free API key) https://github.com/mapzen/leaflet-geocoder (MIT license)
- Thanks @ilyankou for gatherBounds function

- Code contributions welcome via GitHub dev branch or via email to [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)

### add credits later
- Esri-leaflet to display ArcGIS layers at https://github.com/Esri/esri-leaflet (Apache license)
- Leaflet sidebar to display slide-in instructions at https://github.com/Turbo87/sidebar (MIT license)


## To Do

1. Geolocation button causes error in Chrome for typical page (https://bit.ly/bikemapnb)
- Error message: "Geolocation error: Only secure
origins are allowed(see: https://goo.gl/Y0ZkNV)"
- Problem seems to be caused by http vs. https issue in https://github.com/domoritz/leaflet-locatecontrol, but I cannot find non-secure http references in my code or in current release of this plugin (v52)
- Possible solution: if this plugin is flawed, Leaflet natively supports geolocation (http://leafletjs.com/reference-1.0.0.html#map-locate), but I don't know how to create a similar font-awesome button to trigger it

2. Improve appearance of dist-marker in style.css while using Bootstrap, and add color matching (as you did on the old test site)

## Do later
- Explain how users can copy, edit, and host their own version on GitHub. See basics at http://DataVizForAll.org
- Improve index.html version
- Redo sidebar, with question mark icon, to place on right side
- Improve style.css, especially dist-marker; Bootstrap
- Add Google Maps bicycling layer via Leaflet, if licensing allows
- Add Strava popular bike routes layer http://labs.strava.com/heatmap/#13/-72.69000/41.76000/blue/bike
- Decide about routes via Arcgisonline: [City of Hartford bike lanes](http://gis1.hartford.gov/arcgis/rest/services/OpenData_Community/MapServer/9) and [HartfordAreaBikeMap layers hosted by Cameron Douglass and Alex Perez at Trinity College](http://services1.arcgis.com/5rblLCKLgS4Td60j/arcgis/rest/services/)


## old notes to self
old esri layer and feature label
```
var HartGISBike = L.esri.featureLayer({
	url: 'http://gis1.hartford.gov/arcgis/rest/services/OpenData_Community/MapServer/9',
	style: function () {
		return { color: "#70ca49", opacity: 0.7, weight: 5};
	}
});
controlLayers.addOverlay(HartGISBike, 'City of Hartford bike lanes');

//esri-leaflet popup
TrinGISPrimaryRoutes.bindPopup(function (feature) {
   	return L.Util.template('<p>Primary Route<br>FID: {FID}</p>', feature.properties);
});
```

old sidebar html to revise
```
<div id="sidebar" class="sidebar collapsed">
	<ul class="sidebar-tabs" role="tablist">
		<li><a href="#home" role="tab"><i class="fa fa-question-circle"></i></a></li>
	</ul>
	<div class="sidebar-content active">
		<div class="sidebar-pane" id="home">
		<strong>bikemapcode</strong> displays mobile-friendly cycling maps on your website with easy-to-modify <a href="https://github.com/JackDougherty/bikemapcode#bikemapcode" target="_blank">open-source code</a>.</p>
		<p><img src="images/layers-icon.png"> Choose map layers:</p>
		<ul>
		<li>Basemaps: <a href="http://opencyclemap.org/" target="_blank">Open Cycle Map</a>, <a href="http://www.openstreetmap.org/" target="_blank">Open Street Map</a>, etc.</li>
		<li>Overlays: add bike routes (KML, GPX, ArcGIS) </li>
		</ul>
		</p>
		<p><img src="images/location-icon.png"> Show your current location</p>
		<p><img src="images/search-icon.png"> Search for any place </p>
		<p><img src="images/compass-icon.png"> Compass arrow (with mobile devices)</p>
		</br>
		<p>Key for <a href="http://www.opencyclemap.org/docs/" target="_blank">OpenCycleMap</a></p>
		<img src="images/OpenCycleMapKey.png">
		</br>
		<p>bikemapcode is distributed as-is with no warranty under an MIT license. Feedback and code contributions welcome on <a href="https://github.com/JackDougherty/bikemapcode" target="_blank">GitHub</a> or email to <a href="mailto:jack.dougherty@trincoll.edu">jack.dougherty@trincoll.edu</a></p>
		</div>
	</div>
</div>

var sidebar = L.control.sidebar('sidebar').addTo(map);
sidebar.open('home');   -- option to open on startup

/* old sidebar modification */
.sidebar-tabs {
  height: 35px;
}
.sidebar {
  z-index: 1;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
  .sidebar.leaflet-touch {
    box-shadow: none;
    border-right: 0 solid rgba(0, 0, 0, 0); }
  @media (min-width: 768px) {
    .sidebar {
      border-radius: 0; }
      .sidebar.leaflet-touch {
        border: 0 solid rgba(0, 0, 0, 0); }
      .sidebar.collapsed ~ .sidebar-map .leaflet-left {
        left: 50px; } }
.fa-question-circle{
font-size: 1.4em;
}

```
