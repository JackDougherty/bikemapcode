bikemapcode
===========

Free map code for your bike group's website. Cycling organizations may freely use this mobile-friendly tool to display recommended bicycle routes and facilities on their own web sites. Riders with smartphones can automatically find their locations and view different map layers. Anyone may edit bike lanes, racks, shops on the default basemap: OpenStreetMap/OpenCycleMap. Customize to display recommended rides or route networks by adding GPX, KML, or ArcGIS overlay maps. This open-source Leaflet code is freely distributed as-is with no warranty under [an MIT license](https://raw.githubusercontent.com/JackDougherty/bikemapcode/master/LICENSE). Code contributions welcome on GitHub or email feedback to [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)

###Demo at [bit.ly/bikemapcode](http://jackdougherty.github.io/bikemapcode)

##Legend
![legend](https://raw.githubusercontent.com/JackDougherty/bikemapcode/master/legend.png "legend")

##Layers
###Basemaps:
- [OpenCycleMap](http://www.opencyclemap.org/) - draws data from [OpenStreetMap](http://www.openstreetmap.org/), the "wikipedia of maps" that anyone can edit to add dedicated bike lanes, racks, shops, etc.
- ESRI street map, and more to come

###Overlay maps:
- display your group's recommended rides by uploading a GPX or KML layer
- display a network of bike routes through an ArcGIS server, such as [City of Hartford bike lanes](http://gis1.hartford.gov/arcgis/rest/services/OpenData_Community/MapServer/9) and [routes hosted by Cameron Douglass at Trinity College](http://services1.arcgis.com/5rblLCKLgS4Td60j/ArcGIS/rest/services/04212014online/FeatureServer)

##Code credits and open-source licenses
- Leaflet: an open-source JavaScript library for mobile-friendly interactive maps at http://leafletjs.com/ (BSD license)
- Leaflet.Locate to show your map location at https://github.com/domoritz/leaflet-locatecontrol (MIT license)
- Leaflet-control-geocoder to search and locate places at https://github.com/perliedman/leaflet-control-geocoder (BSD license)
- Leaflet-plugins to display GPX, KML, Google layers at https://github.com/shramov/leaflet-plugins (BSD license)
- ESRI-leaflet to display ArcGIS shapefiles at https://github.com/Esri/esri-leaflet (Apache license)

Testing or available only in selected versions:
- Leaflet-Coordinates-Control to display latitude & longitude at https://github.com/zimmicz/Leaflet-Coordinates-Control (MIT license)
- Leaflet-sidebar to display slide-in instructions at https://github.com/turbo87/leaflet-sidebar/ (MIT license)
- Leaflet.Control.Fullscreen to add a full-screen button at https://github.com/brunob/leaflet.fullscreen (BSD license)
- Leaflet.Control.Compass to display rotating compass in mobile at https://github.com/stefanocudini/leaflet-compass (unlicensed)
- Leaflet.EasyButton to add control buttons with Font Awesome Icons at Permission is hereby granted, free of charge, to any person obtaining a copy of this software (MIT license)

##Host this code on your own website
- Fork to your GitHub, or clone to desktop, or download the zipped code from this page
- Customize the index.html page to meet your needs (may require HTML, CSS, JavaScript skills)
- Host on a live website, such as GitHub Pages (like the demo), or the root folder of own domain (more details and example to come)

##Compare with related tools
- [Bikemap.net](http://bikemap.net/en)
- [East Coast Greenway, Wikimapping tool by Steve Spindler & John Zeng](http://map.greenway.org/)

##To Do list - code contributions welcome!
- add screenshot and YouTube video on how to add bike-related content to OpenStreetMap (which takes a few days to appear on OpenCycleMap)
- Flickr and/or Instagram geotagged photos layer -- [see this example](http://jackdougherty.github.io/Leaflet.Instagram/examples/)-- based on Leaflet-Instagram demo https://github.com/turban/Leaflet.Instagram
- add Google Maps bicycling layer - see [Google map test](http://jackdougherty.github.io/bikemapcode/testG.html)
- add Strava popular bike routes layer http://labs.strava.com/heatmap/#13/-72.69000/41.76000/blue/bike
- ESRI-leaflet library to Symbolize Line Features http://jackdougherty.github.io/bikemapcode/testE3.html
- share map link
- Leaflet-OpenWeatherMap https://github.com/buche/leaflet-openweathermap
- possibly add SeeClickFix bike-related hazards layer - see API http://help.seeclickfix.com/kb/api/api-overview
- Wikipedia points of interest layer
- Weather radar layer
