// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddItems from './components/AddItems/AddItems';
import Orders from './components/Orders/Orders';
import ListItems from './components/ListItems/ListItems';
import DeliveryTracker from './components/MapComponent/MapComponent';
import MapComponent from './components/MapComponent/MapComponent';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddItems />} />
      <Route path="/list" element={<ListItems />} />
      <Route path="/orders" element={<Orders />} />
      {/* <Route path="/track" element={<DeliveryTracker />} /> */}
       <Route path="/map" element={<MapComponent />} />
    </Routes>

  );
}
export default App;