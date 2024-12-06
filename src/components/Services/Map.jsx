import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Leaflet for custom icons
import { IoStar, IoStarOutline } from "react-icons/io5";

const Map = ({ activeMarker }) => {
	// Refs to store markers
	const markerRef1 = useRef(null);
	const markerRef2 = useRef(null);
	const mapRef = useRef(null); // Ref for the map instance

	// Custom icon for active marker
	const createCustomIcon = (isActive) => {
		return new L.Icon({
			iconUrl:
				"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png", // Example active icon
			iconSize: isActive ? [42, 42] : [32, 32], // Size of the icon
			iconAnchor: [16, 32], // Anchor point of the icon
			popupAnchor: [0, -32], // Popup anchor (above the icon)
		});
	};

	// UseEffect to recenter map when activeMarker changes
	useEffect(() => {
		if (mapRef.current) {
			// Set the map view based on the active marker
			const positions = {
				1: [16.3067, 80.4365], // Position for marker 1
				2: [16.3167, 80.4465], // Position for marker 2
			};
			const position = positions[activeMarker];

			// Offset the longitude slightly to the right (e.g., +0.01)
			if (position) {
				const adjustedPosition = [
					position[0], // Keep the same latitude
					position[1] - 0.04, // Add an offset to the longitude (slightly to the right)
				];

				// Recenter map to the selected marker with offset
				mapRef.current.setView(adjustedPosition, 13, {
					animate: true, // Add animation to the movement
				});
			}
		}
	}, [activeMarker]); // Re-run when activeMarker changes

	return (
		<div style={{ height: "100%", width: "100%" }}>
			<MapContainer
				center={[16.3067, 80.4365]} // Initial center
				zoom={13}
				scrollWheelZoom={true}
				style={{ height: "100%", width: "100%" }}
				ref={mapRef} // Set ref to access map instance
			>
				{/* TileLayer for the map */}
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>

				{/* Marker 1 */}
				<Marker
					position={[16.3067, 80.4365]}
					ref={markerRef1}
					icon={createCustomIcon(activeMarker === 1)} // Apply active icon if activeMarker is 1
				>
					<Popup>
						<div className="w-full h-80 pr-2 overflow-y-scroll">
							<div className="w-full h-1/3 bg-neutral-400 rounded-md pointer-events-auto"></div>
							<h1 className="text-3xl mt-4 font-bold">Garage 1</h1>
							<p className="mt-4 text-neutral-700 text-justify">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
								voluptas voluptatum sequi quas dignissimos at modi, ad tempora
								harum rerum minima porro dicta aspernatur quaerat soluta ullam
								numquam recusandae minus.
							</p>
							<h1 className="text-xl mt-6 font-semibold">Services Offered</h1>
							<div className="mt-4 flex flex-col gap-2">
								<Service />
								<Service />
								<Service />
								<Service />
								<Service />
							</div>
						</div>
					</Popup>
				</Marker>

				{/* Marker 2 */}
				<Marker
					position={[16.3167, 80.4465]}
					ref={markerRef2}
					icon={createCustomIcon(activeMarker === 2)} // Apply active icon if activeMarker is 2
				>
					<Popup>
						<h1>Garage 2</h1>
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default Map;

// Service component
export const Service = ({ serviceName, rating }) => {
	return (
		<div className="w-full py-2 flex justify-between items-center">
			<h5 className="text-lg font-semibold text-neutral-800">Service 1</h5>
			<div className="flex gap-2 items-center text-neutral-800">
				<div>4</div>
				<div className="flex">
					<IoStar />
					<IoStar />
					<IoStar />
					<IoStar />
					<IoStarOutline />
				</div>
				<div>(121)</div>
			</div>
		</div>
	);
};
