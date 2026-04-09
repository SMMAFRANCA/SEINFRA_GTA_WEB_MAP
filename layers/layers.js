ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([233773.359375, 7700979.946759, 276615.687500, 7740908.029506]);
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
var format_ARORemanescentesFlorestais_5 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_5 = format_ARORemanescentesFlorestais_5.readFeatures(json_ARORemanescentesFlorestais_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARORemanescentesFlorestais_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_5.addFeatures(features_ARORemanescentesFlorestais_5);
var lyr_ARORemanescentesFlorestais_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_5, 
                style: style_ARORemanescentesFlorestais_5,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_5.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_6 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_6 = format_AROreadeAmortecimento_6.readFeatures(json_AROreadeAmortecimento_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROreadeAmortecimento_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_6.addFeatures(features_AROreadeAmortecimento_6);
var lyr_AROreadeAmortecimento_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_6, 
                style: style_AROreadeAmortecimento_6,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_6.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_7 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_7 = format_AROFaixadeCuestas_7.readFeatures(json_AROFaixadeCuestas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROFaixadeCuestas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_7.addFeatures(features_AROFaixadeCuestas_7);
var lyr_AROFaixadeCuestas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_7, 
                style: style_AROFaixadeCuestas_7,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_7.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_8 = new ol.format.GeoJSON();
var features_AROAPP_8 = format_AROAPP_8.readFeatures(json_AROAPP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROAPP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_8.addFeatures(features_AROAPP_8);
var lyr_AROAPP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_8, 
                style: style_AROAPP_8,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_8.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_9 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_9 = format_ARAIncongrunciasemAPP_9.readFeatures(json_ARAIncongrunciasemAPP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAIncongrunciasemAPP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_9.addFeatures(features_ARAIncongrunciasemAPP_9);
var lyr_ARAIncongrunciasemAPP_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_9, 
                style: style_ARAIncongrunciasemAPP_9,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_9.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_10 = new ol.format.GeoJSON();
var features_ARAETELagoas_10 = format_ARAETELagoas_10.readFeatures(json_ARAETELagoas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAETELagoas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_10.addFeatures(features_ARAETELagoas_10);
var lyr_ARAETELagoas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_10, 
                style: style_ARAETELagoas_10,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_10.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_11 = new ol.format.GeoJSON();
var features_ARAAterros_11 = format_ARAAterros_11.readFeatures(json_ARAAterros_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAAterros_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_11.addFeatures(features_ARAAterros_11);
var lyr_ARAAterros_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_11, 
                style: style_ARAAterros_11,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_11.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_12 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_12 = format_AODreaUrbanaConsolidada_12.readFeatures(json_AODreaUrbanaConsolidada_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODreaUrbanaConsolidada_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_12.addFeatures(features_AODreaUrbanaConsolidada_12);
var lyr_AODreaUrbanaConsolidada_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_12, 
                style: style_AODreaUrbanaConsolidada_12,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_12.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_13 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_13 = format_AODBaixaDensidadeNvel3_13.readFeatures(json_AODBaixaDensidadeNvel3_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel3_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_13.addFeatures(features_AODBaixaDensidadeNvel3_13);
var lyr_AODBaixaDensidadeNvel3_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_13, 
                style: style_AODBaixaDensidadeNvel3_13,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_13.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_14 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_14 = format_AODBaixaDensidadeNvel2_14.readFeatures(json_AODBaixaDensidadeNvel2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_14.addFeatures(features_AODBaixaDensidadeNvel2_14);
var lyr_AODBaixaDensidadeNvel2_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_14, 
                style: style_AODBaixaDensidadeNvel2_14,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_14.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_15 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_15 = format_AODBaixaDensidadeNvel1_15.readFeatures(json_AODBaixaDensidadeNvel1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_15.addFeatures(features_AODBaixaDensidadeNvel1_15);
var lyr_AODBaixaDensidadeNvel1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_15, 
                style: style_AODBaixaDensidadeNvel1_15,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_15.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_16 = new ol.format.GeoJSON();
var features_AODAUSFase2_16 = format_AODAUSFase2_16.readFeatures(json_AODAUSFase2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_16.addFeatures(features_AODAUSFase2_16);
var lyr_AODAUSFase2_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_16, 
                style: style_AODAUSFase2_16,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_16.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_17 = new ol.format.GeoJSON();
var features_AODAUSFase1_17 = format_AODAUSFase1_17.readFeatures(json_AODAUSFase1_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase1_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_17.addFeatures(features_AODAUSFase1_17);
var lyr_AODAUSFase1_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_17, 
                style: style_AODAUSFase1_17,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_17.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_18 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_18 = format_LimitedaBaciadoRioCanoasLeiC4322024_18.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_18.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_18);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_18, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_18,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_18.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_19 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_19 = format_LimitedaBaciadoRioCanoasLeiC1002006_19.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_19.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_19);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_19, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_19,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_19.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_20 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_20 = format_DelimitaodaBaciadoRibeirodaOna_20.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_20.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_20);
var lyr_DelimitaodaBaciadoRibeirodaOna_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_20, 
                style: style_DelimitaodaBaciadoRibeirodaOna_20,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_20.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21 = new ol.format.GeoJSON();
var features_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21 = format_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.readFeatures(json_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.addFeatures(features_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21);
var lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21, 
                style: style_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21,
                popuplayertitle: 'Zonas Especiais - AEIS - Área Especial de Interesse Social',
                interactive: true,
                title: '<img src="styles/legend/ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.png" /> Zonas Especiais - AEIS - Área Especial de Interesse Social'
            });
var format_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22 = new ol.format.GeoJSON();
var features_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22 = format_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.readFeatures(json_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.addFeatures(features_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22);
var lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22, 
                style: style_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22,
                popuplayertitle: 'Zonas Especiais  - AEPI - Área Especial Preferencialmente Industrial e Logística',
                interactive: true,
                title: '<img src="styles/legend/ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.png" /> Zonas Especiais  - AEPI - Área Especial Preferencialmente Industrial e Logística'
            });
var format_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23 = new ol.format.GeoJSON();
var features_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23 = format_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.readFeatures(json_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.addFeatures(features_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23);
var lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23, 
                style: style_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23,
                popuplayertitle: 'Zonas Especiais - AERU - Área Especial Residencias Unifamiliares',
                interactive: true,
                title: '<img src="styles/legend/ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.png" /> Zonas Especiais - AERU - Área Especial Residencias Unifamiliares'
            });
var format_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24 = new ol.format.GeoJSON();
var features_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24 = format_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.readFeatures(json_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.addFeatures(features_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24);
var lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24, 
                style: style_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24,
                popuplayertitle: 'Zonas Especiais - Área Especial Destinada ao Lazer e de Interesse Turístico e Cultural',
                interactive: true,
                title: '<img src="styles/legend/ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.png" /> Zonas Especiais - Área Especial Destinada ao Lazer e de Interesse Turístico e Cultural'
            });
var format_MacrozonasMacrozonadoRioCanoas_25 = new ol.format.GeoJSON();
var features_MacrozonasMacrozonadoRioCanoas_25 = format_MacrozonasMacrozonadoRioCanoas_25.readFeatures(json_MacrozonasMacrozonadoRioCanoas_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonasMacrozonadoRioCanoas_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonasMacrozonadoRioCanoas_25.addFeatures(features_MacrozonasMacrozonadoRioCanoas_25);
var lyr_MacrozonasMacrozonadoRioCanoas_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonasMacrozonadoRioCanoas_25, 
                style: style_MacrozonasMacrozonadoRioCanoas_25,
                popuplayertitle: 'Macrozonas - Macrozona do Rio Canoas',
                interactive: true,
                title: '<img src="styles/legend/MacrozonasMacrozonadoRioCanoas_25.png" /> Macrozonas - Macrozona do Rio Canoas'
            });
var format_MacrozonasSubMacrozonadeExpansoUrbana_26 = new ol.format.GeoJSON();
var features_MacrozonasSubMacrozonadeExpansoUrbana_26 = format_MacrozonasSubMacrozonadeExpansoUrbana_26.readFeatures(json_MacrozonasSubMacrozonadeExpansoUrbana_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonasSubMacrozonadeExpansoUrbana_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonasSubMacrozonadeExpansoUrbana_26.addFeatures(features_MacrozonasSubMacrozonadeExpansoUrbana_26);
var lyr_MacrozonasSubMacrozonadeExpansoUrbana_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonasSubMacrozonadeExpansoUrbana_26, 
                style: style_MacrozonasSubMacrozonadeExpansoUrbana_26,
                popuplayertitle: 'Macrozonas - Sub - Macrozona de Expansão Urbana',
                interactive: true,
                title: '<img src="styles/legend/MacrozonasSubMacrozonadeExpansoUrbana_26.png" /> Macrozonas - Sub - Macrozona de Expansão Urbana'
            });
var format_MacrozonasSubMacrozonadeOcupaoPreferencial_27 = new ol.format.GeoJSON();
var features_MacrozonasSubMacrozonadeOcupaoPreferencial_27 = format_MacrozonasSubMacrozonadeOcupaoPreferencial_27.readFeatures(json_MacrozonasSubMacrozonadeOcupaoPreferencial_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonasSubMacrozonadeOcupaoPreferencial_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonasSubMacrozonadeOcupaoPreferencial_27.addFeatures(features_MacrozonasSubMacrozonadeOcupaoPreferencial_27);
var lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonasSubMacrozonadeOcupaoPreferencial_27, 
                style: style_MacrozonasSubMacrozonadeOcupaoPreferencial_27,
                popuplayertitle: 'Macrozonas - Sub - Macrozona de Ocupação Preferencial',
                interactive: true,
                title: '<img src="styles/legend/MacrozonasSubMacrozonadeOcupaoPreferencial_27.png" /> Macrozonas - Sub - Macrozona de Ocupação Preferencial'
            });
var format_MacrozonasSubMacrozonadeOcupaoRestrita_28 = new ol.format.GeoJSON();
var features_MacrozonasSubMacrozonadeOcupaoRestrita_28 = format_MacrozonasSubMacrozonadeOcupaoRestrita_28.readFeatures(json_MacrozonasSubMacrozonadeOcupaoRestrita_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonasSubMacrozonadeOcupaoRestrita_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonasSubMacrozonadeOcupaoRestrita_28.addFeatures(features_MacrozonasSubMacrozonadeOcupaoRestrita_28);
var lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonasSubMacrozonadeOcupaoRestrita_28, 
                style: style_MacrozonasSubMacrozonadeOcupaoRestrita_28,
                popuplayertitle: 'Macrozonas - Sub - Macrozona de Ocupação Restrita',
                interactive: true,
                title: '<img src="styles/legend/MacrozonasSubMacrozonadeOcupaoRestrita_28.png" /> Macrozonas - Sub - Macrozona de Ocupação Restrita'
            });
var format_ExpansoUrbanaLCN0502003_29 = new ol.format.GeoJSON();
var features_ExpansoUrbanaLCN0502003_29 = format_ExpansoUrbanaLCN0502003_29.readFeatures(json_ExpansoUrbanaLCN0502003_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaLCN0502003_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaLCN0502003_29.addFeatures(features_ExpansoUrbanaLCN0502003_29);
var lyr_ExpansoUrbanaLCN0502003_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaLCN0502003_29, 
                style: style_ExpansoUrbanaLCN0502003_29,
                popuplayertitle: 'Expansão Urbana - L.C. Nº 050/ 2003',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaLCN0502003_29.png" /> Expansão Urbana - L.C. Nº 050/ 2003'
            });
var format_ExpansoUrbanaLCN1402009_30 = new ol.format.GeoJSON();
var features_ExpansoUrbanaLCN1402009_30 = format_ExpansoUrbanaLCN1402009_30.readFeatures(json_ExpansoUrbanaLCN1402009_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaLCN1402009_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaLCN1402009_30.addFeatures(features_ExpansoUrbanaLCN1402009_30);
var lyr_ExpansoUrbanaLCN1402009_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaLCN1402009_30, 
                style: style_ExpansoUrbanaLCN1402009_30,
                popuplayertitle: 'Expansão Urbana - L.C. Nº 140/ 2009',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaLCN1402009_30.png" /> Expansão Urbana - L.C. Nº 140/ 2009'
            });
var format_ExpansoUrbanaLCN2352013_31 = new ol.format.GeoJSON();
var features_ExpansoUrbanaLCN2352013_31 = format_ExpansoUrbanaLCN2352013_31.readFeatures(json_ExpansoUrbanaLCN2352013_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaLCN2352013_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaLCN2352013_31.addFeatures(features_ExpansoUrbanaLCN2352013_31);
var lyr_ExpansoUrbanaLCN2352013_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaLCN2352013_31, 
                style: style_ExpansoUrbanaLCN2352013_31,
                popuplayertitle: 'Expansão Urbana - L.C. Nº 235/ 2013',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaLCN2352013_31.png" /> Expansão Urbana - L.C. Nº 235/ 2013'
            });
var format_ExpansoUrbanaLCN3242019_32 = new ol.format.GeoJSON();
var features_ExpansoUrbanaLCN3242019_32 = format_ExpansoUrbanaLCN3242019_32.readFeatures(json_ExpansoUrbanaLCN3242019_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaLCN3242019_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaLCN3242019_32.addFeatures(features_ExpansoUrbanaLCN3242019_32);
var lyr_ExpansoUrbanaLCN3242019_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaLCN3242019_32, 
                style: style_ExpansoUrbanaLCN3242019_32,
                popuplayertitle: 'Expansão Urbana - L.C. Nº 324/ 2019',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaLCN3242019_32.png" /> Expansão Urbana - L.C. Nº 324/ 2019'
            });
var format_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33 = new ol.format.GeoJSON();
var features_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33 = format_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.readFeatures(json_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.addFeatures(features_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33);
var lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33, 
                style: style_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33,
                popuplayertitle: 'Expansão Urbana - BACIAS DO CANOAS E POUSO ALEGRE - Leis - 4.240/1992, 4.420/1994 e L.C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.png" /> Expansão Urbana - BACIAS DO CANOAS E POUSO ALEGRE - Leis - 4.240/1992, 4.420/1994 e L.C. 100/2006'
            });
var format_SistemaVirioExpansodosistemavirio_34 = new ol.format.GeoJSON();
var features_SistemaVirioExpansodosistemavirio_34 = format_SistemaVirioExpansodosistemavirio_34.readFeatures(json_SistemaVirioExpansodosistemavirio_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioExpansodosistemavirio_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioExpansodosistemavirio_34.addFeatures(features_SistemaVirioExpansodosistemavirio_34);
var lyr_SistemaVirioExpansodosistemavirio_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioExpansodosistemavirio_34, 
                style: style_SistemaVirioExpansodosistemavirio_34,
                popuplayertitle: 'Sistema Viário - Expansão do sistema viário',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioExpansodosistemavirio_34.png" /> Sistema Viário - Expansão do sistema viário'
            });
var format_SistemaVirioRodovias_35 = new ol.format.GeoJSON();
var features_SistemaVirioRodovias_35 = format_SistemaVirioRodovias_35.readFeatures(json_SistemaVirioRodovias_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioRodovias_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioRodovias_35.addFeatures(features_SistemaVirioRodovias_35);
var lyr_SistemaVirioRodovias_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioRodovias_35, 
                style: style_SistemaVirioRodovias_35,
                popuplayertitle: 'Sistema Viário - Rodovias',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioRodovias_35.png" /> Sistema Viário - Rodovias'
            });
var format_SistemaVirioRodoviasViasarteriais_36 = new ol.format.GeoJSON();
var features_SistemaVirioRodoviasViasarteriais_36 = format_SistemaVirioRodoviasViasarteriais_36.readFeatures(json_SistemaVirioRodoviasViasarteriais_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioRodoviasViasarteriais_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioRodoviasViasarteriais_36.addFeatures(features_SistemaVirioRodoviasViasarteriais_36);
var lyr_SistemaVirioRodoviasViasarteriais_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioRodoviasViasarteriais_36, 
                style: style_SistemaVirioRodoviasViasarteriais_36,
                popuplayertitle: 'Sistema Viário - Rodovias/Vias arteriais',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioRodoviasViasarteriais_36.png" /> Sistema Viário - Rodovias/Vias arteriais'
            });
var format_SistemaVirioSistemavirioprincipal_37 = new ol.format.GeoJSON();
var features_SistemaVirioSistemavirioprincipal_37 = format_SistemaVirioSistemavirioprincipal_37.readFeatures(json_SistemaVirioSistemavirioprincipal_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioSistemavirioprincipal_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioSistemavirioprincipal_37.addFeatures(features_SistemaVirioSistemavirioprincipal_37);
var lyr_SistemaVirioSistemavirioprincipal_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioSistemavirioprincipal_37, 
                style: style_SistemaVirioSistemavirioprincipal_37,
                popuplayertitle: 'Sistema Viário - Sistema viário principal',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioSistemavirioprincipal_37.png" /> Sistema Viário - Sistema viário principal'
            });
var format_PlanoVirioZonaSulAVENIDAEXISTENTE_38 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulAVENIDAEXISTENTE_38 = format_PlanoVirioZonaSulAVENIDAEXISTENTE_38.readFeatures(json_PlanoVirioZonaSulAVENIDAEXISTENTE_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulAVENIDAEXISTENTE_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulAVENIDAEXISTENTE_38.addFeatures(features_PlanoVirioZonaSulAVENIDAEXISTENTE_38);
var lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulAVENIDAEXISTENTE_38, 
                style: style_PlanoVirioZonaSulAVENIDAEXISTENTE_38,
                popuplayertitle: 'Plano Viário Zona Sul - AVENIDA EXISTENTE',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulAVENIDAEXISTENTE_38.png" /> Plano Viário Zona Sul - AVENIDA EXISTENTE'
            });
var format_PlanoVirioZonaSulDIRETRIZAVENIDA_39 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulDIRETRIZAVENIDA_39 = format_PlanoVirioZonaSulDIRETRIZAVENIDA_39.readFeatures(json_PlanoVirioZonaSulDIRETRIZAVENIDA_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulDIRETRIZAVENIDA_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulDIRETRIZAVENIDA_39.addFeatures(features_PlanoVirioZonaSulDIRETRIZAVENIDA_39);
var lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulDIRETRIZAVENIDA_39, 
                style: style_PlanoVirioZonaSulDIRETRIZAVENIDA_39,
                popuplayertitle: 'Plano Viário Zona Sul - DIRETRIZ AVENIDA',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulDIRETRIZAVENIDA_39.png" /> Plano Viário Zona Sul - DIRETRIZ AVENIDA'
            });
var format_PlanoVirioZonaSulDIRETRIZCOLETORA_40 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulDIRETRIZCOLETORA_40 = format_PlanoVirioZonaSulDIRETRIZCOLETORA_40.readFeatures(json_PlanoVirioZonaSulDIRETRIZCOLETORA_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulDIRETRIZCOLETORA_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulDIRETRIZCOLETORA_40.addFeatures(features_PlanoVirioZonaSulDIRETRIZCOLETORA_40);
var lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulDIRETRIZCOLETORA_40, 
                style: style_PlanoVirioZonaSulDIRETRIZCOLETORA_40,
                popuplayertitle: 'Plano Viário Zona Sul - DIRETRIZ COLETORA',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulDIRETRIZCOLETORA_40.png" /> Plano Viário Zona Sul - DIRETRIZ COLETORA'
            });
var format_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41 = format_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.readFeatures(json_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.addFeatures(features_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41);
var lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41, 
                style: style_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41,
                popuplayertitle: 'Plano Viário Zona Sul - VIA EXPRESSA EXISTENTE',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.png" /> Plano Viário Zona Sul - VIA EXPRESSA EXISTENTE'
            });
var format_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42 = format_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.readFeatures(json_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.addFeatures(features_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42);
var lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42, 
                style: style_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42,
                popuplayertitle: 'Plano Viário Zona Sul - DIRETRIZ VIA PARQUE',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.png" /> Plano Viário Zona Sul - DIRETRIZ VIA PARQUE'
            });
var format_FazendaBarroPretoeBambus_43 = new ol.format.GeoJSON();
var features_FazendaBarroPretoeBambus_43 = format_FazendaBarroPretoeBambus_43.readFeatures(json_FazendaBarroPretoeBambus_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaBarroPretoeBambus_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaBarroPretoeBambus_43.addFeatures(features_FazendaBarroPretoeBambus_43);
var lyr_FazendaBarroPretoeBambus_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaBarroPretoeBambus_43, 
                style: style_FazendaBarroPretoeBambus_43,
                popuplayertitle: 'Fazenda Barro Preto e Bambus',
                interactive: true,
                title: '<img src="styles/legend/FazendaBarroPretoeBambus_43.png" /> Fazenda Barro Preto e Bambus'
            });
var format_Matrcula106206_44 = new ol.format.GeoJSON();
var features_Matrcula106206_44 = format_Matrcula106206_44.readFeatures(json_Matrcula106206_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Matrcula106206_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matrcula106206_44.addFeatures(features_Matrcula106206_44);
var lyr_Matrcula106206_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matrcula106206_44, 
                style: style_Matrcula106206_44,
                popuplayertitle: 'Matrícula 106.206',
                interactive: true,
                title: '<img src="styles/legend/Matrcula106206_44.png" /> Matrícula 106.206'
            });
var format_RecantoEmanuelMatrcula95782_45 = new ol.format.GeoJSON();
var features_RecantoEmanuelMatrcula95782_45 = format_RecantoEmanuelMatrcula95782_45.readFeatures(json_RecantoEmanuelMatrcula95782_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoEmanuelMatrcula95782_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoEmanuelMatrcula95782_45.addFeatures(features_RecantoEmanuelMatrcula95782_45);
var lyr_RecantoEmanuelMatrcula95782_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoEmanuelMatrcula95782_45, 
                style: style_RecantoEmanuelMatrcula95782_45,
                popuplayertitle: 'Recanto Emanuel - Matrícula 95.782',
                interactive: true,
                title: '<img src="styles/legend/RecantoEmanuelMatrcula95782_45.png" /> Recanto Emanuel - Matrícula 95.782'
            });
var format_RecantoEmanuelMatrcula95783_46 = new ol.format.GeoJSON();
var features_RecantoEmanuelMatrcula95783_46 = format_RecantoEmanuelMatrcula95783_46.readFeatures(json_RecantoEmanuelMatrcula95783_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoEmanuelMatrcula95783_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoEmanuelMatrcula95783_46.addFeatures(features_RecantoEmanuelMatrcula95783_46);
var lyr_RecantoEmanuelMatrcula95783_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoEmanuelMatrcula95783_46, 
                style: style_RecantoEmanuelMatrcula95783_46,
                popuplayertitle: 'Recanto Emanuel - Matrícula 95.783',
                interactive: true,
                title: '<img src="styles/legend/RecantoEmanuelMatrcula95783_46.png" /> Recanto Emanuel - Matrícula 95.783'
            });
var format_PortaldosIndaias_47 = new ol.format.GeoJSON();
var features_PortaldosIndaias_47 = format_PortaldosIndaias_47.readFeatures(json_PortaldosIndaias_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PortaldosIndaias_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortaldosIndaias_47.addFeatures(features_PortaldosIndaias_47);
var lyr_PortaldosIndaias_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PortaldosIndaias_47, 
                style: style_PortaldosIndaias_47,
                popuplayertitle: 'Portal dos Indaias',
                interactive: true,
                title: '<img src="styles/legend/PortaldosIndaias_47.png" /> Portal dos Indaias'
            });
var format_StioNossaSenhoraAparecida_48 = new ol.format.GeoJSON();
var features_StioNossaSenhoraAparecida_48 = format_StioNossaSenhoraAparecida_48.readFeatures(json_StioNossaSenhoraAparecida_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_StioNossaSenhoraAparecida_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StioNossaSenhoraAparecida_48.addFeatures(features_StioNossaSenhoraAparecida_48);
var lyr_StioNossaSenhoraAparecida_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StioNossaSenhoraAparecida_48, 
                style: style_StioNossaSenhoraAparecida_48,
                popuplayertitle: 'Sítio Nossa Senhora Aparecida',
                interactive: true,
                title: '<img src="styles/legend/StioNossaSenhoraAparecida_48.png" /> Sítio Nossa Senhora Aparecida'
            });
var format_LoteamentosClandestinos3unid_49 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos3unid_49 = format_LoteamentosClandestinos3unid_49.readFeatures(json_LoteamentosClandestinos3unid_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinos3unid_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos3unid_49.addFeatures(features_LoteamentosClandestinos3unid_49);
var lyr_LoteamentosClandestinos3unid_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos3unid_49, 
                style: style_LoteamentosClandestinos3unid_49,
                popuplayertitle: 'Loteamentos Clandestinos (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos3unid_49.png" /> Loteamentos Clandestinos (3 unid.)'
            });
var format_LoteamentosClandestinosRegularizado9unid_50 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosRegularizado9unid_50 = format_LoteamentosClandestinosRegularizado9unid_50.readFeatures(json_LoteamentosClandestinosRegularizado9unid_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosRegularizado9unid_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosRegularizado9unid_50.addFeatures(features_LoteamentosClandestinosRegularizado9unid_50);
var lyr_LoteamentosClandestinosRegularizado9unid_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosRegularizado9unid_50, 
                style: style_LoteamentosClandestinosRegularizado9unid_50,
                popuplayertitle: 'Loteamentos Clandestinos - Regularizado (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosRegularizado9unid_50.png" /> Loteamentos Clandestinos - Regularizado (9 unid.)'
            });
var format_LoteamentosClandestinosRegularizado9unid_51 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosRegularizado9unid_51 = format_LoteamentosClandestinosRegularizado9unid_51.readFeatures(json_LoteamentosClandestinosRegularizado9unid_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosRegularizado9unid_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosRegularizado9unid_51.addFeatures(features_LoteamentosClandestinosRegularizado9unid_51);
var lyr_LoteamentosClandestinosRegularizado9unid_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosRegularizado9unid_51, 
                style: style_LoteamentosClandestinosRegularizado9unid_51,
                popuplayertitle: 'Loteamentos Clandestinos - Regularizado (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosRegularizado9unid_51.png" /> Loteamentos Clandestinos - Regularizado (9 unid.)'
            });
var format_Vivenna_52 = new ol.format.GeoJSON();
var features_Vivenna_52 = format_Vivenna_52.readFeatures(json_Vivenna_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Vivenna_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_52.addFeatures(features_Vivenna_52);
var lyr_Vivenna_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_52, 
                style: style_Vivenna_52,
                popuplayertitle: 'Vivenna',
                interactive: true,
    title: 'Vivenna<br />\
    <img src="styles/legend/Vivenna_52_0.png" /> APP<br />\
    <img src="styles/legend/Vivenna_52_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Vivenna_52_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Vivenna_52_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Vivenna_52_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Vivenna_52_5.png" /> PASSEIO<br />\
    <img src="styles/legend/Vivenna_52_6.png" /> RUAS<br />\
    <img src="styles/legend/Vivenna_52_7.png" /> VIELA<br />' });
var format_Vivenna_53 = new ol.format.GeoJSON();
var features_Vivenna_53 = format_Vivenna_53.readFeatures(json_Vivenna_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Vivenna_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_53.addFeatures(features_Vivenna_53);
var lyr_Vivenna_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_53, 
                style: style_Vivenna_53,
                popuplayertitle: 'Vivenna',
                interactive: true,
                title: '<img src="styles/legend/Vivenna_53.png" /> Vivenna'
            });
var format_VittaSoVicente_54 = new ol.format.GeoJSON();
var features_VittaSoVicente_54 = format_VittaSoVicente_54.readFeatures(json_VittaSoVicente_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaSoVicente_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_54.addFeatures(features_VittaSoVicente_54);
var lyr_VittaSoVicente_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_54, 
                style: style_VittaSoVicente_54,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
    title: 'Vitta São Vicente<br />\
    <img src="styles/legend/VittaSoVicente_54_0.png" /> Ruas<br />\
    <img src="styles/legend/VittaSoVicente_54_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/VittaSoVicente_54_2.png" /> Área Verde<br />\
    <img src="styles/legend/VittaSoVicente_54_3.png" /> Área Lazer<br />\
    <img src="styles/legend/VittaSoVicente_54_4.png" /> Passeio<br />\
    <img src="styles/legend/VittaSoVicente_54_5.png" /> Vagas de Estacionamento<br />' });
var format_VittaSoVicente_55 = new ol.format.GeoJSON();
var features_VittaSoVicente_55 = format_VittaSoVicente_55.readFeatures(json_VittaSoVicente_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaSoVicente_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_55.addFeatures(features_VittaSoVicente_55);
var lyr_VittaSoVicente_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_55, 
                style: style_VittaSoVicente_55,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/VittaSoVicente_55.png" /> Vitta São Vicente'
            });
var format_VittaAlvorada_56 = new ol.format.GeoJSON();
var features_VittaAlvorada_56 = format_VittaAlvorada_56.readFeatures(json_VittaAlvorada_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaAlvorada_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_56.addFeatures(features_VittaAlvorada_56);
var lyr_VittaAlvorada_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_56, 
                style: style_VittaAlvorada_56,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
    title: 'Vitta Alvorada<br />\
    <img src="styles/legend/VittaAlvorada_56_0.png" /> Ruas<br />\
    <img src="styles/legend/VittaAlvorada_56_1.png" /> Área Institucional<br />\
    <img src="styles/legend/VittaAlvorada_56_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/VittaAlvorada_56_3.png" /> Área Verde<br />\
    <img src="styles/legend/VittaAlvorada_56_4.png" /> A-PROP-LINE<br />\
    <img src="styles/legend/VittaAlvorada_56_5.png" /> Passeio<br />' });
var format_VittaAlvorada_57 = new ol.format.GeoJSON();
var features_VittaAlvorada_57 = format_VittaAlvorada_57.readFeatures(json_VittaAlvorada_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaAlvorada_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_57.addFeatures(features_VittaAlvorada_57);
var lyr_VittaAlvorada_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_57, 
                style: style_VittaAlvorada_57,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/VittaAlvorada_57.png" /> Vitta Alvorada'
            });
var format_VillaDiEspanhaIII_58 = new ol.format.GeoJSON();
var features_VillaDiEspanhaIII_58 = format_VillaDiEspanhaIII_58.readFeatures(json_VillaDiEspanhaIII_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDiEspanhaIII_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDiEspanhaIII_58.addFeatures(features_VillaDiEspanhaIII_58);
var lyr_VillaDiEspanhaIII_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDiEspanhaIII_58, 
                style: style_VillaDiEspanhaIII_58,
                popuplayertitle: 'Villa Di Espanha I/II',
                interactive: true,
    title: 'Villa Di Espanha I/II<br />\
    <img src="styles/legend/VillaDiEspanhaIII_58_0.png" /> APP<br />\
    <img src="styles/legend/VillaDiEspanhaIII_58_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaDiEspanhaIII_58_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaDiEspanhaIII_58_3.png" /> LOTES<br />\
    <img src="styles/legend/VillaDiEspanhaIII_58_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaDiEspanhaIII_58_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaDiEspanhaIII_58_6.png" /> RUAS<br />\
    <img src="styles/legend/VillaDiEspanhaIII_58_7.png" /> VIELA<br />' });
var format_VillaDiEspanhaIII_59 = new ol.format.GeoJSON();
var features_VillaDiEspanhaIII_59 = format_VillaDiEspanhaIII_59.readFeatures(json_VillaDiEspanhaIII_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDiEspanhaIII_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDiEspanhaIII_59.addFeatures(features_VillaDiEspanhaIII_59);
var lyr_VillaDiEspanhaIII_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDiEspanhaIII_59, 
                style: style_VillaDiEspanhaIII_59,
                popuplayertitle: 'Villa Di Espanha I/II',
                interactive: true,
                title: '<img src="styles/legend/VillaDiEspanhaIII_59.png" /> Villa Di Espanha I/II'
            });
var format_VillaPucci_60 = new ol.format.GeoJSON();
var features_VillaPucci_60 = format_VillaPucci_60.readFeatures(json_VillaPucci_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaPucci_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_60.addFeatures(features_VillaPucci_60);
var lyr_VillaPucci_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_60, 
                style: style_VillaPucci_60,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
    title: 'Villa Pucci<br />\
    <img src="styles/legend/VillaPucci_60_0.png" /> APP<br />\
    <img src="styles/legend/VillaPucci_60_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaPucci_60_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaPucci_60_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/VillaPucci_60_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaPucci_60_5.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VillaPucci_60_6.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaPucci_60_7.png" /> RUAS<br />' });
var format_VillaPucci_61 = new ol.format.GeoJSON();
var features_VillaPucci_61 = format_VillaPucci_61.readFeatures(json_VillaPucci_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaPucci_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_61.addFeatures(features_VillaPucci_61);
var lyr_VillaPucci_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_61, 
                style: style_VillaPucci_61,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
                title: '<img src="styles/legend/VillaPucci_61.png" /> Villa Pucci'
            });
var format_VillaDoratta_62 = new ol.format.GeoJSON();
var features_VillaDoratta_62 = format_VillaDoratta_62.readFeatures(json_VillaDoratta_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDoratta_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_62.addFeatures(features_VillaDoratta_62);
var lyr_VillaDoratta_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_62, 
                style: style_VillaDoratta_62,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
    title: 'Villa Doratta<br />\
    <img src="styles/legend/VillaDoratta_62_0.png" /> APP<br />\
    <img src="styles/legend/VillaDoratta_62_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaDoratta_62_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaDoratta_62_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaDoratta_62_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VillaDoratta_62_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaDoratta_62_6.png" /> RUAS<br />\
    <img src="styles/legend/VillaDoratta_62_7.png" /> VAGAS DE ESTACIONAMENTO<br />\
    <img src="styles/legend/VillaDoratta_62_8.png" /> VIELA<br />' });
var format_VillaDoratta_63 = new ol.format.GeoJSON();
var features_VillaDoratta_63 = format_VillaDoratta_63.readFeatures(json_VillaDoratta_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDoratta_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_63.addFeatures(features_VillaDoratta_63);
var lyr_VillaDoratta_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_63, 
                style: style_VillaDoratta_63,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/VillaDoratta_63.png" /> Villa Doratta'
            });
var format_VillaBella_64 = new ol.format.GeoJSON();
var features_VillaBella_64 = format_VillaBella_64.readFeatures(json_VillaBella_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaBella_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_64.addFeatures(features_VillaBella_64);
var lyr_VillaBella_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_64, 
                style: style_VillaBella_64,
                popuplayertitle: 'Villa Bella',
                interactive: true,
    title: 'Villa Bella<br />\
    <img src="styles/legend/VillaBella_64_0.png" /> APP<br />\
    <img src="styles/legend/VillaBella_64_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaBella_64_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaBella_64_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaBella_64_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaBella_64_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaBella_64_6.png" /> RUAS<br />' });
var format_VillaBella_65 = new ol.format.GeoJSON();
var features_VillaBella_65 = format_VillaBella_65.readFeatures(json_VillaBella_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaBella_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_65.addFeatures(features_VillaBella_65);
var lyr_VillaBella_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_65, 
                style: style_VillaBella_65,
                popuplayertitle: 'Villa Bella',
                interactive: true,
                title: '<img src="styles/legend/VillaBella_65.png" /> Villa Bella'
            });
var format_Versalhes_66 = new ol.format.GeoJSON();
var features_Versalhes_66 = format_Versalhes_66.readFeatures(json_Versalhes_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Versalhes_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_66.addFeatures(features_Versalhes_66);
var lyr_Versalhes_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_66, 
                style: style_Versalhes_66,
                popuplayertitle: 'Versalhes',
                interactive: true,
    title: 'Versalhes<br />\
    <img src="styles/legend/Versalhes_66_0.png" /> Ruas<br />\
    <img src="styles/legend/Versalhes_66_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/Versalhes_66_2.png" /> Área Verde<br />\
    <img src="styles/legend/Versalhes_66_3.png" /> Área Lazer<br />\
    <img src="styles/legend/Versalhes_66_4.png" /> Passeio<br />\
    <img src="styles/legend/Versalhes_66_5.png" /> Vagas de Estacionamento<br />' });
var format_Versalhes_67 = new ol.format.GeoJSON();
var features_Versalhes_67 = format_Versalhes_67.readFeatures(json_Versalhes_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Versalhes_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_67.addFeatures(features_Versalhes_67);
var lyr_Versalhes_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_67, 
                style: style_Versalhes_67,
                popuplayertitle: 'Versalhes',
                interactive: true,
                title: '<img src="styles/legend/Versalhes_67.png" /> Versalhes'
            });
var format_TorontoResidence_68 = new ol.format.GeoJSON();
var features_TorontoResidence_68 = format_TorontoResidence_68.readFeatures(json_TorontoResidence_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TorontoResidence_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_68.addFeatures(features_TorontoResidence_68);
var lyr_TorontoResidence_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_68, 
                style: style_TorontoResidence_68,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
    title: 'Toronto Residence<br />\
    <img src="styles/legend/TorontoResidence_68_0.png" /> Ruas<br />\
    <img src="styles/legend/TorontoResidence_68_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/TorontoResidence_68_2.png" /> Área Verde<br />\
    <img src="styles/legend/TorontoResidence_68_3.png" /> Lazer<br />\
    <img src="styles/legend/TorontoResidence_68_4.png" /> Passeio<br />\
    <img src="styles/legend/TorontoResidence_68_5.png" /> Vagas de Estacionamento<br />' });
var format_TorontoResidence_69 = new ol.format.GeoJSON();
var features_TorontoResidence_69 = format_TorontoResidence_69.readFeatures(json_TorontoResidence_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TorontoResidence_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_69.addFeatures(features_TorontoResidence_69);
var lyr_TorontoResidence_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_69, 
                style: style_TorontoResidence_69,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/TorontoResidence_69.png" /> Toronto Residence'
            });
var format_TerraNova_70 = new ol.format.GeoJSON();
var features_TerraNova_70 = format_TerraNova_70.readFeatures(json_TerraNova_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerraNova_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_70.addFeatures(features_TerraNova_70);
var lyr_TerraNova_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_70, 
                style: style_TerraNova_70,
                popuplayertitle: 'Terra Nova',
                interactive: true,
    title: 'Terra Nova<br />\
    <img src="styles/legend/TerraNova_70_0.png" /> APP<br />\
    <img src="styles/legend/TerraNova_70_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/TerraNova_70_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/TerraNova_70_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/TerraNova_70_4.png" /> PASSEIO<br />\
    <img src="styles/legend/TerraNova_70_5.png" /> RUAS<br />' });
var format_TerraNova_71 = new ol.format.GeoJSON();
var features_TerraNova_71 = format_TerraNova_71.readFeatures(json_TerraNova_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerraNova_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_71.addFeatures(features_TerraNova_71);
var lyr_TerraNova_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_71, 
                style: style_TerraNova_71,
                popuplayertitle: 'Terra Nova',
                interactive: true,
                title: '<img src="styles/legend/TerraNova_71.png" /> Terra Nova'
            });
var format_Sonetto_72 = new ol.format.GeoJSON();
var features_Sonetto_72 = format_Sonetto_72.readFeatures(json_Sonetto_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sonetto_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_72.addFeatures(features_Sonetto_72);
var lyr_Sonetto_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_72, 
                style: style_Sonetto_72,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_72.png" /> Sonetto'
            });
var format_Sonetto_73 = new ol.format.GeoJSON();
var features_Sonetto_73 = format_Sonetto_73.readFeatures(json_Sonetto_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sonetto_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_73.addFeatures(features_Sonetto_73);
var lyr_Sonetto_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_73, 
                style: style_Sonetto_73,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_73.png" /> Sonetto'
            });
var format_ServidoRamal138kVFranca4Guanabara_74 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_74 = format_ServidoRamal138kVFranca4Guanabara_74.readFeatures(json_ServidoRamal138kVFranca4Guanabara_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_74.addFeatures(features_ServidoRamal138kVFranca4Guanabara_74);
var lyr_ServidoRamal138kVFranca4Guanabara_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_74, 
                style: style_ServidoRamal138kVFranca4Guanabara_74,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_74.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_75 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_75 = format_ServidoRamal138kVFranca4Guanabara_75.readFeatures(json_ServidoRamal138kVFranca4Guanabara_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_75.addFeatures(features_ServidoRamal138kVFranca4Guanabara_75);
var lyr_ServidoRamal138kVFranca4Guanabara_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_75, 
                style: style_ServidoRamal138kVFranca4Guanabara_75,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_75.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_SoCarlosII_76 = new ol.format.GeoJSON();
var features_SoCarlosII_76 = format_SoCarlosII_76.readFeatures(json_SoCarlosII_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SoCarlosII_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoCarlosII_76.addFeatures(features_SoCarlosII_76);
var lyr_SoCarlosII_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoCarlosII_76, 
                style: style_SoCarlosII_76,
                popuplayertitle: 'São Carlos II',
                interactive: true,
    title: 'São Carlos II<br />\
    <img src="styles/legend/SoCarlosII_76_0.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/SoCarlosII_76_1.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/SoCarlosII_76_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SoCarlosII_76_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SoCarlosII_76_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/SoCarlosII_76_5.png" /> RUAS<br />' });
var format_SoCarlosII_77 = new ol.format.GeoJSON();
var features_SoCarlosII_77 = format_SoCarlosII_77.readFeatures(json_SoCarlosII_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SoCarlosII_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoCarlosII_77.addFeatures(features_SoCarlosII_77);
var lyr_SoCarlosII_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoCarlosII_77, 
                style: style_SoCarlosII_77,
                popuplayertitle: 'São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/SoCarlosII_77.png" /> São Carlos II'
            });
var format_SantaLina_78 = new ol.format.GeoJSON();
var features_SantaLina_78 = format_SantaLina_78.readFeatures(json_SantaLina_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantaLina_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_78.addFeatures(features_SantaLina_78);
var lyr_SantaLina_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_78, 
                style: style_SantaLina_78,
                popuplayertitle: 'Santa Lina',
                interactive: true,
    title: 'Santa Lina<br />\
    <img src="styles/legend/SantaLina_78_0.png" /> Ruas<br />\
    <img src="styles/legend/SantaLina_78_1.png" /> Lotes/Quadras<br />' });
var format_SantaLina_79 = new ol.format.GeoJSON();
var features_SantaLina_79 = format_SantaLina_79.readFeatures(json_SantaLina_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantaLina_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_79.addFeatures(features_SantaLina_79);
var lyr_SantaLina_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_79, 
                style: style_SantaLina_79,
                popuplayertitle: 'Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/SantaLina_79.png" /> Santa Lina'
            });
var format_ResidencialYasminTorres_80 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_80 = format_ResidencialYasminTorres_80.readFeatures(json_ResidencialYasminTorres_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialYasminTorres_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_80.addFeatures(features_ResidencialYasminTorres_80);
var lyr_ResidencialYasminTorres_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_80, 
                style: style_ResidencialYasminTorres_80,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_80.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialYasminTorres_81 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_81 = format_ResidencialYasminTorres_81.readFeatures(json_ResidencialYasminTorres_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialYasminTorres_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_81.addFeatures(features_ResidencialYasminTorres_81);
var lyr_ResidencialYasminTorres_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_81, 
                style: style_ResidencialYasminTorres_81,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_81.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialSoCarlosI_82 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_82 = format_ResidencialSoCarlosI_82.readFeatures(json_ResidencialSoCarlosI_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosI_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_82.addFeatures(features_ResidencialSoCarlosI_82);
var lyr_ResidencialSoCarlosI_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_82, 
                style: style_ResidencialSoCarlosI_82,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
    title: 'Residencial São Carlos I<br />\
    <img src="styles/legend/ResidencialSoCarlosI_82_0.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialSoCarlosI_82_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialSoCarlosI_82_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialSoCarlosI_82_3.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialSoCarlosI_82_4.png" /> Passeio<br />' });
var format_ResidencialSoCarlosI_83 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_83 = format_ResidencialSoCarlosI_83.readFeatures(json_ResidencialSoCarlosI_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosI_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_83.addFeatures(features_ResidencialSoCarlosI_83);
var lyr_ResidencialSoCarlosI_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_83, 
                style: style_ResidencialSoCarlosI_83,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSoCarlosI_83.png" /> Residencial São Carlos I'
            });
var format_ResidencialSantaIns_84 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_84 = format_ResidencialSantaIns_84.readFeatures(json_ResidencialSantaIns_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaIns_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_84.addFeatures(features_ResidencialSantaIns_84);
var lyr_ResidencialSantaIns_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_84, 
                style: style_ResidencialSantaIns_84,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
    title: 'Residencial Santa Inês<br />\
    <img src="styles/legend/ResidencialSantaIns_84_0.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialSantaIns_84_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialSantaIns_84_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialSantaIns_84_3.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialSantaIns_84_4.png" /> Área Lazer<br />\
    <img src="styles/legend/ResidencialSantaIns_84_5.png" /> Passeio<br />' });
var format_ResidencialSantaIns_85 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_85 = format_ResidencialSantaIns_85.readFeatures(json_ResidencialSantaIns_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaIns_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_85.addFeatures(features_ResidencialSantaIns_85);
var lyr_ResidencialSantaIns_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_85, 
                style: style_ResidencialSantaIns_85,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaIns_85.png" /> Residencial Santa Inês'
            });
var format_ResidencialSantaF_86 = new ol.format.GeoJSON();
var features_ResidencialSantaF_86 = format_ResidencialSantaF_86.readFeatures(json_ResidencialSantaF_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaF_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_86.addFeatures(features_ResidencialSantaF_86);
var lyr_ResidencialSantaF_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_86, 
                style: style_ResidencialSantaF_86,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
    title: 'Residencial Santa Fé<br />\
    <img src="styles/legend/ResidencialSantaF_86_0.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialSantaF_86_1.png" /> Canteiro<br />\
    <img src="styles/legend/ResidencialSantaF_86_2.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialSantaF_86_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialSantaF_86_4.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialSantaF_86_5.png" /> Passeio<br />' });
var format_ResidencialSantaF_87 = new ol.format.GeoJSON();
var features_ResidencialSantaF_87 = format_ResidencialSantaF_87.readFeatures(json_ResidencialSantaF_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaF_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_87.addFeatures(features_ResidencialSantaF_87);
var lyr_ResidencialSantaF_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_87, 
                style: style_ResidencialSantaF_87,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaF_87.png" /> Residencial Santa Fé'
            });
var format_ResidencialQuintadosOtis_88 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOtis_88 = format_ResidencialQuintadosOtis_88.readFeatures(json_ResidencialQuintadosOtis_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadosOtis_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOtis_88.addFeatures(features_ResidencialQuintadosOtis_88);
var lyr_ResidencialQuintadosOtis_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOtis_88, 
                style: style_ResidencialQuintadosOtis_88,
                popuplayertitle: 'Residencial Quinta dos Otis',
                interactive: true,
    title: 'Residencial Quinta dos Otis<br />\
    <img src="styles/legend/ResidencialQuintadosOtis_88_0.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialQuintadosOtis_88_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialQuintadosOtis_88_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialQuintadosOtis_88_3.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialQuintadosOtis_88_4.png" /> Passeio<br />\
    <img src="styles/legend/ResidencialQuintadosOtis_88_5.png" /> Ruas<br />' });
var format_ResidencialQuintadosOtis_89 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOtis_89 = format_ResidencialQuintadosOtis_89.readFeatures(json_ResidencialQuintadosOtis_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadosOtis_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOtis_89.addFeatures(features_ResidencialQuintadosOtis_89);
var lyr_ResidencialQuintadosOtis_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOtis_89, 
                style: style_ResidencialQuintadosOtis_89,
                popuplayertitle: 'Residencial Quinta dos Otis',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadosOtis_89.png" /> Residencial Quinta dos Otis'
            });
var format_ResidencialQuintadoSol_90 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_90 = format_ResidencialQuintadoSol_90.readFeatures(json_ResidencialQuintadoSol_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadoSol_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_90.addFeatures(features_ResidencialQuintadoSol_90);
var lyr_ResidencialQuintadoSol_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_90, 
                style: style_ResidencialQuintadoSol_90,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
    title: 'Residencial Quinta do Sol<br />\
    <img src="styles/legend/ResidencialQuintadoSol_90_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialQuintadoSol_90_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadoSol_90_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialQuintadoSol_90_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadoSol_90_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialQuintadoSol_90_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadoSol_90_6.png" /> RUAS<br />' });
var format_ResidencialQuintadoSol_91 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_91 = format_ResidencialQuintadoSol_91.readFeatures(json_ResidencialQuintadoSol_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadoSol_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_91.addFeatures(features_ResidencialQuintadoSol_91);
var lyr_ResidencialQuintadoSol_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_91, 
                style: style_ResidencialQuintadoSol_91,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadoSol_91.png" /> Residencial Quinta do Sol'
            });
var format_ResidencialPousoAlegreII_92 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_92 = format_ResidencialPousoAlegreII_92.readFeatures(json_ResidencialPousoAlegreII_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegreII_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_92.addFeatures(features_ResidencialPousoAlegreII_92);
var lyr_ResidencialPousoAlegreII_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_92, 
                style: style_ResidencialPousoAlegreII_92,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
    title: 'Residencial Pouso Alegre II<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_92_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_92_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_92_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_92_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_92_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_92_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_92_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_92_7.png" /> SERVIDAO<br />' });
var format_ResidencialPousoAlegreII_93 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_93 = format_ResidencialPousoAlegreII_93.readFeatures(json_ResidencialPousoAlegreII_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegreII_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_93.addFeatures(features_ResidencialPousoAlegreII_93);
var lyr_ResidencialPousoAlegreII_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_93, 
                style: style_ResidencialPousoAlegreII_93,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegreII_93.png" /> Residencial Pouso Alegre II'
            });
var format_ResidencialPousoAlegre_94 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_94 = format_ResidencialPousoAlegre_94.readFeatures(json_ResidencialPousoAlegre_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegre_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_94.addFeatures(features_ResidencialPousoAlegre_94);
var lyr_ResidencialPousoAlegre_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_94, 
                style: style_ResidencialPousoAlegre_94,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
    title: 'Residencial Pouso Alegre<br />\
    <img src="styles/legend/ResidencialPousoAlegre_94_0.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialPousoAlegre_94_1.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialPousoAlegre_94_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialPousoAlegre_94_3.png" /> Passeio<br />\
    <img src="styles/legend/ResidencialPousoAlegre_94_4.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialPousoAlegre_94_5.png" /> Servidão<br />\
    <img src="styles/legend/ResidencialPousoAlegre_94_6.png" /> Viela<br />' });
var format_ResidencialPousoAlegre_95 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_95 = format_ResidencialPousoAlegre_95.readFeatures(json_ResidencialPousoAlegre_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegre_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_95.addFeatures(features_ResidencialPousoAlegre_95);
var lyr_ResidencialPousoAlegre_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_95, 
                style: style_ResidencialPousoAlegre_95,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegre_95.png" /> Residencial Pouso Alegre'
            });
var format_ResidencialNairRetuciII_96 = new ol.format.GeoJSON();
var features_ResidencialNairRetuciII_96 = format_ResidencialNairRetuciII_96.readFeatures(json_ResidencialNairRetuciII_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialNairRetuciII_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialNairRetuciII_96.addFeatures(features_ResidencialNairRetuciII_96);
var lyr_ResidencialNairRetuciII_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialNairRetuciII_96, 
                style: style_ResidencialNairRetuciII_96,
                popuplayertitle: 'Residencial Nair Retuci II',
                interactive: true,
    title: 'Residencial Nair Retuci II<br />\
    <img src="styles/legend/ResidencialNairRetuciII_96_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialNairRetuciII_96_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialNairRetuciII_96_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialNairRetuciII_96_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialNairRetuciII_96_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialNairRetuciII_96_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialNairRetuciII_96_6.png" /> RUAS<br />' });
var format_ResidencialNairRetuciII_97 = new ol.format.GeoJSON();
var features_ResidencialNairRetuciII_97 = format_ResidencialNairRetuciII_97.readFeatures(json_ResidencialNairRetuciII_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialNairRetuciII_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialNairRetuciII_97.addFeatures(features_ResidencialNairRetuciII_97);
var lyr_ResidencialNairRetuciII_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialNairRetuciII_97, 
                style: style_ResidencialNairRetuciII_97,
                popuplayertitle: 'Residencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialNairRetuciII_97.png" /> Residencial Nair Retuci II'
            });
var format_ResidencialNairRetuci_98 = new ol.format.GeoJSON();
var features_ResidencialNairRetuci_98 = format_ResidencialNairRetuci_98.readFeatures(json_ResidencialNairRetuci_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialNairRetuci_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialNairRetuci_98.addFeatures(features_ResidencialNairRetuci_98);
var lyr_ResidencialNairRetuci_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialNairRetuci_98, 
                style: style_ResidencialNairRetuci_98,
                popuplayertitle: 'Residencial Nair Retuci',
                interactive: true,
    title: 'Residencial Nair Retuci<br />\
    <img src="styles/legend/ResidencialNairRetuci_98_0.png" /> Ciclovia<br />\
    <img src="styles/legend/ResidencialNairRetuci_98_1.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialNairRetuci_98_2.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialNairRetuci_98_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialNairRetuci_98_4.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialNairRetuci_98_5.png" /> Passeio<br />' });
var format_ResidencialNairRetuci_99 = new ol.format.GeoJSON();
var features_ResidencialNairRetuci_99 = format_ResidencialNairRetuci_99.readFeatures(json_ResidencialNairRetuci_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialNairRetuci_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialNairRetuci_99.addFeatures(features_ResidencialNairRetuci_99);
var lyr_ResidencialNairRetuci_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialNairRetuci_99, 
                style: style_ResidencialNairRetuci_99,
                popuplayertitle: 'Residencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/ResidencialNairRetuci_99.png" /> Residencial Nair Retuci'
            });
var format_ResidencialMoradadoBosque_100 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_100 = format_ResidencialMoradadoBosque_100.readFeatures(json_ResidencialMoradadoBosque_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMoradadoBosque_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_100.addFeatures(features_ResidencialMoradadoBosque_100);
var lyr_ResidencialMoradadoBosque_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_100, 
                style: style_ResidencialMoradadoBosque_100,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
    title: 'Residencial Morada do Bosque<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_100_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_100_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_100_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_100_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_100_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_100_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_100_6.png" /> RUAS<br />' });
var format_ResidencialMoradadoBosque_101 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_101 = format_ResidencialMoradadoBosque_101.readFeatures(json_ResidencialMoradadoBosque_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMoradadoBosque_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_101.addFeatures(features_ResidencialMoradadoBosque_101);
var lyr_ResidencialMoradadoBosque_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_101, 
                style: style_ResidencialMoradadoBosque_101,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMoradadoBosque_101.png" /> Residencial Morada do Bosque'
            });
var format_ResidencialMarthaHelena_102 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_102 = format_ResidencialMarthaHelena_102.readFeatures(json_ResidencialMarthaHelena_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarthaHelena_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_102.addFeatures(features_ResidencialMarthaHelena_102);
var lyr_ResidencialMarthaHelena_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_102, 
                style: style_ResidencialMarthaHelena_102,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
    title: 'Residencial Martha Helena<br />\
    <img src="styles/legend/ResidencialMarthaHelena_102_0.png" /> 0<br />\
    <img src="styles/legend/ResidencialMarthaHelena_102_1.png" /> Zona de Uso Residencial<br />' });
var format_ResidencialMarthaHelena_103 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_103 = format_ResidencialMarthaHelena_103.readFeatures(json_ResidencialMarthaHelena_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarthaHelena_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_103.addFeatures(features_ResidencialMarthaHelena_103);
var lyr_ResidencialMarthaHelena_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_103, 
                style: style_ResidencialMarthaHelena_103,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarthaHelena_103.png" /> Residencial Martha Helena'
            });
var format_ResidencialMarioTasso_104 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_104 = format_ResidencialMarioTasso_104.readFeatures(json_ResidencialMarioTasso_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarioTasso_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_104.addFeatures(features_ResidencialMarioTasso_104);
var lyr_ResidencialMarioTasso_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_104, 
                style: style_ResidencialMarioTasso_104,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
    title: 'Residencial Mario Tasso<br />\
    <img src="styles/legend/ResidencialMarioTasso_104_0.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialMarioTasso_104_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialMarioTasso_104_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialMarioTasso_104_3.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialMarioTasso_104_4.png" /> Passeio<br />' });
var format_ResidencialMarioTasso_105 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_105 = format_ResidencialMarioTasso_105.readFeatures(json_ResidencialMarioTasso_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarioTasso_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_105.addFeatures(features_ResidencialMarioTasso_105);
var lyr_ResidencialMarioTasso_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_105, 
                style: style_ResidencialMarioTasso_105,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarioTasso_105.png" /> Residencial Mario Tasso'
            });
var format_ResidencialJabuticabeiras_106 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_106 = format_ResidencialJabuticabeiras_106.readFeatures(json_ResidencialJabuticabeiras_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJabuticabeiras_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_106.addFeatures(features_ResidencialJabuticabeiras_106);
var lyr_ResidencialJabuticabeiras_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_106, 
                style: style_ResidencialJabuticabeiras_106,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
    title: 'Residencial Jabuticabeiras<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_106_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_106_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_106_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_106_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_106_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_106_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_106_6.png" /> VIELA<br />' });
var format_ResidencialJabuticabeiras_107 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_107 = format_ResidencialJabuticabeiras_107.readFeatures(json_ResidencialJabuticabeiras_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJabuticabeiras_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_107.addFeatures(features_ResidencialJabuticabeiras_107);
var lyr_ResidencialJabuticabeiras_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_107, 
                style: style_ResidencialJabuticabeiras_107,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJabuticabeiras_107.png" /> Residencial Jabuticabeiras'
            });
var format_ResidencialDomingosJardini_108 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_108 = format_ResidencialDomingosJardini_108.readFeatures(json_ResidencialDomingosJardini_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialDomingosJardini_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_108.addFeatures(features_ResidencialDomingosJardini_108);
var lyr_ResidencialDomingosJardini_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_108, 
                style: style_ResidencialDomingosJardini_108,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
    title: 'Residencial Domingos Jardini<br />\
    <img src="styles/legend/ResidencialDomingosJardini_108_0.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialDomingosJardini_108_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialDomingosJardini_108_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialDomingosJardini_108_3.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialDomingosJardini_108_4.png" /> Área Lazer<br />\
    <img src="styles/legend/ResidencialDomingosJardini_108_5.png" /> Passeio<br />' });
var format_ResidencialDomingosJardini_109 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_109 = format_ResidencialDomingosJardini_109.readFeatures(json_ResidencialDomingosJardini_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialDomingosJardini_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_109.addFeatures(features_ResidencialDomingosJardini_109);
var lyr_ResidencialDomingosJardini_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_109, 
                style: style_ResidencialDomingosJardini_109,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/ResidencialDomingosJardini_109.png" /> Residencial Domingos Jardini'
            });
var format_ResidencialCintraAlves_110 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_110 = format_ResidencialCintraAlves_110.readFeatures(json_ResidencialCintraAlves_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialCintraAlves_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_110.addFeatures(features_ResidencialCintraAlves_110);
var lyr_ResidencialCintraAlves_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_110, 
                style: style_ResidencialCintraAlves_110,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
    title: 'Residencial Cintra Alves<br />\
    <img src="styles/legend/ResidencialCintraAlves_110_0.png" /> Área Lazer<br />\
    <img src="styles/legend/ResidencialCintraAlves_110_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialCintraAlves_110_2.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialCintraAlves_110_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialCintraAlves_110_4.png" /> Passeio<br />\
    <img src="styles/legend/ResidencialCintraAlves_110_5.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialCintraAlves_110_6.png" /> Servidão<br />\
    <img src="styles/legend/ResidencialCintraAlves_110_7.png" /> Viela<br />' });
var format_ResidencialCintraAlves_111 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_111 = format_ResidencialCintraAlves_111.readFeatures(json_ResidencialCintraAlves_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialCintraAlves_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_111.addFeatures(features_ResidencialCintraAlves_111);
var lyr_ResidencialCintraAlves_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_111, 
                style: style_ResidencialCintraAlves_111,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/ResidencialCintraAlves_111.png" /> Residencial Cintra Alves'
            });
var format_ResidencialBoaVista_112 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_112 = format_ResidencialBoaVista_112.readFeatures(json_ResidencialBoaVista_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialBoaVista_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_112.addFeatures(features_ResidencialBoaVista_112);
var lyr_ResidencialBoaVista_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_112, 
                style: style_ResidencialBoaVista_112,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
    title: 'Residencial Boa Vista<br />\
    <img src="styles/legend/ResidencialBoaVista_112_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialBoaVista_112_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialBoaVista_112_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialBoaVista_112_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialBoaVista_112_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialBoaVista_112_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialBoaVista_112_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialBoaVista_112_7.png" /> RUAS<br />' });
var format_ResidencialBoaVista_113 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_113 = format_ResidencialBoaVista_113.readFeatures(json_ResidencialBoaVista_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialBoaVista_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_113.addFeatures(features_ResidencialBoaVista_113);
var lyr_ResidencialBoaVista_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_113, 
                style: style_ResidencialBoaVista_113,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
                title: '<img src="styles/legend/ResidencialBoaVista_113.png" /> Residencial Boa Vista'
            });
var format_ResidencialAltodaFazenda_114 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_114 = format_ResidencialAltodaFazenda_114.readFeatures(json_ResidencialAltodaFazenda_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAltodaFazenda_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_114.addFeatures(features_ResidencialAltodaFazenda_114);
var lyr_ResidencialAltodaFazenda_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_114, 
                style: style_ResidencialAltodaFazenda_114,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
    title: 'Residencial Alto da Fazenda<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_114_0.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_114_1.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_114_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_114_3.png" /> Passeio<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_114_4.png" /> Ruas<br />' });
var format_ResidencialAltodaFazenda_115 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_115 = format_ResidencialAltodaFazenda_115.readFeatures(json_ResidencialAltodaFazenda_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAltodaFazenda_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_115.addFeatures(features_ResidencialAltodaFazenda_115);
var lyr_ResidencialAltodaFazenda_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_115, 
                style: style_ResidencialAltodaFazenda_115,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
                title: '<img src="styles/legend/ResidencialAltodaFazenda_115.png" /> Residencial Alto da Fazenda'
            });
var format_RecantoMeneghetti_116 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_116 = format_RecantoMeneghetti_116.readFeatures(json_RecantoMeneghetti_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoMeneghetti_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_116.addFeatures(features_RecantoMeneghetti_116);
var lyr_RecantoMeneghetti_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_116, 
                style: style_RecantoMeneghetti_116,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
    title: 'Recanto Meneghetti<br />\
    <img src="styles/legend/RecantoMeneghetti_116_0.png" /> APP<br />\
    <img src="styles/legend/RecantoMeneghetti_116_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/RecantoMeneghetti_116_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/RecantoMeneghetti_116_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/RecantoMeneghetti_116_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/RecantoMeneghetti_116_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RecantoMeneghetti_116_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RecantoMeneghetti_116_7.png" /> PASSSEIO<br />\
    <img src="styles/legend/RecantoMeneghetti_116_8.png" /> RUAS<br />\
    <img src="styles/legend/RecantoMeneghetti_116_9.png" /> VIELA<br />' });
var format_RecantoMeneghetti_117 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_117 = format_RecantoMeneghetti_117.readFeatures(json_RecantoMeneghetti_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoMeneghetti_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_117.addFeatures(features_RecantoMeneghetti_117);
var lyr_RecantoMeneghetti_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_117, 
                style: style_RecantoMeneghetti_117,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/RecantoMeneghetti_117.png" /> Recanto Meneghetti'
            });
var format_ParqueVillaLobos_118 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_118 = format_ParqueVillaLobos_118.readFeatures(json_ParqueVillaLobos_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueVillaLobos_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_118.addFeatures(features_ParqueVillaLobos_118);
var lyr_ParqueVillaLobos_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_118, 
                style: style_ParqueVillaLobos_118,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
    title: 'Parque Villa-Lobos<br />\
    <img src="styles/legend/ParqueVillaLobos_118_0.png" /> Ruas<br />\
    <img src="styles/legend/ParqueVillaLobos_118_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ParqueVillaLobos_118_2.png" /> Área Verde<br />\
    <img src="styles/legend/ParqueVillaLobos_118_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/ParqueVillaLobos_118_4.png" /> Passeio<br />\
    <img src="styles/legend/ParqueVillaLobos_118_5.png" /> Lotes Residenciais<br />' });
var format_ParqueVillaLobos_119 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_119 = format_ParqueVillaLobos_119.readFeatures(json_ParqueVillaLobos_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueVillaLobos_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_119.addFeatures(features_ParqueVillaLobos_119);
var lyr_ParqueVillaLobos_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_119, 
                style: style_ParqueVillaLobos_119,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/ParqueVillaLobos_119.png" /> Parque Villa-Lobos'
            });
var format_ParquePalmeiraImperial_120 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_120 = format_ParquePalmeiraImperial_120.readFeatures(json_ParquePalmeiraImperial_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquePalmeiraImperial_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_120.addFeatures(features_ParquePalmeiraImperial_120);
var lyr_ParquePalmeiraImperial_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_120, 
                style: style_ParquePalmeiraImperial_120,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
    title: 'Parque Palmeira Imperial<br />\
    <img src="styles/legend/ParquePalmeiraImperial_120_0.png" /> APP<br />\
    <img src="styles/legend/ParquePalmeiraImperial_120_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquePalmeiraImperial_120_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParquePalmeiraImperial_120_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_120_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_120_5.png" /> LOTES<br />\
    <img src="styles/legend/ParquePalmeiraImperial_120_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquePalmeiraImperial_120_7.png" /> RUAS<br />' });
var format_ParquePalmeiraImperial_121 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_121 = format_ParquePalmeiraImperial_121.readFeatures(json_ParquePalmeiraImperial_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquePalmeiraImperial_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_121.addFeatures(features_ParquePalmeiraImperial_121);
var lyr_ParquePalmeiraImperial_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_121, 
                style: style_ParquePalmeiraImperial_121,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/ParquePalmeiraImperial_121.png" /> Parque Palmeira Imperial'
            });
var format_ParqueFlora_122 = new ol.format.GeoJSON();
var features_ParqueFlora_122 = format_ParqueFlora_122.readFeatures(json_ParqueFlora_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueFlora_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_122.addFeatures(features_ParqueFlora_122);
var lyr_ParqueFlora_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_122, 
                style: style_ParqueFlora_122,
                popuplayertitle: 'Parque Flora',
                interactive: true,
    title: 'Parque Flora<br />\
    <img src="styles/legend/ParqueFlora_122_0.png" /> APP<br />\
    <img src="styles/legend/ParqueFlora_122_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueFlora_122_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/ParqueFlora_122_3.png" /> LOTES<br />\
    <img src="styles/legend/ParqueFlora_122_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/ParqueFlora_122_5.png" /> RUAS<br />\
    <img src="styles/legend/ParqueFlora_122_6.png" /> VIELA<br />' });
var format_ParqueFlora_123 = new ol.format.GeoJSON();
var features_ParqueFlora_123 = format_ParqueFlora_123.readFeatures(json_ParqueFlora_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueFlora_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_123.addFeatures(features_ParqueFlora_123);
var lyr_ParqueFlora_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_123, 
                style: style_ParqueFlora_123,
                popuplayertitle: 'Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/ParqueFlora_123.png" /> Parque Flora'
            });
var format_ParquedosSabias_124 = new ol.format.GeoJSON();
var features_ParquedosSabias_124 = format_ParquedosSabias_124.readFeatures(json_ParquedosSabias_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosSabias_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_124.addFeatures(features_ParquedosSabias_124);
var lyr_ParquedosSabias_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_124, 
                style: style_ParquedosSabias_124,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
    title: 'Parque dos Sabias<br />\
    <img src="styles/legend/ParquedosSabias_124_0.png" /> APP<br />\
    <img src="styles/legend/ParquedosSabias_124_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquedosSabias_124_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/ParquedosSabias_124_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_124_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_124_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/ParquedosSabias_124_6.png" /> RUAS<br />\
    <img src="styles/legend/ParquedosSabias_124_7.png" /> VIELA<br />' });
var format_ParquedosSabias_125 = new ol.format.GeoJSON();
var features_ParquedosSabias_125 = format_ParquedosSabias_125.readFeatures(json_ParquedosSabias_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosSabias_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_125.addFeatures(features_ParquedosSabias_125);
var lyr_ParquedosSabias_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_125, 
                style: style_ParquedosSabias_125,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/ParquedosSabias_125.png" /> Parque dos Sabias'
            });
var format_ParagonII_126 = new ol.format.GeoJSON();
var features_ParagonII_126 = format_ParagonII_126.readFeatures(json_ParagonII_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParagonII_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonII_126.addFeatures(features_ParagonII_126);
var lyr_ParagonII_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonII_126, 
                style: style_ParagonII_126,
                popuplayertitle: 'Paragon II',
                interactive: true,
    title: 'Paragon II<br />\
    <img src="styles/legend/ParagonII_126_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParagonII_126_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParagonII_126_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParagonII_126_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParagonII_126_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParagonII_126_5.png" /> RUAS<br />' });
var format_ParagonII_127 = new ol.format.GeoJSON();
var features_ParagonII_127 = format_ParagonII_127.readFeatures(json_ParagonII_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParagonII_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonII_127.addFeatures(features_ParagonII_127);
var lyr_ParagonII_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonII_127, 
                style: style_ParagonII_127,
                popuplayertitle: 'Paragon II',
                interactive: true,
                title: '<img src="styles/legend/ParagonII_127.png" /> Paragon II'
            });
var format_Paragon_128 = new ol.format.GeoJSON();
var features_Paragon_128 = format_Paragon_128.readFeatures(json_Paragon_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Paragon_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_128.addFeatures(features_Paragon_128);
var lyr_Paragon_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_128, 
                style: style_Paragon_128,
                popuplayertitle: 'Paragon',
                interactive: true,
    title: 'Paragon<br />\
    <img src="styles/legend/Paragon_128_0.png" /> Ruas<br />\
    <img src="styles/legend/Paragon_128_1.png" /> Área Institucional<br />\
    <img src="styles/legend/Paragon_128_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/Paragon_128_3.png" /> Área Verde<br />\
    <img src="styles/legend/Paragon_128_4.png" /> Viela<br />\
    <img src="styles/legend/Paragon_128_5.png" /> Área Lazer<br />\
    <img src="styles/legend/Paragon_128_6.png" /> Passeio<br />' });
var format_Paragon_129 = new ol.format.GeoJSON();
var features_Paragon_129 = format_Paragon_129.readFeatures(json_Paragon_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Paragon_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_129.addFeatures(features_Paragon_129);
var lyr_Paragon_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_129, 
                style: style_Paragon_129,
                popuplayertitle: 'Paragon',
                interactive: true,
                title: '<img src="styles/legend/Paragon_129.png" /> Paragon'
            });
var format_PalmeiraReal_130 = new ol.format.GeoJSON();
var features_PalmeiraReal_130 = format_PalmeiraReal_130.readFeatures(json_PalmeiraReal_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PalmeiraReal_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_130.addFeatures(features_PalmeiraReal_130);
var lyr_PalmeiraReal_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_130, 
                style: style_PalmeiraReal_130,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
    title: 'Palmeira Real<br />\
    <img src="styles/legend/PalmeiraReal_130_0.png" /> Ruas<br />\
    <img src="styles/legend/PalmeiraReal_130_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/PalmeiraReal_130_2.png" /> Área Verde<br />\
    <img src="styles/legend/PalmeiraReal_130_3.png" /> Área Lazer<br />\
    <img src="styles/legend/PalmeiraReal_130_4.png" /> Passeio<br />\
    <img src="styles/legend/PalmeiraReal_130_5.png" /> Vagas de Estacionamento<br />' });
var format_PalmeiraReal_131 = new ol.format.GeoJSON();
var features_PalmeiraReal_131 = format_PalmeiraReal_131.readFeatures(json_PalmeiraReal_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PalmeiraReal_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_131.addFeatures(features_PalmeiraReal_131);
var lyr_PalmeiraReal_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_131, 
                style: style_PalmeiraReal_131,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/PalmeiraReal_131.png" /> Palmeira Real'
            });
var format_MoradadoVerdeII_132 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_132 = format_MoradadoVerdeII_132.readFeatures(json_MoradadoVerdeII_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadoVerdeII_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_132.addFeatures(features_MoradadoVerdeII_132);
var lyr_MoradadoVerdeII_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_132, 
                style: style_MoradadoVerdeII_132,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
    title: 'Morada do Verde II<br />\
    <img src="styles/legend/MoradadoVerdeII_132_0.png" /> Ruas<br />\
    <img src="styles/legend/MoradadoVerdeII_132_1.png" /> Área Institucional<br />\
    <img src="styles/legend/MoradadoVerdeII_132_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/MoradadoVerdeII_132_3.png" /> Área Verde<br />\
    <img src="styles/legend/MoradadoVerdeII_132_4.png" /> Área Lazer<br />\
    <img src="styles/legend/MoradadoVerdeII_132_5.png" /> Passeio<br />\
    <img src="styles/legend/MoradadoVerdeII_132_6.png" /> Lotes Mistos<br />' });
var format_MoradadoVerdeII_133 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_133 = format_MoradadoVerdeII_133.readFeatures(json_MoradadoVerdeII_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadoVerdeII_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_133.addFeatures(features_MoradadoVerdeII_133);
var lyr_MoradadoVerdeII_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_133, 
                style: style_MoradadoVerdeII_133,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/MoradadoVerdeII_133.png" /> Morada do Verde II'
            });
var format_MoradadaMata_134 = new ol.format.GeoJSON();
var features_MoradadaMata_134 = format_MoradadaMata_134.readFeatures(json_MoradadaMata_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadaMata_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_134.addFeatures(features_MoradadaMata_134);
var lyr_MoradadaMata_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_134, 
                style: style_MoradadaMata_134,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
    title: 'Morada da Mata<br />\
    <img src="styles/legend/MoradadaMata_134_0.png" /> APP<br />\
    <img src="styles/legend/MoradadaMata_134_1.png" /> ÃREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadaMata_134_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/MoradadaMata_134_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/MoradadaMata_134_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MoradadaMata_134_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MoradadaMata_134_6.png" /> PASSSEIO<br />\
    <img src="styles/legend/MoradadaMata_134_7.png" /> RUAS<br />' });
var format_MoradadaMata_135 = new ol.format.GeoJSON();
var features_MoradadaMata_135 = format_MoradadaMata_135.readFeatures(json_MoradadaMata_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadaMata_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_135.addFeatures(features_MoradadaMata_135);
var lyr_MoradadaMata_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_135, 
                style: style_MoradadaMata_135,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/MoradadaMata_135.png" /> Morada da Mata'
            });
var format_Montli_136 = new ol.format.GeoJSON();
var features_Montli_136 = format_Montli_136.readFeatures(json_Montli_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Montli_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Montli_136.addFeatures(features_Montli_136);
var lyr_Montli_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Montli_136, 
                style: style_Montli_136,
                popuplayertitle: 'Montlié',
                interactive: true,
    title: 'Montlié<br />\
    <img src="styles/legend/Montli_136_0.png" /> Ruas<br />\
    <img src="styles/legend/Montli_136_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/Montli_136_2.png" /> Área Verde<br />\
    <img src="styles/legend/Montli_136_3.png" /> Área Lazer<br />\
    <img src="styles/legend/Montli_136_4.png" /> Passeio<br />\
    <img src="styles/legend/Montli_136_5.png" /> Vagas de Estacionamento<br />' });
var format_Montli_137 = new ol.format.GeoJSON();
var features_Montli_137 = format_Montli_137.readFeatures(json_Montli_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Montli_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Montli_137.addFeatures(features_Montli_137);
var lyr_Montli_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Montli_137, 
                style: style_Montli_137,
                popuplayertitle: 'Montlié',
                interactive: true,
                title: '<img src="styles/legend/Montli_137.png" /> Montlié'
            });
var format_MontBlancResidence_138 = new ol.format.GeoJSON();
var features_MontBlancResidence_138 = format_MontBlancResidence_138.readFeatures(json_MontBlancResidence_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MontBlancResidence_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_138.addFeatures(features_MontBlancResidence_138);
var lyr_MontBlancResidence_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_138, 
                style: style_MontBlancResidence_138,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_138.png" /> Mont Blanc Residence'
            });
var format_MontBlancResidence_139 = new ol.format.GeoJSON();
var features_MontBlancResidence_139 = format_MontBlancResidence_139.readFeatures(json_MontBlancResidence_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MontBlancResidence_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_139.addFeatures(features_MontBlancResidence_139);
var lyr_MontBlancResidence_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_139, 
                style: style_MontBlancResidence_139,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_139.png" /> Mont Blanc Residence'
            });
var format_MarianaAlarcon_140 = new ol.format.GeoJSON();
var features_MarianaAlarcon_140 = format_MarianaAlarcon_140.readFeatures(json_MarianaAlarcon_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MarianaAlarcon_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarianaAlarcon_140.addFeatures(features_MarianaAlarcon_140);
var lyr_MarianaAlarcon_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarianaAlarcon_140, 
                style: style_MarianaAlarcon_140,
                popuplayertitle: 'Mariana Alarcon',
                interactive: true,
    title: 'Mariana Alarcon<br />\
    <img src="styles/legend/MarianaAlarcon_140_0.png" /> APP<br />\
    <img src="styles/legend/MarianaAlarcon_140_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MarianaAlarcon_140_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MarianaAlarcon_140_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/MarianaAlarcon_140_4.png" /> LOTES<br />\
    <img src="styles/legend/MarianaAlarcon_140_5.png" /> PASSEIO<br />\
    <img src="styles/legend/MarianaAlarcon_140_6.png" /> RUAS<br />' });
var format_MarianaAlarcon_141 = new ol.format.GeoJSON();
var features_MarianaAlarcon_141 = format_MarianaAlarcon_141.readFeatures(json_MarianaAlarcon_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MarianaAlarcon_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarianaAlarcon_141.addFeatures(features_MarianaAlarcon_141);
var lyr_MarianaAlarcon_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarianaAlarcon_141, 
                style: style_MarianaAlarcon_141,
                popuplayertitle: 'Mariana Alarcon',
                interactive: true,
                title: '<img src="styles/legend/MarianaAlarcon_141.png" /> Mariana Alarcon'
            });
var format_Loteamentolamo_142 = new ol.format.GeoJSON();
var features_Loteamentolamo_142 = format_Loteamentolamo_142.readFeatures(json_Loteamentolamo_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Loteamentolamo_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_142.addFeatures(features_Loteamentolamo_142);
var lyr_Loteamentolamo_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_142, 
                style: style_Loteamentolamo_142,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
    title: 'Loteamento Álamo<br />\
    <img src="styles/legend/Loteamentolamo_142_0.png" /> APP<br />\
    <img src="styles/legend/Loteamentolamo_142_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Loteamentolamo_142_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Loteamentolamo_142_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/Loteamentolamo_142_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/Loteamentolamo_142_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_142_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Loteamentolamo_142_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_142_8.png" /> PASSEIO<br />\
    <img src="styles/legend/Loteamentolamo_142_9.png" /> RUAS<br />\
    <img src="styles/legend/Loteamentolamo_142_10.png" /> VIELA<br />' });
var format_Loteamentolamo_143 = new ol.format.GeoJSON();
var features_Loteamentolamo_143 = format_Loteamentolamo_143.readFeatures(json_Loteamentolamo_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Loteamentolamo_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_143.addFeatures(features_Loteamentolamo_143);
var lyr_Loteamentolamo_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_143, 
                style: style_Loteamentolamo_143,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
                title: '<img src="styles/legend/Loteamentolamo_143.png" /> Loteamento Álamo'
            });
var format_JardimMariaLuiza_144 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_144 = format_JardimMariaLuiza_144.readFeatures(json_JardimMariaLuiza_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaLuiza_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_144.addFeatures(features_JardimMariaLuiza_144);
var lyr_JardimMariaLuiza_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_144, 
                style: style_JardimMariaLuiza_144,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
    title: 'Jardim Maria Luiza<br />\
    <img src="styles/legend/JardimMariaLuiza_144_0.png" /> Ruas<br />\
    <img src="styles/legend/JardimMariaLuiza_144_1.png" /> Área Institucional<br />\
    <img src="styles/legend/JardimMariaLuiza_144_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/JardimMariaLuiza_144_3.png" /> Área Verde<br />\
    <img src="styles/legend/JardimMariaLuiza_144_4.png" /> Passeio<br />' });
var format_JardimMariaLuiza_145 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_145 = format_JardimMariaLuiza_145.readFeatures(json_JardimMariaLuiza_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaLuiza_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_145.addFeatures(features_JardimMariaLuiza_145);
var lyr_JardimMariaLuiza_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_145, 
                style: style_JardimMariaLuiza_145,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/JardimMariaLuiza_145.png" /> Jardim Maria Luiza'
            });
var format_JardimHorizonte_146 = new ol.format.GeoJSON();
var features_JardimHorizonte_146 = format_JardimHorizonte_146.readFeatures(json_JardimHorizonte_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimHorizonte_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_146.addFeatures(features_JardimHorizonte_146);
var lyr_JardimHorizonte_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_146, 
                style: style_JardimHorizonte_146,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
    title: 'Jardim Horizonte<br />\
    <img src="styles/legend/JardimHorizonte_146_0.png" /> Ruas<br />\
    <img src="styles/legend/JardimHorizonte_146_1.png" /> Área Institucional<br />\
    <img src="styles/legend/JardimHorizonte_146_2.png" /> Área Verde<br />\
    <img src="styles/legend/JardimHorizonte_146_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/JardimHorizonte_146_4.png" /> Passeio<br />\
    <img src="styles/legend/JardimHorizonte_146_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/JardimHorizonte_146_6.png" /> Lotes Residenciais<br />' });
var format_JardimHorizonte_147 = new ol.format.GeoJSON();
var features_JardimHorizonte_147 = format_JardimHorizonte_147.readFeatures(json_JardimHorizonte_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimHorizonte_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_147.addFeatures(features_JardimHorizonte_147);
var lyr_JardimHorizonte_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_147, 
                style: style_JardimHorizonte_147,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/JardimHorizonte_147.png" /> Jardim Horizonte'
            });
var format_JardimFlora_148 = new ol.format.GeoJSON();
var features_JardimFlora_148 = format_JardimFlora_148.readFeatures(json_JardimFlora_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimFlora_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_148.addFeatures(features_JardimFlora_148);
var lyr_JardimFlora_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_148, 
                style: style_JardimFlora_148,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
    title: 'Jardim Flora<br />\
    <img src="styles/legend/JardimFlora_148_0.png" /> APP<br />\
    <img src="styles/legend/JardimFlora_148_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimFlora_148_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/JardimFlora_148_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JardimFlora_148_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimFlora_148_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimFlora_148_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimFlora_148_7.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimFlora_148_8.png" /> RUAS<br />' });
var format_JardimFlora_149 = new ol.format.GeoJSON();
var features_JardimFlora_149 = format_JardimFlora_149.readFeatures(json_JardimFlora_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimFlora_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_149.addFeatures(features_JardimFlora_149);
var lyr_JardimFlora_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_149, 
                style: style_JardimFlora_149,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/JardimFlora_149.png" /> Jardim Flora'
            });
var format_IrineuZanettiII_150 = new ol.format.GeoJSON();
var features_IrineuZanettiII_150 = format_IrineuZanettiII_150.readFeatures(json_IrineuZanettiII_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IrineuZanettiII_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanettiII_150.addFeatures(features_IrineuZanettiII_150);
var lyr_IrineuZanettiII_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanettiII_150, 
                style: style_IrineuZanettiII_150,
                popuplayertitle: 'Irineu Zanetti II',
                interactive: true,
    title: 'Irineu Zanetti II<br />\
    <img src="styles/legend/IrineuZanettiII_150_0.png" /> APP<br />\
    <img src="styles/legend/IrineuZanettiII_150_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/IrineuZanettiII_150_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/IrineuZanettiII_150_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/IrineuZanettiII_150_4.png" /> PASSEIO<br />\
    <img src="styles/legend/IrineuZanettiII_150_5.png" /> RUAS<br />' });
var format_IrineuZanettiII_151 = new ol.format.GeoJSON();
var features_IrineuZanettiII_151 = format_IrineuZanettiII_151.readFeatures(json_IrineuZanettiII_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IrineuZanettiII_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanettiII_151.addFeatures(features_IrineuZanettiII_151);
var lyr_IrineuZanettiII_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanettiII_151, 
                style: style_IrineuZanettiII_151,
                popuplayertitle: 'Irineu Zanetti II',
                interactive: true,
                title: '<img src="styles/legend/IrineuZanettiII_151.png" /> Irineu Zanetti II'
            });
var format_Infratecnica_152 = new ol.format.GeoJSON();
var features_Infratecnica_152 = format_Infratecnica_152.readFeatures(json_Infratecnica_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Infratecnica_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratecnica_152.addFeatures(features_Infratecnica_152);
var lyr_Infratecnica_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratecnica_152, 
                style: style_Infratecnica_152,
                popuplayertitle: 'Infratecnica',
                interactive: true,
    title: 'Infratecnica<br />\
    <img src="styles/legend/Infratecnica_152_0.png" /> APP<br />\
    <img src="styles/legend/Infratecnica_152_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Infratecnica_152_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Infratecnica_152_3.png" /> LOTES<br />\
    <img src="styles/legend/Infratecnica_152_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Infratecnica_152_5.png" /> RUAS<br />' });
var format_Infratecnica_153 = new ol.format.GeoJSON();
var features_Infratecnica_153 = format_Infratecnica_153.readFeatures(json_Infratecnica_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Infratecnica_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratecnica_153.addFeatures(features_Infratecnica_153);
var lyr_Infratecnica_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratecnica_153, 
                style: style_Infratecnica_153,
                popuplayertitle: 'Infratecnica',
                interactive: true,
                title: '<img src="styles/legend/Infratecnica_153.png" /> Infratecnica'
            });
var format_HorizResidence_154 = new ol.format.GeoJSON();
var features_HorizResidence_154 = format_HorizResidence_154.readFeatures(json_HorizResidence_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HorizResidence_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_154.addFeatures(features_HorizResidence_154);
var lyr_HorizResidence_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_154, 
                style: style_HorizResidence_154,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_154.png" /> Horiz Residence'
            });
var format_HorizResidence_155 = new ol.format.GeoJSON();
var features_HorizResidence_155 = format_HorizResidence_155.readFeatures(json_HorizResidence_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HorizResidence_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_155.addFeatures(features_HorizResidence_155);
var lyr_HorizResidence_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_155, 
                style: style_HorizResidence_155,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_155.png" /> Horiz Residence'
            });
var format_Ferracini_156 = new ol.format.GeoJSON();
var features_Ferracini_156 = format_Ferracini_156.readFeatures(json_Ferracini_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ferracini_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_156.addFeatures(features_Ferracini_156);
var lyr_Ferracini_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_156, 
                style: style_Ferracini_156,
                popuplayertitle: 'Ferracini',
                interactive: true,
    title: 'Ferracini<br />\
    <img src="styles/legend/Ferracini_156_0.png" /> APP<br />\
    <img src="styles/legend/Ferracini_156_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Ferracini_156_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Ferracini_156_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Ferracini_156_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Ferracini_156_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/Ferracini_156_6.png" /> RUAS<br />\
    <img src="styles/legend/Ferracini_156_7.png" /> VIELA<br />' });
var format_Ferracini_157 = new ol.format.GeoJSON();
var features_Ferracini_157 = format_Ferracini_157.readFeatures(json_Ferracini_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ferracini_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_157.addFeatures(features_Ferracini_157);
var lyr_Ferracini_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_157, 
                style: style_Ferracini_157,
                popuplayertitle: 'Ferracini',
                interactive: true,
                title: '<img src="styles/legend/Ferracini_157.png" /> Ferracini'
            });
var format_FazendaProgresso_158 = new ol.format.GeoJSON();
var features_FazendaProgresso_158 = format_FazendaProgresso_158.readFeatures(json_FazendaProgresso_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaProgresso_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_158.addFeatures(features_FazendaProgresso_158);
var lyr_FazendaProgresso_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_158, 
                style: style_FazendaProgresso_158,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_158.png" /> Fazenda Progresso'
            });
var format_FazendaProgresso_159 = new ol.format.GeoJSON();
var features_FazendaProgresso_159 = format_FazendaProgresso_159.readFeatures(json_FazendaProgresso_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaProgresso_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_159.addFeatures(features_FazendaProgresso_159);
var lyr_FazendaProgresso_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_159, 
                style: style_FazendaProgresso_159,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_159.png" /> Fazenda Progresso'
            });
var format_Essence_160 = new ol.format.GeoJSON();
var features_Essence_160 = format_Essence_160.readFeatures(json_Essence_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Essence_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_160.addFeatures(features_Essence_160);
var lyr_Essence_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_160, 
                style: style_Essence_160,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_160.png" /> Essence'
            });
var format_Essence_161 = new ol.format.GeoJSON();
var features_Essence_161 = format_Essence_161.readFeatures(json_Essence_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Essence_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_161.addFeatures(features_Essence_161);
var lyr_Essence_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_161, 
                style: style_Essence_161,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_161.png" /> Essence'
            });
var format_Elias_162 = new ol.format.GeoJSON();
var features_Elias_162 = format_Elias_162.readFeatures(json_Elias_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Elias_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_162.addFeatures(features_Elias_162);
var lyr_Elias_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_162, 
                style: style_Elias_162,
                popuplayertitle: 'Elias',
                interactive: true,
    title: 'Elias<br />\
    <img src="styles/legend/Elias_162_0.png" /> Ruas<br />\
    <img src="styles/legend/Elias_162_1.png" /> Área Institucional<br />\
    <img src="styles/legend/Elias_162_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/Elias_162_3.png" /> Área Verde<br />\
    <img src="styles/legend/Elias_162_4.png" /> Área Lazer<br />\
    <img src="styles/legend/Elias_162_5.png" /> Passeio<br />\
    <img src="styles/legend/Elias_162_6.png" /> Lotes mistos<br />' });
var format_Elias_163 = new ol.format.GeoJSON();
var features_Elias_163 = format_Elias_163.readFeatures(json_Elias_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Elias_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_163.addFeatures(features_Elias_163);
var lyr_Elias_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_163, 
                style: style_Elias_163,
                popuplayertitle: 'Elias',
                interactive: true,
                title: '<img src="styles/legend/Elias_163.png" /> Elias'
            });
var format_EdificioSolNascente_164 = new ol.format.GeoJSON();
var features_EdificioSolNascente_164 = format_EdificioSolNascente_164.readFeatures(json_EdificioSolNascente_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdificioSolNascente_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdificioSolNascente_164.addFeatures(features_EdificioSolNascente_164);
var lyr_EdificioSolNascente_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdificioSolNascente_164, 
                style: style_EdificioSolNascente_164,
                popuplayertitle: 'Edificio Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdificioSolNascente_164.png" /> Edificio Sol Nascente'
            });
var format_EdificioSolNascente_165 = new ol.format.GeoJSON();
var features_EdificioSolNascente_165 = format_EdificioSolNascente_165.readFeatures(json_EdificioSolNascente_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdificioSolNascente_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdificioSolNascente_165.addFeatures(features_EdificioSolNascente_165);
var lyr_EdificioSolNascente_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdificioSolNascente_165, 
                style: style_EdificioSolNascente_165,
                popuplayertitle: 'Edificio Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdificioSolNascente_165.png" /> Edificio Sol Nascente'
            });
var format_EdificioRuadoSol_166 = new ol.format.GeoJSON();
var features_EdificioRuadoSol_166 = format_EdificioRuadoSol_166.readFeatures(json_EdificioRuadoSol_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdificioRuadoSol_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdificioRuadoSol_166.addFeatures(features_EdificioRuadoSol_166);
var lyr_EdificioRuadoSol_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdificioRuadoSol_166, 
                style: style_EdificioRuadoSol_166,
                popuplayertitle: 'Edificio Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdificioRuadoSol_166.png" /> Edificio Rua do Sol'
            });
var format_EdificioRuadoSol_167 = new ol.format.GeoJSON();
var features_EdificioRuadoSol_167 = format_EdificioRuadoSol_167.readFeatures(json_EdificioRuadoSol_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdificioRuadoSol_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdificioRuadoSol_167.addFeatures(features_EdificioRuadoSol_167);
var lyr_EdificioRuadoSol_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdificioRuadoSol_167, 
                style: style_EdificioRuadoSol_167,
                popuplayertitle: 'Edificio Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdificioRuadoSol_167.png" /> Edificio Rua do Sol'
            });
var format_EdificioResidencialHope_168 = new ol.format.GeoJSON();
var features_EdificioResidencialHope_168 = format_EdificioResidencialHope_168.readFeatures(json_EdificioResidencialHope_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdificioResidencialHope_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdificioResidencialHope_168.addFeatures(features_EdificioResidencialHope_168);
var lyr_EdificioResidencialHope_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdificioResidencialHope_168, 
                style: style_EdificioResidencialHope_168,
                popuplayertitle: 'Edificio Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdificioResidencialHope_168.png" /> Edificio Residencial Hope'
            });
var format_EdificioResidencialHope_169 = new ol.format.GeoJSON();
var features_EdificioResidencialHope_169 = format_EdificioResidencialHope_169.readFeatures(json_EdificioResidencialHope_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdificioResidencialHope_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdificioResidencialHope_169.addFeatures(features_EdificioResidencialHope_169);
var lyr_EdificioResidencialHope_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdificioResidencialHope_169, 
                style: style_EdificioResidencialHope_169,
                popuplayertitle: 'Edificio Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdificioResidencialHope_169.png" /> Edificio Residencial Hope'
            });
var format_DiocesedeFranca_170 = new ol.format.GeoJSON();
var features_DiocesedeFranca_170 = format_DiocesedeFranca_170.readFeatures(json_DiocesedeFranca_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DiocesedeFranca_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_170.addFeatures(features_DiocesedeFranca_170);
var lyr_DiocesedeFranca_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_170, 
                style: style_DiocesedeFranca_170,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
    title: 'Diocese de Franca<br />\
    <img src="styles/legend/DiocesedeFranca_170_0.png" /> APP<br />\
    <img src="styles/legend/DiocesedeFranca_170_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/DiocesedeFranca_170_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/DiocesedeFranca_170_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_170_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_170_5.png" /> PASSEIO<br />\
    <img src="styles/legend/DiocesedeFranca_170_6.png" /> RUAS<br />' });
var format_DiocesedeFranca_171 = new ol.format.GeoJSON();
var features_DiocesedeFranca_171 = format_DiocesedeFranca_171.readFeatures(json_DiocesedeFranca_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DiocesedeFranca_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_171.addFeatures(features_DiocesedeFranca_171);
var lyr_DiocesedeFranca_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_171, 
                style: style_DiocesedeFranca_171,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
                title: '<img src="styles/legend/DiocesedeFranca_171.png" /> Diocese de Franca'
            });
var format_DaVinci_172 = new ol.format.GeoJSON();
var features_DaVinci_172 = format_DaVinci_172.readFeatures(json_DaVinci_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DaVinci_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_172.addFeatures(features_DaVinci_172);
var lyr_DaVinci_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_172, 
                style: style_DaVinci_172,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_172.png" /> Da Vinci'
            });
var format_DaVinci_173 = new ol.format.GeoJSON();
var features_DaVinci_173 = format_DaVinci_173.readFeatures(json_DaVinci_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DaVinci_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_173.addFeatures(features_DaVinci_173);
var lyr_DaVinci_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_173, 
                style: style_DaVinci_173,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_173.png" /> Da Vinci'
            });
var format_CondomnioIICityPetrpolis_174 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_174 = format_CondomnioIICityPetrpolis_174.readFeatures(json_CondomnioIICityPetrpolis_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_174.addFeatures(features_CondomnioIICityPetrpolis_174);
var lyr_CondomnioIICityPetrpolis_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_174, 
                style: style_CondomnioIICityPetrpolis_174,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
    title: 'Condomínio II City Petrópolis<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_174_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_174_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_174_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_174_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_174_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_174_5.png" /> RUAS<br />' });
var format_CondomnioIICityPetrpolis_175 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_175 = format_CondomnioIICityPetrpolis_175.readFeatures(json_CondomnioIICityPetrpolis_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_175.addFeatures(features_CondomnioIICityPetrpolis_175);
var lyr_CondomnioIICityPetrpolis_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_175, 
                style: style_CondomnioIICityPetrpolis_175,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioIICityPetrpolis_175.png" /> Condomínio II City Petrópolis'
            });
var format_CondomnioICityPetrpolis_176 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_176 = format_CondomnioICityPetrpolis_176.readFeatures(json_CondomnioICityPetrpolis_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_176.addFeatures(features_CondomnioICityPetrpolis_176);
var lyr_CondomnioICityPetrpolis_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_176, 
                style: style_CondomnioICityPetrpolis_176,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
    title: 'Condomínio I City Petrópolis<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_176_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_176_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_176_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_176_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_176_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_176_5.png" /> RUAS<br />' });
var format_CondomnioICityPetrpolis_177 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_177 = format_CondomnioICityPetrpolis_177.readFeatures(json_CondomnioICityPetrpolis_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_177.addFeatures(features_CondomnioICityPetrpolis_177);
var lyr_CondomnioICityPetrpolis_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_177, 
                style: style_CondomnioICityPetrpolis_177,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioICityPetrpolis_177.png" /> Condomínio I City Petrópolis'
            });
var format_Colorado_178 = new ol.format.GeoJSON();
var features_Colorado_178 = format_Colorado_178.readFeatures(json_Colorado_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Colorado_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_178.addFeatures(features_Colorado_178);
var lyr_Colorado_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_178, 
                style: style_Colorado_178,
                popuplayertitle: 'Colorado',
                interactive: true,
    title: 'Colorado<br />\
    <img src="styles/legend/Colorado_178_0.png" /> APP<br />\
    <img src="styles/legend/Colorado_178_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Colorado_178_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Colorado_178_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Colorado_178_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Colorado_178_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/Colorado_178_6.png" /> RUAS<br />' });
var format_Colorado_179 = new ol.format.GeoJSON();
var features_Colorado_179 = format_Colorado_179.readFeatures(json_Colorado_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Colorado_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_179.addFeatures(features_Colorado_179);
var lyr_Colorado_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_179, 
                style: style_Colorado_179,
                popuplayertitle: 'Colorado',
                interactive: true,
                title: '<img src="styles/legend/Colorado_179.png" /> Colorado'
            });
var format_CidadeJardim_180 = new ol.format.GeoJSON();
var features_CidadeJardim_180 = format_CidadeJardim_180.readFeatures(json_CidadeJardim_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CidadeJardim_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_180.addFeatures(features_CidadeJardim_180);
var lyr_CidadeJardim_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_180, 
                style: style_CidadeJardim_180,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
    title: 'Cidade Jardim<br />\
    <img src="styles/legend/CidadeJardim_180_0.png" /> APP<br />\
    <img src="styles/legend/CidadeJardim_180_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CidadeJardim_180_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/CidadeJardim_180_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/CidadeJardim_180_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CidadeJardim_180_5.png" /> PASSEIO<br />\
    <img src="styles/legend/CidadeJardim_180_6.png" /> RUAS<br />\
    <img src="styles/legend/CidadeJardim_180_7.png" /> SERVIDAO<br />' });
var format_CidadeJardim_181 = new ol.format.GeoJSON();
var features_CidadeJardim_181 = format_CidadeJardim_181.readFeatures(json_CidadeJardim_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CidadeJardim_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_181.addFeatures(features_CidadeJardim_181);
var lyr_CidadeJardim_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_181, 
                style: style_CidadeJardim_181,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/CidadeJardim_181.png" /> Cidade Jardim'
            });
var format_BordadaMata_182 = new ol.format.GeoJSON();
var features_BordadaMata_182 = format_BordadaMata_182.readFeatures(json_BordadaMata_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BordadaMata_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_182.addFeatures(features_BordadaMata_182);
var lyr_BordadaMata_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_182, 
                style: style_BordadaMata_182,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
    title: 'Borda da Mata<br />\
    <img src="styles/legend/BordadaMata_182_0.png" /> Ruas<br />\
    <img src="styles/legend/BordadaMata_182_1.png" /> Área Institucional<br />\
    <img src="styles/legend/BordadaMata_182_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/BordadaMata_182_3.png" /> Área Verde<br />\
    <img src="styles/legend/BordadaMata_182_4.png" /> Área Lazer<br />\
    <img src="styles/legend/BordadaMata_182_5.png" /> Passeio<br />\
    <img src="styles/legend/BordadaMata_182_6.png" /> Represa<br />' });
var format_BordadaMata_183 = new ol.format.GeoJSON();
var features_BordadaMata_183 = format_BordadaMata_183.readFeatures(json_BordadaMata_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BordadaMata_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_183.addFeatures(features_BordadaMata_183);
var lyr_BordadaMata_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_183, 
                style: style_BordadaMata_183,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/BordadaMata_183.png" /> Borda da Mata'
            });
var format_Arizona_184 = new ol.format.GeoJSON();
var features_Arizona_184 = format_Arizona_184.readFeatures(json_Arizona_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arizona_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_184.addFeatures(features_Arizona_184);
var lyr_Arizona_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arizona_184, 
                style: style_Arizona_184,
                popuplayertitle: 'Arizona',
                interactive: true,
    title: 'Arizona<br />\
    <img src="styles/legend/Arizona_184_0.png" /> APP<br />\
    <img src="styles/legend/Arizona_184_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Arizona_184_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Arizona_184_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Arizona_184_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Arizona_184_5.png" /> RUAS<br />\
    <img src="styles/legend/Arizona_184_6.png" /> VIELA<br />' });
var format_Arizona_185 = new ol.format.GeoJSON();
var features_Arizona_185 = format_Arizona_185.readFeatures(json_Arizona_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arizona_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_185.addFeatures(features_Arizona_185);
var lyr_Arizona_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arizona_185, 
                style: style_Arizona_185,
                popuplayertitle: 'Arizona',
                interactive: true,
                title: '<img src="styles/legend/Arizona_185.png" /> Arizona'
            });
var format_Adonis_186 = new ol.format.GeoJSON();
var features_Adonis_186 = format_Adonis_186.readFeatures(json_Adonis_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Adonis_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adonis_186.addFeatures(features_Adonis_186);
var lyr_Adonis_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adonis_186, 
                style: style_Adonis_186,
                popuplayertitle: 'Adonis',
                interactive: true,
    title: 'Adonis<br />\
    <img src="styles/legend/Adonis_186_0.png" /> APP<br />\
    <img src="styles/legend/Adonis_186_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Adonis_186_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Adonis_186_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Adonis_186_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Adonis_186_5.png" /> RUAS<br />' });
var format_Adonis_187 = new ol.format.GeoJSON();
var features_Adonis_187 = format_Adonis_187.readFeatures(json_Adonis_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Adonis_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adonis_187.addFeatures(features_Adonis_187);
var lyr_Adonis_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adonis_187, 
                style: style_Adonis_187,
                popuplayertitle: 'Adonis',
                interactive: true,
                title: '<img src="styles/legend/Adonis_187.png" /> Adonis'
            });
var format_AbuDhabiParadiseResortResidence_188 = new ol.format.GeoJSON();
var features_AbuDhabiParadiseResortResidence_188 = format_AbuDhabiParadiseResortResidence_188.readFeatures(json_AbuDhabiParadiseResortResidence_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AbuDhabiParadiseResortResidence_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbuDhabiParadiseResortResidence_188.addFeatures(features_AbuDhabiParadiseResortResidence_188);
var lyr_AbuDhabiParadiseResortResidence_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbuDhabiParadiseResortResidence_188, 
                style: style_AbuDhabiParadiseResortResidence_188,
                popuplayertitle: 'Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_188_0.png" /> Ruas<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_188_1.png" /> Área Institucional<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_188_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_188_3.png" /> Área Verde<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_188_4.png" /> Área Non Edificandi<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_188_5.png" /> Ciclovia<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_188_6.png" /> Passeio<br />' });
var format_AbuDhabiParadiseResortResidence_189 = new ol.format.GeoJSON();
var features_AbuDhabiParadiseResortResidence_189 = format_AbuDhabiParadiseResortResidence_189.readFeatures(json_AbuDhabiParadiseResortResidence_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AbuDhabiParadiseResortResidence_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbuDhabiParadiseResortResidence_189.addFeatures(features_AbuDhabiParadiseResortResidence_189);
var lyr_AbuDhabiParadiseResortResidence_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbuDhabiParadiseResortResidence_189, 
                style: style_AbuDhabiParadiseResortResidence_189,
                popuplayertitle: 'Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/AbuDhabiParadiseResortResidence_189.png" /> Abu Dhabi Paradise Resort Residence'
            });
var format_EtapaAprovado27unid_190 = new ol.format.GeoJSON();
var features_EtapaAprovado27unid_190 = format_EtapaAprovado27unid_190.readFeatures(json_EtapaAprovado27unid_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaAprovado27unid_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaAprovado27unid_190.addFeatures(features_EtapaAprovado27unid_190);
var lyr_EtapaAprovado27unid_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaAprovado27unid_190, 
                style: style_EtapaAprovado27unid_190,
                popuplayertitle: 'Etapa: Aprovado (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaAprovado27unid_190.png" /> Etapa: Aprovado (27 unid.)'
            });
var format_EtapaDiretriz8unid_191 = new ol.format.GeoJSON();
var features_EtapaDiretriz8unid_191 = format_EtapaDiretriz8unid_191.readFeatures(json_EtapaDiretriz8unid_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaDiretriz8unid_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDiretriz8unid_191.addFeatures(features_EtapaDiretriz8unid_191);
var lyr_EtapaDiretriz8unid_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDiretriz8unid_191, 
                style: style_EtapaDiretriz8unid_191,
                popuplayertitle: 'Etapa: Diretriz (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDiretriz8unid_191.png" /> Etapa: Diretriz (8 unid.)'
            });
var format_EtapaDefinitiva7unid_192 = new ol.format.GeoJSON();
var features_EtapaDefinitiva7unid_192 = format_EtapaDefinitiva7unid_192.readFeatures(json_EtapaDefinitiva7unid_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaDefinitiva7unid_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDefinitiva7unid_192.addFeatures(features_EtapaDefinitiva7unid_192);
var lyr_EtapaDefinitiva7unid_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDefinitiva7unid_192, 
                style: style_EtapaDefinitiva7unid_192,
                popuplayertitle: 'Etapa: Definitiva (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDefinitiva7unid_192.png" /> Etapa: Definitiva (7 unid.)'
            });
var format_EtapaPrvia24unid_193 = new ol.format.GeoJSON();
var features_EtapaPrvia24unid_193 = format_EtapaPrvia24unid_193.readFeatures(json_EtapaPrvia24unid_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaPrvia24unid_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaPrvia24unid_193.addFeatures(features_EtapaPrvia24unid_193);
var lyr_EtapaPrvia24unid_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaPrvia24unid_193, 
                style: style_EtapaPrvia24unid_193,
                popuplayertitle: 'Etapa: Prévia (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaPrvia24unid_193.png" /> Etapa: Prévia (24 unid.)'
            });
var format_LoteamentosClandestinosEmmonitoramento1unid_194 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosEmmonitoramento1unid_194 = format_LoteamentosClandestinosEmmonitoramento1unid_194.readFeatures(json_LoteamentosClandestinosEmmonitoramento1unid_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosEmmonitoramento1unid_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosEmmonitoramento1unid_194.addFeatures(features_LoteamentosClandestinosEmmonitoramento1unid_194);
var lyr_LoteamentosClandestinosEmmonitoramento1unid_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosEmmonitoramento1unid_194, 
                style: style_LoteamentosClandestinosEmmonitoramento1unid_194,
                popuplayertitle: 'Loteamentos Clandestinos - Em monitoramento (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosEmmonitoramento1unid_194.png" /> Loteamentos Clandestinos - Em monitoramento (1 unid.)'
            });
var format_LoteamentosClandestinosEmregularizao36unid_195 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosEmregularizao36unid_195 = format_LoteamentosClandestinosEmregularizao36unid_195.readFeatures(json_LoteamentosClandestinosEmregularizao36unid_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosEmregularizao36unid_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosEmregularizao36unid_195.addFeatures(features_LoteamentosClandestinosEmregularizao36unid_195);
var lyr_LoteamentosClandestinosEmregularizao36unid_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosEmregularizao36unid_195, 
                style: style_LoteamentosClandestinosEmregularizao36unid_195,
                popuplayertitle: 'Loteamentos Clandestinos - Em regularização (36 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosEmregularizao36unid_195.png" /> Loteamentos Clandestinos - Em regularização (36 unid.)'
            });
var format_LoteamentosClandestinosNotificado4unid_196 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosNotificado4unid_196 = format_LoteamentosClandestinosNotificado4unid_196.readFeatures(json_LoteamentosClandestinosNotificado4unid_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosNotificado4unid_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosNotificado4unid_196.addFeatures(features_LoteamentosClandestinosNotificado4unid_196);
var lyr_LoteamentosClandestinosNotificado4unid_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosNotificado4unid_196, 
                style: style_LoteamentosClandestinosNotificado4unid_196,
                popuplayertitle: 'Loteamentos Clandestinos - Notificado (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosNotificado4unid_196.png" /> Loteamentos Clandestinos - Notificado (4 unid.)'
            });
var format_LoteamentosClandestinosNotificar25unid_197 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosNotificar25unid_197 = format_LoteamentosClandestinosNotificar25unid_197.readFeatures(json_LoteamentosClandestinosNotificar25unid_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosNotificar25unid_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosNotificar25unid_197.addFeatures(features_LoteamentosClandestinosNotificar25unid_197);
var lyr_LoteamentosClandestinosNotificar25unid_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosNotificar25unid_197, 
                style: style_LoteamentosClandestinosNotificar25unid_197,
                popuplayertitle: 'Loteamentos Clandestinos - Notificar (25 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosNotificar25unid_197.png" /> Loteamentos Clandestinos - Notificar (25 unid.)'
            });
var format_LoteamentosClandestinosVerificar2unid_198 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosVerificar2unid_198 = format_LoteamentosClandestinosVerificar2unid_198.readFeatures(json_LoteamentosClandestinosVerificar2unid_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosVerificar2unid_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosVerificar2unid_198.addFeatures(features_LoteamentosClandestinosVerificar2unid_198);
var lyr_LoteamentosClandestinosVerificar2unid_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosVerificar2unid_198, 
                style: style_LoteamentosClandestinosVerificar2unid_198,
                popuplayertitle: 'Loteamentos Clandestinos - Verificar (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosVerificar2unid_198.png" /> Loteamentos Clandestinos - Verificar (2 unid.)'
            });
var format_LoteamentosClandestinosEmmonitoramento1unid_199 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosEmmonitoramento1unid_199 = format_LoteamentosClandestinosEmmonitoramento1unid_199.readFeatures(json_LoteamentosClandestinosEmmonitoramento1unid_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosEmmonitoramento1unid_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosEmmonitoramento1unid_199.addFeatures(features_LoteamentosClandestinosEmmonitoramento1unid_199);
var lyr_LoteamentosClandestinosEmmonitoramento1unid_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosEmmonitoramento1unid_199, 
                style: style_LoteamentosClandestinosEmmonitoramento1unid_199,
                popuplayertitle: 'Loteamentos Clandestinos - Em monitoramento (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosEmmonitoramento1unid_199.png" /> Loteamentos Clandestinos - Em monitoramento (1 unid.)'
            });
var format_LoteamentosClandestinosEmregularizao36unid_200 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosEmregularizao36unid_200 = format_LoteamentosClandestinosEmregularizao36unid_200.readFeatures(json_LoteamentosClandestinosEmregularizao36unid_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosEmregularizao36unid_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosEmregularizao36unid_200.addFeatures(features_LoteamentosClandestinosEmregularizao36unid_200);
var lyr_LoteamentosClandestinosEmregularizao36unid_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosEmregularizao36unid_200, 
                style: style_LoteamentosClandestinosEmregularizao36unid_200,
                popuplayertitle: 'Loteamentos Clandestinos - Em regularização (36 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosEmregularizao36unid_200.png" /> Loteamentos Clandestinos - Em regularização (36 unid.)'
            });
var format_LoteamentosClandestinosNotificado4unid_201 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosNotificado4unid_201 = format_LoteamentosClandestinosNotificado4unid_201.readFeatures(json_LoteamentosClandestinosNotificado4unid_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosNotificado4unid_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosNotificado4unid_201.addFeatures(features_LoteamentosClandestinosNotificado4unid_201);
var lyr_LoteamentosClandestinosNotificado4unid_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosNotificado4unid_201, 
                style: style_LoteamentosClandestinosNotificado4unid_201,
                popuplayertitle: 'Loteamentos Clandestinos - Notificado (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosNotificado4unid_201.png" /> Loteamentos Clandestinos - Notificado (4 unid.)'
            });
var format_LoteamentosClandestinosNotificar25unid_202 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosNotificar25unid_202 = format_LoteamentosClandestinosNotificar25unid_202.readFeatures(json_LoteamentosClandestinosNotificar25unid_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosNotificar25unid_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosNotificar25unid_202.addFeatures(features_LoteamentosClandestinosNotificar25unid_202);
var lyr_LoteamentosClandestinosNotificar25unid_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosNotificar25unid_202, 
                style: style_LoteamentosClandestinosNotificar25unid_202,
                popuplayertitle: 'Loteamentos Clandestinos - Notificar (25 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosNotificar25unid_202.png" /> Loteamentos Clandestinos - Notificar (25 unid.)'
            });
var format_LoteamentosClandestinosVerificar2unid_203 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosVerificar2unid_203 = format_LoteamentosClandestinosVerificar2unid_203.readFeatures(json_LoteamentosClandestinosVerificar2unid_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosVerificar2unid_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosVerificar2unid_203.addFeatures(features_LoteamentosClandestinosVerificar2unid_203);
var lyr_LoteamentosClandestinosVerificar2unid_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosVerificar2unid_203, 
                style: style_LoteamentosClandestinosVerificar2unid_203,
                popuplayertitle: 'Loteamentos Clandestinos - Verificar (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosVerificar2unid_203.png" /> Loteamentos Clandestinos - Verificar (2 unid.)'
            });
var format_APP1745unid_204 = new ol.format.GeoJSON();
var features_APP1745unid_204 = format_APP1745unid_204.readFeatures(json_APP1745unid_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP1745unid_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP1745unid_204.addFeatures(features_APP1745unid_204);
var lyr_APP1745unid_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP1745unid_204, 
                style: style_APP1745unid_204,
                popuplayertitle: 'APP (1745 unid.)',
                interactive: true,
                title: '<img src="styles/legend/APP1745unid_204.png" /> APP (1745 unid.)'
            });
var format_RiosDuplos84unid_205 = new ol.format.GeoJSON();
var features_RiosDuplos84unid_205 = format_RiosDuplos84unid_205.readFeatures(json_RiosDuplos84unid_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosDuplos84unid_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos84unid_205.addFeatures(features_RiosDuplos84unid_205);
var lyr_RiosDuplos84unid_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos84unid_205, 
                style: style_RiosDuplos84unid_205,
                popuplayertitle: 'Rios Duplos (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos84unid_205.png" /> Rios Duplos (84 unid.)'
            });
var format_MassasDgua270unid_206 = new ol.format.GeoJSON();
var features_MassasDgua270unid_206 = format_MassasDgua270unid_206.readFeatures(json_MassasDgua270unid_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MassasDgua270unid_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua270unid_206.addFeatures(features_MassasDgua270unid_206);
var lyr_MassasDgua270unid_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua270unid_206, 
                style: style_MassasDgua270unid_206,
                popuplayertitle: 'Massas D\'água (270 unid.)',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua270unid_206.png" /> Massas D\'água (270 unid.)'
            });
var format_RiosSimples1842unid_207 = new ol.format.GeoJSON();
var features_RiosSimples1842unid_207 = format_RiosSimples1842unid_207.readFeatures(json_RiosSimples1842unid_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosSimples1842unid_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples1842unid_207.addFeatures(features_RiosSimples1842unid_207);
var lyr_RiosSimples1842unid_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples1842unid_207, 
                style: style_RiosSimples1842unid_207,
                popuplayertitle: 'Rios Simples (1842 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples1842unid_207.png" /> Rios Simples (1842 unid.)'
            });
var format_Nascentes821unid_208 = new ol.format.GeoJSON();
var features_Nascentes821unid_208 = format_Nascentes821unid_208.readFeatures(json_Nascentes821unid_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Nascentes821unid_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes821unid_208.addFeatures(features_Nascentes821unid_208);
var lyr_Nascentes821unid_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes821unid_208, 
                style: style_Nascentes821unid_208,
                popuplayertitle: 'Nascentes (821 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Nascentes821unid_208.png" /> Nascentes (821 unid.)'
            });
var format_ParqueZumbidosPalmares_209 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_209 = format_ParqueZumbidosPalmares_209.readFeatures(json_ParqueZumbidosPalmares_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueZumbidosPalmares_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_209.addFeatures(features_ParqueZumbidosPalmares_209);
var lyr_ParqueZumbidosPalmares_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_209, 
                style: style_ParqueZumbidosPalmares_209,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_209.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210 = format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_AntigoAterrodasMaritacas_212 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_212 = format_AntigoAterrodasMaritacas_212.readFeatures(json_AntigoAterrodasMaritacas_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacas_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_212.addFeatures(features_AntigoAterrodasMaritacas_212);
var lyr_AntigoAterrodasMaritacas_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_212, 
                style: style_AntigoAterrodasMaritacas_212,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_212.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_216 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_216 = format_AntigoAterrodaFazendaMunicipal_216.readFeatures(json_AntigoAterrodaFazendaMunicipal_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipal_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_216.addFeatures(features_AntigoAterrodaFazendaMunicipal_216);
var lyr_AntigoAterrodaFazendaMunicipal_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_216, 
                style: style_AntigoAterrodaFazendaMunicipal_216,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_216.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)'
            });
var format_reaN_219 = new ol.format.GeoJSON();
var features_reaN_219 = format_reaN_219.readFeatures(json_reaN_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaN_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN_219.addFeatures(features_reaN_219);
var lyr_reaN_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN_219, 
                style: style_reaN_219,
                popuplayertitle: 'Área N',
                interactive: true,
                title: '<img src="styles/legend/reaN_219.png" /> Área N'
            });
var format_ConjuntoHabitacional_220 = new ol.format.GeoJSON();
var features_ConjuntoHabitacional_220 = format_ConjuntoHabitacional_220.readFeatures(json_ConjuntoHabitacional_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ConjuntoHabitacional_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConjuntoHabitacional_220.addFeatures(features_ConjuntoHabitacional_220);
var lyr_ConjuntoHabitacional_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConjuntoHabitacional_220, 
                style: style_ConjuntoHabitacional_220,
                popuplayertitle: 'Conjunto Habitacional',
                interactive: true,
                title: '<img src="styles/legend/ConjuntoHabitacional_220.png" /> Conjunto Habitacional'
            });
var format_AvdeacessoaoHortoeColgioAgrcola_221 = new ol.format.GeoJSON();
var features_AvdeacessoaoHortoeColgioAgrcola_221 = format_AvdeacessoaoHortoeColgioAgrcola_221.readFeatures(json_AvdeacessoaoHortoeColgioAgrcola_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AvdeacessoaoHortoeColgioAgrcola_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvdeacessoaoHortoeColgioAgrcola_221.addFeatures(features_AvdeacessoaoHortoeColgioAgrcola_221);
var lyr_AvdeacessoaoHortoeColgioAgrcola_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvdeacessoaoHortoeColgioAgrcola_221, 
                style: style_AvdeacessoaoHortoeColgioAgrcola_221,
                popuplayertitle: 'Av. de acesso ao Horto e Colégio Agrícola',
                interactive: true,
                title: '<img src="styles/legend/AvdeacessoaoHortoeColgioAgrcola_221.png" /> Av. de acesso ao Horto e Colégio Agrícola'
            });
var format_reaK_222 = new ol.format.GeoJSON();
var features_reaK_222 = format_reaK_222.readFeatures(json_reaK_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaK_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaK_222.addFeatures(features_reaK_222);
var lyr_reaK_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaK_222, 
                style: style_reaK_222,
                popuplayertitle: 'Área K',
                interactive: true,
                title: '<img src="styles/legend/reaK_222.png" /> Área K'
            });
var format_reaJ_223 = new ol.format.GeoJSON();
var features_reaJ_223 = format_reaJ_223.readFeatures(json_reaJ_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaJ_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaJ_223.addFeatures(features_reaJ_223);
var lyr_reaJ_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaJ_223, 
                style: style_reaJ_223,
                popuplayertitle: 'Área J',
                interactive: true,
                title: '<img src="styles/legend/reaJ_223.png" /> Área J'
            });
var format_reaI_224 = new ol.format.GeoJSON();
var features_reaI_224 = format_reaI_224.readFeatures(json_reaI_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaI_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaI_224.addFeatures(features_reaI_224);
var lyr_reaI_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaI_224, 
                style: style_reaI_224,
                popuplayertitle: 'Área I',
                interactive: true,
                title: '<img src="styles/legend/reaI_224.png" /> Área I'
            });
var format_reaH_225 = new ol.format.GeoJSON();
var features_reaH_225 = format_reaH_225.readFeatures(json_reaH_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaH_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaH_225.addFeatures(features_reaH_225);
var lyr_reaH_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaH_225, 
                style: style_reaH_225,
                popuplayertitle: 'Área H',
                interactive: true,
                title: '<img src="styles/legend/reaH_225.png" /> Área H'
            });
var format_reaG_226 = new ol.format.GeoJSON();
var features_reaG_226 = format_reaG_226.readFeatures(json_reaG_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaG_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaG_226.addFeatures(features_reaG_226);
var lyr_reaG_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaG_226, 
                style: style_reaG_226,
                popuplayertitle: 'Área G',
                interactive: true,
                title: '<img src="styles/legend/reaG_226.png" /> Área G'
            });
var format_reaF_227 = new ol.format.GeoJSON();
var features_reaF_227 = format_reaF_227.readFeatures(json_reaF_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaF_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaF_227.addFeatures(features_reaF_227);
var lyr_reaF_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaF_227, 
                style: style_reaF_227,
                popuplayertitle: 'Área F',
                interactive: true,
                title: '<img src="styles/legend/reaF_227.png" /> Área F'
            });
var format_reaE_228 = new ol.format.GeoJSON();
var features_reaE_228 = format_reaE_228.readFeatures(json_reaE_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaE_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaE_228.addFeatures(features_reaE_228);
var lyr_reaE_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaE_228, 
                style: style_reaE_228,
                popuplayertitle: 'Área E',
                interactive: true,
                title: '<img src="styles/legend/reaE_228.png" /> Área E'
            });
var format_reaD_229 = new ol.format.GeoJSON();
var features_reaD_229 = format_reaD_229.readFeatures(json_reaD_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaD_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaD_229.addFeatures(features_reaD_229);
var lyr_reaD_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaD_229, 
                style: style_reaD_229,
                popuplayertitle: 'Área D',
                interactive: true,
                title: '<img src="styles/legend/reaD_229.png" /> Área D'
            });
var format_reaC_230 = new ol.format.GeoJSON();
var features_reaC_230 = format_reaC_230.readFeatures(json_reaC_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaC_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaC_230.addFeatures(features_reaC_230);
var lyr_reaC_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaC_230, 
                style: style_reaC_230,
                popuplayertitle: 'Área C',
                interactive: true,
                title: '<img src="styles/legend/reaC_230.png" /> Área C'
            });
var format_reaB_231 = new ol.format.GeoJSON();
var features_reaB_231 = format_reaB_231.readFeatures(json_reaB_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaB_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaB_231.addFeatures(features_reaB_231);
var lyr_reaB_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaB_231, 
                style: style_reaB_231,
                popuplayertitle: 'Área B',
                interactive: true,
                title: '<img src="styles/legend/reaB_231.png" /> Área B'
            });
var format_reaA_232 = new ol.format.GeoJSON();
var features_reaA_232 = format_reaA_232.readFeatures(json_reaA_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaA_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaA_232.addFeatures(features_reaA_232);
var lyr_reaA_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaA_232, 
                style: style_reaA_232,
                popuplayertitle: 'Área A',
                interactive: true,
                title: '<img src="styles/legend/reaA_232.png" /> Área A'
            });
var format_reaAverbada355235ReservaFlorestalLegalPartedareaG_233 = new ol.format.GeoJSON();
var features_reaAverbada355235ReservaFlorestalLegalPartedareaG_233 = format_reaAverbada355235ReservaFlorestalLegalPartedareaG_233.readFeatures(json_reaAverbada355235ReservaFlorestalLegalPartedareaG_233, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_233 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_233.addFeatures(features_reaAverbada355235ReservaFlorestalLegalPartedareaG_233);
var lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_233 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_233, 
                style: style_reaAverbada355235ReservaFlorestalLegalPartedareaG_233,
                popuplayertitle: 'Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaAverbada355235ReservaFlorestalLegalPartedareaG_233.png" /> Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)'
            });
var format_reaaseraverbadaPartedareaG_234 = new ol.format.GeoJSON();
var features_reaaseraverbadaPartedareaG_234 = format_reaaseraverbadaPartedareaG_234.readFeatures(json_reaaseraverbadaPartedareaG_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaaseraverbadaPartedareaG_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaaseraverbadaPartedareaG_234.addFeatures(features_reaaseraverbadaPartedareaG_234);
var lyr_reaaseraverbadaPartedareaG_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaaseraverbadaPartedareaG_234, 
                style: style_reaaseraverbadaPartedareaG_234,
                popuplayertitle: 'Área a ser averbada (Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaaseraverbadaPartedareaG_234.png" /> Área a ser averbada (Parte da Área G)'
            });
var format_rvoreImuneaoCorte9unid_235 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte9unid_235 = format_rvoreImuneaoCorte9unid_235.readFeatures(json_rvoreImuneaoCorte9unid_235, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_rvoreImuneaoCorte9unid_235 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte9unid_235.addFeatures(features_rvoreImuneaoCorte9unid_235);
var lyr_rvoreImuneaoCorte9unid_235 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte9unid_235, 
                style: style_rvoreImuneaoCorte9unid_235,
                popuplayertitle: 'Árvore Imune ao Corte (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte9unid_235.png" /> Árvore Imune ao Corte (9 unid.)'
            });
var format_Voorocas26unid_236 = new ol.format.GeoJSON();
var features_Voorocas26unid_236 = format_Voorocas26unid_236.readFeatures(json_Voorocas26unid_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Voorocas26unid_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas26unid_236.addFeatures(features_Voorocas26unid_236);
var lyr_Voorocas26unid_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas26unid_236, 
                style: style_Voorocas26unid_236,
                popuplayertitle: 'Voçorocas (26 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas26unid_236.png" /> Voçorocas (26 unid.)'
            });
var format_DeclividadeZonaUrbanaCopernicus30m_237 = new ol.format.GeoJSON();
var features_DeclividadeZonaUrbanaCopernicus30m_237 = format_DeclividadeZonaUrbanaCopernicus30m_237.readFeatures(json_DeclividadeZonaUrbanaCopernicus30m_237, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DeclividadeZonaUrbanaCopernicus30m_237 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaUrbanaCopernicus30m_237.addFeatures(features_DeclividadeZonaUrbanaCopernicus30m_237);
var lyr_DeclividadeZonaUrbanaCopernicus30m_237 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaUrbanaCopernicus30m_237, 
                style: style_DeclividadeZonaUrbanaCopernicus30m_237,
                popuplayertitle: 'Declividade - Zona Urbana (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Urbana (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_237_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_237_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_237_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_237_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_237_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_237_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_237_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_237_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_237_8.png" /> 101 - 114%<br />' });
var format_DeclividadeZonaRuralSulCopernicus30m_238 = new ol.format.GeoJSON();
var features_DeclividadeZonaRuralSulCopernicus30m_238 = format_DeclividadeZonaRuralSulCopernicus30m_238.readFeatures(json_DeclividadeZonaRuralSulCopernicus30m_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DeclividadeZonaRuralSulCopernicus30m_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaRuralSulCopernicus30m_238.addFeatures(features_DeclividadeZonaRuralSulCopernicus30m_238);
var lyr_DeclividadeZonaRuralSulCopernicus30m_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaRuralSulCopernicus30m_238, 
                style: style_DeclividadeZonaRuralSulCopernicus30m_238,
                popuplayertitle: 'Declividade - Zona Rural - Sul (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Rural - Sul (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_238_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_238_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_238_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_238_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_238_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_238_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_238_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_238_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_238_8.png" /> 101 - 114%<br />' });
var format_DeclividadeZonaRuralNorteCopernicus30m_239 = new ol.format.GeoJSON();
var features_DeclividadeZonaRuralNorteCopernicus30m_239 = format_DeclividadeZonaRuralNorteCopernicus30m_239.readFeatures(json_DeclividadeZonaRuralNorteCopernicus30m_239, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DeclividadeZonaRuralNorteCopernicus30m_239 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaRuralNorteCopernicus30m_239.addFeatures(features_DeclividadeZonaRuralNorteCopernicus30m_239);
var lyr_DeclividadeZonaRuralNorteCopernicus30m_239 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaRuralNorteCopernicus30m_239, 
                style: style_DeclividadeZonaRuralNorteCopernicus30m_239,
                popuplayertitle: 'Declividade - Zona Rural - Norte (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Rural - Norte (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_239_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_239_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_239_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_239_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_239_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_239_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_239_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_239_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_239_8.png" /> 101 - 114%<br />' });
var format_PBZPAEdifcioPrimeHELIPONTO_240 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_240 = format_PBZPAEdifcioPrimeHELIPONTO_240.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_240.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_240);
var lyr_PBZPAEdifcioPrimeHELIPONTO_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_240, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_240,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
                title: '<img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_240.png" /> PBZPA - Edifício Prime (HELIPONTO)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_241 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_241 = format_PBZPAEdifcioPrimeHELIPONTO_241.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_241.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_241);
var lyr_PBZPAEdifcioPrimeHELIPONTO_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_241, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_241,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Edifício Prime (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_241_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_241_1.png" /> RAMPA<br />' });
var format_PBZPAHospitalHELIPONTO_242 = new ol.format.GeoJSON();
var features_PBZPAHospitalHELIPONTO_242 = format_PBZPAHospitalHELIPONTO_242.readFeatures(json_PBZPAHospitalHELIPONTO_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAHospitalHELIPONTO_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAHospitalHELIPONTO_242.addFeatures(features_PBZPAHospitalHELIPONTO_242);
var lyr_PBZPAHospitalHELIPONTO_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAHospitalHELIPONTO_242, 
                style: style_PBZPAHospitalHELIPONTO_242,
                popuplayertitle: 'PBZPA - Hospital (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Hospital (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_242_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_242_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_242_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_242_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_242_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_242_5.png" /> FATO 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_242_6.png" /> TLOF 1<br />' });
var format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243 = new ol.format.GeoJSON();
var features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243 = format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243.readFeatures(json_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243.addFeatures(features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243);
var lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243, 
                style: style_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243,
                popuplayertitle: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)',
                interactive: true,
    title: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_243_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_243_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_243_2.png" /> Cônica<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_243_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_243_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_243_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_243_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_243_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_243_8.png" /> Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_243_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_243_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_243_11.png" /> Transição<br />' });
var format_ClasseVB_244 = new ol.format.GeoJSON();
var features_ClasseVB_244 = format_ClasseVB_244.readFeatures(json_ClasseVB_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseVB_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseVB_244.addFeatures(features_ClasseVB_244);
var lyr_ClasseVB_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseVB_244, 
                style: style_ClasseVB_244,
                popuplayertitle: 'Classe VB',
                interactive: true,
                title: '<img src="styles/legend/ClasseVB_244.png" /> Classe VB'
            });
var format_ClasseVA_245 = new ol.format.GeoJSON();
var features_ClasseVA_245 = format_ClasseVA_245.readFeatures(json_ClasseVA_245, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseVA_245 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseVA_245.addFeatures(features_ClasseVA_245);
var lyr_ClasseVA_245 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseVA_245, 
                style: style_ClasseVA_245,
                popuplayertitle: 'Classe VA',
                interactive: true,
                title: '<img src="styles/legend/ClasseVA_245.png" /> Classe VA'
            });
var format_ClasseIVC_246 = new ol.format.GeoJSON();
var features_ClasseIVC_246 = format_ClasseIVC_246.readFeatures(json_ClasseIVC_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIVC_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIVC_246.addFeatures(features_ClasseIVC_246);
var lyr_ClasseIVC_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIVC_246, 
                style: style_ClasseIVC_246,
                popuplayertitle: 'Classe IVC',
                interactive: true,
                title: '<img src="styles/legend/ClasseIVC_246.png" /> Classe IVC'
            });
var format_ClasseIVB_247 = new ol.format.GeoJSON();
var features_ClasseIVB_247 = format_ClasseIVB_247.readFeatures(json_ClasseIVB_247, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIVB_247 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIVB_247.addFeatures(features_ClasseIVB_247);
var lyr_ClasseIVB_247 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIVB_247, 
                style: style_ClasseIVB_247,
                popuplayertitle: 'Classe IVB',
                interactive: true,
                title: '<img src="styles/legend/ClasseIVB_247.png" /> Classe IVB'
            });
var format_ClasseIVA_248 = new ol.format.GeoJSON();
var features_ClasseIVA_248 = format_ClasseIVA_248.readFeatures(json_ClasseIVA_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIVA_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIVA_248.addFeatures(features_ClasseIVA_248);
var lyr_ClasseIVA_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIVA_248, 
                style: style_ClasseIVA_248,
                popuplayertitle: 'Classe IVA',
                interactive: true,
                title: '<img src="styles/legend/ClasseIVA_248.png" /> Classe IVA'
            });
var format_ClasseIIIC_249 = new ol.format.GeoJSON();
var features_ClasseIIIC_249 = format_ClasseIIIC_249.readFeatures(json_ClasseIIIC_249, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIIIC_249 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIIIC_249.addFeatures(features_ClasseIIIC_249);
var lyr_ClasseIIIC_249 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIIIC_249, 
                style: style_ClasseIIIC_249,
                popuplayertitle: 'Classe IIIC',
                interactive: true,
                title: '<img src="styles/legend/ClasseIIIC_249.png" /> Classe IIIC'
            });
var format_ClasseIIIB_250 = new ol.format.GeoJSON();
var features_ClasseIIIB_250 = format_ClasseIIIB_250.readFeatures(json_ClasseIIIB_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIIIB_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIIIB_250.addFeatures(features_ClasseIIIB_250);
var lyr_ClasseIIIB_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIIIB_250, 
                style: style_ClasseIIIB_250,
                popuplayertitle: 'Classe IIIB',
                interactive: true,
                title: '<img src="styles/legend/ClasseIIIB_250.png" /> Classe IIIB'
            });
var format_ClasseIIIA_251 = new ol.format.GeoJSON();
var features_ClasseIIIA_251 = format_ClasseIIIA_251.readFeatures(json_ClasseIIIA_251, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIIIA_251 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIIIA_251.addFeatures(features_ClasseIIIA_251);
var lyr_ClasseIIIA_251 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIIIA_251, 
                style: style_ClasseIIIA_251,
                popuplayertitle: 'Classe IIIA',
                interactive: true,
                title: '<img src="styles/legend/ClasseIIIA_251.png" /> Classe IIIA'
            });
var format_ClasseII_252 = new ol.format.GeoJSON();
var features_ClasseII_252 = format_ClasseII_252.readFeatures(json_ClasseII_252, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseII_252 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseII_252.addFeatures(features_ClasseII_252);
var lyr_ClasseII_252 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseII_252, 
                style: style_ClasseII_252,
                popuplayertitle: 'Classe II',
                interactive: true,
                title: '<img src="styles/legend/ClasseII_252.png" /> Classe II'
            });
var format_ClasseI_253 = new ol.format.GeoJSON();
var features_ClasseI_253 = format_ClasseI_253.readFeatures(json_ClasseI_253, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseI_253 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseI_253.addFeatures(features_ClasseI_253);
var lyr_ClasseI_253 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseI_253, 
                style: style_ClasseI_253,
                popuplayertitle: 'Classe I',
                interactive: true,
                title: '<img src="styles/legend/ClasseI_253.png" /> Classe I'
            });
var format_APP156unid230392892m_254 = new ol.format.GeoJSON();
var features_APP156unid230392892m_254 = format_APP156unid230392892m_254.readFeatures(json_APP156unid230392892m_254, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP156unid230392892m_254 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP156unid230392892m_254.addFeatures(features_APP156unid230392892m_254);
var lyr_APP156unid230392892m_254 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP156unid230392892m_254, 
                style: style_APP156unid230392892m_254,
                popuplayertitle: 'APP (156 unid. / 2.303.928,92 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP156unid230392892m_254.png" /> APP (156 unid. / 2.303.928,92 m²)'
            });
var format_readeUsoEspecial276unid271190268m_255 = new ol.format.GeoJSON();
var features_readeUsoEspecial276unid271190268m_255 = format_readeUsoEspecial276unid271190268m_255.readFeatures(json_readeUsoEspecial276unid271190268m_255, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeUsoEspecial276unid271190268m_255 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial276unid271190268m_255.addFeatures(features_readeUsoEspecial276unid271190268m_255);
var lyr_readeUsoEspecial276unid271190268m_255 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial276unid271190268m_255, 
                style: style_readeUsoEspecial276unid271190268m_255,
                popuplayertitle: 'Área de Uso Especial (276 unid. / 2.711.902,68 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial276unid271190268m_255.png" /> Área de Uso Especial (276 unid. / 2.711.902,68 m²)'
            });
var format_reaInstitucional224unid133042345m_256 = new ol.format.GeoJSON();
var features_reaInstitucional224unid133042345m_256 = format_reaInstitucional224unid133042345m_256.readFeatures(json_reaInstitucional224unid133042345m_256, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaInstitucional224unid133042345m_256 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional224unid133042345m_256.addFeatures(features_reaInstitucional224unid133042345m_256);
var lyr_reaInstitucional224unid133042345m_256 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional224unid133042345m_256, 
                style: style_reaInstitucional224unid133042345m_256,
                popuplayertitle: 'Área Institucional (224 unid. / 1.330.423,45 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional224unid133042345m_256.png" /> Área Institucional (224 unid. / 1.330.423,45 m²)'
            });
var format_reaPatrimonial33unid15807656m_257 = new ol.format.GeoJSON();
var features_reaPatrimonial33unid15807656m_257 = format_reaPatrimonial33unid15807656m_257.readFeatures(json_reaPatrimonial33unid15807656m_257, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaPatrimonial33unid15807656m_257 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial33unid15807656m_257.addFeatures(features_reaPatrimonial33unid15807656m_257);
var lyr_reaPatrimonial33unid15807656m_257 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial33unid15807656m_257, 
                style: style_reaPatrimonial33unid15807656m_257,
                popuplayertitle: 'Área Patrimonial (33 unid. / 158.076,56 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial33unid15807656m_257.png" /> Área Patrimonial (33 unid. / 158.076,56 m²)'
            });
var format_LoteamentoFechado115unid52603608m_258 = new ol.format.GeoJSON();
var features_LoteamentoFechado115unid52603608m_258 = format_LoteamentoFechado115unid52603608m_258.readFeatures(json_LoteamentoFechado115unid52603608m_258, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentoFechado115unid52603608m_258 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentoFechado115unid52603608m_258.addFeatures(features_LoteamentoFechado115unid52603608m_258);
var lyr_LoteamentoFechado115unid52603608m_258 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentoFechado115unid52603608m_258, 
                style: style_LoteamentoFechado115unid52603608m_258,
                popuplayertitle: 'Loteamento Fechado (115 unid. / 526.036,08 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentoFechado115unid52603608m_258.png" /> Loteamento Fechado (115 unid. / 526.036,08 m²)'
            });
var format_reaVerde1946unid805735618m_259 = new ol.format.GeoJSON();
var features_reaVerde1946unid805735618m_259 = format_reaVerde1946unid805735618m_259.readFeatures(json_reaVerde1946unid805735618m_259, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaVerde1946unid805735618m_259 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde1946unid805735618m_259.addFeatures(features_reaVerde1946unid805735618m_259);
var lyr_reaVerde1946unid805735618m_259 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde1946unid805735618m_259, 
                style: style_reaVerde1946unid805735618m_259,
                popuplayertitle: 'Área Verde (1.946 unid. / 8.057.356,18 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde1946unid805735618m_259.png" /> Área Verde (1.946 unid. / 8.057.356,18 m²)'
            });
var format_Lote251unid7505210m_260 = new ol.format.GeoJSON();
var features_Lote251unid7505210m_260 = format_Lote251unid7505210m_260.readFeatures(json_Lote251unid7505210m_260, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote251unid7505210m_260 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote251unid7505210m_260.addFeatures(features_Lote251unid7505210m_260);
var lyr_Lote251unid7505210m_260 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote251unid7505210m_260, 
                style: style_Lote251unid7505210m_260,
                popuplayertitle: 'Lote (251 unid. / 75.052,10 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote251unid7505210m_260.png" /> Lote (251 unid. / 75.052,10 m²)'
            });
var format_Lote251unid_261 = new ol.format.GeoJSON();
var features_Lote251unid_261 = format_Lote251unid_261.readFeatures(json_Lote251unid_261, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote251unid_261 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote251unid_261.addFeatures(features_Lote251unid_261);
var lyr_Lote251unid_261 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote251unid_261, 
                style: style_Lote251unid_261,
                popuplayertitle: 'Lote (251 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote251unid_261.png" /> Lote (251 unid.)'
            });
var format_LoteEdificao20unid508062m_262 = new ol.format.GeoJSON();
var features_LoteEdificao20unid508062m_262 = format_LoteEdificao20unid508062m_262.readFeatures(json_LoteEdificao20unid508062m_262, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid508062m_262 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid508062m_262.addFeatures(features_LoteEdificao20unid508062m_262);
var lyr_LoteEdificao20unid508062m_262 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid508062m_262, 
                style: style_LoteEdificao20unid508062m_262,
                popuplayertitle: 'Lote/Edificação (20 unid. / 5.080,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid508062m_262.png" /> Lote/Edificação (20 unid. / 5.080,62 m²)'
            });
var format_LoteEdificao20unid_263 = new ol.format.GeoJSON();
var features_LoteEdificao20unid_263 = format_LoteEdificao20unid_263.readFeatures(json_LoteEdificao20unid_263, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid_263 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid_263.addFeatures(features_LoteEdificao20unid_263);
var lyr_LoteEdificao20unid_263 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid_263, 
                style: style_LoteEdificao20unid_263,
                popuplayertitle: 'Lote/Edificação (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid_263.png" /> Lote/Edificação (20 unid.)'
            });
var format_LeiloLEIN97542025Homologado4unid334770m_264 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Homologado4unid334770m_264 = format_LeiloLEIN97542025Homologado4unid334770m_264.readFeatures(json_LeiloLEIN97542025Homologado4unid334770m_264, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Homologado4unid334770m_264 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Homologado4unid334770m_264.addFeatures(features_LeiloLEIN97542025Homologado4unid334770m_264);
var lyr_LeiloLEIN97542025Homologado4unid334770m_264 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Homologado4unid334770m_264, 
                style: style_LeiloLEIN97542025Homologado4unid334770m_264,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Homologado4unid334770m_264.png" /> Leilão - LEI Nº 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)'
            });
var format_LeiloLEIN97542025Homologado4unid_265 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Homologado4unid_265 = format_LeiloLEIN97542025Homologado4unid_265.readFeatures(json_LeiloLEIN97542025Homologado4unid_265, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Homologado4unid_265 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Homologado4unid_265.addFeatures(features_LeiloLEIN97542025Homologado4unid_265);
var lyr_LeiloLEIN97542025Homologado4unid_265 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Homologado4unid_265, 
                style: style_LeiloLEIN97542025Homologado4unid_265,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Homologado (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Homologado4unid_265.png" /> Leilão - LEI Nº 9.754/2025 - Homologado (4 unid.)'
            });
var format_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266 = format_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266.readFeatures(json_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266.addFeatures(features_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266);
var lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266, 
                style: style_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid. / 3.520,00 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid. / 3.520,00 m²)'
            });
var format_LeiloLEIN97542025Proc35162004100002652520256922unid_267 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002652520256922unid_267 = format_LeiloLEIN97542025Proc35162004100002652520256922unid_267.readFeatures(json_LeiloLEIN97542025Proc35162004100002652520256922unid_267, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid_267 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid_267.addFeatures(features_LeiloLEIN97542025Proc35162004100002652520256922unid_267);
var lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_267 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid_267, 
                style: style_LeiloLEIN97542025Proc35162004100002652520256922unid_267,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002652520256922unid_267.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid.)'
            });
var format_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268 = format_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268.readFeatures(json_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268.addFeatures(features_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268);
var lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268, 
                style: style_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid. / 32.404,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid. / 32.404,62 m²)'
            });
var format_LeiloLEIN97542025Proc351620041000007954202537196unid_269 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc351620041000007954202537196unid_269 = format_LeiloLEIN97542025Proc351620041000007954202537196unid_269.readFeatures(json_LeiloLEIN97542025Proc351620041000007954202537196unid_269, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid_269 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid_269.addFeatures(features_LeiloLEIN97542025Proc351620041000007954202537196unid_269);
var lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_269 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid_269, 
                style: style_LeiloLEIN97542025Proc351620041000007954202537196unid_269,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc351620041000007954202537196unid_269.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid.)'
            });
var format_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270 = format_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270.readFeatures(json_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270.addFeatures(features_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270);
var lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270, 
                style: style_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid. / 20.920,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid. / 20.920,83 m²)'
            });
var format_LeiloLEIN97542025Proc35162004100002198620254518unid_271 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002198620254518unid_271 = format_LeiloLEIN97542025Proc35162004100002198620254518unid_271.readFeatures(json_LeiloLEIN97542025Proc35162004100002198620254518unid_271, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid_271 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid_271.addFeatures(features_LeiloLEIN97542025Proc35162004100002198620254518unid_271);
var lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_271 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid_271, 
                style: style_LeiloLEIN97542025Proc35162004100002198620254518unid_271,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002198620254518unid_271.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid.)'
            });
var format_LoteEMDEF10unid218783m_272 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid218783m_272 = format_LoteEMDEF10unid218783m_272.readFeatures(json_LoteEMDEF10unid218783m_272, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid218783m_272 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid218783m_272.addFeatures(features_LoteEMDEF10unid218783m_272);
var lyr_LoteEMDEF10unid218783m_272 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid218783m_272, 
                style: style_LoteEMDEF10unid218783m_272,
                popuplayertitle: 'Lote EMDEF (10 unid. / 2.187,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid218783m_272.png" /> Lote EMDEF (10 unid. / 2.187,83 m²)'
            });
var format_LoteEMDEF10unid_273 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid_273 = format_LoteEMDEF10unid_273.readFeatures(json_LoteEMDEF10unid_273, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid_273 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid_273.addFeatures(features_LoteEMDEF10unid_273);
var lyr_LoteEMDEF10unid_273 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid_273, 
                style: style_LoteEMDEF10unid_273,
                popuplayertitle: 'Lote EMDEF (10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid_273.png" /> Lote EMDEF (10 unid.)'
            });
var format_AoCivilPblica1unid_274 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_274 = format_AoCivilPblica1unid_274.readFeatures(json_AoCivilPblica1unid_274, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_274 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_274.addFeatures(features_AoCivilPblica1unid_274);
var lyr_AoCivilPblica1unid_274 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_274, 
                style: style_AoCivilPblica1unid_274,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_274.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_275 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_275 = format_AoCivilPblica1unid_275.readFeatures(json_AoCivilPblica1unid_275, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_275 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_275.addFeatures(features_AoCivilPblica1unid_275);
var lyr_AoCivilPblica1unid_275 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_275, 
                style: style_AoCivilPblica1unid_275,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_275.png" /> Ação Civil Pública (1 unid.)'
            });
var format_CartaAnuncia20unid_276 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_276 = format_CartaAnuncia20unid_276.readFeatures(json_CartaAnuncia20unid_276, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia20unid_276 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_276.addFeatures(features_CartaAnuncia20unid_276);
var lyr_CartaAnuncia20unid_276 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_276, 
                style: style_CartaAnuncia20unid_276,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_276.png" /> Carta Anuência (20 unid.)'
            });
var format_CartaAnuncia19unid_277 = new ol.format.GeoJSON();
var features_CartaAnuncia19unid_277 = format_CartaAnuncia19unid_277.readFeatures(json_CartaAnuncia19unid_277, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia19unid_277 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia19unid_277.addFeatures(features_CartaAnuncia19unid_277);
var lyr_CartaAnuncia19unid_277 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia19unid_277, 
                style: style_CartaAnuncia19unid_277,
                popuplayertitle: 'Carta Anuência (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia19unid_277.png" /> Carta Anuência (19 unid.)'
            });
var format_PlantioVoluntrio1unid_278 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_278 = format_PlantioVoluntrio1unid_278.readFeatures(json_PlantioVoluntrio1unid_278, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_278 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_278.addFeatures(features_PlantioVoluntrio1unid_278);
var lyr_PlantioVoluntrio1unid_278 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_278, 
                style: style_PlantioVoluntrio1unid_278,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_278.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_279 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_279 = format_PlantioVoluntrio1unid_279.readFeatures(json_PlantioVoluntrio1unid_279, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_279 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_279.addFeatures(features_PlantioVoluntrio1unid_279);
var lyr_PlantioVoluntrio1unid_279 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_279, 
                style: style_PlantioVoluntrio1unid_279,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_279.png" /> Plantio Voluntário (1 unid.)'
            });
var format_TACMinistrioPblico9unid_280 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_280 = format_TACMinistrioPblico9unid_280.readFeatures(json_TACMinistrioPblico9unid_280, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_280 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_280.addFeatures(features_TACMinistrioPblico9unid_280);
var lyr_TACMinistrioPblico9unid_280 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_280, 
                style: style_TACMinistrioPblico9unid_280,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_280.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_281 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_281 = format_TACMinistrioPblico9unid_281.readFeatures(json_TACMinistrioPblico9unid_281, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_281 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_281.addFeatures(features_TACMinistrioPblico9unid_281);
var lyr_TACMinistrioPblico9unid_281 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_281, 
                style: style_TACMinistrioPblico9unid_281,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_281.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TCRACETESB28unid_282 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_282 = format_TCRACETESB28unid_282.readFeatures(json_TCRACETESB28unid_282, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_282 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_282.addFeatures(features_TCRACETESB28unid_282);
var lyr_TCRACETESB28unid_282 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_282, 
                style: style_TCRACETESB28unid_282,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_282.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESB28unid_283 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_283 = format_TCRACETESB28unid_283.readFeatures(json_TCRACETESB28unid_283, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_283 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_283.addFeatures(features_TCRACETESB28unid_283);
var lyr_TCRACETESB28unid_283 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_283, 
                style: style_TCRACETESB28unid_283,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_283.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESBPARCELAMENTO11unid_284 = new ol.format.GeoJSON();
var features_TCRACETESBPARCELAMENTO11unid_284 = format_TCRACETESBPARCELAMENTO11unid_284.readFeatures(json_TCRACETESBPARCELAMENTO11unid_284, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESBPARCELAMENTO11unid_284 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESBPARCELAMENTO11unid_284.addFeatures(features_TCRACETESBPARCELAMENTO11unid_284);
var lyr_TCRACETESBPARCELAMENTO11unid_284 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESBPARCELAMENTO11unid_284, 
                style: style_TCRACETESBPARCELAMENTO11unid_284,
                popuplayertitle: 'TCRA CETESB / PARCELAMENTO (11 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESBPARCELAMENTO11unid_284.png" /> TCRA CETESB / PARCELAMENTO (11 unid.)'
            });
var format_TCRACETESBPARCELAMENTO11unid_285 = new ol.format.GeoJSON();
var features_TCRACETESBPARCELAMENTO11unid_285 = format_TCRACETESBPARCELAMENTO11unid_285.readFeatures(json_TCRACETESBPARCELAMENTO11unid_285, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESBPARCELAMENTO11unid_285 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESBPARCELAMENTO11unid_285.addFeatures(features_TCRACETESBPARCELAMENTO11unid_285);
var lyr_TCRACETESBPARCELAMENTO11unid_285 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESBPARCELAMENTO11unid_285, 
                style: style_TCRACETESBPARCELAMENTO11unid_285,
                popuplayertitle: 'TCRA CETESB / PARCELAMENTO (11 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESBPARCELAMENTO11unid_285.png" /> TCRA CETESB / PARCELAMENTO (11 unid.)'
            });
var format_TCRAMunicipal14unid_286 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_286 = format_TCRAMunicipal14unid_286.readFeatures(json_TCRAMunicipal14unid_286, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_286 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_286.addFeatures(features_TCRAMunicipal14unid_286);
var lyr_TCRAMunicipal14unid_286 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_286, 
                style: style_TCRAMunicipal14unid_286,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_286.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRAMunicipal14unid_287 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_287 = format_TCRAMunicipal14unid_287.readFeatures(json_TCRAMunicipal14unid_287, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_287 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_287.addFeatures(features_TCRAMunicipal14unid_287);
var lyr_TCRAMunicipal14unid_287 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_287, 
                style: style_TCRAMunicipal14unid_287,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_287.png" /> TCRA Municipal (14 unid.)'
            });
var format_TRPRLCETESB2unid_288 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_288 = format_TRPRLCETESB2unid_288.readFeatures(json_TRPRLCETESB2unid_288, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_288 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_288.addFeatures(features_TRPRLCETESB2unid_288);
var lyr_TRPRLCETESB2unid_288 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_288, 
                style: style_TRPRLCETESB2unid_288,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_288.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_289 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_289 = format_TRPRLCETESB2unid_289.readFeatures(json_TRPRLCETESB2unid_289, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_289 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_289.addFeatures(features_TRPRLCETESB2unid_289);
var lyr_TRPRLCETESB2unid_289 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_289, 
                style: style_TRPRLCETESB2unid_289,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_289.png" /> TRPRL CETESB (2 unid.)'
            });
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica1unid_274,lyr_AoCivilPblica1unid_275,lyr_CartaAnuncia20unid_276,lyr_CartaAnuncia19unid_277,lyr_PlantioVoluntrio1unid_278,lyr_PlantioVoluntrio1unid_279,lyr_TACMinistrioPblico9unid_280,lyr_TACMinistrioPblico9unid_281,lyr_TCRACETESB28unid_282,lyr_TCRACETESB28unid_283,lyr_TCRACETESBPARCELAMENTO11unid_284,lyr_TCRACETESBPARCELAMENTO11unid_285,lyr_TCRAMunicipal14unid_286,lyr_TCRAMunicipal14unid_287,lyr_TRPRLCETESB2unid_288,lyr_TRPRLCETESB2unid_289,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_APP156unid230392892m_254,lyr_readeUsoEspecial276unid271190268m_255,lyr_reaInstitucional224unid133042345m_256,lyr_reaPatrimonial33unid15807656m_257,lyr_LoteamentoFechado115unid52603608m_258,lyr_reaVerde1946unid805735618m_259,lyr_Lote251unid7505210m_260,lyr_Lote251unid_261,lyr_LoteEdificao20unid508062m_262,lyr_LoteEdificao20unid_263,lyr_LeiloLEIN97542025Homologado4unid334770m_264,lyr_LeiloLEIN97542025Homologado4unid_265,lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266,lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_267,lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268,lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_269,lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270,lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_271,lyr_LoteEMDEF10unid218783m_272,lyr_LoteEMDEF10unid_273,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_ClassesdeRiscoIPT = new ol.layer.Group({
                                layers: [lyr_ClasseVB_244,lyr_ClasseVA_245,lyr_ClasseIVC_246,lyr_ClasseIVB_247,lyr_ClasseIVA_248,lyr_ClasseIIIC_249,lyr_ClasseIIIB_250,lyr_ClasseIIIA_251,lyr_ClasseII_252,lyr_ClasseI_253,],
                                fold: 'close',
                                title: 'Classes de Risco IPT'});
var group_ControleAreoPlanoBsicodeZonadeProteodeAerdromo = new ol.layer.Group({
                                layers: [lyr_PBZPAEdifcioPrimeHELIPONTO_240,lyr_PBZPAEdifcioPrimeHELIPONTO_241,lyr_PBZPAHospitalHELIPONTO_242,lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243,],
                                fold: 'close',
                                title: 'Controle Aéreo – Plano Básico de Zona de Proteção de Aeródromo'});
var group_Declividade = new ol.layer.Group({
                                layers: [lyr_DeclividadeZonaUrbanaCopernicus30m_237,lyr_DeclividadeZonaRuralSulCopernicus30m_238,lyr_DeclividadeZonaRuralNorteCopernicus30m_239,],
                                fold: 'close',
                                title: 'Declividade'});
var group_Diversos = new ol.layer.Group({
                                layers: [lyr_rvoreImuneaoCorte9unid_235,lyr_Voorocas26unid_236,],
                                fold: 'close',
                                title: 'Diversos'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_reaN_219,lyr_ConjuntoHabitacional_220,lyr_AvdeacessoaoHortoeColgioAgrcola_221,lyr_reaK_222,lyr_reaJ_223,lyr_reaI_224,lyr_reaH_225,lyr_reaG_226,lyr_reaF_227,lyr_reaE_228,lyr_reaD_229,lyr_reaC_230,lyr_reaB_231,lyr_reaA_232,lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_233,lyr_reaaseraverbadaPartedareaG_234,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_ParqueZumbidosPalmares_209,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211,lyr_AntigoAterrodasMaritacas_212,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215,lyr_AntigoAterrodaFazendaMunicipal_216,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_204,lyr_RiosDuplos84unid_205,lyr_MassasDgua270unid_206,lyr_RiosSimples1842unid_207,lyr_Nascentes821unid_208,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_LoteamentosClandestinos = new ol.layer.Group({
                                layers: [lyr_LoteamentosClandestinosEmmonitoramento1unid_194,lyr_LoteamentosClandestinosEmregularizao36unid_195,lyr_LoteamentosClandestinosNotificado4unid_196,lyr_LoteamentosClandestinosNotificar25unid_197,lyr_LoteamentosClandestinosVerificar2unid_198,lyr_LoteamentosClandestinosEmmonitoramento1unid_199,lyr_LoteamentosClandestinosEmregularizao36unid_200,lyr_LoteamentosClandestinosNotificado4unid_201,lyr_LoteamentosClandestinosNotificar25unid_202,lyr_LoteamentosClandestinosVerificar2unid_203,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos'});
var group_LoteamentosCondomniosParcelamentodoSolo = new ol.layer.Group({
                                layers: [lyr_Vivenna_52,lyr_Vivenna_53,lyr_VittaSoVicente_54,lyr_VittaSoVicente_55,lyr_VittaAlvorada_56,lyr_VittaAlvorada_57,lyr_VillaDiEspanhaIII_58,lyr_VillaDiEspanhaIII_59,lyr_VillaPucci_60,lyr_VillaPucci_61,lyr_VillaDoratta_62,lyr_VillaDoratta_63,lyr_VillaBella_64,lyr_VillaBella_65,lyr_Versalhes_66,lyr_Versalhes_67,lyr_TorontoResidence_68,lyr_TorontoResidence_69,lyr_TerraNova_70,lyr_TerraNova_71,lyr_Sonetto_72,lyr_Sonetto_73,lyr_ServidoRamal138kVFranca4Guanabara_74,lyr_ServidoRamal138kVFranca4Guanabara_75,lyr_SoCarlosII_76,lyr_SoCarlosII_77,lyr_SantaLina_78,lyr_SantaLina_79,lyr_ResidencialYasminTorres_80,lyr_ResidencialYasminTorres_81,lyr_ResidencialSoCarlosI_82,lyr_ResidencialSoCarlosI_83,lyr_ResidencialSantaIns_84,lyr_ResidencialSantaIns_85,lyr_ResidencialSantaF_86,lyr_ResidencialSantaF_87,lyr_ResidencialQuintadosOtis_88,lyr_ResidencialQuintadosOtis_89,lyr_ResidencialQuintadoSol_90,lyr_ResidencialQuintadoSol_91,lyr_ResidencialPousoAlegreII_92,lyr_ResidencialPousoAlegreII_93,lyr_ResidencialPousoAlegre_94,lyr_ResidencialPousoAlegre_95,lyr_ResidencialNairRetuciII_96,lyr_ResidencialNairRetuciII_97,lyr_ResidencialNairRetuci_98,lyr_ResidencialNairRetuci_99,lyr_ResidencialMoradadoBosque_100,lyr_ResidencialMoradadoBosque_101,lyr_ResidencialMarthaHelena_102,lyr_ResidencialMarthaHelena_103,lyr_ResidencialMarioTasso_104,lyr_ResidencialMarioTasso_105,lyr_ResidencialJabuticabeiras_106,lyr_ResidencialJabuticabeiras_107,lyr_ResidencialDomingosJardini_108,lyr_ResidencialDomingosJardini_109,lyr_ResidencialCintraAlves_110,lyr_ResidencialCintraAlves_111,lyr_ResidencialBoaVista_112,lyr_ResidencialBoaVista_113,lyr_ResidencialAltodaFazenda_114,lyr_ResidencialAltodaFazenda_115,lyr_RecantoMeneghetti_116,lyr_RecantoMeneghetti_117,lyr_ParqueVillaLobos_118,lyr_ParqueVillaLobos_119,lyr_ParquePalmeiraImperial_120,lyr_ParquePalmeiraImperial_121,lyr_ParqueFlora_122,lyr_ParqueFlora_123,lyr_ParquedosSabias_124,lyr_ParquedosSabias_125,lyr_ParagonII_126,lyr_ParagonII_127,lyr_Paragon_128,lyr_Paragon_129,lyr_PalmeiraReal_130,lyr_PalmeiraReal_131,lyr_MoradadoVerdeII_132,lyr_MoradadoVerdeII_133,lyr_MoradadaMata_134,lyr_MoradadaMata_135,lyr_Montli_136,lyr_Montli_137,lyr_MontBlancResidence_138,lyr_MontBlancResidence_139,lyr_MarianaAlarcon_140,lyr_MarianaAlarcon_141,lyr_Loteamentolamo_142,lyr_Loteamentolamo_143,lyr_JardimMariaLuiza_144,lyr_JardimMariaLuiza_145,lyr_JardimHorizonte_146,lyr_JardimHorizonte_147,lyr_JardimFlora_148,lyr_JardimFlora_149,lyr_IrineuZanettiII_150,lyr_IrineuZanettiII_151,lyr_Infratecnica_152,lyr_Infratecnica_153,lyr_HorizResidence_154,lyr_HorizResidence_155,lyr_Ferracini_156,lyr_Ferracini_157,lyr_FazendaProgresso_158,lyr_FazendaProgresso_159,lyr_Essence_160,lyr_Essence_161,lyr_Elias_162,lyr_Elias_163,lyr_EdificioSolNascente_164,lyr_EdificioSolNascente_165,lyr_EdificioRuadoSol_166,lyr_EdificioRuadoSol_167,lyr_EdificioResidencialHope_168,lyr_EdificioResidencialHope_169,lyr_DiocesedeFranca_170,lyr_DiocesedeFranca_171,lyr_DaVinci_172,lyr_DaVinci_173,lyr_CondomnioIICityPetrpolis_174,lyr_CondomnioIICityPetrpolis_175,lyr_CondomnioICityPetrpolis_176,lyr_CondomnioICityPetrpolis_177,lyr_Colorado_178,lyr_Colorado_179,lyr_CidadeJardim_180,lyr_CidadeJardim_181,lyr_BordadaMata_182,lyr_BordadaMata_183,lyr_Arizona_184,lyr_Arizona_185,lyr_Adonis_186,lyr_Adonis_187,lyr_AbuDhabiParadiseResortResidence_188,lyr_AbuDhabiParadiseResortResidence_189,lyr_EtapaAprovado27unid_190,lyr_EtapaDiretriz8unid_191,lyr_EtapaDefinitiva7unid_192,lyr_EtapaPrvia24unid_193,],
                                fold: 'close',
                                title: 'Loteamentos/Condomínios – Parcelamento do Solo'});
var group_LoteamentosRegularizadosREURB = new ol.layer.Group({
                                layers: [lyr_LoteamentosClandestinosRegularizado9unid_50,lyr_LoteamentosClandestinosRegularizado9unid_51,],
                                fold: 'close',
                                title: 'Loteamentos Regularizados - REURB'});
var group_RelatrioAmbiental = new ol.layer.Group({
                                layers: [lyr_FazendaBarroPretoeBambus_43,lyr_Matrcula106206_44,lyr_RecantoEmanuelMatrcula95782_45,lyr_RecantoEmanuelMatrcula95783_46,lyr_PortaldosIndaias_47,lyr_StioNossaSenhoraAparecida_48,lyr_LoteamentosClandestinos3unid_49,],
                                fold: 'close',
                                title: 'Relatório Ambiental'});
var group_SistemaVirio = new ol.layer.Group({
                                layers: [lyr_SistemaVirioExpansodosistemavirio_34,lyr_SistemaVirioRodovias_35,lyr_SistemaVirioRodoviasViasarteriais_36,lyr_SistemaVirioSistemavirioprincipal_37,lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38,lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39,lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40,lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41,lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42,],
                                fold: 'close',
                                title: 'Sistema Viário'});
var group_Zoneamento = new ol.layer.Group({
                                layers: [lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21,lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22,lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23,lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24,lyr_MacrozonasMacrozonadoRioCanoas_25,lyr_MacrozonasSubMacrozonadeExpansoUrbana_26,lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27,lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28,lyr_ExpansoUrbanaLCN0502003_29,lyr_ExpansoUrbanaLCN1402009_30,lyr_ExpansoUrbanaLCN2352013_31,lyr_ExpansoUrbanaLCN3242019_32,lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33,],
                                fold: 'close',
                                title: 'Zoneamento'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_5,lyr_AROreadeAmortecimento_6,lyr_AROFaixadeCuestas_7,lyr_AROAPP_8,lyr_ARAIncongrunciasemAPP_9,lyr_ARAETELagoas_10,lyr_ARAAterros_11,lyr_AODreaUrbanaConsolidada_12,lyr_AODBaixaDensidadeNvel3_13,lyr_AODBaixaDensidadeNvel2_14,lyr_AODBaixaDensidadeNvel1_15,lyr_AODAUSFase2_16,lyr_AODAUSFase1_17,lyr_LimitedaBaciadoRioCanoasLeiC4322024_18,lyr_LimitedaBaciadoRioCanoasLeiC1002006_19,lyr_DelimitaodaBaciadoRibeirodaOna_20,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_ZonaCartogrficaMapaBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,],
                                fold: 'close',
                                title: 'Zona Cartográfica / Mapa Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_ARORemanescentesFlorestais_5.setVisible(false);lyr_AROreadeAmortecimento_6.setVisible(false);lyr_AROFaixadeCuestas_7.setVisible(false);lyr_AROAPP_8.setVisible(false);lyr_ARAIncongrunciasemAPP_9.setVisible(false);lyr_ARAETELagoas_10.setVisible(false);lyr_ARAAterros_11.setVisible(false);lyr_AODreaUrbanaConsolidada_12.setVisible(false);lyr_AODBaixaDensidadeNvel3_13.setVisible(false);lyr_AODBaixaDensidadeNvel2_14.setVisible(false);lyr_AODBaixaDensidadeNvel1_15.setVisible(false);lyr_AODAUSFase2_16.setVisible(false);lyr_AODAUSFase1_17.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_20.setVisible(false);lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.setVisible(false);lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.setVisible(false);lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.setVisible(false);lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.setVisible(false);lyr_MacrozonasMacrozonadoRioCanoas_25.setVisible(false);lyr_MacrozonasSubMacrozonadeExpansoUrbana_26.setVisible(false);lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27.setVisible(false);lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28.setVisible(false);lyr_ExpansoUrbanaLCN0502003_29.setVisible(false);lyr_ExpansoUrbanaLCN1402009_30.setVisible(false);lyr_ExpansoUrbanaLCN2352013_31.setVisible(false);lyr_ExpansoUrbanaLCN3242019_32.setVisible(false);lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.setVisible(false);lyr_SistemaVirioExpansodosistemavirio_34.setVisible(false);lyr_SistemaVirioRodovias_35.setVisible(false);lyr_SistemaVirioRodoviasViasarteriais_36.setVisible(false);lyr_SistemaVirioSistemavirioprincipal_37.setVisible(false);lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.setVisible(false);lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.setVisible(false);lyr_FazendaBarroPretoeBambus_43.setVisible(false);lyr_Matrcula106206_44.setVisible(false);lyr_RecantoEmanuelMatrcula95782_45.setVisible(false);lyr_RecantoEmanuelMatrcula95783_46.setVisible(false);lyr_PortaldosIndaias_47.setVisible(false);lyr_StioNossaSenhoraAparecida_48.setVisible(false);lyr_LoteamentosClandestinos3unid_49.setVisible(false);lyr_LoteamentosClandestinosRegularizado9unid_50.setVisible(false);lyr_LoteamentosClandestinosRegularizado9unid_51.setVisible(false);lyr_Vivenna_52.setVisible(false);lyr_Vivenna_53.setVisible(false);lyr_VittaSoVicente_54.setVisible(false);lyr_VittaSoVicente_55.setVisible(false);lyr_VittaAlvorada_56.setVisible(false);lyr_VittaAlvorada_57.setVisible(false);lyr_VillaDiEspanhaIII_58.setVisible(false);lyr_VillaDiEspanhaIII_59.setVisible(false);lyr_VillaPucci_60.setVisible(false);lyr_VillaPucci_61.setVisible(false);lyr_VillaDoratta_62.setVisible(false);lyr_VillaDoratta_63.setVisible(false);lyr_VillaBella_64.setVisible(false);lyr_VillaBella_65.setVisible(false);lyr_Versalhes_66.setVisible(false);lyr_Versalhes_67.setVisible(false);lyr_TorontoResidence_68.setVisible(false);lyr_TorontoResidence_69.setVisible(false);lyr_TerraNova_70.setVisible(false);lyr_TerraNova_71.setVisible(false);lyr_Sonetto_72.setVisible(false);lyr_Sonetto_73.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_74.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_75.setVisible(false);lyr_SoCarlosII_76.setVisible(false);lyr_SoCarlosII_77.setVisible(false);lyr_SantaLina_78.setVisible(false);lyr_SantaLina_79.setVisible(false);lyr_ResidencialYasminTorres_80.setVisible(false);lyr_ResidencialYasminTorres_81.setVisible(false);lyr_ResidencialSoCarlosI_82.setVisible(false);lyr_ResidencialSoCarlosI_83.setVisible(false);lyr_ResidencialSantaIns_84.setVisible(false);lyr_ResidencialSantaIns_85.setVisible(false);lyr_ResidencialSantaF_86.setVisible(false);lyr_ResidencialSantaF_87.setVisible(false);lyr_ResidencialQuintadosOtis_88.setVisible(false);lyr_ResidencialQuintadosOtis_89.setVisible(false);lyr_ResidencialQuintadoSol_90.setVisible(false);lyr_ResidencialQuintadoSol_91.setVisible(false);lyr_ResidencialPousoAlegreII_92.setVisible(false);lyr_ResidencialPousoAlegreII_93.setVisible(false);lyr_ResidencialPousoAlegre_94.setVisible(false);lyr_ResidencialPousoAlegre_95.setVisible(false);lyr_ResidencialNairRetuciII_96.setVisible(false);lyr_ResidencialNairRetuciII_97.setVisible(false);lyr_ResidencialNairRetuci_98.setVisible(false);lyr_ResidencialNairRetuci_99.setVisible(false);lyr_ResidencialMoradadoBosque_100.setVisible(false);lyr_ResidencialMoradadoBosque_101.setVisible(false);lyr_ResidencialMarthaHelena_102.setVisible(false);lyr_ResidencialMarthaHelena_103.setVisible(false);lyr_ResidencialMarioTasso_104.setVisible(false);lyr_ResidencialMarioTasso_105.setVisible(false);lyr_ResidencialJabuticabeiras_106.setVisible(false);lyr_ResidencialJabuticabeiras_107.setVisible(false);lyr_ResidencialDomingosJardini_108.setVisible(false);lyr_ResidencialDomingosJardini_109.setVisible(false);lyr_ResidencialCintraAlves_110.setVisible(false);lyr_ResidencialCintraAlves_111.setVisible(false);lyr_ResidencialBoaVista_112.setVisible(false);lyr_ResidencialBoaVista_113.setVisible(false);lyr_ResidencialAltodaFazenda_114.setVisible(false);lyr_ResidencialAltodaFazenda_115.setVisible(false);lyr_RecantoMeneghetti_116.setVisible(false);lyr_RecantoMeneghetti_117.setVisible(false);lyr_ParqueVillaLobos_118.setVisible(false);lyr_ParqueVillaLobos_119.setVisible(false);lyr_ParquePalmeiraImperial_120.setVisible(false);lyr_ParquePalmeiraImperial_121.setVisible(false);lyr_ParqueFlora_122.setVisible(false);lyr_ParqueFlora_123.setVisible(false);lyr_ParquedosSabias_124.setVisible(false);lyr_ParquedosSabias_125.setVisible(false);lyr_ParagonII_126.setVisible(false);lyr_ParagonII_127.setVisible(false);lyr_Paragon_128.setVisible(false);lyr_Paragon_129.setVisible(false);lyr_PalmeiraReal_130.setVisible(false);lyr_PalmeiraReal_131.setVisible(false);lyr_MoradadoVerdeII_132.setVisible(false);lyr_MoradadoVerdeII_133.setVisible(false);lyr_MoradadaMata_134.setVisible(false);lyr_MoradadaMata_135.setVisible(false);lyr_Montli_136.setVisible(false);lyr_Montli_137.setVisible(false);lyr_MontBlancResidence_138.setVisible(false);lyr_MontBlancResidence_139.setVisible(false);lyr_MarianaAlarcon_140.setVisible(false);lyr_MarianaAlarcon_141.setVisible(false);lyr_Loteamentolamo_142.setVisible(false);lyr_Loteamentolamo_143.setVisible(false);lyr_JardimMariaLuiza_144.setVisible(false);lyr_JardimMariaLuiza_145.setVisible(false);lyr_JardimHorizonte_146.setVisible(false);lyr_JardimHorizonte_147.setVisible(false);lyr_JardimFlora_148.setVisible(false);lyr_JardimFlora_149.setVisible(false);lyr_IrineuZanettiII_150.setVisible(false);lyr_IrineuZanettiII_151.setVisible(false);lyr_Infratecnica_152.setVisible(false);lyr_Infratecnica_153.setVisible(false);lyr_HorizResidence_154.setVisible(false);lyr_HorizResidence_155.setVisible(false);lyr_Ferracini_156.setVisible(false);lyr_Ferracini_157.setVisible(false);lyr_FazendaProgresso_158.setVisible(false);lyr_FazendaProgresso_159.setVisible(false);lyr_Essence_160.setVisible(false);lyr_Essence_161.setVisible(false);lyr_Elias_162.setVisible(false);lyr_Elias_163.setVisible(false);lyr_EdificioSolNascente_164.setVisible(false);lyr_EdificioSolNascente_165.setVisible(false);lyr_EdificioRuadoSol_166.setVisible(false);lyr_EdificioRuadoSol_167.setVisible(false);lyr_EdificioResidencialHope_168.setVisible(false);lyr_EdificioResidencialHope_169.setVisible(false);lyr_DiocesedeFranca_170.setVisible(false);lyr_DiocesedeFranca_171.setVisible(false);lyr_DaVinci_172.setVisible(false);lyr_DaVinci_173.setVisible(false);lyr_CondomnioIICityPetrpolis_174.setVisible(false);lyr_CondomnioIICityPetrpolis_175.setVisible(false);lyr_CondomnioICityPetrpolis_176.setVisible(false);lyr_CondomnioICityPetrpolis_177.setVisible(false);lyr_Colorado_178.setVisible(false);lyr_Colorado_179.setVisible(false);lyr_CidadeJardim_180.setVisible(false);lyr_CidadeJardim_181.setVisible(false);lyr_BordadaMata_182.setVisible(false);lyr_BordadaMata_183.setVisible(false);lyr_Arizona_184.setVisible(false);lyr_Arizona_185.setVisible(false);lyr_Adonis_186.setVisible(false);lyr_Adonis_187.setVisible(false);lyr_AbuDhabiParadiseResortResidence_188.setVisible(false);lyr_AbuDhabiParadiseResortResidence_189.setVisible(false);lyr_EtapaAprovado27unid_190.setVisible(false);lyr_EtapaDiretriz8unid_191.setVisible(false);lyr_EtapaDefinitiva7unid_192.setVisible(false);lyr_EtapaPrvia24unid_193.setVisible(false);lyr_LoteamentosClandestinosEmmonitoramento1unid_194.setVisible(false);lyr_LoteamentosClandestinosEmregularizao36unid_195.setVisible(false);lyr_LoteamentosClandestinosNotificado4unid_196.setVisible(false);lyr_LoteamentosClandestinosNotificar25unid_197.setVisible(false);lyr_LoteamentosClandestinosVerificar2unid_198.setVisible(false);lyr_LoteamentosClandestinosEmmonitoramento1unid_199.setVisible(false);lyr_LoteamentosClandestinosEmregularizao36unid_200.setVisible(false);lyr_LoteamentosClandestinosNotificado4unid_201.setVisible(false);lyr_LoteamentosClandestinosNotificar25unid_202.setVisible(false);lyr_LoteamentosClandestinosVerificar2unid_203.setVisible(false);lyr_APP1745unid_204.setVisible(false);lyr_RiosDuplos84unid_205.setVisible(false);lyr_MassasDgua270unid_206.setVisible(false);lyr_RiosSimples1842unid_207.setVisible(false);lyr_Nascentes821unid_208.setVisible(false);lyr_ParqueZumbidosPalmares_209.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211.setVisible(false);lyr_AntigoAterrodasMaritacas_212.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_216.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218.setVisible(false);lyr_reaN_219.setVisible(false);lyr_ConjuntoHabitacional_220.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_221.setVisible(false);lyr_reaK_222.setVisible(false);lyr_reaJ_223.setVisible(false);lyr_reaI_224.setVisible(false);lyr_reaH_225.setVisible(false);lyr_reaG_226.setVisible(false);lyr_reaF_227.setVisible(false);lyr_reaE_228.setVisible(false);lyr_reaD_229.setVisible(false);lyr_reaC_230.setVisible(false);lyr_reaB_231.setVisible(false);lyr_reaA_232.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_233.setVisible(false);lyr_reaaseraverbadaPartedareaG_234.setVisible(false);lyr_rvoreImuneaoCorte9unid_235.setVisible(false);lyr_Voorocas26unid_236.setVisible(false);lyr_DeclividadeZonaUrbanaCopernicus30m_237.setVisible(false);lyr_DeclividadeZonaRuralSulCopernicus30m_238.setVisible(false);lyr_DeclividadeZonaRuralNorteCopernicus30m_239.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_240.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_241.setVisible(false);lyr_PBZPAHospitalHELIPONTO_242.setVisible(false);lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243.setVisible(false);lyr_ClasseVB_244.setVisible(false);lyr_ClasseVA_245.setVisible(false);lyr_ClasseIVC_246.setVisible(false);lyr_ClasseIVB_247.setVisible(false);lyr_ClasseIVA_248.setVisible(false);lyr_ClasseIIIC_249.setVisible(false);lyr_ClasseIIIB_250.setVisible(false);lyr_ClasseIIIA_251.setVisible(false);lyr_ClasseII_252.setVisible(false);lyr_ClasseI_253.setVisible(false);lyr_APP156unid230392892m_254.setVisible(false);lyr_readeUsoEspecial276unid271190268m_255.setVisible(false);lyr_reaInstitucional224unid133042345m_256.setVisible(false);lyr_reaPatrimonial33unid15807656m_257.setVisible(false);lyr_LoteamentoFechado115unid52603608m_258.setVisible(false);lyr_reaVerde1946unid805735618m_259.setVisible(false);lyr_Lote251unid7505210m_260.setVisible(false);lyr_Lote251unid_261.setVisible(false);lyr_LoteEdificao20unid508062m_262.setVisible(false);lyr_LoteEdificao20unid_263.setVisible(false);lyr_LeiloLEIN97542025Homologado4unid334770m_264.setVisible(false);lyr_LeiloLEIN97542025Homologado4unid_265.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_267.setVisible(false);lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268.setVisible(false);lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_269.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_271.setVisible(false);lyr_LoteEMDEF10unid218783m_272.setVisible(false);lyr_LoteEMDEF10unid_273.setVisible(false);lyr_AoCivilPblica1unid_274.setVisible(false);lyr_AoCivilPblica1unid_275.setVisible(false);lyr_CartaAnuncia20unid_276.setVisible(false);lyr_CartaAnuncia19unid_277.setVisible(false);lyr_PlantioVoluntrio1unid_278.setVisible(false);lyr_PlantioVoluntrio1unid_279.setVisible(false);lyr_TACMinistrioPblico9unid_280.setVisible(false);lyr_TACMinistrioPblico9unid_281.setVisible(false);lyr_TCRACETESB28unid_282.setVisible(false);lyr_TCRACETESB28unid_283.setVisible(false);lyr_TCRACETESBPARCELAMENTO11unid_284.setVisible(false);lyr_TCRACETESBPARCELAMENTO11unid_285.setVisible(false);lyr_TCRAMunicipal14unid_286.setVisible(false);lyr_TCRAMunicipal14unid_287.setVisible(false);lyr_TRPRLCETESB2unid_288.setVisible(false);lyr_TRPRLCETESB2unid_289.setVisible(false);
var layersList = [group_ZonaCartogrficaMapaBase,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_Zoneamento,group_SistemaVirio,group_RelatrioAmbiental,group_LoteamentosRegularizadosREURB,group_LoteamentosCondomniosParcelamentodoSolo,group_LoteamentosClandestinos,group_HidrografiaFBDS2025,group_GerenciamentodereasContaminadas,group_FazendaMunicipalPousoAlto,group_Diversos,group_Declividade,group_ControleAreoPlanoBsicodeZonadeProteodeAerdromo,group_ClassesdeRiscoIPT,group_reasPblicas,group_reasCompromissadas];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_reaUrbanadeFranca_4.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Código da UF': 'Código da UF', 'Classe de Uso': 'Classe de Uso', 'Área (ha)': 'Área (ha)', 'Área (km²)': 'Área (km²)', });
lyr_ARORemanescentesFlorestais_5.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_6.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_7.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_8.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_9.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_10.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_11.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_12.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_13.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_14.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_15.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_16.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'SUM_area': 'SUM_area', 'FIRST_AI': 'FIRST_AI', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_17.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_MacrozonasMacrozonadoRioCanoas_25.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_MacrozonasSubMacrozonadeExpansoUrbana_26.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_ExpansoUrbanaLCN0502003_29.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpansoUrbanaLCN1402009_30.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpansoUrbanaLCN2352013_31.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpansoUrbanaLCN3242019_32.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_SistemaVirioExpansodosistemavirio_34.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioRodovias_35.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioRodoviasViasarteriais_36.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioSistemavirioprincipal_37.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_FazendaBarroPretoeBambus_43.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_Matrcula106206_44.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_RecantoEmanuelMatrcula95782_45.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_RecantoEmanuelMatrcula95783_46.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_PortaldosIndaias_47.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_StioNossaSenhoraAparecida_48.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_LoteamentosClandestinos3unid_49.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'area': 'area', 'multa': 'multa', 'ufmf': 'ufmf', });
lyr_LoteamentosClandestinosRegularizado9unid_50.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosRegularizado9unid_51.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_Vivenna_52.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Vivenna_53.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_54.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_55.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_VittaAlvorada_56.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_57.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_VillaDiEspanhaIII_58.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDiEspanhaIII_59.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_60.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_61.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_62.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_63.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_64.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_65.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_66.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_67.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_TorontoResidence_68.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_69.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_70.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_71.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_72.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_73.set('fieldAliases', {'fid': 'fid', });
lyr_ServidoRamal138kVFranca4Guanabara_74.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_75.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_SoCarlosII_76.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SoCarlosII_77.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantaLina_78.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantaLina_79.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_80.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_81.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_ResidencialSoCarlosI_82.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_83.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_ResidencialSantaIns_84.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_85.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_ResidencialSantaF_86.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_87.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOtis_88.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOtis_89.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_ResidencialQuintadoSol_90.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_91.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_92.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_93.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_94.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_95.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialNairRetuciII_96.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialNairRetuciII_97.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialNairRetuci_98.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialNairRetuci_99.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_100.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_101.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_102.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_103.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_ResidencialMarioTasso_104.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_105.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_106.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_107.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_108.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_109.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_110.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_111.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_112.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_113.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_114.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_115.set('fieldAliases', {'fid': 'fid', });
lyr_RecantoMeneghetti_116.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_117.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_118.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_119.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_120.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_121.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_122.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_123.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_124.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_125.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonII_126.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonII_127.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_128.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_129.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_131.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_MoradadoVerdeII_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Montli_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Montli_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_MontBlancResidence_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MarianaAlarcon_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MarianaAlarcon_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Loteamentolamo_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Loteamentolamo_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_148.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_149.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanettiII_150.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanettiII_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratecnica_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratecnica_153.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_155.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_156.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_157.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_158.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_159.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_160.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_161.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_162.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_163.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EdificioSolNascente_164.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdificioSolNascente_165.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EdificioRuadoSol_166.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdificioRuadoSol_167.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdificioResidencialHope_168.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdificioResidencialHope_169.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_170.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_171.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_172.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_173.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_174.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_175.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_176.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_177.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_178.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_179.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_180.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_181.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_182.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_183.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arizona_184.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arizona_185.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Adonis_186.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Adonis_187.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_188.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_189.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EtapaAprovado27unid_190.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDiretriz8unid_191.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDefinitiva7unid_192.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaPrvia24unid_193.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_LoteamentosClandestinosEmmonitoramento1unid_194.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosEmregularizao36unid_195.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosNotificado4unid_196.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosNotificar25unid_197.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosVerificar2unid_198.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosEmmonitoramento1unid_199.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosEmregularizao36unid_200.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosNotificado4unid_201.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosNotificar25unid_202.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosVerificar2unid_203.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_APP1745unid_204.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_205.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_206.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_207.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_208.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_ParqueZumbidosPalmares_209.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacas_212.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodaFazendaMunicipal_216.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217.set('fieldAliases', {'fid': 'fid', 'Field1': 'Poço', 'Field2': 'Field2', 'Field3': 'Field3', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Poço', });
lyr_reaN_219.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_ConjuntoHabitacional_220.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_AvdeacessoaoHortoeColgioAgrcola_221.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaK_222.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaJ_223.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaI_224.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaH_225.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaG_226.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaF_227.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaE_228.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaD_229.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaC_230.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaB_231.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaA_232.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_233.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaaseraverbadaPartedareaG_234.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_rvoreImuneaoCorte9unid_235.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_Voorocas26unid_236.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_DeclividadeZonaUrbanaCopernicus30m_237.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_DeclividadeZonaRuralSulCopernicus30m_238.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_239.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_PBZPAEdifcioPrimeHELIPONTO_240.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAEdifcioPrimeHELIPONTO_241.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAHospitalHELIPONTO_242.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_ClasseVB_244.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'risco_erosao': 'RISCO POTENCIAL DE EROSÃO', 'suscetibilidade_erosao': 'SUSCETIBILIDADE À EROSÃO', 'uso_solo': 'USO DO SOLO PREDOMINANTE', 'setores_relevo': 'SETORES DO RELEVO', 'solos_predominante': 'SOLOS PREDOMINANTES', 'substrato_rochoso': 'SUBSTRATO ROCHOSO', 'processos_erosivos_existentes': 'PROCESSOS EROSIVOS/PROBLEMAS EXISTENTES E ESPERADOS', 'recomendacoes_ocupacao_urbana': 'RECOMENDAÇÕES GERAIS PARA OCUPAÇÃO URBANA', });
lyr_ClasseVA_245.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'risco_erosao': 'RISCO POTENCIAL DE EROSÃO', 'suscetibilidade_erosao': 'SUSCETIBILIDADE À EROSÃO', 'uso_solo': 'USO DO SOLO PREDOMINANTE', 'setores_relevo': 'SETORES DO RELEVO', 'solos_predominante': 'SOLOS PREDOMINANTES', 'substrato_rochoso': 'SUBSTRATO ROCHOSO', 'processos_erosivos_existentes': 'PROCESSOS EROSIVOS/PROBLEMAS EXISTENTES E ESPERADOS', 'recomendacoes_ocupacao_urbana': 'RECOMENDAÇÕES GERAIS PARA OCUPAÇÃO URBANA', });
lyr_ClasseIVC_246.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'risco_erosao': 'RISCO POTENCIAL DE EROSÃO', 'suscetibilidade_erosao': 'SUSCETIBILIDADE À EROSÃO', 'uso_solo': 'USO DO SOLO PREDOMINANTE', 'setores_relevo': 'SETORES DO RELEVO', 'solos_predominante': 'SOLOS PREDOMINANTES', 'substrato_rochoso': 'SUBSTRATO ROCHOSO', 'processos_erosivos_existentes': 'PROCESSOS EROSIVOS/PROBLEMAS EXISTENTES E ESPERADOS', 'recomendacoes_ocupacao_urbana': 'RECOMENDAÇÕES GERAIS PARA OCUPAÇÃO URBANA', });
lyr_ClasseIVB_247.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'risco_erosao': 'RISCO POTENCIAL DE EROSÃO', 'suscetibilidade_erosao': 'SUSCETIBILIDADE À EROSÃO', 'uso_solo': 'USO DO SOLO PREDOMINANTE', 'setores_relevo': 'SETORES DO RELEVO', 'solos_predominante': 'SOLOS PREDOMINANTES', 'substrato_rochoso': 'SUBSTRATO ROCHOSO', 'processos_erosivos_existentes': 'PROCESSOS EROSIVOS/PROBLEMAS EXISTENTES E ESPERADOS', 'recomendacoes_ocupacao_urbana': 'RECOMENDAÇÕES GERAIS PARA OCUPAÇÃO URBANA', });
lyr_ClasseIVA_248.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'risco_erosao': 'RISCO POTENCIAL DE EROSÃO', 'suscetibilidade_erosao': 'SUSCETIBILIDADE À EROSÃO', 'uso_solo': 'USO DO SOLO PREDOMINANTE', 'setores_relevo': 'SETORES DO RELEVO', 'solos_predominante': 'SOLOS PREDOMINANTES', 'substrato_rochoso': 'SUBSTRATO ROCHOSO', 'processos_erosivos_existentes': 'PROCESSOS EROSIVOS/PROBLEMAS EXISTENTES E ESPERADOS', 'recomendacoes_ocupacao_urbana': 'RECOMENDAÇÕES GERAIS PARA OCUPAÇÃO URBANA', });
lyr_ClasseIIIC_249.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'risco_erosao': 'RISCO POTENCIAL DE EROSÃO', 'suscetibilidade_erosao': 'SUSCETIBILIDADE À EROSÃO', 'uso_solo': 'USO DO SOLO PREDOMINANTE', 'setores_relevo': 'SETORES DO RELEVO', 'solos_predominante': 'SOLOS PREDOMINANTES', 'substrato_rochoso': 'SUBSTRATO ROCHOSO', 'processos_erosivos_existentes': 'PROCESSOS EROSIVOS/PROBLEMAS EXISTENTES E ESPERADOS', 'recomendacoes_ocupacao_urbana': 'RECOMENDAÇÕES GERAIS PARA OCUPAÇÃO URBANA', });
lyr_ClasseIIIB_250.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'risco_erosao': 'RISCO POTENCIAL DE EROSÃO', 'suscetibilidade_erosao': 'SUSCETIBILIDADE À EROSÃO', 'uso_solo': 'USO DO SOLO PREDOMINANTE', 'setores_relevo': 'SETORES DO RELEVO', 'solos_predominante': 'SOLOS PREDOMINANTES', 'substrato_rochoso': 'SUBSTRATO ROCHOSO', 'processos_erosivos_existentes': 'PROCESSOS EROSIVOS/PROBLEMAS EXISTENTES E ESPERADOS', 'recomendacoes_ocupacao_urbana': 'RECOMENDAÇÕES GERAIS PARA OCUPAÇÃO URBANA', });
lyr_ClasseIIIA_251.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'risco_erosao': 'RISCO POTENCIAL DE EROSÃO', 'suscetibilidade_erosao': 'SUSCETIBILIDADE À EROSÃO', 'uso_solo': 'USO DO SOLO PREDOMINANTE', 'setores_relevo': 'SETORES DO RELEVO', 'solos_predominante': 'SOLOS PREDOMINANTES', 'substrato_rochoso': 'SUBSTRATO ROCHOSO', 'processos_erosivos_existentes': 'PROCESSOS EROSIVOS/PROBLEMAS EXISTENTES E ESPERADOS', 'recomendacoes_ocupacao_urbana': 'RECOMENDAÇÕES GERAIS PARA OCUPAÇÃO URBANA', });
lyr_ClasseII_252.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'risco_erosao': 'RISCO POTENCIAL DE EROSÃO', 'suscetibilidade_erosao': 'SUSCETIBILIDADE À EROSÃO', 'uso_solo': 'USO DO SOLO PREDOMINANTE', 'setores_relevo': 'SETORES DO RELEVO', 'solos_predominante': 'SOLOS PREDOMINANTES', 'substrato_rochoso': 'SUBSTRATO ROCHOSO', 'processos_erosivos_existentes': 'PROCESSOS EROSIVOS/PROBLEMAS EXISTENTES E ESPERADOS', 'recomendacoes_ocupacao_urbana': 'RECOMENDAÇÕES GERAIS PARA OCUPAÇÃO URBANA', });
lyr_ClasseI_253.set('fieldAliases', {'fid': 'fid', 'classe': 'classe', 'risco_erosao': 'RISCO POTENCIAL DE EROSÃO', 'suscetibilidade_erosao': 'SUSCETIBILIDADE À EROSÃO', 'uso_solo': 'USO DO SOLO PREDOMINANTE', 'setores_relevo': 'SETORES DO RELEVO', 'solos_predominante': 'SOLOS PREDOMINANTES', 'substrato_rochoso': 'SUBSTRATO ROCHOSO', 'processos_erosivos_existentes': 'PROCESSOS EROSIVOS/PROBLEMAS EXISTENTES E ESPERADOS', 'recomendacoes_ocupacao_urbana': 'RECOMENDAÇÕES GERAIS PARA OCUPAÇÃO URBANA', });
lyr_APP156unid230392892m_254.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_readeUsoEspecial276unid271190268m_255.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaInstitucional224unid133042345m_256.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaPatrimonial33unid15807656m_257.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteamentoFechado115unid52603608m_258.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaVerde1946unid805735618m_259.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_Lote251unid7505210m_260.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_Lote251unid_261.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_LoteEdificao20unid508062m_262.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEdificao20unid_263.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'regiao': 'regiao', 'processo': 'processo', });
lyr_LeiloLEIN97542025Homologado4unid334770m_264.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Homologado4unid_265.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_267.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_269.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_271.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LoteEMDEF10unid218783m_272.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEMDEF10unid_273.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_AoCivilPblica1unid_274.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_275.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia20unid_276.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia19unid_277.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio1unid_278.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_279.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico9unid_280.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_281.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB28unid_282.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESB28unid_283.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESBPARCELAMENTO11unid_284.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESBPARCELAMENTO11unid_285.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'proc_cetesb', });
lyr_TCRAMunicipal14unid_286.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal14unid_287.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB2unid_288.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_289.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'CD_MUN': '', 'NM_MUN': '', 'CD_RGI': '', 'NM_RGI': '', 'CD_RGINT': '', 'NM_RGINT': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIA': '', 'NM_REGIA': '', 'SIGLA_RG': '', 'CD_CONCU': '', 'NM_CONCU': '', 'AREA_KM2': '', });
lyr_reaUrbanadeFranca_4.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Código da UF': '', 'Classe de Uso': '', 'Área (ha)': '', 'Área (km²)': '', });
lyr_ARORemanescentesFlorestais_5.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_6.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_7.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_8.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_9.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_10.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_11.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_12.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_13.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_14.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_15.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_16.set('fieldImages', {'fid': '', 'Classe': '', 'SUM_area': '', 'FIRST_AI': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase1_17.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_20.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_MacrozonasMacrozonadoRioCanoas_25.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_MacrozonasSubMacrozonadeExpansoUrbana_26.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27.set('fieldImages', {'fid': 'TextEdit', 'macrozona_urbana': 'TextEdit', });
lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_ExpansoUrbanaLCN0502003_29.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpansoUrbanaLCN1402009_30.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpansoUrbanaLCN2352013_31.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpansoUrbanaLCN3242019_32.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_SistemaVirioExpansodosistemavirio_34.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioRodovias_35.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioRodoviasViasarteriais_36.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioSistemavirioprincipal_37.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_FazendaBarroPretoeBambus_43.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_Matrcula106206_44.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RecantoEmanuelMatrcula95782_45.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RecantoEmanuelMatrcula95783_46.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_PortaldosIndaias_47.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_StioNossaSenhoraAparecida_48.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_LoteamentosClandestinos3unid_49.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_LoteamentosClandestinosRegularizado9unid_50.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinosRegularizado9unid_51.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_Vivenna_52.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Vivenna_53.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_54.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_55.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_VittaAlvorada_56.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_57.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_VillaDiEspanhaIII_58.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDiEspanhaIII_59.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_60.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_61.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_62.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_63.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_64.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_65.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_66.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_67.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_TorontoResidence_68.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_69.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_70.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_71.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_72.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_73.set('fieldImages', {'fid': '', });
lyr_ServidoRamal138kVFranca4Guanabara_74.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_75.set('fieldImages', {'fid': '', 'id': '', });
lyr_SoCarlosII_76.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SoCarlosII_77.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantaLina_78.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantaLina_79.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_80.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_81.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_ResidencialSoCarlosI_82.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_83.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_ResidencialSantaIns_84.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_85.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_ResidencialSantaF_86.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_87.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOtis_88.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOtis_89.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_ResidencialQuintadoSol_90.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_91.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_92.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_93.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_94.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_95.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialNairRetuciII_96.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialNairRetuciII_97.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialNairRetuci_98.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialNairRetuci_99.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_100.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_101.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_102.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_103.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_ResidencialMarioTasso_104.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_105.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_106.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_107.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_108.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_109.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_110.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_111.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_112.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_113.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_114.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_115.set('fieldImages', {'fid': '', });
lyr_RecantoMeneghetti_116.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_117.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_118.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_119.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_120.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_121.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_122.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_123.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_124.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_125.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonII_126.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonII_127.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_128.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_129.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_130.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_131.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_MoradadoVerdeII_132.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_134.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Montli_136.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Montli_137.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_MontBlancResidence_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MarianaAlarcon_140.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MarianaAlarcon_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Loteamentolamo_142.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Loteamentolamo_143.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_144.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_145.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_146.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_147.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_148.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_149.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanettiII_150.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanettiII_151.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratecnica_152.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratecnica_153.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_154.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_155.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_156.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_157.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_158.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_159.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_160.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_161.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Elias_162.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Elias_163.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EdificioSolNascente_164.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdificioSolNascente_165.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EdificioRuadoSol_166.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdificioRuadoSol_167.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdificioResidencialHope_168.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdificioResidencialHope_169.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_170.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_171.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_172.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_173.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_174.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_175.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_176.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_177.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_178.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_179.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_180.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_181.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_182.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_183.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arizona_184.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arizona_185.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Adonis_186.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Adonis_187.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_188.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_189.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EtapaAprovado27unid_190.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDiretriz8unid_191.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDefinitiva7unid_192.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaPrvia24unid_193.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_LoteamentosClandestinosEmmonitoramento1unid_194.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinosEmregularizao36unid_195.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinosNotificado4unid_196.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinosNotificar25unid_197.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinosVerificar2unid_198.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinosEmmonitoramento1unid_199.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_LoteamentosClandestinosEmregularizao36unid_200.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_LoteamentosClandestinosNotificado4unid_201.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_LoteamentosClandestinosNotificar25unid_202.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_LoteamentosClandestinosVerificar2unid_203.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_APP1745unid_204.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_205.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_206.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_207.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_208.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_ParqueZumbidosPalmares_209.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_212.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_216.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217.set('fieldImages', {'fid': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reaN_219.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_ConjuntoHabitacional_220.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_AvdeacessoaoHortoeColgioAgrcola_221.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaK_222.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaJ_223.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaI_224.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaH_225.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaG_226.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaF_227.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaE_228.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaD_229.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaC_230.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaB_231.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaA_232.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_233.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaaseraverbadaPartedareaG_234.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_rvoreImuneaoCorte9unid_235.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_Voorocas26unid_236.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_DeclividadeZonaUrbanaCopernicus30m_237.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_DeclividadeZonaRuralSulCopernicus30m_238.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_239.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_PBZPAEdifcioPrimeHELIPONTO_240.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_241.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAHospitalHELIPONTO_242.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_ClasseVB_244.set('fieldImages', {'fid': '', 'classe': '', 'risco_erosao': '', 'suscetibilidade_erosao': '', 'uso_solo': '', 'setores_relevo': '', 'solos_predominante': '', 'substrato_rochoso': '', 'processos_erosivos_existentes': '', 'recomendacoes_ocupacao_urbana': '', });
lyr_ClasseVA_245.set('fieldImages', {'fid': '', 'classe': '', 'risco_erosao': '', 'suscetibilidade_erosao': '', 'uso_solo': '', 'setores_relevo': '', 'solos_predominante': '', 'substrato_rochoso': '', 'processos_erosivos_existentes': '', 'recomendacoes_ocupacao_urbana': '', });
lyr_ClasseIVC_246.set('fieldImages', {'fid': '', 'classe': '', 'risco_erosao': '', 'suscetibilidade_erosao': '', 'uso_solo': '', 'setores_relevo': '', 'solos_predominante': '', 'substrato_rochoso': '', 'processos_erosivos_existentes': '', 'recomendacoes_ocupacao_urbana': '', });
lyr_ClasseIVB_247.set('fieldImages', {'fid': '', 'classe': '', 'risco_erosao': '', 'suscetibilidade_erosao': '', 'uso_solo': '', 'setores_relevo': '', 'solos_predominante': '', 'substrato_rochoso': '', 'processos_erosivos_existentes': '', 'recomendacoes_ocupacao_urbana': '', });
lyr_ClasseIVA_248.set('fieldImages', {'fid': '', 'classe': '', 'risco_erosao': '', 'suscetibilidade_erosao': '', 'uso_solo': '', 'setores_relevo': '', 'solos_predominante': '', 'substrato_rochoso': '', 'processos_erosivos_existentes': '', 'recomendacoes_ocupacao_urbana': '', });
lyr_ClasseIIIC_249.set('fieldImages', {'fid': '', 'classe': '', 'risco_erosao': '', 'suscetibilidade_erosao': '', 'uso_solo': '', 'setores_relevo': '', 'solos_predominante': '', 'substrato_rochoso': '', 'processos_erosivos_existentes': '', 'recomendacoes_ocupacao_urbana': '', });
lyr_ClasseIIIB_250.set('fieldImages', {'fid': '', 'classe': '', 'risco_erosao': '', 'suscetibilidade_erosao': '', 'uso_solo': '', 'setores_relevo': '', 'solos_predominante': '', 'substrato_rochoso': '', 'processos_erosivos_existentes': '', 'recomendacoes_ocupacao_urbana': '', });
lyr_ClasseIIIA_251.set('fieldImages', {'fid': '', 'classe': '', 'risco_erosao': '', 'suscetibilidade_erosao': '', 'uso_solo': '', 'setores_relevo': '', 'solos_predominante': '', 'substrato_rochoso': '', 'processos_erosivos_existentes': '', 'recomendacoes_ocupacao_urbana': '', });
lyr_ClasseII_252.set('fieldImages', {'fid': '', 'classe': '', 'risco_erosao': '', 'suscetibilidade_erosao': '', 'uso_solo': '', 'setores_relevo': '', 'solos_predominante': '', 'substrato_rochoso': '', 'processos_erosivos_existentes': '', 'recomendacoes_ocupacao_urbana': '', });
lyr_ClasseI_253.set('fieldImages', {'fid': '', 'classe': '', 'risco_erosao': '', 'suscetibilidade_erosao': '', 'uso_solo': '', 'setores_relevo': '', 'solos_predominante': '', 'substrato_rochoso': '', 'processos_erosivos_existentes': '', 'recomendacoes_ocupacao_urbana': '', });
lyr_APP156unid230392892m_254.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_readeUsoEspecial276unid271190268m_255.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_reaInstitucional224unid133042345m_256.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_reaPatrimonial33unid15807656m_257.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_LoteamentoFechado115unid52603608m_258.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_reaVerde1946unid805735618m_259.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_Lote251unid7505210m_260.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_Lote251unid_261.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_LoteEdificao20unid508062m_262.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LoteEdificao20unid_263.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': '', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_LeiloLEIN97542025Homologado4unid334770m_264.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Homologado4unid_265.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_267.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_269.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_271.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LoteEMDEF10unid218783m_272.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_LoteEMDEF10unid_273.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_AoCivilPblica1unid_274.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_275.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_CartaAnuncia20unid_276.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia19unid_277.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_PlantioVoluntrio1unid_278.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_279.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_TACMinistrioPblico9unid_280.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_281.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TCRACETESB28unid_282.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB28unid_283.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', });
lyr_TCRACETESBPARCELAMENTO11unid_284.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'proc_cetesb': '', });
lyr_TCRACETESBPARCELAMENTO11unid_285.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRAMunicipal14unid_286.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal14unid_287.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TRPRLCETESB2unid_288.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_289.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_reaUrbanadeFranca_4.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Código da UF': 'hidden field', 'Classe de Uso': 'hidden field', 'Área (ha)': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_5.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_6.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_7.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_8.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_9.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_10.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_11.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_12.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_13.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_14.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_15.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_16.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_17.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_20.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_MacrozonasMacrozonadoRioCanoas_25.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_MacrozonasSubMacrozonadeExpansoUrbana_26.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_ExpansoUrbanaLCN0502003_29.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpansoUrbanaLCN1402009_30.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpansoUrbanaLCN2352013_31.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpansoUrbanaLCN3242019_32.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_SistemaVirioExpansodosistemavirio_34.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioRodovias_35.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioRodoviasViasarteriais_36.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioSistemavirioprincipal_37.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_FazendaBarroPretoeBambus_43.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_Matrcula106206_44.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RecantoEmanuelMatrcula95782_45.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RecantoEmanuelMatrcula95783_46.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_PortaldosIndaias_47.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_StioNossaSenhoraAparecida_48.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_LoteamentosClandestinos3unid_49.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_LoteamentosClandestinosRegularizado9unid_50.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosRegularizado9unid_51.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_Vivenna_52.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Vivenna_53.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_54.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_55.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_VittaAlvorada_56.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_57.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_VillaDiEspanhaIII_58.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDiEspanhaIII_59.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_60.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_61.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_62.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_63.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_64.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_65.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_66.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_67.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_TorontoResidence_68.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_69.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_70.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_71.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_72.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_73.set('fieldLabels', {'fid': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_74.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_75.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_SoCarlosII_76.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SoCarlosII_77.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantaLina_78.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantaLina_79.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_80.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_81.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_ResidencialSoCarlosI_82.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_83.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_ResidencialSantaIns_84.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_85.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_ResidencialSantaF_86.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_87.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOtis_88.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOtis_89.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_ResidencialQuintadoSol_90.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_91.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_92.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_93.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_94.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_95.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialNairRetuciII_96.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialNairRetuciII_97.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialNairRetuci_98.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialNairRetuci_99.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_100.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_101.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_102.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_103.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_ResidencialMarioTasso_104.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_105.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_106.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_107.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_108.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_109.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_110.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_111.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_112.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_113.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_114.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_115.set('fieldLabels', {'fid': 'hidden field', });
lyr_RecantoMeneghetti_116.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_117.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_118.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_119.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_120.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_121.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_122.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_123.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_124.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_125.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonII_126.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonII_127.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_128.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_129.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_130.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_131.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_MoradadoVerdeII_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Montli_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Montli_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_MontBlancResidence_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MarianaAlarcon_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MarianaAlarcon_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Loteamentolamo_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Loteamentolamo_143.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_144.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_148.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_149.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanettiII_150.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanettiII_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratecnica_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratecnica_153.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_155.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_156.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_157.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_158.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_159.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_160.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_161.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_162.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_163.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EdificioSolNascente_164.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdificioSolNascente_165.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EdificioRuadoSol_166.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdificioRuadoSol_167.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdificioResidencialHope_168.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdificioResidencialHope_169.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_170.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_171.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_172.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_173.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_174.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_175.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_176.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_177.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_178.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_179.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_180.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_181.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_182.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_183.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arizona_184.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arizona_185.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Adonis_186.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Adonis_187.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_188.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_189.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EtapaAprovado27unid_190.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDiretriz8unid_191.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDefinitiva7unid_192.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaPrvia24unid_193.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_LoteamentosClandestinosEmmonitoramento1unid_194.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosEmregularizao36unid_195.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosNotificado4unid_196.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosNotificar25unid_197.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosVerificar2unid_198.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosEmmonitoramento1unid_199.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosEmregularizao36unid_200.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosNotificado4unid_201.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosNotificar25unid_202.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosVerificar2unid_203.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_APP1745unid_204.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_RiosDuplos84unid_205.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_206.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_207.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_208.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_ParqueZumbidosPalmares_209.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_210.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_211.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacas_212.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_213.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_214.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_215.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipal_216.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_217.set('fieldLabels', {'fid': 'hidden field', 'Field1': 'inline label - visible with data', 'Field2': 'hidden field', 'Field3': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_218.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_reaN_219.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_ConjuntoHabitacional_220.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_AvdeacessoaoHortoeColgioAgrcola_221.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaK_222.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaJ_223.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaI_224.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaH_225.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaG_226.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaF_227.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaE_228.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaD_229.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaC_230.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaB_231.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaA_232.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_233.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaaseraverbadaPartedareaG_234.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte9unid_235.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_Voorocas26unid_236.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_DeclividadeZonaUrbanaCopernicus30m_237.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_DeclividadeZonaRuralSulCopernicus30m_238.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_239.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_240.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_241.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAHospitalHELIPONTO_242.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_243.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_ClasseVB_244.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_erosao': 'inline label - visible with data', 'suscetibilidade_erosao': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_relevo': 'inline label - visible with data', 'solos_predominante': 'inline label - visible with data', 'substrato_rochoso': 'inline label - visible with data', 'processos_erosivos_existentes': 'inline label - visible with data', 'recomendacoes_ocupacao_urbana': 'inline label - visible with data', });
lyr_ClasseVA_245.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_erosao': 'inline label - visible with data', 'suscetibilidade_erosao': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_relevo': 'inline label - visible with data', 'solos_predominante': 'inline label - visible with data', 'substrato_rochoso': 'inline label - visible with data', 'processos_erosivos_existentes': 'inline label - visible with data', 'recomendacoes_ocupacao_urbana': 'inline label - visible with data', });
lyr_ClasseIVC_246.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_erosao': 'inline label - visible with data', 'suscetibilidade_erosao': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_relevo': 'inline label - visible with data', 'solos_predominante': 'inline label - visible with data', 'substrato_rochoso': 'inline label - visible with data', 'processos_erosivos_existentes': 'inline label - visible with data', 'recomendacoes_ocupacao_urbana': 'inline label - visible with data', });
lyr_ClasseIVB_247.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_erosao': 'inline label - visible with data', 'suscetibilidade_erosao': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_relevo': 'inline label - visible with data', 'solos_predominante': 'inline label - visible with data', 'substrato_rochoso': 'inline label - visible with data', 'processos_erosivos_existentes': 'inline label - visible with data', 'recomendacoes_ocupacao_urbana': 'inline label - visible with data', });
lyr_ClasseIVA_248.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_erosao': 'inline label - visible with data', 'suscetibilidade_erosao': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_relevo': 'inline label - visible with data', 'solos_predominante': 'inline label - visible with data', 'substrato_rochoso': 'inline label - visible with data', 'processos_erosivos_existentes': 'inline label - visible with data', 'recomendacoes_ocupacao_urbana': 'inline label - visible with data', });
lyr_ClasseIIIC_249.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_erosao': 'inline label - visible with data', 'suscetibilidade_erosao': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_relevo': 'inline label - visible with data', 'solos_predominante': 'inline label - visible with data', 'substrato_rochoso': 'inline label - visible with data', 'processos_erosivos_existentes': 'inline label - visible with data', 'recomendacoes_ocupacao_urbana': 'inline label - visible with data', });
lyr_ClasseIIIB_250.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_erosao': 'inline label - visible with data', 'suscetibilidade_erosao': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_relevo': 'inline label - visible with data', 'solos_predominante': 'inline label - visible with data', 'substrato_rochoso': 'inline label - visible with data', 'processos_erosivos_existentes': 'inline label - visible with data', 'recomendacoes_ocupacao_urbana': 'inline label - visible with data', });
lyr_ClasseIIIA_251.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_erosao': 'inline label - visible with data', 'suscetibilidade_erosao': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_relevo': 'inline label - visible with data', 'solos_predominante': 'inline label - visible with data', 'substrato_rochoso': 'inline label - visible with data', 'processos_erosivos_existentes': 'inline label - visible with data', 'recomendacoes_ocupacao_urbana': 'inline label - visible with data', });
lyr_ClasseII_252.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_erosao': 'inline label - visible with data', 'suscetibilidade_erosao': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_relevo': 'inline label - visible with data', 'solos_predominante': 'inline label - visible with data', 'substrato_rochoso': 'inline label - visible with data', 'processos_erosivos_existentes': 'inline label - visible with data', 'recomendacoes_ocupacao_urbana': 'inline label - visible with data', });
lyr_ClasseI_253.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_erosao': 'inline label - visible with data', 'suscetibilidade_erosao': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_relevo': 'inline label - visible with data', 'solos_predominante': 'inline label - visible with data', 'substrato_rochoso': 'inline label - visible with data', 'processos_erosivos_existentes': 'inline label - visible with data', 'recomendacoes_ocupacao_urbana': 'inline label - visible with data', });
lyr_APP156unid230392892m_254.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_readeUsoEspecial276unid271190268m_255.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaInstitucional224unid133042345m_256.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaPatrimonial33unid15807656m_257.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteamentoFechado115unid52603608m_258.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaVerde1946unid805735618m_259.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_Lote251unid7505210m_260.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_Lote251unid_261.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_LoteEdificao20unid508062m_262.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEdificao20unid_263.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Homologado4unid334770m_264.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Homologado4unid_265.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_266.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_267.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_268.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_269.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_270.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_271.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LoteEMDEF10unid218783m_272.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_273.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_274.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_275.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_276.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia19unid_277.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_278.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_279.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_280.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_281.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB28unid_282.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB28unid_283.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESBPARCELAMENTO11unid_284.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESBPARCELAMENTO11unid_285.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_286.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_287.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_288.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_289.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_289.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});