import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Headline } from '../TextBlock'

export default function LeafletMap() {
    return (
        <>

            <MapContainer center={[50.934, 6.962]} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[50.934, 6.962]}>
                    <Popup>
                        Hier ist Köln. <br /> Lieblingsstadt.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}