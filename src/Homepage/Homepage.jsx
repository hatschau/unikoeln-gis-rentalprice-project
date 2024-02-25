import mietspiegel2000bis2021 from "../assets/mietspiegel2000bis2021.png"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

export default function Homepage() {

    return (
        <>
            <MapContainer center={[50.934, 6.962]} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}