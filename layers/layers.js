ol.proj.get("EPSG:26918").setExtent([465394.554377, 4448226.861692, 666049.207946, 4571292.175535]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_nyc_neighborhoods_0 = new ol.format.GeoJSON();
var features_nyc_neighborhoods_0 = format_nyc_neighborhoods_0.readFeatures(json_nyc_neighborhoods_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26918'});
var jsonSource_nyc_neighborhoods_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_nyc_neighborhoods_0.addFeatures(features_nyc_neighborhoods_0);var lyr_nyc_neighborhoods_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nyc_neighborhoods_0, 
                style: style_nyc_neighborhoods_0,
                title: '<img src="styles/legend/nyc_neighborhoods_0.png" /> nyc_neighborhoods'
            });var format_nyc_census_blocks_1 = new ol.format.GeoJSON();
var features_nyc_census_blocks_1 = format_nyc_census_blocks_1.readFeatures(json_nyc_census_blocks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26918'});
var jsonSource_nyc_census_blocks_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_nyc_census_blocks_1.addFeatures(features_nyc_census_blocks_1);var lyr_nyc_census_blocks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nyc_census_blocks_1, 
                style: style_nyc_census_blocks_1,
                title: '<img src="styles/legend/nyc_census_blocks_1.png" /> nyc_census_blocks'
            });var format_nyc_streets_2 = new ol.format.GeoJSON();
var features_nyc_streets_2 = format_nyc_streets_2.readFeatures(json_nyc_streets_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26918'});
var jsonSource_nyc_streets_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_nyc_streets_2.addFeatures(features_nyc_streets_2);var lyr_nyc_streets_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nyc_streets_2, maxResolution:28004.4661523,

                style: style_nyc_streets_2,
                title: '<img src="styles/legend/nyc_streets_2.png" /> nyc_streets'
            });var format_nyc_homicides_3 = new ol.format.GeoJSON();
var features_nyc_homicides_3 = format_nyc_homicides_3.readFeatures(json_nyc_homicides_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26918'});
var jsonSource_nyc_homicides_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_nyc_homicides_3.addFeatures(features_nyc_homicides_3);var lyr_nyc_homicides_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nyc_homicides_3, 
                style: style_nyc_homicides_3,
                title: '<img src="styles/legend/nyc_homicides_3.png" /> nyc_homicides'
            });

lyr_nyc_neighborhoods_0.setVisible(true);lyr_nyc_census_blocks_1.setVisible(true);lyr_nyc_streets_2.setVisible(true);lyr_nyc_homicides_3.setVisible(true);
var layersList = [baseLayer,lyr_nyc_neighborhoods_0,lyr_nyc_census_blocks_1,lyr_nyc_streets_2,lyr_nyc_homicides_3];
lyr_nyc_neighborhoods_0.set('fieldAliases', {'BORONAME': 'BORONAME', 'NAME': 'NAME', });
lyr_nyc_census_blocks_1.set('fieldAliases', {'BLKID': 'BLKID', 'POPN_TOTAL': 'POPN_TOTAL', 'POPN_WHITE': 'POPN_WHITE', 'POPN_BLACK': 'POPN_BLACK', 'POPN_NATIV': 'POPN_NATIV', 'POPN_ASIAN': 'POPN_ASIAN', 'POPN_OTHER': 'POPN_OTHER', 'BORONAME': 'BORONAME', });
lyr_nyc_streets_2.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', 'ONEWAY': 'ONEWAY', 'TYPE': 'TYPE', });
lyr_nyc_homicides_3.set('fieldAliases', {'INCIDENT_D': 'ID_INCI', 'BORONAME': 'BORO', 'NUM_VICTIM': 'NUM_VIC', 'PRIMARY_MO': 'PR_MO', 'ID': 'ID', 'WEAPON': 'WEA', 'LIGHT_DARK': 'LIGHT', 'YEAR': 'YEAR', });
lyr_nyc_neighborhoods_0.set('fieldImages', {'BORONAME': 'TextEdit', 'NAME': 'TextEdit', });
lyr_nyc_census_blocks_1.set('fieldImages', {'BLKID': 'TextEdit', 'POPN_TOTAL': 'TextEdit', 'POPN_WHITE': 'TextEdit', 'POPN_BLACK': 'TextEdit', 'POPN_NATIV': 'TextEdit', 'POPN_ASIAN': 'TextEdit', 'POPN_OTHER': 'TextEdit', 'BORONAME': 'TextEdit', });
lyr_nyc_streets_2.set('fieldImages', {'ID': 'Hidden', 'NAME': 'Photo', 'ONEWAY': 'Hidden', 'TYPE': 'Hidden', });
lyr_nyc_homicides_3.set('fieldImages', {'INCIDENT_D': 'TextEdit', 'BORONAME': 'TextEdit', 'NUM_VICTIM': 'TextEdit', 'PRIMARY_MO': 'TextEdit', 'ID': 'TextEdit', 'WEAPON': 'TextEdit', 'LIGHT_DARK': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_nyc_neighborhoods_0.set('fieldLabels', {'BORONAME': 'no label', 'NAME': 'no label', });
lyr_nyc_census_blocks_1.set('fieldLabels', {'BLKID': 'no label', 'POPN_TOTAL': 'no label', 'POPN_WHITE': 'no label', 'POPN_BLACK': 'no label', 'POPN_NATIV': 'no label', 'POPN_ASIAN': 'no label', 'POPN_OTHER': 'no label', 'BORONAME': 'no label', });
lyr_nyc_streets_2.set('fieldLabels', {'NAME': 'no label', });
lyr_nyc_homicides_3.set('fieldLabels', {'INCIDENT_D': 'no label', 'BORONAME': 'no label', 'NUM_VICTIM': 'no label', 'PRIMARY_MO': 'no label', 'ID': 'no label', 'WEAPON': 'no label', 'LIGHT_DARK': 'no label', 'YEAR': 'no label', });
lyr_nyc_homicides_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});