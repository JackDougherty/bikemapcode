bikemapcode
===========

Cycling groups and individuals can freely use this open-source, mobile-friendly code to display bicycle routes and facilities on their own web sites. Riders with smartphones can automatically find their locations and view different map layers. Anyone can edit the default OpenCycleMap/OpenStreetMap basemap. 

Demo at [bit.ly/bikemapcode](http://jackdougherty.github.io/bikemapcode)

bikemapcode is distributed as-is with no warranty. Code contributions welcome! Submit issues on GitHub or email feedback to jack.dougherty@trincoll.edu

##legend
![legend](https://raw.githubusercontent.com/JackDougherty/bikemapcode/master/images/legend.png "legend")

##layers
###basemaps:
- [OpenCycleMap](http://www.opencyclemap.org/) - draws data from OpenStreetMap, which anyone can edit to add bike lanes, bike shops, etc.
- [OpenStreetMap](http://www.openstreetmap.org/) - the "Wikipedia of maps" that anyone can edit
- ESRI street map, and more to come

###overlay maps:
- display any ride with a GPX layer, such as this [sample Hartford-to-Barkhamstead from bikemap.net](http://www.bikemap.net/en/route/545627-hilly-loop-from-hartford-to-barkhamsted-reservoir)
- display any network of routes ArcGIS server shapefiles, such as [City of Hartford bike lanes](http://gis1.hartford.gov/arcgis/rest/services/OpenData_Community/MapServer/9) and [routes hosted by Cameron Douglass at Trinity College](http://services1.arcgis.com/5rblLCKLgS4Td60j/ArcGIS/rest/services/04212014online/FeatureServer)

##host this code on your own website
- Fork or download the code from this GitHub page
- Customize the index.html page to meet your needs (may require HTML, CSS, JavaScript skills) 
- Host on a live website, such as GitHub Pages (like the demo), or your own domain (more details and example to come)

##to do list - code contributions welcome!
- add screenshot and YouTube video on how to add bike-related content to OpenStreetMap (which takes a few days to appear on OpenCycleMap)
- change auto-locate to locate button https://github.com/domoritz/leaflet-locatecontrol so that view resizes to fit routes
- Flickr and/or Instagram geotagged photos layer -- see Leaflet-Instagram demo https://github.com/turban/Leaflet.Instagram
- add Google Maps bicycling layer - see [Google map test](http://jackdougherty.github.io/bikemapcode/testG.html)
- add Strava popular bike routes layer http://labs.strava.com/heatmap/#13/-72.69000/41.76000/blue/bike
- ESRI-leaflet library to Symbolize Line Features http://jackdougherty.github.io/bikemapcode/testE3.html; or Style line features http://esri.github.io/esri-leaflet/examples/styling-feature-layer-polylines.html
- share map link
- Leaflet-OpenWeatherMap https://github.com/buche/leaflet-openweathermap
- possibly add SeeClickFix bike-related hazards layer - see API http://help.seeclickfix.com/kb/api/api-overview
- Wikipedia points of interest layer
- Weather radar layer

##compare
- [Bikemap.net](http://bikemap.net/en)
- [East Coast Greenway, Wikimapping tool by Steve Spindler & John Zeng](http://map.greenway.org/)

##credits
- Leaflet tutorials http://leafletjs.com/examples.html
- display GPX with http://psha.org.ru/b/leaflet-plugins.html
- display ArcGIS shapefile with http://esri.github.io/esri-leaflet/
- search for location with https://github.com/perliedman/leaflet-control-geocoder
- click map to view coordinates with https://github.com/zimmicz/Leaflet-Coordinates-Control (MIT license)
