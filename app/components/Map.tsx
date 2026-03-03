"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default marker icon in Leaflet + Next.js
const DefaultIcon = L.icon({
    iconUrl: icon.src,
    shadowUrl: iconShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
    const position: [number, number] = [54.1457699, 15.2888937]; // Mrzeżyno, ul. Marynarska 5

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    <b>Pod Kasztanem</b><br />
                    ul. Marynarska 5<br />
                    200m do plaży!
                </Popup>
            </Marker>
        </MapContainer>
    );
}
