bikemapcode
===========

Mobile-friendly web maps created with open-source Leaflet templates.
- Show multiple color-coded routes (uploaded as GPX or GeoJSON files)
- Allow users to find their location on desktops or smartphones
- Display geotagged Flickr photos from your journeys
- Host your map on a free GitHub Pages site or your own website (see http://DataVizForAll.org)

## What the tool does NOT do:
- It does not provide routing directions to bike from point A to B
- It does not work without internet access.

Distributed as-is with no warranty under [an MIT license](https://raw.githubusercontent.com/JackDougherty/bikemapcode/master/LICENSE). Feedback and code contributions welcome on GitHub or email to [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)

## Link(s) to Bike tours with Flickr photos
- https://jackdougherty.github.io/bikemapcode/   PENDING, make index.html
- https://jackdougherty.github.io/bikemapcode/quebec2015.html
- https://jackdougherty.github.io/bikemapcode/COGAP2015.html
- https://jackdougherty.github.io/bikemapcode/ECG2014.html
- https://jackdougherty.github.io/bikemapcode/portland2014.html
- https://jackdougherty.github.io/bikemapcode/seattle2014.html
- https://jackdougherty.github.io/bikemapcode/oberlin2012.html

### Sample shortened links for Hartford-area bike events
- bit.ly/pedal2medal (https://jackdougherty.github.io/bikemapcode/pedal2medal.html)
- bit.ly/bikeweha (https://jackdougherty.github.io/bikemapcode/westhartford.html)
- bit.ly/bikenewbrit (https://jackdougherty.github.io/bikemapcode/newbritain.html)
- bit.ly/bikegbury (https://jackdougherty.github.io/bikemapcode/glastonbury.html)
- bit.ly/bikemapjack (https://jackdougherty.github.io/bikemapcode/index.html)

### Web map embedded in a WordPress.org site
- http://jackbikes.org/2015/08/join-new-britain-ride/

### Web map embedded in a Weebly site
- http://www.bikewesthartford.org/interactive-map.html
- http://www.bikewalkct.org/discover-ct-ride-series-20161.html

## Code credits and open-source licenses
- Thanks @ilyankou for gatherBounds function, marker styling, CSS improvements, dropdown menu, and teaching me how to code
- Leaflet: an open-source JavaScript library for mobile-friendly interactive maps at http://leafletjs.com/ (BSD license)
- Leaflet.Locate to show your map location at https://github.com/domoritz/leaflet-locatecontrol (MIT license, v52, 2016)
- Leaflet-plugins to display GPX, KML, Google layers at https://github.com/shramov/leaflet-plugins (BSD license, 2016)
- Leaflet.Control.Compass to display rotating compass in mobile at https://github.com/stefanocudini/leaflet-compass (unlicensed, June 2016)
- Leaflet.SlideMenu to display sidebar at https://github.com/unbam/Leaflet.SlideMenu (BSD license)
- Leaflet-distance-markers to display mileage icons for GPX at https://github.com/adoroszlai/leaflet-distance-markers (MIT license, June 2016)
  - requires https://github.com/makinacorpus/Leaflet.GeometryUtil
- Leaflet.Textpath to display arrows on complex routes https://github.com/makinacorpus/Leaflet.TextPath (MIT license)
- Mapzen leaflet-geocoder to search locations (requires free API key) https://github.com/mapzen/leaflet-geocoder (MIT license)

- Code contributions welcome via GitHub dev branch or via email to [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)


## To Do
- finish testing https://jackdougherty.github.io/bikemapcode/tours.html
- change tours.html to index.html (?)
- update all Flickr photo tags to "bikemap" and change tag in code to match
- remove control layer route labels and basemap layer label
- vary route colors in same location
- ask Ilya about way to include Dropdown menu name in URL, or simply use leaflet-hash to point to specific area on map (but dropdown menu would not match?)
- add fitBounds for tours?
- update README to show two different templates
  - bike tour with photos
  - local rides with multiple routes

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
