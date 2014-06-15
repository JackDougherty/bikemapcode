bikemapcode
===========

mobile-friendly bicycle maps using free open-source code, designed for cycling groups to fork or download, customize, and host on their own web sites. Code contributions welcome!

demo at http://jackdougherty.github.io/bikemapcode

#legend
![legend](https://raw.githubusercontent.com/JackDougherty/bikemapcode/master/images/legend.png "legend")

#layers
##basemaps:
- [OpenCycleMap](http://www.opencyclemap.org/) - draws data from OpenStreetMap, which anyone can edit to add bike lanes, bike shops, etc.
- [OpenStreetMap](http://www.openstreetmap.org/) - the "Wikipedia of maps" that anyone can edit
- ESRI street map, and more to come - see [Google map test] (http://jackdougherty.github.io/bikemapcode/testG.html)

##overlay maps:
- display any ride with a GPX layer, such as this [sample Hartford-to-Barkhamstead from bikemap.net](http://www.bikemap.net/en/route/545627-hilly-loop-from-hartford-to-barkhamsted-reservoir)
- display any network of routes ArcGIS server shapefiles, such as [City of Hartford bike lanes] (http://gis1.hartford.gov/arcgis/rest/services/OpenData_Community/MapServer/9) and [routes hosted by Cameron Douglass at Trinity College](http://services1.arcgis.com/5rblLCKLgS4Td60j/ArcGIS/rest/services/04212014online/FeatureServer)

#to do list:
- add screenshot and YouTube video on how to add bike-related content to OCM/OSM
- add Google Maps layer and bicycling layer
- ESRI-leaflet library to Symbolize Line Features http://jackdougherty.github.io/bikemapcode/testE3.html
- add geosearch
- add coordinates
- share map link
- Leaflet-OpenWeatherMap https://github.com/buche/leaflet-openweathermap
- possibly add SeeClickFix bike-related hazards layer - see API http://help.seeclickfix.com/kb/api/api-overview
- Flickr geotagged photo layer
- KML layer
- Wikipedia points of interest layer
- Weather radar layer

#credits
- Leaflet tutorials http://leafletjs.com/examples.html
- display GPX with http://psha.org.ru/b/leaflet-plugins.html
- display ArcGIS shapefile with http://esri.github.io/esri-leaflet/

#compare
- [Bikemap.net](http://bikemap.net/en)
- [East Coast Greenway, Wikimapping tool by Steve Spindler & John Zeng](http://map.greenway.org/)

#feedback
bikemapcode is an amateur as-is project. Code contributions welcome! Email feedback to jack.dougherty@trincoll.edu
