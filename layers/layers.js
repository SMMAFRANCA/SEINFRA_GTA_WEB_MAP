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
var format_reaN_10 = new ol.format.GeoJSON();
var features_reaN_10 = format_reaN_10.readFeatures(json_reaN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN_10.addFeatures(features_reaN_10);
var lyr_reaN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN_10, 
                style: style_reaN_10,
                popuplayertitle: 'Área N',
                interactive: true,
                title: '<img src="styles/legend/reaN_10.png" /> Área N'
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
var format_CondomnioIICityPetrpolis_35 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_35 = format_CondomnioIICityPetrpolis_35.readFeatures(json_CondomnioIICityPetrpolis_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_35.addFeatures(features_CondomnioIICityPetrpolis_35);
var lyr_CondomnioIICityPetrpolis_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_35, 
                style: style_CondomnioIICityPetrpolis_35,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
    title: 'Condomínio II City Petrópolis<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_35_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_35_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_35_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_35_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_35_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_35_5.png" /> RUAS<br />' });
var format_CondomnioIICityPetrpolis_36 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_36 = format_CondomnioIICityPetrpolis_36.readFeatures(json_CondomnioIICityPetrpolis_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_36.addFeatures(features_CondomnioIICityPetrpolis_36);
var lyr_CondomnioIICityPetrpolis_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_36, 
                style: style_CondomnioIICityPetrpolis_36,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioIICityPetrpolis_36.png" /> Condomínio II City Petrópolis'
            });
var format_CondomnioICityPetrpolis_37 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_37 = format_CondomnioICityPetrpolis_37.readFeatures(json_CondomnioICityPetrpolis_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_37.addFeatures(features_CondomnioICityPetrpolis_37);
var lyr_CondomnioICityPetrpolis_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_37, 
                style: style_CondomnioICityPetrpolis_37,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
    title: 'Condomínio I City Petrópolis<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_37_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_37_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_37_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_37_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_37_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_37_5.png" /> RUAS<br />' });
var format_CondomnioICityPetrpolis_38 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_38 = format_CondomnioICityPetrpolis_38.readFeatures(json_CondomnioICityPetrpolis_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_38.addFeatures(features_CondomnioICityPetrpolis_38);
var lyr_CondomnioICityPetrpolis_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_38, 
                style: style_CondomnioICityPetrpolis_38,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioICityPetrpolis_38.png" /> Condomínio I City Petrópolis'
            });
var format_EmpreendimentoArizona_39 = new ol.format.GeoJSON();
var features_EmpreendimentoArizona_39 = format_EmpreendimentoArizona_39.readFeatures(json_EmpreendimentoArizona_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoArizona_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoArizona_39.addFeatures(features_EmpreendimentoArizona_39);
var lyr_EmpreendimentoArizona_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoArizona_39, 
                style: style_EmpreendimentoArizona_39,
                popuplayertitle: 'Empreendimento Arizona',
                interactive: true,
    title: 'Empreendimento Arizona<br />\
    <img src="styles/legend/EmpreendimentoArizona_39_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoArizona_39_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoArizona_39_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoArizona_39_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoArizona_39_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoArizona_39_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoArizona_39_6.png" /> VIELA<br />' });
var format_EmpreendimentoArizona_40 = new ol.format.GeoJSON();
var features_EmpreendimentoArizona_40 = format_EmpreendimentoArizona_40.readFeatures(json_EmpreendimentoArizona_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoArizona_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoArizona_40.addFeatures(features_EmpreendimentoArizona_40);
var lyr_EmpreendimentoArizona_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoArizona_40, 
                style: style_EmpreendimentoArizona_40,
                popuplayertitle: 'Empreendimento Arizona',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoArizona_40.png" /> Empreendimento Arizona'
            });
var format_EmpreendimentoFazendaProgresso_41 = new ol.format.GeoJSON();
var features_EmpreendimentoFazendaProgresso_41 = format_EmpreendimentoFazendaProgresso_41.readFeatures(json_EmpreendimentoFazendaProgresso_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFazendaProgresso_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFazendaProgresso_41.addFeatures(features_EmpreendimentoFazendaProgresso_41);
var lyr_EmpreendimentoFazendaProgresso_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFazendaProgresso_41, 
                style: style_EmpreendimentoFazendaProgresso_41,
                popuplayertitle: 'Empreendimento Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoFazendaProgresso_41.png" /> Empreendimento Fazenda Progresso'
            });
var format_EmpreendimentoFazendaProgresso_42 = new ol.format.GeoJSON();
var features_EmpreendimentoFazendaProgresso_42 = format_EmpreendimentoFazendaProgresso_42.readFeatures(json_EmpreendimentoFazendaProgresso_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFazendaProgresso_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFazendaProgresso_42.addFeatures(features_EmpreendimentoFazendaProgresso_42);
var lyr_EmpreendimentoFazendaProgresso_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFazendaProgresso_42, 
                style: style_EmpreendimentoFazendaProgresso_42,
                popuplayertitle: 'Empreendimento Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoFazendaProgresso_42.png" /> Empreendimento Fazenda Progresso'
            });
var format_EmpreendimentoVillaBella_43 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaBella_43 = format_EmpreendimentoVillaBella_43.readFeatures(json_EmpreendimentoVillaBella_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaBella_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaBella_43.addFeatures(features_EmpreendimentoVillaBella_43);
var lyr_EmpreendimentoVillaBella_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaBella_43, 
                style: style_EmpreendimentoVillaBella_43,
                popuplayertitle: 'Empreendimento Villa Bella',
                interactive: true,
    title: 'Empreendimento Villa Bella<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_43_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_43_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_43_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_43_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_43_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_43_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_43_6.png" /> RUAS<br />' });
var format_EmpreendimentoVillaBella_44 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaBella_44 = format_EmpreendimentoVillaBella_44.readFeatures(json_EmpreendimentoVillaBella_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaBella_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaBella_44.addFeatures(features_EmpreendimentoVillaBella_44);
var lyr_EmpreendimentoVillaBella_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaBella_44, 
                style: style_EmpreendimentoVillaBella_44,
                popuplayertitle: 'Empreendimento Villa Bella',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaBella_44.png" /> Empreendimento Villa Bella'
            });
var format_EmpreendimentoVillaDoratta_45 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDoratta_45 = format_EmpreendimentoVillaDoratta_45.readFeatures(json_EmpreendimentoVillaDoratta_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDoratta_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDoratta_45.addFeatures(features_EmpreendimentoVillaDoratta_45);
var lyr_EmpreendimentoVillaDoratta_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDoratta_45, 
                style: style_EmpreendimentoVillaDoratta_45,
                popuplayertitle: 'Empreendimento Villa Doratta',
                interactive: true,
    title: 'Empreendimento Villa Doratta<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_45_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_45_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_45_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_45_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_45_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_45_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_45_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_45_7.png" /> VAGAS DE ESTACIONAMENTO<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_45_8.png" /> VIELA<br />' });
var format_EmpreendimentoVillaDoratta_46 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDoratta_46 = format_EmpreendimentoVillaDoratta_46.readFeatures(json_EmpreendimentoVillaDoratta_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDoratta_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDoratta_46.addFeatures(features_EmpreendimentoVillaDoratta_46);
var lyr_EmpreendimentoVillaDoratta_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDoratta_46, 
                style: style_EmpreendimentoVillaDoratta_46,
                popuplayertitle: 'Empreendimento Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaDoratta_46.png" /> Empreendimento Villa Doratta'
            });
var format_EmpreendimentoDioceseFranca_47 = new ol.format.GeoJSON();
var features_EmpreendimentoDioceseFranca_47 = format_EmpreendimentoDioceseFranca_47.readFeatures(json_EmpreendimentoDioceseFranca_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDioceseFranca_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDioceseFranca_47.addFeatures(features_EmpreendimentoDioceseFranca_47);
var lyr_EmpreendimentoDioceseFranca_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDioceseFranca_47, 
                style: style_EmpreendimentoDioceseFranca_47,
                popuplayertitle: 'Empreendimento Diocese Franca',
                interactive: true,
    title: 'Empreendimento Diocese Franca<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_47_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_47_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_47_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_47_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_47_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_47_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoDioceseFranca_47_6.png" /> RUAS<br />' });
var format_EmpreendimentoDioceseFranca_48 = new ol.format.GeoJSON();
var features_EmpreendimentoDioceseFranca_48 = format_EmpreendimentoDioceseFranca_48.readFeatures(json_EmpreendimentoDioceseFranca_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDioceseFranca_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDioceseFranca_48.addFeatures(features_EmpreendimentoDioceseFranca_48);
var lyr_EmpreendimentoDioceseFranca_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDioceseFranca_48, 
                style: style_EmpreendimentoDioceseFranca_48,
                popuplayertitle: 'Empreendimento Diocese Franca',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDioceseFranca_48.png" /> Empreendimento Diocese Franca'
            });
var format_EmpreendimentoAdonis_49 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_49 = format_EmpreendimentoAdonis_49.readFeatures(json_EmpreendimentoAdonis_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_49.addFeatures(features_EmpreendimentoAdonis_49);
var lyr_EmpreendimentoAdonis_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_49, 
                style: style_EmpreendimentoAdonis_49,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
    title: 'Empreendimento Adonis<br />\
    <img src="styles/legend/EmpreendimentoAdonis_49_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoAdonis_49_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoAdonis_49_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoAdonis_49_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoAdonis_49_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoAdonis_49_5.png" /> RUAS<br />' });
var format_EmpreendimentoAdonis_50 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_50 = format_EmpreendimentoAdonis_50.readFeatures(json_EmpreendimentoAdonis_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_50.addFeatures(features_EmpreendimentoAdonis_50);
var lyr_EmpreendimentoAdonis_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_50, 
                style: style_EmpreendimentoAdonis_50,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAdonis_50.png" /> Empreendimento Adonis'
            });
var format_EmpreendimentoInfratecinica_51 = new ol.format.GeoJSON();
var features_EmpreendimentoInfratecinica_51 = format_EmpreendimentoInfratecinica_51.readFeatures(json_EmpreendimentoInfratecinica_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoInfratecinica_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoInfratecinica_51.addFeatures(features_EmpreendimentoInfratecinica_51);
var lyr_EmpreendimentoInfratecinica_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoInfratecinica_51, 
                style: style_EmpreendimentoInfratecinica_51,
                popuplayertitle: 'Empreendimento Infratecinica',
                interactive: true,
    title: 'Empreendimento Infratecinica<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_51_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_51_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_51_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_51_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_51_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoInfratecinica_51_5.png" /> RUAS<br />' });
var format_EmpreendimentoInfratecinica_52 = new ol.format.GeoJSON();
var features_EmpreendimentoInfratecinica_52 = format_EmpreendimentoInfratecinica_52.readFeatures(json_EmpreendimentoInfratecinica_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoInfratecinica_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoInfratecinica_52.addFeatures(features_EmpreendimentoInfratecinica_52);
var lyr_EmpreendimentoInfratecinica_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoInfratecinica_52, 
                style: style_EmpreendimentoInfratecinica_52,
                popuplayertitle: 'Empreendimento Infratecinica',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoInfratecinica_52.png" /> Empreendimento Infratecinica'
            });
var format_EmpreendimentoResidencialBoaVista_53 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialBoaVista_53 = format_EmpreendimentoResidencialBoaVista_53.readFeatures(json_EmpreendimentoResidencialBoaVista_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialBoaVista_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialBoaVista_53.addFeatures(features_EmpreendimentoResidencialBoaVista_53);
var lyr_EmpreendimentoResidencialBoaVista_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialBoaVista_53, 
                style: style_EmpreendimentoResidencialBoaVista_53,
                popuplayertitle: 'Empreendimento Residencial Boa Vista',
                interactive: true,
    title: 'Empreendimento Residencial Boa Vista<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_53_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_53_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_53_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_53_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_53_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_53_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_53_6.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_53_7.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialBoaVista_54 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialBoaVista_54 = format_EmpreendimentoResidencialBoaVista_54.readFeatures(json_EmpreendimentoResidencialBoaVista_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialBoaVista_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialBoaVista_54.addFeatures(features_EmpreendimentoResidencialBoaVista_54);
var lyr_EmpreendimentoResidencialBoaVista_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialBoaVista_54, 
                style: style_EmpreendimentoResidencialBoaVista_54,
                popuplayertitle: 'Empreendimento Residencial Boa Vista',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialBoaVista_54.png" /> Empreendimento Residencial Boa Vista'
            });
var format_EmpreendimentoCondomnioResicencialTerraNova_55 = new ol.format.GeoJSON();
var features_EmpreendimentoCondomnioResicencialTerraNova_55 = format_EmpreendimentoCondomnioResicencialTerraNova_55.readFeatures(json_EmpreendimentoCondomnioResicencialTerraNova_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCondomnioResicencialTerraNova_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCondomnioResicencialTerraNova_55.addFeatures(features_EmpreendimentoCondomnioResicencialTerraNova_55);
var lyr_EmpreendimentoCondomnioResicencialTerraNova_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCondomnioResicencialTerraNova_55, 
                style: style_EmpreendimentoCondomnioResicencialTerraNova_55,
                popuplayertitle: 'Empreendimento Condomínio Resicencial Terra Nova',
                interactive: true,
    title: 'Empreendimento Condomínio Resicencial Terra Nova<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_55_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_55_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_55_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_55_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_55_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_55_5.png" /> RUAS<br />' });
var format_EmpreendimentoCondomnioResicencialTerraNova_56 = new ol.format.GeoJSON();
var features_EmpreendimentoCondomnioResicencialTerraNova_56 = format_EmpreendimentoCondomnioResicencialTerraNova_56.readFeatures(json_EmpreendimentoCondomnioResicencialTerraNova_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCondomnioResicencialTerraNova_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCondomnioResicencialTerraNova_56.addFeatures(features_EmpreendimentoCondomnioResicencialTerraNova_56);
var lyr_EmpreendimentoCondomnioResicencialTerraNova_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCondomnioResicencialTerraNova_56, 
                style: style_EmpreendimentoCondomnioResicencialTerraNova_56,
                popuplayertitle: 'Empreendimento Condomínio Resicencial Terra Nova',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoCondomnioResicencialTerraNova_56.png" /> Empreendimento Condomínio Resicencial Terra Nova'
            });
var format_EmpreendimentoVillaDiEspanhaIII_57 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDiEspanhaIII_57 = format_EmpreendimentoVillaDiEspanhaIII_57.readFeatures(json_EmpreendimentoVillaDiEspanhaIII_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDiEspanhaIII_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDiEspanhaIII_57.addFeatures(features_EmpreendimentoVillaDiEspanhaIII_57);
var lyr_EmpreendimentoVillaDiEspanhaIII_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDiEspanhaIII_57, 
                style: style_EmpreendimentoVillaDiEspanhaIII_57,
                popuplayertitle: 'Empreendimento Villa Di Espanha I/II',
                interactive: true,
    title: 'Empreendimento Villa Di Espanha I/II<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_57_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_57_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_57_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_57_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_57_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_57_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_57_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_57_7.png" /> VIELA<br />' });
var format_EmpreendimentoVillaDiEspanhaIII_58 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDiEspanhaIII_58 = format_EmpreendimentoVillaDiEspanhaIII_58.readFeatures(json_EmpreendimentoVillaDiEspanhaIII_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDiEspanhaIII_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDiEspanhaIII_58.addFeatures(features_EmpreendimentoVillaDiEspanhaIII_58);
var lyr_EmpreendimentoVillaDiEspanhaIII_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDiEspanhaIII_58, 
                style: style_EmpreendimentoVillaDiEspanhaIII_58,
                popuplayertitle: 'Empreendimento Villa Di Espanha I/II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaDiEspanhaIII_58.png" /> Empreendimento Villa Di Espanha I/II'
            });
var format_EmpreendimentoSoCarlosII_59 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_59 = format_EmpreendimentoSoCarlosII_59.readFeatures(json_EmpreendimentoSoCarlosII_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_59.addFeatures(features_EmpreendimentoSoCarlosII_59);
var lyr_EmpreendimentoSoCarlosII_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_59, 
                style: style_EmpreendimentoSoCarlosII_59,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
    title: 'Empreendimento São Carlos II<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_59_0.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_59_1.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_59_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_59_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_59_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_59_5.png" /> RUAS<br />' });
var format_EmpreendimentoSoCarlosII_60 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_60 = format_EmpreendimentoSoCarlosII_60.readFeatures(json_EmpreendimentoSoCarlosII_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_60.addFeatures(features_EmpreendimentoSoCarlosII_60);
var lyr_EmpreendimentoSoCarlosII_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_60, 
                style: style_EmpreendimentoSoCarlosII_60,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSoCarlosII_60.png" /> Empreendimento São Carlos II'
            });
var format_EmpreendimentoParqueFlora_61 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_61 = format_EmpreendimentoParqueFlora_61.readFeatures(json_EmpreendimentoParqueFlora_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_61.addFeatures(features_EmpreendimentoParqueFlora_61);
var lyr_EmpreendimentoParqueFlora_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_61, 
                style: style_EmpreendimentoParqueFlora_61,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
    title: 'Empreendimento Parque Flora<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_61_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_61_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_61_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_61_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_61_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_61_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_61_6.png" /> VIELA<br />' });
var format_EmpreendimentoParqueFlora_62 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_62 = format_EmpreendimentoParqueFlora_62.readFeatures(json_EmpreendimentoParqueFlora_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_62.addFeatures(features_EmpreendimentoParqueFlora_62);
var lyr_EmpreendimentoParqueFlora_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_62, 
                style: style_EmpreendimentoParqueFlora_62,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueFlora_62.png" /> Empreendimento Parque Flora'
            });
var format_EmpreendimentoVittaSoVicente_63 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_63 = format_EmpreendimentoVittaSoVicente_63.readFeatures(json_EmpreendimentoVittaSoVicente_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_63.addFeatures(features_EmpreendimentoVittaSoVicente_63);
var lyr_EmpreendimentoVittaSoVicente_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_63, 
                style: style_EmpreendimentoVittaSoVicente_63,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
    title: 'Empreendimento Vitta São Vicente<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_63_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_63_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_63_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_63_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_63_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_63_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVittaSoVicente_64 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_64 = format_EmpreendimentoVittaSoVicente_64.readFeatures(json_EmpreendimentoVittaSoVicente_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_64.addFeatures(features_EmpreendimentoVittaSoVicente_64);
var lyr_EmpreendimentoVittaSoVicente_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_64, 
                style: style_EmpreendimentoVittaSoVicente_64,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaSoVicente_64.png" /> Empreendimento Vitta São Vicente'
            });
var format_EmpreendimentoRecantoMeneghetti_65 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_65 = format_EmpreendimentoRecantoMeneghetti_65.readFeatures(json_EmpreendimentoRecantoMeneghetti_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_65.addFeatures(features_EmpreendimentoRecantoMeneghetti_65);
var lyr_EmpreendimentoRecantoMeneghetti_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_65, 
                style: style_EmpreendimentoRecantoMeneghetti_65,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
    title: 'Empreendimento Recanto Meneghetti<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_65_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_65_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_65_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_65_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_65_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_65_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_65_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_65_7.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_65_8.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_65_9.png" /> VIELA<br />' });
var format_EmpreendimentoRecantoMeneghetti_66 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_66 = format_EmpreendimentoRecantoMeneghetti_66.readFeatures(json_EmpreendimentoRecantoMeneghetti_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_66.addFeatures(features_EmpreendimentoRecantoMeneghetti_66);
var lyr_EmpreendimentoRecantoMeneghetti_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_66, 
                style: style_EmpreendimentoRecantoMeneghetti_66,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoRecantoMeneghetti_66.png" /> Empreendimento Recanto Meneghetti'
            });
var format_EmpreendimentoParquedosSabias_67 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_67 = format_EmpreendimentoParquedosSabias_67.readFeatures(json_EmpreendimentoParquedosSabias_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_67.addFeatures(features_EmpreendimentoParquedosSabias_67);
var lyr_EmpreendimentoParquedosSabias_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_67, 
                style: style_EmpreendimentoParquedosSabias_67,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
    title: 'Empreendimento Parque dos Sabias<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_67_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_67_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_67_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_67_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_67_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_67_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_67_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_67_7.png" /> VIELA<br />' });
var format_EmpreendimentoParquedosSabias_68 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_68 = format_EmpreendimentoParquedosSabias_68.readFeatures(json_EmpreendimentoParquedosSabias_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_68.addFeatures(features_EmpreendimentoParquedosSabias_68);
var lyr_EmpreendimentoParquedosSabias_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_68, 
                style: style_EmpreendimentoParquedosSabias_68,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquedosSabias_68.png" /> Empreendimento Parque dos Sabias'
            });
var format_EmpreendimentoMoradadaMata_69 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_69 = format_EmpreendimentoMoradadaMata_69.readFeatures(json_EmpreendimentoMoradadaMata_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_69.addFeatures(features_EmpreendimentoMoradadaMata_69);
var lyr_EmpreendimentoMoradadaMata_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_69, 
                style: style_EmpreendimentoMoradadaMata_69,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
    title: 'Empreendimento Morada da Mata<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_69_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_69_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_69_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_69_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_69_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_69_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_69_6.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_69_7.png" /> RUAS<br />' });
var format_EmpreendimentoMoradadaMata_70 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_70 = format_EmpreendimentoMoradadaMata_70.readFeatures(json_EmpreendimentoMoradadaMata_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_70.addFeatures(features_EmpreendimentoMoradadaMata_70);
var lyr_EmpreendimentoMoradadaMata_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_70, 
                style: style_EmpreendimentoMoradadaMata_70,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadaMata_70.png" /> Empreendimento Morada da Mata'
            });
var format_EmpreendimentoIrineuZanetiII_71 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_71 = format_EmpreendimentoIrineuZanetiII_71.readFeatures(json_EmpreendimentoIrineuZanetiII_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_71.addFeatures(features_EmpreendimentoIrineuZanetiII_71);
var lyr_EmpreendimentoIrineuZanetiII_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_71, 
                style: style_EmpreendimentoIrineuZanetiII_71,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
    title: 'Empreendimento Irineu Zaneti II<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_71_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_71_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_71_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_71_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_71_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_71_5.png" /> RUAS<br />' });
var format_EmpreendimentoIrineuZanetiII_72 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_72 = format_EmpreendimentoIrineuZanetiII_72.readFeatures(json_EmpreendimentoIrineuZanetiII_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_72.addFeatures(features_EmpreendimentoIrineuZanetiII_72);
var lyr_EmpreendimentoIrineuZanetiII_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_72, 
                style: style_EmpreendimentoIrineuZanetiII_72,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoIrineuZanetiII_72.png" /> Empreendimento Irineu Zaneti II'
            });
var format_EmpreendimentoResidencialJabuticabeiras_73 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_73 = format_EmpreendimentoResidencialJabuticabeiras_73.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_73.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_73);
var lyr_EmpreendimentoResidencialJabuticabeiras_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_73, 
                style: style_EmpreendimentoResidencialJabuticabeiras_73,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
    title: 'Empreendimento Residencial Jabuticabeiras<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_73_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_73_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_73_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_73_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_73_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_73_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_73_6.png" /> VIELA<br />' });
var format_EmpreendimentoResidencialJabuticabeiras_74 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_74 = format_EmpreendimentoResidencialJabuticabeiras_74.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_74.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_74);
var lyr_EmpreendimentoResidencialJabuticabeiras_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_74, 
                style: style_EmpreendimentoResidencialJabuticabeiras_74,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_74.png" /> Empreendimento Residencial Jabuticabeiras'
            });
var format_EmpreendimentoResidencialMarianaAlarcon_75 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_75 = format_EmpreendimentoResidencialMarianaAlarcon_75.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_75.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_75);
var lyr_EmpreendimentoResidencialMarianaAlarcon_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_75, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_75,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
    title: 'Empreendimento Residencial Mariana Alarcon<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_75_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_75_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_75_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_75_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_75_4.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_75_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_75_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialMarianaAlarcon_76 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_76 = format_EmpreendimentoResidencialMarianaAlarcon_76.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_76.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_76);
var lyr_EmpreendimentoResidencialMarianaAlarcon_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_76, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_76,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_76.png" /> Empreendimento Residencial Mariana Alarcon'
            });
var format_EmpreendimentoResidencialCintraAlves_77 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_77 = format_EmpreendimentoResidencialCintraAlves_77.readFeatures(json_EmpreendimentoResidencialCintraAlves_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_77.addFeatures(features_EmpreendimentoResidencialCintraAlves_77);
var lyr_EmpreendimentoResidencialCintraAlves_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_77, 
                style: style_EmpreendimentoResidencialCintraAlves_77,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
    title: 'Empreendimento Residencial Cintra Alves<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_77_0.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_77_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_77_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_77_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_77_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_77_5.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_77_6.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_77_7.png" /> Viela<br />' });
var format_EmpreendimentoResidencialCintraAlves_78 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_78 = format_EmpreendimentoResidencialCintraAlves_78.readFeatures(json_EmpreendimentoResidencialCintraAlves_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_78.addFeatures(features_EmpreendimentoResidencialCintraAlves_78);
var lyr_EmpreendimentoResidencialCintraAlves_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_78, 
                style: style_EmpreendimentoResidencialCintraAlves_78,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialCintraAlves_78.png" /> Empreendimento Residencial Cintra Alves'
            });
var format_EmpreendimentoLoteamentolamo_79 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_79 = format_EmpreendimentoLoteamentolamo_79.readFeatures(json_EmpreendimentoLoteamentolamo_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_79.addFeatures(features_EmpreendimentoLoteamentolamo_79);
var lyr_EmpreendimentoLoteamentolamo_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_79, 
                style: style_EmpreendimentoLoteamentolamo_79,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
    title: 'Empreendimento Loteamento Álamo <br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_79_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_79_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_79_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_79_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_79_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_79_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_79_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_79_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_79_8.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_79_9.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_79_10.png" /> VIELA<br />' });
var format_EmpreendimentoLoteamentolamo_80 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_80 = format_EmpreendimentoLoteamentolamo_80.readFeatures(json_EmpreendimentoLoteamentolamo_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_80.addFeatures(features_EmpreendimentoLoteamentolamo_80);
var lyr_EmpreendimentoLoteamentolamo_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_80, 
                style: style_EmpreendimentoLoteamentolamo_80,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoLoteamentolamo_80.png" /> Empreendimento Loteamento Álamo '
            });
var format_EmpreendimentoSantaLina_81 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_81 = format_EmpreendimentoSantaLina_81.readFeatures(json_EmpreendimentoSantaLina_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_81.addFeatures(features_EmpreendimentoSantaLina_81);
var lyr_EmpreendimentoSantaLina_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_81, 
                style: style_EmpreendimentoSantaLina_81,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
    title: 'Empreendimento Santa Lina<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_81_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_81_1.png" /> Lotes/Quadras<br />' });
var format_EmpreendimentoSantaLina_82 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_82 = format_EmpreendimentoSantaLina_82.readFeatures(json_EmpreendimentoSantaLina_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_82.addFeatures(features_EmpreendimentoSantaLina_82);
var lyr_EmpreendimentoSantaLina_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_82, 
                style: style_EmpreendimentoSantaLina_82,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSantaLina_82.png" /> Empreendimento Santa Lina'
            });
var format_EmpreendimentoResidencialPousoAlegreII_83 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegreII_83 = format_EmpreendimentoResidencialPousoAlegreII_83.readFeatures(json_EmpreendimentoResidencialPousoAlegreII_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegreII_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegreII_83.addFeatures(features_EmpreendimentoResidencialPousoAlegreII_83);
var lyr_EmpreendimentoResidencialPousoAlegreII_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegreII_83, 
                style: style_EmpreendimentoResidencialPousoAlegreII_83,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre II',
                interactive: true,
    title: 'Empreendimento Residencial Pouso Alegre II<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_83_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_83_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_83_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_83_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_83_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_83_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_83_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_83_7.png" /> SERVIDAO<br />' });
var format_EmpreendimentoResidencialPousoAlegreII_84 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegreII_84 = format_EmpreendimentoResidencialPousoAlegreII_84.readFeatures(json_EmpreendimentoResidencialPousoAlegreII_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegreII_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegreII_84.addFeatures(features_EmpreendimentoResidencialPousoAlegreII_84);
var lyr_EmpreendimentoResidencialPousoAlegreII_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegreII_84, 
                style: style_EmpreendimentoResidencialPousoAlegreII_84,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_84.png" /> Empreendimento Residencial Pouso Alegre II'
            });
var format_EmpreendimentoResidencialPousoAlegre_85 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_85 = format_EmpreendimentoResidencialPousoAlegre_85.readFeatures(json_EmpreendimentoResidencialPousoAlegre_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_85.addFeatures(features_EmpreendimentoResidencialPousoAlegre_85);
var lyr_EmpreendimentoResidencialPousoAlegre_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_85, 
                style: style_EmpreendimentoResidencialPousoAlegre_85,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
    title: 'Empreendimento Residencial Pouso Alegre<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_85_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_85_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_85_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_85_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_85_4.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_85_5.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_85_6.png" /> Viela<br />' });
var format_EmpreendimentoResidencialPousoAlegre_86 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_86 = format_EmpreendimentoResidencialPousoAlegre_86.readFeatures(json_EmpreendimentoResidencialPousoAlegre_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_86.addFeatures(features_EmpreendimentoResidencialPousoAlegre_86);
var lyr_EmpreendimentoResidencialPousoAlegre_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_86, 
                style: style_EmpreendimentoResidencialPousoAlegre_86,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialPousoAlegre_86.png" /> Empreendimento Residencial Pouso Alegre'
            });
var format_EmpreendimentoResidencialAltodaFazenda_87 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_87 = format_EmpreendimentoResidencialAltodaFazenda_87.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_87.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_87);
var lyr_EmpreendimentoResidencialAltodaFazenda_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_87, 
                style: style_EmpreendimentoResidencialAltodaFazenda_87,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
    title: 'Empreendimento Residencial Alto da Fazenda <br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_87_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_87_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_87_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_87_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_87_4.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialAltodaFazenda_88 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_88 = format_EmpreendimentoResidencialAltodaFazenda_88.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_88.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_88);
var lyr_EmpreendimentoResidencialAltodaFazenda_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_88, 
                style: style_EmpreendimentoResidencialAltodaFazenda_88,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_88.png" /> Empreendimento Residencial Alto da Fazenda '
            });
var format_EmpreendimentoResidencialMarioTasso_89 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_89 = format_EmpreendimentoResidencialMarioTasso_89.readFeatures(json_EmpreendimentoResidencialMarioTasso_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_89.addFeatures(features_EmpreendimentoResidencialMarioTasso_89);
var lyr_EmpreendimentoResidencialMarioTasso_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_89, 
                style: style_EmpreendimentoResidencialMarioTasso_89,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
    title: 'Empreendimento Residencial Mario Tasso<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_89_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_89_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_89_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_89_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_89_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialMarioTasso_90 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_90 = format_EmpreendimentoResidencialMarioTasso_90.readFeatures(json_EmpreendimentoResidencialMarioTasso_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_90.addFeatures(features_EmpreendimentoResidencialMarioTasso_90);
var lyr_EmpreendimentoResidencialMarioTasso_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_90, 
                style: style_EmpreendimentoResidencialMarioTasso_90,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarioTasso_90.png" /> Empreendimento Residencial Mario Tasso'
            });
var format_EmpreendimentoResidenciaisVivenna_91 = new ol.format.GeoJSON();
var features_EmpreendimentoResidenciaisVivenna_91 = format_EmpreendimentoResidenciaisVivenna_91.readFeatures(json_EmpreendimentoResidenciaisVivenna_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidenciaisVivenna_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidenciaisVivenna_91.addFeatures(features_EmpreendimentoResidenciaisVivenna_91);
var lyr_EmpreendimentoResidenciaisVivenna_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidenciaisVivenna_91, 
                style: style_EmpreendimentoResidenciaisVivenna_91,
                popuplayertitle: 'Empreendimento Residenciais Vivenna',
                interactive: true,
    title: 'Empreendimento Residenciais Vivenna<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_91_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_91_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_91_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_91_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_91_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_91_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_91_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_91_7.png" /> VIELA<br />' });
var format_EmpreendimentoResidenciaisVivenna_92 = new ol.format.GeoJSON();
var features_EmpreendimentoResidenciaisVivenna_92 = format_EmpreendimentoResidenciaisVivenna_92.readFeatures(json_EmpreendimentoResidenciaisVivenna_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidenciaisVivenna_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidenciaisVivenna_92.addFeatures(features_EmpreendimentoResidenciaisVivenna_92);
var lyr_EmpreendimentoResidenciaisVivenna_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidenciaisVivenna_92, 
                style: style_EmpreendimentoResidenciaisVivenna_92,
                popuplayertitle: 'Empreendimento Residenciais Vivenna',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidenciaisVivenna_92.png" /> Empreendimento Residenciais Vivenna'
            });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_93 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_93 = format_EmpreendimentoAbuDhabiParadiseResortResidence_93.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_93.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_93);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_93, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_93,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Empreendimento Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_93_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_93_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_93_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_93_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_93_4.png" /> Área Non Edificandi<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_93_5.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_93_6.png" /> Passeio<br />' });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_94 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_94 = format_EmpreendimentoAbuDhabiParadiseResortResidence_94.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_94.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_94);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_94, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_94,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_94.png" /> Empreendimento Abu Dhabi Paradise Resort Residence'
            });
var format_EmprendimentoElias_95 = new ol.format.GeoJSON();
var features_EmprendimentoElias_95 = format_EmprendimentoElias_95.readFeatures(json_EmprendimentoElias_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_95.addFeatures(features_EmprendimentoElias_95);
var lyr_EmprendimentoElias_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_95, 
                style: style_EmprendimentoElias_95,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
    title: 'Emprendimento Elias<br />\
    <img src="styles/legend/EmprendimentoElias_95_0.png" /> Ruas<br />\
    <img src="styles/legend/EmprendimentoElias_95_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmprendimentoElias_95_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmprendimentoElias_95_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmprendimentoElias_95_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmprendimentoElias_95_5.png" /> Passeio<br />\
    <img src="styles/legend/EmprendimentoElias_95_6.png" /> Lotes mistos<br />' });
var format_EmprendimentoElias_96 = new ol.format.GeoJSON();
var features_EmprendimentoElias_96 = format_EmprendimentoElias_96.readFeatures(json_EmprendimentoElias_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_96.addFeatures(features_EmprendimentoElias_96);
var lyr_EmprendimentoElias_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_96, 
                style: style_EmprendimentoElias_96,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
                title: '<img src="styles/legend/EmprendimentoElias_96.png" /> Emprendimento Elias'
            });
var format_EmpreendimentoResidencialSoCarlosI_97 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_97 = format_EmpreendimentoResidencialSoCarlosI_97.readFeatures(json_EmpreendimentoResidencialSoCarlosI_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_97.addFeatures(features_EmpreendimentoResidencialSoCarlosI_97);
var lyr_EmpreendimentoResidencialSoCarlosI_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_97, 
                style: style_EmpreendimentoResidencialSoCarlosI_97,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
    title: 'Empreendimento Residencial São Carlos I<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_97_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_97_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_97_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_97_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_97_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSoCarlosI_98 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_98 = format_EmpreendimentoResidencialSoCarlosI_98.readFeatures(json_EmpreendimentoResidencialSoCarlosI_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_98.addFeatures(features_EmpreendimentoResidencialSoCarlosI_98);
var lyr_EmpreendimentoResidencialSoCarlosI_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_98, 
                style: style_EmpreendimentoResidencialSoCarlosI_98,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSoCarlosI_98.png" /> Empreendimento Residencial São Carlos I'
            });
var format_EmpreendimentoMonti_99 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_99 = format_EmpreendimentoMonti_99.readFeatures(json_EmpreendimentoMonti_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_99.addFeatures(features_EmpreendimentoMonti_99);
var lyr_EmpreendimentoMonti_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_99, 
                style: style_EmpreendimentoMonti_99,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
    title: 'Empreendimento Montié<br />\
    <img src="styles/legend/EmpreendimentoMonti_99_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMonti_99_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMonti_99_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMonti_99_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMonti_99_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMonti_99_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoMonti_100 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_100 = format_EmpreendimentoMonti_100.readFeatures(json_EmpreendimentoMonti_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_100.addFeatures(features_EmpreendimentoMonti_100);
var lyr_EmpreendimentoMonti_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_100, 
                style: style_EmpreendimentoMonti_100,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMonti_100.png" /> Empreendimento Montié'
            });
var format_EmpreendimentoResidencialMoradadoBosque_101 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_101 = format_EmpreendimentoResidencialMoradadoBosque_101.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_101.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_101);
var lyr_EmpreendimentoResidencialMoradadoBosque_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_101, 
                style: style_EmpreendimentoResidencialMoradadoBosque_101,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
    title: 'Empreendimento Residencial Morada do Bosque<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_101_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_101_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_101_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_101_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_101_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_101_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_101_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialMoradadoBosque_102 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_102 = format_EmpreendimentoResidencialMoradadoBosque_102.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_102.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_102);
var lyr_EmpreendimentoResidencialMoradadoBosque_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_102, 
                style: style_EmpreendimentoResidencialMoradadoBosque_102,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_102.png" /> Empreendimento Residencial Morada do Bosque'
            });
var format_EmpreendimentoVittaAlvorada_103 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_103 = format_EmpreendimentoVittaAlvorada_103.readFeatures(json_EmpreendimentoVittaAlvorada_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_103.addFeatures(features_EmpreendimentoVittaAlvorada_103);
var lyr_EmpreendimentoVittaAlvorada_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_103, 
                style: style_EmpreendimentoVittaAlvorada_103,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
    title: 'Empreendimento Vitta Alvorada<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_103_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_103_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_103_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_103_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_103_4.png" /> A-PROP-LINE<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_103_5.png" /> Passeio<br />' });
var format_EmpreendimentoVittaAlvorada_104 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_104 = format_EmpreendimentoVittaAlvorada_104.readFeatures(json_EmpreendimentoVittaAlvorada_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_104.addFeatures(features_EmpreendimentoVittaAlvorada_104);
var lyr_EmpreendimentoVittaAlvorada_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_104, 
                style: style_EmpreendimentoVittaAlvorada_104,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaAlvorada_104.png" /> Empreendimento Vitta Alvorada'
            });
var format_EmpreendimentoResidencialMarthaHelena_105 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_105 = format_EmpreendimentoResidencialMarthaHelena_105.readFeatures(json_EmpreendimentoResidencialMarthaHelena_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_105.addFeatures(features_EmpreendimentoResidencialMarthaHelena_105);
var lyr_EmpreendimentoResidencialMarthaHelena_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_105, 
                style: style_EmpreendimentoResidencialMarthaHelena_105,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
    title: 'Empreendimento Residencial Martha Helena<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_105_0.png" /> 0<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_105_1.png" /> Zona de Uso Residencial<br />' });
var format_EmpreendimentoResidencialMarthaHelena_106 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_106 = format_EmpreendimentoResidencialMarthaHelena_106.readFeatures(json_EmpreendimentoResidencialMarthaHelena_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_106.addFeatures(features_EmpreendimentoResidencialMarthaHelena_106);
var lyr_EmpreendimentoResidencialMarthaHelena_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_106, 
                style: style_EmpreendimentoResidencialMarthaHelena_106,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarthaHelena_106.png" /> Empreendimento Residencial Martha Helena'
            });
var format_EmpreendimentoResidencialYasminTorres_107 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_107 = format_EmpreendimentoResidencialYasminTorres_107.readFeatures(json_EmpreendimentoResidencialYasminTorres_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_107.addFeatures(features_EmpreendimentoResidencialYasminTorres_107);
var lyr_EmpreendimentoResidencialYasminTorres_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_107, 
                style: style_EmpreendimentoResidencialYasminTorres_107,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_107.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoResidencialYasminTorres_108 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_108 = format_EmpreendimentoResidencialYasminTorres_108.readFeatures(json_EmpreendimentoResidencialYasminTorres_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_108.addFeatures(features_EmpreendimentoResidencialYasminTorres_108);
var lyr_EmpreendimentoResidencialYasminTorres_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_108, 
                style: style_EmpreendimentoResidencialYasminTorres_108,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_108.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoPalmeiraReal_109 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_109 = format_EmpreendimentoPalmeiraReal_109.readFeatures(json_EmpreendimentoPalmeiraReal_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_109.addFeatures(features_EmpreendimentoPalmeiraReal_109);
var lyr_EmpreendimentoPalmeiraReal_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_109, 
                style: style_EmpreendimentoPalmeiraReal_109,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
    title: 'Empreendimento Palmeira Real<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_109_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_109_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_109_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_109_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_109_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_109_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoPalmeiraReal_110 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_110 = format_EmpreendimentoPalmeiraReal_110.readFeatures(json_EmpreendimentoPalmeiraReal_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_110.addFeatures(features_EmpreendimentoPalmeiraReal_110);
var lyr_EmpreendimentoPalmeiraReal_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_110, 
                style: style_EmpreendimentoPalmeiraReal_110,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoPalmeiraReal_110.png" /> Empreendimento Palmeira Real'
            });
var format_EmpreendimentoEssence_111 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_111 = format_EmpreendimentoEssence_111.readFeatures(json_EmpreendimentoEssence_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_111.addFeatures(features_EmpreendimentoEssence_111);
var lyr_EmpreendimentoEssence_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_111, 
                style: style_EmpreendimentoEssence_111,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_111.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoEssence_112 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_112 = format_EmpreendimentoEssence_112.readFeatures(json_EmpreendimentoEssence_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_112.addFeatures(features_EmpreendimentoEssence_112);
var lyr_EmpreendimentoEssence_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_112, 
                style: style_EmpreendimentoEssence_112,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_112.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoVersalhes_113 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_113 = format_EmpreendimentoVersalhes_113.readFeatures(json_EmpreendimentoVersalhes_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_113.addFeatures(features_EmpreendimentoVersalhes_113);
var lyr_EmpreendimentoVersalhes_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_113, 
                style: style_EmpreendimentoVersalhes_113,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
    title: 'Empreendimento Versalhes<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_113_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_113_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_113_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_113_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_113_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_113_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVersalhes_114 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_114 = format_EmpreendimentoVersalhes_114.readFeatures(json_EmpreendimentoVersalhes_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_114.addFeatures(features_EmpreendimentoVersalhes_114);
var lyr_EmpreendimentoVersalhes_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_114, 
                style: style_EmpreendimentoVersalhes_114,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVersalhes_114.png" /> Empreendimento Versalhes'
            });
var format_EmpreendimentoSonetto_115 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_115 = format_EmpreendimentoSonetto_115.readFeatures(json_EmpreendimentoSonetto_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_115.addFeatures(features_EmpreendimentoSonetto_115);
var lyr_EmpreendimentoSonetto_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_115, 
                style: style_EmpreendimentoSonetto_115,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_115.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoSonetto_116 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_116 = format_EmpreendimentoSonetto_116.readFeatures(json_EmpreendimentoSonetto_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_116.addFeatures(features_EmpreendimentoSonetto_116);
var lyr_EmpreendimentoSonetto_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_116, 
                style: style_EmpreendimentoSonetto_116,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_116.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoResidencialSantaIns_117 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_117 = format_EmpreendimentoResidencialSantaIns_117.readFeatures(json_EmpreendimentoResidencialSantaIns_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_117.addFeatures(features_EmpreendimentoResidencialSantaIns_117);
var lyr_EmpreendimentoResidencialSantaIns_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_117, 
                style: style_EmpreendimentoResidencialSantaIns_117,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
    title: 'Empreendimento Residencial Santa Inês<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_117_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_117_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_117_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_117_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_117_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_117_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaIns_118 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_118 = format_EmpreendimentoResidencialSantaIns_118.readFeatures(json_EmpreendimentoResidencialSantaIns_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_118.addFeatures(features_EmpreendimentoResidencialSantaIns_118);
var lyr_EmpreendimentoResidencialSantaIns_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_118, 
                style: style_EmpreendimentoResidencialSantaIns_118,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaIns_118.png" /> Empreendimento Residencial Santa Inês'
            });
var format_EmpreendimentoEdifcioSolNascente_119 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_119 = format_EmpreendimentoEdifcioSolNascente_119.readFeatures(json_EmpreendimentoEdifcioSolNascente_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_119.addFeatures(features_EmpreendimentoEdifcioSolNascente_119);
var lyr_EmpreendimentoEdifcioSolNascente_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_119, 
                style: style_EmpreendimentoEdifcioSolNascente_119,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_119.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoEdifcioSolNascente_120 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_120 = format_EmpreendimentoEdifcioSolNascente_120.readFeatures(json_EmpreendimentoEdifcioSolNascente_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_120.addFeatures(features_EmpreendimentoEdifcioSolNascente_120);
var lyr_EmpreendimentoEdifcioSolNascente_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_120, 
                style: style_EmpreendimentoEdifcioSolNascente_120,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_120.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoResidencialQuintadosOitis_121 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_121 = format_EmpreendimentoResidencialQuintadosOitis_121.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_121.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_121);
var lyr_EmpreendimentoResidencialQuintadosOitis_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_121, 
                style: style_EmpreendimentoResidencialQuintadosOitis_121,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Empreendimento Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_121_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_121_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_121_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_121_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_121_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_121_5.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialQuintadosOitis_122 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_122 = format_EmpreendimentoResidencialQuintadosOitis_122.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_122.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_122);
var lyr_EmpreendimentoResidencialQuintadosOitis_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_122, 
                style: style_EmpreendimentoResidencialQuintadosOitis_122,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_122.png" /> Empreendimento Residencial Quinta dos Oitis'
            });
var format_EmpreendimentoResidencialQuintadoSol_123 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_123 = format_EmpreendimentoResidencialQuintadoSol_123.readFeatures(json_EmpreendimentoResidencialQuintadoSol_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_123.addFeatures(features_EmpreendimentoResidencialQuintadoSol_123);
var lyr_EmpreendimentoResidencialQuintadoSol_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_123, 
                style: style_EmpreendimentoResidencialQuintadoSol_123,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
    title: 'Empreendimento Residencial Quinta do Sol<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_123_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_123_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_123_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_123_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_123_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_123_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_123_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialQuintadoSol_124 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_124 = format_EmpreendimentoResidencialQuintadoSol_124.readFeatures(json_EmpreendimentoResidencialQuintadoSol_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_124.addFeatures(features_EmpreendimentoResidencialQuintadoSol_124);
var lyr_EmpreendimentoResidencialQuintadoSol_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_124, 
                style: style_EmpreendimentoResidencialQuintadoSol_124,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadoSol_124.png" /> Empreendimento Residencial Quinta do Sol'
            });
var format_EmpreendimentoParquePalmeiraImperial_125 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_125 = format_EmpreendimentoParquePalmeiraImperial_125.readFeatures(json_EmpreendimentoParquePalmeiraImperial_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_125.addFeatures(features_EmpreendimentoParquePalmeiraImperial_125);
var lyr_EmpreendimentoParquePalmeiraImperial_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_125, 
                style: style_EmpreendimentoParquePalmeiraImperial_125,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
    title: 'Empreendimento Parque Palmeira Imperial<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_125_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_125_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_125_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_125_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_125_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_125_5.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_125_6.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_125_7.png" /> RUAS<br />' });
var format_EmpreendimentoParquePalmeiraImperial_126 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_126 = format_EmpreendimentoParquePalmeiraImperial_126.readFeatures(json_EmpreendimentoParquePalmeiraImperial_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_126.addFeatures(features_EmpreendimentoParquePalmeiraImperial_126);
var lyr_EmpreendimentoParquePalmeiraImperial_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_126, 
                style: style_EmpreendimentoParquePalmeiraImperial_126,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquePalmeiraImperial_126.png" /> Empreendimento Parque Palmeira Imperial'
            });
var format_EmpreendimentoBordadaMata_127 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_127 = format_EmpreendimentoBordadaMata_127.readFeatures(json_EmpreendimentoBordadaMata_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_127.addFeatures(features_EmpreendimentoBordadaMata_127);
var lyr_EmpreendimentoBordadaMata_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_127, 
                style: style_EmpreendimentoBordadaMata_127,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
    title: 'Empreendimento Borda da Mata<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_127_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_127_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_127_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_127_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_127_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_127_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_127_6.png" /> Represa<br />' });
var format_EmpreendimentoBordadaMata_128 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_128 = format_EmpreendimentoBordadaMata_128.readFeatures(json_EmpreendimentoBordadaMata_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_128.addFeatures(features_EmpreendimentoBordadaMata_128);
var lyr_EmpreendimentoBordadaMata_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_128, 
                style: style_EmpreendimentoBordadaMata_128,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoBordadaMata_128.png" /> Empreendimento Borda da Mata'
            });
var format_EmpreendimentoEdifcioResidencialHope_129 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_129 = format_EmpreendimentoEdifcioResidencialHope_129.readFeatures(json_EmpreendimentoEdifcioResidencialHope_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_129.addFeatures(features_EmpreendimentoEdifcioResidencialHope_129);
var lyr_EmpreendimentoEdifcioResidencialHope_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_129, 
                style: style_EmpreendimentoEdifcioResidencialHope_129,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_129.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoEdifcioResidencialHope_130 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_130 = format_EmpreendimentoEdifcioResidencialHope_130.readFeatures(json_EmpreendimentoEdifcioResidencialHope_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_130.addFeatures(features_EmpreendimentoEdifcioResidencialHope_130);
var lyr_EmpreendimentoEdifcioResidencialHope_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_130, 
                style: style_EmpreendimentoEdifcioResidencialHope_130,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_130.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoHorizResidence_131 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_131 = format_EmpreendimentoHorizResidence_131.readFeatures(json_EmpreendimentoHorizResidence_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_131.addFeatures(features_EmpreendimentoHorizResidence_131);
var lyr_EmpreendimentoHorizResidence_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_131, 
                style: style_EmpreendimentoHorizResidence_131,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_131.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoHorizResidence_132 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_132 = format_EmpreendimentoHorizResidence_132.readFeatures(json_EmpreendimentoHorizResidence_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_132.addFeatures(features_EmpreendimentoHorizResidence_132);
var lyr_EmpreendimentoHorizResidence_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_132, 
                style: style_EmpreendimentoHorizResidence_132,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_132.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoJardimFlora_133 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_133 = format_EmpreendimentoJardimFlora_133.readFeatures(json_EmpreendimentoJardimFlora_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_133.addFeatures(features_EmpreendimentoJardimFlora_133);
var lyr_EmpreendimentoJardimFlora_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_133, 
                style: style_EmpreendimentoJardimFlora_133,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
    title: 'Empreendimento Jardim Flora<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_133_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_133_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_133_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_133_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_133_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_133_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_133_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_133_7.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_133_8.png" /> RUAS<br />' });
var format_EmpreendimentoJardimFlora_134 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_134 = format_EmpreendimentoJardimFlora_134.readFeatures(json_EmpreendimentoJardimFlora_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_134.addFeatures(features_EmpreendimentoJardimFlora_134);
var lyr_EmpreendimentoJardimFlora_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_134, 
                style: style_EmpreendimentoJardimFlora_134,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimFlora_134.png" /> Empreendimento Jardim Flora'
            });
var format_EmpreendimentoJardimHorizonte_135 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_135 = format_EmpreendimentoJardimHorizonte_135.readFeatures(json_EmpreendimentoJardimHorizonte_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_135.addFeatures(features_EmpreendimentoJardimHorizonte_135);
var lyr_EmpreendimentoJardimHorizonte_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_135, 
                style: style_EmpreendimentoJardimHorizonte_135,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
    title: 'Empreendimento Jardim Horizonte<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_135_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_135_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_135_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_135_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_135_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_135_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_135_6.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoJardimHorizonte_136 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_136 = format_EmpreendimentoJardimHorizonte_136.readFeatures(json_EmpreendimentoJardimHorizonte_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_136.addFeatures(features_EmpreendimentoJardimHorizonte_136);
var lyr_EmpreendimentoJardimHorizonte_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_136, 
                style: style_EmpreendimentoJardimHorizonte_136,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimHorizonte_136.png" /> Empreendimento Jardim Horizonte'
            });
var format_EmpreendimentoJardimMariaLuiza_137 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_137 = format_EmpreendimentoJardimMariaLuiza_137.readFeatures(json_EmpreendimentoJardimMariaLuiza_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_137.addFeatures(features_EmpreendimentoJardimMariaLuiza_137);
var lyr_EmpreendimentoJardimMariaLuiza_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_137, 
                style: style_EmpreendimentoJardimMariaLuiza_137,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
    title: 'Empreendimento Jardim Maria Luiza<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_137_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_137_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_137_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_137_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_137_4.png" /> Passeio<br />' });
var format_EmpreendimentoJardimMariaLuiza_138 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_138 = format_EmpreendimentoJardimMariaLuiza_138.readFeatures(json_EmpreendimentoJardimMariaLuiza_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_138.addFeatures(features_EmpreendimentoJardimMariaLuiza_138);
var lyr_EmpreendimentoJardimMariaLuiza_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_138, 
                style: style_EmpreendimentoJardimMariaLuiza_138,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimMariaLuiza_138.png" /> Empreendimento Jardim Maria Luiza'
            });
var format_EmpreendimentoMontBlancResidence_139 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_139 = format_EmpreendimentoMontBlancResidence_139.readFeatures(json_EmpreendimentoMontBlancResidence_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_139.addFeatures(features_EmpreendimentoMontBlancResidence_139);
var lyr_EmpreendimentoMontBlancResidence_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_139, 
                style: style_EmpreendimentoMontBlancResidence_139,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_139.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMontBlancResidence_140 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_140 = format_EmpreendimentoMontBlancResidence_140.readFeatures(json_EmpreendimentoMontBlancResidence_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_140.addFeatures(features_EmpreendimentoMontBlancResidence_140);
var lyr_EmpreendimentoMontBlancResidence_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_140, 
                style: style_EmpreendimentoMontBlancResidence_140,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_140.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMoradadoVerdeII_141 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_141 = format_EmpreendimentoMoradadoVerdeII_141.readFeatures(json_EmpreendimentoMoradadoVerdeII_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_141.addFeatures(features_EmpreendimentoMoradadoVerdeII_141);
var lyr_EmpreendimentoMoradadoVerdeII_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_141, 
                style: style_EmpreendimentoMoradadoVerdeII_141,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
    title: 'Empreendimento Morada do Verde II<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_141_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_141_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_141_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_141_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_141_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_141_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_141_6.png" /> Lotes Mistos<br />' });
var format_EmpreendimentoMoradadoVerdeII_142 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_142 = format_EmpreendimentoMoradadoVerdeII_142.readFeatures(json_EmpreendimentoMoradadoVerdeII_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_142.addFeatures(features_EmpreendimentoMoradadoVerdeII_142);
var lyr_EmpreendimentoMoradadoVerdeII_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_142, 
                style: style_EmpreendimentoMoradadoVerdeII_142,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadoVerdeII_142.png" /> Empreendimento Morada do Verde II'
            });
var format_EmpreendimentoResicencialNairRetuci_143 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_143 = format_EmpreendimentoResicencialNairRetuci_143.readFeatures(json_EmpreendimentoResicencialNairRetuci_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_143.addFeatures(features_EmpreendimentoResicencialNairRetuci_143);
var lyr_EmpreendimentoResicencialNairRetuci_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_143, 
                style: style_EmpreendimentoResicencialNairRetuci_143,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
    title: 'Empreendimento Resicencial Nair Retuci<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_143_0.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_143_1.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_143_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_143_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_143_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_143_5.png" /> Passeio<br />' });
var format_EmpreendimentoResicencialNairRetuci_144 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_144 = format_EmpreendimentoResicencialNairRetuci_144.readFeatures(json_EmpreendimentoResicencialNairRetuci_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_144.addFeatures(features_EmpreendimentoResicencialNairRetuci_144);
var lyr_EmpreendimentoResicencialNairRetuci_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_144, 
                style: style_EmpreendimentoResicencialNairRetuci_144,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResicencialNairRetuci_144.png" /> Empreendimento Resicencial Nair Retuci'
            });
var format_EmpreendimentoParagonII_145 = new ol.format.GeoJSON();
var features_EmpreendimentoParagonII_145 = format_EmpreendimentoParagonII_145.readFeatures(json_EmpreendimentoParagonII_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagonII_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagonII_145.addFeatures(features_EmpreendimentoParagonII_145);
var lyr_EmpreendimentoParagonII_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagonII_145, 
                style: style_EmpreendimentoParagonII_145,
                popuplayertitle: 'Empreendimento Paragon II',
                interactive: true,
    title: 'Empreendimento Paragon II<br />\
    <img src="styles/legend/EmpreendimentoParagonII_145_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParagonII_145_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoParagonII_145_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParagonII_145_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParagonII_145_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoParagonII_145_5.png" /> RUAS<br />' });
var format_EmpreendimentoParagonII_146 = new ol.format.GeoJSON();
var features_EmpreendimentoParagonII_146 = format_EmpreendimentoParagonII_146.readFeatures(json_EmpreendimentoParagonII_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagonII_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagonII_146.addFeatures(features_EmpreendimentoParagonII_146);
var lyr_EmpreendimentoParagonII_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagonII_146, 
                style: style_EmpreendimentoParagonII_146,
                popuplayertitle: 'Empreendimento Paragon II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParagonII_146.png" /> Empreendimento Paragon II'
            });
var format_EmpreendimentoParagon_147 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_147 = format_EmpreendimentoParagon_147.readFeatures(json_EmpreendimentoParagon_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_147.addFeatures(features_EmpreendimentoParagon_147);
var lyr_EmpreendimentoParagon_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_147, 
                style: style_EmpreendimentoParagon_147,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
    title: 'Empreendimento Paragon<br />\
    <img src="styles/legend/EmpreendimentoParagon_147_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParagon_147_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParagon_147_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoParagon_147_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParagon_147_4.png" /> Viela<br />\
    <img src="styles/legend/EmpreendimentoParagon_147_5.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoParagon_147_6.png" /> Passeio<br />' });
var format_EmpreendimentoParagon_148 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_148 = format_EmpreendimentoParagon_148.readFeatures(json_EmpreendimentoParagon_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_148.addFeatures(features_EmpreendimentoParagon_148);
var lyr_EmpreendimentoParagon_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_148, 
                style: style_EmpreendimentoParagon_148,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParagon_148.png" /> Empreendimento Paragon'
            });
var format_EmpreendimentoParqueVillaLobos_149 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_149 = format_EmpreendimentoParqueVillaLobos_149.readFeatures(json_EmpreendimentoParqueVillaLobos_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_149.addFeatures(features_EmpreendimentoParqueVillaLobos_149);
var lyr_EmpreendimentoParqueVillaLobos_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_149, 
                style: style_EmpreendimentoParqueVillaLobos_149,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
    title: 'Empreendimento Parque Villa-Lobos<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_149_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_149_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_149_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_149_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_149_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_149_5.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoParqueVillaLobos_150 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_150 = format_EmpreendimentoParqueVillaLobos_150.readFeatures(json_EmpreendimentoParqueVillaLobos_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_150.addFeatures(features_EmpreendimentoParqueVillaLobos_150);
var lyr_EmpreendimentoParqueVillaLobos_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_150, 
                style: style_EmpreendimentoParqueVillaLobos_150,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueVillaLobos_150.png" /> Empreendimento Parque Villa-Lobos'
            });
var format_EmpreendimentoDaVinci_151 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_151 = format_EmpreendimentoDaVinci_151.readFeatures(json_EmpreendimentoDaVinci_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_151.addFeatures(features_EmpreendimentoDaVinci_151);
var lyr_EmpreendimentoDaVinci_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_151, 
                style: style_EmpreendimentoDaVinci_151,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_151.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoDaVinci_152 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_152 = format_EmpreendimentoDaVinci_152.readFeatures(json_EmpreendimentoDaVinci_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_152.addFeatures(features_EmpreendimentoDaVinci_152);
var lyr_EmpreendimentoDaVinci_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_152, 
                style: style_EmpreendimentoDaVinci_152,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_152.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoResidencialDomingosJardini_153 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_153 = format_EmpreendimentoResidencialDomingosJardini_153.readFeatures(json_EmpreendimentoResidencialDomingosJardini_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_153.addFeatures(features_EmpreendimentoResidencialDomingosJardini_153);
var lyr_EmpreendimentoResidencialDomingosJardini_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_153, 
                style: style_EmpreendimentoResidencialDomingosJardini_153,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
    title: 'Empreendimento Residencial Domingos Jardini<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_153_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_153_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_153_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_153_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_153_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_153_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialDomingosJardini_154 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_154 = format_EmpreendimentoResidencialDomingosJardini_154.readFeatures(json_EmpreendimentoResidencialDomingosJardini_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_154.addFeatures(features_EmpreendimentoResidencialDomingosJardini_154);
var lyr_EmpreendimentoResidencialDomingosJardini_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_154, 
                style: style_EmpreendimentoResidencialDomingosJardini_154,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialDomingosJardini_154.png" /> Empreendimento Residencial Domingos Jardini'
            });
var format_EmpreendimentoResidencialSantaF_155 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_155 = format_EmpreendimentoResidencialSantaF_155.readFeatures(json_EmpreendimentoResidencialSantaF_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_155.addFeatures(features_EmpreendimentoResidencialSantaF_155);
var lyr_EmpreendimentoResidencialSantaF_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_155, 
                style: style_EmpreendimentoResidencialSantaF_155,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
    title: 'Empreendimento Residencial Santa Fé<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_155_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_155_1.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_155_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_155_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_155_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_155_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaF_156 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_156 = format_EmpreendimentoResidencialSantaF_156.readFeatures(json_EmpreendimentoResidencialSantaF_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_156.addFeatures(features_EmpreendimentoResidencialSantaF_156);
var lyr_EmpreendimentoResidencialSantaF_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_156, 
                style: style_EmpreendimentoResidencialSantaF_156,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaF_156.png" /> Empreendimento Residencial Santa Fé'
            });
var format_EmpreendimentoEdifcioRuadoSol_157 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_157 = format_EmpreendimentoEdifcioRuadoSol_157.readFeatures(json_EmpreendimentoEdifcioRuadoSol_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_157.addFeatures(features_EmpreendimentoEdifcioRuadoSol_157);
var lyr_EmpreendimentoEdifcioRuadoSol_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_157, 
                style: style_EmpreendimentoEdifcioRuadoSol_157,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_157.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoEdifcioRuadoSol_158 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_158 = format_EmpreendimentoEdifcioRuadoSol_158.readFeatures(json_EmpreendimentoEdifcioRuadoSol_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_158.addFeatures(features_EmpreendimentoEdifcioRuadoSol_158);
var lyr_EmpreendimentoEdifcioRuadoSol_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_158, 
                style: style_EmpreendimentoEdifcioRuadoSol_158,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_158.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoTorontoResidence_159 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_159 = format_EmpreendimentoTorontoResidence_159.readFeatures(json_EmpreendimentoTorontoResidence_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_159.addFeatures(features_EmpreendimentoTorontoResidence_159);
var lyr_EmpreendimentoTorontoResidence_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_159, 
                style: style_EmpreendimentoTorontoResidence_159,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
    title: 'Empreendimento Toronto Residence<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_159_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_159_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_159_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_159_3.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_159_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_159_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoTorontoResidence_160 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_160 = format_EmpreendimentoTorontoResidence_160.readFeatures(json_EmpreendimentoTorontoResidence_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_160.addFeatures(features_EmpreendimentoTorontoResidence_160);
var lyr_EmpreendimentoTorontoResidence_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_160, 
                style: style_EmpreendimentoTorontoResidence_160,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoTorontoResidence_160.png" /> Empreendimento Toronto Residence'
            });
var format_EmpreendimentoCidadeJardim_161 = new ol.format.GeoJSON();
var features_EmpreendimentoCidadeJardim_161 = format_EmpreendimentoCidadeJardim_161.readFeatures(json_EmpreendimentoCidadeJardim_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCidadeJardim_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCidadeJardim_161.addFeatures(features_EmpreendimentoCidadeJardim_161);
var lyr_EmpreendimentoCidadeJardim_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCidadeJardim_161, 
                style: style_EmpreendimentoCidadeJardim_161,
                popuplayertitle: 'Empreendimento Cidade Jardim',
                interactive: true,
    title: 'Empreendimento Cidade Jardim<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_161_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_161_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_161_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_161_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_161_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_161_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_161_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_161_7.png" /> SERVIDAO<br />' });
var format_EmpreendimentoCidadeJardim_162 = new ol.format.GeoJSON();
var features_EmpreendimentoCidadeJardim_162 = format_EmpreendimentoCidadeJardim_162.readFeatures(json_EmpreendimentoCidadeJardim_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCidadeJardim_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCidadeJardim_162.addFeatures(features_EmpreendimentoCidadeJardim_162);
var lyr_EmpreendimentoCidadeJardim_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCidadeJardim_162, 
                style: style_EmpreendimentoCidadeJardim_162,
                popuplayertitle: 'Empreendimento Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoCidadeJardim_162.png" /> Empreendimento Cidade Jardim'
            });
var format_EmpreendimentoColorado_163 = new ol.format.GeoJSON();
var features_EmpreendimentoColorado_163 = format_EmpreendimentoColorado_163.readFeatures(json_EmpreendimentoColorado_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoColorado_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoColorado_163.addFeatures(features_EmpreendimentoColorado_163);
var lyr_EmpreendimentoColorado_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoColorado_163, 
                style: style_EmpreendimentoColorado_163,
                popuplayertitle: 'Empreendimento Colorado',
                interactive: true,
    title: 'Empreendimento Colorado<br />\
    <img src="styles/legend/EmpreendimentoColorado_163_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoColorado_163_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoColorado_163_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoColorado_163_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoColorado_163_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoColorado_163_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoColorado_163_6.png" /> RUAS<br />' });
var format_EmpreendimentoColorado_164 = new ol.format.GeoJSON();
var features_EmpreendimentoColorado_164 = format_EmpreendimentoColorado_164.readFeatures(json_EmpreendimentoColorado_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoColorado_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoColorado_164.addFeatures(features_EmpreendimentoColorado_164);
var lyr_EmpreendimentoColorado_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoColorado_164, 
                style: style_EmpreendimentoColorado_164,
                popuplayertitle: 'Empreendimento Colorado',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoColorado_164.png" /> Empreendimento Colorado'
            });
var format_EmpreendimentoFerracini_165 = new ol.format.GeoJSON();
var features_EmpreendimentoFerracini_165 = format_EmpreendimentoFerracini_165.readFeatures(json_EmpreendimentoFerracini_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFerracini_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFerracini_165.addFeatures(features_EmpreendimentoFerracini_165);
var lyr_EmpreendimentoFerracini_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFerracini_165, 
                style: style_EmpreendimentoFerracini_165,
                popuplayertitle: 'Empreendimento Ferracini',
                interactive: true,
    title: 'Empreendimento Ferracini<br />\
    <img src="styles/legend/EmpreendimentoFerracini_165_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoFerracini_165_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoFerracini_165_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoFerracini_165_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoFerracini_165_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoFerracini_165_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoFerracini_165_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoFerracini_165_7.png" /> VIELA<br />' });
var format_EmpreendimentoFerracini_166 = new ol.format.GeoJSON();
var features_EmpreendimentoFerracini_166 = format_EmpreendimentoFerracini_166.readFeatures(json_EmpreendimentoFerracini_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFerracini_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFerracini_166.addFeatures(features_EmpreendimentoFerracini_166);
var lyr_EmpreendimentoFerracini_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFerracini_166, 
                style: style_EmpreendimentoFerracini_166,
                popuplayertitle: 'Empreendimento Ferracini',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoFerracini_166.png" /> Empreendimento Ferracini'
            });
var format_EmpreendimentoResicencialNairRetuciII_167 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuciII_167 = format_EmpreendimentoResicencialNairRetuciII_167.readFeatures(json_EmpreendimentoResicencialNairRetuciII_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuciII_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuciII_167.addFeatures(features_EmpreendimentoResicencialNairRetuciII_167);
var lyr_EmpreendimentoResicencialNairRetuciII_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuciII_167, 
                style: style_EmpreendimentoResicencialNairRetuciII_167,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci II',
                interactive: true,
    title: 'Empreendimento Resicencial Nair Retuci II<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_167_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_167_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_167_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_167_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_167_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_167_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_167_6.png" /> RUAS<br />' });
var format_EmpreendimentoResicencialNairRetuciII_168 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuciII_168 = format_EmpreendimentoResicencialNairRetuciII_168.readFeatures(json_EmpreendimentoResicencialNairRetuciII_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuciII_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuciII_168.addFeatures(features_EmpreendimentoResicencialNairRetuciII_168);
var lyr_EmpreendimentoResicencialNairRetuciII_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuciII_168, 
                style: style_EmpreendimentoResicencialNairRetuciII_168,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResicencialNairRetuciII_168.png" /> Empreendimento Resicencial Nair Retuci II'
            });
var format_EmpreendimentoVillaPucci_169 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaPucci_169 = format_EmpreendimentoVillaPucci_169.readFeatures(json_EmpreendimentoVillaPucci_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaPucci_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaPucci_169.addFeatures(features_EmpreendimentoVillaPucci_169);
var lyr_EmpreendimentoVillaPucci_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaPucci_169, 
                style: style_EmpreendimentoVillaPucci_169,
                popuplayertitle: 'Empreendimento Villa Pucci',
                interactive: true,
    title: 'Empreendimento Villa Pucci<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_169_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_169_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_169_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_169_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_169_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_169_5.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_169_6.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_169_7.png" /> RUAS<br />' });
var format_EmpreendimentoVillaPucci_170 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaPucci_170 = format_EmpreendimentoVillaPucci_170.readFeatures(json_EmpreendimentoVillaPucci_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaPucci_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaPucci_170.addFeatures(features_EmpreendimentoVillaPucci_170);
var lyr_EmpreendimentoVillaPucci_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaPucci_170, 
                style: style_EmpreendimentoVillaPucci_170,
                popuplayertitle: 'Empreendimento Villa Pucci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaPucci_170.png" /> Empreendimento Villa Pucci'
            });
var format_ServidoRamal138kVFranca4Guanabara_171 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_171 = format_ServidoRamal138kVFranca4Guanabara_171.readFeatures(json_ServidoRamal138kVFranca4Guanabara_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_171.addFeatures(features_ServidoRamal138kVFranca4Guanabara_171);
var lyr_ServidoRamal138kVFranca4Guanabara_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_171, 
                style: style_ServidoRamal138kVFranca4Guanabara_171,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_171.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_172 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_172 = format_ServidoRamal138kVFranca4Guanabara_172.readFeatures(json_ServidoRamal138kVFranca4Guanabara_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_172.addFeatures(features_ServidoRamal138kVFranca4Guanabara_172);
var lyr_ServidoRamal138kVFranca4Guanabara_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_172, 
                style: style_ServidoRamal138kVFranca4Guanabara_172,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_172.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_EmpreendimentosAprovado27unid_173 = new ol.format.GeoJSON();
var features_EmpreendimentosAprovado27unid_173 = format_EmpreendimentosAprovado27unid_173.readFeatures(json_EmpreendimentosAprovado27unid_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosAprovado27unid_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosAprovado27unid_173.addFeatures(features_EmpreendimentosAprovado27unid_173);
var lyr_EmpreendimentosAprovado27unid_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosAprovado27unid_173, 
                style: style_EmpreendimentosAprovado27unid_173,
                popuplayertitle: 'Empreendimentos - Aprovado (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosAprovado27unid_173.png" /> Empreendimentos - Aprovado (27 unid.)'
            });
var format_EmpreendimentosDiretriz8unid_174 = new ol.format.GeoJSON();
var features_EmpreendimentosDiretriz8unid_174 = format_EmpreendimentosDiretriz8unid_174.readFeatures(json_EmpreendimentosDiretriz8unid_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDiretriz8unid_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDiretriz8unid_174.addFeatures(features_EmpreendimentosDiretriz8unid_174);
var lyr_EmpreendimentosDiretriz8unid_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDiretriz8unid_174, 
                style: style_EmpreendimentosDiretriz8unid_174,
                popuplayertitle: 'Empreendimentos  - Diretriz (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDiretriz8unid_174.png" /> Empreendimentos  - Diretriz (8 unid.)'
            });
var format_EmpreendimentosDefinitiva7unid_175 = new ol.format.GeoJSON();
var features_EmpreendimentosDefinitiva7unid_175 = format_EmpreendimentosDefinitiva7unid_175.readFeatures(json_EmpreendimentosDefinitiva7unid_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDefinitiva7unid_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDefinitiva7unid_175.addFeatures(features_EmpreendimentosDefinitiva7unid_175);
var lyr_EmpreendimentosDefinitiva7unid_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDefinitiva7unid_175, 
                style: style_EmpreendimentosDefinitiva7unid_175,
                popuplayertitle: 'Empreendimentos - Definitiva (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDefinitiva7unid_175.png" /> Empreendimentos - Definitiva (7 unid.)'
            });
var format_EmpreendimentosPrvia24unid_176 = new ol.format.GeoJSON();
var features_EmpreendimentosPrvia24unid_176 = format_EmpreendimentosPrvia24unid_176.readFeatures(json_EmpreendimentosPrvia24unid_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosPrvia24unid_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosPrvia24unid_176.addFeatures(features_EmpreendimentosPrvia24unid_176);
var lyr_EmpreendimentosPrvia24unid_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosPrvia24unid_176, 
                style: style_EmpreendimentosPrvia24unid_176,
                popuplayertitle: 'Empreendimentos - Prévia (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosPrvia24unid_176.png" /> Empreendimentos - Prévia (24 unid.)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_177 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_177 = format_PBZPAEdifcioPrimeHELIPONTO_177.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_177.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_177);
var lyr_PBZPAEdifcioPrimeHELIPONTO_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_177, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_177,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
                title: '<img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_177.png" /> PBZPA - Edifício Prime (HELIPONTO)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_178 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_178 = format_PBZPAEdifcioPrimeHELIPONTO_178.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_178.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_178);
var lyr_PBZPAEdifcioPrimeHELIPONTO_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_178, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_178,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Edifício Prime (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_178_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_178_1.png" /> RAMPA<br />' });
var format_PBZPAHospitalHELIPONTO_179 = new ol.format.GeoJSON();
var features_PBZPAHospitalHELIPONTO_179 = format_PBZPAHospitalHELIPONTO_179.readFeatures(json_PBZPAHospitalHELIPONTO_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAHospitalHELIPONTO_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAHospitalHELIPONTO_179.addFeatures(features_PBZPAHospitalHELIPONTO_179);
var lyr_PBZPAHospitalHELIPONTO_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAHospitalHELIPONTO_179, 
                style: style_PBZPAHospitalHELIPONTO_179,
                popuplayertitle: 'PBZPA - Hospital (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Hospital (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_179_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_179_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_179_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_179_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_179_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_179_5.png" /> FATO 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_179_6.png" /> TLOF 1<br />' });
var format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180 = new ol.format.GeoJSON();
var features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180 = format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180.readFeatures(json_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180.addFeatures(features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180);
var lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180, 
                style: style_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180,
                popuplayertitle: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)',
                interactive: true,
    title: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_180_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_180_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_180_2.png" /> Cônica<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_180_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_180_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_180_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_180_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_180_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_180_8.png" /> Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_180_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_180_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_180_11.png" /> Transição<br />' });
var format_DeclividadeZonaUrbanaCopernicus30m_181 = new ol.format.GeoJSON();
var features_DeclividadeZonaUrbanaCopernicus30m_181 = format_DeclividadeZonaUrbanaCopernicus30m_181.readFeatures(json_DeclividadeZonaUrbanaCopernicus30m_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DeclividadeZonaUrbanaCopernicus30m_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaUrbanaCopernicus30m_181.addFeatures(features_DeclividadeZonaUrbanaCopernicus30m_181);
var lyr_DeclividadeZonaUrbanaCopernicus30m_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaUrbanaCopernicus30m_181, 
                style: style_DeclividadeZonaUrbanaCopernicus30m_181,
                popuplayertitle: 'Declividade - Zona Urbana (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Urbana (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_181_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_181_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_181_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_181_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_181_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_181_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_181_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_181_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_181_8.png" /> 101 - 114%<br />' });
var format_DeclividadeZonaRuralSulCopernicus30m_182 = new ol.format.GeoJSON();
var features_DeclividadeZonaRuralSulCopernicus30m_182 = format_DeclividadeZonaRuralSulCopernicus30m_182.readFeatures(json_DeclividadeZonaRuralSulCopernicus30m_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DeclividadeZonaRuralSulCopernicus30m_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaRuralSulCopernicus30m_182.addFeatures(features_DeclividadeZonaRuralSulCopernicus30m_182);
var lyr_DeclividadeZonaRuralSulCopernicus30m_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaRuralSulCopernicus30m_182, 
                style: style_DeclividadeZonaRuralSulCopernicus30m_182,
                popuplayertitle: 'Declividade - Zona Rural - Sul (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Rural - Sul (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_182_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_182_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_182_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_182_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_182_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_182_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_182_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_182_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_182_8.png" /> 101 - 114%<br />' });
var format_DeclividadeZonaRuralNorteCopernicus30m_183 = new ol.format.GeoJSON();
var features_DeclividadeZonaRuralNorteCopernicus30m_183 = format_DeclividadeZonaRuralNorteCopernicus30m_183.readFeatures(json_DeclividadeZonaRuralNorteCopernicus30m_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DeclividadeZonaRuralNorteCopernicus30m_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaRuralNorteCopernicus30m_183.addFeatures(features_DeclividadeZonaRuralNorteCopernicus30m_183);
var lyr_DeclividadeZonaRuralNorteCopernicus30m_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaRuralNorteCopernicus30m_183, 
                style: style_DeclividadeZonaRuralNorteCopernicus30m_183,
                popuplayertitle: 'Declividade - Zona Rural - Norte (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Rural - Norte (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_183_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_183_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_183_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_183_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_183_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_183_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_183_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_183_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_183_8.png" /> 101 - 114%<br />' });
var format_FazendaBarroPretoeBambus_184 = new ol.format.GeoJSON();
var features_FazendaBarroPretoeBambus_184 = format_FazendaBarroPretoeBambus_184.readFeatures(json_FazendaBarroPretoeBambus_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaBarroPretoeBambus_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaBarroPretoeBambus_184.addFeatures(features_FazendaBarroPretoeBambus_184);
var lyr_FazendaBarroPretoeBambus_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaBarroPretoeBambus_184, 
                style: style_FazendaBarroPretoeBambus_184,
                popuplayertitle: 'Fazenda Barro Preto e Bambus',
                interactive: true,
                title: '<img src="styles/legend/FazendaBarroPretoeBambus_184.png" /> Fazenda Barro Preto e Bambus'
            });
var format_Matrcula106206_185 = new ol.format.GeoJSON();
var features_Matrcula106206_185 = format_Matrcula106206_185.readFeatures(json_Matrcula106206_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Matrcula106206_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matrcula106206_185.addFeatures(features_Matrcula106206_185);
var lyr_Matrcula106206_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matrcula106206_185, 
                style: style_Matrcula106206_185,
                popuplayertitle: 'Matrícula 106.206',
                interactive: true,
                title: '<img src="styles/legend/Matrcula106206_185.png" /> Matrícula 106.206'
            });
var format_RecantoEmanuelMatrcula95782_186 = new ol.format.GeoJSON();
var features_RecantoEmanuelMatrcula95782_186 = format_RecantoEmanuelMatrcula95782_186.readFeatures(json_RecantoEmanuelMatrcula95782_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoEmanuelMatrcula95782_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoEmanuelMatrcula95782_186.addFeatures(features_RecantoEmanuelMatrcula95782_186);
var lyr_RecantoEmanuelMatrcula95782_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoEmanuelMatrcula95782_186, 
                style: style_RecantoEmanuelMatrcula95782_186,
                popuplayertitle: 'Recanto Emanuel - Matrícula 95.782',
                interactive: true,
                title: '<img src="styles/legend/RecantoEmanuelMatrcula95782_186.png" /> Recanto Emanuel - Matrícula 95.782'
            });
var format_RecantoEmanuelMatrcula95783_187 = new ol.format.GeoJSON();
var features_RecantoEmanuelMatrcula95783_187 = format_RecantoEmanuelMatrcula95783_187.readFeatures(json_RecantoEmanuelMatrcula95783_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoEmanuelMatrcula95783_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoEmanuelMatrcula95783_187.addFeatures(features_RecantoEmanuelMatrcula95783_187);
var lyr_RecantoEmanuelMatrcula95783_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoEmanuelMatrcula95783_187, 
                style: style_RecantoEmanuelMatrcula95783_187,
                popuplayertitle: 'Recanto Emanuel - Matrícula 95.783',
                interactive: true,
                title: '<img src="styles/legend/RecantoEmanuelMatrcula95783_187.png" /> Recanto Emanuel - Matrícula 95.783'
            });
var format_StioNossaSenhoraAparecida_188 = new ol.format.GeoJSON();
var features_StioNossaSenhoraAparecida_188 = format_StioNossaSenhoraAparecida_188.readFeatures(json_StioNossaSenhoraAparecida_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_StioNossaSenhoraAparecida_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StioNossaSenhoraAparecida_188.addFeatures(features_StioNossaSenhoraAparecida_188);
var lyr_StioNossaSenhoraAparecida_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StioNossaSenhoraAparecida_188, 
                style: style_StioNossaSenhoraAparecida_188,
                popuplayertitle: 'Sítio Nossa Senhora Aparecida',
                interactive: true,
                title: '<img src="styles/legend/StioNossaSenhoraAparecida_188.png" /> Sítio Nossa Senhora Aparecida'
            });
var format_LoteamentosClandestinos3unid_189 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos3unid_189 = format_LoteamentosClandestinos3unid_189.readFeatures(json_LoteamentosClandestinos3unid_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinos3unid_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos3unid_189.addFeatures(features_LoteamentosClandestinos3unid_189);
var lyr_LoteamentosClandestinos3unid_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos3unid_189, 
                style: style_LoteamentosClandestinos3unid_189,
                popuplayertitle: 'Loteamentos Clandestinos (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos3unid_189.png" /> Loteamentos Clandestinos (3 unid.)'
            });
var format_ParqueZumbidosPalmares_190 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_190 = format_ParqueZumbidosPalmares_190.readFeatures(json_ParqueZumbidosPalmares_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueZumbidosPalmares_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_190.addFeatures(features_ParqueZumbidosPalmares_190);
var lyr_ParqueZumbidosPalmares_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_190, 
                style: style_ParqueZumbidosPalmares_190,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_190.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191 = format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_AntigoAterrodasMaritacas_193 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_193 = format_AntigoAterrodasMaritacas_193.readFeatures(json_AntigoAterrodasMaritacas_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacas_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_193.addFeatures(features_AntigoAterrodasMaritacas_193);
var lyr_AntigoAterrodasMaritacas_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_193, 
                style: style_AntigoAterrodasMaritacas_193,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_193.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_197 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_197 = format_AntigoAterrodaFazendaMunicipal_197.readFeatures(json_AntigoAterrodaFazendaMunicipal_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipal_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_197.addFeatures(features_AntigoAterrodaFazendaMunicipal_197);
var lyr_AntigoAterrodaFazendaMunicipal_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_197, 
                style: style_AntigoAterrodaFazendaMunicipal_197,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_197.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)'
            });
var format_ARORemanescentesFlorestais_200 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_200 = format_ARORemanescentesFlorestais_200.readFeatures(json_ARORemanescentesFlorestais_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARORemanescentesFlorestais_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_200.addFeatures(features_ARORemanescentesFlorestais_200);
var lyr_ARORemanescentesFlorestais_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_200, 
                style: style_ARORemanescentesFlorestais_200,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_200.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_201 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_201 = format_AROreadeAmortecimento_201.readFeatures(json_AROreadeAmortecimento_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROreadeAmortecimento_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_201.addFeatures(features_AROreadeAmortecimento_201);
var lyr_AROreadeAmortecimento_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_201, 
                style: style_AROreadeAmortecimento_201,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_201.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_202 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_202 = format_AROFaixadeCuestas_202.readFeatures(json_AROFaixadeCuestas_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROFaixadeCuestas_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_202.addFeatures(features_AROFaixadeCuestas_202);
var lyr_AROFaixadeCuestas_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_202, 
                style: style_AROFaixadeCuestas_202,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_202.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_203 = new ol.format.GeoJSON();
var features_AROAPP_203 = format_AROAPP_203.readFeatures(json_AROAPP_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROAPP_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_203.addFeatures(features_AROAPP_203);
var lyr_AROAPP_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_203, 
                style: style_AROAPP_203,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_203.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_204 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_204 = format_ARAIncongrunciasemAPP_204.readFeatures(json_ARAIncongrunciasemAPP_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAIncongrunciasemAPP_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_204.addFeatures(features_ARAIncongrunciasemAPP_204);
var lyr_ARAIncongrunciasemAPP_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_204, 
                style: style_ARAIncongrunciasemAPP_204,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_204.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_205 = new ol.format.GeoJSON();
var features_ARAETELagoas_205 = format_ARAETELagoas_205.readFeatures(json_ARAETELagoas_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAETELagoas_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_205.addFeatures(features_ARAETELagoas_205);
var lyr_ARAETELagoas_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_205, 
                style: style_ARAETELagoas_205,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_205.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_206 = new ol.format.GeoJSON();
var features_ARAAterros_206 = format_ARAAterros_206.readFeatures(json_ARAAterros_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAAterros_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_206.addFeatures(features_ARAAterros_206);
var lyr_ARAAterros_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_206, 
                style: style_ARAAterros_206,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_206.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_207 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_207 = format_AODreaUrbanaConsolidada_207.readFeatures(json_AODreaUrbanaConsolidada_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODreaUrbanaConsolidada_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_207.addFeatures(features_AODreaUrbanaConsolidada_207);
var lyr_AODreaUrbanaConsolidada_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_207, 
                style: style_AODreaUrbanaConsolidada_207,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_207.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_208 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_208 = format_AODBaixaDensidadeNvel3_208.readFeatures(json_AODBaixaDensidadeNvel3_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel3_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_208.addFeatures(features_AODBaixaDensidadeNvel3_208);
var lyr_AODBaixaDensidadeNvel3_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_208, 
                style: style_AODBaixaDensidadeNvel3_208,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_208.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_209 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_209 = format_AODBaixaDensidadeNvel2_209.readFeatures(json_AODBaixaDensidadeNvel2_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel2_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_209.addFeatures(features_AODBaixaDensidadeNvel2_209);
var lyr_AODBaixaDensidadeNvel2_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_209, 
                style: style_AODBaixaDensidadeNvel2_209,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_209.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_210 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_210 = format_AODBaixaDensidadeNvel1_210.readFeatures(json_AODBaixaDensidadeNvel1_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel1_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_210.addFeatures(features_AODBaixaDensidadeNvel1_210);
var lyr_AODBaixaDensidadeNvel1_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_210, 
                style: style_AODBaixaDensidadeNvel1_210,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_210.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_211 = new ol.format.GeoJSON();
var features_AODAUSFase2_211 = format_AODAUSFase2_211.readFeatures(json_AODAUSFase2_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase2_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_211.addFeatures(features_AODAUSFase2_211);
var lyr_AODAUSFase2_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_211, 
                style: style_AODAUSFase2_211,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_211.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_212 = new ol.format.GeoJSON();
var features_AODAUSFase1_212 = format_AODAUSFase1_212.readFeatures(json_AODAUSFase1_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase1_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_212.addFeatures(features_AODAUSFase1_212);
var lyr_AODAUSFase1_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_212, 
                style: style_AODAUSFase1_212,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_212.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_213 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_213 = format_LimitedaBaciadoRioCanoasLeiC4322024_213.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_213.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_213);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_213, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_213,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_213.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_214 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_214 = format_LimitedaBaciadoRioCanoasLeiC1002006_214.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_214.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_214);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_214, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_214,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_214.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_215 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_215 = format_DelimitaodaBaciadoRibeirodaOna_215.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_215.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_215);
var lyr_DelimitaodaBaciadoRibeirodaOna_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_215, 
                style: style_DelimitaodaBaciadoRibeirodaOna_215,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_215.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_AoCivilPblica1unid_216 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_216 = format_AoCivilPblica1unid_216.readFeatures(json_AoCivilPblica1unid_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_216.addFeatures(features_AoCivilPblica1unid_216);
var lyr_AoCivilPblica1unid_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_216, 
                style: style_AoCivilPblica1unid_216,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_216.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_217 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_217 = format_AoCivilPblica1unid_217.readFeatures(json_AoCivilPblica1unid_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_217.addFeatures(features_AoCivilPblica1unid_217);
var lyr_AoCivilPblica1unid_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_217, 
                style: style_AoCivilPblica1unid_217,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_217.png" /> Ação Civil Pública (1 unid.)'
            });
var format_CartaAnuncia20unid_218 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_218 = format_CartaAnuncia20unid_218.readFeatures(json_CartaAnuncia20unid_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia20unid_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_218.addFeatures(features_CartaAnuncia20unid_218);
var lyr_CartaAnuncia20unid_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_218, 
                style: style_CartaAnuncia20unid_218,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_218.png" /> Carta Anuência (20 unid.)'
            });
var format_CartaAnuncia19unid_219 = new ol.format.GeoJSON();
var features_CartaAnuncia19unid_219 = format_CartaAnuncia19unid_219.readFeatures(json_CartaAnuncia19unid_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia19unid_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia19unid_219.addFeatures(features_CartaAnuncia19unid_219);
var lyr_CartaAnuncia19unid_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia19unid_219, 
                style: style_CartaAnuncia19unid_219,
                popuplayertitle: 'Carta Anuência (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia19unid_219.png" /> Carta Anuência (19 unid.)'
            });
var format_PlantioVoluntrio1unid_220 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_220 = format_PlantioVoluntrio1unid_220.readFeatures(json_PlantioVoluntrio1unid_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_220.addFeatures(features_PlantioVoluntrio1unid_220);
var lyr_PlantioVoluntrio1unid_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_220, 
                style: style_PlantioVoluntrio1unid_220,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_220.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_221 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_221 = format_PlantioVoluntrio1unid_221.readFeatures(json_PlantioVoluntrio1unid_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_221.addFeatures(features_PlantioVoluntrio1unid_221);
var lyr_PlantioVoluntrio1unid_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_221, 
                style: style_PlantioVoluntrio1unid_221,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_221.png" /> Plantio Voluntário (1 unid.)'
            });
var format_TACMinistrioPblico9unid_222 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_222 = format_TACMinistrioPblico9unid_222.readFeatures(json_TACMinistrioPblico9unid_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_222.addFeatures(features_TACMinistrioPblico9unid_222);
var lyr_TACMinistrioPblico9unid_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_222, 
                style: style_TACMinistrioPblico9unid_222,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_222.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_223 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_223 = format_TACMinistrioPblico9unid_223.readFeatures(json_TACMinistrioPblico9unid_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_223.addFeatures(features_TACMinistrioPblico9unid_223);
var lyr_TACMinistrioPblico9unid_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_223, 
                style: style_TACMinistrioPblico9unid_223,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_223.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TCRACETESB28unid_224 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_224 = format_TCRACETESB28unid_224.readFeatures(json_TCRACETESB28unid_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_224.addFeatures(features_TCRACETESB28unid_224);
var lyr_TCRACETESB28unid_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_224, 
                style: style_TCRACETESB28unid_224,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_224.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESB28unid_225 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_225 = format_TCRACETESB28unid_225.readFeatures(json_TCRACETESB28unid_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_225.addFeatures(features_TCRACETESB28unid_225);
var lyr_TCRACETESB28unid_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_225, 
                style: style_TCRACETESB28unid_225,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_225.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRAMunicipal14unid_226 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_226 = format_TCRAMunicipal14unid_226.readFeatures(json_TCRAMunicipal14unid_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_226.addFeatures(features_TCRAMunicipal14unid_226);
var lyr_TCRAMunicipal14unid_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_226, 
                style: style_TCRAMunicipal14unid_226,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_226.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRAMunicipal14unid_227 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_227 = format_TCRAMunicipal14unid_227.readFeatures(json_TCRAMunicipal14unid_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_227.addFeatures(features_TCRAMunicipal14unid_227);
var lyr_TCRAMunicipal14unid_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_227, 
                style: style_TCRAMunicipal14unid_227,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_227.png" /> TCRA Municipal (14 unid.)'
            });
var format_TRPRLCETESB2unid_228 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_228 = format_TRPRLCETESB2unid_228.readFeatures(json_TRPRLCETESB2unid_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_228.addFeatures(features_TRPRLCETESB2unid_228);
var lyr_TRPRLCETESB2unid_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_228, 
                style: style_TRPRLCETESB2unid_228,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_228.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_229 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_229 = format_TRPRLCETESB2unid_229.readFeatures(json_TRPRLCETESB2unid_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_229.addFeatures(features_TRPRLCETESB2unid_229);
var lyr_TRPRLCETESB2unid_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_229, 
                style: style_TRPRLCETESB2unid_229,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_229.png" /> TRPRL CETESB (2 unid.)'
            });
var format_rvoreImuneaoCorte8unid_230 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte8unid_230 = format_rvoreImuneaoCorte8unid_230.readFeatures(json_rvoreImuneaoCorte8unid_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_rvoreImuneaoCorte8unid_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte8unid_230.addFeatures(features_rvoreImuneaoCorte8unid_230);
var lyr_rvoreImuneaoCorte8unid_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte8unid_230, 
                style: style_rvoreImuneaoCorte8unid_230,
                popuplayertitle: 'Árvore Imune ao Corte (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte8unid_230.png" /> Árvore Imune ao Corte (8 unid.)'
            });
var format_Voorocas26unid_231 = new ol.format.GeoJSON();
var features_Voorocas26unid_231 = format_Voorocas26unid_231.readFeatures(json_Voorocas26unid_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Voorocas26unid_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas26unid_231.addFeatures(features_Voorocas26unid_231);
var lyr_Voorocas26unid_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas26unid_231, 
                style: style_Voorocas26unid_231,
                popuplayertitle: 'Voçorocas (26 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas26unid_231.png" /> Voçorocas (26 unid.)'
            });
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica1unid_216,lyr_AoCivilPblica1unid_217,lyr_CartaAnuncia20unid_218,lyr_CartaAnuncia19unid_219,lyr_PlantioVoluntrio1unid_220,lyr_PlantioVoluntrio1unid_221,lyr_TACMinistrioPblico9unid_222,lyr_TACMinistrioPblico9unid_223,lyr_TCRACETESB28unid_224,lyr_TCRACETESB28unid_225,lyr_TCRAMunicipal14unid_226,lyr_TCRAMunicipal14unid_227,lyr_TRPRLCETESB2unid_228,lyr_TRPRLCETESB2unid_229,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_200,lyr_AROreadeAmortecimento_201,lyr_AROFaixadeCuestas_202,lyr_AROAPP_203,lyr_ARAIncongrunciasemAPP_204,lyr_ARAETELagoas_205,lyr_ARAAterros_206,lyr_AODreaUrbanaConsolidada_207,lyr_AODBaixaDensidadeNvel3_208,lyr_AODBaixaDensidadeNvel2_209,lyr_AODBaixaDensidadeNvel1_210,lyr_AODAUSFase2_211,lyr_AODAUSFase1_212,lyr_LimitedaBaciadoRioCanoasLeiC4322024_213,lyr_LimitedaBaciadoRioCanoasLeiC1002006_214,lyr_DelimitaodaBaciadoRibeirodaOna_215,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_ParqueZumbidosPalmares_190,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192,lyr_AntigoAterrodasMaritacas_193,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196,lyr_AntigoAterrodaFazendaMunicipal_197,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_LoteamentosClandestinos = new ol.layer.Group({
                                layers: [lyr_FazendaBarroPretoeBambus_184,lyr_Matrcula106206_185,lyr_RecantoEmanuelMatrcula95782_186,lyr_RecantoEmanuelMatrcula95783_187,lyr_StioNossaSenhoraAparecida_188,lyr_LoteamentosClandestinos3unid_189,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos'});
var group_Declividade = new ol.layer.Group({
                                layers: [lyr_DeclividadeZonaUrbanaCopernicus30m_181,lyr_DeclividadeZonaRuralSulCopernicus30m_182,lyr_DeclividadeZonaRuralNorteCopernicus30m_183,],
                                fold: 'close',
                                title: 'Declividade'});
var group_SecretariadeInfraestrutura = new ol.layer.Group({
                                layers: [lyr_CondomnioIICityPetrpolis_35,lyr_CondomnioIICityPetrpolis_36,lyr_CondomnioICityPetrpolis_37,lyr_CondomnioICityPetrpolis_38,lyr_EmpreendimentoArizona_39,lyr_EmpreendimentoArizona_40,lyr_EmpreendimentoFazendaProgresso_41,lyr_EmpreendimentoFazendaProgresso_42,lyr_EmpreendimentoVillaBella_43,lyr_EmpreendimentoVillaBella_44,lyr_EmpreendimentoVillaDoratta_45,lyr_EmpreendimentoVillaDoratta_46,lyr_EmpreendimentoDioceseFranca_47,lyr_EmpreendimentoDioceseFranca_48,lyr_EmpreendimentoAdonis_49,lyr_EmpreendimentoAdonis_50,lyr_EmpreendimentoInfratecinica_51,lyr_EmpreendimentoInfratecinica_52,lyr_EmpreendimentoResidencialBoaVista_53,lyr_EmpreendimentoResidencialBoaVista_54,lyr_EmpreendimentoCondomnioResicencialTerraNova_55,lyr_EmpreendimentoCondomnioResicencialTerraNova_56,lyr_EmpreendimentoVillaDiEspanhaIII_57,lyr_EmpreendimentoVillaDiEspanhaIII_58,lyr_EmpreendimentoSoCarlosII_59,lyr_EmpreendimentoSoCarlosII_60,lyr_EmpreendimentoParqueFlora_61,lyr_EmpreendimentoParqueFlora_62,lyr_EmpreendimentoVittaSoVicente_63,lyr_EmpreendimentoVittaSoVicente_64,lyr_EmpreendimentoRecantoMeneghetti_65,lyr_EmpreendimentoRecantoMeneghetti_66,lyr_EmpreendimentoParquedosSabias_67,lyr_EmpreendimentoParquedosSabias_68,lyr_EmpreendimentoMoradadaMata_69,lyr_EmpreendimentoMoradadaMata_70,lyr_EmpreendimentoIrineuZanetiII_71,lyr_EmpreendimentoIrineuZanetiII_72,lyr_EmpreendimentoResidencialJabuticabeiras_73,lyr_EmpreendimentoResidencialJabuticabeiras_74,lyr_EmpreendimentoResidencialMarianaAlarcon_75,lyr_EmpreendimentoResidencialMarianaAlarcon_76,lyr_EmpreendimentoResidencialCintraAlves_77,lyr_EmpreendimentoResidencialCintraAlves_78,lyr_EmpreendimentoLoteamentolamo_79,lyr_EmpreendimentoLoteamentolamo_80,lyr_EmpreendimentoSantaLina_81,lyr_EmpreendimentoSantaLina_82,lyr_EmpreendimentoResidencialPousoAlegreII_83,lyr_EmpreendimentoResidencialPousoAlegreII_84,lyr_EmpreendimentoResidencialPousoAlegre_85,lyr_EmpreendimentoResidencialPousoAlegre_86,lyr_EmpreendimentoResidencialAltodaFazenda_87,lyr_EmpreendimentoResidencialAltodaFazenda_88,lyr_EmpreendimentoResidencialMarioTasso_89,lyr_EmpreendimentoResidencialMarioTasso_90,lyr_EmpreendimentoResidenciaisVivenna_91,lyr_EmpreendimentoResidenciaisVivenna_92,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_93,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_94,lyr_EmprendimentoElias_95,lyr_EmprendimentoElias_96,lyr_EmpreendimentoResidencialSoCarlosI_97,lyr_EmpreendimentoResidencialSoCarlosI_98,lyr_EmpreendimentoMonti_99,lyr_EmpreendimentoMonti_100,lyr_EmpreendimentoResidencialMoradadoBosque_101,lyr_EmpreendimentoResidencialMoradadoBosque_102,lyr_EmpreendimentoVittaAlvorada_103,lyr_EmpreendimentoVittaAlvorada_104,lyr_EmpreendimentoResidencialMarthaHelena_105,lyr_EmpreendimentoResidencialMarthaHelena_106,lyr_EmpreendimentoResidencialYasminTorres_107,lyr_EmpreendimentoResidencialYasminTorres_108,lyr_EmpreendimentoPalmeiraReal_109,lyr_EmpreendimentoPalmeiraReal_110,lyr_EmpreendimentoEssence_111,lyr_EmpreendimentoEssence_112,lyr_EmpreendimentoVersalhes_113,lyr_EmpreendimentoVersalhes_114,lyr_EmpreendimentoSonetto_115,lyr_EmpreendimentoSonetto_116,lyr_EmpreendimentoResidencialSantaIns_117,lyr_EmpreendimentoResidencialSantaIns_118,lyr_EmpreendimentoEdifcioSolNascente_119,lyr_EmpreendimentoEdifcioSolNascente_120,lyr_EmpreendimentoResidencialQuintadosOitis_121,lyr_EmpreendimentoResidencialQuintadosOitis_122,lyr_EmpreendimentoResidencialQuintadoSol_123,lyr_EmpreendimentoResidencialQuintadoSol_124,lyr_EmpreendimentoParquePalmeiraImperial_125,lyr_EmpreendimentoParquePalmeiraImperial_126,lyr_EmpreendimentoBordadaMata_127,lyr_EmpreendimentoBordadaMata_128,lyr_EmpreendimentoEdifcioResidencialHope_129,lyr_EmpreendimentoEdifcioResidencialHope_130,lyr_EmpreendimentoHorizResidence_131,lyr_EmpreendimentoHorizResidence_132,lyr_EmpreendimentoJardimFlora_133,lyr_EmpreendimentoJardimFlora_134,lyr_EmpreendimentoJardimHorizonte_135,lyr_EmpreendimentoJardimHorizonte_136,lyr_EmpreendimentoJardimMariaLuiza_137,lyr_EmpreendimentoJardimMariaLuiza_138,lyr_EmpreendimentoMontBlancResidence_139,lyr_EmpreendimentoMontBlancResidence_140,lyr_EmpreendimentoMoradadoVerdeII_141,lyr_EmpreendimentoMoradadoVerdeII_142,lyr_EmpreendimentoResicencialNairRetuci_143,lyr_EmpreendimentoResicencialNairRetuci_144,lyr_EmpreendimentoParagonII_145,lyr_EmpreendimentoParagonII_146,lyr_EmpreendimentoParagon_147,lyr_EmpreendimentoParagon_148,lyr_EmpreendimentoParqueVillaLobos_149,lyr_EmpreendimentoParqueVillaLobos_150,lyr_EmpreendimentoDaVinci_151,lyr_EmpreendimentoDaVinci_152,lyr_EmpreendimentoResidencialDomingosJardini_153,lyr_EmpreendimentoResidencialDomingosJardini_154,lyr_EmpreendimentoResidencialSantaF_155,lyr_EmpreendimentoResidencialSantaF_156,lyr_EmpreendimentoEdifcioRuadoSol_157,lyr_EmpreendimentoEdifcioRuadoSol_158,lyr_EmpreendimentoTorontoResidence_159,lyr_EmpreendimentoTorontoResidence_160,lyr_EmpreendimentoCidadeJardim_161,lyr_EmpreendimentoCidadeJardim_162,lyr_EmpreendimentoColorado_163,lyr_EmpreendimentoColorado_164,lyr_EmpreendimentoFerracini_165,lyr_EmpreendimentoFerracini_166,lyr_EmpreendimentoResicencialNairRetuciII_167,lyr_EmpreendimentoResicencialNairRetuciII_168,lyr_EmpreendimentoVillaPucci_169,lyr_EmpreendimentoVillaPucci_170,lyr_ServidoRamal138kVFranca4Guanabara_171,lyr_ServidoRamal138kVFranca4Guanabara_172,lyr_EmpreendimentosAprovado27unid_173,lyr_EmpreendimentosDiretriz8unid_174,lyr_EmpreendimentosDefinitiva7unid_175,lyr_EmpreendimentosPrvia24unid_176,lyr_PBZPAEdifcioPrimeHELIPONTO_177,lyr_PBZPAEdifcioPrimeHELIPONTO_178,lyr_PBZPAHospitalHELIPONTO_179,lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180,],
                                fold: 'close',
                                title: 'Secretaria de Infraestrutura'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteEMDEF10unid218783m_26,lyr_LoteEMDEF10unid_27,lyr_Lote504unid13809703m_28,lyr_Lote504unid_29,lyr_APP169unid238007435m_30,lyr_readeUsoEspecial247unid269765616m_31,lyr_reaInstitucional240unid136439095m_32,lyr_reaPatrimonial33unid15807656m_33,lyr_reaVerde2011unid845466642m_34,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_reaN_10,lyr_ConjuntoHabitacional_11,lyr_AvdeacessoaoHortoeColgioAgrcola_12,lyr_reaK_13,lyr_reaJ_14,lyr_reaI_15,lyr_reaH_16,lyr_reaG_17,lyr_reaF_18,lyr_reaE_19,lyr_reaD_20,lyr_reaC_21,lyr_reaB_22,lyr_reaA_23,lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24,lyr_reaaseraverbadaPartedareaG_25,],
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

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_APP1745unid_5.setVisible(false);lyr_RiosDuplos84unid_6.setVisible(false);lyr_MassasDgua270unid_7.setVisible(false);lyr_RiosSimples1842unid_8.setVisible(false);lyr_Nascentes821unid_9.setVisible(false);lyr_reaN_10.setVisible(false);lyr_ConjuntoHabitacional_11.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_12.setVisible(false);lyr_reaK_13.setVisible(false);lyr_reaJ_14.setVisible(false);lyr_reaI_15.setVisible(false);lyr_reaH_16.setVisible(false);lyr_reaG_17.setVisible(false);lyr_reaF_18.setVisible(false);lyr_reaE_19.setVisible(false);lyr_reaD_20.setVisible(false);lyr_reaC_21.setVisible(false);lyr_reaB_22.setVisible(false);lyr_reaA_23.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.setVisible(false);lyr_reaaseraverbadaPartedareaG_25.setVisible(false);lyr_LoteEMDEF10unid218783m_26.setVisible(false);lyr_LoteEMDEF10unid_27.setVisible(false);lyr_Lote504unid13809703m_28.setVisible(false);lyr_Lote504unid_29.setVisible(false);lyr_APP169unid238007435m_30.setVisible(false);lyr_readeUsoEspecial247unid269765616m_31.setVisible(false);lyr_reaInstitucional240unid136439095m_32.setVisible(false);lyr_reaPatrimonial33unid15807656m_33.setVisible(false);lyr_reaVerde2011unid845466642m_34.setVisible(false);lyr_CondomnioIICityPetrpolis_35.setVisible(false);lyr_CondomnioIICityPetrpolis_36.setVisible(false);lyr_CondomnioICityPetrpolis_37.setVisible(false);lyr_CondomnioICityPetrpolis_38.setVisible(false);lyr_EmpreendimentoArizona_39.setVisible(false);lyr_EmpreendimentoArizona_40.setVisible(false);lyr_EmpreendimentoFazendaProgresso_41.setVisible(false);lyr_EmpreendimentoFazendaProgresso_42.setVisible(false);lyr_EmpreendimentoVillaBella_43.setVisible(false);lyr_EmpreendimentoVillaBella_44.setVisible(false);lyr_EmpreendimentoVillaDoratta_45.setVisible(false);lyr_EmpreendimentoVillaDoratta_46.setVisible(false);lyr_EmpreendimentoDioceseFranca_47.setVisible(false);lyr_EmpreendimentoDioceseFranca_48.setVisible(false);lyr_EmpreendimentoAdonis_49.setVisible(false);lyr_EmpreendimentoAdonis_50.setVisible(false);lyr_EmpreendimentoInfratecinica_51.setVisible(false);lyr_EmpreendimentoInfratecinica_52.setVisible(false);lyr_EmpreendimentoResidencialBoaVista_53.setVisible(false);lyr_EmpreendimentoResidencialBoaVista_54.setVisible(false);lyr_EmpreendimentoCondomnioResicencialTerraNova_55.setVisible(false);lyr_EmpreendimentoCondomnioResicencialTerraNova_56.setVisible(false);lyr_EmpreendimentoVillaDiEspanhaIII_57.setVisible(false);lyr_EmpreendimentoVillaDiEspanhaIII_58.setVisible(false);lyr_EmpreendimentoSoCarlosII_59.setVisible(false);lyr_EmpreendimentoSoCarlosII_60.setVisible(false);lyr_EmpreendimentoParqueFlora_61.setVisible(false);lyr_EmpreendimentoParqueFlora_62.setVisible(false);lyr_EmpreendimentoVittaSoVicente_63.setVisible(false);lyr_EmpreendimentoVittaSoVicente_64.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_65.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_66.setVisible(false);lyr_EmpreendimentoParquedosSabias_67.setVisible(false);lyr_EmpreendimentoParquedosSabias_68.setVisible(false);lyr_EmpreendimentoMoradadaMata_69.setVisible(false);lyr_EmpreendimentoMoradadaMata_70.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_71.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_72.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_73.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_74.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_75.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_76.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_77.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_78.setVisible(false);lyr_EmpreendimentoLoteamentolamo_79.setVisible(false);lyr_EmpreendimentoLoteamentolamo_80.setVisible(false);lyr_EmpreendimentoSantaLina_81.setVisible(false);lyr_EmpreendimentoSantaLina_82.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegreII_83.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegreII_84.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_85.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_86.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_87.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_88.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_89.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_90.setVisible(false);lyr_EmpreendimentoResidenciaisVivenna_91.setVisible(false);lyr_EmpreendimentoResidenciaisVivenna_92.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_93.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_94.setVisible(false);lyr_EmprendimentoElias_95.setVisible(false);lyr_EmprendimentoElias_96.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_97.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_98.setVisible(false);lyr_EmpreendimentoMonti_99.setVisible(false);lyr_EmpreendimentoMonti_100.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_101.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_102.setVisible(false);lyr_EmpreendimentoVittaAlvorada_103.setVisible(false);lyr_EmpreendimentoVittaAlvorada_104.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_105.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_106.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_107.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_108.setVisible(false);lyr_EmpreendimentoPalmeiraReal_109.setVisible(false);lyr_EmpreendimentoPalmeiraReal_110.setVisible(false);lyr_EmpreendimentoEssence_111.setVisible(false);lyr_EmpreendimentoEssence_112.setVisible(false);lyr_EmpreendimentoVersalhes_113.setVisible(false);lyr_EmpreendimentoVersalhes_114.setVisible(false);lyr_EmpreendimentoSonetto_115.setVisible(false);lyr_EmpreendimentoSonetto_116.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_117.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_118.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_119.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_120.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_121.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_122.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_123.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_124.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_125.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_126.setVisible(false);lyr_EmpreendimentoBordadaMata_127.setVisible(false);lyr_EmpreendimentoBordadaMata_128.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_129.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_130.setVisible(false);lyr_EmpreendimentoHorizResidence_131.setVisible(false);lyr_EmpreendimentoHorizResidence_132.setVisible(false);lyr_EmpreendimentoJardimFlora_133.setVisible(false);lyr_EmpreendimentoJardimFlora_134.setVisible(false);lyr_EmpreendimentoJardimHorizonte_135.setVisible(false);lyr_EmpreendimentoJardimHorizonte_136.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_137.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_138.setVisible(false);lyr_EmpreendimentoMontBlancResidence_139.setVisible(false);lyr_EmpreendimentoMontBlancResidence_140.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_141.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_142.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_143.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_144.setVisible(false);lyr_EmpreendimentoParagonII_145.setVisible(false);lyr_EmpreendimentoParagonII_146.setVisible(false);lyr_EmpreendimentoParagon_147.setVisible(false);lyr_EmpreendimentoParagon_148.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_149.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_150.setVisible(false);lyr_EmpreendimentoDaVinci_151.setVisible(false);lyr_EmpreendimentoDaVinci_152.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_153.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_154.setVisible(false);lyr_EmpreendimentoResidencialSantaF_155.setVisible(false);lyr_EmpreendimentoResidencialSantaF_156.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_157.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_158.setVisible(false);lyr_EmpreendimentoTorontoResidence_159.setVisible(false);lyr_EmpreendimentoTorontoResidence_160.setVisible(false);lyr_EmpreendimentoCidadeJardim_161.setVisible(false);lyr_EmpreendimentoCidadeJardim_162.setVisible(false);lyr_EmpreendimentoColorado_163.setVisible(false);lyr_EmpreendimentoColorado_164.setVisible(false);lyr_EmpreendimentoFerracini_165.setVisible(false);lyr_EmpreendimentoFerracini_166.setVisible(false);lyr_EmpreendimentoResicencialNairRetuciII_167.setVisible(false);lyr_EmpreendimentoResicencialNairRetuciII_168.setVisible(false);lyr_EmpreendimentoVillaPucci_169.setVisible(false);lyr_EmpreendimentoVillaPucci_170.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_171.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_172.setVisible(false);lyr_EmpreendimentosAprovado27unid_173.setVisible(false);lyr_EmpreendimentosDiretriz8unid_174.setVisible(false);lyr_EmpreendimentosDefinitiva7unid_175.setVisible(false);lyr_EmpreendimentosPrvia24unid_176.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_177.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_178.setVisible(false);lyr_PBZPAHospitalHELIPONTO_179.setVisible(false);lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180.setVisible(false);lyr_DeclividadeZonaUrbanaCopernicus30m_181.setVisible(false);lyr_DeclividadeZonaRuralSulCopernicus30m_182.setVisible(false);lyr_DeclividadeZonaRuralNorteCopernicus30m_183.setVisible(false);lyr_FazendaBarroPretoeBambus_184.setVisible(false);lyr_Matrcula106206_185.setVisible(false);lyr_RecantoEmanuelMatrcula95782_186.setVisible(false);lyr_RecantoEmanuelMatrcula95783_187.setVisible(false);lyr_StioNossaSenhoraAparecida_188.setVisible(false);lyr_LoteamentosClandestinos3unid_189.setVisible(false);lyr_ParqueZumbidosPalmares_190.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192.setVisible(false);lyr_AntigoAterrodasMaritacas_193.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_197.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199.setVisible(false);lyr_ARORemanescentesFlorestais_200.setVisible(false);lyr_AROreadeAmortecimento_201.setVisible(false);lyr_AROFaixadeCuestas_202.setVisible(false);lyr_AROAPP_203.setVisible(false);lyr_ARAIncongrunciasemAPP_204.setVisible(false);lyr_ARAETELagoas_205.setVisible(false);lyr_ARAAterros_206.setVisible(false);lyr_AODreaUrbanaConsolidada_207.setVisible(false);lyr_AODBaixaDensidadeNvel3_208.setVisible(false);lyr_AODBaixaDensidadeNvel2_209.setVisible(false);lyr_AODBaixaDensidadeNvel1_210.setVisible(false);lyr_AODAUSFase2_211.setVisible(false);lyr_AODAUSFase1_212.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_213.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_214.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_215.setVisible(false);lyr_AoCivilPblica1unid_216.setVisible(false);lyr_AoCivilPblica1unid_217.setVisible(false);lyr_CartaAnuncia20unid_218.setVisible(false);lyr_CartaAnuncia19unid_219.setVisible(false);lyr_PlantioVoluntrio1unid_220.setVisible(false);lyr_PlantioVoluntrio1unid_221.setVisible(false);lyr_TACMinistrioPblico9unid_222.setVisible(false);lyr_TACMinistrioPblico9unid_223.setVisible(false);lyr_TCRACETESB28unid_224.setVisible(false);lyr_TCRACETESB28unid_225.setVisible(false);lyr_TCRAMunicipal14unid_226.setVisible(false);lyr_TCRAMunicipal14unid_227.setVisible(false);lyr_TRPRLCETESB2unid_228.setVisible(false);lyr_TRPRLCETESB2unid_229.setVisible(false);lyr_rvoreImuneaoCorte8unid_230.setVisible(false);lyr_Voorocas26unid_231.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,group_HidrografiaFBDS2025,group_FazendaMunicipalPousoAlto,group_reasPblicas,group_SecretariadeInfraestrutura,group_Declividade,group_LoteamentosClandestinos,group_GerenciamentodereasContaminadas,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_reasCompromissadas,lyr_rvoreImuneaoCorte8unid_230,lyr_Voorocas26unid_231];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_reaUrbanadeFranca_4.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Código da UF': 'Código da UF', 'Classe de Uso': 'Classe de Uso', 'Área (ha)': 'Área (ha)', 'Área (km²)': 'Área (km²)', });
lyr_APP1745unid_5.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_6.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_7.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_8.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_9.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_reaN_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
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
lyr_CondomnioIICityPetrpolis_35.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_36.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_37.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_38.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoArizona_39.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoArizona_40.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFazendaProgresso_41.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFazendaProgresso_42.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaBella_43.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaBella_44.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDoratta_45.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDoratta_46.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDioceseFranca_47.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDioceseFranca_48.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_49.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_50.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoInfratecinica_51.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoInfratecinica_52.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialBoaVista_53.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialBoaVista_54.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_55.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_56.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDiEspanhaIII_57.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDiEspanhaIII_58.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_59.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_60.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_61.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_62.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_63.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_64.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoRecantoMeneghetti_65.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoRecantoMeneghetti_66.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_67.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_68.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_69.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_70.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_71.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_72.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialJabuticabeiras_73.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialJabuticabeiras_74.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_75.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_76.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_77.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_78.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_79.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_80.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_81.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_82.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegreII_83.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegreII_84.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_85.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_86.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_87.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_88.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialMarioTasso_89.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarioTasso_90.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidenciaisVivenna_91.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidenciaisVivenna_92.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_93.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_94.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_95.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_96.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialSoCarlosI_97.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSoCarlosI_98.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoMonti_99.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMonti_100.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMoradadoBosque_101.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMoradadoBosque_102.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_103.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_104.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMarthaHelena_105.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarthaHelena_106.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialYasminTorres_107.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialYasminTorres_108.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoPalmeiraReal_109.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoPalmeiraReal_110.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEssence_111.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEssence_112.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_113.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_114.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoSonetto_115.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSonetto_116.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialSantaIns_117.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaIns_118.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEdifcioSolNascente_119.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioSolNascente_120.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadosOitis_121.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadosOitis_122.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadoSol_123.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadoSol_124.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_125.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_126.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoBordadaMata_127.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoBordadaMata_128.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_129.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_131.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagonII_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagonII_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_148.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_149.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_150.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_153.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_155.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_156.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_157.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_158.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_159.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_160.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCidadeJardim_161.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCidadeJardim_162.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoColorado_163.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoColorado_164.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFerracini_165.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFerracini_166.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuciII_167.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuciII_168.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaPucci_169.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaPucci_170.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_171.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_172.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_EmpreendimentosAprovado27unid_173.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDiretriz8unid_174.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDefinitiva7unid_175.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosPrvia24unid_176.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_PBZPAEdifcioPrimeHELIPONTO_177.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAEdifcioPrimeHELIPONTO_178.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAHospitalHELIPONTO_179.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_DeclividadeZonaUrbanaCopernicus30m_181.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_DeclividadeZonaRuralSulCopernicus30m_182.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_183.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_FazendaBarroPretoeBambus_184.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_Matrcula106206_185.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_RecantoEmanuelMatrcula95782_186.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_RecantoEmanuelMatrcula95783_187.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_StioNossaSenhoraAparecida_188.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_LoteamentosClandestinos3unid_189.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'area': 'area', 'multa': 'multa', 'ufmf': 'ufmf', });
lyr_ParqueZumbidosPalmares_190.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacas_193.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodaFazendaMunicipal_197.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198.set('fieldAliases', {'fid': 'fid', 'Field1': 'Poço', 'Field2': 'Field2', 'Field3': 'Field3', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Poço', });
lyr_ARORemanescentesFlorestais_200.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_201.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_202.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_203.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_204.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_205.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_206.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_207.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_208.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_209.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_210.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_211.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'SUM_area': 'SUM_area', 'FIRST_AI': 'FIRST_AI', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_212.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_213.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_214.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_215.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_AoCivilPblica1unid_216.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_217.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia20unid_218.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia19unid_219.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio1unid_220.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_221.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico9unid_222.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_223.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB28unid_224.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESB28unid_225.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal14unid_226.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal14unid_227.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB2unid_228.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_229.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_rvoreImuneaoCorte8unid_230.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_Voorocas26unid_231.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'CD_MUN': '', 'NM_MUN': '', 'CD_RGI': '', 'NM_RGI': '', 'CD_RGINT': '', 'NM_RGINT': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIA': '', 'NM_REGIA': '', 'SIGLA_RG': '', 'CD_CONCU': '', 'NM_CONCU': '', 'AREA_KM2': '', });
lyr_reaUrbanadeFranca_4.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Código da UF': '', 'Classe de Uso': '', 'Área (ha)': '', 'Área (km²)': '', });
lyr_APP1745unid_5.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_6.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_7.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_8.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_9.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_reaN_10.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
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
lyr_CondomnioIICityPetrpolis_35.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_36.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_37.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_38.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoArizona_39.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoArizona_40.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFazendaProgresso_41.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFazendaProgresso_42.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaBella_43.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaBella_44.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDoratta_45.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDoratta_46.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDioceseFranca_47.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDioceseFranca_48.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_49.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_50.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoInfratecinica_51.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoInfratecinica_52.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialBoaVista_53.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialBoaVista_54.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_55.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_56.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDiEspanhaIII_57.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDiEspanhaIII_58.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_59.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_60.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_61.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_62.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_63.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_64.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoRecantoMeneghetti_65.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoRecantoMeneghetti_66.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_67.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_68.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_69.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_70.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_71.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_72.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_73.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_74.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_75.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_76.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_77.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_78.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoLoteamentolamo_79.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoLoteamentolamo_80.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_81.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_82.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegreII_83.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegreII_84.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_85.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_86.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_87.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_88.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialMarioTasso_89.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarioTasso_90.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidenciaisVivenna_91.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidenciaisVivenna_92.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_93.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_94.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmprendimentoElias_95.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmprendimentoElias_96.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialSoCarlosI_97.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSoCarlosI_98.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoMonti_99.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMonti_100.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_101.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_102.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_103.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_104.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMarthaHelena_105.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarthaHelena_106.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialYasminTorres_107.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialYasminTorres_108.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoPalmeiraReal_109.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoPalmeiraReal_110.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEssence_111.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEssence_112.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_113.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_114.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoSonetto_115.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSonetto_116.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialSantaIns_117.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaIns_118.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEdifcioSolNascente_119.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioSolNascente_120.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_121.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_122.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadoSol_123.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadoSol_124.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_125.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_126.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoBordadaMata_127.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoBordadaMata_128.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_129.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_130.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_131.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_132.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_134.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_136.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_140.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_142.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_143.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_144.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagonII_145.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagonII_146.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_147.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_148.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_149.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_150.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_151.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_152.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_153.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_154.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_155.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_156.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_157.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_158.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_159.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_160.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCidadeJardim_161.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCidadeJardim_162.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoColorado_163.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoColorado_164.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFerracini_165.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFerracini_166.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuciII_167.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuciII_168.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaPucci_169.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaPucci_170.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_171.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_172.set('fieldImages', {'fid': '', 'id': '', });
lyr_EmpreendimentosAprovado27unid_173.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDiretriz8unid_174.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDefinitiva7unid_175.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosPrvia24unid_176.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_177.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_178.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAHospitalHELIPONTO_179.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_DeclividadeZonaUrbanaCopernicus30m_181.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_DeclividadeZonaRuralSulCopernicus30m_182.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_183.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_FazendaBarroPretoeBambus_184.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_Matrcula106206_185.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RecantoEmanuelMatrcula95782_186.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RecantoEmanuelMatrcula95783_187.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_StioNossaSenhoraAparecida_188.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_LoteamentosClandestinos3unid_189.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_ParqueZumbidosPalmares_190.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_193.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_197.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198.set('fieldImages', {'fid': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ARORemanescentesFlorestais_200.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_201.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_202.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_203.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_204.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_205.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_206.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_207.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_208.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_209.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_210.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_211.set('fieldImages', {'fid': '', 'Classe': '', 'SUM_area': '', 'FIRST_AI': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase1_212.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_213.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_214.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_215.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_AoCivilPblica1unid_216.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_217.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_CartaAnuncia20unid_218.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia19unid_219.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_PlantioVoluntrio1unid_220.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_221.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_TACMinistrioPblico9unid_222.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_223.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TCRACETESB28unid_224.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB28unid_225.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', });
lyr_TCRAMunicipal14unid_226.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal14unid_227.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TRPRLCETESB2unid_228.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_229.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_rvoreImuneaoCorte8unid_230.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_Voorocas26unid_231.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_reaUrbanadeFranca_4.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Código da UF': 'hidden field', 'Classe de Uso': 'hidden field', 'Área (ha)': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_APP1745unid_5.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_RiosDuplos84unid_6.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_7.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_8.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_9.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_reaN_10.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
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
lyr_CondomnioIICityPetrpolis_35.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_36.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_37.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_38.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoArizona_39.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoArizona_40.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFazendaProgresso_41.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFazendaProgresso_42.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaBella_43.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaBella_44.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDoratta_45.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDoratta_46.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDioceseFranca_47.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDioceseFranca_48.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_49.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_50.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoInfratecinica_51.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoInfratecinica_52.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialBoaVista_53.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialBoaVista_54.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_55.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCondomnioResicencialTerraNova_56.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDiEspanhaIII_57.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDiEspanhaIII_58.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_59.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_60.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_61.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_62.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_63.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_64.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoRecantoMeneghetti_65.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoRecantoMeneghetti_66.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_67.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_68.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_69.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_70.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_71.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_72.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialJabuticabeiras_73.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialJabuticabeiras_74.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_75.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_76.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_77.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_78.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_79.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_80.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_81.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_82.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegreII_83.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegreII_84.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_85.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_86.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_87.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_88.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialMarioTasso_89.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarioTasso_90.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidenciaisVivenna_91.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidenciaisVivenna_92.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_93.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_94.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_95.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_96.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialSoCarlosI_97.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSoCarlosI_98.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoMonti_99.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMonti_100.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMoradadoBosque_101.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMoradadoBosque_102.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_103.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_104.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMarthaHelena_105.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarthaHelena_106.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialYasminTorres_107.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialYasminTorres_108.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoPalmeiraReal_109.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoPalmeiraReal_110.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEssence_111.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEssence_112.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_113.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_114.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoSonetto_115.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSonetto_116.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialSantaIns_117.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaIns_118.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEdifcioSolNascente_119.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioSolNascente_120.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadosOitis_121.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadosOitis_122.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadoSol_123.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadoSol_124.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_125.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_126.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoBordadaMata_127.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoBordadaMata_128.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_129.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_130.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_131.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_143.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_144.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagonII_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagonII_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_148.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_149.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_150.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_153.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_155.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_156.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_157.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_158.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_159.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_160.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCidadeJardim_161.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCidadeJardim_162.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoColorado_163.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoColorado_164.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFerracini_165.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFerracini_166.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuciII_167.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuciII_168.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaPucci_169.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaPucci_170.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_171.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_172.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_EmpreendimentosAprovado27unid_173.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDiretriz8unid_174.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDefinitiva7unid_175.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosPrvia24unid_176.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_177.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_178.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAHospitalHELIPONTO_179.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_180.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_DeclividadeZonaUrbanaCopernicus30m_181.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_DeclividadeZonaRuralSulCopernicus30m_182.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_183.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_FazendaBarroPretoeBambus_184.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_Matrcula106206_185.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RecantoEmanuelMatrcula95782_186.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RecantoEmanuelMatrcula95783_187.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_StioNossaSenhoraAparecida_188.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_LoteamentosClandestinos3unid_189.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_ParqueZumbidosPalmares_190.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_191.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_192.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacas_193.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_194.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_195.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_196.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipal_197.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_198.set('fieldLabels', {'fid': 'hidden field', 'Field1': 'inline label - visible with data', 'Field2': 'hidden field', 'Field3': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_199.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_200.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_201.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_202.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_203.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_204.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_205.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_206.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_207.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_208.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_209.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_210.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_211.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_212.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_213.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_214.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_215.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_216.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_217.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_218.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia19unid_219.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_220.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_221.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_222.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_223.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB28unid_224.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB28unid_225.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_226.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_227.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_228.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_229.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte8unid_230.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_Voorocas26unid_231.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_Voorocas26unid_231.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});