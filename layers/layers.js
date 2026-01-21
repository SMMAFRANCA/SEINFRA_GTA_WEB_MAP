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
var format_reaVerde2008unid845466642m_34 = new ol.format.GeoJSON();
var features_reaVerde2008unid845466642m_34 = format_reaVerde2008unid845466642m_34.readFeatures(json_reaVerde2008unid845466642m_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaVerde2008unid845466642m_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde2008unid845466642m_34.addFeatures(features_reaVerde2008unid845466642m_34);
var lyr_reaVerde2008unid845466642m_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde2008unid845466642m_34, 
                style: style_reaVerde2008unid845466642m_34,
                popuplayertitle: 'Área Verde (2008 unid. / 8.454.666,42 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde2008unid845466642m_34.png" /> Área Verde (2008 unid. / 8.454.666,42 m²)'
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
var format_EmpreendimentoVillaDoratta_36 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDoratta_36 = format_EmpreendimentoVillaDoratta_36.readFeatures(json_EmpreendimentoVillaDoratta_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDoratta_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDoratta_36.addFeatures(features_EmpreendimentoVillaDoratta_36);
var lyr_EmpreendimentoVillaDoratta_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDoratta_36, 
                style: style_EmpreendimentoVillaDoratta_36,
                popuplayertitle: 'Empreendimento Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaDoratta_36.png" /> Empreendimento Villa Doratta'
            });
var format_EmpreendimentoDioceseFranca_37 = new ol.format.GeoJSON();
var features_EmpreendimentoDioceseFranca_37 = format_EmpreendimentoDioceseFranca_37.readFeatures(json_EmpreendimentoDioceseFranca_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDioceseFranca_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDioceseFranca_37.addFeatures(features_EmpreendimentoDioceseFranca_37);
var lyr_EmpreendimentoDioceseFranca_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDioceseFranca_37, 
                style: style_EmpreendimentoDioceseFranca_37,
                popuplayertitle: 'Empreendimento Diocese Franca',
                interactive: true,
    title: 'Empreendimento Diocese Franca<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_37_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_37_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_37_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_37_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_37_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_37_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_37_6.png" /> RUAS<br />' });
var format_EmpreendimentoDioceseFranca_38 = new ol.format.GeoJSON();
var features_EmpreendimentoDioceseFranca_38 = format_EmpreendimentoDioceseFranca_38.readFeatures(json_EmpreendimentoDioceseFranca_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDioceseFranca_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDioceseFranca_38.addFeatures(features_EmpreendimentoDioceseFranca_38);
var lyr_EmpreendimentoDioceseFranca_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDioceseFranca_38, 
                style: style_EmpreendimentoDioceseFranca_38,
                popuplayertitle: 'Empreendimento Diocese Franca',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDioceseFranca_38.png" /> Empreendimento Diocese Franca'
            });
var format_EmpreendimentoAdonis_39 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_39 = format_EmpreendimentoAdonis_39.readFeatures(json_EmpreendimentoAdonis_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_39.addFeatures(features_EmpreendimentoAdonis_39);
var lyr_EmpreendimentoAdonis_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_39, 
                style: style_EmpreendimentoAdonis_39,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
    title: 'Empreendimento Adonis<br />\
    <img src="styles/legend/EmpreendimentoAdonis_39_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoAdonis_39_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoAdonis_39_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoAdonis_39_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoAdonis_39_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoAdonis_39_5.png" /> RUAS<br />' });
var format_EmpreendimentoAdonis_40 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_40 = format_EmpreendimentoAdonis_40.readFeatures(json_EmpreendimentoAdonis_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_40.addFeatures(features_EmpreendimentoAdonis_40);
var lyr_EmpreendimentoAdonis_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_40, 
                style: style_EmpreendimentoAdonis_40,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAdonis_40.png" /> Empreendimento Adonis'
            });
var format_EmpreendimentoInfratecinica_41 = new ol.format.GeoJSON();
var features_EmpreendimentoInfratecinica_41 = format_EmpreendimentoInfratecinica_41.readFeatures(json_EmpreendimentoInfratecinica_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoInfratecinica_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoInfratecinica_41.addFeatures(features_EmpreendimentoInfratecinica_41);
var lyr_EmpreendimentoInfratecinica_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoInfratecinica_41, 
                style: style_EmpreendimentoInfratecinica_41,
                popuplayertitle: 'Empreendimento Infratecinica',
                interactive: true,
    title: 'Empreendimento Infratecinica<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_41_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_41_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_41_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_41_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_41_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_41_5.png" /> RUAS<br />' });
var format_EmpreendimentoInfratecinica_42 = new ol.format.GeoJSON();
var features_EmpreendimentoInfratecinica_42 = format_EmpreendimentoInfratecinica_42.readFeatures(json_EmpreendimentoInfratecinica_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoInfratecinica_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoInfratecinica_42.addFeatures(features_EmpreendimentoInfratecinica_42);
var lyr_EmpreendimentoInfratecinica_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoInfratecinica_42, 
                style: style_EmpreendimentoInfratecinica_42,
                popuplayertitle: 'Empreendimento Infratecinica',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoInfratecinica_42.png" /> Empreendimento Infratecinica'
            });
var format_EmpreendimentoResidencialBoaVista_43 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialBoaVista_43 = format_EmpreendimentoResidencialBoaVista_43.readFeatures(json_EmpreendimentoResidencialBoaVista_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialBoaVista_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialBoaVista_43.addFeatures(features_EmpreendimentoResidencialBoaVista_43);
var lyr_EmpreendimentoResidencialBoaVista_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialBoaVista_43, 
                style: style_EmpreendimentoResidencialBoaVista_43,
                popuplayertitle: 'Empreendimento Residencial Boa Vista',
                interactive: true,
    title: 'Empreendimento Residencial Boa Vista<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_43_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_43_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_43_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_43_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_43_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_43_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_43_6.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_43_7.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialBoaVista_44 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialBoaVista_44 = format_EmpreendimentoResidencialBoaVista_44.readFeatures(json_EmpreendimentoResidencialBoaVista_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialBoaVista_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialBoaVista_44.addFeatures(features_EmpreendimentoResidencialBoaVista_44);
var lyr_EmpreendimentoResidencialBoaVista_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialBoaVista_44, 
                style: style_EmpreendimentoResidencialBoaVista_44,
                popuplayertitle: 'Empreendimento Residencial Boa Vista',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialBoaVista_44.png" /> Empreendimento Residencial Boa Vista'
            });
var format_EmpreendimentoCondomnioResicencialTerraNova_45 = new ol.format.GeoJSON();
var features_EmpreendimentoCondomnioResicencialTerraNova_45 = format_EmpreendimentoCondomnioResicencialTerraNova_45.readFeatures(json_EmpreendimentoCondomnioResicencialTerraNova_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCondomnioResicencialTerraNova_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCondomnioResicencialTerraNova_45.addFeatures(features_EmpreendimentoCondomnioResicencialTerraNova_45);
var lyr_EmpreendimentoCondomnioResicencialTerraNova_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCondomnioResicencialTerraNova_45, 
                style: style_EmpreendimentoCondomnioResicencialTerraNova_45,
                popuplayertitle: 'Empreendimento Condomínio Resicencial Terra Nova',
                interactive: true,
    title: 'Empreendimento Condomínio Resicencial Terra Nova<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_45_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_45_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_45_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_45_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_45_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_45_5.png" /> RUAS<br />' });
var format_EmpreendimentoCondomnioResicencialTerraNova_46 = new ol.format.GeoJSON();
var features_EmpreendimentoCondomnioResicencialTerraNova_46 = format_EmpreendimentoCondomnioResicencialTerraNova_46.readFeatures(json_EmpreendimentoCondomnioResicencialTerraNova_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCondomnioResicencialTerraNova_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCondomnioResicencialTerraNova_46.addFeatures(features_EmpreendimentoCondomnioResicencialTerraNova_46);
var lyr_EmpreendimentoCondomnioResicencialTerraNova_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCondomnioResicencialTerraNova_46, 
                style: style_EmpreendimentoCondomnioResicencialTerraNova_46,
                popuplayertitle: 'Empreendimento Condomínio Resicencial Terra Nova',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_46.png" /> Empreendimento Condomínio Resicencial Terra Nova'
            });
var format_EmpreendimentoVillaDiEspanhaIII_47 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDiEspanhaIII_47 = format_EmpreendimentoVillaDiEspanhaIII_47.readFeatures(json_EmpreendimentoVillaDiEspanhaIII_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDiEspanhaIII_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDiEspanhaIII_47.addFeatures(features_EmpreendimentoVillaDiEspanhaIII_47);
var lyr_EmpreendimentoVillaDiEspanhaIII_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDiEspanhaIII_47, 
                style: style_EmpreendimentoVillaDiEspanhaIII_47,
                popuplayertitle: 'Empreendimento Villa Di Espanha I/II',
                interactive: true,
    title: 'Empreendimento Villa Di Espanha I/II<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_47_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_47_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_47_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_47_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_47_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_47_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_47_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_47_7.png" /> VIELA<br />' });
var format_EmpreendimentoVillaDiEspanhaIII_48 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDiEspanhaIII_48 = format_EmpreendimentoVillaDiEspanhaIII_48.readFeatures(json_EmpreendimentoVillaDiEspanhaIII_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDiEspanhaIII_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDiEspanhaIII_48.addFeatures(features_EmpreendimentoVillaDiEspanhaIII_48);
var lyr_EmpreendimentoVillaDiEspanhaIII_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDiEspanhaIII_48, 
                style: style_EmpreendimentoVillaDiEspanhaIII_48,
                popuplayertitle: 'Empreendimento Villa Di Espanha I/II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_48.png" /> Empreendimento Villa Di Espanha I/II'
            });
var format_EmpreendimentoSoCarlosII_49 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_49 = format_EmpreendimentoSoCarlosII_49.readFeatures(json_EmpreendimentoSoCarlosII_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_49.addFeatures(features_EmpreendimentoSoCarlosII_49);
var lyr_EmpreendimentoSoCarlosII_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_49, 
                style: style_EmpreendimentoSoCarlosII_49,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
    title: 'Empreendimento São Carlos II<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_49_0.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_49_1.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_49_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_49_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_49_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_49_5.png" /> RUAS<br />' });
var format_EmpreendimentoSoCarlosII_50 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_50 = format_EmpreendimentoSoCarlosII_50.readFeatures(json_EmpreendimentoSoCarlosII_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_50.addFeatures(features_EmpreendimentoSoCarlosII_50);
var lyr_EmpreendimentoSoCarlosII_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_50, 
                style: style_EmpreendimentoSoCarlosII_50,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSoCarlosII_50.png" /> Empreendimento São Carlos II'
            });
var format_EmpreendimentoParqueFlora_51 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_51 = format_EmpreendimentoParqueFlora_51.readFeatures(json_EmpreendimentoParqueFlora_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_51.addFeatures(features_EmpreendimentoParqueFlora_51);
var lyr_EmpreendimentoParqueFlora_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_51, 
                style: style_EmpreendimentoParqueFlora_51,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
    title: 'Empreendimento Parque Flora<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_51_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_51_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_51_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_51_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_51_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_51_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_51_6.png" /> VIELA<br />' });
var format_EmpreendimentoParqueFlora_52 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_52 = format_EmpreendimentoParqueFlora_52.readFeatures(json_EmpreendimentoParqueFlora_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_52.addFeatures(features_EmpreendimentoParqueFlora_52);
var lyr_EmpreendimentoParqueFlora_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_52, 
                style: style_EmpreendimentoParqueFlora_52,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueFlora_52.png" /> Empreendimento Parque Flora'
            });
var format_EmpreendimentoVittaSoVicente_53 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_53 = format_EmpreendimentoVittaSoVicente_53.readFeatures(json_EmpreendimentoVittaSoVicente_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_53.addFeatures(features_EmpreendimentoVittaSoVicente_53);
var lyr_EmpreendimentoVittaSoVicente_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_53, 
                style: style_EmpreendimentoVittaSoVicente_53,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
    title: 'Empreendimento Vitta São Vicente<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_53_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_53_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_53_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_53_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_53_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_53_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVittaSoVicente_54 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_54 = format_EmpreendimentoVittaSoVicente_54.readFeatures(json_EmpreendimentoVittaSoVicente_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_54.addFeatures(features_EmpreendimentoVittaSoVicente_54);
var lyr_EmpreendimentoVittaSoVicente_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_54, 
                style: style_EmpreendimentoVittaSoVicente_54,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaSoVicente_54.png" /> Empreendimento Vitta São Vicente'
            });
var format_EmpreendimentoRecantoMeneghetti_55 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_55 = format_EmpreendimentoRecantoMeneghetti_55.readFeatures(json_EmpreendimentoRecantoMeneghetti_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_55.addFeatures(features_EmpreendimentoRecantoMeneghetti_55);
var lyr_EmpreendimentoRecantoMeneghetti_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_55, 
                style: style_EmpreendimentoRecantoMeneghetti_55,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
    title: 'Empreendimento Recanto Meneghetti<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_55_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_55_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_55_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_55_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_55_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_55_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_55_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_55_7.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_55_8.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_55_9.png" /> VIELA<br />' });
var format_EmpreendimentoRecantoMeneghetti_56 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_56 = format_EmpreendimentoRecantoMeneghetti_56.readFeatures(json_EmpreendimentoRecantoMeneghetti_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_56.addFeatures(features_EmpreendimentoRecantoMeneghetti_56);
var lyr_EmpreendimentoRecantoMeneghetti_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_56, 
                style: style_EmpreendimentoRecantoMeneghetti_56,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoRecantoMeneghetti_56.png" /> Empreendimento Recanto Meneghetti'
            });
var format_EmpreendimentoParquedosSabias_57 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_57 = format_EmpreendimentoParquedosSabias_57.readFeatures(json_EmpreendimentoParquedosSabias_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_57.addFeatures(features_EmpreendimentoParquedosSabias_57);
var lyr_EmpreendimentoParquedosSabias_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_57, 
                style: style_EmpreendimentoParquedosSabias_57,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
    title: 'Empreendimento Parque dos Sabias<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_57_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_57_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_57_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_57_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_57_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_57_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_57_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_57_7.png" /> VIELA<br />' });
var format_EmpreendimentoParquedosSabias_58 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_58 = format_EmpreendimentoParquedosSabias_58.readFeatures(json_EmpreendimentoParquedosSabias_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_58.addFeatures(features_EmpreendimentoParquedosSabias_58);
var lyr_EmpreendimentoParquedosSabias_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_58, 
                style: style_EmpreendimentoParquedosSabias_58,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquedosSabias_58.png" /> Empreendimento Parque dos Sabias'
            });
var format_EmpreendimentoMoradadaMata_59 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_59 = format_EmpreendimentoMoradadaMata_59.readFeatures(json_EmpreendimentoMoradadaMata_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_59.addFeatures(features_EmpreendimentoMoradadaMata_59);
var lyr_EmpreendimentoMoradadaMata_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_59, 
                style: style_EmpreendimentoMoradadaMata_59,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
    title: 'Empreendimento Morada da Mata<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_59_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_59_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_59_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_59_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_59_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_59_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_59_6.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_59_7.png" /> RUAS<br />' });
var format_EmpreendimentoMoradadaMata_60 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_60 = format_EmpreendimentoMoradadaMata_60.readFeatures(json_EmpreendimentoMoradadaMata_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_60.addFeatures(features_EmpreendimentoMoradadaMata_60);
var lyr_EmpreendimentoMoradadaMata_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_60, 
                style: style_EmpreendimentoMoradadaMata_60,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadaMata_60.png" /> Empreendimento Morada da Mata'
            });
var format_EmpreendimentoIrineuZanetiII_61 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_61 = format_EmpreendimentoIrineuZanetiII_61.readFeatures(json_EmpreendimentoIrineuZanetiII_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_61.addFeatures(features_EmpreendimentoIrineuZanetiII_61);
var lyr_EmpreendimentoIrineuZanetiII_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_61, 
                style: style_EmpreendimentoIrineuZanetiII_61,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
    title: 'Empreendimento Irineu Zaneti II<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_61_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_61_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_61_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_61_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_61_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_61_5.png" /> RUAS<br />' });
var format_EmpreendimentoIrineuZanetiII_62 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_62 = format_EmpreendimentoIrineuZanetiII_62.readFeatures(json_EmpreendimentoIrineuZanetiII_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_62.addFeatures(features_EmpreendimentoIrineuZanetiII_62);
var lyr_EmpreendimentoIrineuZanetiII_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_62, 
                style: style_EmpreendimentoIrineuZanetiII_62,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoIrineuZanetiII_62.png" /> Empreendimento Irineu Zaneti II'
            });
var format_EmpreendimentoResidencialJabuticabeiras_63 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_63 = format_EmpreendimentoResidencialJabuticabeiras_63.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_63.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_63);
var lyr_EmpreendimentoResidencialJabuticabeiras_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_63, 
                style: style_EmpreendimentoResidencialJabuticabeiras_63,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
    title: 'Empreendimento Residencial Jabuticabeiras<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_63_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_63_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_63_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_63_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_63_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_63_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_63_6.png" /> VIELA<br />' });
var format_EmpreendimentoResidencialJabuticabeiras_64 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_64 = format_EmpreendimentoResidencialJabuticabeiras_64.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_64.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_64);
var lyr_EmpreendimentoResidencialJabuticabeiras_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_64, 
                style: style_EmpreendimentoResidencialJabuticabeiras_64,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_64.png" /> Empreendimento Residencial Jabuticabeiras'
            });
var format_EmpreendimentoResidencialMarianaAlarcon_65 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_65 = format_EmpreendimentoResidencialMarianaAlarcon_65.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_65.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_65);
var lyr_EmpreendimentoResidencialMarianaAlarcon_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_65, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_65,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
    title: 'Empreendimento Residencial Mariana Alarcon<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_65_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_65_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_65_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_65_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_65_4.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_65_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_65_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialMarianaAlarcon_66 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_66 = format_EmpreendimentoResidencialMarianaAlarcon_66.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_66.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_66);
var lyr_EmpreendimentoResidencialMarianaAlarcon_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_66, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_66,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_66.png" /> Empreendimento Residencial Mariana Alarcon'
            });
var format_EmpreendimentoResidencialCintraAlves_67 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_67 = format_EmpreendimentoResidencialCintraAlves_67.readFeatures(json_EmpreendimentoResidencialCintraAlves_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_67.addFeatures(features_EmpreendimentoResidencialCintraAlves_67);
var lyr_EmpreendimentoResidencialCintraAlves_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_67, 
                style: style_EmpreendimentoResidencialCintraAlves_67,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
    title: 'Empreendimento Residencial Cintra Alves<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_67_0.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_67_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_67_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_67_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_67_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_67_5.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_67_6.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_67_7.png" /> Viela<br />' });
var format_EmpreendimentoResidencialCintraAlves_68 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_68 = format_EmpreendimentoResidencialCintraAlves_68.readFeatures(json_EmpreendimentoResidencialCintraAlves_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_68.addFeatures(features_EmpreendimentoResidencialCintraAlves_68);
var lyr_EmpreendimentoResidencialCintraAlves_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_68, 
                style: style_EmpreendimentoResidencialCintraAlves_68,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialCintraAlves_68.png" /> Empreendimento Residencial Cintra Alves'
            });
var format_EmpreendimentoLoteamentolamo_69 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_69 = format_EmpreendimentoLoteamentolamo_69.readFeatures(json_EmpreendimentoLoteamentolamo_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_69.addFeatures(features_EmpreendimentoLoteamentolamo_69);
var lyr_EmpreendimentoLoteamentolamo_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_69, 
                style: style_EmpreendimentoLoteamentolamo_69,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
    title: 'Empreendimento Loteamento Álamo <br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_69_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_69_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_69_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_69_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_69_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_69_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_69_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_69_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_69_8.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_69_9.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_69_10.png" /> VIELA<br />' });
var format_EmpreendimentoLoteamentolamo_70 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_70 = format_EmpreendimentoLoteamentolamo_70.readFeatures(json_EmpreendimentoLoteamentolamo_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_70.addFeatures(features_EmpreendimentoLoteamentolamo_70);
var lyr_EmpreendimentoLoteamentolamo_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_70, 
                style: style_EmpreendimentoLoteamentolamo_70,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoLoteamentolamo_70.png" /> Empreendimento Loteamento Álamo '
            });
var format_EmpreendimentoSantaLina_71 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_71 = format_EmpreendimentoSantaLina_71.readFeatures(json_EmpreendimentoSantaLina_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_71.addFeatures(features_EmpreendimentoSantaLina_71);
var lyr_EmpreendimentoSantaLina_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_71, 
                style: style_EmpreendimentoSantaLina_71,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
    title: 'Empreendimento Santa Lina<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_71_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_71_1.png" /> Lotes/Quadras<br />' });
var format_EmpreendimentoSantaLina_72 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_72 = format_EmpreendimentoSantaLina_72.readFeatures(json_EmpreendimentoSantaLina_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_72.addFeatures(features_EmpreendimentoSantaLina_72);
var lyr_EmpreendimentoSantaLina_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_72, 
                style: style_EmpreendimentoSantaLina_72,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSantaLina_72.png" /> Empreendimento Santa Lina'
            });
var format_EmpreendimentoResidencialPousoAlegreII_73 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegreII_73 = format_EmpreendimentoResidencialPousoAlegreII_73.readFeatures(json_EmpreendimentoResidencialPousoAlegreII_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegreII_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegreII_73.addFeatures(features_EmpreendimentoResidencialPousoAlegreII_73);
var lyr_EmpreendimentoResidencialPousoAlegreII_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegreII_73, 
                style: style_EmpreendimentoResidencialPousoAlegreII_73,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre II',
                interactive: true,
    title: 'Empreendimento Residencial Pouso Alegre II<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_73_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_73_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_73_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_73_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_73_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_73_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_73_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_73_7.png" /> SERVIDAO<br />' });
var format_EmpreendimentoResidencialPousoAlegreII_74 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegreII_74 = format_EmpreendimentoResidencialPousoAlegreII_74.readFeatures(json_EmpreendimentoResidencialPousoAlegreII_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegreII_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegreII_74.addFeatures(features_EmpreendimentoResidencialPousoAlegreII_74);
var lyr_EmpreendimentoResidencialPousoAlegreII_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegreII_74, 
                style: style_EmpreendimentoResidencialPousoAlegreII_74,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_74.png" /> Empreendimento Residencial Pouso Alegre II'
            });
var format_EmpreendimentoResidencialPousoAlegre_75 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_75 = format_EmpreendimentoResidencialPousoAlegre_75.readFeatures(json_EmpreendimentoResidencialPousoAlegre_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_75.addFeatures(features_EmpreendimentoResidencialPousoAlegre_75);
var lyr_EmpreendimentoResidencialPousoAlegre_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_75, 
                style: style_EmpreendimentoResidencialPousoAlegre_75,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
    title: 'Empreendimento Residencial Pouso Alegre<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_75_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_75_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_75_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_75_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_75_4.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_75_5.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_75_6.png" /> Viela<br />' });
var format_EmpreendimentoResidencialPousoAlegre_76 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_76 = format_EmpreendimentoResidencialPousoAlegre_76.readFeatures(json_EmpreendimentoResidencialPousoAlegre_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_76.addFeatures(features_EmpreendimentoResidencialPousoAlegre_76);
var lyr_EmpreendimentoResidencialPousoAlegre_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_76, 
                style: style_EmpreendimentoResidencialPousoAlegre_76,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialPousoAlegre_76.png" /> Empreendimento Residencial Pouso Alegre'
            });
var format_EmpreendimentoResidencialAltodaFazenda_77 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_77 = format_EmpreendimentoResidencialAltodaFazenda_77.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_77.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_77);
var lyr_EmpreendimentoResidencialAltodaFazenda_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_77, 
                style: style_EmpreendimentoResidencialAltodaFazenda_77,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
    title: 'Empreendimento Residencial Alto da Fazenda <br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_77_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_77_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_77_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_77_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_77_4.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialAltodaFazenda_78 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_78 = format_EmpreendimentoResidencialAltodaFazenda_78.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_78.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_78);
var lyr_EmpreendimentoResidencialAltodaFazenda_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_78, 
                style: style_EmpreendimentoResidencialAltodaFazenda_78,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_78.png" /> Empreendimento Residencial Alto da Fazenda '
            });
var format_EmpreendimentoResidencialMarioTasso_79 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_79 = format_EmpreendimentoResidencialMarioTasso_79.readFeatures(json_EmpreendimentoResidencialMarioTasso_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_79.addFeatures(features_EmpreendimentoResidencialMarioTasso_79);
var lyr_EmpreendimentoResidencialMarioTasso_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_79, 
                style: style_EmpreendimentoResidencialMarioTasso_79,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
    title: 'Empreendimento Residencial Mario Tasso<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_79_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_79_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_79_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_79_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_79_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialMarioTasso_80 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_80 = format_EmpreendimentoResidencialMarioTasso_80.readFeatures(json_EmpreendimentoResidencialMarioTasso_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_80.addFeatures(features_EmpreendimentoResidencialMarioTasso_80);
var lyr_EmpreendimentoResidencialMarioTasso_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_80, 
                style: style_EmpreendimentoResidencialMarioTasso_80,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarioTasso_80.png" /> Empreendimento Residencial Mario Tasso'
            });
var format_EmpreendimentoResidenciaisVivenna_81 = new ol.format.GeoJSON();
var features_EmpreendimentoResidenciaisVivenna_81 = format_EmpreendimentoResidenciaisVivenna_81.readFeatures(json_EmpreendimentoResidenciaisVivenna_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidenciaisVivenna_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidenciaisVivenna_81.addFeatures(features_EmpreendimentoResidenciaisVivenna_81);
var lyr_EmpreendimentoResidenciaisVivenna_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidenciaisVivenna_81, 
                style: style_EmpreendimentoResidenciaisVivenna_81,
                popuplayertitle: 'Empreendimento Residenciais Vivenna',
                interactive: true,
    title: 'Empreendimento Residenciais Vivenna<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_81_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_81_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_81_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_81_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_81_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_81_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_81_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_81_7.png" /> VIELA<br />' });
var format_EmpreendimentoResidenciaisVivenna_82 = new ol.format.GeoJSON();
var features_EmpreendimentoResidenciaisVivenna_82 = format_EmpreendimentoResidenciaisVivenna_82.readFeatures(json_EmpreendimentoResidenciaisVivenna_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidenciaisVivenna_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidenciaisVivenna_82.addFeatures(features_EmpreendimentoResidenciaisVivenna_82);
var lyr_EmpreendimentoResidenciaisVivenna_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidenciaisVivenna_82, 
                style: style_EmpreendimentoResidenciaisVivenna_82,
                popuplayertitle: 'Empreendimento Residenciais Vivenna',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidenciaisVivenna_82.png" /> Empreendimento Residenciais Vivenna'
            });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_83 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_83 = format_EmpreendimentoAbuDhabiParadiseResortResidence_83.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_83.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_83);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_83, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_83,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Empreendimento Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_83_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_83_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_83_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_83_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_83_4.png" /> Área Non Edificandi<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_83_5.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_83_6.png" /> Passeio<br />' });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_84 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_84 = format_EmpreendimentoAbuDhabiParadiseResortResidence_84.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_84.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_84);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_84, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_84,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_84.png" /> Empreendimento Abu Dhabi Paradise Resort Residence'
            });
var format_EmprendimentoElias_85 = new ol.format.GeoJSON();
var features_EmprendimentoElias_85 = format_EmprendimentoElias_85.readFeatures(json_EmprendimentoElias_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_85.addFeatures(features_EmprendimentoElias_85);
var lyr_EmprendimentoElias_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_85, 
                style: style_EmprendimentoElias_85,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
    title: 'Emprendimento Elias<br />\
    <img src="styles/legend/EmprendimentoElias_85_0.png" /> Ruas<br />\
    <img src="styles/legend/EmprendimentoElias_85_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmprendimentoElias_85_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmprendimentoElias_85_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmprendimentoElias_85_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmprendimentoElias_85_5.png" /> Passeio<br />\
    <img src="styles/legend/EmprendimentoElias_85_6.png" /> Lotes mistos<br />' });
var format_EmprendimentoElias_86 = new ol.format.GeoJSON();
var features_EmprendimentoElias_86 = format_EmprendimentoElias_86.readFeatures(json_EmprendimentoElias_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_86.addFeatures(features_EmprendimentoElias_86);
var lyr_EmprendimentoElias_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_86, 
                style: style_EmprendimentoElias_86,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
                title: '<img src="styles/legend/EmprendimentoElias_86.png" /> Emprendimento Elias'
            });
var format_EmpreendimentoResidencialSoCarlosI_87 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_87 = format_EmpreendimentoResidencialSoCarlosI_87.readFeatures(json_EmpreendimentoResidencialSoCarlosI_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_87.addFeatures(features_EmpreendimentoResidencialSoCarlosI_87);
var lyr_EmpreendimentoResidencialSoCarlosI_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_87, 
                style: style_EmpreendimentoResidencialSoCarlosI_87,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
    title: 'Empreendimento Residencial São Carlos I<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_87_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_87_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_87_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_87_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_87_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSoCarlosI_88 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_88 = format_EmpreendimentoResidencialSoCarlosI_88.readFeatures(json_EmpreendimentoResidencialSoCarlosI_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_88.addFeatures(features_EmpreendimentoResidencialSoCarlosI_88);
var lyr_EmpreendimentoResidencialSoCarlosI_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_88, 
                style: style_EmpreendimentoResidencialSoCarlosI_88,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSoCarlosI_88.png" /> Empreendimento Residencial São Carlos I'
            });
var format_EmpreendimentoMonti_89 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_89 = format_EmpreendimentoMonti_89.readFeatures(json_EmpreendimentoMonti_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_89.addFeatures(features_EmpreendimentoMonti_89);
var lyr_EmpreendimentoMonti_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_89, 
                style: style_EmpreendimentoMonti_89,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
    title: 'Empreendimento Montié<br />\
    <img src="styles/legend/EmpreendimentoMonti_89_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMonti_89_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMonti_89_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMonti_89_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMonti_89_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMonti_89_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoMonti_90 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_90 = format_EmpreendimentoMonti_90.readFeatures(json_EmpreendimentoMonti_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_90.addFeatures(features_EmpreendimentoMonti_90);
var lyr_EmpreendimentoMonti_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_90, 
                style: style_EmpreendimentoMonti_90,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMonti_90.png" /> Empreendimento Montié'
            });
var format_EmpreendimentoResidencialMoradadoBosque_91 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_91 = format_EmpreendimentoResidencialMoradadoBosque_91.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_91.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_91);
var lyr_EmpreendimentoResidencialMoradadoBosque_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_91, 
                style: style_EmpreendimentoResidencialMoradadoBosque_91,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
    title: 'Empreendimento Residencial Morada do Bosque<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_91_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_91_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_91_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_91_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_91_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_91_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_91_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialMoradadoBosque_92 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_92 = format_EmpreendimentoResidencialMoradadoBosque_92.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_92.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_92);
var lyr_EmpreendimentoResidencialMoradadoBosque_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_92, 
                style: style_EmpreendimentoResidencialMoradadoBosque_92,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_92.png" /> Empreendimento Residencial Morada do Bosque'
            });
var format_EmpreendimentoVittaAlvorada_93 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_93 = format_EmpreendimentoVittaAlvorada_93.readFeatures(json_EmpreendimentoVittaAlvorada_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_93.addFeatures(features_EmpreendimentoVittaAlvorada_93);
var lyr_EmpreendimentoVittaAlvorada_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_93, 
                style: style_EmpreendimentoVittaAlvorada_93,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
    title: 'Empreendimento Vitta Alvorada<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_93_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_93_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_93_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_93_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_93_4.png" /> A-PROP-LINE<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_93_5.png" /> Passeio<br />' });
var format_EmpreendimentoVittaAlvorada_94 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_94 = format_EmpreendimentoVittaAlvorada_94.readFeatures(json_EmpreendimentoVittaAlvorada_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_94.addFeatures(features_EmpreendimentoVittaAlvorada_94);
var lyr_EmpreendimentoVittaAlvorada_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_94, 
                style: style_EmpreendimentoVittaAlvorada_94,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaAlvorada_94.png" /> Empreendimento Vitta Alvorada'
            });
var format_EmpreendimentoResidencialMarthaHelena_95 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_95 = format_EmpreendimentoResidencialMarthaHelena_95.readFeatures(json_EmpreendimentoResidencialMarthaHelena_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_95.addFeatures(features_EmpreendimentoResidencialMarthaHelena_95);
var lyr_EmpreendimentoResidencialMarthaHelena_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_95, 
                style: style_EmpreendimentoResidencialMarthaHelena_95,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
    title: 'Empreendimento Residencial Martha Helena<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_95_0.png" /> 0<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_95_1.png" /> Zona de Uso Residencial<br />' });
var format_EmpreendimentoResidencialMarthaHelena_96 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_96 = format_EmpreendimentoResidencialMarthaHelena_96.readFeatures(json_EmpreendimentoResidencialMarthaHelena_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_96.addFeatures(features_EmpreendimentoResidencialMarthaHelena_96);
var lyr_EmpreendimentoResidencialMarthaHelena_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_96, 
                style: style_EmpreendimentoResidencialMarthaHelena_96,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarthaHelena_96.png" /> Empreendimento Residencial Martha Helena'
            });
var format_EmpreendimentoResidencialYasminTorres_97 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_97 = format_EmpreendimentoResidencialYasminTorres_97.readFeatures(json_EmpreendimentoResidencialYasminTorres_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_97.addFeatures(features_EmpreendimentoResidencialYasminTorres_97);
var lyr_EmpreendimentoResidencialYasminTorres_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_97, 
                style: style_EmpreendimentoResidencialYasminTorres_97,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_97.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoResidencialYasminTorres_98 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_98 = format_EmpreendimentoResidencialYasminTorres_98.readFeatures(json_EmpreendimentoResidencialYasminTorres_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_98.addFeatures(features_EmpreendimentoResidencialYasminTorres_98);
var lyr_EmpreendimentoResidencialYasminTorres_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_98, 
                style: style_EmpreendimentoResidencialYasminTorres_98,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_98.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoPalmeiraReal_99 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_99 = format_EmpreendimentoPalmeiraReal_99.readFeatures(json_EmpreendimentoPalmeiraReal_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_99.addFeatures(features_EmpreendimentoPalmeiraReal_99);
var lyr_EmpreendimentoPalmeiraReal_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_99, 
                style: style_EmpreendimentoPalmeiraReal_99,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
    title: 'Empreendimento Palmeira Real<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_99_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_99_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_99_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_99_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_99_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_99_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoPalmeiraReal_100 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_100 = format_EmpreendimentoPalmeiraReal_100.readFeatures(json_EmpreendimentoPalmeiraReal_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_100.addFeatures(features_EmpreendimentoPalmeiraReal_100);
var lyr_EmpreendimentoPalmeiraReal_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_100, 
                style: style_EmpreendimentoPalmeiraReal_100,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoPalmeiraReal_100.png" /> Empreendimento Palmeira Real'
            });
var format_EmpreendimentoEssence_101 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_101 = format_EmpreendimentoEssence_101.readFeatures(json_EmpreendimentoEssence_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_101.addFeatures(features_EmpreendimentoEssence_101);
var lyr_EmpreendimentoEssence_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_101, 
                style: style_EmpreendimentoEssence_101,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_101.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoEssence_102 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_102 = format_EmpreendimentoEssence_102.readFeatures(json_EmpreendimentoEssence_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_102.addFeatures(features_EmpreendimentoEssence_102);
var lyr_EmpreendimentoEssence_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_102, 
                style: style_EmpreendimentoEssence_102,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_102.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoVersalhes_103 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_103 = format_EmpreendimentoVersalhes_103.readFeatures(json_EmpreendimentoVersalhes_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_103.addFeatures(features_EmpreendimentoVersalhes_103);
var lyr_EmpreendimentoVersalhes_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_103, 
                style: style_EmpreendimentoVersalhes_103,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
    title: 'Empreendimento Versalhes<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_103_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_103_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_103_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_103_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_103_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_103_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVersalhes_104 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_104 = format_EmpreendimentoVersalhes_104.readFeatures(json_EmpreendimentoVersalhes_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_104.addFeatures(features_EmpreendimentoVersalhes_104);
var lyr_EmpreendimentoVersalhes_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_104, 
                style: style_EmpreendimentoVersalhes_104,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVersalhes_104.png" /> Empreendimento Versalhes'
            });
var format_EmpreendimentoSonetto_105 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_105 = format_EmpreendimentoSonetto_105.readFeatures(json_EmpreendimentoSonetto_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_105.addFeatures(features_EmpreendimentoSonetto_105);
var lyr_EmpreendimentoSonetto_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_105, 
                style: style_EmpreendimentoSonetto_105,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_105.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoSonetto_106 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_106 = format_EmpreendimentoSonetto_106.readFeatures(json_EmpreendimentoSonetto_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_106.addFeatures(features_EmpreendimentoSonetto_106);
var lyr_EmpreendimentoSonetto_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_106, 
                style: style_EmpreendimentoSonetto_106,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_106.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoResidencialSantaIns_107 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_107 = format_EmpreendimentoResidencialSantaIns_107.readFeatures(json_EmpreendimentoResidencialSantaIns_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_107.addFeatures(features_EmpreendimentoResidencialSantaIns_107);
var lyr_EmpreendimentoResidencialSantaIns_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_107, 
                style: style_EmpreendimentoResidencialSantaIns_107,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
    title: 'Empreendimento Residencial Santa Inês<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_107_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_107_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_107_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_107_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_107_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_107_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaIns_108 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_108 = format_EmpreendimentoResidencialSantaIns_108.readFeatures(json_EmpreendimentoResidencialSantaIns_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_108.addFeatures(features_EmpreendimentoResidencialSantaIns_108);
var lyr_EmpreendimentoResidencialSantaIns_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_108, 
                style: style_EmpreendimentoResidencialSantaIns_108,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaIns_108.png" /> Empreendimento Residencial Santa Inês'
            });
var format_EmpreendimentoEdifcioSolNascente_109 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_109 = format_EmpreendimentoEdifcioSolNascente_109.readFeatures(json_EmpreendimentoEdifcioSolNascente_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_109.addFeatures(features_EmpreendimentoEdifcioSolNascente_109);
var lyr_EmpreendimentoEdifcioSolNascente_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_109, 
                style: style_EmpreendimentoEdifcioSolNascente_109,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_109.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoEdifcioSolNascente_110 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_110 = format_EmpreendimentoEdifcioSolNascente_110.readFeatures(json_EmpreendimentoEdifcioSolNascente_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_110.addFeatures(features_EmpreendimentoEdifcioSolNascente_110);
var lyr_EmpreendimentoEdifcioSolNascente_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_110, 
                style: style_EmpreendimentoEdifcioSolNascente_110,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_110.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoResidencialQuintadosOitis_111 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_111 = format_EmpreendimentoResidencialQuintadosOitis_111.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_111.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_111);
var lyr_EmpreendimentoResidencialQuintadosOitis_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_111, 
                style: style_EmpreendimentoResidencialQuintadosOitis_111,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Empreendimento Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_111_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_111_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_111_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_111_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_111_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_111_5.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialQuintadosOitis_112 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_112 = format_EmpreendimentoResidencialQuintadosOitis_112.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_112.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_112);
var lyr_EmpreendimentoResidencialQuintadosOitis_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_112, 
                style: style_EmpreendimentoResidencialQuintadosOitis_112,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_112.png" /> Empreendimento Residencial Quinta dos Oitis'
            });
var format_EmpreendimentoResidencialQuintadoSol_113 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_113 = format_EmpreendimentoResidencialQuintadoSol_113.readFeatures(json_EmpreendimentoResidencialQuintadoSol_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_113.addFeatures(features_EmpreendimentoResidencialQuintadoSol_113);
var lyr_EmpreendimentoResidencialQuintadoSol_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_113, 
                style: style_EmpreendimentoResidencialQuintadoSol_113,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
    title: 'Empreendimento Residencial Quinta do Sol<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_113_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_113_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_113_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_113_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_113_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_113_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_113_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialQuintadoSol_114 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_114 = format_EmpreendimentoResidencialQuintadoSol_114.readFeatures(json_EmpreendimentoResidencialQuintadoSol_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_114.addFeatures(features_EmpreendimentoResidencialQuintadoSol_114);
var lyr_EmpreendimentoResidencialQuintadoSol_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_114, 
                style: style_EmpreendimentoResidencialQuintadoSol_114,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadoSol_114.png" /> Empreendimento Residencial Quinta do Sol'
            });
var format_EmpreendimentoParquePalmeiraImperial_115 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_115 = format_EmpreendimentoParquePalmeiraImperial_115.readFeatures(json_EmpreendimentoParquePalmeiraImperial_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_115.addFeatures(features_EmpreendimentoParquePalmeiraImperial_115);
var lyr_EmpreendimentoParquePalmeiraImperial_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_115, 
                style: style_EmpreendimentoParquePalmeiraImperial_115,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
    title: 'Empreendimento Parque Palmeira Imperial<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_115_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_115_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_115_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_115_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_115_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_115_5.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_115_6.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_115_7.png" /> RUAS<br />' });
var format_EmpreendimentoParquePalmeiraImperial_116 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_116 = format_EmpreendimentoParquePalmeiraImperial_116.readFeatures(json_EmpreendimentoParquePalmeiraImperial_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_116.addFeatures(features_EmpreendimentoParquePalmeiraImperial_116);
var lyr_EmpreendimentoParquePalmeiraImperial_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_116, 
                style: style_EmpreendimentoParquePalmeiraImperial_116,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquePalmeiraImperial_116.png" /> Empreendimento Parque Palmeira Imperial'
            });
var format_EmpreendimentoBordadaMata_117 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_117 = format_EmpreendimentoBordadaMata_117.readFeatures(json_EmpreendimentoBordadaMata_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_117.addFeatures(features_EmpreendimentoBordadaMata_117);
var lyr_EmpreendimentoBordadaMata_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_117, 
                style: style_EmpreendimentoBordadaMata_117,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
    title: 'Empreendimento Borda da Mata<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_117_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_117_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_117_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_117_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_117_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_117_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_117_6.png" /> Represa<br />' });
var format_EmpreendimentoBordadaMata_118 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_118 = format_EmpreendimentoBordadaMata_118.readFeatures(json_EmpreendimentoBordadaMata_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_118.addFeatures(features_EmpreendimentoBordadaMata_118);
var lyr_EmpreendimentoBordadaMata_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_118, 
                style: style_EmpreendimentoBordadaMata_118,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoBordadaMata_118.png" /> Empreendimento Borda da Mata'
            });
var format_EmpreendimentoEdifcioResidencialHope_119 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_119 = format_EmpreendimentoEdifcioResidencialHope_119.readFeatures(json_EmpreendimentoEdifcioResidencialHope_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_119.addFeatures(features_EmpreendimentoEdifcioResidencialHope_119);
var lyr_EmpreendimentoEdifcioResidencialHope_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_119, 
                style: style_EmpreendimentoEdifcioResidencialHope_119,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_119.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoEdifcioResidencialHope_120 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_120 = format_EmpreendimentoEdifcioResidencialHope_120.readFeatures(json_EmpreendimentoEdifcioResidencialHope_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_120.addFeatures(features_EmpreendimentoEdifcioResidencialHope_120);
var lyr_EmpreendimentoEdifcioResidencialHope_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_120, 
                style: style_EmpreendimentoEdifcioResidencialHope_120,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_120.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoHorizResidence_121 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_121 = format_EmpreendimentoHorizResidence_121.readFeatures(json_EmpreendimentoHorizResidence_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_121.addFeatures(features_EmpreendimentoHorizResidence_121);
var lyr_EmpreendimentoHorizResidence_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_121, 
                style: style_EmpreendimentoHorizResidence_121,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_121.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoHorizResidence_122 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_122 = format_EmpreendimentoHorizResidence_122.readFeatures(json_EmpreendimentoHorizResidence_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_122.addFeatures(features_EmpreendimentoHorizResidence_122);
var lyr_EmpreendimentoHorizResidence_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_122, 
                style: style_EmpreendimentoHorizResidence_122,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_122.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoJardimFlora_123 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_123 = format_EmpreendimentoJardimFlora_123.readFeatures(json_EmpreendimentoJardimFlora_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_123.addFeatures(features_EmpreendimentoJardimFlora_123);
var lyr_EmpreendimentoJardimFlora_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_123, 
                style: style_EmpreendimentoJardimFlora_123,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
    title: 'Empreendimento Jardim Flora<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_123_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_123_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_123_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_123_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_123_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_123_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_123_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_123_7.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_123_8.png" /> RUAS<br />' });
var format_EmpreendimentoJardimFlora_124 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_124 = format_EmpreendimentoJardimFlora_124.readFeatures(json_EmpreendimentoJardimFlora_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_124.addFeatures(features_EmpreendimentoJardimFlora_124);
var lyr_EmpreendimentoJardimFlora_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_124, 
                style: style_EmpreendimentoJardimFlora_124,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimFlora_124.png" /> Empreendimento Jardim Flora'
            });
var format_EmpreendimentoJardimHorizonte_125 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_125 = format_EmpreendimentoJardimHorizonte_125.readFeatures(json_EmpreendimentoJardimHorizonte_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_125.addFeatures(features_EmpreendimentoJardimHorizonte_125);
var lyr_EmpreendimentoJardimHorizonte_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_125, 
                style: style_EmpreendimentoJardimHorizonte_125,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
    title: 'Empreendimento Jardim Horizonte<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_125_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_125_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_125_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_125_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_125_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_125_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_125_6.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoJardimHorizonte_126 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_126 = format_EmpreendimentoJardimHorizonte_126.readFeatures(json_EmpreendimentoJardimHorizonte_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_126.addFeatures(features_EmpreendimentoJardimHorizonte_126);
var lyr_EmpreendimentoJardimHorizonte_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_126, 
                style: style_EmpreendimentoJardimHorizonte_126,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimHorizonte_126.png" /> Empreendimento Jardim Horizonte'
            });
var format_EmpreendimentoJardimMariaLuiza_127 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_127 = format_EmpreendimentoJardimMariaLuiza_127.readFeatures(json_EmpreendimentoJardimMariaLuiza_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_127.addFeatures(features_EmpreendimentoJardimMariaLuiza_127);
var lyr_EmpreendimentoJardimMariaLuiza_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_127, 
                style: style_EmpreendimentoJardimMariaLuiza_127,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
    title: 'Empreendimento Jardim Maria Luiza<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_127_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_127_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_127_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_127_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_127_4.png" /> Passeio<br />' });
var format_EmpreendimentoJardimMariaLuiza_128 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_128 = format_EmpreendimentoJardimMariaLuiza_128.readFeatures(json_EmpreendimentoJardimMariaLuiza_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_128.addFeatures(features_EmpreendimentoJardimMariaLuiza_128);
var lyr_EmpreendimentoJardimMariaLuiza_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_128, 
                style: style_EmpreendimentoJardimMariaLuiza_128,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimMariaLuiza_128.png" /> Empreendimento Jardim Maria Luiza'
            });
var format_EmpreendimentoMontBlancResidence_129 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_129 = format_EmpreendimentoMontBlancResidence_129.readFeatures(json_EmpreendimentoMontBlancResidence_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_129.addFeatures(features_EmpreendimentoMontBlancResidence_129);
var lyr_EmpreendimentoMontBlancResidence_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_129, 
                style: style_EmpreendimentoMontBlancResidence_129,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_129.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMontBlancResidence_130 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_130 = format_EmpreendimentoMontBlancResidence_130.readFeatures(json_EmpreendimentoMontBlancResidence_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_130.addFeatures(features_EmpreendimentoMontBlancResidence_130);
var lyr_EmpreendimentoMontBlancResidence_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_130, 
                style: style_EmpreendimentoMontBlancResidence_130,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_130.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMoradadoVerdeII_131 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_131 = format_EmpreendimentoMoradadoVerdeII_131.readFeatures(json_EmpreendimentoMoradadoVerdeII_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_131.addFeatures(features_EmpreendimentoMoradadoVerdeII_131);
var lyr_EmpreendimentoMoradadoVerdeII_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_131, 
                style: style_EmpreendimentoMoradadoVerdeII_131,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
    title: 'Empreendimento Morada do Verde II<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_131_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_131_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_131_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_131_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_131_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_131_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_131_6.png" /> Lotes Mistos<br />' });
var format_EmpreendimentoMoradadoVerdeII_132 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_132 = format_EmpreendimentoMoradadoVerdeII_132.readFeatures(json_EmpreendimentoMoradadoVerdeII_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_132.addFeatures(features_EmpreendimentoMoradadoVerdeII_132);
var lyr_EmpreendimentoMoradadoVerdeII_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_132, 
                style: style_EmpreendimentoMoradadoVerdeII_132,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadoVerdeII_132.png" /> Empreendimento Morada do Verde II'
            });
var format_EmpreendimentoResicencialNairRetuci_133 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_133 = format_EmpreendimentoResicencialNairRetuci_133.readFeatures(json_EmpreendimentoResicencialNairRetuci_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_133.addFeatures(features_EmpreendimentoResicencialNairRetuci_133);
var lyr_EmpreendimentoResicencialNairRetuci_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_133, 
                style: style_EmpreendimentoResicencialNairRetuci_133,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
    title: 'Empreendimento Resicencial Nair Retuci<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_133_0.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_133_1.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_133_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_133_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_133_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_133_5.png" /> Passeio<br />' });
var format_EmpreendimentoResicencialNairRetuci_134 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_134 = format_EmpreendimentoResicencialNairRetuci_134.readFeatures(json_EmpreendimentoResicencialNairRetuci_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_134.addFeatures(features_EmpreendimentoResicencialNairRetuci_134);
var lyr_EmpreendimentoResicencialNairRetuci_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_134, 
                style: style_EmpreendimentoResicencialNairRetuci_134,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResicencialNairRetuci_134.png" /> Empreendimento Resicencial Nair Retuci'
            });
var format_EmpreendimentoParagonII_135 = new ol.format.GeoJSON();
var features_EmpreendimentoParagonII_135 = format_EmpreendimentoParagonII_135.readFeatures(json_EmpreendimentoParagonII_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagonII_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagonII_135.addFeatures(features_EmpreendimentoParagonII_135);
var lyr_EmpreendimentoParagonII_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagonII_135, 
                style: style_EmpreendimentoParagonII_135,
                popuplayertitle: 'Empreendimento Paragon II',
                interactive: true,
    title: 'Empreendimento Paragon II<br />\
    <img src="styles/legend/EmpreendimentoParagonII_135_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParagonII_135_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoParagonII_135_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParagonII_135_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParagonII_135_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoParagonII_135_5.png" /> RUAS<br />' });
var format_EmpreendimentoParagonII_136 = new ol.format.GeoJSON();
var features_EmpreendimentoParagonII_136 = format_EmpreendimentoParagonII_136.readFeatures(json_EmpreendimentoParagonII_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagonII_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagonII_136.addFeatures(features_EmpreendimentoParagonII_136);
var lyr_EmpreendimentoParagonII_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagonII_136, 
                style: style_EmpreendimentoParagonII_136,
                popuplayertitle: 'Empreendimento Paragon II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParagonII_136.png" /> Empreendimento Paragon II'
            });
var format_EmpreendimentoParagon_137 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_137 = format_EmpreendimentoParagon_137.readFeatures(json_EmpreendimentoParagon_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_137.addFeatures(features_EmpreendimentoParagon_137);
var lyr_EmpreendimentoParagon_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_137, 
                style: style_EmpreendimentoParagon_137,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
    title: 'Empreendimento Paragon<br />\
    <img src="styles/legend/EmpreendimentoParagon_137_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParagon_137_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParagon_137_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoParagon_137_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParagon_137_4.png" /> Viela<br />\
    <img src="styles/legend/EmpreendimentoParagon_137_5.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoParagon_137_6.png" /> Passeio<br />' });
var format_EmpreendimentoParagon_138 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_138 = format_EmpreendimentoParagon_138.readFeatures(json_EmpreendimentoParagon_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_138.addFeatures(features_EmpreendimentoParagon_138);
var lyr_EmpreendimentoParagon_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_138, 
                style: style_EmpreendimentoParagon_138,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParagon_138.png" /> Empreendimento Paragon'
            });
var format_EmpreendimentoParqueVillaLobos_139 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_139 = format_EmpreendimentoParqueVillaLobos_139.readFeatures(json_EmpreendimentoParqueVillaLobos_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_139.addFeatures(features_EmpreendimentoParqueVillaLobos_139);
var lyr_EmpreendimentoParqueVillaLobos_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_139, 
                style: style_EmpreendimentoParqueVillaLobos_139,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
    title: 'Empreendimento Parque Villa-Lobos<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_139_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_139_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_139_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_139_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_139_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_139_5.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoParqueVillaLobos_140 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_140 = format_EmpreendimentoParqueVillaLobos_140.readFeatures(json_EmpreendimentoParqueVillaLobos_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_140.addFeatures(features_EmpreendimentoParqueVillaLobos_140);
var lyr_EmpreendimentoParqueVillaLobos_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_140, 
                style: style_EmpreendimentoParqueVillaLobos_140,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueVillaLobos_140.png" /> Empreendimento Parque Villa-Lobos'
            });
var format_EmpreendimentoDaVinci_141 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_141 = format_EmpreendimentoDaVinci_141.readFeatures(json_EmpreendimentoDaVinci_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_141.addFeatures(features_EmpreendimentoDaVinci_141);
var lyr_EmpreendimentoDaVinci_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_141, 
                style: style_EmpreendimentoDaVinci_141,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_141.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoDaVinci_142 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_142 = format_EmpreendimentoDaVinci_142.readFeatures(json_EmpreendimentoDaVinci_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_142.addFeatures(features_EmpreendimentoDaVinci_142);
var lyr_EmpreendimentoDaVinci_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_142, 
                style: style_EmpreendimentoDaVinci_142,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_142.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoResidencialDomingosJardini_143 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_143 = format_EmpreendimentoResidencialDomingosJardini_143.readFeatures(json_EmpreendimentoResidencialDomingosJardini_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_143.addFeatures(features_EmpreendimentoResidencialDomingosJardini_143);
var lyr_EmpreendimentoResidencialDomingosJardini_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_143, 
                style: style_EmpreendimentoResidencialDomingosJardini_143,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
    title: 'Empreendimento Residencial Domingos Jardini<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_143_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_143_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_143_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_143_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_143_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_143_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialDomingosJardini_144 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_144 = format_EmpreendimentoResidencialDomingosJardini_144.readFeatures(json_EmpreendimentoResidencialDomingosJardini_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_144.addFeatures(features_EmpreendimentoResidencialDomingosJardini_144);
var lyr_EmpreendimentoResidencialDomingosJardini_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_144, 
                style: style_EmpreendimentoResidencialDomingosJardini_144,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialDomingosJardini_144.png" /> Empreendimento Residencial Domingos Jardini'
            });
var format_EmpreendimentoResidencialSantaF_145 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_145 = format_EmpreendimentoResidencialSantaF_145.readFeatures(json_EmpreendimentoResidencialSantaF_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_145.addFeatures(features_EmpreendimentoResidencialSantaF_145);
var lyr_EmpreendimentoResidencialSantaF_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_145, 
                style: style_EmpreendimentoResidencialSantaF_145,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
    title: 'Empreendimento Residencial Santa Fé<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_145_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_145_1.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_145_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_145_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_145_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_145_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaF_146 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_146 = format_EmpreendimentoResidencialSantaF_146.readFeatures(json_EmpreendimentoResidencialSantaF_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_146.addFeatures(features_EmpreendimentoResidencialSantaF_146);
var lyr_EmpreendimentoResidencialSantaF_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_146, 
                style: style_EmpreendimentoResidencialSantaF_146,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaF_146.png" /> Empreendimento Residencial Santa Fé'
            });
var format_EmpreendimentoEdifcioRuadoSol_147 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_147 = format_EmpreendimentoEdifcioRuadoSol_147.readFeatures(json_EmpreendimentoEdifcioRuadoSol_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_147.addFeatures(features_EmpreendimentoEdifcioRuadoSol_147);
var lyr_EmpreendimentoEdifcioRuadoSol_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_147, 
                style: style_EmpreendimentoEdifcioRuadoSol_147,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_147.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoEdifcioRuadoSol_148 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_148 = format_EmpreendimentoEdifcioRuadoSol_148.readFeatures(json_EmpreendimentoEdifcioRuadoSol_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_148.addFeatures(features_EmpreendimentoEdifcioRuadoSol_148);
var lyr_EmpreendimentoEdifcioRuadoSol_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_148, 
                style: style_EmpreendimentoEdifcioRuadoSol_148,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_148.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoTorontoResidence_149 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_149 = format_EmpreendimentoTorontoResidence_149.readFeatures(json_EmpreendimentoTorontoResidence_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_149.addFeatures(features_EmpreendimentoTorontoResidence_149);
var lyr_EmpreendimentoTorontoResidence_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_149, 
                style: style_EmpreendimentoTorontoResidence_149,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
    title: 'Empreendimento Toronto Residence<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_149_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_149_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_149_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_149_3.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_149_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_149_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoTorontoResidence_150 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_150 = format_EmpreendimentoTorontoResidence_150.readFeatures(json_EmpreendimentoTorontoResidence_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_150.addFeatures(features_EmpreendimentoTorontoResidence_150);
var lyr_EmpreendimentoTorontoResidence_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_150, 
                style: style_EmpreendimentoTorontoResidence_150,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoTorontoResidence_150.png" /> Empreendimento Toronto Residence'
            });
var format_EmpreendimentoCidadeJardim_151 = new ol.format.GeoJSON();
var features_EmpreendimentoCidadeJardim_151 = format_EmpreendimentoCidadeJardim_151.readFeatures(json_EmpreendimentoCidadeJardim_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCidadeJardim_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCidadeJardim_151.addFeatures(features_EmpreendimentoCidadeJardim_151);
var lyr_EmpreendimentoCidadeJardim_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCidadeJardim_151, 
                style: style_EmpreendimentoCidadeJardim_151,
                popuplayertitle: 'Empreendimento Cidade Jardim',
                interactive: true,
    title: 'Empreendimento Cidade Jardim<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_151_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_151_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_151_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_151_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_151_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_151_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_151_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_151_7.png" /> SERVIDAO<br />' });
var format_EmpreendimentoCidadeJardim_152 = new ol.format.GeoJSON();
var features_EmpreendimentoCidadeJardim_152 = format_EmpreendimentoCidadeJardim_152.readFeatures(json_EmpreendimentoCidadeJardim_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCidadeJardim_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCidadeJardim_152.addFeatures(features_EmpreendimentoCidadeJardim_152);
var lyr_EmpreendimentoCidadeJardim_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCidadeJardim_152, 
                style: style_EmpreendimentoCidadeJardim_152,
                popuplayertitle: 'Empreendimento Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoCidadeJardim_152.png" /> Empreendimento Cidade Jardim'
            });
var format_EmpreendimentoColorado_153 = new ol.format.GeoJSON();
var features_EmpreendimentoColorado_153 = format_EmpreendimentoColorado_153.readFeatures(json_EmpreendimentoColorado_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoColorado_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoColorado_153.addFeatures(features_EmpreendimentoColorado_153);
var lyr_EmpreendimentoColorado_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoColorado_153, 
                style: style_EmpreendimentoColorado_153,
                popuplayertitle: 'Empreendimento Colorado',
                interactive: true,
    title: 'Empreendimento Colorado<br />\
    <img src="styles/legend/EmpreendimentoColorado_153_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoColorado_153_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoColorado_153_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoColorado_153_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoColorado_153_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoColorado_153_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoColorado_153_6.png" /> RUAS<br />' });
var format_EmpreendimentoColorado_154 = new ol.format.GeoJSON();
var features_EmpreendimentoColorado_154 = format_EmpreendimentoColorado_154.readFeatures(json_EmpreendimentoColorado_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoColorado_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoColorado_154.addFeatures(features_EmpreendimentoColorado_154);
var lyr_EmpreendimentoColorado_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoColorado_154, 
                style: style_EmpreendimentoColorado_154,
                popuplayertitle: 'Empreendimento Colorado',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoColorado_154.png" /> Empreendimento Colorado'
            });
var format_EmpreendimentoFerracini_155 = new ol.format.GeoJSON();
var features_EmpreendimentoFerracini_155 = format_EmpreendimentoFerracini_155.readFeatures(json_EmpreendimentoFerracini_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFerracini_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFerracini_155.addFeatures(features_EmpreendimentoFerracini_155);
var lyr_EmpreendimentoFerracini_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFerracini_155, 
                style: style_EmpreendimentoFerracini_155,
                popuplayertitle: 'Empreendimento Ferracini',
                interactive: true,
    title: 'Empreendimento Ferracini<br />\
    <img src="styles/legend/EmpreendimentoFerracini_155_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoFerracini_155_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoFerracini_155_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoFerracini_155_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoFerracini_155_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoFerracini_155_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoFerracini_155_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoFerracini_155_7.png" /> VIELA<br />' });
var format_EmpreendimentoFerracini_156 = new ol.format.GeoJSON();
var features_EmpreendimentoFerracini_156 = format_EmpreendimentoFerracini_156.readFeatures(json_EmpreendimentoFerracini_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFerracini_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFerracini_156.addFeatures(features_EmpreendimentoFerracini_156);
var lyr_EmpreendimentoFerracini_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFerracini_156, 
                style: style_EmpreendimentoFerracini_156,
                popuplayertitle: 'Empreendimento Ferracini',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoFerracini_156.png" /> Empreendimento Ferracini'
            });
var format_EmpreendimentoResicencialNairRetuciII_157 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuciII_157 = format_EmpreendimentoResicencialNairRetuciII_157.readFeatures(json_EmpreendimentoResicencialNairRetuciII_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuciII_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuciII_157.addFeatures(features_EmpreendimentoResicencialNairRetuciII_157);
var lyr_EmpreendimentoResicencialNairRetuciII_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuciII_157, 
                style: style_EmpreendimentoResicencialNairRetuciII_157,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci II',
                interactive: true,
    title: 'Empreendimento Resicencial Nair Retuci II<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_157_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_157_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_157_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_157_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_157_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_157_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_157_6.png" /> RUAS<br />' });
var format_EmpreendimentoResicencialNairRetuciII_158 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuciII_158 = format_EmpreendimentoResicencialNairRetuciII_158.readFeatures(json_EmpreendimentoResicencialNairRetuciII_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuciII_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuciII_158.addFeatures(features_EmpreendimentoResicencialNairRetuciII_158);
var lyr_EmpreendimentoResicencialNairRetuciII_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuciII_158, 
                style: style_EmpreendimentoResicencialNairRetuciII_158,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResicencialNairRetuciII_158.png" /> Empreendimento Resicencial Nair Retuci II'
            });
var format_EmpreendimentoVillaPucci_159 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaPucci_159 = format_EmpreendimentoVillaPucci_159.readFeatures(json_EmpreendimentoVillaPucci_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaPucci_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaPucci_159.addFeatures(features_EmpreendimentoVillaPucci_159);
var lyr_EmpreendimentoVillaPucci_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaPucci_159, 
                style: style_EmpreendimentoVillaPucci_159,
                popuplayertitle: 'Empreendimento Villa Pucci',
                interactive: true,
    title: 'Empreendimento Villa Pucci<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_159_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_159_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_159_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_159_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_159_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_159_5.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_159_6.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_159_7.png" /> RUAS<br />' });
var format_EmpreendimentoVillaPucci_160 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaPucci_160 = format_EmpreendimentoVillaPucci_160.readFeatures(json_EmpreendimentoVillaPucci_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaPucci_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaPucci_160.addFeatures(features_EmpreendimentoVillaPucci_160);
var lyr_EmpreendimentoVillaPucci_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaPucci_160, 
                style: style_EmpreendimentoVillaPucci_160,
                popuplayertitle: 'Empreendimento Villa Pucci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaPucci_160.png" /> Empreendimento Villa Pucci'
            });
var format_ServidoRamal138kVFranca4Guanabara_161 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_161 = format_ServidoRamal138kVFranca4Guanabara_161.readFeatures(json_ServidoRamal138kVFranca4Guanabara_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_161.addFeatures(features_ServidoRamal138kVFranca4Guanabara_161);
var lyr_ServidoRamal138kVFranca4Guanabara_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_161, 
                style: style_ServidoRamal138kVFranca4Guanabara_161,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_161.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_162 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_162 = format_ServidoRamal138kVFranca4Guanabara_162.readFeatures(json_ServidoRamal138kVFranca4Guanabara_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_162.addFeatures(features_ServidoRamal138kVFranca4Guanabara_162);
var lyr_ServidoRamal138kVFranca4Guanabara_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_162, 
                style: style_ServidoRamal138kVFranca4Guanabara_162,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_162.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_EmpreendimentosAprovado27unid_163 = new ol.format.GeoJSON();
var features_EmpreendimentosAprovado27unid_163 = format_EmpreendimentosAprovado27unid_163.readFeatures(json_EmpreendimentosAprovado27unid_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosAprovado27unid_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosAprovado27unid_163.addFeatures(features_EmpreendimentosAprovado27unid_163);
var lyr_EmpreendimentosAprovado27unid_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosAprovado27unid_163, 
                style: style_EmpreendimentosAprovado27unid_163,
                popuplayertitle: 'Empreendimentos - Aprovado (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosAprovado27unid_163.png" /> Empreendimentos - Aprovado (27 unid.)'
            });
var format_EmpreendimentosDiretriz2unid_164 = new ol.format.GeoJSON();
var features_EmpreendimentosDiretriz2unid_164 = format_EmpreendimentosDiretriz2unid_164.readFeatures(json_EmpreendimentosDiretriz2unid_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDiretriz2unid_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDiretriz2unid_164.addFeatures(features_EmpreendimentosDiretriz2unid_164);
var lyr_EmpreendimentosDiretriz2unid_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDiretriz2unid_164, 
                style: style_EmpreendimentosDiretriz2unid_164,
                popuplayertitle: 'Empreendimentos  - Diretriz (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDiretriz2unid_164.png" /> Empreendimentos  - Diretriz (2 unid.)'
            });
var format_EmpreendimentosDefinitiva6unid_165 = new ol.format.GeoJSON();
var features_EmpreendimentosDefinitiva6unid_165 = format_EmpreendimentosDefinitiva6unid_165.readFeatures(json_EmpreendimentosDefinitiva6unid_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDefinitiva6unid_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDefinitiva6unid_165.addFeatures(features_EmpreendimentosDefinitiva6unid_165);
var lyr_EmpreendimentosDefinitiva6unid_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDefinitiva6unid_165, 
                style: style_EmpreendimentosDefinitiva6unid_165,
                popuplayertitle: 'Empreendimentos - Definitiva (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDefinitiva6unid_165.png" /> Empreendimentos - Definitiva (6 unid.)'
            });
var format_EmpreendimentosPrvia21unid_166 = new ol.format.GeoJSON();
var features_EmpreendimentosPrvia21unid_166 = format_EmpreendimentosPrvia21unid_166.readFeatures(json_EmpreendimentosPrvia21unid_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosPrvia21unid_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosPrvia21unid_166.addFeatures(features_EmpreendimentosPrvia21unid_166);
var lyr_EmpreendimentosPrvia21unid_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosPrvia21unid_166, 
                style: style_EmpreendimentosPrvia21unid_166,
                popuplayertitle: 'Empreendimentos - Prévia (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosPrvia21unid_166.png" /> Empreendimentos - Prévia (21 unid.)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_167 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_167 = format_PBZPAEdifcioPrimeHELIPONTO_167.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_167.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_167);
var lyr_PBZPAEdifcioPrimeHELIPONTO_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_167, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_167,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
                title: '<img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_167.png" /> PBZPA - Edifício Prime (HELIPONTO)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_168 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_168 = format_PBZPAEdifcioPrimeHELIPONTO_168.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_168.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_168);
var lyr_PBZPAEdifcioPrimeHELIPONTO_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_168, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_168,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Edifício Prime (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_168_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_168_1.png" /> RAMPA<br />' });
var format_PBZPAHospitalHELIPONTO_169 = new ol.format.GeoJSON();
var features_PBZPAHospitalHELIPONTO_169 = format_PBZPAHospitalHELIPONTO_169.readFeatures(json_PBZPAHospitalHELIPONTO_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAHospitalHELIPONTO_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAHospitalHELIPONTO_169.addFeatures(features_PBZPAHospitalHELIPONTO_169);
var lyr_PBZPAHospitalHELIPONTO_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAHospitalHELIPONTO_169, 
                style: style_PBZPAHospitalHELIPONTO_169,
                popuplayertitle: 'PBZPA - Hospital (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Hospital (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_169_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_169_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_169_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_169_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_169_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_169_5.png" /> FATO 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_169_6.png" /> TLOF 1<br />' });
var format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170 = new ol.format.GeoJSON();
var features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170 = format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170.readFeatures(json_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170.addFeatures(features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170);
var lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170, 
                style: style_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170,
                popuplayertitle: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)',
                interactive: true,
    title: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_170_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_170_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_170_2.png" /> Cônica<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_170_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_170_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_170_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_170_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_170_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_170_8.png" /> Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_170_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_170_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_170_11.png" /> Transição<br />' });
var format_DeclividadeZonaUrbanaCopernicus30m_171 = new ol.format.GeoJSON();
var features_DeclividadeZonaUrbanaCopernicus30m_171 = format_DeclividadeZonaUrbanaCopernicus30m_171.readFeatures(json_DeclividadeZonaUrbanaCopernicus30m_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DeclividadeZonaUrbanaCopernicus30m_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaUrbanaCopernicus30m_171.addFeatures(features_DeclividadeZonaUrbanaCopernicus30m_171);
var lyr_DeclividadeZonaUrbanaCopernicus30m_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaUrbanaCopernicus30m_171, 
                style: style_DeclividadeZonaUrbanaCopernicus30m_171,
                popuplayertitle: 'Declividade - Zona Urbana (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Urbana (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_171_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_171_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_171_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_171_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_171_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_171_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_171_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_171_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_171_8.png" /> 101 - 114%<br />' });
var format_DeclividadeZonaRuralSulCopernicus30m_172 = new ol.format.GeoJSON();
var features_DeclividadeZonaRuralSulCopernicus30m_172 = format_DeclividadeZonaRuralSulCopernicus30m_172.readFeatures(json_DeclividadeZonaRuralSulCopernicus30m_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DeclividadeZonaRuralSulCopernicus30m_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaRuralSulCopernicus30m_172.addFeatures(features_DeclividadeZonaRuralSulCopernicus30m_172);
var lyr_DeclividadeZonaRuralSulCopernicus30m_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaRuralSulCopernicus30m_172, 
                style: style_DeclividadeZonaRuralSulCopernicus30m_172,
                popuplayertitle: 'Declividade - Zona Rural - Sul (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Rural - Sul (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_172_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_172_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_172_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_172_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_172_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_172_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_172_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_172_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_172_8.png" /> 101 - 114%<br />' });
var format_DeclividadeZonaRuralNorteCopernicus30m_173 = new ol.format.GeoJSON();
var features_DeclividadeZonaRuralNorteCopernicus30m_173 = format_DeclividadeZonaRuralNorteCopernicus30m_173.readFeatures(json_DeclividadeZonaRuralNorteCopernicus30m_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DeclividadeZonaRuralNorteCopernicus30m_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaRuralNorteCopernicus30m_173.addFeatures(features_DeclividadeZonaRuralNorteCopernicus30m_173);
var lyr_DeclividadeZonaRuralNorteCopernicus30m_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaRuralNorteCopernicus30m_173, 
                style: style_DeclividadeZonaRuralNorteCopernicus30m_173,
                popuplayertitle: 'Declividade - Zona Rural - Norte (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Rural - Norte (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_173_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_173_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_173_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_173_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_173_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_173_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_173_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_173_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_173_8.png" /> 101 - 114%<br />' });
var format_LoteamentosClandestinos3unid_174 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos3unid_174 = format_LoteamentosClandestinos3unid_174.readFeatures(json_LoteamentosClandestinos3unid_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinos3unid_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos3unid_174.addFeatures(features_LoteamentosClandestinos3unid_174);
var lyr_LoteamentosClandestinos3unid_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos3unid_174, 
                style: style_LoteamentosClandestinos3unid_174,
                popuplayertitle: 'Loteamentos Clandestinos (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos3unid_174.png" /> Loteamentos Clandestinos (3 unid.)'
            });
var format_LoteamentosClandestinos3unid_175 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos3unid_175 = format_LoteamentosClandestinos3unid_175.readFeatures(json_LoteamentosClandestinos3unid_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinos3unid_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos3unid_175.addFeatures(features_LoteamentosClandestinos3unid_175);
var lyr_LoteamentosClandestinos3unid_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos3unid_175, 
                style: style_LoteamentosClandestinos3unid_175,
                popuplayertitle: 'Loteamentos Clandestinos (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos3unid_175.png" /> Loteamentos Clandestinos (3 unid.)'
            });
var format_ParqueZumbidosPalmares_176 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_176 = format_ParqueZumbidosPalmares_176.readFeatures(json_ParqueZumbidosPalmares_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueZumbidosPalmares_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_176.addFeatures(features_ParqueZumbidosPalmares_176);
var lyr_ParqueZumbidosPalmares_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_176, 
                style: style_ParqueZumbidosPalmares_176,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_176.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177 = format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_AntigoAterrodasMaritacas_179 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_179 = format_AntigoAterrodasMaritacas_179.readFeatures(json_AntigoAterrodasMaritacas_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacas_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_179.addFeatures(features_AntigoAterrodasMaritacas_179);
var lyr_AntigoAterrodasMaritacas_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_179, 
                style: style_AntigoAterrodasMaritacas_179,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_179.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_183 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_183 = format_AntigoAterrodaFazendaMunicipal_183.readFeatures(json_AntigoAterrodaFazendaMunicipal_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipal_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_183.addFeatures(features_AntigoAterrodaFazendaMunicipal_183);
var lyr_AntigoAterrodaFazendaMunicipal_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_183, 
                style: style_AntigoAterrodaFazendaMunicipal_183,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_183.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)'
            });
var format_ARORemanescentesFlorestais_186 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_186 = format_ARORemanescentesFlorestais_186.readFeatures(json_ARORemanescentesFlorestais_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARORemanescentesFlorestais_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_186.addFeatures(features_ARORemanescentesFlorestais_186);
var lyr_ARORemanescentesFlorestais_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_186, 
                style: style_ARORemanescentesFlorestais_186,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_186.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_187 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_187 = format_AROreadeAmortecimento_187.readFeatures(json_AROreadeAmortecimento_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROreadeAmortecimento_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_187.addFeatures(features_AROreadeAmortecimento_187);
var lyr_AROreadeAmortecimento_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_187, 
                style: style_AROreadeAmortecimento_187,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_187.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_188 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_188 = format_AROFaixadeCuestas_188.readFeatures(json_AROFaixadeCuestas_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROFaixadeCuestas_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_188.addFeatures(features_AROFaixadeCuestas_188);
var lyr_AROFaixadeCuestas_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_188, 
                style: style_AROFaixadeCuestas_188,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_188.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_189 = new ol.format.GeoJSON();
var features_AROAPP_189 = format_AROAPP_189.readFeatures(json_AROAPP_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROAPP_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_189.addFeatures(features_AROAPP_189);
var lyr_AROAPP_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_189, 
                style: style_AROAPP_189,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_189.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_190 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_190 = format_ARAIncongrunciasemAPP_190.readFeatures(json_ARAIncongrunciasemAPP_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAIncongrunciasemAPP_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_190.addFeatures(features_ARAIncongrunciasemAPP_190);
var lyr_ARAIncongrunciasemAPP_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_190, 
                style: style_ARAIncongrunciasemAPP_190,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_190.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_191 = new ol.format.GeoJSON();
var features_ARAETELagoas_191 = format_ARAETELagoas_191.readFeatures(json_ARAETELagoas_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAETELagoas_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_191.addFeatures(features_ARAETELagoas_191);
var lyr_ARAETELagoas_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_191, 
                style: style_ARAETELagoas_191,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_191.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_192 = new ol.format.GeoJSON();
var features_ARAAterros_192 = format_ARAAterros_192.readFeatures(json_ARAAterros_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAAterros_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_192.addFeatures(features_ARAAterros_192);
var lyr_ARAAterros_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_192, 
                style: style_ARAAterros_192,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_192.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_193 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_193 = format_AODreaUrbanaConsolidada_193.readFeatures(json_AODreaUrbanaConsolidada_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODreaUrbanaConsolidada_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_193.addFeatures(features_AODreaUrbanaConsolidada_193);
var lyr_AODreaUrbanaConsolidada_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_193, 
                style: style_AODreaUrbanaConsolidada_193,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_193.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_194 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_194 = format_AODBaixaDensidadeNvel3_194.readFeatures(json_AODBaixaDensidadeNvel3_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel3_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_194.addFeatures(features_AODBaixaDensidadeNvel3_194);
var lyr_AODBaixaDensidadeNvel3_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_194, 
                style: style_AODBaixaDensidadeNvel3_194,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_194.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_195 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_195 = format_AODBaixaDensidadeNvel2_195.readFeatures(json_AODBaixaDensidadeNvel2_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel2_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_195.addFeatures(features_AODBaixaDensidadeNvel2_195);
var lyr_AODBaixaDensidadeNvel2_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_195, 
                style: style_AODBaixaDensidadeNvel2_195,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_195.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_196 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_196 = format_AODBaixaDensidadeNvel1_196.readFeatures(json_AODBaixaDensidadeNvel1_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel1_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_196.addFeatures(features_AODBaixaDensidadeNvel1_196);
var lyr_AODBaixaDensidadeNvel1_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_196, 
                style: style_AODBaixaDensidadeNvel1_196,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_196.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_197 = new ol.format.GeoJSON();
var features_AODAUSFase2_197 = format_AODAUSFase2_197.readFeatures(json_AODAUSFase2_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase2_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_197.addFeatures(features_AODAUSFase2_197);
var lyr_AODAUSFase2_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_197, 
                style: style_AODAUSFase2_197,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_197.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_198 = new ol.format.GeoJSON();
var features_AODAUSFase1_198 = format_AODAUSFase1_198.readFeatures(json_AODAUSFase1_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase1_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_198.addFeatures(features_AODAUSFase1_198);
var lyr_AODAUSFase1_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_198, 
                style: style_AODAUSFase1_198,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_198.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_199 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_199 = format_LimitedaBaciadoRioCanoasLeiC4322024_199.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_199.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_199);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_199, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_199,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_199.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_200 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_200 = format_LimitedaBaciadoRioCanoasLeiC1002006_200.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_200.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_200);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_200, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_200,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_200.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_201 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_201 = format_DelimitaodaBaciadoRibeirodaOna_201.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_201.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_201);
var lyr_DelimitaodaBaciadoRibeirodaOna_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_201, 
                style: style_DelimitaodaBaciadoRibeirodaOna_201,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_201.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_AoCivilPblica1unid_202 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_202 = format_AoCivilPblica1unid_202.readFeatures(json_AoCivilPblica1unid_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_202.addFeatures(features_AoCivilPblica1unid_202);
var lyr_AoCivilPblica1unid_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_202, 
                style: style_AoCivilPblica1unid_202,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_202.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_203 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_203 = format_AoCivilPblica1unid_203.readFeatures(json_AoCivilPblica1unid_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_203.addFeatures(features_AoCivilPblica1unid_203);
var lyr_AoCivilPblica1unid_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_203, 
                style: style_AoCivilPblica1unid_203,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_203.png" /> Ação Civil Pública (1 unid.)'
            });
var format_CartaAnuncia20unid_204 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_204 = format_CartaAnuncia20unid_204.readFeatures(json_CartaAnuncia20unid_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia20unid_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_204.addFeatures(features_CartaAnuncia20unid_204);
var lyr_CartaAnuncia20unid_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_204, 
                style: style_CartaAnuncia20unid_204,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_204.png" /> Carta Anuência (20 unid.)'
            });
var format_CartaAnuncia19unid_205 = new ol.format.GeoJSON();
var features_CartaAnuncia19unid_205 = format_CartaAnuncia19unid_205.readFeatures(json_CartaAnuncia19unid_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia19unid_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia19unid_205.addFeatures(features_CartaAnuncia19unid_205);
var lyr_CartaAnuncia19unid_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia19unid_205, 
                style: style_CartaAnuncia19unid_205,
                popuplayertitle: 'Carta Anuência (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia19unid_205.png" /> Carta Anuência (19 unid.)'
            });
var format_PlantioVoluntrio1unid_206 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_206 = format_PlantioVoluntrio1unid_206.readFeatures(json_PlantioVoluntrio1unid_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_206.addFeatures(features_PlantioVoluntrio1unid_206);
var lyr_PlantioVoluntrio1unid_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_206, 
                style: style_PlantioVoluntrio1unid_206,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_206.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_207 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_207 = format_PlantioVoluntrio1unid_207.readFeatures(json_PlantioVoluntrio1unid_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_207.addFeatures(features_PlantioVoluntrio1unid_207);
var lyr_PlantioVoluntrio1unid_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_207, 
                style: style_PlantioVoluntrio1unid_207,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_207.png" /> Plantio Voluntário (1 unid.)'
            });
var format_TACMinistrioPblico9unid_208 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_208 = format_TACMinistrioPblico9unid_208.readFeatures(json_TACMinistrioPblico9unid_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_208.addFeatures(features_TACMinistrioPblico9unid_208);
var lyr_TACMinistrioPblico9unid_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_208, 
                style: style_TACMinistrioPblico9unid_208,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_208.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_209 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_209 = format_TACMinistrioPblico9unid_209.readFeatures(json_TACMinistrioPblico9unid_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_209.addFeatures(features_TACMinistrioPblico9unid_209);
var lyr_TACMinistrioPblico9unid_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_209, 
                style: style_TACMinistrioPblico9unid_209,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_209.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TCRACETESB28unid_210 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_210 = format_TCRACETESB28unid_210.readFeatures(json_TCRACETESB28unid_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_210.addFeatures(features_TCRACETESB28unid_210);
var lyr_TCRACETESB28unid_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_210, 
                style: style_TCRACETESB28unid_210,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_210.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESB28unid_211 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_211 = format_TCRACETESB28unid_211.readFeatures(json_TCRACETESB28unid_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_211.addFeatures(features_TCRACETESB28unid_211);
var lyr_TCRACETESB28unid_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_211, 
                style: style_TCRACETESB28unid_211,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_211.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRAMunicipal14unid_212 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_212 = format_TCRAMunicipal14unid_212.readFeatures(json_TCRAMunicipal14unid_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_212.addFeatures(features_TCRAMunicipal14unid_212);
var lyr_TCRAMunicipal14unid_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_212, 
                style: style_TCRAMunicipal14unid_212,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_212.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRAMunicipal14unid_213 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_213 = format_TCRAMunicipal14unid_213.readFeatures(json_TCRAMunicipal14unid_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_213.addFeatures(features_TCRAMunicipal14unid_213);
var lyr_TCRAMunicipal14unid_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_213, 
                style: style_TCRAMunicipal14unid_213,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_213.png" /> TCRA Municipal (14 unid.)'
            });
var format_TRPRLCETESB2unid_214 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_214 = format_TRPRLCETESB2unid_214.readFeatures(json_TRPRLCETESB2unid_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_214.addFeatures(features_TRPRLCETESB2unid_214);
var lyr_TRPRLCETESB2unid_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_214, 
                style: style_TRPRLCETESB2unid_214,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_214.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_215 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_215 = format_TRPRLCETESB2unid_215.readFeatures(json_TRPRLCETESB2unid_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_215.addFeatures(features_TRPRLCETESB2unid_215);
var lyr_TRPRLCETESB2unid_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_215, 
                style: style_TRPRLCETESB2unid_215,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_215.png" /> TRPRL CETESB (2 unid.)'
            });
var format_rvoreImuneaoCorte8unid_216 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte8unid_216 = format_rvoreImuneaoCorte8unid_216.readFeatures(json_rvoreImuneaoCorte8unid_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_rvoreImuneaoCorte8unid_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte8unid_216.addFeatures(features_rvoreImuneaoCorte8unid_216);
var lyr_rvoreImuneaoCorte8unid_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte8unid_216, 
                style: style_rvoreImuneaoCorte8unid_216,
                popuplayertitle: 'Árvore Imune ao Corte (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte8unid_216.png" /> Árvore Imune ao Corte (8 unid.)'
            });
var format_Voorocas26unid_217 = new ol.format.GeoJSON();
var features_Voorocas26unid_217 = format_Voorocas26unid_217.readFeatures(json_Voorocas26unid_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Voorocas26unid_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas26unid_217.addFeatures(features_Voorocas26unid_217);
var lyr_Voorocas26unid_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas26unid_217, 
                style: style_Voorocas26unid_217,
                popuplayertitle: 'Voçorocas (26 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas26unid_217.png" /> Voçorocas (26 unid.)'
            });
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica1unid_202,lyr_AoCivilPblica1unid_203,lyr_CartaAnuncia20unid_204,lyr_CartaAnuncia19unid_205,lyr_PlantioVoluntrio1unid_206,lyr_PlantioVoluntrio1unid_207,lyr_TACMinistrioPblico9unid_208,lyr_TACMinistrioPblico9unid_209,lyr_TCRACETESB28unid_210,lyr_TCRACETESB28unid_211,lyr_TCRAMunicipal14unid_212,lyr_TCRAMunicipal14unid_213,lyr_TRPRLCETESB2unid_214,lyr_TRPRLCETESB2unid_215,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_186,lyr_AROreadeAmortecimento_187,lyr_AROFaixadeCuestas_188,lyr_AROAPP_189,lyr_ARAIncongrunciasemAPP_190,lyr_ARAETELagoas_191,lyr_ARAAterros_192,lyr_AODreaUrbanaConsolidada_193,lyr_AODBaixaDensidadeNvel3_194,lyr_AODBaixaDensidadeNvel2_195,lyr_AODBaixaDensidadeNvel1_196,lyr_AODAUSFase2_197,lyr_AODAUSFase1_198,lyr_LimitedaBaciadoRioCanoasLeiC4322024_199,lyr_LimitedaBaciadoRioCanoasLeiC1002006_200,lyr_DelimitaodaBaciadoRibeirodaOna_201,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_ParqueZumbidosPalmares_176,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178,lyr_AntigoAterrodasMaritacas_179,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182,lyr_AntigoAterrodaFazendaMunicipal_183,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_LoteamentosClandestinos = new ol.layer.Group({
                                layers: [lyr_LoteamentosClandestinos3unid_174,lyr_LoteamentosClandestinos3unid_175,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos'});
var group_Declividade = new ol.layer.Group({
                                layers: [lyr_DeclividadeZonaUrbanaCopernicus30m_171,lyr_DeclividadeZonaRuralSulCopernicus30m_172,lyr_DeclividadeZonaRuralNorteCopernicus30m_173,],
                                fold: 'close',
                                title: 'Declividade'});
var group_SecretariadeInfraestrutura = new ol.layer.Group({
                                layers: [lyr_EmpreendimentoVillaDoratta_35,lyr_EmpreendimentoVillaDoratta_36,lyr_EmpreendimentoDioceseFranca_37,lyr_EmpreendimentoDioceseFranca_38,lyr_EmpreendimentoAdonis_39,lyr_EmpreendimentoAdonis_40,lyr_EmpreendimentoInfratecinica_41,lyr_EmpreendimentoInfratecinica_42,lyr_EmpreendimentoResidencialBoaVista_43,lyr_EmpreendimentoResidencialBoaVista_44,lyr_EmpreendimentoCondomnioResicencialTerraNova_45,lyr_EmpreendimentoCondomnioResicencialTerraNova_46,lyr_EmpreendimentoVillaDiEspanhaIII_47,lyr_EmpreendimentoVillaDiEspanhaIII_48,lyr_EmpreendimentoSoCarlosII_49,lyr_EmpreendimentoSoCarlosII_50,lyr_EmpreendimentoParqueFlora_51,lyr_EmpreendimentoParqueFlora_52,lyr_EmpreendimentoVittaSoVicente_53,lyr_EmpreendimentoVittaSoVicente_54,lyr_EmpreendimentoRecantoMeneghetti_55,lyr_EmpreendimentoRecantoMeneghetti_56,lyr_EmpreendimentoParquedosSabias_57,lyr_EmpreendimentoParquedosSabias_58,lyr_EmpreendimentoMoradadaMata_59,lyr_EmpreendimentoMoradadaMata_60,lyr_EmpreendimentoIrineuZanetiII_61,lyr_EmpreendimentoIrineuZanetiII_62,lyr_EmpreendimentoResidencialJabuticabeiras_63,lyr_EmpreendimentoResidencialJabuticabeiras_64,lyr_EmpreendimentoResidencialMarianaAlarcon_65,lyr_EmpreendimentoResidencialMarianaAlarcon_66,lyr_EmpreendimentoResidencialCintraAlves_67,lyr_EmpreendimentoResidencialCintraAlves_68,lyr_EmpreendimentoLoteamentolamo_69,lyr_EmpreendimentoLoteamentolamo_70,lyr_EmpreendimentoSantaLina_71,lyr_EmpreendimentoSantaLina_72,lyr_EmpreendimentoResidencialPousoAlegreII_73,lyr_EmpreendimentoResidencialPousoAlegreII_74,lyr_EmpreendimentoResidencialPousoAlegre_75,lyr_EmpreendimentoResidencialPousoAlegre_76,lyr_EmpreendimentoResidencialAltodaFazenda_77,lyr_EmpreendimentoResidencialAltodaFazenda_78,lyr_EmpreendimentoResidencialMarioTasso_79,lyr_EmpreendimentoResidencialMarioTasso_80,lyr_EmpreendimentoResidenciaisVivenna_81,lyr_EmpreendimentoResidenciaisVivenna_82,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_83,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_84,lyr_EmprendimentoElias_85,lyr_EmprendimentoElias_86,lyr_EmpreendimentoResidencialSoCarlosI_87,lyr_EmpreendimentoResidencialSoCarlosI_88,lyr_EmpreendimentoMonti_89,lyr_EmpreendimentoMonti_90,lyr_EmpreendimentoResidencialMoradadoBosque_91,lyr_EmpreendimentoResidencialMoradadoBosque_92,lyr_EmpreendimentoVittaAlvorada_93,lyr_EmpreendimentoVittaAlvorada_94,lyr_EmpreendimentoResidencialMarthaHelena_95,lyr_EmpreendimentoResidencialMarthaHelena_96,lyr_EmpreendimentoResidencialYasminTorres_97,lyr_EmpreendimentoResidencialYasminTorres_98,lyr_EmpreendimentoPalmeiraReal_99,lyr_EmpreendimentoPalmeiraReal_100,lyr_EmpreendimentoEssence_101,lyr_EmpreendimentoEssence_102,lyr_EmpreendimentoVersalhes_103,lyr_EmpreendimentoVersalhes_104,lyr_EmpreendimentoSonetto_105,lyr_EmpreendimentoSonetto_106,lyr_EmpreendimentoResidencialSantaIns_107,lyr_EmpreendimentoResidencialSantaIns_108,lyr_EmpreendimentoEdifcioSolNascente_109,lyr_EmpreendimentoEdifcioSolNascente_110,lyr_EmpreendimentoResidencialQuintadosOitis_111,lyr_EmpreendimentoResidencialQuintadosOitis_112,lyr_EmpreendimentoResidencialQuintadoSol_113,lyr_EmpreendimentoResidencialQuintadoSol_114,lyr_EmpreendimentoParquePalmeiraImperial_115,lyr_EmpreendimentoParquePalmeiraImperial_116,lyr_EmpreendimentoBordadaMata_117,lyr_EmpreendimentoBordadaMata_118,lyr_EmpreendimentoEdifcioResidencialHope_119,lyr_EmpreendimentoEdifcioResidencialHope_120,lyr_EmpreendimentoHorizResidence_121,lyr_EmpreendimentoHorizResidence_122,lyr_EmpreendimentoJardimFlora_123,lyr_EmpreendimentoJardimFlora_124,lyr_EmpreendimentoJardimHorizonte_125,lyr_EmpreendimentoJardimHorizonte_126,lyr_EmpreendimentoJardimMariaLuiza_127,lyr_EmpreendimentoJardimMariaLuiza_128,lyr_EmpreendimentoMontBlancResidence_129,lyr_EmpreendimentoMontBlancResidence_130,lyr_EmpreendimentoMoradadoVerdeII_131,lyr_EmpreendimentoMoradadoVerdeII_132,lyr_EmpreendimentoResicencialNairRetuci_133,lyr_EmpreendimentoResicencialNairRetuci_134,lyr_EmpreendimentoParagonII_135,lyr_EmpreendimentoParagonII_136,lyr_EmpreendimentoParagon_137,lyr_EmpreendimentoParagon_138,lyr_EmpreendimentoParqueVillaLobos_139,lyr_EmpreendimentoParqueVillaLobos_140,lyr_EmpreendimentoDaVinci_141,lyr_EmpreendimentoDaVinci_142,lyr_EmpreendimentoResidencialDomingosJardini_143,lyr_EmpreendimentoResidencialDomingosJardini_144,lyr_EmpreendimentoResidencialSantaF_145,lyr_EmpreendimentoResidencialSantaF_146,lyr_EmpreendimentoEdifcioRuadoSol_147,lyr_EmpreendimentoEdifcioRuadoSol_148,lyr_EmpreendimentoTorontoResidence_149,lyr_EmpreendimentoTorontoResidence_150,lyr_EmpreendimentoCidadeJardim_151,lyr_EmpreendimentoCidadeJardim_152,lyr_EmpreendimentoColorado_153,lyr_EmpreendimentoColorado_154,lyr_EmpreendimentoFerracini_155,lyr_EmpreendimentoFerracini_156,lyr_EmpreendimentoResicencialNairRetuciII_157,lyr_EmpreendimentoResicencialNairRetuciII_158,lyr_EmpreendimentoVillaPucci_159,lyr_EmpreendimentoVillaPucci_160,lyr_ServidoRamal138kVFranca4Guanabara_161,lyr_ServidoRamal138kVFranca4Guanabara_162,lyr_EmpreendimentosAprovado27unid_163,lyr_EmpreendimentosDiretriz2unid_164,lyr_EmpreendimentosDefinitiva6unid_165,lyr_EmpreendimentosPrvia21unid_166,lyr_PBZPAEdifcioPrimeHELIPONTO_167,lyr_PBZPAEdifcioPrimeHELIPONTO_168,lyr_PBZPAHospitalHELIPONTO_169,lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170,],
                                fold: 'close',
                                title: 'Secretaria de Infraestrutura'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteEMDEF10unid218783m_26,lyr_LoteEMDEF10unid_27,lyr_Lote504unid13809703m_28,lyr_Lote504unid_29,lyr_APP169unid238007435m_30,lyr_readeUsoEspecial247unid269765616m_31,lyr_reaInstitucional240unid136439095m_32,lyr_reaPatrimonial33unid15807656m_33,lyr_reaVerde2008unid845466642m_34,],
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

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_APP1745unid_5.setVisible(false);lyr_RiosDuplos84unid_6.setVisible(false);lyr_MassasDgua270unid_7.setVisible(false);lyr_RiosSimples1842unid_8.setVisible(false);lyr_Nascentes821unid_9.setVisible(false);lyr_RemanescentedaMatrcula11419_10.setVisible(false);lyr_ConjuntoHabitacional_11.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_12.setVisible(false);lyr_reaK_13.setVisible(false);lyr_reaJ_14.setVisible(false);lyr_reaI_15.setVisible(false);lyr_reaH_16.setVisible(false);lyr_reaG_17.setVisible(false);lyr_reaF_18.setVisible(false);lyr_reaE_19.setVisible(false);lyr_reaD_20.setVisible(false);lyr_reaC_21.setVisible(false);lyr_reaB_22.setVisible(false);lyr_reaA_23.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.setVisible(false);lyr_reaaseraverbadaPartedareaG_25.setVisible(false);lyr_LoteEMDEF10unid218783m_26.setVisible(false);lyr_LoteEMDEF10unid_27.setVisible(false);lyr_Lote504unid13809703m_28.setVisible(false);lyr_Lote504unid_29.setVisible(false);lyr_APP169unid238007435m_30.setVisible(false);lyr_readeUsoEspecial247unid269765616m_31.setVisible(false);lyr_reaInstitucional240unid136439095m_32.setVisible(false);lyr_reaPatrimonial33unid15807656m_33.setVisible(false);lyr_reaVerde2008unid845466642m_34.setVisible(false);lyr_EmpreendimentoVillaDoratta_35.setVisible(false);lyr_EmpreendimentoVillaDoratta_36.setVisible(false);lyr_EmpreendimentoDioceseFranca_37.setVisible(false);lyr_EmpreendimentoDioceseFranca_38.setVisible(false);lyr_EmpreendimentoAdonis_39.setVisible(false);lyr_EmpreendimentoAdonis_40.setVisible(false);lyr_EmpreendimentoInfratecinica_41.setVisible(false);lyr_EmpreendimentoInfratecinica_42.setVisible(false);lyr_EmpreendimentoResidencialBoaVista_43.setVisible(false);lyr_EmpreendimentoResidencialBoaVista_44.setVisible(false);lyr_EmpreendimentoCondomnioResicencialTerraNova_45.setVisible(false);lyr_EmpreendimentoCondomnioResicencialTerraNova_46.setVisible(false);lyr_EmpreendimentoVillaDiEspanhaIII_47.setVisible(false);lyr_EmpreendimentoVillaDiEspanhaIII_48.setVisible(false);lyr_EmpreendimentoSoCarlosII_49.setVisible(false);lyr_EmpreendimentoSoCarlosII_50.setVisible(false);lyr_EmpreendimentoParqueFlora_51.setVisible(false);lyr_EmpreendimentoParqueFlora_52.setVisible(false);lyr_EmpreendimentoVittaSoVicente_53.setVisible(false);lyr_EmpreendimentoVittaSoVicente_54.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_55.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_56.setVisible(false);lyr_EmpreendimentoParquedosSabias_57.setVisible(false);lyr_EmpreendimentoParquedosSabias_58.setVisible(false);lyr_EmpreendimentoMoradadaMata_59.setVisible(false);lyr_EmpreendimentoMoradadaMata_60.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_61.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_62.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_63.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_64.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_65.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_66.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_67.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_68.setVisible(false);lyr_EmpreendimentoLoteamentolamo_69.setVisible(false);lyr_EmpreendimentoLoteamentolamo_70.setVisible(false);lyr_EmpreendimentoSantaLina_71.setVisible(false);lyr_EmpreendimentoSantaLina_72.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegreII_73.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegreII_74.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_75.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_76.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_77.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_78.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_79.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_80.setVisible(false);lyr_EmpreendimentoResidenciaisVivenna_81.setVisible(false);lyr_EmpreendimentoResidenciaisVivenna_82.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_83.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_84.setVisible(false);lyr_EmprendimentoElias_85.setVisible(false);lyr_EmprendimentoElias_86.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_87.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_88.setVisible(false);lyr_EmpreendimentoMonti_89.setVisible(false);lyr_EmpreendimentoMonti_90.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_91.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_92.setVisible(false);lyr_EmpreendimentoVittaAlvorada_93.setVisible(false);lyr_EmpreendimentoVittaAlvorada_94.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_95.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_96.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_97.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_98.setVisible(false);lyr_EmpreendimentoPalmeiraReal_99.setVisible(false);lyr_EmpreendimentoPalmeiraReal_100.setVisible(false);lyr_EmpreendimentoEssence_101.setVisible(false);lyr_EmpreendimentoEssence_102.setVisible(false);lyr_EmpreendimentoVersalhes_103.setVisible(false);lyr_EmpreendimentoVersalhes_104.setVisible(false);lyr_EmpreendimentoSonetto_105.setVisible(false);lyr_EmpreendimentoSonetto_106.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_107.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_108.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_109.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_110.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_111.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_112.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_113.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_114.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_115.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_116.setVisible(false);lyr_EmpreendimentoBordadaMata_117.setVisible(false);lyr_EmpreendimentoBordadaMata_118.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_119.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_120.setVisible(false);lyr_EmpreendimentoHorizResidence_121.setVisible(false);lyr_EmpreendimentoHorizResidence_122.setVisible(false);lyr_EmpreendimentoJardimFlora_123.setVisible(false);lyr_EmpreendimentoJardimFlora_124.setVisible(false);lyr_EmpreendimentoJardimHorizonte_125.setVisible(false);lyr_EmpreendimentoJardimHorizonte_126.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_127.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_128.setVisible(false);lyr_EmpreendimentoMontBlancResidence_129.setVisible(false);lyr_EmpreendimentoMontBlancResidence_130.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_131.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_132.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_133.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_134.setVisible(false);lyr_EmpreendimentoParagonII_135.setVisible(false);lyr_EmpreendimentoParagonII_136.setVisible(false);lyr_EmpreendimentoParagon_137.setVisible(false);lyr_EmpreendimentoParagon_138.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_139.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_140.setVisible(false);lyr_EmpreendimentoDaVinci_141.setVisible(false);lyr_EmpreendimentoDaVinci_142.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_143.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_144.setVisible(false);lyr_EmpreendimentoResidencialSantaF_145.setVisible(false);lyr_EmpreendimentoResidencialSantaF_146.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_147.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_148.setVisible(false);lyr_EmpreendimentoTorontoResidence_149.setVisible(false);lyr_EmpreendimentoTorontoResidence_150.setVisible(false);lyr_EmpreendimentoCidadeJardim_151.setVisible(false);lyr_EmpreendimentoCidadeJardim_152.setVisible(false);lyr_EmpreendimentoColorado_153.setVisible(false);lyr_EmpreendimentoColorado_154.setVisible(false);lyr_EmpreendimentoFerracini_155.setVisible(false);lyr_EmpreendimentoFerracini_156.setVisible(false);lyr_EmpreendimentoResicencialNairRetuciII_157.setVisible(false);lyr_EmpreendimentoResicencialNairRetuciII_158.setVisible(false);lyr_EmpreendimentoVillaPucci_159.setVisible(false);lyr_EmpreendimentoVillaPucci_160.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_161.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_162.setVisible(false);lyr_EmpreendimentosAprovado27unid_163.setVisible(false);lyr_EmpreendimentosDiretriz2unid_164.setVisible(false);lyr_EmpreendimentosDefinitiva6unid_165.setVisible(false);lyr_EmpreendimentosPrvia21unid_166.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_167.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_168.setVisible(false);lyr_PBZPAHospitalHELIPONTO_169.setVisible(false);lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170.setVisible(false);lyr_DeclividadeZonaUrbanaCopernicus30m_171.setVisible(false);lyr_DeclividadeZonaRuralSulCopernicus30m_172.setVisible(false);lyr_DeclividadeZonaRuralNorteCopernicus30m_173.setVisible(false);lyr_LoteamentosClandestinos3unid_174.setVisible(false);lyr_LoteamentosClandestinos3unid_175.setVisible(false);lyr_ParqueZumbidosPalmares_176.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178.setVisible(false);lyr_AntigoAterrodasMaritacas_179.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_183.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185.setVisible(false);lyr_ARORemanescentesFlorestais_186.setVisible(false);lyr_AROreadeAmortecimento_187.setVisible(false);lyr_AROFaixadeCuestas_188.setVisible(false);lyr_AROAPP_189.setVisible(false);lyr_ARAIncongrunciasemAPP_190.setVisible(false);lyr_ARAETELagoas_191.setVisible(false);lyr_ARAAterros_192.setVisible(false);lyr_AODreaUrbanaConsolidada_193.setVisible(false);lyr_AODBaixaDensidadeNvel3_194.setVisible(false);lyr_AODBaixaDensidadeNvel2_195.setVisible(false);lyr_AODBaixaDensidadeNvel1_196.setVisible(false);lyr_AODAUSFase2_197.setVisible(false);lyr_AODAUSFase1_198.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_199.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_200.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_201.setVisible(false);lyr_AoCivilPblica1unid_202.setVisible(false);lyr_AoCivilPblica1unid_203.setVisible(false);lyr_CartaAnuncia20unid_204.setVisible(false);lyr_CartaAnuncia19unid_205.setVisible(false);lyr_PlantioVoluntrio1unid_206.setVisible(false);lyr_PlantioVoluntrio1unid_207.setVisible(false);lyr_TACMinistrioPblico9unid_208.setVisible(false);lyr_TACMinistrioPblico9unid_209.setVisible(false);lyr_TCRACETESB28unid_210.setVisible(false);lyr_TCRACETESB28unid_211.setVisible(false);lyr_TCRAMunicipal14unid_212.setVisible(false);lyr_TCRAMunicipal14unid_213.setVisible(false);lyr_TRPRLCETESB2unid_214.setVisible(false);lyr_TRPRLCETESB2unid_215.setVisible(false);lyr_rvoreImuneaoCorte8unid_216.setVisible(false);lyr_Voorocas26unid_217.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,group_HidrografiaFBDS2025,group_FazendaMunicipalPousoAlto,group_reasPblicas,group_SecretariadeInfraestrutura,group_Declividade,group_LoteamentosClandestinos,group_GerenciamentodereasContaminadas,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_reasCompromissadas,lyr_rvoreImuneaoCorte8unid_216,lyr_Voorocas26unid_217];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Área (km²)': 'Área (km²)', });
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
lyr_LoteEMDEF10unid218783m_26.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_LoteEMDEF10unid_27.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_Lote504unid13809703m_28.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_Lote504unid_29.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_APP169unid238007435m_30.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_readeUsoEspecial247unid269765616m_31.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaInstitucional240unid136439095m_32.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaPatrimonial33unid15807656m_33.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaVerde2008unid845466642m_34.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', });
lyr_EmpreendimentoVillaDoratta_35.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDoratta_36.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDioceseFranca_37.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDioceseFranca_38.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_39.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_40.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoInfratecinica_41.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoInfratecinica_42.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialBoaVista_43.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialBoaVista_44.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_45.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_46.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDiEspanhaIII_47.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDiEspanhaIII_48.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_49.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_50.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_51.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_52.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_53.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_54.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoRecantoMeneghetti_55.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoRecantoMeneghetti_56.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_57.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_58.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_59.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_60.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_61.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_62.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialJabuticabeiras_63.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialJabuticabeiras_64.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_65.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_66.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_67.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_68.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_69.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_70.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_71.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_72.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegreII_73.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegreII_74.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_75.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_76.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_77.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_78.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialMarioTasso_79.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarioTasso_80.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidenciaisVivenna_81.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidenciaisVivenna_82.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_83.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_84.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_85.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_86.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialSoCarlosI_87.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSoCarlosI_88.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoMonti_89.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMonti_90.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMoradadoBosque_91.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMoradadoBosque_92.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_93.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_94.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMarthaHelena_95.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarthaHelena_96.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialYasminTorres_97.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialYasminTorres_98.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoPalmeiraReal_99.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoPalmeiraReal_100.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEssence_101.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEssence_102.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_103.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_104.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoSonetto_105.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSonetto_106.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialSantaIns_107.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaIns_108.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEdifcioSolNascente_109.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioSolNascente_110.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadosOitis_111.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadosOitis_112.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadoSol_113.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadoSol_114.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_115.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_116.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoBordadaMata_117.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoBordadaMata_118.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_119.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_120.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_121.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_122.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_123.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_124.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_125.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_126.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_127.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_128.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_129.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_131.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagonII_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagonII_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_148.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_149.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_150.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCidadeJardim_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCidadeJardim_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoColorado_153.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoColorado_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFerracini_155.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFerracini_156.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuciII_157.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuciII_158.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaPucci_159.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaPucci_160.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_161.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_162.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_EmpreendimentosAprovado27unid_163.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDiretriz2unid_164.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDefinitiva6unid_165.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosPrvia21unid_166.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_PBZPAEdifcioPrimeHELIPONTO_167.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAEdifcioPrimeHELIPONTO_168.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAHospitalHELIPONTO_169.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_DeclividadeZonaUrbanaCopernicus30m_171.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_DeclividadeZonaRuralSulCopernicus30m_172.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_173.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_LoteamentosClandestinos3unid_174.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_LoteamentosClandestinos3unid_175.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'area': 'area', 'multa': 'multa', 'ufmf': 'ufmf', });
lyr_ParqueZumbidosPalmares_176.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacas_179.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodaFazendaMunicipal_183.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184.set('fieldAliases', {'fid': 'fid', 'Field1': 'Poço', 'Field2': 'Field2', 'Field3': 'Field3', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Poço', });
lyr_ARORemanescentesFlorestais_186.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_187.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_188.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_189.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_190.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_191.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_192.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_193.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_194.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_195.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_196.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_197.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'SUM_area': 'SUM_area', 'FIRST_AI': 'FIRST_AI', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_198.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_199.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_200.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_201.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_AoCivilPblica1unid_202.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_203.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia20unid_204.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia19unid_205.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio1unid_206.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_207.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico9unid_208.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_209.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB28unid_210.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESB28unid_211.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal14unid_212.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal14unid_213.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB2unid_214.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_215.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_rvoreImuneaoCorte8unid_216.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_Voorocas26unid_217.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Área (km²)': '', });
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
lyr_LoteEMDEF10unid218783m_26.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_LoteEMDEF10unid_27.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_Lote504unid13809703m_28.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_Lote504unid_29.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_APP169unid238007435m_30.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_readeUsoEspecial247unid269765616m_31.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaInstitucional240unid136439095m_32.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaPatrimonial33unid15807656m_33.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaVerde2008unid845466642m_34.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', });
lyr_EmpreendimentoVillaDoratta_35.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDoratta_36.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDioceseFranca_37.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDioceseFranca_38.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_39.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_40.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoInfratecinica_41.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoInfratecinica_42.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialBoaVista_43.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialBoaVista_44.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_45.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_46.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDiEspanhaIII_47.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDiEspanhaIII_48.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_49.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_50.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_51.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_52.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_53.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_54.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoRecantoMeneghetti_55.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoRecantoMeneghetti_56.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_57.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_58.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_59.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_60.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_61.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_62.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_63.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_64.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_65.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_66.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_67.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_68.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoLoteamentolamo_69.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoLoteamentolamo_70.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_71.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_72.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegreII_73.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegreII_74.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_75.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_76.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_77.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_78.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialMarioTasso_79.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarioTasso_80.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidenciaisVivenna_81.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidenciaisVivenna_82.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_83.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_84.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmprendimentoElias_85.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmprendimentoElias_86.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialSoCarlosI_87.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSoCarlosI_88.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoMonti_89.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMonti_90.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_91.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_92.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_93.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_94.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMarthaHelena_95.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarthaHelena_96.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialYasminTorres_97.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialYasminTorres_98.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoPalmeiraReal_99.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoPalmeiraReal_100.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEssence_101.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEssence_102.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_103.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_104.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoSonetto_105.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSonetto_106.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialSantaIns_107.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaIns_108.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEdifcioSolNascente_109.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioSolNascente_110.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_111.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_112.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadoSol_113.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadoSol_114.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_115.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_116.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoBordadaMata_117.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoBordadaMata_118.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_119.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_120.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_121.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_122.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_123.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_124.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_125.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_126.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_127.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_128.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_129.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_130.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_131.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_132.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_134.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagonII_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagonII_136.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_140.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_142.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_143.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_144.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_145.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_146.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_147.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_148.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_149.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_150.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCidadeJardim_151.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCidadeJardim_152.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoColorado_153.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoColorado_154.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFerracini_155.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFerracini_156.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuciII_157.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuciII_158.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaPucci_159.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaPucci_160.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_161.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_162.set('fieldImages', {'fid': '', 'id': '', });
lyr_EmpreendimentosAprovado27unid_163.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDiretriz2unid_164.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDefinitiva6unid_165.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosPrvia21unid_166.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_167.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_168.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAHospitalHELIPONTO_169.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_DeclividadeZonaUrbanaCopernicus30m_171.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_DeclividadeZonaRuralSulCopernicus30m_172.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_173.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_LoteamentosClandestinos3unid_174.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_LoteamentosClandestinos3unid_175.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_ParqueZumbidosPalmares_176.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_179.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_183.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184.set('fieldImages', {'fid': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ARORemanescentesFlorestais_186.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_187.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_188.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_189.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_190.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_191.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_192.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_193.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_194.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_195.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_196.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_197.set('fieldImages', {'fid': '', 'Classe': '', 'SUM_area': '', 'FIRST_AI': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase1_198.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_199.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_200.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_201.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_AoCivilPblica1unid_202.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_203.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_CartaAnuncia20unid_204.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia19unid_205.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_PlantioVoluntrio1unid_206.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_207.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_TACMinistrioPblico9unid_208.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_209.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TCRACETESB28unid_210.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB28unid_211.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', });
lyr_TCRAMunicipal14unid_212.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal14unid_213.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TRPRLCETESB2unid_214.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_215.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_rvoreImuneaoCorte8unid_216.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_Voorocas26unid_217.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Área (km²)': 'inline label - visible with data', });
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
lyr_LoteEMDEF10unid218783m_26.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_27.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_Lote504unid13809703m_28.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_Lote504unid_29.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_APP169unid238007435m_30.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_readeUsoEspecial247unid269765616m_31.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaInstitucional240unid136439095m_32.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaPatrimonial33unid15807656m_33.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaVerde2008unid845466642m_34.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'no label', });
lyr_EmpreendimentoVillaDoratta_35.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDoratta_36.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDioceseFranca_37.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDioceseFranca_38.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_39.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_40.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoInfratecinica_41.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoInfratecinica_42.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialBoaVista_43.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialBoaVista_44.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_45.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_46.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDiEspanhaIII_47.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDiEspanhaIII_48.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_49.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_50.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_51.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_52.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_53.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_54.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoRecantoMeneghetti_55.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoRecantoMeneghetti_56.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_57.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_58.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_59.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_60.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_61.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_62.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialJabuticabeiras_63.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialJabuticabeiras_64.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_65.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_66.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_67.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_68.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_69.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_70.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_71.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_72.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegreII_73.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegreII_74.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_75.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_76.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_77.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_78.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialMarioTasso_79.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarioTasso_80.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidenciaisVivenna_81.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidenciaisVivenna_82.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_83.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_84.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_85.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_86.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialSoCarlosI_87.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSoCarlosI_88.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoMonti_89.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMonti_90.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMoradadoBosque_91.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMoradadoBosque_92.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_93.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_94.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMarthaHelena_95.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarthaHelena_96.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialYasminTorres_97.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialYasminTorres_98.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoPalmeiraReal_99.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoPalmeiraReal_100.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEssence_101.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEssence_102.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_103.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_104.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoSonetto_105.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSonetto_106.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialSantaIns_107.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaIns_108.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEdifcioSolNascente_109.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioSolNascente_110.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadosOitis_111.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadosOitis_112.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadoSol_113.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadoSol_114.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_115.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_116.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoBordadaMata_117.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoBordadaMata_118.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_119.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_120.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_121.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_122.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_123.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_124.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_125.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_126.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_127.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_128.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_129.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_130.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_131.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagonII_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagonII_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_143.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_144.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_148.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_149.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_150.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCidadeJardim_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCidadeJardim_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoColorado_153.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoColorado_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFerracini_155.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFerracini_156.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuciII_157.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuciII_158.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaPucci_159.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaPucci_160.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_161.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_162.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_EmpreendimentosAprovado27unid_163.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDiretriz2unid_164.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDefinitiva6unid_165.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosPrvia21unid_166.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_167.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_168.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAHospitalHELIPONTO_169.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_170.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_DeclividadeZonaUrbanaCopernicus30m_171.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_DeclividadeZonaRuralSulCopernicus30m_172.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_173.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_LoteamentosClandestinos3unid_174.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_LoteamentosClandestinos3unid_175.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_ParqueZumbidosPalmares_176.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_177.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_178.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacas_179.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_180.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_181.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_182.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipal_183.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_184.set('fieldLabels', {'fid': 'hidden field', 'Field1': 'inline label - visible with data', 'Field2': 'hidden field', 'Field3': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_185.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_186.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_187.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_188.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_189.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_190.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_191.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_192.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_193.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_194.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_195.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_196.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_197.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_198.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_199.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_200.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_201.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_202.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_203.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_204.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia19unid_205.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_206.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_207.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_208.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_209.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB28unid_210.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB28unid_211.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_212.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_213.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_214.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_215.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte8unid_216.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_Voorocas26unid_217.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_Voorocas26unid_217.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});