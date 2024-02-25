import { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './App.css'
import Homepage from './Homepage/Homepage'
import L from 'leaflet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>GIS Projekt zu den Mietpreisen der einzelnen Stadtviertel von Köln</h2>

      <div id="map">

        <Homepage />
      </div>




    </>
  )
}

export default App
