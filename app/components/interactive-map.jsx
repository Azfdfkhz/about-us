"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const locations = [
  { name: "Sumatera Barat", coords: [-0.9471, 100.4172] },
  { name: "Bengkulu", coords: [-3.7928, 102.2608] },
  { name: "Sumatera Utara", coords: [3.5952, 98.6722] },
  { name: "Aceh", coords: [5.5483, 95.3238] },
  { name: "Bali", coords: [-8.6705, 115.2126] },
  { name: "Batam", coords: [1.1301, 104.0529] },
  { name: "Kalimantan Timur", coords: [-0.5022, 117.1536] },
  { name: "Sulawesi Tenggara", coords: [-3.9985, 122.5126] },
  { name: "Sulawesi Selatan", coords: [-5.1477, 119.4327] },
  { name: "Jakarta", coords: [-6.2088, 106.8456] },
  { name: "Banten", coords: [-6.1200, 106.1500] },
  { name: "Jawa Barat", coords: [-6.9175, 107.6191] },
  { name: "Jawa Timur", coords: [-7.2575, 112.7521] },
  { name: "D.I Yogyakarta", coords: [-7.7956, 110.3695] },
  { name: "Pulau Ende", coords: [-8.8550, 121.6250] },
  { name: "Timor Tengah Selatan", coords: [-9.8600, 124.2800] },
  { name: "Lombok Timur", coords: [-8.6500, 116.5300] },
  { name: "Maluku Utara", coords: [0.7900, 127.3800] },
  { name: "Papua Barat", coords: [-0.8615, 134.0620] },
  { name: "Palestina", coords: [31.5000, 34.4667] },
];

export default function InteractiveMap() {
  const [markerIcon, setMarkerIcon] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const customPinIcon = L.divIcon({
        className: "custom-leaflet-marker",
        html: `<div style="position: relative; width: 18px; height: 18px; display: flex; align-items: center; justify-content: center;">
          <div style="position: absolute; width: 18px; height: 18px; background-color: #7C3AED; border-radius: 50%; opacity: 0.4; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
          <div style="position: relative; width: 14px; height: 14px; background-color: #7C3AED; border: 2.5px solid #FFFFFF; border-radius: 50%; box-shadow: 0 2px 6px rgba(0,0,0,0.35);"></div>
        </div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
        popupAnchor: [0, -10],
      });
      setMarkerIcon(customPinIcon);
    }
  }, []);

  return (
    <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-inner border border-blue-100 z-0">
      <MapContainer
        center={[-2.5, 118]}
        zoom={4}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerIcon &&
          locations.map((loc, idx) => (
            <Marker key={idx} position={loc.coords} icon={markerIcon}>
              <Popup className="custom-popup">
                <div className="text-center font-poppins px-1 py-0.5">
                  <p className="font-bold text-[#1E5BBB] text-xs m-0">{loc.name}</p>
                  <p className="text-[10px] text-gray-500 m-0 mt-0.5">Titik Penyaluran Program SharingHappiness</p>
                </div>
                
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}
