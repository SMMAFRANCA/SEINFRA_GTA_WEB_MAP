var size = 0;
var placement = 'point';

var style_DeclividadeZonaRuralNorteCopernicus30m_173 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("DEC");
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
    if (value >= 0.000000 && value <= 12.666667) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,235,221,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 12.666667 && value <= 25.333333) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,188,153,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 25.333333 && value <= 38.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,136,96,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 38.000000 && value <= 50.666667) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,76,62,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 50.666667 && value <= 63.333333) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(203,27,79,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 63.333333 && value <= 76.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(151,28,91,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 76.000000 && value <= 88.666667) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(97,31,83,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 88.666667 && value <= 101.333333) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(48,23,58,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 101.333333 && value <= 114.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(3,5,26,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
