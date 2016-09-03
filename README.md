bikemapcode
===========

Mobile-friendly web maps created with open-source Leaflet templates.
- Show multiple color-coded routes (uploaded as GPX files)
- Allow users to find their location on desktops or smartphones
- Display geotagged Flickr photos from your journeys
- Host your map on a free GitHub Pages site or your own website

Distributed as-is with no warranty under [an MIT license](https://raw.githubusercontent.com/JackDougherty/bikemapcode/master/LICENSE). Feedback and code contributions welcome on GitHub or email to [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)

## Demos

Direct link
- https://jackdougherty.github.io/bikemapcode/index.html

Simplified with a link shortener to wide distribution (* to come)

Web map embedded in a WordPress.org site (* to come)

Web map embedded in a Weebly site (* to come)

### Sample short links for bike events
- bit.ly/bikeweha (https://jackdougherty.github.io/bikemapcode/westhartford.html)
- bit.ly/bikenewbrit (https://jackdougherty.github.io/bikemapcode/newbritain.html)
- bit.ly/bikegbury (https://jackdougherty.github.io/bikemapcode/glastonbury.html)
- bit.ly/bikemapjack (https://jackdougherty.github.io/bikemapcode/index.html)

### Sample links to bike tours with photos
- https://jackdougherty.github.io/bikemapcode/quebec2015.html
- https://jackdougherty.github.io/bikemapcode/COGAP2015.html
- https://jackdougherty.github.io/bikemapcode/ECG2014.html
- https://jackdougherty.github.io/bikemapcode/portland2014.html
- https://jackdougherty.github.io/bikemapcode/seattle2014.html
- https://jackdougherty.github.io/bikemapcode/oberlin2012.html

## What the tool does NOT do:
- It does not provide routing directions to bike from point A to B
- It does not work without internet access.

## Code credits and open-source licenses
- Leaflet: an open-source JavaScript library for mobile-friendly interactive maps at http://leafletjs.com/ (BSD license)
- Leaflet.Locate to show your map location at https://github.com/domoritz/leaflet-locatecontrol (MIT license, v52, 2016)
- Leaflet-plugins to display GPX, KML, Google layers at https://github.com/shramov/leaflet-plugins (BSD license, 2016)
- Leaflet.Control.Compass to display rotating compass in mobile at https://github.com/stefanocudini/leaflet-compass (unlicensed, June 2016)
- Leaflet.SlideMenu to display sidebar at https://github.com/unbam/Leaflet.SlideMenu (BSD license)
- Leaflet-distance-markers to display mileage icons for GPX at https://github.com/adoroszlai/leaflet-distance-markers (MIT license, June 2016)
  - requires https://github.com/makinacorpus/Leaflet.GeometryUtil
- Mapzen leaflet-geocoder to search locations (requires free API key) https://github.com/mapzen/leaflet-geocoder (MIT license)
- Thanks @ilyankou for gatherBounds function and marker styling

- Code contributions welcome via GitHub dev branch or via email to [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)


## To Do
- Esri-leaflet to display ArcGIS layers at https://github.com/Esri/esri-leaflet (Apache license)
- Explain how users can copy, edit, and host their own version on GitHub. See basics at http://DataVizForAll.org
- Add reminder: always point to secure https (required by Chrome for geolocation)
- Add Google Maps bicycling layer via Leaflet, if licensing allows
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
