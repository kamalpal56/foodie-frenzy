// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';

// const position = [28.6139, 77.2090]; // Example: Delhi

// const MapView = () => {
//   return (
//     <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={position}>
//         <Popup>
//           Delivery Location or Restaurant
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default MapView;

// import { useEffect, useRef, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import io from 'socket.io-client';

// function MapView() {
//   const [deliveryLocation, setDeliveryLocation] = useState(null);
//   const socketRef = useRef(null);

//   useEffect(() => {
//     socketRef.current = io('http://localhost:4000');
//      console.log("in map ")
//     socketRef.current.on('receiveLocation', (data) => {
//       console.log("Live location received:", data);
//       console.log("in map2 ")
//       setDeliveryLocation([data.lat, data.lng]);
//     });

//     return () => {
//       socketRef.current.disconnect();
//     };
//   }, []);

//   return (
//     <div className="w-full h-[400px]">
//       <MapContainer center={deliveryLocation || [28.6, 77.2]} zoom={14} style={{ height: "100%", width: "100%" }}>
//         <TileLayer
//           attribution='&copy; OpenStreetMap contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {deliveryLocation && (
//           <Marker position={deliveryLocation}>
//             <Popup>📦 Delivery Agent is here</Popup>
//           </Marker>
//         )}
//       </MapContainer>
//     </div>
//   );
// }
// export default MapView;

// import { useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:4000');

// function DeliverySimulator() {
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const fakeLocation = {
//         lat: 28.6139 + (Math.random() - 0.5) * 0.01,
//         lng: 77.2090 + (Math.random() - 0.5) * 0.01,
//       };

//       console.log('🚚 Sending location:', fakeLocation);
//       socket.emit('locationUpdate', fakeLocation);
//     }, 5000);

//     return () => {
//       clearInterval(interval);
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="p-4 bg-green-100">
//       <h2 className="text-lg font-semibold">🚚 Delivery Agent Active</h2>
//       <p>Emitting location every 5 seconds...</p>
//     </div>
//   );
// }

// export default DeliverySimulator;
import { useEffect, useState } from 'react';

function LocationTracker() {
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      alert('Geolocation not supported');
    }
  }, []);

  return (
    <div>
      <h2>Your Location</h2>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
    </div>
  );
}

export default LocationTracker;
