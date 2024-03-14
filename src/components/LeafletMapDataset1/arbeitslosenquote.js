
import { autolinker, removeEmptyRowsFromPopupContent, highlightLayer, highlightFeature } from './utils'

function pop_arbeitslosenquote_2019_weniger_daten_1(feature, layer) {
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
                <td colspan="2">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['StadtteileMieteEtc_arbeitslosenquote_2019'] !== null ? autolinker.link(feature.properties['StadtteileMieteEtc_arbeitslosenquote_2019'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_arbeitslosenquote_2019_weniger_daten_1_0(feature) {
    if (feature.properties['StadtteileMieteEtc_arbeitslosenquote_2019'] >= 1.500000 && feature.properties['StadtteileMieteEtc_arbeitslosenquote_2019'] <= 5.000000) {
        return {
            pane: 'pane_arbeitslosenquote_2019_weniger_daten_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,209,253,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['StadtteileMieteEtc_arbeitslosenquote_2019'] >= 5.000000 && feature.properties['StadtteileMieteEtc_arbeitslosenquote_2019'] <= 9.000000) {
        return {
            pane: 'pane_arbeitslosenquote_2019_weniger_daten_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(254,157,254,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['StadtteileMieteEtc_arbeitslosenquote_2019'] >= 9.000000 && feature.properties['StadtteileMieteEtc_arbeitslosenquote_2019'] <= 12.500000) {
        return {
            pane: 'pane_arbeitslosenquote_2019_weniger_daten_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(253,105,254,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['StadtteileMieteEtc_arbeitslosenquote_2019'] >= 12.500000 && feature.properties['StadtteileMieteEtc_arbeitslosenquote_2019'] <= 16.500000) {
        return {
            pane: 'pane_arbeitslosenquote_2019_weniger_daten_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(252,52,255,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['StadtteileMieteEtc_arbeitslosenquote_2019'] >= 16.500000 && feature.properties['StadtteileMieteEtc_arbeitslosenquote_2019'] <= 20.100000) {
        return {
            pane: 'pane_arbeitslosenquote_2019_weniger_daten_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(251,0,255,1.0)',
            interactive: true,
        }
    }
}
export { pop_arbeitslosenquote_2019_weniger_daten_1, style_arbeitslosenquote_2019_weniger_daten_1_0 }