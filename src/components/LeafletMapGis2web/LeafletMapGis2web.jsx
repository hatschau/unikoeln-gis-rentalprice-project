import React, { useEffect } from 'react';
import Autolinker from 'autolinker';
import L from 'leaflet';
import 'leaflet-hash';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

const MapComponent = () => {

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

        // Cleanup function to remove the map on unmount
        return () => {
            map.remove();
        };

    }, []); // Empty dependency array means this effect will run once after initial render

    return <div id="map" style={{ width: '600px', height: '400px' }}></div>;
};

export default MapComponent;
