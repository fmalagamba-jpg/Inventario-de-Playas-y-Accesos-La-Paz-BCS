var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_playas_golfo_1 = new ol.format.GeoJSON();
var features_playas_golfo_1 = format_playas_golfo_1.readFeatures(json_playas_golfo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_playas_golfo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_playas_golfo_1.addFeatures(features_playas_golfo_1);
var lyr_playas_golfo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_playas_golfo_1, 
                style: style_playas_golfo_1,
                popuplayertitle: 'playas_golfo',
                interactive: true,
                title: '<img src="styles/legend/playas_golfo_1.png" /> playas_golfo'
            });
var format_playas_pacifico_2 = new ol.format.GeoJSON();
var features_playas_pacifico_2 = format_playas_pacifico_2.readFeatures(json_playas_pacifico_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_playas_pacifico_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_playas_pacifico_2.addFeatures(features_playas_pacifico_2);
var lyr_playas_pacifico_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_playas_pacifico_2, 
                style: style_playas_pacifico_2,
                popuplayertitle: 'playas_pacifico',
                interactive: true,
                title: '<img src="styles/legend/playas_pacifico_2.png" /> playas_pacifico'
            });
var format_accesos_playas_golfo_3 = new ol.format.GeoJSON();
var features_accesos_playas_golfo_3 = format_accesos_playas_golfo_3.readFeatures(json_accesos_playas_golfo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_accesos_playas_golfo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_accesos_playas_golfo_3.addFeatures(features_accesos_playas_golfo_3);
var lyr_accesos_playas_golfo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_accesos_playas_golfo_3, 
                style: style_accesos_playas_golfo_3,
                popuplayertitle: 'accesos_playas_golfo',
                interactive: true,
                title: '<img src="styles/legend/accesos_playas_golfo_3.png" /> accesos_playas_golfo'
            });
var format_accesos_playas_pacifico_4 = new ol.format.GeoJSON();
var features_accesos_playas_pacifico_4 = format_accesos_playas_pacifico_4.readFeatures(json_accesos_playas_pacifico_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_accesos_playas_pacifico_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_accesos_playas_pacifico_4.addFeatures(features_accesos_playas_pacifico_4);
var lyr_accesos_playas_pacifico_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_accesos_playas_pacifico_4, 
                style: style_accesos_playas_pacifico_4,
                popuplayertitle: 'accesos_playas_pacifico',
                interactive: true,
                title: '<img src="styles/legend/accesos_playas_pacifico_4.png" /> accesos_playas_pacifico'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_playas_golfo_1.setVisible(true);lyr_playas_pacifico_2.setVisible(true);lyr_accesos_playas_golfo_3.setVisible(true);lyr_accesos_playas_pacifico_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_playas_golfo_1,lyr_playas_pacifico_2,lyr_accesos_playas_golfo_3,lyr_accesos_playas_pacifico_4];
lyr_playas_golfo_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'Litoral': 'Litoral', 'Delegacion': 'Delegacion', 'Subdelega': 'Subdelega', 'Long_m': 'Long_m', 'Co_Ex_X-1': 'Co_Ex_X-1', 'Co_Ex_Y-1': 'Co_Ex_Y-1', 'Co_Ex_X-2': 'Co_Ex_X-2', 'Co_Ex_Y-2': 'Co_Ex_Y-2', 'Dessignaci': 'Dessignaci', 'Formacion': 'Formacion', 'Serv_Disp': 'Serv_Disp', 'Activ_Disp': 'Activ_Disp', 'Proximidad': 'Proximidad', 'Conectivid': 'Conectivid', });
lyr_playas_pacifico_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'Subdelega': 'Subdelega', 'Delegacion': 'Delegacion', 'Litoral': 'Litoral', 'Long_m': 'Long_m', 'Co_Ex_X-1': 'Co_Ex_X-1', 'Co_Ex_Y-1': 'Co_Ex_Y-1', 'Co_Ex_X-2': 'Co_Ex_X-2', 'Co_Ex_Y-2': 'Co_Ex_Y-2', 'Dessignaci': 'Dessignaci', 'Formacion': 'Formacion', 'Serv_Disp': 'Serv_Disp', 'Activ_Disp': 'Activ_Disp', 'Proximidad': 'Proximidad', 'Conectivid': 'Conectivid', });
lyr_accesos_playas_golfo_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'Dist_ZF_RV': 'Dist_ZF_RV', 'Co_ZF_X1': 'Co_ZF_X1', 'Co_ZF_Y1': 'Co_ZF_Y1', 'Co_RV_X2': 'Co_RV_X2', 'Co_RV_Y2': 'Co_RV_Y2', 'Recorrido-': 'Recorrido-', 'Situacion': 'Situacion', });
lyr_accesos_playas_pacifico_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'Dist-ZF-RV': 'Dist-ZF-RV', 'Co_ZF_X1': 'Co_ZF_X1', 'Co_ZF_Y1': 'Co_ZF_Y1', 'Co_RV_X2': 'Co_RV_X2', 'Co_RV_Y2': 'Co_RV_Y2', 'Recorrido': 'Recorrido', 'Situacion': 'Situacion', });
lyr_playas_golfo_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'Litoral': 'TextEdit', 'Delegacion': 'TextEdit', 'Subdelega': 'TextEdit', 'Long_m': 'TextEdit', 'Co_Ex_X-1': 'TextEdit', 'Co_Ex_Y-1': 'TextEdit', 'Co_Ex_X-2': 'TextEdit', 'Co_Ex_Y-2': 'TextEdit', 'Dessignaci': 'TextEdit', 'Formacion': 'TextEdit', 'Serv_Disp': 'TextEdit', 'Activ_Disp': 'TextEdit', 'Proximidad': 'TextEdit', 'Conectivid': 'TextEdit', });
lyr_playas_pacifico_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'Subdelega': 'TextEdit', 'Delegacion': 'TextEdit', 'Litoral': 'TextEdit', 'Long_m': 'Range', 'Co_Ex_X-1': 'TextEdit', 'Co_Ex_Y-1': 'TextEdit', 'Co_Ex_X-2': 'TextEdit', 'Co_Ex_Y-2': 'TextEdit', 'Dessignaci': 'TextEdit', 'Formacion': 'TextEdit', 'Serv_Disp': 'TextEdit', 'Activ_Disp': 'TextEdit', 'Proximidad': 'TextEdit', 'Conectivid': 'TextEdit', });
lyr_accesos_playas_golfo_3.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'Dist_ZF_RV': 'Range', 'Co_ZF_X1': 'TextEdit', 'Co_ZF_Y1': 'TextEdit', 'Co_RV_X2': 'TextEdit', 'Co_RV_Y2': 'TextEdit', 'Recorrido-': 'TextEdit', 'Situacion': 'TextEdit', });
lyr_accesos_playas_pacifico_4.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'Dist-ZF-RV': 'TextEdit', 'Co_ZF_X1': 'TextEdit', 'Co_ZF_Y1': 'TextEdit', 'Co_RV_X2': 'TextEdit', 'Co_RV_Y2': 'TextEdit', 'Recorrido': 'TextEdit', 'Situacion': 'TextEdit', });
lyr_playas_golfo_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'Litoral': 'no label', 'Delegacion': 'no label', 'Subdelega': 'no label', 'Long_m': 'no label', 'Co_Ex_X-1': 'no label', 'Co_Ex_Y-1': 'no label', 'Co_Ex_X-2': 'no label', 'Co_Ex_Y-2': 'no label', 'Dessignaci': 'no label', 'Formacion': 'no label', 'Serv_Disp': 'no label', 'Activ_Disp': 'no label', 'Proximidad': 'no label', 'Conectivid': 'no label', });
lyr_playas_pacifico_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'Subdelega': 'no label', 'Delegacion': 'no label', 'Litoral': 'no label', 'Long_m': 'no label', 'Co_Ex_X-1': 'no label', 'Co_Ex_Y-1': 'no label', 'Co_Ex_X-2': 'no label', 'Co_Ex_Y-2': 'no label', 'Dessignaci': 'no label', 'Formacion': 'no label', 'Serv_Disp': 'no label', 'Activ_Disp': 'no label', 'Proximidad': 'no label', 'Conectivid': 'no label', });
lyr_accesos_playas_golfo_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'Dist_ZF_RV': 'no label', 'Co_ZF_X1': 'no label', 'Co_ZF_Y1': 'no label', 'Co_RV_X2': 'no label', 'Co_RV_Y2': 'no label', 'Recorrido-': 'no label', 'Situacion': 'no label', });
lyr_accesos_playas_pacifico_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'Dist-ZF-RV': 'no label', 'Co_ZF_X1': 'no label', 'Co_ZF_Y1': 'no label', 'Co_RV_X2': 'no label', 'Co_RV_Y2': 'no label', 'Recorrido': 'no label', 'Situacion': 'no label', });
lyr_accesos_playas_pacifico_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});