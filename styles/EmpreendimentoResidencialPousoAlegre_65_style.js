var size = 0;
var placement = 'point';
function categories_EmpreendimentoResidencialPousoAlegre_65(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'HATCH - AREA INSTITUCIONAL':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(99,78,58,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'HATCH - ÃREA VERDE':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(10,65,28,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'HATCH - LOTES':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(188,171,167,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'HATCH - PASSSEIO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(67,127,86,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'HATCH - RUAS':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(81,83,86,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'HATCH - SERVIDÃƒO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(99,190,170,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'HATCH - VIELA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(71,25,76,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_EmpreendimentoResidencialPousoAlegre_65 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("layer");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_EmpreendimentoResidencialPousoAlegre_65(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
