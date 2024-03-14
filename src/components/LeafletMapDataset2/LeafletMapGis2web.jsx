import React, { useEffect } from 'react';
import Autolinker from 'autolinker';
import L from 'leaflet';
import 'leaflet-hash';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import json_MieteWB_2011_1 from './data/MieteWB_2011_1'
import json_MieteWB_2016_2 from './data/MieteWB_2016_2'
import json_MieteWB_2019_3 from './data/MieteWB_2019_3'
import json_MieteWB_2023_4 from './data/MieteWB_2023_4'
import { pop_MieteWB_2011_1, style_MieteWB_2011_1_0 } from './miete2011'
import { pop_MieteWB_2016_2, style_MieteWB_2016_2_0 } from './miete2016'
import { pop_MieteWB_2019_3, style_MieteWB_2019_3_0 } from './miete2019'
import { pop_MieteWB_2023_4, style_MieteWB_2023_4_0 } from './miete2023'


const MapComponent2 = () => {

    useEffect(() => {
        var map = L.map('map', {
            zoomControl: true, maxZoom: 28, minZoom: 1
        }).fitBounds([[50.81698922194659, 6.66539669210909], [51.098251628609596, 7.268975655787952]]);
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        const autolinker = new Autolinker({ truncate: { length: 30, location: 'smart' } });

        // Pop Ups
        document.querySelector(".leaflet-popup-pane").addEventListener("load", function (event) {
            var tagName = event.target.tagName,
                popup = map._popup;
            if (tagName === "IMG" && popup && !popup._updated) {
                popup._updated = true;
                popup.update();
            }
        }, true);

        var bounds_group = new L.featureGroup([]);

        // Open Street Map Layer
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

        // Miete 2011 layer
        map.createPane('pane_MieteWB_2011_1');
        map.getPane('pane_MieteWB_2011_1').style.zIndex = 401;
        map.getPane('pane_MieteWB_2011_1').style['mix-blend-mode'] = 'normal';
        var layer_MieteWB_2011_1 = new L.geoJson(json_MieteWB_2011_1, {
            attribution: '',
            interactive: true,
            dataVar: 'json_MieteWB_2011_1',
            layerName: 'layer_MieteWB_2011_1',
            pane: 'pane_MieteWB_2011_1',
            onEachFeature: pop_MieteWB_2011_1,
            style: style_MieteWB_2011_1_0,
        });
        bounds_group.addLayer(layer_MieteWB_2011_1);
        map.addLayer(layer_MieteWB_2011_1);

        // Miete 2016 layer
        map.createPane('pane_MieteWB_2016_2');
        map.getPane('pane_MieteWB_2016_2').style.zIndex = 402;
        map.getPane('pane_MieteWB_2016_2').style['mix-blend-mode'] = 'normal';
        var layer_MieteWB_2016_2 = new L.geoJson(json_MieteWB_2016_2, {
            attribution: '',
            interactive: true,
            dataVar: 'json_MieteWB_2016_2',
            layerName: 'layer_MieteWB_2016_2',
            pane: 'pane_MieteWB_2016_2',
            onEachFeature: pop_MieteWB_2016_2,
            style: style_MieteWB_2016_2_0,
        });
        bounds_group.addLayer(layer_MieteWB_2016_2);
        map.addLayer(layer_MieteWB_2016_2);

        // Miete 2019 layer
        map.createPane('pane_MieteWB_2019_3');
        map.getPane('pane_MieteWB_2019_3').style.zIndex = 403;
        map.getPane('pane_MieteWB_2019_3').style['mix-blend-mode'] = 'normal';
        var layer_MieteWB_2019_3 = new L.geoJson(json_MieteWB_2019_3, {
            attribution: '',
            interactive: true,
            dataVar: 'json_MieteWB_2019_3',
            layerName: 'layer_MieteWB_2019_3',
            pane: 'pane_MieteWB_2019_3',
            onEachFeature: pop_MieteWB_2019_3,
            style: style_MieteWB_2019_3_0,
        });
        bounds_group.addLayer(layer_MieteWB_2019_3);
        map.addLayer(layer_MieteWB_2019_3);

        // Miete 2023 layer
        map.createPane('pane_MieteWB_2023_4');
        map.getPane('pane_MieteWB_2023_4').style.zIndex = 404;
        map.getPane('pane_MieteWB_2023_4').style['mix-blend-mode'] = 'normal';
        var layer_MieteWB_2023_4 = new L.geoJson(json_MieteWB_2023_4, {
            attribution: '',
            interactive: true,
            dataVar: 'json_MieteWB_2023_4',
            layerName: 'layer_MieteWB_2023_4',
            pane: 'pane_MieteWB_2023_4',
            onEachFeature: pop_MieteWB_2023_4,
            style: style_MieteWB_2023_4_0,
        });
        bounds_group.addLayer(layer_MieteWB_2023_4);
        map.addLayer(layer_MieteWB_2023_4);


        function setBounds() {
        }

        // Adress Search
        var osmGeocoder = new L.Control.Geocoder({
            collapsed: true,
            position: 'topleft',
            placeholder: 'Search for a place ...',
            text: 'Search',
            title: 'Testing'
        });

        osmGeocoder.on('add', function () {
            var geocoderIcon = document.getElementsByClassName('leaflet-control-geocoder-icon')[0];
            if (geocoderIcon) {
                // geocoderIcon.className += ' fa fa-search';
                geocoderIcon.title += 'Search for a place';
            }
        });

        osmGeocoder.addTo(map);

        // Legend Control
        var baseMaps = {};
        L.control.layers(baseMaps, { 'MieteWB_2023<br /><table><tr><td style="text-align: center;"><img src="legend/MieteWB_2023_4_0250.png" /></td><td>0 - 2,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2023_4_2551.png" /></td><td>2,5 - 5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2023_4_5752.png" /></td><td>5 - 7,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2023_4_75103.png" /></td><td>7,5 - 10</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2023_4_101254.png" /></td><td>10 - 12,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2023_4_125155.png" /></td><td>12,5 - 15</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2023_4_151756.png" /></td><td>15 - 17,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2023_4_1752017.png" /></td><td>17,5 - 20,1</td></tr></table>': layer_MieteWB_2023_4, 'MieteWB_2019<br /><table><tr><td style="text-align: center;"><img src="legend/MieteWB_2019_3_0250.png" /></td><td>0 - 2,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2019_3_2551.png" /></td><td>2,5 - 5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2019_3_5752.png" /></td><td>5 - 7,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2019_3_75103.png" /></td><td>7,5 - 10</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2019_3_101254.png" /></td><td>10 - 12,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2019_3_125155.png" /></td><td>12,5 - 15</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2019_3_151756.png" /></td><td>15 - 17,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2019_3_1752017.png" /></td><td>17,5 - 20,1</td></tr></table>': layer_MieteWB_2019_3, 'MieteWB_2016<br /><table><tr><td style="text-align: center;"><img src="legend/MieteWB_2016_2_0250.png" /></td><td>0 - 2,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2016_2_2551.png" /></td><td>2,5 - 5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2016_2_5752.png" /></td><td>5 - 7,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2016_2_75103.png" /></td><td>7,5 - 10</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2016_2_101254.png" /></td><td>10 - 12,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2016_2_125155.png" /></td><td>12,5 - 15</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2016_2_151756.png" /></td><td>15 - 17,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2016_2_175207.png" /></td><td>17,5 - 20</td></tr></table>': layer_MieteWB_2016_2, 'MieteWB_2011<br /><table><tr><td style="text-align: center;"><img src="legend/MieteWB_2011_1_0250.png" /></td><td>0 - 2,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2011_1_2551.png" /></td><td>2,5 - 5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2011_1_5752.png" /></td><td>5 - 7,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2011_1_75103.png" /></td><td>7,5 - 10</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2011_1_101254.png" /></td><td>10 - 12,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2011_1_125155.png" /></td><td>12,5 - 15</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2011_1_151756.png" /></td><td>15 - 17,5</td></tr><tr><td style="text-align: center;"><img src="legend/MieteWB_2011_1_175207.png" /></td><td>17,5 - 20</td></tr></table>': layer_MieteWB_2011_1, "OpenStreetMap": layer_OpenStreetMap_0, }).addTo(map);
        setBounds();

        // Cleanup function to remove the map on unmount
        return () => {
            map.remove();
        };

    }, []); // Leave the dependency array empty to render the map on iniitial render

    return <div id="map" style={{ width: '600px', height: '400px' }}></div>;
};

export default MapComponent2;
