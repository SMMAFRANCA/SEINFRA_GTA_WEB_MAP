var size = 0;
var placement = 'point';
function categories_EmpreendimentoJardimFlora_123(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'APP':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,191,255,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'AREA INSTITUCIONAL':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(99,78,58,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'AREA LAZER':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(188,145,103,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'AREA NON EDIFICANDI':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(67,127,130,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'AREA VERDE':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(10,65,28,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LOTES COMERCIAIS':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(63,12,14,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LOTES MISTOS':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(189,13,17,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PASSEIO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(67,127,86,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RUAS':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(81,83,86,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_EmpreendimentoJardimFlora_123 = function(feature, resolution){
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
    
    var style = categories_EmpreendimentoJardimFlora_123(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
