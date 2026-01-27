ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([233773.359375, 7700979.946759, 276615.687500, 7740736.000000]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LimiteMunicipaldeFranca_3 = new ol.format.GeoJSON();
var features_LimiteMunicipaldeFranca_3 = format_LimiteMunicipaldeFranca_3.readFeatures(json_LimiteMunicipaldeFranca_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimiteMunicipaldeFranca_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipaldeFranca_3.addFeatures(features_LimiteMunicipaldeFranca_3);
var lyr_LimiteMunicipaldeFranca_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipaldeFranca_3, 
                style: style_LimiteMunicipaldeFranca_3,
                popuplayertitle: 'Limite Municipal de Franca',
                interactive: false,
                title: '<img src="styles/legend/LimiteMunicipaldeFranca_3.png" /> Limite Municipal de Franca'
            });
var format_reaUrbanadeFranca_4 = new ol.format.GeoJSON();
var features_reaUrbanadeFranca_4 = format_reaUrbanadeFranca_4.readFeatures(json_reaUrbanadeFranca_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaUrbanadeFranca_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaUrbanadeFranca_4.addFeatures(features_reaUrbanadeFranca_4);
var lyr_reaUrbanadeFranca_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaUrbanadeFranca_4, 
                style: style_reaUrbanadeFranca_4,
                popuplayertitle: 'Área Urbana de Franca',
                interactive: false,
                title: '<img src="styles/legend/reaUrbanadeFranca_4.png" /> Área Urbana de Franca'
            });
var format_APP1745unid_5 = new ol.format.GeoJSON();
var features_APP1745unid_5 = format_APP1745unid_5.readFeatures(json_APP1745unid_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP1745unid_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP1745unid_5.addFeatures(features_APP1745unid_5);
var lyr_APP1745unid_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP1745unid_5, 
                style: style_APP1745unid_5,
                popuplayertitle: 'APP (1745 unid.)',
                interactive: true,
                title: '<img src="styles/legend/APP1745unid_5.png" /> APP (1745 unid.)'
            });
var format_RiosDuplos84unid_6 = new ol.format.GeoJSON();
var features_RiosDuplos84unid_6 = format_RiosDuplos84unid_6.readFeatures(json_RiosDuplos84unid_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosDuplos84unid_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos84unid_6.addFeatures(features_RiosDuplos84unid_6);
var lyr_RiosDuplos84unid_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos84unid_6, 
                style: style_RiosDuplos84unid_6,
                popuplayertitle: 'Rios Duplos (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos84unid_6.png" /> Rios Duplos (84 unid.)'
            });
var format_MassasDgua270unid_7 = new ol.format.GeoJSON();
var features_MassasDgua270unid_7 = format_MassasDgua270unid_7.readFeatures(json_MassasDgua270unid_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MassasDgua270unid_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua270unid_7.addFeatures(features_MassasDgua270unid_7);
var lyr_MassasDgua270unid_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua270unid_7, 
                style: style_MassasDgua270unid_7,
                popuplayertitle: 'Massas D\'água (270 unid.)',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua270unid_7.png" /> Massas D\'água (270 unid.)'
            });
var format_RiosSimples1842unid_8 = new ol.format.GeoJSON();
var features_RiosSimples1842unid_8 = format_RiosSimples1842unid_8.readFeatures(json_RiosSimples1842unid_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosSimples1842unid_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples1842unid_8.addFeatures(features_RiosSimples1842unid_8);
var lyr_RiosSimples1842unid_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples1842unid_8, 
                style: style_RiosSimples1842unid_8,
                popuplayertitle: 'Rios Simples (1842 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples1842unid_8.png" /> Rios Simples (1842 unid.)'
            });
var format_Nascentes821unid_9 = new ol.format.GeoJSON();
var features_Nascentes821unid_9 = format_Nascentes821unid_9.readFeatures(json_Nascentes821unid_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Nascentes821unid_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes821unid_9.addFeatures(features_Nascentes821unid_9);
var lyr_Nascentes821unid_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes821unid_9, 
                style: style_Nascentes821unid_9,
                popuplayertitle: 'Nascentes (821 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Nascentes821unid_9.png" /> Nascentes (821 unid.)'
            });
var format_RemanescentedaMatrcula11419_10 = new ol.format.GeoJSON();
var features_RemanescentedaMatrcula11419_10 = format_RemanescentedaMatrcula11419_10.readFeatures(json_RemanescentedaMatrcula11419_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RemanescentedaMatrcula11419_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RemanescentedaMatrcula11419_10.addFeatures(features_RemanescentedaMatrcula11419_10);
var lyr_RemanescentedaMatrcula11419_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RemanescentedaMatrcula11419_10, 
                style: style_RemanescentedaMatrcula11419_10,
                popuplayertitle: 'Remanescente da Matrícula 11419',
                interactive: true,
                title: '<img src="styles/legend/RemanescentedaMatrcula11419_10.png" /> Remanescente da Matrícula 11419'
            });
var format_ConjuntoHabitacional_11 = new ol.format.GeoJSON();
var features_ConjuntoHabitacional_11 = format_ConjuntoHabitacional_11.readFeatures(json_ConjuntoHabitacional_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ConjuntoHabitacional_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConjuntoHabitacional_11.addFeatures(features_ConjuntoHabitacional_11);
var lyr_ConjuntoHabitacional_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConjuntoHabitacional_11, 
                style: style_ConjuntoHabitacional_11,
                popuplayertitle: 'Conjunto Habitacional',
                interactive: true,
                title: '<img src="styles/legend/ConjuntoHabitacional_11.png" /> Conjunto Habitacional'
            });
var format_AvdeacessoaoHortoeColgioAgrcola_12 = new ol.format.GeoJSON();
var features_AvdeacessoaoHortoeColgioAgrcola_12 = format_AvdeacessoaoHortoeColgioAgrcola_12.readFeatures(json_AvdeacessoaoHortoeColgioAgrcola_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AvdeacessoaoHortoeColgioAgrcola_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvdeacessoaoHortoeColgioAgrcola_12.addFeatures(features_AvdeacessoaoHortoeColgioAgrcola_12);
var lyr_AvdeacessoaoHortoeColgioAgrcola_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvdeacessoaoHortoeColgioAgrcola_12, 
                style: style_AvdeacessoaoHortoeColgioAgrcola_12,
                popuplayertitle: 'Av. de acesso ao Horto e Colégio Agrícola',
                interactive: true,
                title: '<img src="styles/legend/AvdeacessoaoHortoeColgioAgrcola_12.png" /> Av. de acesso ao Horto e Colégio Agrícola'
            });
var format_reaK_13 = new ol.format.GeoJSON();
var features_reaK_13 = format_reaK_13.readFeatures(json_reaK_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaK_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaK_13.addFeatures(features_reaK_13);
var lyr_reaK_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaK_13, 
                style: style_reaK_13,
                popuplayertitle: 'Área K',
                interactive: true,
                title: '<img src="styles/legend/reaK_13.png" /> Área K'
            });
var format_reaJ_14 = new ol.format.GeoJSON();
var features_reaJ_14 = format_reaJ_14.readFeatures(json_reaJ_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaJ_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaJ_14.addFeatures(features_reaJ_14);
var lyr_reaJ_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaJ_14, 
                style: style_reaJ_14,
                popuplayertitle: 'Área J',
                interactive: true,
                title: '<img src="styles/legend/reaJ_14.png" /> Área J'
            });
var format_reaI_15 = new ol.format.GeoJSON();
var features_reaI_15 = format_reaI_15.readFeatures(json_reaI_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaI_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaI_15.addFeatures(features_reaI_15);
var lyr_reaI_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaI_15, 
                style: style_reaI_15,
                popuplayertitle: 'Área I',
                interactive: true,
                title: '<img src="styles/legend/reaI_15.png" /> Área I'
            });
var format_reaH_16 = new ol.format.GeoJSON();
var features_reaH_16 = format_reaH_16.readFeatures(json_reaH_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaH_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaH_16.addFeatures(features_reaH_16);
var lyr_reaH_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaH_16, 
                style: style_reaH_16,
                popuplayertitle: 'Área H',
                interactive: true,
                title: '<img src="styles/legend/reaH_16.png" /> Área H'
            });
var format_reaG_17 = new ol.format.GeoJSON();
var features_reaG_17 = format_reaG_17.readFeatures(json_reaG_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaG_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaG_17.addFeatures(features_reaG_17);
var lyr_reaG_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaG_17, 
                style: style_reaG_17,
                popuplayertitle: 'Área G',
                interactive: true,
                title: '<img src="styles/legend/reaG_17.png" /> Área G'
            });
var format_reaF_18 = new ol.format.GeoJSON();
var features_reaF_18 = format_reaF_18.readFeatures(json_reaF_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaF_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaF_18.addFeatures(features_reaF_18);
var lyr_reaF_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaF_18, 
                style: style_reaF_18,
                popuplayertitle: 'Área F',
                interactive: true,
                title: '<img src="styles/legend/reaF_18.png" /> Área F'
            });
var format_reaE_19 = new ol.format.GeoJSON();
var features_reaE_19 = format_reaE_19.readFeatures(json_reaE_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaE_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaE_19.addFeatures(features_reaE_19);
var lyr_reaE_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaE_19, 
                style: style_reaE_19,
                popuplayertitle: 'Área E',
                interactive: true,
                title: '<img src="styles/legend/reaE_19.png" /> Área E'
            });
var format_reaD_20 = new ol.format.GeoJSON();
var features_reaD_20 = format_reaD_20.readFeatures(json_reaD_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaD_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaD_20.addFeatures(features_reaD_20);
var lyr_reaD_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaD_20, 
                style: style_reaD_20,
                popuplayertitle: 'Área D',
                interactive: true,
                title: '<img src="styles/legend/reaD_20.png" /> Área D'
            });
var format_reaC_21 = new ol.format.GeoJSON();
var features_reaC_21 = format_reaC_21.readFeatures(json_reaC_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaC_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaC_21.addFeatures(features_reaC_21);
var lyr_reaC_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaC_21, 
                style: style_reaC_21,
                popuplayertitle: 'Área C',
                interactive: true,
                title: '<img src="styles/legend/reaC_21.png" /> Área C'
            });
var format_reaB_22 = new ol.format.GeoJSON();
var features_reaB_22 = format_reaB_22.readFeatures(json_reaB_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaB_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaB_22.addFeatures(features_reaB_22);
var lyr_reaB_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaB_22, 
                style: style_reaB_22,
                popuplayertitle: 'Área B',
                interactive: true,
                title: '<img src="styles/legend/reaB_22.png" /> Área B'
            });
var format_reaA_23 = new ol.format.GeoJSON();
var features_reaA_23 = format_reaA_23.readFeatures(json_reaA_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaA_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaA_23.addFeatures(features_reaA_23);
var lyr_reaA_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaA_23, 
                style: style_reaA_23,
                popuplayertitle: 'Área A',
                interactive: true,
                title: '<img src="styles/legend/reaA_23.png" /> Área A'
            });
var format_reaAverbada355235ReservaFlorestalLegalPartedareaG_24 = new ol.format.GeoJSON();
var features_reaAverbada355235ReservaFlorestalLegalPartedareaG_24 = format_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.readFeatures(json_reaAverbada355235ReservaFlorestalLegalPartedareaG_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.addFeatures(features_reaAverbada355235ReservaFlorestalLegalPartedareaG_24);
var lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_24, 
                style: style_reaAverbada355235ReservaFlorestalLegalPartedareaG_24,
                popuplayertitle: 'Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaAverbada355235ReservaFlorestalLegalPartedareaG_24.png" /> Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)'
            });
var format_reaaseraverbadaPartedareaG_25 = new ol.format.GeoJSON();
var features_reaaseraverbadaPartedareaG_25 = format_reaaseraverbadaPartedareaG_25.readFeatures(json_reaaseraverbadaPartedareaG_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaaseraverbadaPartedareaG_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaaseraverbadaPartedareaG_25.addFeatures(features_reaaseraverbadaPartedareaG_25);
var lyr_reaaseraverbadaPartedareaG_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaaseraverbadaPartedareaG_25, 
                style: style_reaaseraverbadaPartedareaG_25,
                popuplayertitle: 'Área a ser averbada (Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaaseraverbadaPartedareaG_25.png" /> Área a ser averbada (Parte da Área G)'
            });
var format_LoteEMDEF10unid218783m_26 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid218783m_26 = format_LoteEMDEF10unid218783m_26.readFeatures(json_LoteEMDEF10unid218783m_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid218783m_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid218783m_26.addFeatures(features_LoteEMDEF10unid218783m_26);
var lyr_LoteEMDEF10unid218783m_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid218783m_26, 
                style: style_LoteEMDEF10unid218783m_26,
                popuplayertitle: 'Lote EMDEF (10 unid. / 2.187,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid218783m_26.png" /> Lote EMDEF (10 unid. / 2.187,83 m²)'
            });
var format_LoteEMDEF10unid_27 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid_27 = format_LoteEMDEF10unid_27.readFeatures(json_LoteEMDEF10unid_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid_27.addFeatures(features_LoteEMDEF10unid_27);
var lyr_LoteEMDEF10unid_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid_27, 
                style: style_LoteEMDEF10unid_27,
                popuplayertitle: 'Lote EMDEF (10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid_27.png" /> Lote EMDEF (10 unid.)'
            });
var format_Lote504unid13809703m_28 = new ol.format.GeoJSON();
var features_Lote504unid13809703m_28 = format_Lote504unid13809703m_28.readFeatures(json_Lote504unid13809703m_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote504unid13809703m_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote504unid13809703m_28.addFeatures(features_Lote504unid13809703m_28);
var lyr_Lote504unid13809703m_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote504unid13809703m_28, 
                style: style_Lote504unid13809703m_28,
                popuplayertitle: 'Lote (504 unid. / 138.097,03 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote504unid13809703m_28.png" /> Lote (504 unid. / 138.097,03 m²)'
            });
var format_Lote504unid_29 = new ol.format.GeoJSON();
var features_Lote504unid_29 = format_Lote504unid_29.readFeatures(json_Lote504unid_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote504unid_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote504unid_29.addFeatures(features_Lote504unid_29);
var lyr_Lote504unid_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote504unid_29, 
                style: style_Lote504unid_29,
                popuplayertitle: 'Lote (504 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote504unid_29.png" /> Lote (504 unid.)'
            });
var format_APP169unid238007435m_30 = new ol.format.GeoJSON();
var features_APP169unid238007435m_30 = format_APP169unid238007435m_30.readFeatures(json_APP169unid238007435m_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP169unid238007435m_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP169unid238007435m_30.addFeatures(features_APP169unid238007435m_30);
var lyr_APP169unid238007435m_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP169unid238007435m_30, 
                style: style_APP169unid238007435m_30,
                popuplayertitle: 'APP (169 unid. / 2.380.074,35 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP169unid238007435m_30.png" /> APP (169 unid. / 2.380.074,35 m²)'
            });
var format_readeUsoEspecial247unid269765616m_31 = new ol.format.GeoJSON();
var features_readeUsoEspecial247unid269765616m_31 = format_readeUsoEspecial247unid269765616m_31.readFeatures(json_readeUsoEspecial247unid269765616m_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeUsoEspecial247unid269765616m_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial247unid269765616m_31.addFeatures(features_readeUsoEspecial247unid269765616m_31);
var lyr_readeUsoEspecial247unid269765616m_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial247unid269765616m_31, 
                style: style_readeUsoEspecial247unid269765616m_31,
                popuplayertitle: 'Área de Uso Especial (247 unid. / 2.697.656,16 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial247unid269765616m_31.png" /> Área de Uso Especial (247 unid. / 2.697.656,16 m²)'
            });
var format_reaInstitucional240unid136439095m_32 = new ol.format.GeoJSON();
var features_reaInstitucional240unid136439095m_32 = format_reaInstitucional240unid136439095m_32.readFeatures(json_reaInstitucional240unid136439095m_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaInstitucional240unid136439095m_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional240unid136439095m_32.addFeatures(features_reaInstitucional240unid136439095m_32);
var lyr_reaInstitucional240unid136439095m_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional240unid136439095m_32, 
                style: style_reaInstitucional240unid136439095m_32,
                popuplayertitle: 'Área Institucional (240 unid. / 1.364.390,95 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional240unid136439095m_32.png" /> Área Institucional (240 unid. / 1.364.390,95 m²)'
            });
var format_reaPatrimonial33unid15807656m_33 = new ol.format.GeoJSON();
var features_reaPatrimonial33unid15807656m_33 = format_reaPatrimonial33unid15807656m_33.readFeatures(json_reaPatrimonial33unid15807656m_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaPatrimonial33unid15807656m_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial33unid15807656m_33.addFeatures(features_reaPatrimonial33unid15807656m_33);
var lyr_reaPatrimonial33unid15807656m_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial33unid15807656m_33, 
                style: style_reaPatrimonial33unid15807656m_33,
                popuplayertitle: 'Área Patrimonial (33 unid. / 158.076,56 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial33unid15807656m_33.png" /> Área Patrimonial (33 unid. / 158.076,56 m²)'
            });
var format_reaVerde2011unid845466642m_34 = new ol.format.GeoJSON();
var features_reaVerde2011unid845466642m_34 = format_reaVerde2011unid845466642m_34.readFeatures(json_reaVerde2011unid845466642m_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaVerde2011unid845466642m_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde2011unid845466642m_34.addFeatures(features_reaVerde2011unid845466642m_34);
var lyr_reaVerde2011unid845466642m_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde2011unid845466642m_34, 
                style: style_reaVerde2011unid845466642m_34,
                popuplayertitle: 'Área Verde (2011 unid. / 8.454.666,42 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde2011unid845466642m_34.png" /> Área Verde (2011 unid. / 8.454.666,42 m²)'
            });
var format_EmpreendimentoVillaDoratta_35 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDoratta_35 = format_EmpreendimentoVillaDoratta_35.readFeatures(json_EmpreendimentoVillaDoratta_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDoratta_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDoratta_35.addFeatures(features_EmpreendimentoVillaDoratta_35);
var lyr_EmpreendimentoVillaDoratta_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDoratta_35, 
                style: style_EmpreendimentoVillaDoratta_35,
                popuplayertitle: 'Empreendimento Villa Doratta',
                interactive: true,
    title: 'Empreendimento Villa Doratta<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_7.png" /> VAGAS DE ESTACIONAMENTO<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_8.png" /> VIELA<br />' });
var format_arizona_poligonos_36 = new ol.format.GeoJSON();
var features_arizona_poligonos_36 = format_arizona_poligonos_36.readFeatures(json_arizona_poligonos_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_arizona_poligonos_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arizona_poligonos_36.addFeatures(features_arizona_poligonos_36);
var lyr_arizona_poligonos_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arizona_poligonos_36, 
                style: style_arizona_poligonos_36,
                popuplayertitle: 'arizona_poligonos',
                interactive: true,
    title: 'arizona_poligonos<br />\
    <img src="styles/legend/arizona_poligonos_36_0.png" /> APP<br />\
    <img src="styles/legend/arizona_poligonos_36_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/arizona_poligonos_36_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/arizona_poligonos_36_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/arizona_poligonos_36_4.png" /> PASSEIO<br />\
    <img src="styles/legend/arizona_poligonos_36_5.png" /> RUAS<br />\
    <img src="styles/legend/arizona_poligonos_36_6.png" /> VIELA<br />' });
var format_arizona_linhas_37 = new ol.format.GeoJSON();
var features_arizona_linhas_37 = format_arizona_linhas_37.readFeatures(json_arizona_linhas_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_arizona_linhas_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arizona_linhas_37.addFeatures(features_arizona_linhas_37);
var lyr_arizona_linhas_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arizona_linhas_37, 
                style: style_arizona_linhas_37,
                popuplayertitle: 'arizona_linhas',
                interactive: true,
                title: '<img src="styles/legend/arizona_linhas_37.png" /> arizona_linhas'
            });
var format_fazenda_progresso_poligonos_38 = new ol.format.GeoJSON();
var features_fazenda_progresso_poligonos_38 = format_fazenda_progresso_poligonos_38.readFeatures(json_fazenda_progresso_poligonos_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_fazenda_progresso_poligonos_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fazenda_progresso_poligonos_38.addFeatures(features_fazenda_progresso_poligonos_38);
var lyr_fazenda_progresso_poligonos_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fazenda_progresso_poligonos_38, 
                style: style_fazenda_progresso_poligonos_38,
                popuplayertitle: 'fazenda_progresso_poligonos',
                interactive: true,
                title: '<img src="styles/legend/fazenda_progresso_poligonos_38.png" /> fazenda_progresso_poligonos'
            });
var format_fazenda_progresso_linhas_39 = new ol.format.GeoJSON();
var features_fazenda_progresso_linhas_39 = format_fazenda_progresso_linhas_39.readFeatures(json_fazenda_progresso_linhas_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_fazenda_progresso_linhas_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fazenda_progresso_linhas_39.addFeatures(features_fazenda_progresso_linhas_39);
var lyr_fazenda_progresso_linhas_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fazenda_progresso_linhas_39, 
                style: style_fazenda_progresso_linhas_39,
                popuplayertitle: 'fazenda_progresso_linhas',
                interactive: true,
                title: '<img src="styles/legend/fazenda_progresso_linhas_39.png" /> fazenda_progresso_linhas'
            });
var format_villa_bella_poligonos_40 = new ol.format.GeoJSON();
var features_villa_bella_poligonos_40 = format_villa_bella_poligonos_40.readFeatures(json_villa_bella_poligonos_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_villa_bella_poligonos_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_villa_bella_poligonos_40.addFeatures(features_villa_bella_poligonos_40);
var lyr_villa_bella_poligonos_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_villa_bella_poligonos_40, 
                style: style_villa_bella_poligonos_40,
                popuplayertitle: 'villa_bella_poligonos',
                interactive: true,
    title: 'villa_bella_poligonos<br />\
    <img src="styles/legend/villa_bella_poligonos_40_0.png" /> APP<br />\
    <img src="styles/legend/villa_bella_poligonos_40_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/villa_bella_poligonos_40_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/villa_bella_poligonos_40_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/villa_bella_poligonos_40_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/villa_bella_poligonos_40_5.png" /> PASSEIO<br />\
    <img src="styles/legend/villa_bella_poligonos_40_6.png" /> RUAS<br />' });
var format_villa_bella_linhas_41 = new ol.format.GeoJSON();
var features_villa_bella_linhas_41 = format_villa_bella_linhas_41.readFeatures(json_villa_bella_linhas_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_villa_bella_linhas_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_villa_bella_linhas_41.addFeatures(features_villa_bella_linhas_41);
var lyr_villa_bella_linhas_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_villa_bella_linhas_41, 
                style: style_villa_bella_linhas_41,
                popuplayertitle: 'villa_bella_linhas',
                interactive: true,
                title: '<img src="styles/legend/villa_bella_linhas_41.png" /> villa_bella_linhas'
            });
var format_EmpreendimentoVillaDoratta_42 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDoratta_42 = format_EmpreendimentoVillaDoratta_42.readFeatures(json_EmpreendimentoVillaDoratta_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDoratta_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDoratta_42.addFeatures(features_EmpreendimentoVillaDoratta_42);
var lyr_EmpreendimentoVillaDoratta_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDoratta_42, 
                style: style_EmpreendimentoVillaDoratta_42,
                popuplayertitle: 'Empreendimento Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaDoratta_42.png" /> Empreendimento Villa Doratta'
            });
var format_EmpreendimentoDioceseFranca_43 = new ol.format.GeoJSON();
var features_EmpreendimentoDioceseFranca_43 = format_EmpreendimentoDioceseFranca_43.readFeatures(json_EmpreendimentoDioceseFranca_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDioceseFranca_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDioceseFranca_43.addFeatures(features_EmpreendimentoDioceseFranca_43);
var lyr_EmpreendimentoDioceseFranca_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDioceseFranca_43, 
                style: style_EmpreendimentoDioceseFranca_43,
                popuplayertitle: 'Empreendimento Diocese Franca',
                interactive: true,
    title: 'Empreendimento Diocese Franca<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_43_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_43_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_43_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_43_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_43_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_43_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_43_6.png" /> RUAS<br />' });
var format_EmpreendimentoDioceseFranca_44 = new ol.format.GeoJSON();
var features_EmpreendimentoDioceseFranca_44 = format_EmpreendimentoDioceseFranca_44.readFeatures(json_EmpreendimentoDioceseFranca_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDioceseFranca_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDioceseFranca_44.addFeatures(features_EmpreendimentoDioceseFranca_44);
var lyr_EmpreendimentoDioceseFranca_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDioceseFranca_44, 
                style: style_EmpreendimentoDioceseFranca_44,
                popuplayertitle: 'Empreendimento Diocese Franca',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDioceseFranca_44.png" /> Empreendimento Diocese Franca'
            });
var format_EmpreendimentoAdonis_45 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_45 = format_EmpreendimentoAdonis_45.readFeatures(json_EmpreendimentoAdonis_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_45.addFeatures(features_EmpreendimentoAdonis_45);
var lyr_EmpreendimentoAdonis_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_45, 
                style: style_EmpreendimentoAdonis_45,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
    title: 'Empreendimento Adonis<br />\
    <img src="styles/legend/EmpreendimentoAdonis_45_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoAdonis_45_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoAdonis_45_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoAdonis_45_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoAdonis_45_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoAdonis_45_5.png" /> RUAS<br />' });
var format_EmpreendimentoAdonis_46 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_46 = format_EmpreendimentoAdonis_46.readFeatures(json_EmpreendimentoAdonis_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_46.addFeatures(features_EmpreendimentoAdonis_46);
var lyr_EmpreendimentoAdonis_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_46, 
                style: style_EmpreendimentoAdonis_46,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAdonis_46.png" /> Empreendimento Adonis'
            });
var format_EmpreendimentoInfratecinica_47 = new ol.format.GeoJSON();
var features_EmpreendimentoInfratecinica_47 = format_EmpreendimentoInfratecinica_47.readFeatures(json_EmpreendimentoInfratecinica_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoInfratecinica_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoInfratecinica_47.addFeatures(features_EmpreendimentoInfratecinica_47);
var lyr_EmpreendimentoInfratecinica_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoInfratecinica_47, 
                style: style_EmpreendimentoInfratecinica_47,
                popuplayertitle: 'Empreendimento Infratecinica',
                interactive: true,
    title: 'Empreendimento Infratecinica<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_47_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_47_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_47_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_47_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_47_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_47_5.png" /> RUAS<br />' });
var format_EmpreendimentoInfratecinica_48 = new ol.format.GeoJSON();
var features_EmpreendimentoInfratecinica_48 = format_EmpreendimentoInfratecinica_48.readFeatures(json_EmpreendimentoInfratecinica_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoInfratecinica_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoInfratecinica_48.addFeatures(features_EmpreendimentoInfratecinica_48);
var lyr_EmpreendimentoInfratecinica_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoInfratecinica_48, 
                style: style_EmpreendimentoInfratecinica_48,
                popuplayertitle: 'Empreendimento Infratecinica',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoInfratecinica_48.png" /> Empreendimento Infratecinica'
            });
var format_EmpreendimentoResidencialBoaVista_49 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialBoaVista_49 = format_EmpreendimentoResidencialBoaVista_49.readFeatures(json_EmpreendimentoResidencialBoaVista_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialBoaVista_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialBoaVista_49.addFeatures(features_EmpreendimentoResidencialBoaVista_49);
var lyr_EmpreendimentoResidencialBoaVista_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialBoaVista_49, 
                style: style_EmpreendimentoResidencialBoaVista_49,
                popuplayertitle: 'Empreendimento Residencial Boa Vista',
                interactive: true,
    title: 'Empreendimento Residencial Boa Vista<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_49_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_49_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_49_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_49_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_49_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_49_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_49_6.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_49_7.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialBoaVista_50 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialBoaVista_50 = format_EmpreendimentoResidencialBoaVista_50.readFeatures(json_EmpreendimentoResidencialBoaVista_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialBoaVista_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialBoaVista_50.addFeatures(features_EmpreendimentoResidencialBoaVista_50);
var lyr_EmpreendimentoResidencialBoaVista_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialBoaVista_50, 
                style: style_EmpreendimentoResidencialBoaVista_50,
                popuplayertitle: 'Empreendimento Residencial Boa Vista',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialBoaVista_50.png" /> Empreendimento Residencial Boa Vista'
            });
var format_EmpreendimentoCondomnioResicencialTerraNova_51 = new ol.format.GeoJSON();
var features_EmpreendimentoCondomnioResicencialTerraNova_51 = format_EmpreendimentoCondomnioResicencialTerraNova_51.readFeatures(json_EmpreendimentoCondomnioResicencialTerraNova_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCondomnioResicencialTerraNova_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCondomnioResicencialTerraNova_51.addFeatures(features_EmpreendimentoCondomnioResicencialTerraNova_51);
var lyr_EmpreendimentoCondomnioResicencialTerraNova_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCondomnioResicencialTerraNova_51, 
                style: style_EmpreendimentoCondomnioResicencialTerraNova_51,
                popuplayertitle: 'Empreendimento Condomínio Resicencial Terra Nova',
                interactive: true,
    title: 'Empreendimento Condomínio Resicencial Terra Nova<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_51_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_51_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_51_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_51_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_51_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_51_5.png" /> RUAS<br />' });
var format_EmpreendimentoCondomnioResicencialTerraNova_52 = new ol.format.GeoJSON();
var features_EmpreendimentoCondomnioResicencialTerraNova_52 = format_EmpreendimentoCondomnioResicencialTerraNova_52.readFeatures(json_EmpreendimentoCondomnioResicencialTerraNova_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCondomnioResicencialTerraNova_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCondomnioResicencialTerraNova_52.addFeatures(features_EmpreendimentoCondomnioResicencialTerraNova_52);
var lyr_EmpreendimentoCondomnioResicencialTerraNova_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCondomnioResicencialTerraNova_52, 
                style: style_EmpreendimentoCondomnioResicencialTerraNova_52,
                popuplayertitle: 'Empreendimento Condomínio Resicencial Terra Nova',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_52.png" /> Empreendimento Condomínio Resicencial Terra Nova'
            });
var format_EmpreendimentoVillaDiEspanhaIII_53 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDiEspanhaIII_53 = format_EmpreendimentoVillaDiEspanhaIII_53.readFeatures(json_EmpreendimentoVillaDiEspanhaIII_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDiEspanhaIII_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDiEspanhaIII_53.addFeatures(features_EmpreendimentoVillaDiEspanhaIII_53);
var lyr_EmpreendimentoVillaDiEspanhaIII_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDiEspanhaIII_53, 
                style: style_EmpreendimentoVillaDiEspanhaIII_53,
                popuplayertitle: 'Empreendimento Villa Di Espanha I/II',
                interactive: true,
    title: 'Empreendimento Villa Di Espanha I/II<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_53_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_53_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_53_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_53_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_53_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_53_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_53_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_53_7.png" /> VIELA<br />' });
var format_EmpreendimentoVillaDiEspanhaIII_54 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDiEspanhaIII_54 = format_EmpreendimentoVillaDiEspanhaIII_54.readFeatures(json_EmpreendimentoVillaDiEspanhaIII_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDiEspanhaIII_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDiEspanhaIII_54.addFeatures(features_EmpreendimentoVillaDiEspanhaIII_54);
var lyr_EmpreendimentoVillaDiEspanhaIII_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDiEspanhaIII_54, 
                style: style_EmpreendimentoVillaDiEspanhaIII_54,
                popuplayertitle: 'Empreendimento Villa Di Espanha I/II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_54.png" /> Empreendimento Villa Di Espanha I/II'
            });
var format_EmpreendimentoSoCarlosII_55 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_55 = format_EmpreendimentoSoCarlosII_55.readFeatures(json_EmpreendimentoSoCarlosII_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_55.addFeatures(features_EmpreendimentoSoCarlosII_55);
var lyr_EmpreendimentoSoCarlosII_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_55, 
                style: style_EmpreendimentoSoCarlosII_55,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
    title: 'Empreendimento São Carlos II<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_55_0.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_55_1.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_55_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_55_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_55_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_55_5.png" /> RUAS<br />' });
var format_EmpreendimentoSoCarlosII_56 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_56 = format_EmpreendimentoSoCarlosII_56.readFeatures(json_EmpreendimentoSoCarlosII_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_56.addFeatures(features_EmpreendimentoSoCarlosII_56);
var lyr_EmpreendimentoSoCarlosII_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_56, 
                style: style_EmpreendimentoSoCarlosII_56,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSoCarlosII_56.png" /> Empreendimento São Carlos II'
            });
var format_EmpreendimentoParqueFlora_57 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_57 = format_EmpreendimentoParqueFlora_57.readFeatures(json_EmpreendimentoParqueFlora_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_57.addFeatures(features_EmpreendimentoParqueFlora_57);
var lyr_EmpreendimentoParqueFlora_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_57, 
                style: style_EmpreendimentoParqueFlora_57,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
    title: 'Empreendimento Parque Flora<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_57_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_57_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_57_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_57_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_57_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_57_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_57_6.png" /> VIELA<br />' });
var format_EmpreendimentoParqueFlora_58 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_58 = format_EmpreendimentoParqueFlora_58.readFeatures(json_EmpreendimentoParqueFlora_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_58.addFeatures(features_EmpreendimentoParqueFlora_58);
var lyr_EmpreendimentoParqueFlora_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_58, 
                style: style_EmpreendimentoParqueFlora_58,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueFlora_58.png" /> Empreendimento Parque Flora'
            });
var format_EmpreendimentoVittaSoVicente_59 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_59 = format_EmpreendimentoVittaSoVicente_59.readFeatures(json_EmpreendimentoVittaSoVicente_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_59.addFeatures(features_EmpreendimentoVittaSoVicente_59);
var lyr_EmpreendimentoVittaSoVicente_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_59, 
                style: style_EmpreendimentoVittaSoVicente_59,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
    title: 'Empreendimento Vitta São Vicente<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_59_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_59_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_59_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_59_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_59_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_59_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVittaSoVicente_60 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_60 = format_EmpreendimentoVittaSoVicente_60.readFeatures(json_EmpreendimentoVittaSoVicente_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_60.addFeatures(features_EmpreendimentoVittaSoVicente_60);
var lyr_EmpreendimentoVittaSoVicente_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_60, 
                style: style_EmpreendimentoVittaSoVicente_60,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaSoVicente_60.png" /> Empreendimento Vitta São Vicente'
            });
var format_EmpreendimentoRecantoMeneghetti_61 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_61 = format_EmpreendimentoRecantoMeneghetti_61.readFeatures(json_EmpreendimentoRecantoMeneghetti_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_61.addFeatures(features_EmpreendimentoRecantoMeneghetti_61);
var lyr_EmpreendimentoRecantoMeneghetti_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_61, 
                style: style_EmpreendimentoRecantoMeneghetti_61,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
    title: 'Empreendimento Recanto Meneghetti<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_61_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_61_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_61_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_61_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_61_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_61_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_61_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_61_7.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_61_8.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_61_9.png" /> VIELA<br />' });
var format_EmpreendimentoRecantoMeneghetti_62 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_62 = format_EmpreendimentoRecantoMeneghetti_62.readFeatures(json_EmpreendimentoRecantoMeneghetti_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_62.addFeatures(features_EmpreendimentoRecantoMeneghetti_62);
var lyr_EmpreendimentoRecantoMeneghetti_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_62, 
                style: style_EmpreendimentoRecantoMeneghetti_62,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoRecantoMeneghetti_62.png" /> Empreendimento Recanto Meneghetti'
            });
var format_EmpreendimentoParquedosSabias_63 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_63 = format_EmpreendimentoParquedosSabias_63.readFeatures(json_EmpreendimentoParquedosSabias_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_63.addFeatures(features_EmpreendimentoParquedosSabias_63);
var lyr_EmpreendimentoParquedosSabias_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_63, 
                style: style_EmpreendimentoParquedosSabias_63,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
    title: 'Empreendimento Parque dos Sabias<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_63_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_63_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_63_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_63_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_63_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_63_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_63_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_63_7.png" /> VIELA<br />' });
var format_EmpreendimentoParquedosSabias_64 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_64 = format_EmpreendimentoParquedosSabias_64.readFeatures(json_EmpreendimentoParquedosSabias_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_64.addFeatures(features_EmpreendimentoParquedosSabias_64);
var lyr_EmpreendimentoParquedosSabias_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_64, 
                style: style_EmpreendimentoParquedosSabias_64,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquedosSabias_64.png" /> Empreendimento Parque dos Sabias'
            });
var format_EmpreendimentoMoradadaMata_65 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_65 = format_EmpreendimentoMoradadaMata_65.readFeatures(json_EmpreendimentoMoradadaMata_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_65.addFeatures(features_EmpreendimentoMoradadaMata_65);
var lyr_EmpreendimentoMoradadaMata_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_65, 
                style: style_EmpreendimentoMoradadaMata_65,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
    title: 'Empreendimento Morada da Mata<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_65_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_65_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_65_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_65_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_65_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_65_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_65_6.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_65_7.png" /> RUAS<br />' });
var format_EmpreendimentoMoradadaMata_66 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_66 = format_EmpreendimentoMoradadaMata_66.readFeatures(json_EmpreendimentoMoradadaMata_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_66.addFeatures(features_EmpreendimentoMoradadaMata_66);
var lyr_EmpreendimentoMoradadaMata_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_66, 
                style: style_EmpreendimentoMoradadaMata_66,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadaMata_66.png" /> Empreendimento Morada da Mata'
            });
var format_EmpreendimentoIrineuZanetiII_67 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_67 = format_EmpreendimentoIrineuZanetiII_67.readFeatures(json_EmpreendimentoIrineuZanetiII_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_67.addFeatures(features_EmpreendimentoIrineuZanetiII_67);
var lyr_EmpreendimentoIrineuZanetiII_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_67, 
                style: style_EmpreendimentoIrineuZanetiII_67,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
    title: 'Empreendimento Irineu Zaneti II<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_67_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_67_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_67_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_67_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_67_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_67_5.png" /> RUAS<br />' });
var format_EmpreendimentoIrineuZanetiII_68 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_68 = format_EmpreendimentoIrineuZanetiII_68.readFeatures(json_EmpreendimentoIrineuZanetiII_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_68.addFeatures(features_EmpreendimentoIrineuZanetiII_68);
var lyr_EmpreendimentoIrineuZanetiII_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_68, 
                style: style_EmpreendimentoIrineuZanetiII_68,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoIrineuZanetiII_68.png" /> Empreendimento Irineu Zaneti II'
            });
var format_EmpreendimentoResidencialJabuticabeiras_69 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_69 = format_EmpreendimentoResidencialJabuticabeiras_69.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_69.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_69);
var lyr_EmpreendimentoResidencialJabuticabeiras_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_69, 
                style: style_EmpreendimentoResidencialJabuticabeiras_69,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
    title: 'Empreendimento Residencial Jabuticabeiras<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_69_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_69_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_69_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_69_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_69_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_69_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_69_6.png" /> VIELA<br />' });
var format_EmpreendimentoResidencialJabuticabeiras_70 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_70 = format_EmpreendimentoResidencialJabuticabeiras_70.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_70.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_70);
var lyr_EmpreendimentoResidencialJabuticabeiras_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_70, 
                style: style_EmpreendimentoResidencialJabuticabeiras_70,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_70.png" /> Empreendimento Residencial Jabuticabeiras'
            });
var format_EmpreendimentoResidencialMarianaAlarcon_71 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_71 = format_EmpreendimentoResidencialMarianaAlarcon_71.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_71.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_71);
var lyr_EmpreendimentoResidencialMarianaAlarcon_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_71, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_71,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
    title: 'Empreendimento Residencial Mariana Alarcon<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_71_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_71_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_71_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_71_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_71_4.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_71_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_71_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialMarianaAlarcon_72 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_72 = format_EmpreendimentoResidencialMarianaAlarcon_72.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_72.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_72);
var lyr_EmpreendimentoResidencialMarianaAlarcon_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_72, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_72,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_72.png" /> Empreendimento Residencial Mariana Alarcon'
            });
var format_EmpreendimentoResidencialCintraAlves_73 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_73 = format_EmpreendimentoResidencialCintraAlves_73.readFeatures(json_EmpreendimentoResidencialCintraAlves_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_73.addFeatures(features_EmpreendimentoResidencialCintraAlves_73);
var lyr_EmpreendimentoResidencialCintraAlves_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_73, 
                style: style_EmpreendimentoResidencialCintraAlves_73,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
    title: 'Empreendimento Residencial Cintra Alves<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_73_0.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_73_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_73_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_73_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_73_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_73_5.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_73_6.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_73_7.png" /> Viela<br />' });
var format_EmpreendimentoResidencialCintraAlves_74 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_74 = format_EmpreendimentoResidencialCintraAlves_74.readFeatures(json_EmpreendimentoResidencialCintraAlves_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_74.addFeatures(features_EmpreendimentoResidencialCintraAlves_74);
var lyr_EmpreendimentoResidencialCintraAlves_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_74, 
                style: style_EmpreendimentoResidencialCintraAlves_74,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialCintraAlves_74.png" /> Empreendimento Residencial Cintra Alves'
            });
var format_EmpreendimentoLoteamentolamo_75 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_75 = format_EmpreendimentoLoteamentolamo_75.readFeatures(json_EmpreendimentoLoteamentolamo_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_75.addFeatures(features_EmpreendimentoLoteamentolamo_75);
var lyr_EmpreendimentoLoteamentolamo_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_75, 
                style: style_EmpreendimentoLoteamentolamo_75,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
    title: 'Empreendimento Loteamento Álamo <br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_75_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_75_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_75_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_75_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_75_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_75_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_75_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_75_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_75_8.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_75_9.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_75_10.png" /> VIELA<br />' });
var format_EmpreendimentoLoteamentolamo_76 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_76 = format_EmpreendimentoLoteamentolamo_76.readFeatures(json_EmpreendimentoLoteamentolamo_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_76.addFeatures(features_EmpreendimentoLoteamentolamo_76);
var lyr_EmpreendimentoLoteamentolamo_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_76, 
                style: style_EmpreendimentoLoteamentolamo_76,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoLoteamentolamo_76.png" /> Empreendimento Loteamento Álamo '
            });
var format_EmpreendimentoSantaLina_77 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_77 = format_EmpreendimentoSantaLina_77.readFeatures(json_EmpreendimentoSantaLina_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_77.addFeatures(features_EmpreendimentoSantaLina_77);
var lyr_EmpreendimentoSantaLina_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_77, 
                style: style_EmpreendimentoSantaLina_77,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
    title: 'Empreendimento Santa Lina<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_77_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_77_1.png" /> Lotes/Quadras<br />' });
var format_EmpreendimentoSantaLina_78 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_78 = format_EmpreendimentoSantaLina_78.readFeatures(json_EmpreendimentoSantaLina_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_78.addFeatures(features_EmpreendimentoSantaLina_78);
var lyr_EmpreendimentoSantaLina_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_78, 
                style: style_EmpreendimentoSantaLina_78,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSantaLina_78.png" /> Empreendimento Santa Lina'
            });
var format_EmpreendimentoResidencialPousoAlegreII_79 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegreII_79 = format_EmpreendimentoResidencialPousoAlegreII_79.readFeatures(json_EmpreendimentoResidencialPousoAlegreII_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegreII_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegreII_79.addFeatures(features_EmpreendimentoResidencialPousoAlegreII_79);
var lyr_EmpreendimentoResidencialPousoAlegreII_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegreII_79, 
                style: style_EmpreendimentoResidencialPousoAlegreII_79,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre II',
                interactive: true,
    title: 'Empreendimento Residencial Pouso Alegre II<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_79_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_79_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_79_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_79_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_79_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_79_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_79_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_79_7.png" /> SERVIDAO<br />' });
var format_EmpreendimentoResidencialPousoAlegreII_80 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegreII_80 = format_EmpreendimentoResidencialPousoAlegreII_80.readFeatures(json_EmpreendimentoResidencialPousoAlegreII_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegreII_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegreII_80.addFeatures(features_EmpreendimentoResidencialPousoAlegreII_80);
var lyr_EmpreendimentoResidencialPousoAlegreII_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegreII_80, 
                style: style_EmpreendimentoResidencialPousoAlegreII_80,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_80.png" /> Empreendimento Residencial Pouso Alegre II'
            });
var format_EmpreendimentoResidencialPousoAlegre_81 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_81 = format_EmpreendimentoResidencialPousoAlegre_81.readFeatures(json_EmpreendimentoResidencialPousoAlegre_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_81.addFeatures(features_EmpreendimentoResidencialPousoAlegre_81);
var lyr_EmpreendimentoResidencialPousoAlegre_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_81, 
                style: style_EmpreendimentoResidencialPousoAlegre_81,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
    title: 'Empreendimento Residencial Pouso Alegre<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_81_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_81_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_81_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_81_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_81_4.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_81_5.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_81_6.png" /> Viela<br />' });
var format_EmpreendimentoResidencialPousoAlegre_82 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_82 = format_EmpreendimentoResidencialPousoAlegre_82.readFeatures(json_EmpreendimentoResidencialPousoAlegre_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_82.addFeatures(features_EmpreendimentoResidencialPousoAlegre_82);
var lyr_EmpreendimentoResidencialPousoAlegre_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_82, 
                style: style_EmpreendimentoResidencialPousoAlegre_82,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialPousoAlegre_82.png" /> Empreendimento Residencial Pouso Alegre'
            });
var format_EmpreendimentoResidencialAltodaFazenda_83 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_83 = format_EmpreendimentoResidencialAltodaFazenda_83.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_83.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_83);
var lyr_EmpreendimentoResidencialAltodaFazenda_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_83, 
                style: style_EmpreendimentoResidencialAltodaFazenda_83,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
    title: 'Empreendimento Residencial Alto da Fazenda <br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_83_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_83_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_83_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_83_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_83_4.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialAltodaFazenda_84 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_84 = format_EmpreendimentoResidencialAltodaFazenda_84.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_84.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_84);
var lyr_EmpreendimentoResidencialAltodaFazenda_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_84, 
                style: style_EmpreendimentoResidencialAltodaFazenda_84,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_84.png" /> Empreendimento Residencial Alto da Fazenda '
            });
var format_EmpreendimentoResidencialMarioTasso_85 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_85 = format_EmpreendimentoResidencialMarioTasso_85.readFeatures(json_EmpreendimentoResidencialMarioTasso_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_85.addFeatures(features_EmpreendimentoResidencialMarioTasso_85);
var lyr_EmpreendimentoResidencialMarioTasso_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_85, 
                style: style_EmpreendimentoResidencialMarioTasso_85,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
    title: 'Empreendimento Residencial Mario Tasso<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_85_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_85_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_85_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_85_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_85_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialMarioTasso_86 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_86 = format_EmpreendimentoResidencialMarioTasso_86.readFeatures(json_EmpreendimentoResidencialMarioTasso_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_86.addFeatures(features_EmpreendimentoResidencialMarioTasso_86);
var lyr_EmpreendimentoResidencialMarioTasso_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_86, 
                style: style_EmpreendimentoResidencialMarioTasso_86,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarioTasso_86.png" /> Empreendimento Residencial Mario Tasso'
            });
var format_EmpreendimentoResidenciaisVivenna_87 = new ol.format.GeoJSON();
var features_EmpreendimentoResidenciaisVivenna_87 = format_EmpreendimentoResidenciaisVivenna_87.readFeatures(json_EmpreendimentoResidenciaisVivenna_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidenciaisVivenna_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidenciaisVivenna_87.addFeatures(features_EmpreendimentoResidenciaisVivenna_87);
var lyr_EmpreendimentoResidenciaisVivenna_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidenciaisVivenna_87, 
                style: style_EmpreendimentoResidenciaisVivenna_87,
                popuplayertitle: 'Empreendimento Residenciais Vivenna',
                interactive: true,
    title: 'Empreendimento Residenciais Vivenna<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_87_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_87_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_87_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_87_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_87_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_87_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_87_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_87_7.png" /> VIELA<br />' });
var format_EmpreendimentoResidenciaisVivenna_88 = new ol.format.GeoJSON();
var features_EmpreendimentoResidenciaisVivenna_88 = format_EmpreendimentoResidenciaisVivenna_88.readFeatures(json_EmpreendimentoResidenciaisVivenna_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidenciaisVivenna_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidenciaisVivenna_88.addFeatures(features_EmpreendimentoResidenciaisVivenna_88);
var lyr_EmpreendimentoResidenciaisVivenna_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidenciaisVivenna_88, 
                style: style_EmpreendimentoResidenciaisVivenna_88,
                popuplayertitle: 'Empreendimento Residenciais Vivenna',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidenciaisVivenna_88.png" /> Empreendimento Residenciais Vivenna'
            });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_89 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_89 = format_EmpreendimentoAbuDhabiParadiseResortResidence_89.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_89.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_89);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_89, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_89,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Empreendimento Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_89_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_89_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_89_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_89_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_89_4.png" /> Área Non Edificandi<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_89_5.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_89_6.png" /> Passeio<br />' });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_90 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_90 = format_EmpreendimentoAbuDhabiParadiseResortResidence_90.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_90.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_90);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_90, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_90,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_90.png" /> Empreendimento Abu Dhabi Paradise Resort Residence'
            });
var format_EmprendimentoElias_91 = new ol.format.GeoJSON();
var features_EmprendimentoElias_91 = format_EmprendimentoElias_91.readFeatures(json_EmprendimentoElias_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_91.addFeatures(features_EmprendimentoElias_91);
var lyr_EmprendimentoElias_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_91, 
                style: style_EmprendimentoElias_91,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
    title: 'Emprendimento Elias<br />\
    <img src="styles/legend/EmprendimentoElias_91_0.png" /> Ruas<br />\
    <img src="styles/legend/EmprendimentoElias_91_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmprendimentoElias_91_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmprendimentoElias_91_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmprendimentoElias_91_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmprendimentoElias_91_5.png" /> Passeio<br />\
    <img src="styles/legend/EmprendimentoElias_91_6.png" /> Lotes mistos<br />' });
var format_EmprendimentoElias_92 = new ol.format.GeoJSON();
var features_EmprendimentoElias_92 = format_EmprendimentoElias_92.readFeatures(json_EmprendimentoElias_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_92.addFeatures(features_EmprendimentoElias_92);
var lyr_EmprendimentoElias_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_92, 
                style: style_EmprendimentoElias_92,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
                title: '<img src="styles/legend/EmprendimentoElias_92.png" /> Emprendimento Elias'
            });
var format_EmpreendimentoResidencialSoCarlosI_93 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_93 = format_EmpreendimentoResidencialSoCarlosI_93.readFeatures(json_EmpreendimentoResidencialSoCarlosI_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_93.addFeatures(features_EmpreendimentoResidencialSoCarlosI_93);
var lyr_EmpreendimentoResidencialSoCarlosI_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_93, 
                style: style_EmpreendimentoResidencialSoCarlosI_93,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
    title: 'Empreendimento Residencial São Carlos I<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_93_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_93_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_93_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_93_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_93_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSoCarlosI_94 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_94 = format_EmpreendimentoResidencialSoCarlosI_94.readFeatures(json_EmpreendimentoResidencialSoCarlosI_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_94.addFeatures(features_EmpreendimentoResidencialSoCarlosI_94);
var lyr_EmpreendimentoResidencialSoCarlosI_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_94, 
                style: style_EmpreendimentoResidencialSoCarlosI_94,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSoCarlosI_94.png" /> Empreendimento Residencial São Carlos I'
            });
var format_EmpreendimentoMonti_95 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_95 = format_EmpreendimentoMonti_95.readFeatures(json_EmpreendimentoMonti_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_95.addFeatures(features_EmpreendimentoMonti_95);
var lyr_EmpreendimentoMonti_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_95, 
                style: style_EmpreendimentoMonti_95,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
    title: 'Empreendimento Montié<br />\
    <img src="styles/legend/EmpreendimentoMonti_95_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMonti_95_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMonti_95_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMonti_95_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMonti_95_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMonti_95_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoMonti_96 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_96 = format_EmpreendimentoMonti_96.readFeatures(json_EmpreendimentoMonti_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_96.addFeatures(features_EmpreendimentoMonti_96);
var lyr_EmpreendimentoMonti_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_96, 
                style: style_EmpreendimentoMonti_96,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMonti_96.png" /> Empreendimento Montié'
            });
var format_EmpreendimentoResidencialMoradadoBosque_97 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_97 = format_EmpreendimentoResidencialMoradadoBosque_97.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_97.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_97);
var lyr_EmpreendimentoResidencialMoradadoBosque_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_97, 
                style: style_EmpreendimentoResidencialMoradadoBosque_97,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
    title: 'Empreendimento Residencial Morada do Bosque<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_97_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_97_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_97_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_97_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_97_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_97_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_97_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialMoradadoBosque_98 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_98 = format_EmpreendimentoResidencialMoradadoBosque_98.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_98.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_98);
var lyr_EmpreendimentoResidencialMoradadoBosque_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_98, 
                style: style_EmpreendimentoResidencialMoradadoBosque_98,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_98.png" /> Empreendimento Residencial Morada do Bosque'
            });
var format_EmpreendimentoVittaAlvorada_99 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_99 = format_EmpreendimentoVittaAlvorada_99.readFeatures(json_EmpreendimentoVittaAlvorada_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_99.addFeatures(features_EmpreendimentoVittaAlvorada_99);
var lyr_EmpreendimentoVittaAlvorada_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_99, 
                style: style_EmpreendimentoVittaAlvorada_99,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
    title: 'Empreendimento Vitta Alvorada<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_99_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_99_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_99_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_99_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_99_4.png" /> A-PROP-LINE<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_99_5.png" /> Passeio<br />' });
var format_EmpreendimentoVittaAlvorada_100 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_100 = format_EmpreendimentoVittaAlvorada_100.readFeatures(json_EmpreendimentoVittaAlvorada_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_100.addFeatures(features_EmpreendimentoVittaAlvorada_100);
var lyr_EmpreendimentoVittaAlvorada_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_100, 
                style: style_EmpreendimentoVittaAlvorada_100,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaAlvorada_100.png" /> Empreendimento Vitta Alvorada'
            });
var format_EmpreendimentoResidencialMarthaHelena_101 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_101 = format_EmpreendimentoResidencialMarthaHelena_101.readFeatures(json_EmpreendimentoResidencialMarthaHelena_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_101.addFeatures(features_EmpreendimentoResidencialMarthaHelena_101);
var lyr_EmpreendimentoResidencialMarthaHelena_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_101, 
                style: style_EmpreendimentoResidencialMarthaHelena_101,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
    title: 'Empreendimento Residencial Martha Helena<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_101_0.png" /> 0<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_101_1.png" /> Zona de Uso Residencial<br />' });
var format_EmpreendimentoResidencialMarthaHelena_102 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_102 = format_EmpreendimentoResidencialMarthaHelena_102.readFeatures(json_EmpreendimentoResidencialMarthaHelena_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_102.addFeatures(features_EmpreendimentoResidencialMarthaHelena_102);
var lyr_EmpreendimentoResidencialMarthaHelena_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_102, 
                style: style_EmpreendimentoResidencialMarthaHelena_102,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarthaHelena_102.png" /> Empreendimento Residencial Martha Helena'
            });
var format_EmpreendimentoResidencialYasminTorres_103 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_103 = format_EmpreendimentoResidencialYasminTorres_103.readFeatures(json_EmpreendimentoResidencialYasminTorres_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_103.addFeatures(features_EmpreendimentoResidencialYasminTorres_103);
var lyr_EmpreendimentoResidencialYasminTorres_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_103, 
                style: style_EmpreendimentoResidencialYasminTorres_103,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_103.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoResidencialYasminTorres_104 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_104 = format_EmpreendimentoResidencialYasminTorres_104.readFeatures(json_EmpreendimentoResidencialYasminTorres_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_104.addFeatures(features_EmpreendimentoResidencialYasminTorres_104);
var lyr_EmpreendimentoResidencialYasminTorres_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_104, 
                style: style_EmpreendimentoResidencialYasminTorres_104,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_104.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoPalmeiraReal_105 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_105 = format_EmpreendimentoPalmeiraReal_105.readFeatures(json_EmpreendimentoPalmeiraReal_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_105.addFeatures(features_EmpreendimentoPalmeiraReal_105);
var lyr_EmpreendimentoPalmeiraReal_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_105, 
                style: style_EmpreendimentoPalmeiraReal_105,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
    title: 'Empreendimento Palmeira Real<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_105_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_105_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_105_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_105_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_105_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_105_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoPalmeiraReal_106 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_106 = format_EmpreendimentoPalmeiraReal_106.readFeatures(json_EmpreendimentoPalmeiraReal_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_106.addFeatures(features_EmpreendimentoPalmeiraReal_106);
var lyr_EmpreendimentoPalmeiraReal_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_106, 
                style: style_EmpreendimentoPalmeiraReal_106,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoPalmeiraReal_106.png" /> Empreendimento Palmeira Real'
            });
var format_EmpreendimentoEssence_107 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_107 = format_EmpreendimentoEssence_107.readFeatures(json_EmpreendimentoEssence_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_107.addFeatures(features_EmpreendimentoEssence_107);
var lyr_EmpreendimentoEssence_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_107, 
                style: style_EmpreendimentoEssence_107,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_107.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoEssence_108 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_108 = format_EmpreendimentoEssence_108.readFeatures(json_EmpreendimentoEssence_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_108.addFeatures(features_EmpreendimentoEssence_108);
var lyr_EmpreendimentoEssence_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_108, 
                style: style_EmpreendimentoEssence_108,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_108.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoVersalhes_109 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_109 = format_EmpreendimentoVersalhes_109.readFeatures(json_EmpreendimentoVersalhes_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_109.addFeatures(features_EmpreendimentoVersalhes_109);
var lyr_EmpreendimentoVersalhes_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_109, 
                style: style_EmpreendimentoVersalhes_109,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
    title: 'Empreendimento Versalhes<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_109_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_109_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_109_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_109_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_109_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_109_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVersalhes_110 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_110 = format_EmpreendimentoVersalhes_110.readFeatures(json_EmpreendimentoVersalhes_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_110.addFeatures(features_EmpreendimentoVersalhes_110);
var lyr_EmpreendimentoVersalhes_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_110, 
                style: style_EmpreendimentoVersalhes_110,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVersalhes_110.png" /> Empreendimento Versalhes'
            });
var format_EmpreendimentoSonetto_111 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_111 = format_EmpreendimentoSonetto_111.readFeatures(json_EmpreendimentoSonetto_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_111.addFeatures(features_EmpreendimentoSonetto_111);
var lyr_EmpreendimentoSonetto_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_111, 
                style: style_EmpreendimentoSonetto_111,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_111.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoSonetto_112 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_112 = format_EmpreendimentoSonetto_112.readFeatures(json_EmpreendimentoSonetto_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_112.addFeatures(features_EmpreendimentoSonetto_112);
var lyr_EmpreendimentoSonetto_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_112, 
                style: style_EmpreendimentoSonetto_112,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_112.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoResidencialSantaIns_113 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_113 = format_EmpreendimentoResidencialSantaIns_113.readFeatures(json_EmpreendimentoResidencialSantaIns_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_113.addFeatures(features_EmpreendimentoResidencialSantaIns_113);
var lyr_EmpreendimentoResidencialSantaIns_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_113, 
                style: style_EmpreendimentoResidencialSantaIns_113,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
    title: 'Empreendimento Residencial Santa Inês<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_113_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_113_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_113_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_113_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_113_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_113_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaIns_114 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_114 = format_EmpreendimentoResidencialSantaIns_114.readFeatures(json_EmpreendimentoResidencialSantaIns_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_114.addFeatures(features_EmpreendimentoResidencialSantaIns_114);
var lyr_EmpreendimentoResidencialSantaIns_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_114, 
                style: style_EmpreendimentoResidencialSantaIns_114,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaIns_114.png" /> Empreendimento Residencial Santa Inês'
            });
var format_EmpreendimentoEdifcioSolNascente_115 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_115 = format_EmpreendimentoEdifcioSolNascente_115.readFeatures(json_EmpreendimentoEdifcioSolNascente_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_115.addFeatures(features_EmpreendimentoEdifcioSolNascente_115);
var lyr_EmpreendimentoEdifcioSolNascente_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_115, 
                style: style_EmpreendimentoEdifcioSolNascente_115,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_115.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoEdifcioSolNascente_116 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_116 = format_EmpreendimentoEdifcioSolNascente_116.readFeatures(json_EmpreendimentoEdifcioSolNascente_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_116.addFeatures(features_EmpreendimentoEdifcioSolNascente_116);
var lyr_EmpreendimentoEdifcioSolNascente_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_116, 
                style: style_EmpreendimentoEdifcioSolNascente_116,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_116.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoResidencialQuintadosOitis_117 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_117 = format_EmpreendimentoResidencialQuintadosOitis_117.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_117.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_117);
var lyr_EmpreendimentoResidencialQuintadosOitis_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_117, 
                style: style_EmpreendimentoResidencialQuintadosOitis_117,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Empreendimento Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_117_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_117_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_117_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_117_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_117_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_117_5.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialQuintadosOitis_118 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_118 = format_EmpreendimentoResidencialQuintadosOitis_118.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_118.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_118);
var lyr_EmpreendimentoResidencialQuintadosOitis_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_118, 
                style: style_EmpreendimentoResidencialQuintadosOitis_118,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_118.png" /> Empreendimento Residencial Quinta dos Oitis'
            });
var format_EmpreendimentoResidencialQuintadoSol_119 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_119 = format_EmpreendimentoResidencialQuintadoSol_119.readFeatures(json_EmpreendimentoResidencialQuintadoSol_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_119.addFeatures(features_EmpreendimentoResidencialQuintadoSol_119);
var lyr_EmpreendimentoResidencialQuintadoSol_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_119, 
                style: style_EmpreendimentoResidencialQuintadoSol_119,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
    title: 'Empreendimento Residencial Quinta do Sol<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_119_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_119_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_119_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_119_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_119_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_119_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_119_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialQuintadoSol_120 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_120 = format_EmpreendimentoResidencialQuintadoSol_120.readFeatures(json_EmpreendimentoResidencialQuintadoSol_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_120.addFeatures(features_EmpreendimentoResidencialQuintadoSol_120);
var lyr_EmpreendimentoResidencialQuintadoSol_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_120, 
                style: style_EmpreendimentoResidencialQuintadoSol_120,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadoSol_120.png" /> Empreendimento Residencial Quinta do Sol'
            });
var format_EmpreendimentoParquePalmeiraImperial_121 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_121 = format_EmpreendimentoParquePalmeiraImperial_121.readFeatures(json_EmpreendimentoParquePalmeiraImperial_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_121.addFeatures(features_EmpreendimentoParquePalmeiraImperial_121);
var lyr_EmpreendimentoParquePalmeiraImperial_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_121, 
                style: style_EmpreendimentoParquePalmeiraImperial_121,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
    title: 'Empreendimento Parque Palmeira Imperial<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_121_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_121_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_121_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_121_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_121_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_121_5.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_121_6.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_121_7.png" /> RUAS<br />' });
var format_EmpreendimentoParquePalmeiraImperial_122 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_122 = format_EmpreendimentoParquePalmeiraImperial_122.readFeatures(json_EmpreendimentoParquePalmeiraImperial_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_122.addFeatures(features_EmpreendimentoParquePalmeiraImperial_122);
var lyr_EmpreendimentoParquePalmeiraImperial_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_122, 
                style: style_EmpreendimentoParquePalmeiraImperial_122,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquePalmeiraImperial_122.png" /> Empreendimento Parque Palmeira Imperial'
            });
var format_EmpreendimentoBordadaMata_123 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_123 = format_EmpreendimentoBordadaMata_123.readFeatures(json_EmpreendimentoBordadaMata_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_123.addFeatures(features_EmpreendimentoBordadaMata_123);
var lyr_EmpreendimentoBordadaMata_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_123, 
                style: style_EmpreendimentoBordadaMata_123,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
    title: 'Empreendimento Borda da Mata<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_123_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_123_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_123_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_123_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_123_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_123_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_123_6.png" /> Represa<br />' });
var format_EmpreendimentoBordadaMata_124 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_124 = format_EmpreendimentoBordadaMata_124.readFeatures(json_EmpreendimentoBordadaMata_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_124.addFeatures(features_EmpreendimentoBordadaMata_124);
var lyr_EmpreendimentoBordadaMata_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_124, 
                style: style_EmpreendimentoBordadaMata_124,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoBordadaMata_124.png" /> Empreendimento Borda da Mata'
            });
var format_EmpreendimentoEdifcioResidencialHope_125 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_125 = format_EmpreendimentoEdifcioResidencialHope_125.readFeatures(json_EmpreendimentoEdifcioResidencialHope_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_125.addFeatures(features_EmpreendimentoEdifcioResidencialHope_125);
var lyr_EmpreendimentoEdifcioResidencialHope_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_125, 
                style: style_EmpreendimentoEdifcioResidencialHope_125,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_125.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoEdifcioResidencialHope_126 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_126 = format_EmpreendimentoEdifcioResidencialHope_126.readFeatures(json_EmpreendimentoEdifcioResidencialHope_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_126.addFeatures(features_EmpreendimentoEdifcioResidencialHope_126);
var lyr_EmpreendimentoEdifcioResidencialHope_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_126, 
                style: style_EmpreendimentoEdifcioResidencialHope_126,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_126.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoHorizResidence_127 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_127 = format_EmpreendimentoHorizResidence_127.readFeatures(json_EmpreendimentoHorizResidence_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_127.addFeatures(features_EmpreendimentoHorizResidence_127);
var lyr_EmpreendimentoHorizResidence_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_127, 
                style: style_EmpreendimentoHorizResidence_127,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_127.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoHorizResidence_128 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_128 = format_EmpreendimentoHorizResidence_128.readFeatures(json_EmpreendimentoHorizResidence_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_128.addFeatures(features_EmpreendimentoHorizResidence_128);
var lyr_EmpreendimentoHorizResidence_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_128, 
                style: style_EmpreendimentoHorizResidence_128,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_128.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoJardimFlora_129 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_129 = format_EmpreendimentoJardimFlora_129.readFeatures(json_EmpreendimentoJardimFlora_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_129.addFeatures(features_EmpreendimentoJardimFlora_129);
var lyr_EmpreendimentoJardimFlora_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_129, 
                style: style_EmpreendimentoJardimFlora_129,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
    title: 'Empreendimento Jardim Flora<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_129_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_129_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_129_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_129_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_129_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_129_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_129_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_129_7.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_129_8.png" /> RUAS<br />' });
var format_EmpreendimentoJardimFlora_130 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_130 = format_EmpreendimentoJardimFlora_130.readFeatures(json_EmpreendimentoJardimFlora_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_130.addFeatures(features_EmpreendimentoJardimFlora_130);
var lyr_EmpreendimentoJardimFlora_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_130, 
                style: style_EmpreendimentoJardimFlora_130,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimFlora_130.png" /> Empreendimento Jardim Flora'
            });
var format_EmpreendimentoJardimHorizonte_131 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_131 = format_EmpreendimentoJardimHorizonte_131.readFeatures(json_EmpreendimentoJardimHorizonte_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_131.addFeatures(features_EmpreendimentoJardimHorizonte_131);
var lyr_EmpreendimentoJardimHorizonte_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_131, 
                style: style_EmpreendimentoJardimHorizonte_131,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
    title: 'Empreendimento Jardim Horizonte<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_131_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_131_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_131_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_131_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_131_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_131_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_131_6.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoJardimHorizonte_132 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_132 = format_EmpreendimentoJardimHorizonte_132.readFeatures(json_EmpreendimentoJardimHorizonte_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_132.addFeatures(features_EmpreendimentoJardimHorizonte_132);
var lyr_EmpreendimentoJardimHorizonte_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_132, 
                style: style_EmpreendimentoJardimHorizonte_132,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimHorizonte_132.png" /> Empreendimento Jardim Horizonte'
            });
var format_EmpreendimentoJardimMariaLuiza_133 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_133 = format_EmpreendimentoJardimMariaLuiza_133.readFeatures(json_EmpreendimentoJardimMariaLuiza_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_133.addFeatures(features_EmpreendimentoJardimMariaLuiza_133);
var lyr_EmpreendimentoJardimMariaLuiza_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_133, 
                style: style_EmpreendimentoJardimMariaLuiza_133,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
    title: 'Empreendimento Jardim Maria Luiza<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_133_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_133_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_133_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_133_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_133_4.png" /> Passeio<br />' });
var format_EmpreendimentoJardimMariaLuiza_134 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_134 = format_EmpreendimentoJardimMariaLuiza_134.readFeatures(json_EmpreendimentoJardimMariaLuiza_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_134.addFeatures(features_EmpreendimentoJardimMariaLuiza_134);
var lyr_EmpreendimentoJardimMariaLuiza_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_134, 
                style: style_EmpreendimentoJardimMariaLuiza_134,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimMariaLuiza_134.png" /> Empreendimento Jardim Maria Luiza'
            });
var format_EmpreendimentoMontBlancResidence_135 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_135 = format_EmpreendimentoMontBlancResidence_135.readFeatures(json_EmpreendimentoMontBlancResidence_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_135.addFeatures(features_EmpreendimentoMontBlancResidence_135);
var lyr_EmpreendimentoMontBlancResidence_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_135, 
                style: style_EmpreendimentoMontBlancResidence_135,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_135.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMontBlancResidence_136 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_136 = format_EmpreendimentoMontBlancResidence_136.readFeatures(json_EmpreendimentoMontBlancResidence_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_136.addFeatures(features_EmpreendimentoMontBlancResidence_136);
var lyr_EmpreendimentoMontBlancResidence_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_136, 
                style: style_EmpreendimentoMontBlancResidence_136,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_136.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMoradadoVerdeII_137 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_137 = format_EmpreendimentoMoradadoVerdeII_137.readFeatures(json_EmpreendimentoMoradadoVerdeII_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_137.addFeatures(features_EmpreendimentoMoradadoVerdeII_137);
var lyr_EmpreendimentoMoradadoVerdeII_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_137, 
                style: style_EmpreendimentoMoradadoVerdeII_137,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
    title: 'Empreendimento Morada do Verde II<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_137_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_137_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_137_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_137_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_137_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_137_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_137_6.png" /> Lotes Mistos<br />' });
var format_EmpreendimentoMoradadoVerdeII_138 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_138 = format_EmpreendimentoMoradadoVerdeII_138.readFeatures(json_EmpreendimentoMoradadoVerdeII_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_138.addFeatures(features_EmpreendimentoMoradadoVerdeII_138);
var lyr_EmpreendimentoMoradadoVerdeII_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_138, 
                style: style_EmpreendimentoMoradadoVerdeII_138,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadoVerdeII_138.png" /> Empreendimento Morada do Verde II'
            });
var format_EmpreendimentoResicencialNairRetuci_139 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_139 = format_EmpreendimentoResicencialNairRetuci_139.readFeatures(json_EmpreendimentoResicencialNairRetuci_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_139.addFeatures(features_EmpreendimentoResicencialNairRetuci_139);
var lyr_EmpreendimentoResicencialNairRetuci_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_139, 
                style: style_EmpreendimentoResicencialNairRetuci_139,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
    title: 'Empreendimento Resicencial Nair Retuci<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_139_0.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_139_1.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_139_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_139_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_139_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_139_5.png" /> Passeio<br />' });
var format_EmpreendimentoResicencialNairRetuci_140 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_140 = format_EmpreendimentoResicencialNairRetuci_140.readFeatures(json_EmpreendimentoResicencialNairRetuci_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_140.addFeatures(features_EmpreendimentoResicencialNairRetuci_140);
var lyr_EmpreendimentoResicencialNairRetuci_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_140, 
                style: style_EmpreendimentoResicencialNairRetuci_140,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResicencialNairRetuci_140.png" /> Empreendimento Resicencial Nair Retuci'
            });
var format_EmpreendimentoParagonII_141 = new ol.format.GeoJSON();
var features_EmpreendimentoParagonII_141 = format_EmpreendimentoParagonII_141.readFeatures(json_EmpreendimentoParagonII_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagonII_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagonII_141.addFeatures(features_EmpreendimentoParagonII_141);
var lyr_EmpreendimentoParagonII_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagonII_141, 
                style: style_EmpreendimentoParagonII_141,
                popuplayertitle: 'Empreendimento Paragon II',
                interactive: true,
    title: 'Empreendimento Paragon II<br />\
    <img src="styles/legend/EmpreendimentoParagonII_141_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParagonII_141_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoParagonII_141_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParagonII_141_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParagonII_141_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoParagonII_141_5.png" /> RUAS<br />' });
var format_EmpreendimentoParagonII_142 = new ol.format.GeoJSON();
var features_EmpreendimentoParagonII_142 = format_EmpreendimentoParagonII_142.readFeatures(json_EmpreendimentoParagonII_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagonII_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagonII_142.addFeatures(features_EmpreendimentoParagonII_142);
var lyr_EmpreendimentoParagonII_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagonII_142, 
                style: style_EmpreendimentoParagonII_142,
                popuplayertitle: 'Empreendimento Paragon II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParagonII_142.png" /> Empreendimento Paragon II'
            });
var format_EmpreendimentoParagon_143 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_143 = format_EmpreendimentoParagon_143.readFeatures(json_EmpreendimentoParagon_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_143.addFeatures(features_EmpreendimentoParagon_143);
var lyr_EmpreendimentoParagon_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_143, 
                style: style_EmpreendimentoParagon_143,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
    title: 'Empreendimento Paragon<br />\
    <img src="styles/legend/EmpreendimentoParagon_143_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParagon_143_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParagon_143_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoParagon_143_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParagon_143_4.png" /> Viela<br />\
    <img src="styles/legend/EmpreendimentoParagon_143_5.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoParagon_143_6.png" /> Passeio<br />' });
var format_EmpreendimentoParagon_144 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_144 = format_EmpreendimentoParagon_144.readFeatures(json_EmpreendimentoParagon_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_144.addFeatures(features_EmpreendimentoParagon_144);
var lyr_EmpreendimentoParagon_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_144, 
                style: style_EmpreendimentoParagon_144,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParagon_144.png" /> Empreendimento Paragon'
            });
var format_EmpreendimentoParqueVillaLobos_145 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_145 = format_EmpreendimentoParqueVillaLobos_145.readFeatures(json_EmpreendimentoParqueVillaLobos_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_145.addFeatures(features_EmpreendimentoParqueVillaLobos_145);
var lyr_EmpreendimentoParqueVillaLobos_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_145, 
                style: style_EmpreendimentoParqueVillaLobos_145,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
    title: 'Empreendimento Parque Villa-Lobos<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_145_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_145_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_145_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_145_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_145_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_145_5.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoParqueVillaLobos_146 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_146 = format_EmpreendimentoParqueVillaLobos_146.readFeatures(json_EmpreendimentoParqueVillaLobos_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_146.addFeatures(features_EmpreendimentoParqueVillaLobos_146);
var lyr_EmpreendimentoParqueVillaLobos_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_146, 
                style: style_EmpreendimentoParqueVillaLobos_146,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueVillaLobos_146.png" /> Empreendimento Parque Villa-Lobos'
            });
var format_EmpreendimentoDaVinci_147 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_147 = format_EmpreendimentoDaVinci_147.readFeatures(json_EmpreendimentoDaVinci_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_147.addFeatures(features_EmpreendimentoDaVinci_147);
var lyr_EmpreendimentoDaVinci_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_147, 
                style: style_EmpreendimentoDaVinci_147,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_147.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoDaVinci_148 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_148 = format_EmpreendimentoDaVinci_148.readFeatures(json_EmpreendimentoDaVinci_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_148.addFeatures(features_EmpreendimentoDaVinci_148);
var lyr_EmpreendimentoDaVinci_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_148, 
                style: style_EmpreendimentoDaVinci_148,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_148.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoResidencialDomingosJardini_149 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_149 = format_EmpreendimentoResidencialDomingosJardini_149.readFeatures(json_EmpreendimentoResidencialDomingosJardini_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_149.addFeatures(features_EmpreendimentoResidencialDomingosJardini_149);
var lyr_EmpreendimentoResidencialDomingosJardini_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_149, 
                style: style_EmpreendimentoResidencialDomingosJardini_149,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
    title: 'Empreendimento Residencial Domingos Jardini<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_149_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_149_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_149_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_149_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_149_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_149_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialDomingosJardini_150 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_150 = format_EmpreendimentoResidencialDomingosJardini_150.readFeatures(json_EmpreendimentoResidencialDomingosJardini_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_150.addFeatures(features_EmpreendimentoResidencialDomingosJardini_150);
var lyr_EmpreendimentoResidencialDomingosJardini_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_150, 
                style: style_EmpreendimentoResidencialDomingosJardini_150,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialDomingosJardini_150.png" /> Empreendimento Residencial Domingos Jardini'
            });
var format_EmpreendimentoResidencialSantaF_151 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_151 = format_EmpreendimentoResidencialSantaF_151.readFeatures(json_EmpreendimentoResidencialSantaF_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_151.addFeatures(features_EmpreendimentoResidencialSantaF_151);
var lyr_EmpreendimentoResidencialSantaF_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_151, 
                style: style_EmpreendimentoResidencialSantaF_151,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
    title: 'Empreendimento Residencial Santa Fé<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_151_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_151_1.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_151_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_151_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_151_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_151_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaF_152 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_152 = format_EmpreendimentoResidencialSantaF_152.readFeatures(json_EmpreendimentoResidencialSantaF_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_152.addFeatures(features_EmpreendimentoResidencialSantaF_152);
var lyr_EmpreendimentoResidencialSantaF_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_152, 
                style: style_EmpreendimentoResidencialSantaF_152,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaF_152.png" /> Empreendimento Residencial Santa Fé'
            });
var format_EmpreendimentoEdifcioRuadoSol_153 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_153 = format_EmpreendimentoEdifcioRuadoSol_153.readFeatures(json_EmpreendimentoEdifcioRuadoSol_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_153.addFeatures(features_EmpreendimentoEdifcioRuadoSol_153);
var lyr_EmpreendimentoEdifcioRuadoSol_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_153, 
                style: style_EmpreendimentoEdifcioRuadoSol_153,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_153.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoEdifcioRuadoSol_154 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_154 = format_EmpreendimentoEdifcioRuadoSol_154.readFeatures(json_EmpreendimentoEdifcioRuadoSol_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_154.addFeatures(features_EmpreendimentoEdifcioRuadoSol_154);
var lyr_EmpreendimentoEdifcioRuadoSol_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_154, 
                style: style_EmpreendimentoEdifcioRuadoSol_154,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_154.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoTorontoResidence_155 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_155 = format_EmpreendimentoTorontoResidence_155.readFeatures(json_EmpreendimentoTorontoResidence_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_155.addFeatures(features_EmpreendimentoTorontoResidence_155);
var lyr_EmpreendimentoTorontoResidence_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_155, 
                style: style_EmpreendimentoTorontoResidence_155,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
    title: 'Empreendimento Toronto Residence<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_155_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_155_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_155_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_155_3.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_155_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_155_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoTorontoResidence_156 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_156 = format_EmpreendimentoTorontoResidence_156.readFeatures(json_EmpreendimentoTorontoResidence_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_156.addFeatures(features_EmpreendimentoTorontoResidence_156);
var lyr_EmpreendimentoTorontoResidence_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_156, 
                style: style_EmpreendimentoTorontoResidence_156,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoTorontoResidence_156.png" /> Empreendimento Toronto Residence'
            });
var format_EmpreendimentoCidadeJardim_157 = new ol.format.GeoJSON();
var features_EmpreendimentoCidadeJardim_157 = format_EmpreendimentoCidadeJardim_157.readFeatures(json_EmpreendimentoCidadeJardim_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCidadeJardim_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCidadeJardim_157.addFeatures(features_EmpreendimentoCidadeJardim_157);
var lyr_EmpreendimentoCidadeJardim_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCidadeJardim_157, 
                style: style_EmpreendimentoCidadeJardim_157,
                popuplayertitle: 'Empreendimento Cidade Jardim',
                interactive: true,
    title: 'Empreendimento Cidade Jardim<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_157_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_157_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_157_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_157_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_157_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_157_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_157_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_157_7.png" /> SERVIDAO<br />' });
var format_EmpreendimentoCidadeJardim_158 = new ol.format.GeoJSON();
var features_EmpreendimentoCidadeJardim_158 = format_EmpreendimentoCidadeJardim_158.readFeatures(json_EmpreendimentoCidadeJardim_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCidadeJardim_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCidadeJardim_158.addFeatures(features_EmpreendimentoCidadeJardim_158);
var lyr_EmpreendimentoCidadeJardim_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCidadeJardim_158, 
                style: style_EmpreendimentoCidadeJardim_158,
                popuplayertitle: 'Empreendimento Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoCidadeJardim_158.png" /> Empreendimento Cidade Jardim'
            });
var format_EmpreendimentoColorado_159 = new ol.format.GeoJSON();
var features_EmpreendimentoColorado_159 = format_EmpreendimentoColorado_159.readFeatures(json_EmpreendimentoColorado_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoColorado_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoColorado_159.addFeatures(features_EmpreendimentoColorado_159);
var lyr_EmpreendimentoColorado_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoColorado_159, 
                style: style_EmpreendimentoColorado_159,
                popuplayertitle: 'Empreendimento Colorado',
                interactive: true,
    title: 'Empreendimento Colorado<br />\
    <img src="styles/legend/EmpreendimentoColorado_159_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoColorado_159_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoColorado_159_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoColorado_159_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoColorado_159_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoColorado_159_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoColorado_159_6.png" /> RUAS<br />' });
var format_EmpreendimentoColorado_160 = new ol.format.GeoJSON();
var features_EmpreendimentoColorado_160 = format_EmpreendimentoColorado_160.readFeatures(json_EmpreendimentoColorado_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoColorado_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoColorado_160.addFeatures(features_EmpreendimentoColorado_160);
var lyr_EmpreendimentoColorado_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoColorado_160, 
                style: style_EmpreendimentoColorado_160,
                popuplayertitle: 'Empreendimento Colorado',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoColorado_160.png" /> Empreendimento Colorado'
            });
var format_EmpreendimentoFerracini_161 = new ol.format.GeoJSON();
var features_EmpreendimentoFerracini_161 = format_EmpreendimentoFerracini_161.readFeatures(json_EmpreendimentoFerracini_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFerracini_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFerracini_161.addFeatures(features_EmpreendimentoFerracini_161);
var lyr_EmpreendimentoFerracini_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFerracini_161, 
                style: style_EmpreendimentoFerracini_161,
                popuplayertitle: 'Empreendimento Ferracini',
                interactive: true,
    title: 'Empreendimento Ferracini<br />\
    <img src="styles/legend/EmpreendimentoFerracini_161_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoFerracini_161_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoFerracini_161_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoFerracini_161_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoFerracini_161_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoFerracini_161_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoFerracini_161_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoFerracini_161_7.png" /> VIELA<br />' });
var format_EmpreendimentoFerracini_162 = new ol.format.GeoJSON();
var features_EmpreendimentoFerracini_162 = format_EmpreendimentoFerracini_162.readFeatures(json_EmpreendimentoFerracini_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFerracini_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFerracini_162.addFeatures(features_EmpreendimentoFerracini_162);
var lyr_EmpreendimentoFerracini_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFerracini_162, 
                style: style_EmpreendimentoFerracini_162,
                popuplayertitle: 'Empreendimento Ferracini',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoFerracini_162.png" /> Empreendimento Ferracini'
            });
var format_EmpreendimentoResicencialNairRetuciII_163 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuciII_163 = format_EmpreendimentoResicencialNairRetuciII_163.readFeatures(json_EmpreendimentoResicencialNairRetuciII_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuciII_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuciII_163.addFeatures(features_EmpreendimentoResicencialNairRetuciII_163);
var lyr_EmpreendimentoResicencialNairRetuciII_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuciII_163, 
                style: style_EmpreendimentoResicencialNairRetuciII_163,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci II',
                interactive: true,
    title: 'Empreendimento Resicencial Nair Retuci II<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_163_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_163_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_163_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_163_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_163_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_163_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_163_6.png" /> RUAS<br />' });
var format_EmpreendimentoResicencialNairRetuciII_164 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuciII_164 = format_EmpreendimentoResicencialNairRetuciII_164.readFeatures(json_EmpreendimentoResicencialNairRetuciII_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuciII_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuciII_164.addFeatures(features_EmpreendimentoResicencialNairRetuciII_164);
var lyr_EmpreendimentoResicencialNairRetuciII_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuciII_164, 
                style: style_EmpreendimentoResicencialNairRetuciII_164,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResicencialNairRetuciII_164.png" /> Empreendimento Resicencial Nair Retuci II'
            });
var format_EmpreendimentoVillaPucci_165 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaPucci_165 = format_EmpreendimentoVillaPucci_165.readFeatures(json_EmpreendimentoVillaPucci_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaPucci_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaPucci_165.addFeatures(features_EmpreendimentoVillaPucci_165);
var lyr_EmpreendimentoVillaPucci_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaPucci_165, 
                style: style_EmpreendimentoVillaPucci_165,
                popuplayertitle: 'Empreendimento Villa Pucci',
                interactive: true,
    title: 'Empreendimento Villa Pucci<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_165_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_165_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_165_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_165_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_165_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_165_5.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_165_6.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_165_7.png" /> RUAS<br />' });
var format_EmpreendimentoVillaPucci_166 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaPucci_166 = format_EmpreendimentoVillaPucci_166.readFeatures(json_EmpreendimentoVillaPucci_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaPucci_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaPucci_166.addFeatures(features_EmpreendimentoVillaPucci_166);
var lyr_EmpreendimentoVillaPucci_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaPucci_166, 
                style: style_EmpreendimentoVillaPucci_166,
                popuplayertitle: 'Empreendimento Villa Pucci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaPucci_166.png" /> Empreendimento Villa Pucci'
            });
var format_ServidoRamal138kVFranca4Guanabara_167 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_167 = format_ServidoRamal138kVFranca4Guanabara_167.readFeatures(json_ServidoRamal138kVFranca4Guanabara_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_167.addFeatures(features_ServidoRamal138kVFranca4Guanabara_167);
var lyr_ServidoRamal138kVFranca4Guanabara_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_167, 
                style: style_ServidoRamal138kVFranca4Guanabara_167,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_167.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_168 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_168 = format_ServidoRamal138kVFranca4Guanabara_168.readFeatures(json_ServidoRamal138kVFranca4Guanabara_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_168.addFeatures(features_ServidoRamal138kVFranca4Guanabara_168);
var lyr_ServidoRamal138kVFranca4Guanabara_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_168, 
                style: style_ServidoRamal138kVFranca4Guanabara_168,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_168.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_EmpreendimentosAprovado27unid_169 = new ol.format.GeoJSON();
var features_EmpreendimentosAprovado27unid_169 = format_EmpreendimentosAprovado27unid_169.readFeatures(json_EmpreendimentosAprovado27unid_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosAprovado27unid_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosAprovado27unid_169.addFeatures(features_EmpreendimentosAprovado27unid_169);
var lyr_EmpreendimentosAprovado27unid_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosAprovado27unid_169, 
                style: style_EmpreendimentosAprovado27unid_169,
                popuplayertitle: 'Empreendimentos - Aprovado (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosAprovado27unid_169.png" /> Empreendimentos - Aprovado (27 unid.)'
            });
var format_EmpreendimentosDiretriz8unid_170 = new ol.format.GeoJSON();
var features_EmpreendimentosDiretriz8unid_170 = format_EmpreendimentosDiretriz8unid_170.readFeatures(json_EmpreendimentosDiretriz8unid_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDiretriz8unid_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDiretriz8unid_170.addFeatures(features_EmpreendimentosDiretriz8unid_170);
var lyr_EmpreendimentosDiretriz8unid_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDiretriz8unid_170, 
                style: style_EmpreendimentosDiretriz8unid_170,
                popuplayertitle: 'Empreendimentos  - Diretriz (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDiretriz8unid_170.png" /> Empreendimentos  - Diretriz (8 unid.)'
            });
var format_EmpreendimentosDefinitiva7unid_171 = new ol.format.GeoJSON();
var features_EmpreendimentosDefinitiva7unid_171 = format_EmpreendimentosDefinitiva7unid_171.readFeatures(json_EmpreendimentosDefinitiva7unid_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDefinitiva7unid_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDefinitiva7unid_171.addFeatures(features_EmpreendimentosDefinitiva7unid_171);
var lyr_EmpreendimentosDefinitiva7unid_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDefinitiva7unid_171, 
                style: style_EmpreendimentosDefinitiva7unid_171,
                popuplayertitle: 'Empreendimentos - Definitiva (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDefinitiva7unid_171.png" /> Empreendimentos - Definitiva (7 unid.)'
            });
var format_EmpreendimentosPrvia24unid_172 = new ol.format.GeoJSON();
var features_EmpreendimentosPrvia24unid_172 = format_EmpreendimentosPrvia24unid_172.readFeatures(json_EmpreendimentosPrvia24unid_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosPrvia24unid_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosPrvia24unid_172.addFeatures(features_EmpreendimentosPrvia24unid_172);
var lyr_EmpreendimentosPrvia24unid_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosPrvia24unid_172, 
                style: style_EmpreendimentosPrvia24unid_172,
                popuplayertitle: 'Empreendimentos - Prévia (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosPrvia24unid_172.png" /> Empreendimentos - Prévia (24 unid.)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_173 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_173 = format_PBZPAEdifcioPrimeHELIPONTO_173.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_173.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_173);
var lyr_PBZPAEdifcioPrimeHELIPONTO_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_173, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_173,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
                title: '<img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_173.png" /> PBZPA - Edifício Prime (HELIPONTO)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_174 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_174 = format_PBZPAEdifcioPrimeHELIPONTO_174.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_174.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_174);
var lyr_PBZPAEdifcioPrimeHELIPONTO_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_174, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_174,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Edifício Prime (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_174_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_174_1.png" /> RAMPA<br />' });
var format_PBZPAHospitalHELIPONTO_175 = new ol.format.GeoJSON();
var features_PBZPAHospitalHELIPONTO_175 = format_PBZPAHospitalHELIPONTO_175.readFeatures(json_PBZPAHospitalHELIPONTO_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAHospitalHELIPONTO_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAHospitalHELIPONTO_175.addFeatures(features_PBZPAHospitalHELIPONTO_175);
var lyr_PBZPAHospitalHELIPONTO_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAHospitalHELIPONTO_175, 
                style: style_PBZPAHospitalHELIPONTO_175,
                popuplayertitle: 'PBZPA - Hospital (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Hospital (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_175_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_175_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_175_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_175_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_175_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_175_5.png" /> FATO 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_175_6.png" /> TLOF 1<br />' });
var format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176 = new ol.format.GeoJSON();
var features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176 = format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176.readFeatures(json_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176.addFeatures(features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176);
var lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176, 
                style: style_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176,
                popuplayertitle: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)',
                interactive: true,
    title: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_176_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_176_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_176_2.png" /> Cônica<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_176_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_176_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_176_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_176_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_176_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_176_8.png" /> Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_176_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_176_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_176_11.png" /> Transição<br />' });
var format_DeclividadeZonaUrbanaCopernicus30m_177 = new ol.format.GeoJSON();
var features_DeclividadeZonaUrbanaCopernicus30m_177 = format_DeclividadeZonaUrbanaCopernicus30m_177.readFeatures(json_DeclividadeZonaUrbanaCopernicus30m_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DeclividadeZonaUrbanaCopernicus30m_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaUrbanaCopernicus30m_177.addFeatures(features_DeclividadeZonaUrbanaCopernicus30m_177);
var lyr_DeclividadeZonaUrbanaCopernicus30m_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaUrbanaCopernicus30m_177, 
                style: style_DeclividadeZonaUrbanaCopernicus30m_177,
                popuplayertitle: 'Declividade - Zona Urbana (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Urbana (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_177_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_177_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_177_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_177_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_177_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_177_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_177_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_177_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_177_8.png" /> 101 - 114%<br />' });
var format_DeclividadeZonaRuralSulCopernicus30m_178 = new ol.format.GeoJSON();
var features_DeclividadeZonaRuralSulCopernicus30m_178 = format_DeclividadeZonaRuralSulCopernicus30m_178.readFeatures(json_DeclividadeZonaRuralSulCopernicus30m_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DeclividadeZonaRuralSulCopernicus30m_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaRuralSulCopernicus30m_178.addFeatures(features_DeclividadeZonaRuralSulCopernicus30m_178);
var lyr_DeclividadeZonaRuralSulCopernicus30m_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaRuralSulCopernicus30m_178, 
                style: style_DeclividadeZonaRuralSulCopernicus30m_178,
                popuplayertitle: 'Declividade - Zona Rural - Sul (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Rural - Sul (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_178_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_178_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_178_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_178_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_178_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_178_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_178_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_178_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_178_8.png" /> 101 - 114%<br />' });
var format_DeclividadeZonaRuralNorteCopernicus30m_179 = new ol.format.GeoJSON();
var features_DeclividadeZonaRuralNorteCopernicus30m_179 = format_DeclividadeZonaRuralNorteCopernicus30m_179.readFeatures(json_DeclividadeZonaRuralNorteCopernicus30m_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DeclividadeZonaRuralNorteCopernicus30m_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaRuralNorteCopernicus30m_179.addFeatures(features_DeclividadeZonaRuralNorteCopernicus30m_179);
var lyr_DeclividadeZonaRuralNorteCopernicus30m_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaRuralNorteCopernicus30m_179, 
                style: style_DeclividadeZonaRuralNorteCopernicus30m_179,
                popuplayertitle: 'Declividade - Zona Rural - Norte (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Rural - Norte (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_179_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_179_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_179_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_179_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_179_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_179_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_179_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_179_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_179_8.png" /> 101 - 114%<br />' });
var format_FazendaBarroPretoeBambus_180 = new ol.format.GeoJSON();
var features_FazendaBarroPretoeBambus_180 = format_FazendaBarroPretoeBambus_180.readFeatures(json_FazendaBarroPretoeBambus_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaBarroPretoeBambus_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaBarroPretoeBambus_180.addFeatures(features_FazendaBarroPretoeBambus_180);
var lyr_FazendaBarroPretoeBambus_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaBarroPretoeBambus_180, 
                style: style_FazendaBarroPretoeBambus_180,
                popuplayertitle: 'Fazenda Barro Preto e Bambus',
                interactive: true,
                title: '<img src="styles/legend/FazendaBarroPretoeBambus_180.png" /> Fazenda Barro Preto e Bambus'
            });
var format_Matrcula106206_181 = new ol.format.GeoJSON();
var features_Matrcula106206_181 = format_Matrcula106206_181.readFeatures(json_Matrcula106206_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Matrcula106206_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matrcula106206_181.addFeatures(features_Matrcula106206_181);
var lyr_Matrcula106206_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matrcula106206_181, 
                style: style_Matrcula106206_181,
                popuplayertitle: 'Matrícula 106.206',
                interactive: true,
                title: '<img src="styles/legend/Matrcula106206_181.png" /> Matrícula 106.206'
            });
var format_RecantoEmanuelMatrcula95782_182 = new ol.format.GeoJSON();
var features_RecantoEmanuelMatrcula95782_182 = format_RecantoEmanuelMatrcula95782_182.readFeatures(json_RecantoEmanuelMatrcula95782_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoEmanuelMatrcula95782_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoEmanuelMatrcula95782_182.addFeatures(features_RecantoEmanuelMatrcula95782_182);
var lyr_RecantoEmanuelMatrcula95782_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoEmanuelMatrcula95782_182, 
                style: style_RecantoEmanuelMatrcula95782_182,
                popuplayertitle: 'Recanto Emanuel - Matrícula 95.782',
                interactive: true,
                title: '<img src="styles/legend/RecantoEmanuelMatrcula95782_182.png" /> Recanto Emanuel - Matrícula 95.782'
            });
var format_RecantoEmanuelMatrcula95783_183 = new ol.format.GeoJSON();
var features_RecantoEmanuelMatrcula95783_183 = format_RecantoEmanuelMatrcula95783_183.readFeatures(json_RecantoEmanuelMatrcula95783_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoEmanuelMatrcula95783_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoEmanuelMatrcula95783_183.addFeatures(features_RecantoEmanuelMatrcula95783_183);
var lyr_RecantoEmanuelMatrcula95783_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoEmanuelMatrcula95783_183, 
                style: style_RecantoEmanuelMatrcula95783_183,
                popuplayertitle: 'Recanto Emanuel - Matrícula 95.783',
                interactive: true,
                title: '<img src="styles/legend/RecantoEmanuelMatrcula95783_183.png" /> Recanto Emanuel - Matrícula 95.783'
            });
var format_StioNossaSenhoraAparecida_184 = new ol.format.GeoJSON();
var features_StioNossaSenhoraAparecida_184 = format_StioNossaSenhoraAparecida_184.readFeatures(json_StioNossaSenhoraAparecida_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_StioNossaSenhoraAparecida_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StioNossaSenhoraAparecida_184.addFeatures(features_StioNossaSenhoraAparecida_184);
var lyr_StioNossaSenhoraAparecida_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StioNossaSenhoraAparecida_184, 
                style: style_StioNossaSenhoraAparecida_184,
                popuplayertitle: 'Sítio Nossa Senhora Aparecida',
                interactive: true,
                title: '<img src="styles/legend/StioNossaSenhoraAparecida_184.png" /> Sítio Nossa Senhora Aparecida'
            });
var format_LoteamentosClandestinos3unid_185 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos3unid_185 = format_LoteamentosClandestinos3unid_185.readFeatures(json_LoteamentosClandestinos3unid_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinos3unid_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos3unid_185.addFeatures(features_LoteamentosClandestinos3unid_185);
var lyr_LoteamentosClandestinos3unid_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos3unid_185, 
                style: style_LoteamentosClandestinos3unid_185,
                popuplayertitle: 'Loteamentos Clandestinos (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos3unid_185.png" /> Loteamentos Clandestinos (3 unid.)'
            });
var format_ParqueZumbidosPalmares_186 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_186 = format_ParqueZumbidosPalmares_186.readFeatures(json_ParqueZumbidosPalmares_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueZumbidosPalmares_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_186.addFeatures(features_ParqueZumbidosPalmares_186);
var lyr_ParqueZumbidosPalmares_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_186, 
                style: style_ParqueZumbidosPalmares_186,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_186.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187 = format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_AntigoAterrodasMaritacas_189 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_189 = format_AntigoAterrodasMaritacas_189.readFeatures(json_AntigoAterrodasMaritacas_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacas_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_189.addFeatures(features_AntigoAterrodasMaritacas_189);
var lyr_AntigoAterrodasMaritacas_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_189, 
                style: style_AntigoAterrodasMaritacas_189,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_189.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_193 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_193 = format_AntigoAterrodaFazendaMunicipal_193.readFeatures(json_AntigoAterrodaFazendaMunicipal_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipal_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_193.addFeatures(features_AntigoAterrodaFazendaMunicipal_193);
var lyr_AntigoAterrodaFazendaMunicipal_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_193, 
                style: style_AntigoAterrodaFazendaMunicipal_193,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_193.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)'
            });
var format_ARORemanescentesFlorestais_196 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_196 = format_ARORemanescentesFlorestais_196.readFeatures(json_ARORemanescentesFlorestais_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARORemanescentesFlorestais_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_196.addFeatures(features_ARORemanescentesFlorestais_196);
var lyr_ARORemanescentesFlorestais_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_196, 
                style: style_ARORemanescentesFlorestais_196,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_196.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_197 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_197 = format_AROreadeAmortecimento_197.readFeatures(json_AROreadeAmortecimento_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROreadeAmortecimento_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_197.addFeatures(features_AROreadeAmortecimento_197);
var lyr_AROreadeAmortecimento_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_197, 
                style: style_AROreadeAmortecimento_197,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_197.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_198 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_198 = format_AROFaixadeCuestas_198.readFeatures(json_AROFaixadeCuestas_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROFaixadeCuestas_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_198.addFeatures(features_AROFaixadeCuestas_198);
var lyr_AROFaixadeCuestas_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_198, 
                style: style_AROFaixadeCuestas_198,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_198.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_199 = new ol.format.GeoJSON();
var features_AROAPP_199 = format_AROAPP_199.readFeatures(json_AROAPP_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROAPP_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_199.addFeatures(features_AROAPP_199);
var lyr_AROAPP_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_199, 
                style: style_AROAPP_199,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_199.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_200 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_200 = format_ARAIncongrunciasemAPP_200.readFeatures(json_ARAIncongrunciasemAPP_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAIncongrunciasemAPP_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_200.addFeatures(features_ARAIncongrunciasemAPP_200);
var lyr_ARAIncongrunciasemAPP_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_200, 
                style: style_ARAIncongrunciasemAPP_200,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_200.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_201 = new ol.format.GeoJSON();
var features_ARAETELagoas_201 = format_ARAETELagoas_201.readFeatures(json_ARAETELagoas_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAETELagoas_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_201.addFeatures(features_ARAETELagoas_201);
var lyr_ARAETELagoas_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_201, 
                style: style_ARAETELagoas_201,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_201.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_202 = new ol.format.GeoJSON();
var features_ARAAterros_202 = format_ARAAterros_202.readFeatures(json_ARAAterros_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAAterros_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_202.addFeatures(features_ARAAterros_202);
var lyr_ARAAterros_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_202, 
                style: style_ARAAterros_202,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_202.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_203 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_203 = format_AODreaUrbanaConsolidada_203.readFeatures(json_AODreaUrbanaConsolidada_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODreaUrbanaConsolidada_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_203.addFeatures(features_AODreaUrbanaConsolidada_203);
var lyr_AODreaUrbanaConsolidada_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_203, 
                style: style_AODreaUrbanaConsolidada_203,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_203.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_204 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_204 = format_AODBaixaDensidadeNvel3_204.readFeatures(json_AODBaixaDensidadeNvel3_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel3_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_204.addFeatures(features_AODBaixaDensidadeNvel3_204);
var lyr_AODBaixaDensidadeNvel3_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_204, 
                style: style_AODBaixaDensidadeNvel3_204,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_204.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_205 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_205 = format_AODBaixaDensidadeNvel2_205.readFeatures(json_AODBaixaDensidadeNvel2_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel2_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_205.addFeatures(features_AODBaixaDensidadeNvel2_205);
var lyr_AODBaixaDensidadeNvel2_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_205, 
                style: style_AODBaixaDensidadeNvel2_205,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_205.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_206 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_206 = format_AODBaixaDensidadeNvel1_206.readFeatures(json_AODBaixaDensidadeNvel1_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel1_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_206.addFeatures(features_AODBaixaDensidadeNvel1_206);
var lyr_AODBaixaDensidadeNvel1_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_206, 
                style: style_AODBaixaDensidadeNvel1_206,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_206.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_207 = new ol.format.GeoJSON();
var features_AODAUSFase2_207 = format_AODAUSFase2_207.readFeatures(json_AODAUSFase2_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase2_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_207.addFeatures(features_AODAUSFase2_207);
var lyr_AODAUSFase2_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_207, 
                style: style_AODAUSFase2_207,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_207.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_208 = new ol.format.GeoJSON();
var features_AODAUSFase1_208 = format_AODAUSFase1_208.readFeatures(json_AODAUSFase1_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase1_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_208.addFeatures(features_AODAUSFase1_208);
var lyr_AODAUSFase1_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_208, 
                style: style_AODAUSFase1_208,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_208.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_209 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_209 = format_LimitedaBaciadoRioCanoasLeiC4322024_209.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_209.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_209);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_209, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_209,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_209.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_210 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_210 = format_LimitedaBaciadoRioCanoasLeiC1002006_210.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_210.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_210);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_210, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_210,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_210.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_211 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_211 = format_DelimitaodaBaciadoRibeirodaOna_211.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_211.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_211);
var lyr_DelimitaodaBaciadoRibeirodaOna_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_211, 
                style: style_DelimitaodaBaciadoRibeirodaOna_211,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_211.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_AoCivilPblica1unid_212 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_212 = format_AoCivilPblica1unid_212.readFeatures(json_AoCivilPblica1unid_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_212.addFeatures(features_AoCivilPblica1unid_212);
var lyr_AoCivilPblica1unid_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_212, 
                style: style_AoCivilPblica1unid_212,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_212.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_213 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_213 = format_AoCivilPblica1unid_213.readFeatures(json_AoCivilPblica1unid_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_213.addFeatures(features_AoCivilPblica1unid_213);
var lyr_AoCivilPblica1unid_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_213, 
                style: style_AoCivilPblica1unid_213,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_213.png" /> Ação Civil Pública (1 unid.)'
            });
var format_CartaAnuncia20unid_214 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_214 = format_CartaAnuncia20unid_214.readFeatures(json_CartaAnuncia20unid_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia20unid_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_214.addFeatures(features_CartaAnuncia20unid_214);
var lyr_CartaAnuncia20unid_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_214, 
                style: style_CartaAnuncia20unid_214,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_214.png" /> Carta Anuência (20 unid.)'
            });
var format_CartaAnuncia19unid_215 = new ol.format.GeoJSON();
var features_CartaAnuncia19unid_215 = format_CartaAnuncia19unid_215.readFeatures(json_CartaAnuncia19unid_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia19unid_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia19unid_215.addFeatures(features_CartaAnuncia19unid_215);
var lyr_CartaAnuncia19unid_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia19unid_215, 
                style: style_CartaAnuncia19unid_215,
                popuplayertitle: 'Carta Anuência (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia19unid_215.png" /> Carta Anuência (19 unid.)'
            });
var format_PlantioVoluntrio1unid_216 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_216 = format_PlantioVoluntrio1unid_216.readFeatures(json_PlantioVoluntrio1unid_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_216.addFeatures(features_PlantioVoluntrio1unid_216);
var lyr_PlantioVoluntrio1unid_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_216, 
                style: style_PlantioVoluntrio1unid_216,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_216.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_217 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_217 = format_PlantioVoluntrio1unid_217.readFeatures(json_PlantioVoluntrio1unid_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_217.addFeatures(features_PlantioVoluntrio1unid_217);
var lyr_PlantioVoluntrio1unid_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_217, 
                style: style_PlantioVoluntrio1unid_217,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_217.png" /> Plantio Voluntário (1 unid.)'
            });
var format_TACMinistrioPblico9unid_218 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_218 = format_TACMinistrioPblico9unid_218.readFeatures(json_TACMinistrioPblico9unid_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_218.addFeatures(features_TACMinistrioPblico9unid_218);
var lyr_TACMinistrioPblico9unid_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_218, 
                style: style_TACMinistrioPblico9unid_218,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_218.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_219 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_219 = format_TACMinistrioPblico9unid_219.readFeatures(json_TACMinistrioPblico9unid_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_219.addFeatures(features_TACMinistrioPblico9unid_219);
var lyr_TACMinistrioPblico9unid_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_219, 
                style: style_TACMinistrioPblico9unid_219,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_219.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TCRACETESB28unid_220 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_220 = format_TCRACETESB28unid_220.readFeatures(json_TCRACETESB28unid_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_220.addFeatures(features_TCRACETESB28unid_220);
var lyr_TCRACETESB28unid_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_220, 
                style: style_TCRACETESB28unid_220,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_220.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESB28unid_221 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_221 = format_TCRACETESB28unid_221.readFeatures(json_TCRACETESB28unid_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_221.addFeatures(features_TCRACETESB28unid_221);
var lyr_TCRACETESB28unid_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_221, 
                style: style_TCRACETESB28unid_221,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_221.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRAMunicipal14unid_222 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_222 = format_TCRAMunicipal14unid_222.readFeatures(json_TCRAMunicipal14unid_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_222.addFeatures(features_TCRAMunicipal14unid_222);
var lyr_TCRAMunicipal14unid_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_222, 
                style: style_TCRAMunicipal14unid_222,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_222.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRAMunicipal14unid_223 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_223 = format_TCRAMunicipal14unid_223.readFeatures(json_TCRAMunicipal14unid_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_223.addFeatures(features_TCRAMunicipal14unid_223);
var lyr_TCRAMunicipal14unid_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_223, 
                style: style_TCRAMunicipal14unid_223,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_223.png" /> TCRA Municipal (14 unid.)'
            });
var format_TRPRLCETESB2unid_224 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_224 = format_TRPRLCETESB2unid_224.readFeatures(json_TRPRLCETESB2unid_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_224.addFeatures(features_TRPRLCETESB2unid_224);
var lyr_TRPRLCETESB2unid_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_224, 
                style: style_TRPRLCETESB2unid_224,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_224.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_225 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_225 = format_TRPRLCETESB2unid_225.readFeatures(json_TRPRLCETESB2unid_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_225.addFeatures(features_TRPRLCETESB2unid_225);
var lyr_TRPRLCETESB2unid_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_225, 
                style: style_TRPRLCETESB2unid_225,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_225.png" /> TRPRL CETESB (2 unid.)'
            });
var format_rvoreImuneaoCorte8unid_226 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte8unid_226 = format_rvoreImuneaoCorte8unid_226.readFeatures(json_rvoreImuneaoCorte8unid_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_rvoreImuneaoCorte8unid_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte8unid_226.addFeatures(features_rvoreImuneaoCorte8unid_226);
var lyr_rvoreImuneaoCorte8unid_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte8unid_226, 
                style: style_rvoreImuneaoCorte8unid_226,
                popuplayertitle: 'Árvore Imune ao Corte (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte8unid_226.png" /> Árvore Imune ao Corte (8 unid.)'
            });
var format_Voorocas26unid_227 = new ol.format.GeoJSON();
var features_Voorocas26unid_227 = format_Voorocas26unid_227.readFeatures(json_Voorocas26unid_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Voorocas26unid_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas26unid_227.addFeatures(features_Voorocas26unid_227);
var lyr_Voorocas26unid_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas26unid_227, 
                style: style_Voorocas26unid_227,
                popuplayertitle: 'Voçorocas (26 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas26unid_227.png" /> Voçorocas (26 unid.)'
            });
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica1unid_212,lyr_AoCivilPblica1unid_213,lyr_CartaAnuncia20unid_214,lyr_CartaAnuncia19unid_215,lyr_PlantioVoluntrio1unid_216,lyr_PlantioVoluntrio1unid_217,lyr_TACMinistrioPblico9unid_218,lyr_TACMinistrioPblico9unid_219,lyr_TCRACETESB28unid_220,lyr_TCRACETESB28unid_221,lyr_TCRAMunicipal14unid_222,lyr_TCRAMunicipal14unid_223,lyr_TRPRLCETESB2unid_224,lyr_TRPRLCETESB2unid_225,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_196,lyr_AROreadeAmortecimento_197,lyr_AROFaixadeCuestas_198,lyr_AROAPP_199,lyr_ARAIncongrunciasemAPP_200,lyr_ARAETELagoas_201,lyr_ARAAterros_202,lyr_AODreaUrbanaConsolidada_203,lyr_AODBaixaDensidadeNvel3_204,lyr_AODBaixaDensidadeNvel2_205,lyr_AODBaixaDensidadeNvel1_206,lyr_AODAUSFase2_207,lyr_AODAUSFase1_208,lyr_LimitedaBaciadoRioCanoasLeiC4322024_209,lyr_LimitedaBaciadoRioCanoasLeiC1002006_210,lyr_DelimitaodaBaciadoRibeirodaOna_211,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_ParqueZumbidosPalmares_186,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188,lyr_AntigoAterrodasMaritacas_189,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192,lyr_AntigoAterrodaFazendaMunicipal_193,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_LoteamentosClandestinos = new ol.layer.Group({
                                layers: [lyr_FazendaBarroPretoeBambus_180,lyr_Matrcula106206_181,lyr_RecantoEmanuelMatrcula95782_182,lyr_RecantoEmanuelMatrcula95783_183,lyr_StioNossaSenhoraAparecida_184,lyr_LoteamentosClandestinos3unid_185,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos'});
var group_Declividade = new ol.layer.Group({
                                layers: [lyr_DeclividadeZonaUrbanaCopernicus30m_177,lyr_DeclividadeZonaRuralSulCopernicus30m_178,lyr_DeclividadeZonaRuralNorteCopernicus30m_179,],
                                fold: 'close',
                                title: 'Declividade'});
var group_SecretariadeInfraestrutura = new ol.layer.Group({
                                layers: [lyr_EmpreendimentoVillaDoratta_35,lyr_arizona_poligonos_36,lyr_arizona_linhas_37,lyr_fazenda_progresso_poligonos_38,lyr_fazenda_progresso_linhas_39,lyr_villa_bella_poligonos_40,lyr_villa_bella_linhas_41,lyr_EmpreendimentoVillaDoratta_42,lyr_EmpreendimentoDioceseFranca_43,lyr_EmpreendimentoDioceseFranca_44,lyr_EmpreendimentoAdonis_45,lyr_EmpreendimentoAdonis_46,lyr_EmpreendimentoInfratecinica_47,lyr_EmpreendimentoInfratecinica_48,lyr_EmpreendimentoResidencialBoaVista_49,lyr_EmpreendimentoResidencialBoaVista_50,lyr_EmpreendimentoCondomnioResicencialTerraNova_51,lyr_EmpreendimentoCondomnioResicencialTerraNova_52,lyr_EmpreendimentoVillaDiEspanhaIII_53,lyr_EmpreendimentoVillaDiEspanhaIII_54,lyr_EmpreendimentoSoCarlosII_55,lyr_EmpreendimentoSoCarlosII_56,lyr_EmpreendimentoParqueFlora_57,lyr_EmpreendimentoParqueFlora_58,lyr_EmpreendimentoVittaSoVicente_59,lyr_EmpreendimentoVittaSoVicente_60,lyr_EmpreendimentoRecantoMeneghetti_61,lyr_EmpreendimentoRecantoMeneghetti_62,lyr_EmpreendimentoParquedosSabias_63,lyr_EmpreendimentoParquedosSabias_64,lyr_EmpreendimentoMoradadaMata_65,lyr_EmpreendimentoMoradadaMata_66,lyr_EmpreendimentoIrineuZanetiII_67,lyr_EmpreendimentoIrineuZanetiII_68,lyr_EmpreendimentoResidencialJabuticabeiras_69,lyr_EmpreendimentoResidencialJabuticabeiras_70,lyr_EmpreendimentoResidencialMarianaAlarcon_71,lyr_EmpreendimentoResidencialMarianaAlarcon_72,lyr_EmpreendimentoResidencialCintraAlves_73,lyr_EmpreendimentoResidencialCintraAlves_74,lyr_EmpreendimentoLoteamentolamo_75,lyr_EmpreendimentoLoteamentolamo_76,lyr_EmpreendimentoSantaLina_77,lyr_EmpreendimentoSantaLina_78,lyr_EmpreendimentoResidencialPousoAlegreII_79,lyr_EmpreendimentoResidencialPousoAlegreII_80,lyr_EmpreendimentoResidencialPousoAlegre_81,lyr_EmpreendimentoResidencialPousoAlegre_82,lyr_EmpreendimentoResidencialAltodaFazenda_83,lyr_EmpreendimentoResidencialAltodaFazenda_84,lyr_EmpreendimentoResidencialMarioTasso_85,lyr_EmpreendimentoResidencialMarioTasso_86,lyr_EmpreendimentoResidenciaisVivenna_87,lyr_EmpreendimentoResidenciaisVivenna_88,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_89,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_90,lyr_EmprendimentoElias_91,lyr_EmprendimentoElias_92,lyr_EmpreendimentoResidencialSoCarlosI_93,lyr_EmpreendimentoResidencialSoCarlosI_94,lyr_EmpreendimentoMonti_95,lyr_EmpreendimentoMonti_96,lyr_EmpreendimentoResidencialMoradadoBosque_97,lyr_EmpreendimentoResidencialMoradadoBosque_98,lyr_EmpreendimentoVittaAlvorada_99,lyr_EmpreendimentoVittaAlvorada_100,lyr_EmpreendimentoResidencialMarthaHelena_101,lyr_EmpreendimentoResidencialMarthaHelena_102,lyr_EmpreendimentoResidencialYasminTorres_103,lyr_EmpreendimentoResidencialYasminTorres_104,lyr_EmpreendimentoPalmeiraReal_105,lyr_EmpreendimentoPalmeiraReal_106,lyr_EmpreendimentoEssence_107,lyr_EmpreendimentoEssence_108,lyr_EmpreendimentoVersalhes_109,lyr_EmpreendimentoVersalhes_110,lyr_EmpreendimentoSonetto_111,lyr_EmpreendimentoSonetto_112,lyr_EmpreendimentoResidencialSantaIns_113,lyr_EmpreendimentoResidencialSantaIns_114,lyr_EmpreendimentoEdifcioSolNascente_115,lyr_EmpreendimentoEdifcioSolNascente_116,lyr_EmpreendimentoResidencialQuintadosOitis_117,lyr_EmpreendimentoResidencialQuintadosOitis_118,lyr_EmpreendimentoResidencialQuintadoSol_119,lyr_EmpreendimentoResidencialQuintadoSol_120,lyr_EmpreendimentoParquePalmeiraImperial_121,lyr_EmpreendimentoParquePalmeiraImperial_122,lyr_EmpreendimentoBordadaMata_123,lyr_EmpreendimentoBordadaMata_124,lyr_EmpreendimentoEdifcioResidencialHope_125,lyr_EmpreendimentoEdifcioResidencialHope_126,lyr_EmpreendimentoHorizResidence_127,lyr_EmpreendimentoHorizResidence_128,lyr_EmpreendimentoJardimFlora_129,lyr_EmpreendimentoJardimFlora_130,lyr_EmpreendimentoJardimHorizonte_131,lyr_EmpreendimentoJardimHorizonte_132,lyr_EmpreendimentoJardimMariaLuiza_133,lyr_EmpreendimentoJardimMariaLuiza_134,lyr_EmpreendimentoMontBlancResidence_135,lyr_EmpreendimentoMontBlancResidence_136,lyr_EmpreendimentoMoradadoVerdeII_137,lyr_EmpreendimentoMoradadoVerdeII_138,lyr_EmpreendimentoResicencialNairRetuci_139,lyr_EmpreendimentoResicencialNairRetuci_140,lyr_EmpreendimentoParagonII_141,lyr_EmpreendimentoParagonII_142,lyr_EmpreendimentoParagon_143,lyr_EmpreendimentoParagon_144,lyr_EmpreendimentoParqueVillaLobos_145,lyr_EmpreendimentoParqueVillaLobos_146,lyr_EmpreendimentoDaVinci_147,lyr_EmpreendimentoDaVinci_148,lyr_EmpreendimentoResidencialDomingosJardini_149,lyr_EmpreendimentoResidencialDomingosJardini_150,lyr_EmpreendimentoResidencialSantaF_151,lyr_EmpreendimentoResidencialSantaF_152,lyr_EmpreendimentoEdifcioRuadoSol_153,lyr_EmpreendimentoEdifcioRuadoSol_154,lyr_EmpreendimentoTorontoResidence_155,lyr_EmpreendimentoTorontoResidence_156,lyr_EmpreendimentoCidadeJardim_157,lyr_EmpreendimentoCidadeJardim_158,lyr_EmpreendimentoColorado_159,lyr_EmpreendimentoColorado_160,lyr_EmpreendimentoFerracini_161,lyr_EmpreendimentoFerracini_162,lyr_EmpreendimentoResicencialNairRetuciII_163,lyr_EmpreendimentoResicencialNairRetuciII_164,lyr_EmpreendimentoVillaPucci_165,lyr_EmpreendimentoVillaPucci_166,lyr_ServidoRamal138kVFranca4Guanabara_167,lyr_ServidoRamal138kVFranca4Guanabara_168,lyr_EmpreendimentosAprovado27unid_169,lyr_EmpreendimentosDiretriz8unid_170,lyr_EmpreendimentosDefinitiva7unid_171,lyr_EmpreendimentosPrvia24unid_172,lyr_PBZPAEdifcioPrimeHELIPONTO_173,lyr_PBZPAEdifcioPrimeHELIPONTO_174,lyr_PBZPAHospitalHELIPONTO_175,lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176,],
                                fold: 'close',
                                title: 'Secretaria de Infraestrutura'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteEMDEF10unid218783m_26,lyr_LoteEMDEF10unid_27,lyr_Lote504unid13809703m_28,lyr_Lote504unid_29,lyr_APP169unid238007435m_30,lyr_readeUsoEspecial247unid269765616m_31,lyr_reaInstitucional240unid136439095m_32,lyr_reaPatrimonial33unid15807656m_33,lyr_reaVerde2011unid845466642m_34,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_RemanescentedaMatrcula11419_10,lyr_ConjuntoHabitacional_11,lyr_AvdeacessoaoHortoeColgioAgrcola_12,lyr_reaK_13,lyr_reaJ_14,lyr_reaI_15,lyr_reaH_16,lyr_reaG_17,lyr_reaF_18,lyr_reaE_19,lyr_reaD_20,lyr_reaC_21,lyr_reaB_22,lyr_reaA_23,lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24,lyr_reaaseraverbadaPartedareaG_25,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_5,lyr_RiosDuplos84unid_6,lyr_MassasDgua270unid_7,lyr_RiosSimples1842unid_8,lyr_Nascentes821unid_9,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: 'close',
                                title: 'Mapas Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_APP1745unid_5.setVisible(false);lyr_RiosDuplos84unid_6.setVisible(false);lyr_MassasDgua270unid_7.setVisible(false);lyr_RiosSimples1842unid_8.setVisible(false);lyr_Nascentes821unid_9.setVisible(false);lyr_RemanescentedaMatrcula11419_10.setVisible(false);lyr_ConjuntoHabitacional_11.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_12.setVisible(false);lyr_reaK_13.setVisible(false);lyr_reaJ_14.setVisible(false);lyr_reaI_15.setVisible(false);lyr_reaH_16.setVisible(false);lyr_reaG_17.setVisible(false);lyr_reaF_18.setVisible(false);lyr_reaE_19.setVisible(false);lyr_reaD_20.setVisible(false);lyr_reaC_21.setVisible(false);lyr_reaB_22.setVisible(false);lyr_reaA_23.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.setVisible(false);lyr_reaaseraverbadaPartedareaG_25.setVisible(false);lyr_LoteEMDEF10unid218783m_26.setVisible(false);lyr_LoteEMDEF10unid_27.setVisible(false);lyr_Lote504unid13809703m_28.setVisible(false);lyr_Lote504unid_29.setVisible(false);lyr_APP169unid238007435m_30.setVisible(false);lyr_readeUsoEspecial247unid269765616m_31.setVisible(false);lyr_reaInstitucional240unid136439095m_32.setVisible(false);lyr_reaPatrimonial33unid15807656m_33.setVisible(false);lyr_reaVerde2011unid845466642m_34.setVisible(false);lyr_EmpreendimentoVillaDoratta_35.setVisible(false);lyr_arizona_poligonos_36.setVisible(false);lyr_arizona_linhas_37.setVisible(false);lyr_fazenda_progresso_poligonos_38.setVisible(false);lyr_fazenda_progresso_linhas_39.setVisible(false);lyr_villa_bella_poligonos_40.setVisible(false);lyr_villa_bella_linhas_41.setVisible(false);lyr_EmpreendimentoVillaDoratta_42.setVisible(false);lyr_EmpreendimentoDioceseFranca_43.setVisible(false);lyr_EmpreendimentoDioceseFranca_44.setVisible(false);lyr_EmpreendimentoAdonis_45.setVisible(false);lyr_EmpreendimentoAdonis_46.setVisible(false);lyr_EmpreendimentoInfratecinica_47.setVisible(false);lyr_EmpreendimentoInfratecinica_48.setVisible(false);lyr_EmpreendimentoResidencialBoaVista_49.setVisible(false);lyr_EmpreendimentoResidencialBoaVista_50.setVisible(false);lyr_EmpreendimentoCondomnioResicencialTerraNova_51.setVisible(false);lyr_EmpreendimentoCondomnioResicencialTerraNova_52.setVisible(false);lyr_EmpreendimentoVillaDiEspanhaIII_53.setVisible(false);lyr_EmpreendimentoVillaDiEspanhaIII_54.setVisible(false);lyr_EmpreendimentoSoCarlosII_55.setVisible(false);lyr_EmpreendimentoSoCarlosII_56.setVisible(false);lyr_EmpreendimentoParqueFlora_57.setVisible(false);lyr_EmpreendimentoParqueFlora_58.setVisible(false);lyr_EmpreendimentoVittaSoVicente_59.setVisible(false);lyr_EmpreendimentoVittaSoVicente_60.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_61.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_62.setVisible(false);lyr_EmpreendimentoParquedosSabias_63.setVisible(false);lyr_EmpreendimentoParquedosSabias_64.setVisible(false);lyr_EmpreendimentoMoradadaMata_65.setVisible(false);lyr_EmpreendimentoMoradadaMata_66.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_67.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_68.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_69.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_70.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_71.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_72.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_73.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_74.setVisible(false);lyr_EmpreendimentoLoteamentolamo_75.setVisible(false);lyr_EmpreendimentoLoteamentolamo_76.setVisible(false);lyr_EmpreendimentoSantaLina_77.setVisible(false);lyr_EmpreendimentoSantaLina_78.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegreII_79.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegreII_80.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_81.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_82.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_83.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_84.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_85.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_86.setVisible(false);lyr_EmpreendimentoResidenciaisVivenna_87.setVisible(false);lyr_EmpreendimentoResidenciaisVivenna_88.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_89.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_90.setVisible(false);lyr_EmprendimentoElias_91.setVisible(false);lyr_EmprendimentoElias_92.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_93.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_94.setVisible(false);lyr_EmpreendimentoMonti_95.setVisible(false);lyr_EmpreendimentoMonti_96.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_97.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_98.setVisible(false);lyr_EmpreendimentoVittaAlvorada_99.setVisible(false);lyr_EmpreendimentoVittaAlvorada_100.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_101.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_102.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_103.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_104.setVisible(false);lyr_EmpreendimentoPalmeiraReal_105.setVisible(false);lyr_EmpreendimentoPalmeiraReal_106.setVisible(false);lyr_EmpreendimentoEssence_107.setVisible(false);lyr_EmpreendimentoEssence_108.setVisible(false);lyr_EmpreendimentoVersalhes_109.setVisible(false);lyr_EmpreendimentoVersalhes_110.setVisible(false);lyr_EmpreendimentoSonetto_111.setVisible(false);lyr_EmpreendimentoSonetto_112.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_113.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_114.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_115.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_116.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_117.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_118.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_119.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_120.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_121.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_122.setVisible(false);lyr_EmpreendimentoBordadaMata_123.setVisible(false);lyr_EmpreendimentoBordadaMata_124.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_125.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_126.setVisible(false);lyr_EmpreendimentoHorizResidence_127.setVisible(false);lyr_EmpreendimentoHorizResidence_128.setVisible(false);lyr_EmpreendimentoJardimFlora_129.setVisible(false);lyr_EmpreendimentoJardimFlora_130.setVisible(false);lyr_EmpreendimentoJardimHorizonte_131.setVisible(false);lyr_EmpreendimentoJardimHorizonte_132.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_133.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_134.setVisible(false);lyr_EmpreendimentoMontBlancResidence_135.setVisible(false);lyr_EmpreendimentoMontBlancResidence_136.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_137.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_138.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_139.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_140.setVisible(false);lyr_EmpreendimentoParagonII_141.setVisible(false);lyr_EmpreendimentoParagonII_142.setVisible(false);lyr_EmpreendimentoParagon_143.setVisible(false);lyr_EmpreendimentoParagon_144.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_145.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_146.setVisible(false);lyr_EmpreendimentoDaVinci_147.setVisible(false);lyr_EmpreendimentoDaVinci_148.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_149.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_150.setVisible(false);lyr_EmpreendimentoResidencialSantaF_151.setVisible(false);lyr_EmpreendimentoResidencialSantaF_152.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_153.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_154.setVisible(false);lyr_EmpreendimentoTorontoResidence_155.setVisible(false);lyr_EmpreendimentoTorontoResidence_156.setVisible(false);lyr_EmpreendimentoCidadeJardim_157.setVisible(false);lyr_EmpreendimentoCidadeJardim_158.setVisible(false);lyr_EmpreendimentoColorado_159.setVisible(false);lyr_EmpreendimentoColorado_160.setVisible(false);lyr_EmpreendimentoFerracini_161.setVisible(false);lyr_EmpreendimentoFerracini_162.setVisible(false);lyr_EmpreendimentoResicencialNairRetuciII_163.setVisible(false);lyr_EmpreendimentoResicencialNairRetuciII_164.setVisible(false);lyr_EmpreendimentoVillaPucci_165.setVisible(false);lyr_EmpreendimentoVillaPucci_166.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_167.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_168.setVisible(false);lyr_EmpreendimentosAprovado27unid_169.setVisible(false);lyr_EmpreendimentosDiretriz8unid_170.setVisible(false);lyr_EmpreendimentosDefinitiva7unid_171.setVisible(false);lyr_EmpreendimentosPrvia24unid_172.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_173.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_174.setVisible(false);lyr_PBZPAHospitalHELIPONTO_175.setVisible(false);lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176.setVisible(false);lyr_DeclividadeZonaUrbanaCopernicus30m_177.setVisible(false);lyr_DeclividadeZonaRuralSulCopernicus30m_178.setVisible(false);lyr_DeclividadeZonaRuralNorteCopernicus30m_179.setVisible(false);lyr_FazendaBarroPretoeBambus_180.setVisible(false);lyr_Matrcula106206_181.setVisible(false);lyr_RecantoEmanuelMatrcula95782_182.setVisible(false);lyr_RecantoEmanuelMatrcula95783_183.setVisible(false);lyr_StioNossaSenhoraAparecida_184.setVisible(false);lyr_LoteamentosClandestinos3unid_185.setVisible(false);lyr_ParqueZumbidosPalmares_186.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188.setVisible(false);lyr_AntigoAterrodasMaritacas_189.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_193.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195.setVisible(false);lyr_ARORemanescentesFlorestais_196.setVisible(false);lyr_AROreadeAmortecimento_197.setVisible(false);lyr_AROFaixadeCuestas_198.setVisible(false);lyr_AROAPP_199.setVisible(false);lyr_ARAIncongrunciasemAPP_200.setVisible(false);lyr_ARAETELagoas_201.setVisible(false);lyr_ARAAterros_202.setVisible(false);lyr_AODreaUrbanaConsolidada_203.setVisible(false);lyr_AODBaixaDensidadeNvel3_204.setVisible(false);lyr_AODBaixaDensidadeNvel2_205.setVisible(false);lyr_AODBaixaDensidadeNvel1_206.setVisible(false);lyr_AODAUSFase2_207.setVisible(false);lyr_AODAUSFase1_208.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_209.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_210.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_211.setVisible(false);lyr_AoCivilPblica1unid_212.setVisible(false);lyr_AoCivilPblica1unid_213.setVisible(false);lyr_CartaAnuncia20unid_214.setVisible(false);lyr_CartaAnuncia19unid_215.setVisible(false);lyr_PlantioVoluntrio1unid_216.setVisible(false);lyr_PlantioVoluntrio1unid_217.setVisible(false);lyr_TACMinistrioPblico9unid_218.setVisible(false);lyr_TACMinistrioPblico9unid_219.setVisible(false);lyr_TCRACETESB28unid_220.setVisible(false);lyr_TCRACETESB28unid_221.setVisible(false);lyr_TCRAMunicipal14unid_222.setVisible(false);lyr_TCRAMunicipal14unid_223.setVisible(false);lyr_TRPRLCETESB2unid_224.setVisible(false);lyr_TRPRLCETESB2unid_225.setVisible(false);lyr_rvoreImuneaoCorte8unid_226.setVisible(false);lyr_Voorocas26unid_227.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,group_HidrografiaFBDS2025,group_FazendaMunicipalPousoAlto,group_reasPblicas,group_SecretariadeInfraestrutura,group_Declividade,group_LoteamentosClandestinos,group_GerenciamentodereasContaminadas,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_reasCompromissadas,lyr_rvoreImuneaoCorte8unid_226,lyr_Voorocas26unid_227];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_reaUrbanadeFranca_4.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Código da UF': 'Código da UF', 'Classe de Uso': 'Classe de Uso', 'Área (ha)': 'Área (ha)', 'Área (km²)': 'Área (km²)', });
lyr_APP1745unid_5.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_6.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_7.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_8.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_9.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_RemanescentedaMatrcula11419_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_ConjuntoHabitacional_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_AvdeacessoaoHortoeColgioAgrcola_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaK_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaJ_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaI_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaH_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaG_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaF_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaE_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaD_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaC_21.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaB_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaA_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaaseraverbadaPartedareaG_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_LoteEMDEF10unid218783m_26.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', });
lyr_LoteEMDEF10unid_27.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_Lote504unid13809703m_28.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', });
lyr_Lote504unid_29.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_APP169unid238007435m_30.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', });
lyr_readeUsoEspecial247unid269765616m_31.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', });
lyr_reaInstitucional240unid136439095m_32.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', });
lyr_reaPatrimonial33unid15807656m_33.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', });
lyr_reaVerde2011unid845466642m_34.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', });
lyr_EmpreendimentoVillaDoratta_35.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_arizona_poligonos_36.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_arizona_linhas_37.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_fazenda_progresso_poligonos_38.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_fazenda_progresso_linhas_39.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_villa_bella_poligonos_40.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_villa_bella_linhas_41.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDoratta_42.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDioceseFranca_43.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDioceseFranca_44.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_45.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_46.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoInfratecinica_47.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoInfratecinica_48.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialBoaVista_49.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialBoaVista_50.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_51.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_52.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDiEspanhaIII_53.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDiEspanhaIII_54.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_55.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_56.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_57.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_58.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_59.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_60.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoRecantoMeneghetti_61.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoRecantoMeneghetti_62.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_63.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_64.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_65.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_66.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_67.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_68.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialJabuticabeiras_69.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialJabuticabeiras_70.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_71.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_72.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_73.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_74.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_75.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_76.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_77.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_78.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegreII_79.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegreII_80.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_81.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_82.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_83.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_84.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialMarioTasso_85.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarioTasso_86.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidenciaisVivenna_87.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidenciaisVivenna_88.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_89.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_90.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_91.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_92.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialSoCarlosI_93.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSoCarlosI_94.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoMonti_95.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMonti_96.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMoradadoBosque_97.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMoradadoBosque_98.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_99.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_100.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMarthaHelena_101.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarthaHelena_102.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialYasminTorres_103.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialYasminTorres_104.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoPalmeiraReal_105.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoPalmeiraReal_106.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEssence_107.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEssence_108.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_109.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_110.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoSonetto_111.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSonetto_112.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialSantaIns_113.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaIns_114.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEdifcioSolNascente_115.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioSolNascente_116.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadosOitis_117.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadosOitis_118.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadoSol_119.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadoSol_120.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_121.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_122.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoBordadaMata_123.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoBordadaMata_124.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_125.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_126.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_127.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_128.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_129.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_131.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagonII_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagonII_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_148.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_149.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_150.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_153.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_155.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_156.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCidadeJardim_157.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCidadeJardim_158.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoColorado_159.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoColorado_160.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFerracini_161.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFerracini_162.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuciII_163.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuciII_164.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaPucci_165.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaPucci_166.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_167.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_168.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_EmpreendimentosAprovado27unid_169.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDiretriz8unid_170.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDefinitiva7unid_171.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosPrvia24unid_172.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_PBZPAEdifcioPrimeHELIPONTO_173.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAEdifcioPrimeHELIPONTO_174.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAHospitalHELIPONTO_175.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_DeclividadeZonaUrbanaCopernicus30m_177.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_DeclividadeZonaRuralSulCopernicus30m_178.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_179.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_FazendaBarroPretoeBambus_180.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_Matrcula106206_181.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_RecantoEmanuelMatrcula95782_182.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_RecantoEmanuelMatrcula95783_183.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_StioNossaSenhoraAparecida_184.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_LoteamentosClandestinos3unid_185.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'area': 'area', 'multa': 'multa', 'ufmf': 'ufmf', });
lyr_ParqueZumbidosPalmares_186.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacas_189.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodaFazendaMunicipal_193.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194.set('fieldAliases', {'fid': 'fid', 'Field1': 'Poço', 'Field2': 'Field2', 'Field3': 'Field3', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Poço', });
lyr_ARORemanescentesFlorestais_196.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_197.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_198.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_199.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_200.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_201.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_202.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_203.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_204.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_205.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_206.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_207.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'SUM_area': 'SUM_area', 'FIRST_AI': 'FIRST_AI', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_208.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_209.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_210.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_211.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_AoCivilPblica1unid_212.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_213.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia20unid_214.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia19unid_215.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio1unid_216.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_217.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico9unid_218.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_219.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB28unid_220.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESB28unid_221.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal14unid_222.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal14unid_223.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB2unid_224.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_225.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_rvoreImuneaoCorte8unid_226.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_Voorocas26unid_227.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'CD_MUN': '', 'NM_MUN': '', 'CD_RGI': '', 'NM_RGI': '', 'CD_RGINT': '', 'NM_RGINT': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIA': '', 'NM_REGIA': '', 'SIGLA_RG': '', 'CD_CONCU': '', 'NM_CONCU': '', 'AREA_KM2': '', });
lyr_reaUrbanadeFranca_4.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Código da UF': '', 'Classe de Uso': '', 'Área (ha)': '', 'Área (km²)': '', });
lyr_APP1745unid_5.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_6.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_7.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_8.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_9.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_RemanescentedaMatrcula11419_10.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_ConjuntoHabitacional_11.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_AvdeacessoaoHortoeColgioAgrcola_12.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaK_13.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaJ_14.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaI_15.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaH_16.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaG_17.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaF_18.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaE_19.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaD_20.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaC_21.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaB_22.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaA_23.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaaseraverbadaPartedareaG_25.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_LoteEMDEF10unid218783m_26.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', });
lyr_LoteEMDEF10unid_27.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_Lote504unid13809703m_28.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', });
lyr_Lote504unid_29.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_APP169unid238007435m_30.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', });
lyr_readeUsoEspecial247unid269765616m_31.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', });
lyr_reaInstitucional240unid136439095m_32.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', });
lyr_reaPatrimonial33unid15807656m_33.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', });
lyr_reaVerde2011unid845466642m_34.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', });
lyr_EmpreendimentoVillaDoratta_35.set('fieldImages', {'fid': '', 'layer': '', });
lyr_arizona_poligonos_36.set('fieldImages', {'fid': '', 'layer': '', });
lyr_arizona_linhas_37.set('fieldImages', {'fid': '', 'layer': '', });
lyr_fazenda_progresso_poligonos_38.set('fieldImages', {'fid': '', 'layer': '', });
lyr_fazenda_progresso_linhas_39.set('fieldImages', {'fid': '', 'layer': '', });
lyr_villa_bella_poligonos_40.set('fieldImages', {'fid': '', 'layer': '', });
lyr_villa_bella_linhas_41.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDoratta_42.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDioceseFranca_43.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDioceseFranca_44.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_45.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_46.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoInfratecinica_47.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoInfratecinica_48.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialBoaVista_49.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialBoaVista_50.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_51.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_52.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDiEspanhaIII_53.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDiEspanhaIII_54.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_55.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_56.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_57.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_58.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_59.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_60.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoRecantoMeneghetti_61.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoRecantoMeneghetti_62.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_63.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_64.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_65.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_66.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_67.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_68.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_69.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_70.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_71.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_72.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_73.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_74.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoLoteamentolamo_75.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoLoteamentolamo_76.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_77.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_78.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegreII_79.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegreII_80.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_81.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_82.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_83.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_84.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialMarioTasso_85.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarioTasso_86.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidenciaisVivenna_87.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidenciaisVivenna_88.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_89.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_90.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmprendimentoElias_91.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmprendimentoElias_92.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialSoCarlosI_93.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSoCarlosI_94.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoMonti_95.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMonti_96.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_97.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_98.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_99.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_100.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMarthaHelena_101.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarthaHelena_102.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialYasminTorres_103.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialYasminTorres_104.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoPalmeiraReal_105.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoPalmeiraReal_106.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEssence_107.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEssence_108.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_109.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_110.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoSonetto_111.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSonetto_112.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialSantaIns_113.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaIns_114.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEdifcioSolNascente_115.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioSolNascente_116.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_117.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_118.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadoSol_119.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadoSol_120.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_121.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_122.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoBordadaMata_123.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoBordadaMata_124.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_125.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_126.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_127.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_128.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_129.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_130.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_131.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_132.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_134.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_136.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_140.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagonII_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagonII_142.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_143.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_144.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_145.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_146.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_147.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_148.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_149.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_150.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_151.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_152.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_153.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_154.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_155.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_156.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCidadeJardim_157.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCidadeJardim_158.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoColorado_159.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoColorado_160.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFerracini_161.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFerracini_162.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuciII_163.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuciII_164.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaPucci_165.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaPucci_166.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_167.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_168.set('fieldImages', {'fid': '', 'id': '', });
lyr_EmpreendimentosAprovado27unid_169.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDiretriz8unid_170.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDefinitiva7unid_171.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosPrvia24unid_172.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_173.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_174.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAHospitalHELIPONTO_175.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_DeclividadeZonaUrbanaCopernicus30m_177.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_DeclividadeZonaRuralSulCopernicus30m_178.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_179.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_FazendaBarroPretoeBambus_180.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_Matrcula106206_181.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RecantoEmanuelMatrcula95782_182.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RecantoEmanuelMatrcula95783_183.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_StioNossaSenhoraAparecida_184.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_LoteamentosClandestinos3unid_185.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_ParqueZumbidosPalmares_186.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_189.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_193.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194.set('fieldImages', {'fid': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ARORemanescentesFlorestais_196.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_197.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_198.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_199.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_200.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_201.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_202.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_203.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_204.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_205.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_206.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_207.set('fieldImages', {'fid': '', 'Classe': '', 'SUM_area': '', 'FIRST_AI': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase1_208.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_209.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_210.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_211.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_AoCivilPblica1unid_212.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_213.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_CartaAnuncia20unid_214.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia19unid_215.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_PlantioVoluntrio1unid_216.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_217.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_TACMinistrioPblico9unid_218.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_219.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TCRACETESB28unid_220.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB28unid_221.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', });
lyr_TCRAMunicipal14unid_222.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal14unid_223.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TRPRLCETESB2unid_224.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_225.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_rvoreImuneaoCorte8unid_226.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_Voorocas26unid_227.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_reaUrbanadeFranca_4.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Código da UF': 'hidden field', 'Classe de Uso': 'hidden field', 'Área (ha)': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_APP1745unid_5.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_RiosDuplos84unid_6.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_7.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_8.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_9.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_RemanescentedaMatrcula11419_10.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_ConjuntoHabitacional_11.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_AvdeacessoaoHortoeColgioAgrcola_12.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaK_13.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaJ_14.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaI_15.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaH_16.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaG_17.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaF_18.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaE_19.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaD_20.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaC_21.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaB_22.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaA_23.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaaseraverbadaPartedareaG_25.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_LoteEMDEF10unid218783m_26.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'no label', });
lyr_LoteEMDEF10unid_27.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_Lote504unid13809703m_28.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'no label', });
lyr_Lote504unid_29.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_APP169unid238007435m_30.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'no label', });
lyr_readeUsoEspecial247unid269765616m_31.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'no label', });
lyr_reaInstitucional240unid136439095m_32.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'no label', });
lyr_reaPatrimonial33unid15807656m_33.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'no label', });
lyr_reaVerde2011unid845466642m_34.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'no label', });
lyr_EmpreendimentoVillaDoratta_35.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_arizona_poligonos_36.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_arizona_linhas_37.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_fazenda_progresso_poligonos_38.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_fazenda_progresso_linhas_39.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_villa_bella_poligonos_40.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_villa_bella_linhas_41.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDoratta_42.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDioceseFranca_43.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDioceseFranca_44.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_45.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_46.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoInfratecinica_47.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoInfratecinica_48.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialBoaVista_49.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialBoaVista_50.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_51.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_52.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDiEspanhaIII_53.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDiEspanhaIII_54.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_55.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_56.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_57.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_58.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_59.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_60.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoRecantoMeneghetti_61.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoRecantoMeneghetti_62.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_63.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_64.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_65.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_66.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_67.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_68.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialJabuticabeiras_69.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialJabuticabeiras_70.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_71.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_72.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_73.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_74.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_75.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_76.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_77.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_78.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegreII_79.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegreII_80.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_81.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_82.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_83.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_84.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialMarioTasso_85.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarioTasso_86.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidenciaisVivenna_87.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidenciaisVivenna_88.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_89.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_90.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_91.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_92.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialSoCarlosI_93.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSoCarlosI_94.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoMonti_95.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMonti_96.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMoradadoBosque_97.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMoradadoBosque_98.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_99.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_100.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMarthaHelena_101.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarthaHelena_102.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialYasminTorres_103.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialYasminTorres_104.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoPalmeiraReal_105.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoPalmeiraReal_106.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEssence_107.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEssence_108.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_109.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_110.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoSonetto_111.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSonetto_112.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialSantaIns_113.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaIns_114.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEdifcioSolNascente_115.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioSolNascente_116.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadosOitis_117.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadosOitis_118.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadoSol_119.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadoSol_120.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_121.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_122.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoBordadaMata_123.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoBordadaMata_124.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_125.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_126.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_127.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_128.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_129.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_130.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_131.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagonII_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagonII_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_143.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_144.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_148.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_149.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_150.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_153.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_155.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_156.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCidadeJardim_157.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCidadeJardim_158.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoColorado_159.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoColorado_160.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFerracini_161.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFerracini_162.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuciII_163.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuciII_164.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaPucci_165.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaPucci_166.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_167.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_168.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_EmpreendimentosAprovado27unid_169.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDiretriz8unid_170.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDefinitiva7unid_171.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosPrvia24unid_172.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_173.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_174.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAHospitalHELIPONTO_175.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_176.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_DeclividadeZonaUrbanaCopernicus30m_177.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_DeclividadeZonaRuralSulCopernicus30m_178.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_179.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_FazendaBarroPretoeBambus_180.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_Matrcula106206_181.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RecantoEmanuelMatrcula95782_182.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RecantoEmanuelMatrcula95783_183.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_StioNossaSenhoraAparecida_184.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_LoteamentosClandestinos3unid_185.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_ParqueZumbidosPalmares_186.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_187.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_188.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacas_189.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_190.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_191.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_192.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipal_193.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_194.set('fieldLabels', {'fid': 'hidden field', 'Field1': 'inline label - visible with data', 'Field2': 'hidden field', 'Field3': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_195.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_196.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_197.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_198.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_199.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_200.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_201.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_202.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_203.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_204.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_205.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_206.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_207.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_208.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_209.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_210.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_211.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_212.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_213.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_214.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia19unid_215.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_216.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_217.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_218.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_219.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB28unid_220.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB28unid_221.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_222.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_223.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_224.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_225.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte8unid_226.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_Voorocas26unid_227.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_Voorocas26unid_227.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});