var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_Manzanas_1k_CCAS_Poblacin_1 = new ol.format.GeoJSON();
var features_Manzanas_1k_CCAS_Poblacin_1 = format_Manzanas_1k_CCAS_Poblacin_1.readFeatures(json_Manzanas_1k_CCAS_Poblacin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_1k_CCAS_Poblacin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_1k_CCAS_Poblacin_1.addFeatures(features_Manzanas_1k_CCAS_Poblacin_1);
var lyr_Manzanas_1k_CCAS_Poblacin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manzanas_1k_CCAS_Poblacin_1, 
                style: style_Manzanas_1k_CCAS_Poblacin_1,
                popuplayertitle: 'Manzanas_1k_CCAS_Población',
                interactive: false,
    title: 'Manzanas_1k_CCAS_Población<br />\
    <img src="styles/legend/Manzanas_1k_CCAS_Poblacin_1_0.png" /> 0 - 84<br />\
    <img src="styles/legend/Manzanas_1k_CCAS_Poblacin_1_1.png" /> 84 - 168<br />\
    <img src="styles/legend/Manzanas_1k_CCAS_Poblacin_1_2.png" /> 168 - 247<br />\
    <img src="styles/legend/Manzanas_1k_CCAS_Poblacin_1_3.png" /> 247 - 353<br />\
    <img src="styles/legend/Manzanas_1k_CCAS_Poblacin_1_4.png" /> 353 - 760<br />' });
var format_Buffer1km_2 = new ol.format.GeoJSON();
var features_Buffer1km_2 = format_Buffer1km_2.readFeatures(json_Buffer1km_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer1km_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer1km_2.addFeatures(features_Buffer1km_2);
var lyr_Buffer1km_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer1km_2, 
                style: style_Buffer1km_2,
                popuplayertitle: 'Buffer 1 km',
                interactive: false,
                title: '<img src="styles/legend/Buffer1km_2.png" /> Buffer 1 km'
            });
var format_DENUE1km_3 = new ol.format.GeoJSON();
var features_DENUE1km_3 = format_DENUE1km_3.readFeatures(json_DENUE1km_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DENUE1km_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DENUE1km_3.addFeatures(features_DENUE1km_3);
var lyr_DENUE1km_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DENUE1km_3, 
                style: style_DENUE1km_3,
                popuplayertitle: 'DENUE 1 km',
                interactive: true,
                title: '<img src="styles/legend/DENUE1km_3.png" /> DENUE 1 km'
            });
var format_Unidadesdesalud_4 = new ol.format.GeoJSON();
var features_Unidadesdesalud_4 = format_Unidadesdesalud_4.readFeatures(json_Unidadesdesalud_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unidadesdesalud_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unidadesdesalud_4.addFeatures(features_Unidadesdesalud_4);
cluster_Unidadesdesalud_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Unidadesdesalud_4
});
var lyr_Unidadesdesalud_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Unidadesdesalud_4, 
                style: style_Unidadesdesalud_4,
                popuplayertitle: 'Unidades de salud',
                interactive: true,
                title: '<img src="styles/legend/Unidadesdesalud_4.png" /> Unidades de salud'
            });
var format_LugaresdeintersSaludPblica_5 = new ol.format.GeoJSON();
var features_LugaresdeintersSaludPblica_5 = format_LugaresdeintersSaludPblica_5.readFeatures(json_LugaresdeintersSaludPblica_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LugaresdeintersSaludPblica_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LugaresdeintersSaludPblica_5.addFeatures(features_LugaresdeintersSaludPblica_5);
var lyr_LugaresdeintersSaludPblica_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LugaresdeintersSaludPblica_5, 
                style: style_LugaresdeintersSaludPblica_5,
                popuplayertitle: 'Lugares de interés - Salud Pública',
                interactive: true,
    title: 'Lugares de interés - Salud Pública<br />\
    <img src="styles/legend/LugaresdeintersSaludPblica_5_0.png" /> Unidad deportiva<br />\
    <img src="styles/legend/LugaresdeintersSaludPblica_5_1.png" /> Escuelas preescolares<br />\
    <img src="styles/legend/LugaresdeintersSaludPblica_5_2.png" /> Escuelas primarias<br />\
    <img src="styles/legend/LugaresdeintersSaludPblica_5_3.png" /> Escuela secundaria<br />\
    <img src="styles/legend/LugaresdeintersSaludPblica_5_4.png" /> DIF Municipal 4<br />' });
var format_UnidadModeloCUCS_6 = new ol.format.GeoJSON();
var features_UnidadModeloCUCS_6 = format_UnidadModeloCUCS_6.readFeatures(json_UnidadModeloCUCS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadModeloCUCS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadModeloCUCS_6.addFeatures(features_UnidadModeloCUCS_6);
var lyr_UnidadModeloCUCS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadModeloCUCS_6, 
                style: style_UnidadModeloCUCS_6,
                popuplayertitle: 'Unidad Modelo CUCS',
                interactive: false,
                title: '<img src="styles/legend/UnidadModeloCUCS_6.png" /> Unidad Modelo CUCS'
            });

lyr_CartoLight_0.setVisible(true);lyr_Manzanas_1k_CCAS_Poblacin_1.setVisible(false);lyr_Buffer1km_2.setVisible(true);lyr_DENUE1km_3.setVisible(false);lyr_Unidadesdesalud_4.setVisible(false);lyr_LugaresdeintersSaludPblica_5.setVisible(true);lyr_UnidadModeloCUCS_6.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_Manzanas_1k_CCAS_Poblacin_1,lyr_Buffer1km_2,lyr_DENUE1km_3,lyr_Unidadesdesalud_4,lyr_LugaresdeintersSaludPblica_5,lyr_UnidadModeloCUCS_6];
lyr_Manzanas_1k_CCAS_Poblacin_1.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'CVEGEO', 'POB1': 'POB1', 'POB2': 'POB2', 'POB2_R': 'POB2_R', 'POB4': 'POB4', 'POB4_R': 'POB4_R', 'POB5': 'POB5', 'POB5_R': 'POB5_R', 'POB6': 'POB6', 'POB6_R': 'POB6_R', 'POB7': 'POB7', 'POB7_R': 'POB7_R', 'POB8': 'POB8', 'POB8_R': 'POB8_R', 'POB9': 'POB9', 'POB9_R': 'POB9_R', 'POB10': 'POB10', 'POB10_R': 'POB10_R', 'POB11': 'POB11', 'POB11_R': 'POB11_R', 'POB12': 'POB12', 'POB12_R': 'POB12_R', 'POB13': 'POB13', 'POB13_R': 'POB13_R', 'POB14': 'POB14', 'POB14_R': 'POB14_R', 'POB15': 'POB15', 'POB15_R': 'POB15_R', 'POB17': 'POB17', 'POB17_R': 'POB17_R', 'POB18': 'POB18', 'POB18_R': 'POB18_R', 'POB19': 'POB19', 'POB19_R': 'POB19_R', 'POB20': 'POB20', 'POB20_R': 'POB20_R', 'POB21': 'POB21', 'POB21_R': 'POB21_R', 'POB22': 'POB22', 'POB22_R': 'POB22_R', 'POB23': 'POB23', 'POB23_R': 'POB23_R', 'POB24': 'POB24', 'POB24_R': 'POB24_R', 'POB25': 'POB25', 'POB25_R': 'POB25_R', 'POB42': 'POB42', 'POB42_R': 'POB42_R', 'POB43': 'POB43', 'POB43_R': 'POB43_R', 'POB45': 'POB45', 'POB45_R': 'POB45_R', 'POB46': 'POB46', 'POB46_R': 'POB46_R', 'POB47': 'POB47', 'POB47_R': 'POB47_R', 'POB48': 'POB48', 'POB48_R': 'POB48_R', 'POB49': 'POB49', 'POB49_R': 'POB49_R', 'POB50': 'POB50', 'POB50_R': 'POB50_R', 'POB51': 'POB51', 'POB51_R': 'POB51_R', 'POB52': 'POB52', 'POB52_R': 'POB52_R', 'POB53': 'POB53', 'POB53_R': 'POB53_R', 'POB54': 'POB54', 'POB54_R': 'POB54_R', 'POB55': 'POB55', 'POB55_R': 'POB55_R', 'POB56': 'POB56', 'POB56_R': 'POB56_R', 'POB57': 'POB57', 'POB57_R': 'POB57_R', 'POB59': 'POB59', 'POB59_R': 'POB59_R', 'POB60': 'POB60', 'POB60_R': 'POB60_R', 'POB61': 'POB61', 'POB61_R': 'POB61_R', 'POB62': 'POB62', 'POB62_R': 'POB62_R', 'POB63': 'POB63', 'POB63_R': 'POB63_R', 'POB64': 'POB64', 'POB64_R': 'POB64_R', 'POB65': 'POB65', 'POB65_R': 'POB65_R', 'POB66': 'POB66', 'POB66_R': 'POB66_R', 'POB67': 'POB67', 'POB67_R': 'POB67_R', 'POB84': 'POB84', 'POB84_R': 'POB84_R', 'POB85': 'POB85', 'POB85_R': 'POB85_R', 'POB87': 'POB87', 'POB87_R': 'POB87_R', 'POB88': 'POB88', 'POB88_R': 'POB88_R', 'POB89': 'POB89', 'POB89_R': 'POB89_R', 'POB90': 'POB90', 'POB90_R': 'POB90_R', 'POB91': 'POB91', 'POB91_R': 'POB91_R', 'POB92': 'POB92', 'POB92_R': 'POB92_R', 'POB93': 'POB93', 'POB93_R': 'POB93_R', 'POB94': 'POB94', 'POB94_R': 'POB94_R', 'POB95': 'POB95', 'POB95_R': 'POB95_R', 'POB96': 'POB96', 'POB96_R': 'POB96_R', 'POB97': 'POB97', 'POB97_R': 'POB97_R', 'POB98': 'POB98', 'POB98_R': 'POB98_R', 'POB100': 'POB100', 'POB100_R': 'POB100_R', 'POB101': 'POB101', 'POB101_R': 'POB101_R', 'POB102': 'POB102', 'POB102_R': 'POB102_R', 'POB103': 'POB103', 'POB103_R': 'POB103_R', 'POB104': 'POB104', 'POB104_R': 'POB104_R', 'POB105': 'POB105', 'POB105_R': 'POB105_R', 'POB106': 'POB106', 'POB106_R': 'POB106_R', 'POB107': 'POB107', 'POB107_R': 'POB107_R', 'POB108': 'POB108', 'POB108_R': 'POB108_R', 'POB125_R': 'POB125_R', 'POB126_R': 'POB126_R', 'POB127_R': 'POB127_R', 'POB128_R': 'POB128_R', 'POB129_R': 'POB129_R', 'POB130_R': 'POB130_R', 'POB131_R': 'POB131_R', 'POB132_R': 'POB132_R', 'POB133_R': 'POB133_R', 'POB134_R': 'POB134_R', 'POB3': 'POB3', 'POB3_R': 'POB3_R', 'POB16': 'POB16', 'POB16_R': 'POB16_R', 'POB26': 'POB26', 'POB26_R': 'POB26_R', 'POB27': 'POB27', 'POB27_R': 'POB27_R', 'POB28': 'POB28', 'POB28_R': 'POB28_R', 'POB29': 'POB29', 'POB29_R': 'POB29_R', 'POB30': 'POB30', 'POB30_R': 'POB30_R', 'POB31': 'POB31', 'POB31_R': 'POB31_R', 'POB32': 'POB32', 'POB32_R': 'POB32_R', 'POB33': 'POB33', 'POB33_R': 'POB33_R', 'POB34': 'POB34', 'POB34_R': 'POB34_R', 'POB35': 'POB35', 'POB35_R': 'POB35_R', 'POB36': 'POB36', 'POB36_R': 'POB36_R', 'POB37': 'POB37', 'POB37_R': 'POB37_R', 'POB38': 'POB38', 'POB38_R': 'POB38_R', 'POB39': 'POB39', 'POB39_R': 'POB39_R', 'POB40': 'POB40', 'POB40_R': 'POB40_R', 'POB41': 'POB41', 'POB41_R': 'POB41_R', 'POB44': 'POB44', 'POB44_R': 'POB44_R', 'POB58': 'POB58', 'POB58_R': 'POB58_R', 'POB68': 'POB68', 'POB68_R': 'POB68_R', 'POB69': 'POB69', 'POB69_R': 'POB69_R', 'POB70': 'POB70', 'POB70_R': 'POB70_R', 'POB71': 'POB71', 'POB71_R': 'POB71_R', 'POB72': 'POB72', 'POB72_R': 'POB72_R', 'POB73': 'POB73', 'POB73_R': 'POB73_R', 'POB74': 'POB74', 'POB74_R': 'POB74_R', 'POB75': 'POB75', 'POB75_R': 'POB75_R', 'POB76': 'POB76', 'POB76_R': 'POB76_R', 'POB77': 'POB77', 'POB77_R': 'POB77_R', 'POB78': 'POB78', 'POB78_R': 'POB78_R', 'POB79': 'POB79', 'POB79_R': 'POB79_R', 'POB80': 'POB80', 'POB80_R': 'POB80_R', 'POB81': 'POB81', 'POB81_R': 'POB81_R', 'POB82': 'POB82', 'POB82_R': 'POB82_R', 'POB83': 'POB83', 'POB83_R': 'POB83_R', 'POB86': 'POB86', 'POB86_R': 'POB86_R', 'POB99': 'POB99', 'POB99_R': 'POB99_R', 'POB109': 'POB109', 'POB109_R': 'POB109_R', 'POB110': 'POB110', 'POB110_R': 'POB110_R', 'POB111': 'POB111', 'POB111_R': 'POB111_R', 'POB112': 'POB112', 'POB112_R': 'POB112_R', 'POB113': 'POB113', 'POB113_R': 'POB113_R', 'POB114': 'POB114', 'POB114_R': 'POB114_R', 'POB115': 'POB115', 'POB115_R': 'POB115_R', 'POB116': 'POB116', 'POB116_R': 'POB116_R', 'POB117': 'POB117', 'POB117_R': 'POB117_R', 'POB118': 'POB118', 'POB118_R': 'POB118_R', 'POB119': 'POB119', 'POB119_R': 'POB119_R', 'POB120': 'POB120', 'POB120_R': 'POB120_R', 'POB121': 'POB121', 'POB121_R': 'POB121_R', 'POB122': 'POB122', 'POB122_R': 'POB122_R', 'POB123': 'POB123', 'POB123_R': 'POB123_R', 'POB124': 'POB124', 'POB124_R': 'POB124_R', 'OID': 'OID', });
lyr_Buffer1km_2.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', });
lyr_DENUE1km_3.set('fieldAliases', {'fid': 'fid', 'nom_estab': 'nom_estab', 'raz_social': 'raz_social', 'codigo_act': 'codigo_act', 'nombre_act': 'nombre_act', 'per_ocu': 'per_ocu', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', });
lyr_Unidadesdesalud_4.set('fieldAliases', {'Nombre_Unidad': 'Nombre_Unidad', 'Nivel_atencion': 'Nivel_atencion', 'Total_camas': 'Total_camas', 'Total_consultorios': 'Total_consultorios', 'CLUE': 'CLUE', 'Institucion': 'Institucion', 'CON_gral': 'CON_gral', 'CON_otras': 'CON_otras', 'CAMAS_hosp': 'CAMAS_hosp', 'CAMAS_otrasNC': 'CAMAS_otrasNC', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_LugaresdeintersSaludPblica_5.set('fieldAliases', {'fid': 'fid', 'nom_estab': 'nom_estab', 'raz_social': 'raz_social', 'codigo_act': 'codigo_act', 'nombre_act': 'nombre_act', 'per_ocu': 'per_ocu', 'nom_vial': 'nom_vial', 'telefono': 'telefono', 'correoelec': 'correoelec', 'www': 'www', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', });
lyr_UnidadModeloCUCS_6.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', });
lyr_Manzanas_1k_CCAS_Poblacin_1.set('fieldImages', {'fid': '', 'CVEGEO': '', 'POB1': '', 'POB2': '', 'POB2_R': '', 'POB4': '', 'POB4_R': '', 'POB5': '', 'POB5_R': '', 'POB6': '', 'POB6_R': '', 'POB7': '', 'POB7_R': '', 'POB8': '', 'POB8_R': '', 'POB9': '', 'POB9_R': '', 'POB10': '', 'POB10_R': '', 'POB11': '', 'POB11_R': '', 'POB12': '', 'POB12_R': '', 'POB13': '', 'POB13_R': '', 'POB14': '', 'POB14_R': '', 'POB15': '', 'POB15_R': '', 'POB17': '', 'POB17_R': '', 'POB18': '', 'POB18_R': '', 'POB19': '', 'POB19_R': '', 'POB20': '', 'POB20_R': '', 'POB21': '', 'POB21_R': '', 'POB22': '', 'POB22_R': '', 'POB23': '', 'POB23_R': '', 'POB24': '', 'POB24_R': '', 'POB25': '', 'POB25_R': '', 'POB42': '', 'POB42_R': '', 'POB43': '', 'POB43_R': '', 'POB45': '', 'POB45_R': '', 'POB46': '', 'POB46_R': '', 'POB47': '', 'POB47_R': '', 'POB48': '', 'POB48_R': '', 'POB49': '', 'POB49_R': '', 'POB50': '', 'POB50_R': '', 'POB51': '', 'POB51_R': '', 'POB52': '', 'POB52_R': '', 'POB53': '', 'POB53_R': '', 'POB54': '', 'POB54_R': '', 'POB55': '', 'POB55_R': '', 'POB56': '', 'POB56_R': '', 'POB57': '', 'POB57_R': '', 'POB59': '', 'POB59_R': '', 'POB60': '', 'POB60_R': '', 'POB61': '', 'POB61_R': '', 'POB62': '', 'POB62_R': '', 'POB63': '', 'POB63_R': '', 'POB64': '', 'POB64_R': '', 'POB65': '', 'POB65_R': '', 'POB66': '', 'POB66_R': '', 'POB67': '', 'POB67_R': '', 'POB84': '', 'POB84_R': '', 'POB85': '', 'POB85_R': '', 'POB87': '', 'POB87_R': '', 'POB88': '', 'POB88_R': '', 'POB89': '', 'POB89_R': '', 'POB90': '', 'POB90_R': '', 'POB91': '', 'POB91_R': '', 'POB92': '', 'POB92_R': '', 'POB93': '', 'POB93_R': '', 'POB94': '', 'POB94_R': '', 'POB95': '', 'POB95_R': '', 'POB96': '', 'POB96_R': '', 'POB97': '', 'POB97_R': '', 'POB98': '', 'POB98_R': '', 'POB100': '', 'POB100_R': '', 'POB101': '', 'POB101_R': '', 'POB102': '', 'POB102_R': '', 'POB103': '', 'POB103_R': '', 'POB104': '', 'POB104_R': '', 'POB105': '', 'POB105_R': '', 'POB106': '', 'POB106_R': '', 'POB107': '', 'POB107_R': '', 'POB108': '', 'POB108_R': '', 'POB125_R': '', 'POB126_R': '', 'POB127_R': '', 'POB128_R': '', 'POB129_R': '', 'POB130_R': '', 'POB131_R': '', 'POB132_R': '', 'POB133_R': '', 'POB134_R': '', 'POB3': '', 'POB3_R': '', 'POB16': '', 'POB16_R': '', 'POB26': '', 'POB26_R': '', 'POB27': '', 'POB27_R': '', 'POB28': '', 'POB28_R': '', 'POB29': '', 'POB29_R': '', 'POB30': '', 'POB30_R': '', 'POB31': '', 'POB31_R': '', 'POB32': '', 'POB32_R': '', 'POB33': '', 'POB33_R': '', 'POB34': '', 'POB34_R': '', 'POB35': '', 'POB35_R': '', 'POB36': '', 'POB36_R': '', 'POB37': '', 'POB37_R': '', 'POB38': '', 'POB38_R': '', 'POB39': '', 'POB39_R': '', 'POB40': '', 'POB40_R': '', 'POB41': '', 'POB41_R': '', 'POB44': '', 'POB44_R': '', 'POB58': '', 'POB58_R': '', 'POB68': '', 'POB68_R': '', 'POB69': '', 'POB69_R': '', 'POB70': '', 'POB70_R': '', 'POB71': '', 'POB71_R': '', 'POB72': '', 'POB72_R': '', 'POB73': '', 'POB73_R': '', 'POB74': '', 'POB74_R': '', 'POB75': '', 'POB75_R': '', 'POB76': '', 'POB76_R': '', 'POB77': '', 'POB77_R': '', 'POB78': '', 'POB78_R': '', 'POB79': '', 'POB79_R': '', 'POB80': '', 'POB80_R': '', 'POB81': '', 'POB81_R': '', 'POB82': '', 'POB82_R': '', 'POB83': '', 'POB83_R': '', 'POB86': '', 'POB86_R': '', 'POB99': '', 'POB99_R': '', 'POB109': '', 'POB109_R': '', 'POB110': '', 'POB110_R': '', 'POB111': '', 'POB111_R': '', 'POB112': '', 'POB112_R': '', 'POB113': '', 'POB113_R': '', 'POB114': '', 'POB114_R': '', 'POB115': '', 'POB115_R': '', 'POB116': '', 'POB116_R': '', 'POB117': '', 'POB117_R': '', 'POB118': '', 'POB118_R': '', 'POB119': '', 'POB119_R': '', 'POB120': '', 'POB120_R': '', 'POB121': '', 'POB121_R': '', 'POB122': '', 'POB122_R': '', 'POB123': '', 'POB123_R': '', 'POB124': '', 'POB124_R': '', 'OID': '', });
lyr_Buffer1km_2.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_DENUE1km_3.set('fieldImages', {'fid': '', 'nom_estab': '', 'raz_social': '', 'codigo_act': '', 'nombre_act': '', 'per_ocu': '', 'latitud': '', 'longitud': '', 'fecha_alta': '', });
lyr_Unidadesdesalud_4.set('fieldImages', {'Nombre_Unidad': 'TextEdit', 'Nivel_atencion': 'TextEdit', 'Total_camas': 'Range', 'Total_consultorios': 'Range', 'CLUE': 'TextEdit', 'Institucion': 'TextEdit', 'CON_gral': 'Range', 'CON_otras': 'Range', 'CAMAS_hosp': 'Range', 'CAMAS_otrasNC': 'Range', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_LugaresdeintersSaludPblica_5.set('fieldImages', {'fid': '', 'nom_estab': '', 'raz_social': '', 'codigo_act': '', 'nombre_act': '', 'per_ocu': '', 'nom_vial': '', 'telefono': '', 'correoelec': '', 'www': '', 'latitud': '', 'longitud': '', 'fecha_alta': '', });
lyr_UnidadModeloCUCS_6.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Manzanas_1k_CCAS_Poblacin_1.set('fieldLabels', {'fid': 'no label', 'CVEGEO': 'no label', 'POB1': 'no label', 'POB2': 'no label', 'POB2_R': 'no label', 'POB4': 'no label', 'POB4_R': 'no label', 'POB5': 'no label', 'POB5_R': 'no label', 'POB6': 'no label', 'POB6_R': 'no label', 'POB7': 'no label', 'POB7_R': 'no label', 'POB8': 'no label', 'POB8_R': 'no label', 'POB9': 'no label', 'POB9_R': 'no label', 'POB10': 'no label', 'POB10_R': 'no label', 'POB11': 'no label', 'POB11_R': 'no label', 'POB12': 'no label', 'POB12_R': 'no label', 'POB13': 'no label', 'POB13_R': 'no label', 'POB14': 'no label', 'POB14_R': 'no label', 'POB15': 'no label', 'POB15_R': 'no label', 'POB17': 'no label', 'POB17_R': 'no label', 'POB18': 'no label', 'POB18_R': 'no label', 'POB19': 'no label', 'POB19_R': 'no label', 'POB20': 'no label', 'POB20_R': 'no label', 'POB21': 'no label', 'POB21_R': 'no label', 'POB22': 'no label', 'POB22_R': 'no label', 'POB23': 'no label', 'POB23_R': 'no label', 'POB24': 'no label', 'POB24_R': 'no label', 'POB25': 'no label', 'POB25_R': 'no label', 'POB42': 'no label', 'POB42_R': 'no label', 'POB43': 'no label', 'POB43_R': 'no label', 'POB45': 'no label', 'POB45_R': 'no label', 'POB46': 'no label', 'POB46_R': 'no label', 'POB47': 'no label', 'POB47_R': 'no label', 'POB48': 'no label', 'POB48_R': 'no label', 'POB49': 'no label', 'POB49_R': 'no label', 'POB50': 'no label', 'POB50_R': 'no label', 'POB51': 'no label', 'POB51_R': 'no label', 'POB52': 'no label', 'POB52_R': 'no label', 'POB53': 'no label', 'POB53_R': 'no label', 'POB54': 'no label', 'POB54_R': 'no label', 'POB55': 'no label', 'POB55_R': 'no label', 'POB56': 'no label', 'POB56_R': 'no label', 'POB57': 'no label', 'POB57_R': 'no label', 'POB59': 'no label', 'POB59_R': 'no label', 'POB60': 'no label', 'POB60_R': 'no label', 'POB61': 'no label', 'POB61_R': 'no label', 'POB62': 'no label', 'POB62_R': 'no label', 'POB63': 'no label', 'POB63_R': 'no label', 'POB64': 'no label', 'POB64_R': 'no label', 'POB65': 'no label', 'POB65_R': 'no label', 'POB66': 'no label', 'POB66_R': 'no label', 'POB67': 'no label', 'POB67_R': 'no label', 'POB84': 'no label', 'POB84_R': 'no label', 'POB85': 'no label', 'POB85_R': 'no label', 'POB87': 'no label', 'POB87_R': 'no label', 'POB88': 'no label', 'POB88_R': 'no label', 'POB89': 'no label', 'POB89_R': 'no label', 'POB90': 'no label', 'POB90_R': 'no label', 'POB91': 'no label', 'POB91_R': 'no label', 'POB92': 'no label', 'POB92_R': 'no label', 'POB93': 'no label', 'POB93_R': 'no label', 'POB94': 'no label', 'POB94_R': 'no label', 'POB95': 'no label', 'POB95_R': 'no label', 'POB96': 'no label', 'POB96_R': 'no label', 'POB97': 'no label', 'POB97_R': 'no label', 'POB98': 'no label', 'POB98_R': 'no label', 'POB100': 'no label', 'POB100_R': 'no label', 'POB101': 'no label', 'POB101_R': 'no label', 'POB102': 'no label', 'POB102_R': 'no label', 'POB103': 'no label', 'POB103_R': 'no label', 'POB104': 'no label', 'POB104_R': 'no label', 'POB105': 'no label', 'POB105_R': 'no label', 'POB106': 'no label', 'POB106_R': 'no label', 'POB107': 'no label', 'POB107_R': 'no label', 'POB108': 'no label', 'POB108_R': 'no label', 'POB125_R': 'no label', 'POB126_R': 'no label', 'POB127_R': 'no label', 'POB128_R': 'no label', 'POB129_R': 'no label', 'POB130_R': 'no label', 'POB131_R': 'no label', 'POB132_R': 'no label', 'POB133_R': 'no label', 'POB134_R': 'no label', 'POB3': 'no label', 'POB3_R': 'no label', 'POB16': 'no label', 'POB16_R': 'no label', 'POB26': 'no label', 'POB26_R': 'no label', 'POB27': 'no label', 'POB27_R': 'no label', 'POB28': 'no label', 'POB28_R': 'no label', 'POB29': 'no label', 'POB29_R': 'no label', 'POB30': 'no label', 'POB30_R': 'no label', 'POB31': 'no label', 'POB31_R': 'no label', 'POB32': 'no label', 'POB32_R': 'no label', 'POB33': 'no label', 'POB33_R': 'no label', 'POB34': 'no label', 'POB34_R': 'no label', 'POB35': 'no label', 'POB35_R': 'no label', 'POB36': 'no label', 'POB36_R': 'no label', 'POB37': 'no label', 'POB37_R': 'no label', 'POB38': 'no label', 'POB38_R': 'no label', 'POB39': 'no label', 'POB39_R': 'no label', 'POB40': 'no label', 'POB40_R': 'no label', 'POB41': 'no label', 'POB41_R': 'no label', 'POB44': 'no label', 'POB44_R': 'no label', 'POB58': 'no label', 'POB58_R': 'no label', 'POB68': 'no label', 'POB68_R': 'no label', 'POB69': 'no label', 'POB69_R': 'no label', 'POB70': 'no label', 'POB70_R': 'no label', 'POB71': 'no label', 'POB71_R': 'no label', 'POB72': 'no label', 'POB72_R': 'no label', 'POB73': 'no label', 'POB73_R': 'no label', 'POB74': 'no label', 'POB74_R': 'no label', 'POB75': 'no label', 'POB75_R': 'no label', 'POB76': 'no label', 'POB76_R': 'no label', 'POB77': 'no label', 'POB77_R': 'no label', 'POB78': 'no label', 'POB78_R': 'no label', 'POB79': 'no label', 'POB79_R': 'no label', 'POB80': 'no label', 'POB80_R': 'no label', 'POB81': 'no label', 'POB81_R': 'no label', 'POB82': 'no label', 'POB82_R': 'no label', 'POB83': 'no label', 'POB83_R': 'no label', 'POB86': 'no label', 'POB86_R': 'no label', 'POB99': 'no label', 'POB99_R': 'no label', 'POB109': 'no label', 'POB109_R': 'no label', 'POB110': 'no label', 'POB110_R': 'no label', 'POB111': 'no label', 'POB111_R': 'no label', 'POB112': 'no label', 'POB112_R': 'no label', 'POB113': 'no label', 'POB113_R': 'no label', 'POB114': 'no label', 'POB114_R': 'no label', 'POB115': 'no label', 'POB115_R': 'no label', 'POB116': 'no label', 'POB116_R': 'no label', 'POB117': 'no label', 'POB117_R': 'no label', 'POB118': 'no label', 'POB118_R': 'no label', 'POB119': 'no label', 'POB119_R': 'no label', 'POB120': 'no label', 'POB120_R': 'no label', 'POB121': 'no label', 'POB121_R': 'no label', 'POB122': 'no label', 'POB122_R': 'no label', 'POB123': 'no label', 'POB123_R': 'no label', 'POB124': 'no label', 'POB124_R': 'no label', 'OID': 'no label', });
lyr_Buffer1km_2.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', });
lyr_DENUE1km_3.set('fieldLabels', {'fid': 'hidden field', 'nom_estab': 'header label - always visible', 'raz_social': 'header label - always visible', 'codigo_act': 'hidden field', 'nombre_act': 'header label - always visible', 'per_ocu': 'header label - always visible', 'latitud': 'hidden field', 'longitud': 'hidden field', 'fecha_alta': 'hidden field', });
lyr_Unidadesdesalud_4.set('fieldLabels', {'Nombre_Unidad': 'header label - always visible', 'Nivel_atencion': 'header label - always visible', 'Total_camas': 'header label - always visible', 'Total_consultorios': 'header label - always visible', 'CLUE': 'hidden field', 'Institucion': 'header label - always visible', 'CON_gral': 'header label - always visible', 'CON_otras': 'header label - always visible', 'CAMAS_hosp': 'header label - always visible', 'CAMAS_otrasNC': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', });
lyr_LugaresdeintersSaludPblica_5.set('fieldLabels', {'fid': 'hidden field', 'nom_estab': 'header label - always visible', 'raz_social': 'header label - always visible', 'codigo_act': 'hidden field', 'nombre_act': 'header label - always visible', 'per_ocu': 'header label - always visible', 'nom_vial': 'header label - always visible', 'telefono': 'header label - always visible', 'correoelec': 'header label - always visible', 'www': 'header label - always visible', 'latitud': 'hidden field', 'longitud': 'hidden field', 'fecha_alta': 'hidden field', });
lyr_UnidadModeloCUCS_6.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', });
lyr_UnidadModeloCUCS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});