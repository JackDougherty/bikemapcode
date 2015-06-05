bikemapcode
===========

Display mobile-friendly bike maps on your own website with free and easy-to-modify open-source code, created with Leaflet.js. Distributed as-is with no warranty under [an MIT license](https://raw.githubusercontent.com/JackDougherty/bikemapcode/master/LICENSE). Feedback and code contributions welcome on GitHub or email to [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)

##Demo
[bit.ly/bikemapcode](http://jackdougherty.github.io/bikemapcode)

##Map layer control
###Basemaps:
- [OpenCycleMap](http://www.opencyclemap.org/) displays marked bike routes and lane, bike racks, bike shops, and restrooms from [OpenStreetMap](http://www.openstreetmap.org/), which anyone may edit (like a Wikipedia for maps)
- ESRI street map layer (and other options)

###Overlay maps:
- Display your group's recommended bike rides by uploading a GPX or KML file.
- Display your group's network of bike routes through an ArcGIS server, such as [City of Hartford bike lanes](http://gis1.hartford.gov/arcgis/rest/services/OpenData_Community/MapServer/9) and [HartfordAreaBikeMap layers hosted by Cameron Douglass and Alex Perez at Trinity College](http://services1.arcgis.com/5rblLCKLgS4Td60j/arcgis/rest/services/)

##What the tool does NOT do:
- It does not provide routing directions to bike from point A to B
- It does not work without internet access.

##How to create and host your own version:
Requires a bit of coding skill (or willingness to learn) and a way to host your code on the live web (such as a free GitHub account, using GitHub Pages). For a basic tutorial see http://epress.trincoll.edu/dataviz/chapter/host-html-github/
1) Fork this repository to your free GitHub account, or clone to your desktop, or download the zipped code from this page. To learn basics of hosting and editing code in GitHub.
2) Edit the index.html page as desired.
a) For example, set a new center point and zoom level:
```
var map = L.map('map', {
	center: [41.77, -72.69],
	zoom: 14,
```
b) Modify the source file, color, opacity, and weight of overlay maps:
```
TrinGISPrimaryRoutes = L.esri.featureLayer('http://services1.arcgis.com/5rblLCKLgS4Td60j/ArcGIS/rest/services/PrimaryRoutes/FeatureServer/0',{
		style: function () {
          	return { color: "#4BACC6", opacity: 0.7, weight: 5};
        	}
	}),
```
c) Change the listing of an overlay map in the layer control:
```
var overlayMaps = {
	"Hartford area primary routes (Trinity ArcGIS)": TrinGISPrimaryRoutes,
```
Make sure that names for new layers (such as TrinGISPrimaryRoutes) match perfectly in 2b and 2c.

3) Host the entire folder of code on the live web. Consider these options:

a) Use the free GitHub Pages service, which runs this demo at http://jackdougherty.github.io/bikemapcode

b) If you have access to a web server, host the entire folder at the root level, such as this self-hosted WordPress site http://JackBikes.org/maps/

c) If you do not have access to a web server, but wish to display the map in your organization's web page, try hosting the code in GitHub Pages, and embedding an iframe in your website. For example:
- the Bike West Hartford organization uses a free Weebly account and created this page http://www.bikewesthartford.org/interactive-map.html
- I host this file (and everything in the folder) on my GitHub Pages account http://jackdougherty.github.io/bikemapcode/westhartford.html
- On the Bike West Hartford website, using the admin access, I inserted this simple HTML iframe code, which displays the westhartford.html page inside the map.html page:
```
<iframe src="http://jackdougherty.github.io/bikemapcode/westhartford.html" width="960" height="660" frameborder="0"></iframe>
```
- in the Weebly editor box above the iframe, insert description and link to full-screen version (on GitHub Pages)

##Code credits and open-source licenses
- Leaflet: an open-source JavaScript library for mobile-friendly interactive maps at http://leafletjs.com/ (BSD license)
- Leaflet.Locate to show your map location at https://github.com/domoritz/leaflet-locatecontrol (MIT license)
- Leaflet-control-geocoder to search for a place at https://github.com/perliedman/leaflet-control-geocoder (BSD license)
- Leaflet-plugins to display GPX, KML, Google layers at https://github.com/shramov/leaflet-plugins (BSD license)
- Esri-leaflet to display ArcGIS layers at https://github.com/Esri/esri-leaflet (Apache license)
- Leaflet sidebar-v2 to display slide-in instructions at https://github.com/Turbo87/sidebar-v2 (MIT license)
- Leaflet-distance-markers to display mileage icons at https://github.com/adoroszlai/leaflet-distance-markers (MIT license)
- Leaflet.Control.Compass to display rotating compass in mobile at https://github.com/stefanocudini/leaflet-compass (unlicensed)

##To Do List
This is an amateur coding project. Constructive suggestions and code contributions are welcome on GitHub or via email to [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)
- Clean up custom.css code to fix appearance of controls (I could use help with CSS!)
- Look for better "show my location" plugin or method, since this version is adequate but not respond quickly to turns, etc. Is this a limitation of web apps versus native apps for iOS/Android?
- Figure out how to make full screen button (https://github.com/brunob/leaflet.fullscreen) work inside Weebly site (http://www.bikewesthartford.org/interactive-map.html), or try more responsive theme?
- Improve display of Trinity ArcGIS layer http://bit.ly/1CQvRpk with styling lines http://esri.github.io/esri-leaflet/examples/styling-feature-layer-polylines.html and custom pop-up http://esri.github.io/esri-leaflet/examples/feature-layer-popups.html. Coding this would be easier if all bike routes were in one shapefile with differentiated features, similar to Esri's Portland bike map example.
- Add instructions and screenshots/screencast to explain how anyone can add marked bike lanes etc. to OpenStreetMap, and explain how it takes a few days for this content to appear on OpenCycleMap.
- Add code to display an overlay of Flickr geotagged photos with "bike" in title, such as this demo http://jackdougherty.github.io/bikemapcode/portland2014.html
- Add code to display an overlay of Instagram geotagged photos/videos from a user or group account, with marker clustering, using Leaflet-Instagram plugin (https://github.com/turban/Leaflet.Instagram) - see demo: http://blog.thematicmapping.org/2014/06/showing-instagram-photos-and-videos-on.html
- Add a close button to leaflet-sidebarV2
- Look at Leaflet-Plugins for code sample that automatically resizes map to fit bounded area of GPX layer
- Add Google Maps bicycling layer (which did not work for me in summer 2014; need to try again)
- Add Strava popular bike routes layer http://labs.strava.com/heatmap/#13/-72.69000/41.76000/blue/bike
- Possibly add SeeClickFix bike-related hazards layer - see API http://help.seeclickfix.com/kb/api/api-overview

##Compare with related tools
- [Bikemap.net](http://bikemap.net/en)
- [East Coast Greenway, Wikimapping tool by Steve Spindler & John Zeng](http://map.greenway.org/)
- and many more
