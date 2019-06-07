bikemapcode
===========

Mobile-friendly web maps created with open-source Leaflet templates.
- Show multiple color-coded routes (uploaded as GPX or GeoJSON files)
- Two templates:
  - Dropdown menu of bike tours, with geotagged Flickr photos (index.html)
  - Checkbox menu of bike routes, with find-your-location on smartphones or desktop (westhartford.html)
- Host your map on a free GitHub Pages site or your own website (see http://DataVizForAll.org)

## What the tool does NOT do:
- It does not provide routing directions to bike from point A to B
- It does not work without internet access.

Distributed as-is with no warranty under [an MIT license](https://raw.githubusercontent.com/JackDougherty/bikemapcode/master/LICENSE). Feedback and code contributions welcome on GitHub or email to [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)

# Demos

## Dropdrown menu of bike tours
- https://jackdougherty.github.io/bikemapcode/index.html

## Checkbox menu of bike routes (with shortened links)
- bit.ly/pedal2medal (https://jackdougherty.github.io/bikemapcode/pedal2medal.html)
- bit.ly/bikeweha (https://jackdougherty.github.io/bikemapcode/westhartford.html)
- bit.ly/bikefv2019 (http://jackdougherty.github.io/bikemapcode/fallsvillage.html)
- bit.ly/bikenewbrit (https://jackdougherty.github.io/bikemapcode/newbritain.html)
- bit.ly/bikegbury (https://jackdougherty.github.io/bikemapcode/glastonbury.html)
- bit.ly/bikemapjack (https://jackdougherty.github.io/bikemapcode/index.html)

## Web map embedded in a WordPress.org site
- http://jackbikes.org/2015/08/join-new-britain-ride/

## Code credits and open-source licenses
- Thanks @ilyankou for gatherBounds function, marker styling, CSS improvements, dropdown menu, and teaching me how to code
- Leaflet: an open-source JavaScript library for mobile-friendly interactive maps at http://leafletjs.com/ (BSD license)
- Leaflet.Locate to show your map location at https://github.com/domoritz/leaflet-locatecontrol (MIT license, v67, 2019)
- Leaflet-plugins to display GPX, KML, Google layers at https://github.com/shramov/leaflet-plugins (BSD license, v 3.0.3, 2018)
- Leaflet.Control.Compass to display rotating compass in mobile at https://github.com/stefanocudini/leaflet-compass (unlicensed, March 2019)
- Leaflet-hash to add dynamic URL hashes to specific map locations at https://github.com/mlevans/leaflet-hash (MIT license, 2013)
- Leaflet.SlideMenu to display sidebar at https://github.com/unbam/Leaflet.SlideMenu (BSD license)
- Leaflet-distance-markers to display mileage icons for GPX at https://github.com/adoroszlai/leaflet-distance-markers (MIT license, 2017)
  - requires https://github.com/makinacorpus/Leaflet.GeometryUtil
- Leaflet.Textpath to display arrows on complex routes https://github.com/makinacorpus/Leaflet.TextPath (MIT license)
- Mapzen leaflet-geocoder to search locations (requires free API key) https://github.com/mapzen/leaflet-geocoder (MIT license)

- Code contributions welcome via GitHub dev branch or via email to [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)


## To Do
- condense bike tour routes into GPX files
- vary colors
- add start marker, with link to WordPress page
- ask Ilya about way to include Dropdown menu name in URL, similar to leaflet-hash
- ask Ilya about automatically detecting bounds to limit Flickr photos via bbox, similar to fitBounds
- see https://www.flickr.com/services/api/flickr.photos.search.htm
- remove all Mapzen refs
- update all dependencies

## Reminders
- Esri-leaflet to display ArcGIS layers at https://github.com/Esri/esri-leaflet (Apache license)
- Add Strava popular bike routes layer http://labs.strava.com/heatmap/#13/-72.69000/41.76000/blue/bike
- Decide about routes via Arcgisonline: [City of Hartford bike lanes](http://gis1.hartford.gov/arcgis/rest/services/OpenData_Community/MapServer/9) and [HartfordAreaBikeMap layers hosted by Cameron Douglass and Alex Perez at Trinity College](http://services1.arcgis.com/5rblLCKLgS4Td60j/arcgis/rest/services/)

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
