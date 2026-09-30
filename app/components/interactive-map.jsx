"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import MapSkeleton from "./map-skeleton";

const locations = [
  { name: "Sumatera Barat", coords: [100.4172, -0.9471] },
  { name: "Bengkulu", coords: [102.2608, -3.7928] },
  { name: "Sumatera Utara", coords: [98.6722, 3.5952] },
  { name: "Aceh", coords: [95.3238, 5.5483] },
  { name: "Bali", coords: [115.2126, -8.6705] },
  { name: "Batam", coords: [104.0529, 1.1301] },
  { name: "Kalimantan Timur", coords: [117.1536, -0.5022] },
  { name: "Sulawesi Tenggara", coords: [122.5126, -3.9985] },
  { name: "Sulawesi Selatan", coords: [119.4327, -5.1477] },
  { name: "Jakarta", coords: [106.8456, -6.2088] },
  { name: "Banten", coords: [106.15, -6.12] },
  { name: "Jawa Barat", coords: [107.6191, -6.9175] },
  { name: "Jawa Timur", coords: [112.7521, -7.2575] },
  { name: "D.I Yogyakarta", coords: [110.3695, -7.7956] },
  { name: "Pulau Ende", coords: [121.625, -8.855] },
  { name: "Timor Tengah Selatan", coords: [124.28, -9.86] },
  { name: "Lombok Timur", coords: [116.53, -8.65] },
  { name: "Maluku Utara", coords: [127.38, 0.79] },
  { name: "Papua Barat", coords: [134.062, -0.8615] },
  { name: "Palestina", coords: [34.4667, 31.5] },
];

const mapStyle = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      maxzoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors',
    },
  },
  layers: [{ id: "osm", type: "raster", source: "osm" }],
};

function createMarkerElement() {
  const el = document.createElement("div");
  el.className = "sh-map-marker";
  el.innerHTML = `
    <span class="sh-map-marker__pulse"></span>
    <span class="sh-map-marker__dot"></span>
  `;
  return el;
}

function createPopupContent(name) {
  const wrapper = document.createElement("div");
  wrapper.className = "text-center font-poppins px-1 py-0.5";

  const title = document.createElement("p");
  title.className = "font-bold text-[#1E5BBB] text-xs m-0";
  title.textContent = name;

  const subtitle = document.createElement("p");
  subtitle.className = "text-[10px] text-gray-500 m-0 mt-0.5";
  subtitle.textContent = "Titik Penyaluran Program SharingHappiness";

  wrapper.append(title, subtitle);
  return wrapper;
}

export default function InteractiveMap() {
  const containerRef = useRef(null);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const bounds = locations.reduce(
      (b, loc) => b.extend(loc.coords),
      new maplibregl.LngLatBounds(locations[0].coords, locations[0].coords)
    );

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: mapStyle,
      center: [115, -4.5],
      zoom: 2.8,
      attributionControl: { compact: true },
      scrollZoom: true,
      touchZoomRotate: true,
    });

    map.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right"
    );

    let zoomOutTimer;
    let isLoaded = false;
    let isVisible = false;
    let hasPlayed = false;
    let observer;

    const playZoomOut = () => {
      if (hasPlayed || !isLoaded || !isVisible) return;
      hasPlayed = true;
      observer?.disconnect();

      zoomOutTimer = setTimeout(() => {
        map.fitBounds(bounds, {
          padding: { top: 70, bottom: 100, left: 20, right: 30 },
          maxZoom: 6,
          duration: 2500,
          essential: true,
        });
      }, 300);
    };

    map.once("load", () => {
      isLoaded = true;
      setIsMapReady(true);
      playZoomOut();
    });

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
          playZoomOut();
        },
        { threshold: 0.6 }
      );
      observer.observe(containerRef.current);
    } else {
      isVisible = true;
    }

    const markers = locations.map((loc) => {
      const popup = new maplibregl.Popup({
        className: "custom-popup",
        offset: 12,
        closeButton: true,
      }).setDOMContent(createPopupContent(loc.name));

      return new maplibregl.Marker({ element: createMarkerElement() })
        .setLngLat(loc.coords)
        .setPopup(popup)
        .addTo(map);
    });

    return () => {
      clearTimeout(zoomOutTimer);
      observer?.disconnect();
      markers.forEach((marker) => marker.remove());
      map.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-inner border border-blue-100 z-0">
      <div ref={containerRef} className="w-full h-full z-0" />
      <MapSkeleton
        className={`absolute inset-0 z-10 transition-opacity duration-500 ${
          isMapReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
    </div>
  );
}
