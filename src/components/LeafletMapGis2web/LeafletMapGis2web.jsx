import React, { useEffect } from 'react';
import Autolinker from 'autolinker';
import L from 'leaflet';
import 'leaflet-hash';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import json_arbeitslosenquote_2019_weniger_daten_1 from './data/arbeitslosenquote_2019_weniger_daten_1';
import json_einwohner_dichte_2019_2 from './data/einwohner_dichte_2019_2';
import json_mietpreis_2019_3 from './data/mietpreis_2019_3';
import { pop_arbeitslosenquote_2019_weniger_daten_1, style_arbeitslosenquote_2019_weniger_daten_1_0 } from './arbeitslosenquote';
import { pop_einwohner_dichte_2019_2, style_einwohner_dichte_2019_2_0 } from './einwohnerdichte'
import { pop_mietpreis_2019_3, style_mietpreis_2019_3_0 } from './mietpreis'

// TODO: Adress-Suche Funktionalität

const MapComponent = () => {

    console.log("Arbeitslosenquote", json_arbeitslosenquote_2019_weniger_daten_1)
    console.log("Einwohnerdichte", json_einwohner_dichte_2019_2)
    console.log("Mitepreis", json_mietpreis_2019_3)

    useEffect(() => {
        var map = L.map('map', {
            zoomControl: true, maxZoom: 28, minZoom: 1
        }).fitBounds([[50.81698922194659, 6.66539669210909], [51.098251628609596, 7.268975655787952]]);
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        const autolinker = new Autolinker({ truncate: { length: 30, location: 'smart' } });

        function removeEmptyRowsFromPopupContent(content, feature) {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = content;
            var rows = tempDiv.querySelectorAll('tr');
            for (var i = 0; i < rows.length; i++) {
                var td = rows[i].querySelector('td.visible-with-data');
                var key = td ? td.id : '';
                if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
                    rows[i].parentNode.removeChild(rows[i]);
                }
            }
            return tempDiv.innerHTML;
        }

        document.querySelector(".leaflet-popup-pane").addEventListener("load", function (event) {
            var tagName = event.target.tagName,
                popup = map._popup;
            if (tagName === "IMG" && popup && !popup._updated) {
                popup._updated = true;
                popup.update();
            }
        }, true);

        var bounds_group = new L.featureGroup([]);

        map.createPane('pane_OpenStreetMap_0');
        map.getPane('pane_OpenStreetMap_0').style.zIndex = 400;
        var layer_OpenStreetMap_0 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            pane: 'pane_OpenStreetMap_0',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 19
        });
        map.addLayer(layer_OpenStreetMap_0);

        // Define your other layers and functionalities here

        // Arbeitslosenquote
        map.createPane('pane_arbeitslosenquote_2019_weniger_daten_1');
        map.getPane('pane_arbeitslosenquote_2019_weniger_daten_1').style.zIndex = 401;
        map.getPane('pane_arbeitslosenquote_2019_weniger_daten_1').style['mix-blend-mode'] = 'normal';
        var layer_arbeitslosenquote_2019_weniger_daten_1 = new L.geoJson(json_arbeitslosenquote_2019_weniger_daten_1, {
            attribution: '',
            interactive: true,
            dataVar: 'json_arbeitslosenquote_2019_weniger_daten_1',
            layerName: 'layer_arbeitslosenquote_2019_weniger_daten_1',
            pane: 'pane_arbeitslosenquote_2019_weniger_daten_1',
            onEachFeature: pop_arbeitslosenquote_2019_weniger_daten_1,
            style: style_arbeitslosenquote_2019_weniger_daten_1_0,
        });
        map.addLayer(layer_arbeitslosenquote_2019_weniger_daten_1);

        // Einwohnerdichte
        map.createPane('pane_einwohner_dichte_2019_2');
        map.getPane('pane_einwohner_dichte_2019_2').style.zIndex = 402;
        map.getPane('pane_einwohner_dichte_2019_2').style['mix-blend-mode'] = 'normal';
        var layer_einwohner_dichte_2019_2 = new L.geoJson(json_einwohner_dichte_2019_2, {
            attribution: '',
            interactive: true,
            dataVar: 'json_einwohner_dichte_2019_2',
            layerName: 'layer_einwohner_dichte_2019_2',
            pane: 'pane_einwohner_dichte_2019_2',
            onEachFeature: pop_einwohner_dichte_2019_2,
            style: style_einwohner_dichte_2019_2_0,
        });
        map.addLayer(layer_einwohner_dichte_2019_2);

        // Mietpreis
        map.createPane('pane_mietpreis_2019_3');
        map.getPane('pane_mietpreis_2019_3').style.zIndex = 403;
        map.getPane('pane_mietpreis_2019_3').style['mix-blend-mode'] = 'normal';
        var layer_mietpreis_2019_3 = new L.geoJson(json_mietpreis_2019_3, {
            attribution: '',
            interactive: true,
            dataVar: 'json_mietpreis_2019_3',
            layerName: 'layer_mietpreis_2019_3',
            pane: 'pane_mietpreis_2019_3',
            onEachFeature: pop_mietpreis_2019_3,
            style: style_mietpreis_2019_3_0,
        });
        bounds_group.addLayer(layer_mietpreis_2019_3);
        map.addLayer(layer_mietpreis_2019_3);

        // Layer Control
        function setBounds() {
        }

        var osmGeocoder = new L.Control.Geocoder({
            collapsed: true,
            position: 'topleft',
            text: 'Search',
            title: 'Testing'
        }).addTo(map);
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
            .className += ' fa fa-search';
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
            .title += 'Search for a place';
        var baseMaps = {};
        L.control.layers(baseMaps, { 'mietpreis_2019<br /><table><tr><td style="text-align: center;"><img src="legend/mietpreis_2019_3_030.png" /></td><td>0 - 3</td></tr><tr><td style="text-align: center;"><img src="legend/mietpreis_2019_3_361.png" /></td><td>3 - 6</td></tr><tr><td style="text-align: center;"><img src="legend/mietpreis_2019_3_692.png" /></td><td>6 - 9</td></tr><tr><td style="text-align: center;"><img src="legend/mietpreis_2019_3_9123.png" /></td><td>9 - 12</td></tr><tr><td style="text-align: center;"><img src="legend/mietpreis_2019_3_12154.png" /></td><td>12 - 15</td></tr></table>': layer_mietpreis_2019_3, 'einwohner_dichte_2019<br /><table><tr><td style="text-align: center;"><img src="legend/einwohner_dichte_2019_2_60035000.png" /></td><td>600 - 3500</td></tr><tr><td style="text-align: center;"><img src="legend/einwohner_dichte_2019_2_350065001.png" /></td><td>3500 - 6500</td></tr><tr><td style="text-align: center;"><img src="legend/einwohner_dichte_2019_2_650090002.png" /></td><td>6500 - 9000</td></tr><tr><td style="text-align: center;"><img src="legend/einwohner_dichte_2019_2_9000120003.png" /></td><td>9000 - 12000</td></tr><tr><td style="text-align: center;"><img src="legend/einwohner_dichte_2019_2_12000150004.png" /></td><td>12000 - 15000</td></tr></table>': layer_einwohner_dichte_2019_2, 'arbeitslosenquote_2019_weniger_daten<br /><table><tr><td style="text-align: center;"><img src="legend/arbeitslosenquote_2019_weniger_daten_1_1550.png" /></td><td>1,5 - 5</td></tr><tr><td style="text-align: center;"><img src="legend/arbeitslosenquote_2019_weniger_daten_1_591.png" /></td><td>5 - 9</td></tr><tr><td style="text-align: center;"><img src="legend/arbeitslosenquote_2019_weniger_daten_1_91252.png" /></td><td>9 - 12,5</td></tr><tr><td style="text-align: center;"><img src="legend/arbeitslosenquote_2019_weniger_daten_1_1251653.png" /></td><td>12,5 - 16,5</td></tr><tr><td style="text-align: center;"><img src="legend/arbeitslosenquote_2019_weniger_daten_1_1652014.png" /></td><td>16,5 - 20,1</td></tr></table>': layer_arbeitslosenquote_2019_weniger_daten_1, "OpenStreetMap": layer_OpenStreetMap_0, }).addTo(map);
        setBounds();

        // Cleanup function to remove the map on unmount
        return () => {
            map.remove();
        };

    }, []); // Empty dependency array means this effect will run once after initial render

    return <div id="map" style={{ width: '600px', height: '400px' }}></div>;
};

export default MapComponent;
