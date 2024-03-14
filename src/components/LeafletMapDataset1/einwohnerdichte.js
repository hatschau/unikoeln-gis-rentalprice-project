import { autolinker, removeEmptyRowsFromPopupContent, highlightLayer, highlightFeature } from './utils'


function pop_einwohner_dichte_2019_2(feature, layer) {
    layer.on({
        mouseout: function (e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['nummer'] !== null ? autolinker.link(feature.properties['nummer'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['nr_stbez'] !== null ? autolinker.link(feature.properties['nr_stbez'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['stbezirk'] !== null ? autolinker.link(feature.properties['stbezirk'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['flaeche'] !== null ? autolinker.link(feature.properties['flaeche'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['StadtteileMieteEtc_einwohnerdichte_2019'] !== null ? autolinker.link(feature.properties['StadtteileMieteEtc_einwohnerdichte_2019'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_einwohner_dichte_2019_2_0(feature) {
    if (feature.properties['StadtteileMieteEtc_einwohnerdichte_2019'] >= 600.000000 && feature.properties['StadtteileMieteEtc_einwohnerdichte_2019'] <= 3500.000000) {
        return {
            pane: 'pane_einwohner_dichte_2019_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(214,237,255,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['StadtteileMieteEtc_einwohnerdichte_2019'] >= 3500.000000 && feature.properties['StadtteileMieteEtc_einwohnerdichte_2019'] <= 6500.000000) {
        return {
            pane: 'pane_einwohner_dichte_2019_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(200,220,240,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['StadtteileMieteEtc_einwohnerdichte_2019'] >= 6500.000000 && feature.properties['StadtteileMieteEtc_einwohnerdichte_2019'] <= 9000.000000) {
        return {
            pane: 'pane_einwohner_dichte_2019_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(115,178,216,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['StadtteileMieteEtc_einwohnerdichte_2019'] >= 9000.000000 && feature.properties['StadtteileMieteEtc_einwohnerdichte_2019'] <= 12000.000000) {
        return {
            pane: 'pane_einwohner_dichte_2019_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(41,121,185,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['StadtteileMieteEtc_einwohnerdichte_2019'] >= 12000.000000 && feature.properties['StadtteileMieteEtc_einwohnerdichte_2019'] <= 15000.000000) {
        return {
            pane: 'pane_einwohner_dichte_2019_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(8,48,107,1.0)',
            interactive: true,
        }
    }
}

export { pop_einwohner_dichte_2019_2, style_einwohner_dichte_2019_2_0 }