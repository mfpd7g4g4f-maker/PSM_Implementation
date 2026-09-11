ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([146.934180, -6.742480, 147.031560, -6.645090]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_PermanentSurveyMarks_2 = new ol.format.GeoJSON();
var features_PermanentSurveyMarks_2 = format_PermanentSurveyMarks_2.readFeatures(json_PermanentSurveyMarks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PermanentSurveyMarks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermanentSurveyMarks_2.addFeatures(features_PermanentSurveyMarks_2);
cluster_PermanentSurveyMarks_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PermanentSurveyMarks_2
});
var lyr_PermanentSurveyMarks_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PermanentSurveyMarks_2, 
                style: style_PermanentSurveyMarks_2,
                popuplayertitle: 'Permanent Survey Marks',
                interactive: true,
                title: '<img src="styles/legend/PermanentSurveyMarks_2.png" /> Permanent Survey Marks'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_PermanentSurveyMarks_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ESRISatellite_1,lyr_PermanentSurveyMarks_2];
lyr_PermanentSurveyMarks_2.set('fieldAliases', {'Site_ID': 'Site_ID', 'Site_ID_Superseded': 'Site_ID_Superseded', 'Station_Name': 'Station_Name', 'Last_Observation': 'Last_Observation', 'Last_Adjustment': 'Last_Adjustment', 'PNGMG2020_Zone_55_Easting': 'PNGMG2020_Zone_55_Easting', 'PNGMG2020_Zone_55_Northing': 'PNGMG2020_Zone_55_Northing', 'PNGMG2020_Zone_55_Ellipsoid_Height': 'PNGMG2020_Zone_55_Ellipsoid_Height', 'PNGMG2020_Longitude_Decimal': 'PNGMG2020_Longitude_Decimal', 'PNGMG2020_Latitude_Decimal': 'PNGMG2020_Latitude_Decimal', 'Elevation_MSL_PNG08_2020_Metres': 'Elevation_MSL_PNG08_2020_Metres', 'Combined_SF_Ground_to_Grid': 'Combined_SF_Ground_to_Grid', 'E_Positional_Uncertainty_95CI': 'E_Positional_Uncertainty_95CI', 'N_Positional_Uncertainty_95CI': 'N_Positional_Uncertainty_95CI', 'h_Positional_Uncertainty_95CI': 'h_Positional_Uncertainty_95CI', 'LAE2020_Easting': 'LAE2020_Easting', 'LAE2020_Northing': 'LAE2020_Northing', 'Velocity_Type_Estimated': 'Velocity_Type_Estimated', 'Topocentric_E_Velocity_mmyr': 'Topocentric_E_Velocity_mmyr', 'Topocentric_N_Velocity_mmyr': 'Topocentric_N_Velocity_mmyr', 'Topocentric_U_Velocity_mmyr': 'Topocentric_U_Velocity_mmyr', 'E_Velocity_Uncertainty_95CI_mmyr': 'E_Velocity_Uncertainty_95CI_mmyr', 'N_Velocity_Uncertainty_95CI_mmyr': 'N_Velocity_Uncertainty_95CI_mmyr', 'U_Velocity_Uncertainty_85CI_mmyr': 'U_Velocity_Uncertainty_85CI_mmyr', 'PNGMG94_Zone_55_Easting': 'PNGMG94_Zone_55_Easting', 'PNGMG94_Zone_55_Northing': 'PNGMG94_Zone_55_Northing', 'PNG94_ellipsoid_height_metres': 'PNG94_ellipsoid_height_metres', 'PNG94_longitude_decimal': 'PNG94_longitude_decimal', 'PNG94_latitude_decimal': 'PNG94_latitude_decimal', 'Photo_Path': 'Photo_Path', 'Date_Taken': 'Date_Taken', 'Photo_Type': 'Photo_Type', 'Photo_Description': 'Photo_Description', 'Sketch_Path': 'Sketch_Path', 'Date_Sketched': 'Date_Sketched', 'Sketch_Type': 'Sketch_Type', 'Sketch_By': 'Sketch_By', 'Remarks': 'Remarks', });
lyr_PermanentSurveyMarks_2.set('fieldImages', {'Site_ID': 'TextEdit', 'Site_ID_Superseded': 'TextEdit', 'Station_Name': 'TextEdit', 'Last_Observation': 'TextEdit', 'Last_Adjustment': 'TextEdit', 'PNGMG2020_Zone_55_Easting': 'TextEdit', 'PNGMG2020_Zone_55_Northing': 'TextEdit', 'PNGMG2020_Zone_55_Ellipsoid_Height': 'TextEdit', 'PNGMG2020_Longitude_Decimal': 'TextEdit', 'PNGMG2020_Latitude_Decimal': 'TextEdit', 'Elevation_MSL_PNG08_2020_Metres': 'TextEdit', 'Combined_SF_Ground_to_Grid': 'TextEdit', 'E_Positional_Uncertainty_95CI': 'TextEdit', 'N_Positional_Uncertainty_95CI': 'TextEdit', 'h_Positional_Uncertainty_95CI': 'TextEdit', 'LAE2020_Easting': 'TextEdit', 'LAE2020_Northing': 'TextEdit', 'Velocity_Type_Estimated': 'TextEdit', 'Topocentric_E_Velocity_mmyr': 'TextEdit', 'Topocentric_N_Velocity_mmyr': 'TextEdit', 'Topocentric_U_Velocity_mmyr': 'TextEdit', 'E_Velocity_Uncertainty_95CI_mmyr': 'TextEdit', 'N_Velocity_Uncertainty_95CI_mmyr': 'TextEdit', 'U_Velocity_Uncertainty_85CI_mmyr': 'TextEdit', 'PNGMG94_Zone_55_Easting': 'TextEdit', 'PNGMG94_Zone_55_Northing': 'TextEdit', 'PNG94_ellipsoid_height_metres': 'TextEdit', 'PNG94_longitude_decimal': 'TextEdit', 'PNG94_latitude_decimal': 'TextEdit', 'Photo_Path': 'ExternalResource', 'Date_Taken': 'TextEdit', 'Photo_Type': 'TextEdit', 'Photo_Description': 'TextEdit', 'Sketch_Path': 'ExternalResource', 'Date_Sketched': 'TextEdit', 'Sketch_Type': 'TextEdit', 'Sketch_By': 'TextEdit', 'Remarks': 'TextEdit', });
lyr_PermanentSurveyMarks_2.set('fieldLabels', {'Site_ID': 'inline label - visible with data', 'Site_ID_Superseded': 'inline label - visible with data', 'Station_Name': 'inline label - visible with data', 'Last_Observation': 'inline label - visible with data', 'Last_Adjustment': 'inline label - visible with data', 'PNGMG2020_Zone_55_Easting': 'inline label - visible with data', 'PNGMG2020_Zone_55_Northing': 'inline label - visible with data', 'PNGMG2020_Zone_55_Ellipsoid_Height': 'inline label - visible with data', 'PNGMG2020_Longitude_Decimal': 'inline label - visible with data', 'PNGMG2020_Latitude_Decimal': 'inline label - visible with data', 'Elevation_MSL_PNG08_2020_Metres': 'inline label - visible with data', 'Combined_SF_Ground_to_Grid': 'inline label - visible with data', 'E_Positional_Uncertainty_95CI': 'inline label - visible with data', 'N_Positional_Uncertainty_95CI': 'inline label - visible with data', 'h_Positional_Uncertainty_95CI': 'inline label - visible with data', 'LAE2020_Easting': 'inline label - visible with data', 'LAE2020_Northing': 'inline label - visible with data', 'Velocity_Type_Estimated': 'inline label - visible with data', 'Topocentric_E_Velocity_mmyr': 'inline label - visible with data', 'Topocentric_N_Velocity_mmyr': 'inline label - visible with data', 'Topocentric_U_Velocity_mmyr': 'inline label - visible with data', 'E_Velocity_Uncertainty_95CI_mmyr': 'inline label - visible with data', 'N_Velocity_Uncertainty_95CI_mmyr': 'inline label - visible with data', 'U_Velocity_Uncertainty_85CI_mmyr': 'inline label - visible with data', 'PNGMG94_Zone_55_Easting': 'inline label - visible with data', 'PNGMG94_Zone_55_Northing': 'inline label - visible with data', 'PNG94_ellipsoid_height_metres': 'inline label - visible with data', 'PNG94_longitude_decimal': 'inline label - visible with data', 'PNG94_latitude_decimal': 'inline label - visible with data', 'Photo_Path': 'inline label - visible with data', 'Date_Taken': 'inline label - visible with data', 'Photo_Type': 'inline label - visible with data', 'Photo_Description': 'inline label - visible with data', 'Sketch_Path': 'inline label - visible with data', 'Date_Sketched': 'inline label - visible with data', 'Sketch_Type': 'inline label - visible with data', 'Sketch_By': 'inline label - visible with data', 'Remarks': 'inline label - visible with data', });
lyr_PermanentSurveyMarks_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});