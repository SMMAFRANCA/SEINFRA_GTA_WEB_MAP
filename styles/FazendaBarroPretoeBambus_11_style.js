var size = 0;
var placement = 'point';

var style_FazendaBarroPretoeBambus_11 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "15.600000000000001px \'Liberation Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#1f1f1f";
    var bufferWidth = 1.2000000000000002;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_FazendaBarroPretoeBambus_11_eval_expression(context) !== null) {
        labelText = String(exp_label_FazendaBarroPretoeBambus_11_eval_expression(context));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(240,151,16,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
