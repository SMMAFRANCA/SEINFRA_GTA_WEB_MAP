ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([233773.385900, 7700979.946759, 276615.687500, 7740736.000000]);
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
var format_StioNossaSenhoraAparecida_10 = new ol.format.GeoJSON();
var features_StioNossaSenhoraAparecida_10 = format_StioNossaSenhoraAparecida_10.readFeatures(json_StioNossaSenhoraAparecida_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_StioNossaSenhoraAparecida_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StioNossaSenhoraAparecida_10.addFeatures(features_StioNossaSenhoraAparecida_10);
var lyr_StioNossaSenhoraAparecida_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StioNossaSenhoraAparecida_10, 
                style: style_StioNossaSenhoraAparecida_10,
                popuplayertitle: 'Sítio Nossa Senhora Aparecida',
                interactive: true,
                title: '<img src="styles/legend/StioNossaSenhoraAparecida_10.png" /> Sítio Nossa Senhora Aparecida'
            });
var format_FazendaBarroPretoeBambus_11 = new ol.format.GeoJSON();
var features_FazendaBarroPretoeBambus_11 = format_FazendaBarroPretoeBambus_11.readFeatures(json_FazendaBarroPretoeBambus_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaBarroPretoeBambus_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaBarroPretoeBambus_11.addFeatures(features_FazendaBarroPretoeBambus_11);
var lyr_FazendaBarroPretoeBambus_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaBarroPretoeBambus_11, 
                style: style_FazendaBarroPretoeBambus_11,
                popuplayertitle: 'Fazenda Barro Preto e Bambus',
                interactive: true,
                title: '<img src="styles/legend/FazendaBarroPretoeBambus_11.png" /> Fazenda Barro Preto e Bambus'
            });
var format_RemanescentedaMatrcula11419_12 = new ol.format.GeoJSON();
var features_RemanescentedaMatrcula11419_12 = format_RemanescentedaMatrcula11419_12.readFeatures(json_RemanescentedaMatrcula11419_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RemanescentedaMatrcula11419_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RemanescentedaMatrcula11419_12.addFeatures(features_RemanescentedaMatrcula11419_12);
var lyr_RemanescentedaMatrcula11419_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RemanescentedaMatrcula11419_12, 
                style: style_RemanescentedaMatrcula11419_12,
                popuplayertitle: 'Remanescente da Matrícula 11419',
                interactive: true,
                title: '<img src="styles/legend/RemanescentedaMatrcula11419_12.png" /> Remanescente da Matrícula 11419'
            });
var format_ConjuntoHabitacional_13 = new ol.format.GeoJSON();
var features_ConjuntoHabitacional_13 = format_ConjuntoHabitacional_13.readFeatures(json_ConjuntoHabitacional_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ConjuntoHabitacional_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConjuntoHabitacional_13.addFeatures(features_ConjuntoHabitacional_13);
var lyr_ConjuntoHabitacional_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConjuntoHabitacional_13, 
                style: style_ConjuntoHabitacional_13,
                popuplayertitle: 'Conjunto Habitacional',
                interactive: true,
                title: '<img src="styles/legend/ConjuntoHabitacional_13.png" /> Conjunto Habitacional'
            });
var format_AvdeacessoaoHortoeColgioAgrcola_14 = new ol.format.GeoJSON();
var features_AvdeacessoaoHortoeColgioAgrcola_14 = format_AvdeacessoaoHortoeColgioAgrcola_14.readFeatures(json_AvdeacessoaoHortoeColgioAgrcola_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AvdeacessoaoHortoeColgioAgrcola_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvdeacessoaoHortoeColgioAgrcola_14.addFeatures(features_AvdeacessoaoHortoeColgioAgrcola_14);
var lyr_AvdeacessoaoHortoeColgioAgrcola_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvdeacessoaoHortoeColgioAgrcola_14, 
                style: style_AvdeacessoaoHortoeColgioAgrcola_14,
                popuplayertitle: 'Av. de acesso ao Horto e Colégio Agrícola',
                interactive: true,
                title: '<img src="styles/legend/AvdeacessoaoHortoeColgioAgrcola_14.png" /> Av. de acesso ao Horto e Colégio Agrícola'
            });
var format_reaK_15 = new ol.format.GeoJSON();
var features_reaK_15 = format_reaK_15.readFeatures(json_reaK_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaK_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaK_15.addFeatures(features_reaK_15);
var lyr_reaK_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaK_15, 
                style: style_reaK_15,
                popuplayertitle: 'Área K',
                interactive: true,
                title: '<img src="styles/legend/reaK_15.png" /> Área K'
            });
var format_reaJ_16 = new ol.format.GeoJSON();
var features_reaJ_16 = format_reaJ_16.readFeatures(json_reaJ_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaJ_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaJ_16.addFeatures(features_reaJ_16);
var lyr_reaJ_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaJ_16, 
                style: style_reaJ_16,
                popuplayertitle: 'Área J',
                interactive: true,
                title: '<img src="styles/legend/reaJ_16.png" /> Área J'
            });
var format_reaI_17 = new ol.format.GeoJSON();
var features_reaI_17 = format_reaI_17.readFeatures(json_reaI_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaI_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaI_17.addFeatures(features_reaI_17);
var lyr_reaI_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaI_17, 
                style: style_reaI_17,
                popuplayertitle: 'Área I',
                interactive: true,
                title: '<img src="styles/legend/reaI_17.png" /> Área I'
            });
var format_reaH_18 = new ol.format.GeoJSON();
var features_reaH_18 = format_reaH_18.readFeatures(json_reaH_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaH_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaH_18.addFeatures(features_reaH_18);
var lyr_reaH_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaH_18, 
                style: style_reaH_18,
                popuplayertitle: 'Área H',
                interactive: true,
                title: '<img src="styles/legend/reaH_18.png" /> Área H'
            });
var format_reaG_19 = new ol.format.GeoJSON();
var features_reaG_19 = format_reaG_19.readFeatures(json_reaG_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaG_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaG_19.addFeatures(features_reaG_19);
var lyr_reaG_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaG_19, 
                style: style_reaG_19,
                popuplayertitle: 'Área G',
                interactive: true,
                title: '<img src="styles/legend/reaG_19.png" /> Área G'
            });
var format_reaF_20 = new ol.format.GeoJSON();
var features_reaF_20 = format_reaF_20.readFeatures(json_reaF_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaF_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaF_20.addFeatures(features_reaF_20);
var lyr_reaF_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaF_20, 
                style: style_reaF_20,
                popuplayertitle: 'Área F',
                interactive: true,
                title: '<img src="styles/legend/reaF_20.png" /> Área F'
            });
var format_reaE_21 = new ol.format.GeoJSON();
var features_reaE_21 = format_reaE_21.readFeatures(json_reaE_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaE_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaE_21.addFeatures(features_reaE_21);
var lyr_reaE_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaE_21, 
                style: style_reaE_21,
                popuplayertitle: 'Área E',
                interactive: true,
                title: '<img src="styles/legend/reaE_21.png" /> Área E'
            });
var format_reaD_22 = new ol.format.GeoJSON();
var features_reaD_22 = format_reaD_22.readFeatures(json_reaD_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaD_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaD_22.addFeatures(features_reaD_22);
var lyr_reaD_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaD_22, 
                style: style_reaD_22,
                popuplayertitle: 'Área D',
                interactive: true,
                title: '<img src="styles/legend/reaD_22.png" /> Área D'
            });
var format_reaC_23 = new ol.format.GeoJSON();
var features_reaC_23 = format_reaC_23.readFeatures(json_reaC_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaC_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaC_23.addFeatures(features_reaC_23);
var lyr_reaC_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaC_23, 
                style: style_reaC_23,
                popuplayertitle: 'Área C',
                interactive: true,
                title: '<img src="styles/legend/reaC_23.png" /> Área C'
            });
var format_reaB_24 = new ol.format.GeoJSON();
var features_reaB_24 = format_reaB_24.readFeatures(json_reaB_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaB_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaB_24.addFeatures(features_reaB_24);
var lyr_reaB_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaB_24, 
                style: style_reaB_24,
                popuplayertitle: 'Área B',
                interactive: true,
                title: '<img src="styles/legend/reaB_24.png" /> Área B'
            });
var format_reaA_25 = new ol.format.GeoJSON();
var features_reaA_25 = format_reaA_25.readFeatures(json_reaA_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaA_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaA_25.addFeatures(features_reaA_25);
var lyr_reaA_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaA_25, 
                style: style_reaA_25,
                popuplayertitle: 'Área A',
                interactive: true,
                title: '<img src="styles/legend/reaA_25.png" /> Área A'
            });
var format_reaAverbada355235ReservaFlorestalLegalPartedareaG_26 = new ol.format.GeoJSON();
var features_reaAverbada355235ReservaFlorestalLegalPartedareaG_26 = format_reaAverbada355235ReservaFlorestalLegalPartedareaG_26.readFeatures(json_reaAverbada355235ReservaFlorestalLegalPartedareaG_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_26.addFeatures(features_reaAverbada355235ReservaFlorestalLegalPartedareaG_26);
var lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_26, 
                style: style_reaAverbada355235ReservaFlorestalLegalPartedareaG_26,
                popuplayertitle: 'Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaAverbada355235ReservaFlorestalLegalPartedareaG_26.png" /> Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)'
            });
var format_reaaseraverbadaPartedareaG_27 = new ol.format.GeoJSON();
var features_reaaseraverbadaPartedareaG_27 = format_reaaseraverbadaPartedareaG_27.readFeatures(json_reaaseraverbadaPartedareaG_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaaseraverbadaPartedareaG_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaaseraverbadaPartedareaG_27.addFeatures(features_reaaseraverbadaPartedareaG_27);
var lyr_reaaseraverbadaPartedareaG_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaaseraverbadaPartedareaG_27, 
                style: style_reaaseraverbadaPartedareaG_27,
                popuplayertitle: 'Área a ser averbada (Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaaseraverbadaPartedareaG_27.png" /> Área a ser averbada (Parte da Área G)'
            });
var format_LoteEMDEF10unid218783m_28 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid218783m_28 = format_LoteEMDEF10unid218783m_28.readFeatures(json_LoteEMDEF10unid218783m_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid218783m_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid218783m_28.addFeatures(features_LoteEMDEF10unid218783m_28);
var lyr_LoteEMDEF10unid218783m_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid218783m_28, 
                style: style_LoteEMDEF10unid218783m_28,
                popuplayertitle: 'Lote EMDEF (10 unid. / 2187.83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid218783m_28.png" /> Lote EMDEF (10 unid. / 2187.83 m²)'
            });
var format_LoteEMDEF10unid_29 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid_29 = format_LoteEMDEF10unid_29.readFeatures(json_LoteEMDEF10unid_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid_29.addFeatures(features_LoteEMDEF10unid_29);
var lyr_LoteEMDEF10unid_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid_29, 
                style: style_LoteEMDEF10unid_29,
                popuplayertitle: 'Lote EMDEF (10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid_29.png" /> Lote EMDEF (10 unid.)'
            });
var format_Lote502unid13759703m_30 = new ol.format.GeoJSON();
var features_Lote502unid13759703m_30 = format_Lote502unid13759703m_30.readFeatures(json_Lote502unid13759703m_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote502unid13759703m_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote502unid13759703m_30.addFeatures(features_Lote502unid13759703m_30);
var lyr_Lote502unid13759703m_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote502unid13759703m_30, 
                style: style_Lote502unid13759703m_30,
                popuplayertitle: 'Lote (502 unid. / 137597.03 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote502unid13759703m_30.png" /> Lote (502 unid. / 137597.03 m²)'
            });
var format_Lote502unid_31 = new ol.format.GeoJSON();
var features_Lote502unid_31 = format_Lote502unid_31.readFeatures(json_Lote502unid_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote502unid_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote502unid_31.addFeatures(features_Lote502unid_31);
var lyr_Lote502unid_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote502unid_31, 
                style: style_Lote502unid_31,
                popuplayertitle: 'Lote (502 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote502unid_31.png" /> Lote (502 unid.)'
            });
var format_APP168unid238007435m_32 = new ol.format.GeoJSON();
var features_APP168unid238007435m_32 = format_APP168unid238007435m_32.readFeatures(json_APP168unid238007435m_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP168unid238007435m_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP168unid238007435m_32.addFeatures(features_APP168unid238007435m_32);
var lyr_APP168unid238007435m_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP168unid238007435m_32, 
                style: style_APP168unid238007435m_32,
                popuplayertitle: 'APP (168 unid. / 2380074.35 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP168unid238007435m_32.png" /> APP (168 unid. / 2380074.35 m²)'
            });
var format_readeUsoEspecial251unid269349873m_33 = new ol.format.GeoJSON();
var features_readeUsoEspecial251unid269349873m_33 = format_readeUsoEspecial251unid269349873m_33.readFeatures(json_readeUsoEspecial251unid269349873m_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeUsoEspecial251unid269349873m_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial251unid269349873m_33.addFeatures(features_readeUsoEspecial251unid269349873m_33);
var lyr_readeUsoEspecial251unid269349873m_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial251unid269349873m_33, 
                style: style_readeUsoEspecial251unid269349873m_33,
                popuplayertitle: 'Área de Uso Especial (251 unid. / 2693498.73 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial251unid269349873m_33.png" /> Área de Uso Especial (251 unid. / 2693498.73 m²)'
            });
var format_reaInstitucional240unid136661229m_34 = new ol.format.GeoJSON();
var features_reaInstitucional240unid136661229m_34 = format_reaInstitucional240unid136661229m_34.readFeatures(json_reaInstitucional240unid136661229m_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaInstitucional240unid136661229m_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional240unid136661229m_34.addFeatures(features_reaInstitucional240unid136661229m_34);
var lyr_reaInstitucional240unid136661229m_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional240unid136661229m_34, 
                style: style_reaInstitucional240unid136661229m_34,
                popuplayertitle: 'Área Institucional (240 unid. / 1366612.29 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional240unid136661229m_34.png" /> Área Institucional (240 unid. / 1366612.29 m²)'
            });
var format_reaPatrimonial33unid15807656m_35 = new ol.format.GeoJSON();
var features_reaPatrimonial33unid15807656m_35 = format_reaPatrimonial33unid15807656m_35.readFeatures(json_reaPatrimonial33unid15807656m_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaPatrimonial33unid15807656m_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial33unid15807656m_35.addFeatures(features_reaPatrimonial33unid15807656m_35);
var lyr_reaPatrimonial33unid15807656m_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial33unid15807656m_35, 
                style: style_reaPatrimonial33unid15807656m_35,
                popuplayertitle: 'Área Patrimonial (33 unid. / 158076.56 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial33unid15807656m_35.png" /> Área Patrimonial (33 unid. / 158076.56 m²)'
            });
var format_reaVerde2008unid836299560m_36 = new ol.format.GeoJSON();
var features_reaVerde2008unid836299560m_36 = format_reaVerde2008unid836299560m_36.readFeatures(json_reaVerde2008unid836299560m_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaVerde2008unid836299560m_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde2008unid836299560m_36.addFeatures(features_reaVerde2008unid836299560m_36);
var lyr_reaVerde2008unid836299560m_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde2008unid836299560m_36, 
                style: style_reaVerde2008unid836299560m_36,
                popuplayertitle: 'Área Verde (2008 unid. / 8362995.60 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde2008unid836299560m_36.png" /> Área Verde (2008 unid. / 8362995.60 m²)'
            });
var format_EmpreendimentoVillaDoratta_37 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDoratta_37 = format_EmpreendimentoVillaDoratta_37.readFeatures(json_EmpreendimentoVillaDoratta_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDoratta_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDoratta_37.addFeatures(features_EmpreendimentoVillaDoratta_37);
var lyr_EmpreendimentoVillaDoratta_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDoratta_37, 
                style: style_EmpreendimentoVillaDoratta_37,
                popuplayertitle: 'Empreendimento Villa Doratta',
                interactive: true,
    title: 'Empreendimento Villa Doratta<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_37_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_37_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_37_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_37_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_37_4.png" /> LOTES ABERTOS<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_37_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_37_6.png" /> RUAS<br />' });
var format_EmpreendimentoVillaDoratta_38 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDoratta_38 = format_EmpreendimentoVillaDoratta_38.readFeatures(json_EmpreendimentoVillaDoratta_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDoratta_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDoratta_38.addFeatures(features_EmpreendimentoVillaDoratta_38);
var lyr_EmpreendimentoVillaDoratta_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDoratta_38, 
                style: style_EmpreendimentoVillaDoratta_38,
                popuplayertitle: 'Empreendimento Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaDoratta_38.png" /> Empreendimento Villa Doratta'
            });
var format_EmpreendimentoSoCarlosII_39 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_39 = format_EmpreendimentoSoCarlosII_39.readFeatures(json_EmpreendimentoSoCarlosII_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_39.addFeatures(features_EmpreendimentoSoCarlosII_39);
var lyr_EmpreendimentoSoCarlosII_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_39, 
                style: style_EmpreendimentoSoCarlosII_39,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
    title: 'Empreendimento São Carlos II<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_39_0.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_39_1.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_39_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_39_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_39_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_39_5.png" /> RUAS<br />' });
var format_EmpreendimentoSoCarlosII_40 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_40 = format_EmpreendimentoSoCarlosII_40.readFeatures(json_EmpreendimentoSoCarlosII_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_40.addFeatures(features_EmpreendimentoSoCarlosII_40);
var lyr_EmpreendimentoSoCarlosII_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_40, 
                style: style_EmpreendimentoSoCarlosII_40,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSoCarlosII_40.png" /> Empreendimento São Carlos II'
            });
var format_EmpreendimentoParqueFlora_41 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_41 = format_EmpreendimentoParqueFlora_41.readFeatures(json_EmpreendimentoParqueFlora_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_41.addFeatures(features_EmpreendimentoParqueFlora_41);
var lyr_EmpreendimentoParqueFlora_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_41, 
                style: style_EmpreendimentoParqueFlora_41,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
    title: 'Empreendimento Parque Flora<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_41_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_41_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_41_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_41_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_41_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_41_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_41_6.png" /> VIELA<br />' });
var format_EmpreendimentoParqueFlora_42 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_42 = format_EmpreendimentoParqueFlora_42.readFeatures(json_EmpreendimentoParqueFlora_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_42.addFeatures(features_EmpreendimentoParqueFlora_42);
var lyr_EmpreendimentoParqueFlora_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_42, 
                style: style_EmpreendimentoParqueFlora_42,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueFlora_42.png" /> Empreendimento Parque Flora'
            });
var format_EmpreendimentoVittaSoVicente_43 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_43 = format_EmpreendimentoVittaSoVicente_43.readFeatures(json_EmpreendimentoVittaSoVicente_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_43.addFeatures(features_EmpreendimentoVittaSoVicente_43);
var lyr_EmpreendimentoVittaSoVicente_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_43, 
                style: style_EmpreendimentoVittaSoVicente_43,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
    title: 'Empreendimento Vitta São Vicente<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_43_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_43_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_43_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_43_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_43_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_43_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVittaSoVicente_44 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_44 = format_EmpreendimentoVittaSoVicente_44.readFeatures(json_EmpreendimentoVittaSoVicente_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_44.addFeatures(features_EmpreendimentoVittaSoVicente_44);
var lyr_EmpreendimentoVittaSoVicente_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_44, 
                style: style_EmpreendimentoVittaSoVicente_44,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaSoVicente_44.png" /> Empreendimento Vitta São Vicente'
            });
var format_EmpreendimentoRecantoMeneghetti_45 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_45 = format_EmpreendimentoRecantoMeneghetti_45.readFeatures(json_EmpreendimentoRecantoMeneghetti_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_45.addFeatures(features_EmpreendimentoRecantoMeneghetti_45);
var lyr_EmpreendimentoRecantoMeneghetti_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_45, 
                style: style_EmpreendimentoRecantoMeneghetti_45,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
    title: 'Empreendimento Recanto Meneghetti<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_45_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_45_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_45_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_45_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_45_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_45_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_45_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_45_7.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_45_8.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_45_9.png" /> VIELA<br />' });
var format_EmpreendimentoRecantoMeneghetti_46 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_46 = format_EmpreendimentoRecantoMeneghetti_46.readFeatures(json_EmpreendimentoRecantoMeneghetti_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_46.addFeatures(features_EmpreendimentoRecantoMeneghetti_46);
var lyr_EmpreendimentoRecantoMeneghetti_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_46, 
                style: style_EmpreendimentoRecantoMeneghetti_46,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoRecantoMeneghetti_46.png" /> Empreendimento Recanto Meneghetti'
            });
var format_EmpreendimentoParquedosSabias_47 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_47 = format_EmpreendimentoParquedosSabias_47.readFeatures(json_EmpreendimentoParquedosSabias_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_47.addFeatures(features_EmpreendimentoParquedosSabias_47);
var lyr_EmpreendimentoParquedosSabias_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_47, 
                style: style_EmpreendimentoParquedosSabias_47,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
    title: 'Empreendimento Parque dos Sabias<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_47_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_47_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_47_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_47_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_47_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_47_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_47_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_47_7.png" /> VIELA<br />' });
var format_EmpreendimentoParquedosSabias_48 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_48 = format_EmpreendimentoParquedosSabias_48.readFeatures(json_EmpreendimentoParquedosSabias_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_48.addFeatures(features_EmpreendimentoParquedosSabias_48);
var lyr_EmpreendimentoParquedosSabias_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_48, 
                style: style_EmpreendimentoParquedosSabias_48,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquedosSabias_48.png" /> Empreendimento Parque dos Sabias'
            });
var format_EmpreendimentoMoradadaMata_49 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_49 = format_EmpreendimentoMoradadaMata_49.readFeatures(json_EmpreendimentoMoradadaMata_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_49.addFeatures(features_EmpreendimentoMoradadaMata_49);
var lyr_EmpreendimentoMoradadaMata_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_49, 
                style: style_EmpreendimentoMoradadaMata_49,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
    title: 'Empreendimento Morada da Mata<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_49_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_49_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_49_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_49_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_49_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_49_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_49_6.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_49_7.png" /> RUAS<br />' });
var format_EmpreendimentoMoradadaMata_50 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_50 = format_EmpreendimentoMoradadaMata_50.readFeatures(json_EmpreendimentoMoradadaMata_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_50.addFeatures(features_EmpreendimentoMoradadaMata_50);
var lyr_EmpreendimentoMoradadaMata_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_50, 
                style: style_EmpreendimentoMoradadaMata_50,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadaMata_50.png" /> Empreendimento Morada da Mata'
            });
var format_EmpreendimentoIrineuZanetiII_51 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_51 = format_EmpreendimentoIrineuZanetiII_51.readFeatures(json_EmpreendimentoIrineuZanetiII_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_51.addFeatures(features_EmpreendimentoIrineuZanetiII_51);
var lyr_EmpreendimentoIrineuZanetiII_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_51, 
                style: style_EmpreendimentoIrineuZanetiII_51,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
    title: 'Empreendimento Irineu Zaneti II<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_51_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_51_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_51_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_51_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_51_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_51_5.png" /> RUAS<br />' });
var format_EmpreendimentoIrineuZanetiII_52 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_52 = format_EmpreendimentoIrineuZanetiII_52.readFeatures(json_EmpreendimentoIrineuZanetiII_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_52.addFeatures(features_EmpreendimentoIrineuZanetiII_52);
var lyr_EmpreendimentoIrineuZanetiII_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_52, 
                style: style_EmpreendimentoIrineuZanetiII_52,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoIrineuZanetiII_52.png" /> Empreendimento Irineu Zaneti II'
            });
var format_EmpreendimentoAdonis_53 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_53 = format_EmpreendimentoAdonis_53.readFeatures(json_EmpreendimentoAdonis_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_53.addFeatures(features_EmpreendimentoAdonis_53);
var lyr_EmpreendimentoAdonis_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_53, 
                style: style_EmpreendimentoAdonis_53,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
    title: 'Empreendimento Adonis<br />\
    <img src="styles/legend/EmpreendimentoAdonis_53_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoAdonis_53_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoAdonis_53_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoAdonis_53_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoAdonis_53_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoAdonis_53_5.png" /> RUAS<br />' });
var format_EmpreendimentoAdonis_54 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_54 = format_EmpreendimentoAdonis_54.readFeatures(json_EmpreendimentoAdonis_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_54.addFeatures(features_EmpreendimentoAdonis_54);
var lyr_EmpreendimentoAdonis_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_54, 
                style: style_EmpreendimentoAdonis_54,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAdonis_54.png" /> Empreendimento Adonis'
            });
var format_EmpreendimentoResidencialJabuticabeiras_55 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_55 = format_EmpreendimentoResidencialJabuticabeiras_55.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_55.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_55);
var lyr_EmpreendimentoResidencialJabuticabeiras_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_55, 
                style: style_EmpreendimentoResidencialJabuticabeiras_55,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
    title: 'Empreendimento Residencial Jabuticabeiras<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_55_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_55_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_55_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_55_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_55_4.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialJabuticabeiras_56 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_56 = format_EmpreendimentoResidencialJabuticabeiras_56.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_56.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_56);
var lyr_EmpreendimentoResidencialJabuticabeiras_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_56, 
                style: style_EmpreendimentoResidencialJabuticabeiras_56,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_56.png" /> Empreendimento Residencial Jabuticabeiras'
            });
var format_EmpreendimentoResidencialMarianaAlarcon_57 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_57 = format_EmpreendimentoResidencialMarianaAlarcon_57.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_57.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_57);
var lyr_EmpreendimentoResidencialMarianaAlarcon_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_57, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_57,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
    title: 'Empreendimento Residencial Mariana Alarcon<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_57_0.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_57_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_57_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_57_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_57_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_57_5.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialMarianaAlarcon_58 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_58 = format_EmpreendimentoResidencialMarianaAlarcon_58.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_58.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_58);
var lyr_EmpreendimentoResidencialMarianaAlarcon_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_58, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_58,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_58.png" /> Empreendimento Residencial Mariana Alarcon'
            });
var format_EmpreendimentoResidencialCintraAlves_59 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_59 = format_EmpreendimentoResidencialCintraAlves_59.readFeatures(json_EmpreendimentoResidencialCintraAlves_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_59.addFeatures(features_EmpreendimentoResidencialCintraAlves_59);
var lyr_EmpreendimentoResidencialCintraAlves_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_59, 
                style: style_EmpreendimentoResidencialCintraAlves_59,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
    title: 'Empreendimento Residencial Cintra Alves<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_59_0.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_59_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_59_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_59_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_59_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_59_5.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_59_6.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_59_7.png" /> Viela<br />' });
var format_EmpreendimentoResidencialCintraAlves_60 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_60 = format_EmpreendimentoResidencialCintraAlves_60.readFeatures(json_EmpreendimentoResidencialCintraAlves_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_60.addFeatures(features_EmpreendimentoResidencialCintraAlves_60);
var lyr_EmpreendimentoResidencialCintraAlves_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_60, 
                style: style_EmpreendimentoResidencialCintraAlves_60,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialCintraAlves_60.png" /> Empreendimento Residencial Cintra Alves'
            });
var format_EmpreendimentoLoteamentolamo_61 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_61 = format_EmpreendimentoLoteamentolamo_61.readFeatures(json_EmpreendimentoLoteamentolamo_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_61.addFeatures(features_EmpreendimentoLoteamentolamo_61);
var lyr_EmpreendimentoLoteamentolamo_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_61, 
                style: style_EmpreendimentoLoteamentolamo_61,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
    title: 'Empreendimento Loteamento Álamo <br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_61_0.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_61_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_61_2.png" /> Área Remanescente<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_61_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_61_4.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_61_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_61_6.png" /> Lotes Residenciais<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_61_7.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_61_8.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_61_9.png" /> Viela<br />' });
var format_EmpreendimentoLoteamentolamo_62 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_62 = format_EmpreendimentoLoteamentolamo_62.readFeatures(json_EmpreendimentoLoteamentolamo_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_62.addFeatures(features_EmpreendimentoLoteamentolamo_62);
var lyr_EmpreendimentoLoteamentolamo_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_62, 
                style: style_EmpreendimentoLoteamentolamo_62,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoLoteamentolamo_62.png" /> Empreendimento Loteamento Álamo '
            });
var format_EmpreendimentoSantaLina_63 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_63 = format_EmpreendimentoSantaLina_63.readFeatures(json_EmpreendimentoSantaLina_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_63.addFeatures(features_EmpreendimentoSantaLina_63);
var lyr_EmpreendimentoSantaLina_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_63, 
                style: style_EmpreendimentoSantaLina_63,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
    title: 'Empreendimento Santa Lina<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_63_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_63_1.png" /> Lotes/Quadras<br />' });
var format_EmpreendimentoSantaLina_64 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_64 = format_EmpreendimentoSantaLina_64.readFeatures(json_EmpreendimentoSantaLina_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_64.addFeatures(features_EmpreendimentoSantaLina_64);
var lyr_EmpreendimentoSantaLina_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_64, 
                style: style_EmpreendimentoSantaLina_64,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSantaLina_64.png" /> Empreendimento Santa Lina'
            });
var format_EmpreendimentoResidencialPousoAlegre_65 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_65 = format_EmpreendimentoResidencialPousoAlegre_65.readFeatures(json_EmpreendimentoResidencialPousoAlegre_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_65.addFeatures(features_EmpreendimentoResidencialPousoAlegre_65);
var lyr_EmpreendimentoResidencialPousoAlegre_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_65, 
                style: style_EmpreendimentoResidencialPousoAlegre_65,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
    title: 'Empreendimento Residencial Pouso Alegre<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_65_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_65_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_65_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_65_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_65_4.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_65_5.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_65_6.png" /> Viela<br />' });
var format_EmpreendimentoResidencialPousoAlegre_66 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_66 = format_EmpreendimentoResidencialPousoAlegre_66.readFeatures(json_EmpreendimentoResidencialPousoAlegre_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_66.addFeatures(features_EmpreendimentoResidencialPousoAlegre_66);
var lyr_EmpreendimentoResidencialPousoAlegre_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_66, 
                style: style_EmpreendimentoResidencialPousoAlegre_66,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialPousoAlegre_66.png" /> Empreendimento Residencial Pouso Alegre'
            });
var format_EmpreendimentoResidencialAltodaFazenda_67 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_67 = format_EmpreendimentoResidencialAltodaFazenda_67.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_67.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_67);
var lyr_EmpreendimentoResidencialAltodaFazenda_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_67, 
                style: style_EmpreendimentoResidencialAltodaFazenda_67,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
    title: 'Empreendimento Residencial Alto da Fazenda <br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_67_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_67_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_67_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_67_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_67_4.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialAltodaFazenda_68 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_68 = format_EmpreendimentoResidencialAltodaFazenda_68.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_68.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_68);
var lyr_EmpreendimentoResidencialAltodaFazenda_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_68, 
                style: style_EmpreendimentoResidencialAltodaFazenda_68,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_68.png" /> Empreendimento Residencial Alto da Fazenda '
            });
var format_EmpreendimentoResidencialMarioTasso_69 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_69 = format_EmpreendimentoResidencialMarioTasso_69.readFeatures(json_EmpreendimentoResidencialMarioTasso_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_69.addFeatures(features_EmpreendimentoResidencialMarioTasso_69);
var lyr_EmpreendimentoResidencialMarioTasso_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_69, 
                style: style_EmpreendimentoResidencialMarioTasso_69,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
    title: 'Empreendimento Residencial Mario Tasso<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_69_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_69_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_69_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_69_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_69_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialMarioTasso_70 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_70 = format_EmpreendimentoResidencialMarioTasso_70.readFeatures(json_EmpreendimentoResidencialMarioTasso_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_70.addFeatures(features_EmpreendimentoResidencialMarioTasso_70);
var lyr_EmpreendimentoResidencialMarioTasso_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_70, 
                style: style_EmpreendimentoResidencialMarioTasso_70,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarioTasso_70.png" /> Empreendimento Residencial Mario Tasso'
            });
var format_EmpreendimentoResidenciaisVivenna_71 = new ol.format.GeoJSON();
var features_EmpreendimentoResidenciaisVivenna_71 = format_EmpreendimentoResidenciaisVivenna_71.readFeatures(json_EmpreendimentoResidenciaisVivenna_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidenciaisVivenna_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidenciaisVivenna_71.addFeatures(features_EmpreendimentoResidenciaisVivenna_71);
var lyr_EmpreendimentoResidenciaisVivenna_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidenciaisVivenna_71, 
                style: style_EmpreendimentoResidenciaisVivenna_71,
                popuplayertitle: 'Empreendimento Residenciais Vivenna',
                interactive: true,
    title: 'Empreendimento Residenciais Vivenna<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_71_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_71_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_71_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_71_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_71_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_71_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_71_6.png" /> Lotes Residenciais<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_71_7.png" /> Área Non Edificandi<br />' });
var format_EmpreendimentoResidenciaisVivenna_72 = new ol.format.GeoJSON();
var features_EmpreendimentoResidenciaisVivenna_72 = format_EmpreendimentoResidenciaisVivenna_72.readFeatures(json_EmpreendimentoResidenciaisVivenna_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidenciaisVivenna_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidenciaisVivenna_72.addFeatures(features_EmpreendimentoResidenciaisVivenna_72);
var lyr_EmpreendimentoResidenciaisVivenna_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidenciaisVivenna_72, 
                style: style_EmpreendimentoResidenciaisVivenna_72,
                popuplayertitle: 'Empreendimento Residenciais Vivenna',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidenciaisVivenna_72.png" /> Empreendimento Residenciais Vivenna'
            });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_73 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_73 = format_EmpreendimentoAbuDhabiParadiseResortResidence_73.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_73.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_73);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_73, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_73,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Empreendimento Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_73_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_73_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_73_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_73_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_73_4.png" /> Área Non Edificandi<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_73_5.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_73_6.png" /> Passeio<br />' });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_74 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_74 = format_EmpreendimentoAbuDhabiParadiseResortResidence_74.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_74.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_74);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_74, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_74,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_74.png" /> Empreendimento Abu Dhabi Paradise Resort Residence'
            });
var format_EmprendimentoElias_75 = new ol.format.GeoJSON();
var features_EmprendimentoElias_75 = format_EmprendimentoElias_75.readFeatures(json_EmprendimentoElias_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_75.addFeatures(features_EmprendimentoElias_75);
var lyr_EmprendimentoElias_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_75, 
                style: style_EmprendimentoElias_75,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
    title: 'Emprendimento Elias<br />\
    <img src="styles/legend/EmprendimentoElias_75_0.png" /> Ruas<br />\
    <img src="styles/legend/EmprendimentoElias_75_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmprendimentoElias_75_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmprendimentoElias_75_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmprendimentoElias_75_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmprendimentoElias_75_5.png" /> Passeio<br />\
    <img src="styles/legend/EmprendimentoElias_75_6.png" /> Lotes mistos<br />' });
var format_EmprendimentoElias_76 = new ol.format.GeoJSON();
var features_EmprendimentoElias_76 = format_EmprendimentoElias_76.readFeatures(json_EmprendimentoElias_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_76.addFeatures(features_EmprendimentoElias_76);
var lyr_EmprendimentoElias_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_76, 
                style: style_EmprendimentoElias_76,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
                title: '<img src="styles/legend/EmprendimentoElias_76.png" /> Emprendimento Elias'
            });
var format_EmpreendimentoResidencialSoCarlosI_77 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_77 = format_EmpreendimentoResidencialSoCarlosI_77.readFeatures(json_EmpreendimentoResidencialSoCarlosI_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_77.addFeatures(features_EmpreendimentoResidencialSoCarlosI_77);
var lyr_EmpreendimentoResidencialSoCarlosI_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_77, 
                style: style_EmpreendimentoResidencialSoCarlosI_77,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
    title: 'Empreendimento Residencial São Carlos I<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_77_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_77_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_77_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_77_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_77_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSoCarlosI_78 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_78 = format_EmpreendimentoResidencialSoCarlosI_78.readFeatures(json_EmpreendimentoResidencialSoCarlosI_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_78.addFeatures(features_EmpreendimentoResidencialSoCarlosI_78);
var lyr_EmpreendimentoResidencialSoCarlosI_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_78, 
                style: style_EmpreendimentoResidencialSoCarlosI_78,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSoCarlosI_78.png" /> Empreendimento Residencial São Carlos I'
            });
var format_EmpreendimentoMonti_79 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_79 = format_EmpreendimentoMonti_79.readFeatures(json_EmpreendimentoMonti_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_79.addFeatures(features_EmpreendimentoMonti_79);
var lyr_EmpreendimentoMonti_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_79, 
                style: style_EmpreendimentoMonti_79,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
    title: 'Empreendimento Montié<br />\
    <img src="styles/legend/EmpreendimentoMonti_79_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMonti_79_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMonti_79_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMonti_79_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMonti_79_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMonti_79_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoMonti_80 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_80 = format_EmpreendimentoMonti_80.readFeatures(json_EmpreendimentoMonti_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_80.addFeatures(features_EmpreendimentoMonti_80);
var lyr_EmpreendimentoMonti_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_80, 
                style: style_EmpreendimentoMonti_80,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMonti_80.png" /> Empreendimento Montié'
            });
var format_EmpreendimentoResidencialMoradadoBosque_81 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_81 = format_EmpreendimentoResidencialMoradadoBosque_81.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_81.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_81);
var lyr_EmpreendimentoResidencialMoradadoBosque_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_81, 
                style: style_EmpreendimentoResidencialMoradadoBosque_81,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
    title: 'Empreendimento Residencial Morada do Bosque<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_81_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_81_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_81_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_81_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_81_4.png" /> FORMATO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_81_5.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_81_6.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_81_7.png" /> Lotes mistos<br />' });
var format_EmpreendimentoResidencialMoradadoBosque_82 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_82 = format_EmpreendimentoResidencialMoradadoBosque_82.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_82.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_82);
var lyr_EmpreendimentoResidencialMoradadoBosque_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_82, 
                style: style_EmpreendimentoResidencialMoradadoBosque_82,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_82.png" /> Empreendimento Residencial Morada do Bosque'
            });
var format_EmpreendimentoVittaAlvorada_83 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_83 = format_EmpreendimentoVittaAlvorada_83.readFeatures(json_EmpreendimentoVittaAlvorada_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_83.addFeatures(features_EmpreendimentoVittaAlvorada_83);
var lyr_EmpreendimentoVittaAlvorada_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_83, 
                style: style_EmpreendimentoVittaAlvorada_83,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
    title: 'Empreendimento Vitta Alvorada<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_83_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_83_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_83_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_83_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_83_4.png" /> A-PROP-LINE<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_83_5.png" /> Passeio<br />' });
var format_EmpreendimentoVittaAlvorada_84 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_84 = format_EmpreendimentoVittaAlvorada_84.readFeatures(json_EmpreendimentoVittaAlvorada_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_84.addFeatures(features_EmpreendimentoVittaAlvorada_84);
var lyr_EmpreendimentoVittaAlvorada_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_84, 
                style: style_EmpreendimentoVittaAlvorada_84,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaAlvorada_84.png" /> Empreendimento Vitta Alvorada'
            });
var format_EmpreendimentoResidencialMarthaHelena_85 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_85 = format_EmpreendimentoResidencialMarthaHelena_85.readFeatures(json_EmpreendimentoResidencialMarthaHelena_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_85.addFeatures(features_EmpreendimentoResidencialMarthaHelena_85);
var lyr_EmpreendimentoResidencialMarthaHelena_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_85, 
                style: style_EmpreendimentoResidencialMarthaHelena_85,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
    title: 'Empreendimento Residencial Martha Helena<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_85_0.png" /> 0<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_85_1.png" /> Zona de Uso Residencial<br />' });
var format_EmpreendimentoResidencialMarthaHelena_86 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_86 = format_EmpreendimentoResidencialMarthaHelena_86.readFeatures(json_EmpreendimentoResidencialMarthaHelena_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_86.addFeatures(features_EmpreendimentoResidencialMarthaHelena_86);
var lyr_EmpreendimentoResidencialMarthaHelena_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_86, 
                style: style_EmpreendimentoResidencialMarthaHelena_86,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarthaHelena_86.png" /> Empreendimento Residencial Martha Helena'
            });
var format_EmpreendimentoResidencialYasminTorres_87 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_87 = format_EmpreendimentoResidencialYasminTorres_87.readFeatures(json_EmpreendimentoResidencialYasminTorres_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_87.addFeatures(features_EmpreendimentoResidencialYasminTorres_87);
var lyr_EmpreendimentoResidencialYasminTorres_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_87, 
                style: style_EmpreendimentoResidencialYasminTorres_87,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_87.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoResidencialYasminTorres_88 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_88 = format_EmpreendimentoResidencialYasminTorres_88.readFeatures(json_EmpreendimentoResidencialYasminTorres_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_88.addFeatures(features_EmpreendimentoResidencialYasminTorres_88);
var lyr_EmpreendimentoResidencialYasminTorres_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_88, 
                style: style_EmpreendimentoResidencialYasminTorres_88,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_88.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoPalmeiraReal_89 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_89 = format_EmpreendimentoPalmeiraReal_89.readFeatures(json_EmpreendimentoPalmeiraReal_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_89.addFeatures(features_EmpreendimentoPalmeiraReal_89);
var lyr_EmpreendimentoPalmeiraReal_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_89, 
                style: style_EmpreendimentoPalmeiraReal_89,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
    title: 'Empreendimento Palmeira Real<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_89_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_89_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_89_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_89_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_89_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_89_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoPalmeiraReal_90 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_90 = format_EmpreendimentoPalmeiraReal_90.readFeatures(json_EmpreendimentoPalmeiraReal_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_90.addFeatures(features_EmpreendimentoPalmeiraReal_90);
var lyr_EmpreendimentoPalmeiraReal_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_90, 
                style: style_EmpreendimentoPalmeiraReal_90,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoPalmeiraReal_90.png" /> Empreendimento Palmeira Real'
            });
var format_EmpreendimentoEssence_91 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_91 = format_EmpreendimentoEssence_91.readFeatures(json_EmpreendimentoEssence_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_91.addFeatures(features_EmpreendimentoEssence_91);
var lyr_EmpreendimentoEssence_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_91, 
                style: style_EmpreendimentoEssence_91,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_91.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoEssence_92 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_92 = format_EmpreendimentoEssence_92.readFeatures(json_EmpreendimentoEssence_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_92.addFeatures(features_EmpreendimentoEssence_92);
var lyr_EmpreendimentoEssence_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_92, 
                style: style_EmpreendimentoEssence_92,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_92.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoVersalhes_93 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_93 = format_EmpreendimentoVersalhes_93.readFeatures(json_EmpreendimentoVersalhes_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_93.addFeatures(features_EmpreendimentoVersalhes_93);
var lyr_EmpreendimentoVersalhes_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_93, 
                style: style_EmpreendimentoVersalhes_93,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
    title: 'Empreendimento Versalhes<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_93_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_93_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_93_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_93_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_93_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_93_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVersalhes_94 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_94 = format_EmpreendimentoVersalhes_94.readFeatures(json_EmpreendimentoVersalhes_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_94.addFeatures(features_EmpreendimentoVersalhes_94);
var lyr_EmpreendimentoVersalhes_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_94, 
                style: style_EmpreendimentoVersalhes_94,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVersalhes_94.png" /> Empreendimento Versalhes'
            });
var format_EmpreendimentoSonetto_95 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_95 = format_EmpreendimentoSonetto_95.readFeatures(json_EmpreendimentoSonetto_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_95.addFeatures(features_EmpreendimentoSonetto_95);
var lyr_EmpreendimentoSonetto_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_95, 
                style: style_EmpreendimentoSonetto_95,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_95.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoSonetto_96 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_96 = format_EmpreendimentoSonetto_96.readFeatures(json_EmpreendimentoSonetto_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_96.addFeatures(features_EmpreendimentoSonetto_96);
var lyr_EmpreendimentoSonetto_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_96, 
                style: style_EmpreendimentoSonetto_96,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_96.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoResidencialSantaIns_97 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_97 = format_EmpreendimentoResidencialSantaIns_97.readFeatures(json_EmpreendimentoResidencialSantaIns_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_97.addFeatures(features_EmpreendimentoResidencialSantaIns_97);
var lyr_EmpreendimentoResidencialSantaIns_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_97, 
                style: style_EmpreendimentoResidencialSantaIns_97,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
    title: 'Empreendimento Residencial Santa Inês<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_97_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_97_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_97_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_97_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_97_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_97_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaIns_98 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_98 = format_EmpreendimentoResidencialSantaIns_98.readFeatures(json_EmpreendimentoResidencialSantaIns_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_98.addFeatures(features_EmpreendimentoResidencialSantaIns_98);
var lyr_EmpreendimentoResidencialSantaIns_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_98, 
                style: style_EmpreendimentoResidencialSantaIns_98,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaIns_98.png" /> Empreendimento Residencial Santa Inês'
            });
var format_EmpreendimentoEdifcioSolNascente_99 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_99 = format_EmpreendimentoEdifcioSolNascente_99.readFeatures(json_EmpreendimentoEdifcioSolNascente_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_99.addFeatures(features_EmpreendimentoEdifcioSolNascente_99);
var lyr_EmpreendimentoEdifcioSolNascente_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_99, 
                style: style_EmpreendimentoEdifcioSolNascente_99,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_99.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoEdifcioSolNascente_100 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_100 = format_EmpreendimentoEdifcioSolNascente_100.readFeatures(json_EmpreendimentoEdifcioSolNascente_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_100.addFeatures(features_EmpreendimentoEdifcioSolNascente_100);
var lyr_EmpreendimentoEdifcioSolNascente_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_100, 
                style: style_EmpreendimentoEdifcioSolNascente_100,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_100.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoResidencialQuintadosOitis_101 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_101 = format_EmpreendimentoResidencialQuintadosOitis_101.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_101.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_101);
var lyr_EmpreendimentoResidencialQuintadosOitis_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_101, 
                style: style_EmpreendimentoResidencialQuintadosOitis_101,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Empreendimento Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_101_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_101_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_101_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_101_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_101_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_101_5.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialQuintadosOitis_102 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_102 = format_EmpreendimentoResidencialQuintadosOitis_102.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_102.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_102);
var lyr_EmpreendimentoResidencialQuintadosOitis_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_102, 
                style: style_EmpreendimentoResidencialQuintadosOitis_102,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_102.png" /> Empreendimento Residencial Quinta dos Oitis'
            });
var format_EmpreendimentoResidencialQuintadoSol_103 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_103 = format_EmpreendimentoResidencialQuintadoSol_103.readFeatures(json_EmpreendimentoResidencialQuintadoSol_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_103.addFeatures(features_EmpreendimentoResidencialQuintadoSol_103);
var lyr_EmpreendimentoResidencialQuintadoSol_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_103, 
                style: style_EmpreendimentoResidencialQuintadoSol_103,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
    title: 'Empreendimento Residencial Quinta do Sol<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_103_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_103_1.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_103_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_103_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_103_4.png" /> Área Verde<br />' });
var format_EmpreendimentoResidencialQuintadoSol_104 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_104 = format_EmpreendimentoResidencialQuintadoSol_104.readFeatures(json_EmpreendimentoResidencialQuintadoSol_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_104.addFeatures(features_EmpreendimentoResidencialQuintadoSol_104);
var lyr_EmpreendimentoResidencialQuintadoSol_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_104, 
                style: style_EmpreendimentoResidencialQuintadoSol_104,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadoSol_104.png" /> Empreendimento Residencial Quinta do Sol'
            });
var format_EmpreendimentoResidencialNairRetuciII_105 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialNairRetuciII_105 = format_EmpreendimentoResidencialNairRetuciII_105.readFeatures(json_EmpreendimentoResidencialNairRetuciII_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialNairRetuciII_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialNairRetuciII_105.addFeatures(features_EmpreendimentoResidencialNairRetuciII_105);
var lyr_EmpreendimentoResidencialNairRetuciII_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialNairRetuciII_105, 
                style: style_EmpreendimentoResidencialNairRetuciII_105,
                popuplayertitle: 'Empreendimento Residencial Nair Retuci II',
                interactive: true,
    title: 'Empreendimento Residencial Nair Retuci II<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_105_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_105_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_105_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_105_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_105_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialNairRetuciII_106 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialNairRetuciII_106 = format_EmpreendimentoResidencialNairRetuciII_106.readFeatures(json_EmpreendimentoResidencialNairRetuciII_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialNairRetuciII_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialNairRetuciII_106.addFeatures(features_EmpreendimentoResidencialNairRetuciII_106);
var lyr_EmpreendimentoResidencialNairRetuciII_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialNairRetuciII_106, 
                style: style_EmpreendimentoResidencialNairRetuciII_106,
                popuplayertitle: 'Empreendimento Residencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialNairRetuciII_106.png" /> Empreendimento Residencial Nair Retuci II'
            });
var format_EmpreendimentoParquePalmeiraImperial_107 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_107 = format_EmpreendimentoParquePalmeiraImperial_107.readFeatures(json_EmpreendimentoParquePalmeiraImperial_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_107.addFeatures(features_EmpreendimentoParquePalmeiraImperial_107);
var lyr_EmpreendimentoParquePalmeiraImperial_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_107, 
                style: style_EmpreendimentoParquePalmeiraImperial_107,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
    title: 'Empreendimento Parque Palmeira Imperial<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_107_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_107_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_107_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_107_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_107_4.png" /> Passeio<br />' });
var format_EmpreendimentoParquePalmeiraImperial_108 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_108 = format_EmpreendimentoParquePalmeiraImperial_108.readFeatures(json_EmpreendimentoParquePalmeiraImperial_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_108.addFeatures(features_EmpreendimentoParquePalmeiraImperial_108);
var lyr_EmpreendimentoParquePalmeiraImperial_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_108, 
                style: style_EmpreendimentoParquePalmeiraImperial_108,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquePalmeiraImperial_108.png" /> Empreendimento Parque Palmeira Imperial'
            });
var format_EmpreendimentoBordadaMata_109 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_109 = format_EmpreendimentoBordadaMata_109.readFeatures(json_EmpreendimentoBordadaMata_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_109.addFeatures(features_EmpreendimentoBordadaMata_109);
var lyr_EmpreendimentoBordadaMata_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_109, 
                style: style_EmpreendimentoBordadaMata_109,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
    title: 'Empreendimento Borda da Mata<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_109_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_109_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_109_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_109_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_109_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_109_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_109_6.png" /> Represa<br />' });
var format_EmpreendimentoBordadaMata_110 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_110 = format_EmpreendimentoBordadaMata_110.readFeatures(json_EmpreendimentoBordadaMata_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_110.addFeatures(features_EmpreendimentoBordadaMata_110);
var lyr_EmpreendimentoBordadaMata_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_110, 
                style: style_EmpreendimentoBordadaMata_110,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoBordadaMata_110.png" /> Empreendimento Borda da Mata'
            });
var format_EmpreendimentoResidencialCidadeJardim_111 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCidadeJardim_111 = format_EmpreendimentoResidencialCidadeJardim_111.readFeatures(json_EmpreendimentoResidencialCidadeJardim_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCidadeJardim_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCidadeJardim_111.addFeatures(features_EmpreendimentoResidencialCidadeJardim_111);
var lyr_EmpreendimentoResidencialCidadeJardim_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCidadeJardim_111, 
                style: style_EmpreendimentoResidencialCidadeJardim_111,
                popuplayertitle: 'Empreendimento Residencial Cidade Jardim',
                interactive: true,
    title: 'Empreendimento Residencial Cidade Jardim<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_111_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_111_1.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_111_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_111_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_111_4.png" /> Área Verde<br />' });
var format_EmpreendimentoResidencialCidadeJardim_112 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCidadeJardim_112 = format_EmpreendimentoResidencialCidadeJardim_112.readFeatures(json_EmpreendimentoResidencialCidadeJardim_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCidadeJardim_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCidadeJardim_112.addFeatures(features_EmpreendimentoResidencialCidadeJardim_112);
var lyr_EmpreendimentoResidencialCidadeJardim_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCidadeJardim_112, 
                style: style_EmpreendimentoResidencialCidadeJardim_112,
                popuplayertitle: 'Empreendimento Residencial Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialCidadeJardim_112.png" /> Empreendimento Residencial Cidade Jardim'
            });
var format_EmpreendimentoEdifcioResidencialHope_113 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_113 = format_EmpreendimentoEdifcioResidencialHope_113.readFeatures(json_EmpreendimentoEdifcioResidencialHope_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_113.addFeatures(features_EmpreendimentoEdifcioResidencialHope_113);
var lyr_EmpreendimentoEdifcioResidencialHope_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_113, 
                style: style_EmpreendimentoEdifcioResidencialHope_113,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_113.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoEdifcioResidencialHope_114 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_114 = format_EmpreendimentoEdifcioResidencialHope_114.readFeatures(json_EmpreendimentoEdifcioResidencialHope_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_114.addFeatures(features_EmpreendimentoEdifcioResidencialHope_114);
var lyr_EmpreendimentoEdifcioResidencialHope_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_114, 
                style: style_EmpreendimentoEdifcioResidencialHope_114,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_114.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoHorizResidence_115 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_115 = format_EmpreendimentoHorizResidence_115.readFeatures(json_EmpreendimentoHorizResidence_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_115.addFeatures(features_EmpreendimentoHorizResidence_115);
var lyr_EmpreendimentoHorizResidence_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_115, 
                style: style_EmpreendimentoHorizResidence_115,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_115.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoHorizResidence_116 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_116 = format_EmpreendimentoHorizResidence_116.readFeatures(json_EmpreendimentoHorizResidence_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_116.addFeatures(features_EmpreendimentoHorizResidence_116);
var lyr_EmpreendimentoHorizResidence_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_116, 
                style: style_EmpreendimentoHorizResidence_116,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_116.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoJardimFlora_117 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_117 = format_EmpreendimentoJardimFlora_117.readFeatures(json_EmpreendimentoJardimFlora_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_117.addFeatures(features_EmpreendimentoJardimFlora_117);
var lyr_EmpreendimentoJardimFlora_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_117, 
                style: style_EmpreendimentoJardimFlora_117,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
    title: 'Empreendimento Jardim Flora<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_117_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_117_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_117_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_117_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_117_4.png" /> Passeio<br />' });
var format_EmpreendimentoJardimFlora_118 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_118 = format_EmpreendimentoJardimFlora_118.readFeatures(json_EmpreendimentoJardimFlora_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_118.addFeatures(features_EmpreendimentoJardimFlora_118);
var lyr_EmpreendimentoJardimFlora_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_118, 
                style: style_EmpreendimentoJardimFlora_118,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimFlora_118.png" /> Empreendimento Jardim Flora'
            });
var format_EmpreendimentoJardimHorizonte_119 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_119 = format_EmpreendimentoJardimHorizonte_119.readFeatures(json_EmpreendimentoJardimHorizonte_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_119.addFeatures(features_EmpreendimentoJardimHorizonte_119);
var lyr_EmpreendimentoJardimHorizonte_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_119, 
                style: style_EmpreendimentoJardimHorizonte_119,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
    title: 'Empreendimento Jardim Horizonte<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_119_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_119_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_119_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_119_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_119_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_119_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_119_6.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoJardimHorizonte_120 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_120 = format_EmpreendimentoJardimHorizonte_120.readFeatures(json_EmpreendimentoJardimHorizonte_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_120.addFeatures(features_EmpreendimentoJardimHorizonte_120);
var lyr_EmpreendimentoJardimHorizonte_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_120, 
                style: style_EmpreendimentoJardimHorizonte_120,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimHorizonte_120.png" /> Empreendimento Jardim Horizonte'
            });
var format_EmpreendimentoJardimMariaLuiza_121 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_121 = format_EmpreendimentoJardimMariaLuiza_121.readFeatures(json_EmpreendimentoJardimMariaLuiza_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_121.addFeatures(features_EmpreendimentoJardimMariaLuiza_121);
var lyr_EmpreendimentoJardimMariaLuiza_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_121, 
                style: style_EmpreendimentoJardimMariaLuiza_121,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
    title: 'Empreendimento Jardim Maria Luiza<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_121_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_121_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_121_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_121_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_121_4.png" /> Passeio<br />' });
var format_EmpreendimentoJardimMariaLuiza_122 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_122 = format_EmpreendimentoJardimMariaLuiza_122.readFeatures(json_EmpreendimentoJardimMariaLuiza_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_122.addFeatures(features_EmpreendimentoJardimMariaLuiza_122);
var lyr_EmpreendimentoJardimMariaLuiza_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_122, 
                style: style_EmpreendimentoJardimMariaLuiza_122,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimMariaLuiza_122.png" /> Empreendimento Jardim Maria Luiza'
            });
var format_EmpreendimentoMontBlancResidence_123 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_123 = format_EmpreendimentoMontBlancResidence_123.readFeatures(json_EmpreendimentoMontBlancResidence_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_123.addFeatures(features_EmpreendimentoMontBlancResidence_123);
var lyr_EmpreendimentoMontBlancResidence_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_123, 
                style: style_EmpreendimentoMontBlancResidence_123,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_123.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMontBlancResidence_124 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_124 = format_EmpreendimentoMontBlancResidence_124.readFeatures(json_EmpreendimentoMontBlancResidence_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_124.addFeatures(features_EmpreendimentoMontBlancResidence_124);
var lyr_EmpreendimentoMontBlancResidence_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_124, 
                style: style_EmpreendimentoMontBlancResidence_124,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_124.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMoradadoVerdeII_125 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_125 = format_EmpreendimentoMoradadoVerdeII_125.readFeatures(json_EmpreendimentoMoradadoVerdeII_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_125.addFeatures(features_EmpreendimentoMoradadoVerdeII_125);
var lyr_EmpreendimentoMoradadoVerdeII_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_125, 
                style: style_EmpreendimentoMoradadoVerdeII_125,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
    title: 'Empreendimento Morada do Verde II<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_125_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_125_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_125_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_125_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_125_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_125_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_125_6.png" /> Lotes Mistos<br />' });
var format_EmpreendimentoMoradadoVerdeII_126 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_126 = format_EmpreendimentoMoradadoVerdeII_126.readFeatures(json_EmpreendimentoMoradadoVerdeII_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_126.addFeatures(features_EmpreendimentoMoradadoVerdeII_126);
var lyr_EmpreendimentoMoradadoVerdeII_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_126, 
                style: style_EmpreendimentoMoradadoVerdeII_126,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadoVerdeII_126.png" /> Empreendimento Morada do Verde II'
            });
var format_EmpreendimentoResicencialNairRetuci_127 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_127 = format_EmpreendimentoResicencialNairRetuci_127.readFeatures(json_EmpreendimentoResicencialNairRetuci_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_127.addFeatures(features_EmpreendimentoResicencialNairRetuci_127);
var lyr_EmpreendimentoResicencialNairRetuci_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_127, 
                style: style_EmpreendimentoResicencialNairRetuci_127,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
    title: 'Empreendimento Resicencial Nair Retuci<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_127_0.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_127_1.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_127_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_127_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_127_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_127_5.png" /> Passeio<br />' });
var format_EmpreendimentoResicencialNairRetuci_128 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_128 = format_EmpreendimentoResicencialNairRetuci_128.readFeatures(json_EmpreendimentoResicencialNairRetuci_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_128.addFeatures(features_EmpreendimentoResicencialNairRetuci_128);
var lyr_EmpreendimentoResicencialNairRetuci_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_128, 
                style: style_EmpreendimentoResicencialNairRetuci_128,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResicencialNairRetuci_128.png" /> Empreendimento Resicencial Nair Retuci'
            });
var format_EmpreendimentoParagon_129 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_129 = format_EmpreendimentoParagon_129.readFeatures(json_EmpreendimentoParagon_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_129.addFeatures(features_EmpreendimentoParagon_129);
var lyr_EmpreendimentoParagon_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_129, 
                style: style_EmpreendimentoParagon_129,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
    title: 'Empreendimento Paragon<br />\
    <img src="styles/legend/EmpreendimentoParagon_129_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParagon_129_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParagon_129_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoParagon_129_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParagon_129_4.png" /> Viela<br />\
    <img src="styles/legend/EmpreendimentoParagon_129_5.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoParagon_129_6.png" /> Passeio<br />' });
var format_EmpreendimentoParagon_130 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_130 = format_EmpreendimentoParagon_130.readFeatures(json_EmpreendimentoParagon_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_130.addFeatures(features_EmpreendimentoParagon_130);
var lyr_EmpreendimentoParagon_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_130, 
                style: style_EmpreendimentoParagon_130,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParagon_130.png" /> Empreendimento Paragon'
            });
var format_EmpreendimentoParqueVillaLobos_131 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_131 = format_EmpreendimentoParqueVillaLobos_131.readFeatures(json_EmpreendimentoParqueVillaLobos_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_131.addFeatures(features_EmpreendimentoParqueVillaLobos_131);
var lyr_EmpreendimentoParqueVillaLobos_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_131, 
                style: style_EmpreendimentoParqueVillaLobos_131,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
    title: 'Empreendimento Parque Villa-Lobos<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_131_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_131_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_131_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_131_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_131_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_131_5.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoParqueVillaLobos_132 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_132 = format_EmpreendimentoParqueVillaLobos_132.readFeatures(json_EmpreendimentoParqueVillaLobos_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_132.addFeatures(features_EmpreendimentoParqueVillaLobos_132);
var lyr_EmpreendimentoParqueVillaLobos_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_132, 
                style: style_EmpreendimentoParqueVillaLobos_132,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueVillaLobos_132.png" /> Empreendimento Parque Villa-Lobos'
            });
var format_EmpreendimentoDaVinci_133 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_133 = format_EmpreendimentoDaVinci_133.readFeatures(json_EmpreendimentoDaVinci_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_133.addFeatures(features_EmpreendimentoDaVinci_133);
var lyr_EmpreendimentoDaVinci_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_133, 
                style: style_EmpreendimentoDaVinci_133,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_133.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoDaVinci_134 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_134 = format_EmpreendimentoDaVinci_134.readFeatures(json_EmpreendimentoDaVinci_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_134.addFeatures(features_EmpreendimentoDaVinci_134);
var lyr_EmpreendimentoDaVinci_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_134, 
                style: style_EmpreendimentoDaVinci_134,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_134.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoResidencialDomingosJardini_135 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_135 = format_EmpreendimentoResidencialDomingosJardini_135.readFeatures(json_EmpreendimentoResidencialDomingosJardini_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_135.addFeatures(features_EmpreendimentoResidencialDomingosJardini_135);
var lyr_EmpreendimentoResidencialDomingosJardini_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_135, 
                style: style_EmpreendimentoResidencialDomingosJardini_135,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
    title: 'Empreendimento Residencial Domingos Jardini<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_135_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_135_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_135_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_135_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_135_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_135_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialDomingosJardini_136 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_136 = format_EmpreendimentoResidencialDomingosJardini_136.readFeatures(json_EmpreendimentoResidencialDomingosJardini_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_136.addFeatures(features_EmpreendimentoResidencialDomingosJardini_136);
var lyr_EmpreendimentoResidencialDomingosJardini_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_136, 
                style: style_EmpreendimentoResidencialDomingosJardini_136,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialDomingosJardini_136.png" /> Empreendimento Residencial Domingos Jardini'
            });
var format_EmpreendimentoResidencialSantaF_137 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_137 = format_EmpreendimentoResidencialSantaF_137.readFeatures(json_EmpreendimentoResidencialSantaF_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_137.addFeatures(features_EmpreendimentoResidencialSantaF_137);
var lyr_EmpreendimentoResidencialSantaF_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_137, 
                style: style_EmpreendimentoResidencialSantaF_137,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
    title: 'Empreendimento Residencial Santa Fé<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_137_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_137_1.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_137_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_137_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_137_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_137_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaF_138 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_138 = format_EmpreendimentoResidencialSantaF_138.readFeatures(json_EmpreendimentoResidencialSantaF_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_138.addFeatures(features_EmpreendimentoResidencialSantaF_138);
var lyr_EmpreendimentoResidencialSantaF_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_138, 
                style: style_EmpreendimentoResidencialSantaF_138,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaF_138.png" /> Empreendimento Residencial Santa Fé'
            });
var format_EmpreendimentoEdifcioRuadoSol_139 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_139 = format_EmpreendimentoEdifcioRuadoSol_139.readFeatures(json_EmpreendimentoEdifcioRuadoSol_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_139.addFeatures(features_EmpreendimentoEdifcioRuadoSol_139);
var lyr_EmpreendimentoEdifcioRuadoSol_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_139, 
                style: style_EmpreendimentoEdifcioRuadoSol_139,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_139.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoEdifcioRuadoSol_140 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_140 = format_EmpreendimentoEdifcioRuadoSol_140.readFeatures(json_EmpreendimentoEdifcioRuadoSol_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_140.addFeatures(features_EmpreendimentoEdifcioRuadoSol_140);
var lyr_EmpreendimentoEdifcioRuadoSol_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_140, 
                style: style_EmpreendimentoEdifcioRuadoSol_140,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_140.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoTorontoResidence_141 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_141 = format_EmpreendimentoTorontoResidence_141.readFeatures(json_EmpreendimentoTorontoResidence_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_141.addFeatures(features_EmpreendimentoTorontoResidence_141);
var lyr_EmpreendimentoTorontoResidence_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_141, 
                style: style_EmpreendimentoTorontoResidence_141,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
    title: 'Empreendimento Toronto Residence<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_141_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_141_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_141_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_141_3.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_141_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_141_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoTorontoResidence_142 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_142 = format_EmpreendimentoTorontoResidence_142.readFeatures(json_EmpreendimentoTorontoResidence_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_142.addFeatures(features_EmpreendimentoTorontoResidence_142);
var lyr_EmpreendimentoTorontoResidence_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_142, 
                style: style_EmpreendimentoTorontoResidence_142,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoTorontoResidence_142.png" /> Empreendimento Toronto Residence'
            });
var format_ServidoRamal138kVFranca4Guanabara_143 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_143 = format_ServidoRamal138kVFranca4Guanabara_143.readFeatures(json_ServidoRamal138kVFranca4Guanabara_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_143.addFeatures(features_ServidoRamal138kVFranca4Guanabara_143);
var lyr_ServidoRamal138kVFranca4Guanabara_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_143, 
                style: style_ServidoRamal138kVFranca4Guanabara_143,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_143.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_144 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_144 = format_ServidoRamal138kVFranca4Guanabara_144.readFeatures(json_ServidoRamal138kVFranca4Guanabara_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_144.addFeatures(features_ServidoRamal138kVFranca4Guanabara_144);
var lyr_ServidoRamal138kVFranca4Guanabara_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_144, 
                style: style_ServidoRamal138kVFranca4Guanabara_144,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_144.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_EmpreendimentosAprovado27unid_145 = new ol.format.GeoJSON();
var features_EmpreendimentosAprovado27unid_145 = format_EmpreendimentosAprovado27unid_145.readFeatures(json_EmpreendimentosAprovado27unid_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosAprovado27unid_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosAprovado27unid_145.addFeatures(features_EmpreendimentosAprovado27unid_145);
var lyr_EmpreendimentosAprovado27unid_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosAprovado27unid_145, 
                style: style_EmpreendimentosAprovado27unid_145,
                popuplayertitle: 'Empreendimentos - Aprovado (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosAprovado27unid_145.png" /> Empreendimentos - Aprovado (27 unid.)'
            });
var format_EmpreendimentosDiretriz4unid_146 = new ol.format.GeoJSON();
var features_EmpreendimentosDiretriz4unid_146 = format_EmpreendimentosDiretriz4unid_146.readFeatures(json_EmpreendimentosDiretriz4unid_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDiretriz4unid_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDiretriz4unid_146.addFeatures(features_EmpreendimentosDiretriz4unid_146);
var lyr_EmpreendimentosDiretriz4unid_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDiretriz4unid_146, 
                style: style_EmpreendimentosDiretriz4unid_146,
                popuplayertitle: 'Empreendimentos  - Diretriz (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDiretriz4unid_146.png" /> Empreendimentos  - Diretriz (4 unid.)'
            });
var format_EmpreendimentosDefinitiva6unid_147 = new ol.format.GeoJSON();
var features_EmpreendimentosDefinitiva6unid_147 = format_EmpreendimentosDefinitiva6unid_147.readFeatures(json_EmpreendimentosDefinitiva6unid_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDefinitiva6unid_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDefinitiva6unid_147.addFeatures(features_EmpreendimentosDefinitiva6unid_147);
var lyr_EmpreendimentosDefinitiva6unid_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDefinitiva6unid_147, 
                style: style_EmpreendimentosDefinitiva6unid_147,
                popuplayertitle: 'Empreendimentos - Definitiva (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDefinitiva6unid_147.png" /> Empreendimentos - Definitiva (6 unid.)'
            });
var format_EmpreendimentosPrvia16unid_148 = new ol.format.GeoJSON();
var features_EmpreendimentosPrvia16unid_148 = format_EmpreendimentosPrvia16unid_148.readFeatures(json_EmpreendimentosPrvia16unid_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosPrvia16unid_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosPrvia16unid_148.addFeatures(features_EmpreendimentosPrvia16unid_148);
var lyr_EmpreendimentosPrvia16unid_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosPrvia16unid_148, 
                style: style_EmpreendimentosPrvia16unid_148,
                popuplayertitle: 'Empreendimentos - Prévia (16 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosPrvia16unid_148.png" /> Empreendimentos - Prévia (16 unid.)'
            });
var format_DeclividadeCopernicus30m_149 = new ol.format.GeoJSON();
var features_DeclividadeCopernicus30m_149 = format_DeclividadeCopernicus30m_149.readFeatures(json_DeclividadeCopernicus30m_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DeclividadeCopernicus30m_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeCopernicus30m_149.addFeatures(features_DeclividadeCopernicus30m_149);
var lyr_DeclividadeCopernicus30m_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeCopernicus30m_149, 
                style: style_DeclividadeCopernicus30m_149,
                popuplayertitle: 'Declividade (Copernicus 30m)',
                interactive: true,
    title: 'Declividade (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeCopernicus30m_149_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeCopernicus30m_149_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeCopernicus30m_149_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeCopernicus30m_149_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeCopernicus30m_149_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeCopernicus30m_149_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeCopernicus30m_149_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeCopernicus30m_149_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeCopernicus30m_149_8.png" /> 101 - 114%<br />' });
var format_ParqueZumbidosPalmares_150 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_150 = format_ParqueZumbidosPalmares_150.readFeatures(json_ParqueZumbidosPalmares_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueZumbidosPalmares_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_150.addFeatures(features_ParqueZumbidosPalmares_150);
var lyr_ParqueZumbidosPalmares_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_150, 
                style: style_ParqueZumbidosPalmares_150,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_150.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151 = format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_AntigoAterrodasMaritacas_153 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_153 = format_AntigoAterrodasMaritacas_153.readFeatures(json_AntigoAterrodasMaritacas_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacas_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_153.addFeatures(features_AntigoAterrodasMaritacas_153);
var lyr_AntigoAterrodasMaritacas_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_153, 
                style: style_AntigoAterrodasMaritacas_153,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_153.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_157 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_157 = format_AntigoAterrodaFazendaMunicipal_157.readFeatures(json_AntigoAterrodaFazendaMunicipal_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipal_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_157.addFeatures(features_AntigoAterrodaFazendaMunicipal_157);
var lyr_AntigoAterrodaFazendaMunicipal_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_157, 
                style: style_AntigoAterrodaFazendaMunicipal_157,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_157.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)'
            });
var format_ARORemanescentesFlorestais_160 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_160 = format_ARORemanescentesFlorestais_160.readFeatures(json_ARORemanescentesFlorestais_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARORemanescentesFlorestais_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_160.addFeatures(features_ARORemanescentesFlorestais_160);
var lyr_ARORemanescentesFlorestais_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_160, 
                style: style_ARORemanescentesFlorestais_160,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_160.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_161 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_161 = format_AROreadeAmortecimento_161.readFeatures(json_AROreadeAmortecimento_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROreadeAmortecimento_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_161.addFeatures(features_AROreadeAmortecimento_161);
var lyr_AROreadeAmortecimento_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_161, 
                style: style_AROreadeAmortecimento_161,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_161.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_162 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_162 = format_AROFaixadeCuestas_162.readFeatures(json_AROFaixadeCuestas_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROFaixadeCuestas_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_162.addFeatures(features_AROFaixadeCuestas_162);
var lyr_AROFaixadeCuestas_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_162, 
                style: style_AROFaixadeCuestas_162,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_162.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_163 = new ol.format.GeoJSON();
var features_AROAPP_163 = format_AROAPP_163.readFeatures(json_AROAPP_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROAPP_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_163.addFeatures(features_AROAPP_163);
var lyr_AROAPP_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_163, 
                style: style_AROAPP_163,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_163.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_164 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_164 = format_ARAIncongrunciasemAPP_164.readFeatures(json_ARAIncongrunciasemAPP_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAIncongrunciasemAPP_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_164.addFeatures(features_ARAIncongrunciasemAPP_164);
var lyr_ARAIncongrunciasemAPP_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_164, 
                style: style_ARAIncongrunciasemAPP_164,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_164.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_165 = new ol.format.GeoJSON();
var features_ARAETELagoas_165 = format_ARAETELagoas_165.readFeatures(json_ARAETELagoas_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAETELagoas_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_165.addFeatures(features_ARAETELagoas_165);
var lyr_ARAETELagoas_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_165, 
                style: style_ARAETELagoas_165,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_165.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_166 = new ol.format.GeoJSON();
var features_ARAAterros_166 = format_ARAAterros_166.readFeatures(json_ARAAterros_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAAterros_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_166.addFeatures(features_ARAAterros_166);
var lyr_ARAAterros_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_166, 
                style: style_ARAAterros_166,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_166.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_167 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_167 = format_AODreaUrbanaConsolidada_167.readFeatures(json_AODreaUrbanaConsolidada_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODreaUrbanaConsolidada_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_167.addFeatures(features_AODreaUrbanaConsolidada_167);
var lyr_AODreaUrbanaConsolidada_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_167, 
                style: style_AODreaUrbanaConsolidada_167,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_167.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_168 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_168 = format_AODBaixaDensidadeNvel3_168.readFeatures(json_AODBaixaDensidadeNvel3_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel3_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_168.addFeatures(features_AODBaixaDensidadeNvel3_168);
var lyr_AODBaixaDensidadeNvel3_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_168, 
                style: style_AODBaixaDensidadeNvel3_168,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_168.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_169 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_169 = format_AODBaixaDensidadeNvel2_169.readFeatures(json_AODBaixaDensidadeNvel2_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel2_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_169.addFeatures(features_AODBaixaDensidadeNvel2_169);
var lyr_AODBaixaDensidadeNvel2_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_169, 
                style: style_AODBaixaDensidadeNvel2_169,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_169.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_170 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_170 = format_AODBaixaDensidadeNvel1_170.readFeatures(json_AODBaixaDensidadeNvel1_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel1_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_170.addFeatures(features_AODBaixaDensidadeNvel1_170);
var lyr_AODBaixaDensidadeNvel1_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_170, 
                style: style_AODBaixaDensidadeNvel1_170,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_170.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_171 = new ol.format.GeoJSON();
var features_AODAUSFase2_171 = format_AODAUSFase2_171.readFeatures(json_AODAUSFase2_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase2_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_171.addFeatures(features_AODAUSFase2_171);
var lyr_AODAUSFase2_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_171, 
                style: style_AODAUSFase2_171,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_171.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_172 = new ol.format.GeoJSON();
var features_AODAUSFase1_172 = format_AODAUSFase1_172.readFeatures(json_AODAUSFase1_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase1_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_172.addFeatures(features_AODAUSFase1_172);
var lyr_AODAUSFase1_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_172, 
                style: style_AODAUSFase1_172,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_172.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_173 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_173 = format_LimitedaBaciadoRioCanoasLeiC4322024_173.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_173.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_173);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_173, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_173,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_173.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_174 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_174 = format_LimitedaBaciadoRioCanoasLeiC1002006_174.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_174.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_174);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_174, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_174,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_174.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_175 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_175 = format_DelimitaodaBaciadoRibeirodaOna_175.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_175.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_175);
var lyr_DelimitaodaBaciadoRibeirodaOna_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_175, 
                style: style_DelimitaodaBaciadoRibeirodaOna_175,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_175.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_AoCivilPblica1unid_176 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_176 = format_AoCivilPblica1unid_176.readFeatures(json_AoCivilPblica1unid_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_176.addFeatures(features_AoCivilPblica1unid_176);
var lyr_AoCivilPblica1unid_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_176, 
                style: style_AoCivilPblica1unid_176,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_176.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_177 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_177 = format_AoCivilPblica1unid_177.readFeatures(json_AoCivilPblica1unid_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_177.addFeatures(features_AoCivilPblica1unid_177);
var lyr_AoCivilPblica1unid_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_177, 
                style: style_AoCivilPblica1unid_177,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_177.png" /> Ação Civil Pública (1 unid.)'
            });
var format_CartaAnuncia20unid_178 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_178 = format_CartaAnuncia20unid_178.readFeatures(json_CartaAnuncia20unid_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia20unid_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_178.addFeatures(features_CartaAnuncia20unid_178);
var lyr_CartaAnuncia20unid_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_178, 
                style: style_CartaAnuncia20unid_178,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_178.png" /> Carta Anuência (20 unid.)'
            });
var format_CartaAnuncia19unid_179 = new ol.format.GeoJSON();
var features_CartaAnuncia19unid_179 = format_CartaAnuncia19unid_179.readFeatures(json_CartaAnuncia19unid_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia19unid_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia19unid_179.addFeatures(features_CartaAnuncia19unid_179);
var lyr_CartaAnuncia19unid_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia19unid_179, 
                style: style_CartaAnuncia19unid_179,
                popuplayertitle: 'Carta Anuência (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia19unid_179.png" /> Carta Anuência (19 unid.)'
            });
var format_PlantioVoluntrio1unid_180 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_180 = format_PlantioVoluntrio1unid_180.readFeatures(json_PlantioVoluntrio1unid_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_180.addFeatures(features_PlantioVoluntrio1unid_180);
var lyr_PlantioVoluntrio1unid_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_180, 
                style: style_PlantioVoluntrio1unid_180,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_180.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_181 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_181 = format_PlantioVoluntrio1unid_181.readFeatures(json_PlantioVoluntrio1unid_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_181.addFeatures(features_PlantioVoluntrio1unid_181);
var lyr_PlantioVoluntrio1unid_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_181, 
                style: style_PlantioVoluntrio1unid_181,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_181.png" /> Plantio Voluntário (1 unid.)'
            });
var format_TACMinistrioPblico9unid_182 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_182 = format_TACMinistrioPblico9unid_182.readFeatures(json_TACMinistrioPblico9unid_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_182.addFeatures(features_TACMinistrioPblico9unid_182);
var lyr_TACMinistrioPblico9unid_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_182, 
                style: style_TACMinistrioPblico9unid_182,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_182.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_183 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_183 = format_TACMinistrioPblico9unid_183.readFeatures(json_TACMinistrioPblico9unid_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_183.addFeatures(features_TACMinistrioPblico9unid_183);
var lyr_TACMinistrioPblico9unid_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_183, 
                style: style_TACMinistrioPblico9unid_183,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_183.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TCRACETESB28unid_184 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_184 = format_TCRACETESB28unid_184.readFeatures(json_TCRACETESB28unid_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_184.addFeatures(features_TCRACETESB28unid_184);
var lyr_TCRACETESB28unid_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_184, 
                style: style_TCRACETESB28unid_184,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_184.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESB28unid_185 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_185 = format_TCRACETESB28unid_185.readFeatures(json_TCRACETESB28unid_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_185.addFeatures(features_TCRACETESB28unid_185);
var lyr_TCRACETESB28unid_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_185, 
                style: style_TCRACETESB28unid_185,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_185.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRAMunicipal14unid_186 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_186 = format_TCRAMunicipal14unid_186.readFeatures(json_TCRAMunicipal14unid_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_186.addFeatures(features_TCRAMunicipal14unid_186);
var lyr_TCRAMunicipal14unid_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_186, 
                style: style_TCRAMunicipal14unid_186,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_186.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRAMunicipal14unid_187 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_187 = format_TCRAMunicipal14unid_187.readFeatures(json_TCRAMunicipal14unid_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_187.addFeatures(features_TCRAMunicipal14unid_187);
var lyr_TCRAMunicipal14unid_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_187, 
                style: style_TCRAMunicipal14unid_187,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_187.png" /> TCRA Municipal (14 unid.)'
            });
var format_TRPRLCETESB2unid_188 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_188 = format_TRPRLCETESB2unid_188.readFeatures(json_TRPRLCETESB2unid_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_188.addFeatures(features_TRPRLCETESB2unid_188);
var lyr_TRPRLCETESB2unid_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_188, 
                style: style_TRPRLCETESB2unid_188,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_188.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_189 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_189 = format_TRPRLCETESB2unid_189.readFeatures(json_TRPRLCETESB2unid_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_189.addFeatures(features_TRPRLCETESB2unid_189);
var lyr_TRPRLCETESB2unid_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_189, 
                style: style_TRPRLCETESB2unid_189,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_189.png" /> TRPRL CETESB (2 unid.)'
            });
var format_rvoreImuneaoCorte8unid_190 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte8unid_190 = format_rvoreImuneaoCorte8unid_190.readFeatures(json_rvoreImuneaoCorte8unid_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_rvoreImuneaoCorte8unid_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte8unid_190.addFeatures(features_rvoreImuneaoCorte8unid_190);
var lyr_rvoreImuneaoCorte8unid_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte8unid_190, 
                style: style_rvoreImuneaoCorte8unid_190,
                popuplayertitle: 'Árvore Imune ao Corte (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte8unid_190.png" /> Árvore Imune ao Corte (8 unid.)'
            });
var format_Voorocas26unid_191 = new ol.format.GeoJSON();
var features_Voorocas26unid_191 = format_Voorocas26unid_191.readFeatures(json_Voorocas26unid_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Voorocas26unid_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas26unid_191.addFeatures(features_Voorocas26unid_191);
var lyr_Voorocas26unid_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas26unid_191, 
                style: style_Voorocas26unid_191,
                popuplayertitle: 'Voçorocas (26 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas26unid_191.png" /> Voçorocas (26 unid.)'
            });
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica1unid_176,lyr_AoCivilPblica1unid_177,lyr_CartaAnuncia20unid_178,lyr_CartaAnuncia19unid_179,lyr_PlantioVoluntrio1unid_180,lyr_PlantioVoluntrio1unid_181,lyr_TACMinistrioPblico9unid_182,lyr_TACMinistrioPblico9unid_183,lyr_TCRACETESB28unid_184,lyr_TCRACETESB28unid_185,lyr_TCRAMunicipal14unid_186,lyr_TCRAMunicipal14unid_187,lyr_TRPRLCETESB2unid_188,lyr_TRPRLCETESB2unid_189,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_160,lyr_AROreadeAmortecimento_161,lyr_AROFaixadeCuestas_162,lyr_AROAPP_163,lyr_ARAIncongrunciasemAPP_164,lyr_ARAETELagoas_165,lyr_ARAAterros_166,lyr_AODreaUrbanaConsolidada_167,lyr_AODBaixaDensidadeNvel3_168,lyr_AODBaixaDensidadeNvel2_169,lyr_AODBaixaDensidadeNvel1_170,lyr_AODAUSFase2_171,lyr_AODAUSFase1_172,lyr_LimitedaBaciadoRioCanoasLeiC4322024_173,lyr_LimitedaBaciadoRioCanoasLeiC1002006_174,lyr_DelimitaodaBaciadoRibeirodaOna_175,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_ParqueZumbidosPalmares_150,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152,lyr_AntigoAterrodasMaritacas_153,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156,lyr_AntigoAterrodaFazendaMunicipal_157,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_Declividade = new ol.layer.Group({
                                layers: [lyr_DeclividadeCopernicus30m_149,],
                                fold: 'close',
                                title: 'Declividade'});
var group_SecretariadeInfraestrutura = new ol.layer.Group({
                                layers: [lyr_EmpreendimentoVillaDoratta_37,lyr_EmpreendimentoVillaDoratta_38,lyr_EmpreendimentoSoCarlosII_39,lyr_EmpreendimentoSoCarlosII_40,lyr_EmpreendimentoParqueFlora_41,lyr_EmpreendimentoParqueFlora_42,lyr_EmpreendimentoVittaSoVicente_43,lyr_EmpreendimentoVittaSoVicente_44,lyr_EmpreendimentoRecantoMeneghetti_45,lyr_EmpreendimentoRecantoMeneghetti_46,lyr_EmpreendimentoParquedosSabias_47,lyr_EmpreendimentoParquedosSabias_48,lyr_EmpreendimentoMoradadaMata_49,lyr_EmpreendimentoMoradadaMata_50,lyr_EmpreendimentoIrineuZanetiII_51,lyr_EmpreendimentoIrineuZanetiII_52,lyr_EmpreendimentoAdonis_53,lyr_EmpreendimentoAdonis_54,lyr_EmpreendimentoResidencialJabuticabeiras_55,lyr_EmpreendimentoResidencialJabuticabeiras_56,lyr_EmpreendimentoResidencialMarianaAlarcon_57,lyr_EmpreendimentoResidencialMarianaAlarcon_58,lyr_EmpreendimentoResidencialCintraAlves_59,lyr_EmpreendimentoResidencialCintraAlves_60,lyr_EmpreendimentoLoteamentolamo_61,lyr_EmpreendimentoLoteamentolamo_62,lyr_EmpreendimentoSantaLina_63,lyr_EmpreendimentoSantaLina_64,lyr_EmpreendimentoResidencialPousoAlegre_65,lyr_EmpreendimentoResidencialPousoAlegre_66,lyr_EmpreendimentoResidencialAltodaFazenda_67,lyr_EmpreendimentoResidencialAltodaFazenda_68,lyr_EmpreendimentoResidencialMarioTasso_69,lyr_EmpreendimentoResidencialMarioTasso_70,lyr_EmpreendimentoResidenciaisVivenna_71,lyr_EmpreendimentoResidenciaisVivenna_72,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_73,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_74,lyr_EmprendimentoElias_75,lyr_EmprendimentoElias_76,lyr_EmpreendimentoResidencialSoCarlosI_77,lyr_EmpreendimentoResidencialSoCarlosI_78,lyr_EmpreendimentoMonti_79,lyr_EmpreendimentoMonti_80,lyr_EmpreendimentoResidencialMoradadoBosque_81,lyr_EmpreendimentoResidencialMoradadoBosque_82,lyr_EmpreendimentoVittaAlvorada_83,lyr_EmpreendimentoVittaAlvorada_84,lyr_EmpreendimentoResidencialMarthaHelena_85,lyr_EmpreendimentoResidencialMarthaHelena_86,lyr_EmpreendimentoResidencialYasminTorres_87,lyr_EmpreendimentoResidencialYasminTorres_88,lyr_EmpreendimentoPalmeiraReal_89,lyr_EmpreendimentoPalmeiraReal_90,lyr_EmpreendimentoEssence_91,lyr_EmpreendimentoEssence_92,lyr_EmpreendimentoVersalhes_93,lyr_EmpreendimentoVersalhes_94,lyr_EmpreendimentoSonetto_95,lyr_EmpreendimentoSonetto_96,lyr_EmpreendimentoResidencialSantaIns_97,lyr_EmpreendimentoResidencialSantaIns_98,lyr_EmpreendimentoEdifcioSolNascente_99,lyr_EmpreendimentoEdifcioSolNascente_100,lyr_EmpreendimentoResidencialQuintadosOitis_101,lyr_EmpreendimentoResidencialQuintadosOitis_102,lyr_EmpreendimentoResidencialQuintadoSol_103,lyr_EmpreendimentoResidencialQuintadoSol_104,lyr_EmpreendimentoResidencialNairRetuciII_105,lyr_EmpreendimentoResidencialNairRetuciII_106,lyr_EmpreendimentoParquePalmeiraImperial_107,lyr_EmpreendimentoParquePalmeiraImperial_108,lyr_EmpreendimentoBordadaMata_109,lyr_EmpreendimentoBordadaMata_110,lyr_EmpreendimentoResidencialCidadeJardim_111,lyr_EmpreendimentoResidencialCidadeJardim_112,lyr_EmpreendimentoEdifcioResidencialHope_113,lyr_EmpreendimentoEdifcioResidencialHope_114,lyr_EmpreendimentoHorizResidence_115,lyr_EmpreendimentoHorizResidence_116,lyr_EmpreendimentoJardimFlora_117,lyr_EmpreendimentoJardimFlora_118,lyr_EmpreendimentoJardimHorizonte_119,lyr_EmpreendimentoJardimHorizonte_120,lyr_EmpreendimentoJardimMariaLuiza_121,lyr_EmpreendimentoJardimMariaLuiza_122,lyr_EmpreendimentoMontBlancResidence_123,lyr_EmpreendimentoMontBlancResidence_124,lyr_EmpreendimentoMoradadoVerdeII_125,lyr_EmpreendimentoMoradadoVerdeII_126,lyr_EmpreendimentoResicencialNairRetuci_127,lyr_EmpreendimentoResicencialNairRetuci_128,lyr_EmpreendimentoParagon_129,lyr_EmpreendimentoParagon_130,lyr_EmpreendimentoParqueVillaLobos_131,lyr_EmpreendimentoParqueVillaLobos_132,lyr_EmpreendimentoDaVinci_133,lyr_EmpreendimentoDaVinci_134,lyr_EmpreendimentoResidencialDomingosJardini_135,lyr_EmpreendimentoResidencialDomingosJardini_136,lyr_EmpreendimentoResidencialSantaF_137,lyr_EmpreendimentoResidencialSantaF_138,lyr_EmpreendimentoEdifcioRuadoSol_139,lyr_EmpreendimentoEdifcioRuadoSol_140,lyr_EmpreendimentoTorontoResidence_141,lyr_EmpreendimentoTorontoResidence_142,lyr_ServidoRamal138kVFranca4Guanabara_143,lyr_ServidoRamal138kVFranca4Guanabara_144,lyr_EmpreendimentosAprovado27unid_145,lyr_EmpreendimentosDiretriz4unid_146,lyr_EmpreendimentosDefinitiva6unid_147,lyr_EmpreendimentosPrvia16unid_148,],
                                fold: 'close',
                                title: 'Secretaria de Infraestrutura'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteEMDEF10unid218783m_28,lyr_LoteEMDEF10unid_29,lyr_Lote502unid13759703m_30,lyr_Lote502unid_31,lyr_APP168unid238007435m_32,lyr_readeUsoEspecial251unid269349873m_33,lyr_reaInstitucional240unid136661229m_34,lyr_reaPatrimonial33unid15807656m_35,lyr_reaVerde2008unid836299560m_36,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_RemanescentedaMatrcula11419_12,lyr_ConjuntoHabitacional_13,lyr_AvdeacessoaoHortoeColgioAgrcola_14,lyr_reaK_15,lyr_reaJ_16,lyr_reaI_17,lyr_reaH_18,lyr_reaG_19,lyr_reaF_20,lyr_reaE_21,lyr_reaD_22,lyr_reaC_23,lyr_reaB_24,lyr_reaA_25,lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_26,lyr_reaaseraverbadaPartedareaG_27,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_LoteamentosClandestinos = new ol.layer.Group({
                                layers: [lyr_StioNossaSenhoraAparecida_10,lyr_FazendaBarroPretoeBambus_11,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_5,lyr_RiosDuplos84unid_6,lyr_MassasDgua270unid_7,lyr_RiosSimples1842unid_8,lyr_Nascentes821unid_9,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: 'close',
                                title: 'Mapas Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_APP1745unid_5.setVisible(false);lyr_RiosDuplos84unid_6.setVisible(false);lyr_MassasDgua270unid_7.setVisible(false);lyr_RiosSimples1842unid_8.setVisible(false);lyr_Nascentes821unid_9.setVisible(false);lyr_StioNossaSenhoraAparecida_10.setVisible(false);lyr_FazendaBarroPretoeBambus_11.setVisible(false);lyr_RemanescentedaMatrcula11419_12.setVisible(false);lyr_ConjuntoHabitacional_13.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_14.setVisible(false);lyr_reaK_15.setVisible(false);lyr_reaJ_16.setVisible(false);lyr_reaI_17.setVisible(false);lyr_reaH_18.setVisible(false);lyr_reaG_19.setVisible(false);lyr_reaF_20.setVisible(false);lyr_reaE_21.setVisible(false);lyr_reaD_22.setVisible(false);lyr_reaC_23.setVisible(false);lyr_reaB_24.setVisible(false);lyr_reaA_25.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_26.setVisible(false);lyr_reaaseraverbadaPartedareaG_27.setVisible(false);lyr_LoteEMDEF10unid218783m_28.setVisible(false);lyr_LoteEMDEF10unid_29.setVisible(false);lyr_Lote502unid13759703m_30.setVisible(false);lyr_Lote502unid_31.setVisible(false);lyr_APP168unid238007435m_32.setVisible(false);lyr_readeUsoEspecial251unid269349873m_33.setVisible(false);lyr_reaInstitucional240unid136661229m_34.setVisible(false);lyr_reaPatrimonial33unid15807656m_35.setVisible(false);lyr_reaVerde2008unid836299560m_36.setVisible(false);lyr_EmpreendimentoVillaDoratta_37.setVisible(false);lyr_EmpreendimentoVillaDoratta_38.setVisible(false);lyr_EmpreendimentoSoCarlosII_39.setVisible(false);lyr_EmpreendimentoSoCarlosII_40.setVisible(false);lyr_EmpreendimentoParqueFlora_41.setVisible(false);lyr_EmpreendimentoParqueFlora_42.setVisible(false);lyr_EmpreendimentoVittaSoVicente_43.setVisible(false);lyr_EmpreendimentoVittaSoVicente_44.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_45.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_46.setVisible(false);lyr_EmpreendimentoParquedosSabias_47.setVisible(false);lyr_EmpreendimentoParquedosSabias_48.setVisible(false);lyr_EmpreendimentoMoradadaMata_49.setVisible(false);lyr_EmpreendimentoMoradadaMata_50.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_51.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_52.setVisible(false);lyr_EmpreendimentoAdonis_53.setVisible(false);lyr_EmpreendimentoAdonis_54.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_55.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_56.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_57.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_58.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_59.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_60.setVisible(false);lyr_EmpreendimentoLoteamentolamo_61.setVisible(false);lyr_EmpreendimentoLoteamentolamo_62.setVisible(false);lyr_EmpreendimentoSantaLina_63.setVisible(false);lyr_EmpreendimentoSantaLina_64.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_65.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_66.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_67.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_68.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_69.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_70.setVisible(false);lyr_EmpreendimentoResidenciaisVivenna_71.setVisible(false);lyr_EmpreendimentoResidenciaisVivenna_72.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_73.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_74.setVisible(false);lyr_EmprendimentoElias_75.setVisible(false);lyr_EmprendimentoElias_76.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_77.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_78.setVisible(false);lyr_EmpreendimentoMonti_79.setVisible(false);lyr_EmpreendimentoMonti_80.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_81.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_82.setVisible(false);lyr_EmpreendimentoVittaAlvorada_83.setVisible(false);lyr_EmpreendimentoVittaAlvorada_84.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_85.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_86.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_87.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_88.setVisible(false);lyr_EmpreendimentoPalmeiraReal_89.setVisible(false);lyr_EmpreendimentoPalmeiraReal_90.setVisible(false);lyr_EmpreendimentoEssence_91.setVisible(false);lyr_EmpreendimentoEssence_92.setVisible(false);lyr_EmpreendimentoVersalhes_93.setVisible(false);lyr_EmpreendimentoVersalhes_94.setVisible(false);lyr_EmpreendimentoSonetto_95.setVisible(false);lyr_EmpreendimentoSonetto_96.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_97.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_98.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_99.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_100.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_101.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_102.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_103.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_104.setVisible(false);lyr_EmpreendimentoResidencialNairRetuciII_105.setVisible(false);lyr_EmpreendimentoResidencialNairRetuciII_106.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_107.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_108.setVisible(false);lyr_EmpreendimentoBordadaMata_109.setVisible(false);lyr_EmpreendimentoBordadaMata_110.setVisible(false);lyr_EmpreendimentoResidencialCidadeJardim_111.setVisible(false);lyr_EmpreendimentoResidencialCidadeJardim_112.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_113.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_114.setVisible(false);lyr_EmpreendimentoHorizResidence_115.setVisible(false);lyr_EmpreendimentoHorizResidence_116.setVisible(false);lyr_EmpreendimentoJardimFlora_117.setVisible(false);lyr_EmpreendimentoJardimFlora_118.setVisible(false);lyr_EmpreendimentoJardimHorizonte_119.setVisible(false);lyr_EmpreendimentoJardimHorizonte_120.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_121.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_122.setVisible(false);lyr_EmpreendimentoMontBlancResidence_123.setVisible(false);lyr_EmpreendimentoMontBlancResidence_124.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_125.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_126.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_127.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_128.setVisible(false);lyr_EmpreendimentoParagon_129.setVisible(false);lyr_EmpreendimentoParagon_130.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_131.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_132.setVisible(false);lyr_EmpreendimentoDaVinci_133.setVisible(false);lyr_EmpreendimentoDaVinci_134.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_135.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_136.setVisible(false);lyr_EmpreendimentoResidencialSantaF_137.setVisible(false);lyr_EmpreendimentoResidencialSantaF_138.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_139.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_140.setVisible(false);lyr_EmpreendimentoTorontoResidence_141.setVisible(false);lyr_EmpreendimentoTorontoResidence_142.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_143.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_144.setVisible(false);lyr_EmpreendimentosAprovado27unid_145.setVisible(false);lyr_EmpreendimentosDiretriz4unid_146.setVisible(false);lyr_EmpreendimentosDefinitiva6unid_147.setVisible(false);lyr_EmpreendimentosPrvia16unid_148.setVisible(false);lyr_DeclividadeCopernicus30m_149.setVisible(false);lyr_ParqueZumbidosPalmares_150.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152.setVisible(false);lyr_AntigoAterrodasMaritacas_153.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_157.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159.setVisible(false);lyr_ARORemanescentesFlorestais_160.setVisible(false);lyr_AROreadeAmortecimento_161.setVisible(false);lyr_AROFaixadeCuestas_162.setVisible(false);lyr_AROAPP_163.setVisible(false);lyr_ARAIncongrunciasemAPP_164.setVisible(false);lyr_ARAETELagoas_165.setVisible(false);lyr_ARAAterros_166.setVisible(false);lyr_AODreaUrbanaConsolidada_167.setVisible(false);lyr_AODBaixaDensidadeNvel3_168.setVisible(false);lyr_AODBaixaDensidadeNvel2_169.setVisible(false);lyr_AODBaixaDensidadeNvel1_170.setVisible(false);lyr_AODAUSFase2_171.setVisible(false);lyr_AODAUSFase1_172.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_173.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_174.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_175.setVisible(false);lyr_AoCivilPblica1unid_176.setVisible(false);lyr_AoCivilPblica1unid_177.setVisible(false);lyr_CartaAnuncia20unid_178.setVisible(false);lyr_CartaAnuncia19unid_179.setVisible(false);lyr_PlantioVoluntrio1unid_180.setVisible(false);lyr_PlantioVoluntrio1unid_181.setVisible(false);lyr_TACMinistrioPblico9unid_182.setVisible(false);lyr_TACMinistrioPblico9unid_183.setVisible(false);lyr_TCRACETESB28unid_184.setVisible(false);lyr_TCRACETESB28unid_185.setVisible(false);lyr_TCRAMunicipal14unid_186.setVisible(false);lyr_TCRAMunicipal14unid_187.setVisible(false);lyr_TRPRLCETESB2unid_188.setVisible(false);lyr_TRPRLCETESB2unid_189.setVisible(false);lyr_rvoreImuneaoCorte8unid_190.setVisible(false);lyr_Voorocas26unid_191.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,group_HidrografiaFBDS2025,group_LoteamentosClandestinos,group_FazendaMunicipalPousoAlto,group_reasPblicas,group_SecretariadeInfraestrutura,group_Declividade,group_GerenciamentodereasContaminadas,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_reasCompromissadas,lyr_rvoreImuneaoCorte8unid_190,lyr_Voorocas26unid_191];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Área (km²)': 'Área (km²)', });
lyr_reaUrbanadeFranca_4.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Código da UF': 'Código da UF', 'Classe de Uso': 'Classe de Uso', 'Área (ha)': 'Área (ha)', 'Área (km²)': 'Área (km²)', });
lyr_APP1745unid_5.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_6.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_7.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_8.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_9.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_StioNossaSenhoraAparecida_10.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'area_m2': 'Área (m²)', 'multa': 'multa', 'ufmf': 'UFMF', });
lyr_FazendaBarroPretoeBambus_11.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'area_m2': 'Área (m²)', 'multa': 'multa', 'ufmf': 'UFMF', });
lyr_RemanescentedaMatrcula11419_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_ConjuntoHabitacional_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_AvdeacessoaoHortoeColgioAgrcola_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaK_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaJ_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaI_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaH_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaG_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaF_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaE_21.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaD_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaC_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaB_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaA_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaaseraverbadaPartedareaG_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_LoteEMDEF10unid218783m_28.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_LoteEMDEF10unid_29.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_Lote502unid13759703m_30.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_Lote502unid_31.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_APP168unid238007435m_32.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_readeUsoEspecial251unid269349873m_33.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaInstitucional240unid136661229m_34.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaPatrimonial33unid15807656m_35.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaVerde2008unid836299560m_36.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_EmpreendimentoVillaDoratta_37.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDoratta_38.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_39.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_40.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_41.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_42.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_43.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_44.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoRecantoMeneghetti_45.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoRecantoMeneghetti_46.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_47.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_48.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_49.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_50.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_51.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_52.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_53.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_54.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialJabuticabeiras_55.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialJabuticabeiras_56.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_57.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_58.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_59.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_60.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_61.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_62.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_63.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_64.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_65.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_66.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_67.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_68.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialMarioTasso_69.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarioTasso_70.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidenciaisVivenna_71.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidenciaisVivenna_72.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_73.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_74.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_75.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_76.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialSoCarlosI_77.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSoCarlosI_78.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoMonti_79.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMonti_80.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMoradadoBosque_81.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMoradadoBosque_82.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoVittaAlvorada_83.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_84.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMarthaHelena_85.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarthaHelena_86.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialYasminTorres_87.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialYasminTorres_88.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoPalmeiraReal_89.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoPalmeiraReal_90.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEssence_91.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEssence_92.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_93.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_94.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoSonetto_95.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSonetto_96.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialSantaIns_97.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaIns_98.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEdifcioSolNascente_99.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioSolNascente_100.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadosOitis_101.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadosOitis_102.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadoSol_103.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadoSol_104.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialNairRetuciII_105.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialNairRetuciII_106.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_107.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_108.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoBordadaMata_109.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoBordadaMata_110.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCidadeJardim_111.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCidadeJardim_112.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_113.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_114.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_115.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_116.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_117.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_118.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_119.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_120.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_121.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_122.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_123.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_124.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_125.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_126.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_127.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_128.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_129.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_131.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_143.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_144.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_EmpreendimentosAprovado27unid_145.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDiretriz4unid_146.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDefinitiva6unid_147.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosPrvia16unid_148.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_DeclividadeCopernicus30m_149.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_ParqueZumbidosPalmares_150.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacas_153.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodaFazendaMunicipal_157.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158.set('fieldAliases', {'fid': 'fid', 'Field1': 'Poço', 'Field2': 'Field2', 'Field3': 'Field3', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Poço', });
lyr_ARORemanescentesFlorestais_160.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_161.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_162.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_163.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_164.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_165.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_166.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_167.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_168.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_169.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_170.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_171.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'SUM_area': 'SUM_area', 'FIRST_AI': 'FIRST_AI', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_172.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_173.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_174.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_175.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_AoCivilPblica1unid_176.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_177.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia20unid_178.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia19unid_179.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio1unid_180.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_181.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico9unid_182.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_183.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB28unid_184.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESB28unid_185.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal14unid_186.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal14unid_187.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB2unid_188.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_189.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_rvoreImuneaoCorte8unid_190.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_Voorocas26unid_191.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Área (km²)': '', });
lyr_reaUrbanadeFranca_4.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Código da UF': '', 'Classe de Uso': '', 'Área (ha)': '', 'Área (km²)': '', });
lyr_APP1745unid_5.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_6.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_7.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_8.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_9.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_StioNossaSenhoraAparecida_10.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area_m2': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_FazendaBarroPretoeBambus_11.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area_m2': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RemanescentedaMatrcula11419_12.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_ConjuntoHabitacional_13.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_AvdeacessoaoHortoeColgioAgrcola_14.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaK_15.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaJ_16.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaI_17.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaH_18.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaG_19.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaF_20.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaE_21.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaD_22.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaC_23.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaB_24.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaA_25.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_26.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaaseraverbadaPartedareaG_27.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_LoteEMDEF10unid218783m_28.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_LoteEMDEF10unid_29.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_Lote502unid13759703m_30.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_Lote502unid_31.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_APP168unid238007435m_32.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_readeUsoEspecial251unid269349873m_33.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaInstitucional240unid136661229m_34.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaPatrimonial33unid15807656m_35.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaVerde2008unid836299560m_36.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_EmpreendimentoVillaDoratta_37.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDoratta_38.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_39.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_40.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_41.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_42.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_43.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_44.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoRecantoMeneghetti_45.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoRecantoMeneghetti_46.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_47.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_48.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_49.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_50.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_51.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_52.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_53.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_54.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_55.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_56.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_57.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_58.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_59.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_60.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoLoteamentolamo_61.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmpreendimentoLoteamentolamo_62.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_63.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_64.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_65.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_66.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_67.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_68.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialMarioTasso_69.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarioTasso_70.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidenciaisVivenna_71.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidenciaisVivenna_72.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_73.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_74.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmprendimentoElias_75.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmprendimentoElias_76.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialSoCarlosI_77.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSoCarlosI_78.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoMonti_79.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMonti_80.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_81.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_82.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoVittaAlvorada_83.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_84.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMarthaHelena_85.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarthaHelena_86.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialYasminTorres_87.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialYasminTorres_88.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoPalmeiraReal_89.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoPalmeiraReal_90.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEssence_91.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEssence_92.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_93.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_94.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoSonetto_95.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSonetto_96.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialSantaIns_97.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaIns_98.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEdifcioSolNascente_99.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioSolNascente_100.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_101.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_102.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadoSol_103.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadoSol_104.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialNairRetuciII_105.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialNairRetuciII_106.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_107.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_108.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoBordadaMata_109.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoBordadaMata_110.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCidadeJardim_111.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCidadeJardim_112.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_113.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_114.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_115.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_116.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_117.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_118.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_119.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_120.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_121.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_122.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_123.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_124.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_125.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_126.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_127.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_128.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_129.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_130.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_131.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_132.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_134.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_136.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_140.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_142.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_143.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_144.set('fieldImages', {'fid': '', 'id': '', });
lyr_EmpreendimentosAprovado27unid_145.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDiretriz4unid_146.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDefinitiva6unid_147.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosPrvia16unid_148.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_DeclividadeCopernicus30m_149.set('fieldImages', {'fid': 'TextEdit', 'DEC': 'Range', });
lyr_ParqueZumbidosPalmares_150.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_153.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_157.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158.set('fieldImages', {'fid': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ARORemanescentesFlorestais_160.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_161.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_162.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_163.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_164.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_165.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_166.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_167.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_168.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_169.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_170.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_171.set('fieldImages', {'fid': '', 'Classe': '', 'SUM_area': '', 'FIRST_AI': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase1_172.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_173.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_174.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_175.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_AoCivilPblica1unid_176.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_177.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_CartaAnuncia20unid_178.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia19unid_179.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_PlantioVoluntrio1unid_180.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_181.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_TACMinistrioPblico9unid_182.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_183.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TCRACETESB28unid_184.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB28unid_185.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', });
lyr_TCRAMunicipal14unid_186.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal14unid_187.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TRPRLCETESB2unid_188.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_189.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_rvoreImuneaoCorte8unid_190.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_Voorocas26unid_191.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Área (km²)': 'inline label - visible with data', });
lyr_reaUrbanadeFranca_4.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Código da UF': 'hidden field', 'Classe de Uso': 'hidden field', 'Área (ha)': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_APP1745unid_5.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_RiosDuplos84unid_6.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_7.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_8.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_9.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_StioNossaSenhoraAparecida_10.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_FazendaBarroPretoeBambus_11.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RemanescentedaMatrcula11419_12.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_ConjuntoHabitacional_13.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_AvdeacessoaoHortoeColgioAgrcola_14.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaK_15.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaJ_16.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaI_17.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaH_18.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaG_19.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaF_20.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaE_21.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaD_22.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaC_23.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaB_24.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaA_25.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_26.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaaseraverbadaPartedareaG_27.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_LoteEMDEF10unid218783m_28.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_29.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_Lote502unid13759703m_30.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_Lote502unid_31.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_APP168unid238007435m_32.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_readeUsoEspecial251unid269349873m_33.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaInstitucional240unid136661229m_34.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaPatrimonial33unid15807656m_35.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaVerde2008unid836299560m_36.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDoratta_37.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDoratta_38.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_39.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_40.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_41.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_42.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_43.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_44.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoRecantoMeneghetti_45.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoRecantoMeneghetti_46.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_47.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_48.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_49.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_50.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_51.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_52.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_53.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_54.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialJabuticabeiras_55.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialJabuticabeiras_56.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_57.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_58.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_59.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_60.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_61.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_62.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_63.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_64.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_65.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_66.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_67.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_68.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialMarioTasso_69.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarioTasso_70.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidenciaisVivenna_71.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidenciaisVivenna_72.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_73.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_74.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_75.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_76.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialSoCarlosI_77.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSoCarlosI_78.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoMonti_79.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMonti_80.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMoradadoBosque_81.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMoradadoBosque_82.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoVittaAlvorada_83.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_84.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMarthaHelena_85.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarthaHelena_86.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialYasminTorres_87.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialYasminTorres_88.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoPalmeiraReal_89.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoPalmeiraReal_90.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEssence_91.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEssence_92.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_93.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_94.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoSonetto_95.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSonetto_96.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialSantaIns_97.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaIns_98.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEdifcioSolNascente_99.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioSolNascente_100.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadosOitis_101.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadosOitis_102.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadoSol_103.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadoSol_104.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialNairRetuciII_105.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialNairRetuciII_106.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_107.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_108.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoBordadaMata_109.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoBordadaMata_110.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCidadeJardim_111.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCidadeJardim_112.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_113.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_114.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_115.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_116.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_117.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_118.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_119.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_120.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_121.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_122.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_123.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_124.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_125.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_126.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_127.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_128.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_129.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_130.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_131.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_143.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_144.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_EmpreendimentosAprovado27unid_145.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDiretriz4unid_146.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDefinitiva6unid_147.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosPrvia16unid_148.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_DeclividadeCopernicus30m_149.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_ParqueZumbidosPalmares_150.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_151.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_152.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacas_153.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_154.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_155.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_156.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipal_157.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_158.set('fieldLabels', {'fid': 'hidden field', 'Field1': 'inline label - visible with data', 'Field2': 'hidden field', 'Field3': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_159.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_160.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_161.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_162.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_163.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_164.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_165.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_166.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_167.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_168.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_169.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_170.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_171.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_172.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_173.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_174.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_175.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_176.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_177.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_178.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia19unid_179.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_180.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_181.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_182.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_183.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB28unid_184.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB28unid_185.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_186.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_187.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_188.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_189.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte8unid_190.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_Voorocas26unid_191.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_Voorocas26unid_191.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});