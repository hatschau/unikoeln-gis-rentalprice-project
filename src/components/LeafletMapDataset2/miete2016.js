import { autolinker, removeEmptyRowsFromPopupContent, highlightLayer, highlightFeature } from '../utils'

function pop_MieteWB_2016_2(feature, layer) {
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
                <td colspan="2">' + (feature.properties['Miete_2019'] !== null ? autolinker.link(feature.properties['Miete_2019'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Miete_2016'] !== null ? autolinker.link(feature.properties['Miete_2016'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Miete_2011'] !== null ? autolinker.link(feature.properties['Miete_2011'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Miete_2023'] !== null ? autolinker.link(feature.properties['Miete_2023'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_MieteWB_2016_2_0(feature) {
    if (feature.properties['Miete_2016'] >= 0.000000 && feature.properties['Miete_2016'] <= 2.500000) {
        return {
            pane: 'pane_MieteWB_2016_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(0,32,77,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['Miete_2016'] >= 2.500000 && feature.properties['Miete_2016'] <= 5.000000) {
        return {
            pane: 'pane_MieteWB_2016_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(23,58,109,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['Miete_2016'] >= 5.000000 && feature.properties['Miete_2016'] <= 7.500000) {
        return {
            pane: 'pane_MieteWB_2016_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(75,84,108,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['Miete_2016'] >= 7.500000 && feature.properties['Miete_2016'] <= 10.000000) {
        return {
            pane: 'pane_MieteWB_2016_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(109,110,114,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['Miete_2016'] >= 10.000000 && feature.properties['Miete_2016'] <= 12.500000) {
        return {
            pane: 'pane_MieteWB_2016_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(142,138,121,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['Miete_2016'] >= 12.500000 && feature.properties['Miete_2016'] <= 15.000000) {
        return {
            pane: 'pane_MieteWB_2016_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(180,168,114,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['Miete_2016'] >= 15.000000 && feature.properties['Miete_2016'] <= 17.500000) {
        return {
            pane: 'pane_MieteWB_2016_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(219,199,97,1.0)',
            interactive: true,
        }
    }
    if (feature.properties['Miete_2016'] >= 17.500000 && feature.properties['Miete_2016'] <= 20.000000) {
        return {
            pane: 'pane_MieteWB_2016_2',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(255,234,70,1.0)',
            interactive: true,
        }
    }
}

export { pop_MieteWB_2016_2, style_MieteWB_2016_2_0 }