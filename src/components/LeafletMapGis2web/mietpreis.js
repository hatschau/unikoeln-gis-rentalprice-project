import { autolinker, removeEmptyRowsFromPopupContent, highlightLayer, highlightFeature } from './utils'


function pop_mietpreis_2019_3(feature, layer) {
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
                <td colspan="2">' + (feature.properties['Miete_2019'] !== null ? autolinker.link(feature.properties['Miete_2019'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Miete_2019_0'] !== null ? autolinker.link(feature.properties['Miete_2019_0'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_mietpreis_2019_3_0(feature) {
    if (feature.properties['Miete_2019_0'] >= 0.000000 && feature.properties['Miete_2019_0'] <= 3.000000) {
        return {
            pane: 'pane_mietpreis_2019_3',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,255,255,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['Miete_2019_0'] >= 3.000000 && feature.properties['Miete_2019_0'] <= 6.000000) {
        return {
            pane: 'pane_mietpreis_2019_3',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(198,229,205,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['Miete_2019_0'] >= 6.000000 && feature.properties['Miete_2019_0'] <= 9.000000) {
        return {
            pane: 'pane_mietpreis_2019_3',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(140,203,156,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['Miete_2019_0'] >= 9.000000 && feature.properties['Miete_2019_0'] <= 12.000000) {
        return {
            pane: 'pane_mietpreis_2019_3',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(83,176,106,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['Miete_2019_0'] >= 12.000000 && feature.properties['Miete_2019_0'] <= 15.000000) {
        return {
            pane: 'pane_mietpreis_2019_3',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(26,150,57,1.0)',
            interactive: true,
        }
    }
}

export { pop_mietpreis_2019_3, style_mietpreis_2019_3_0 }