import { useLocation } from 'react-router-dom';

const MapComponent = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const lat = parseFloat(query.get("lat"));
  const lng = parseFloat(query.get("lng"));
  const address = query.get("address");

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Location Preview</h2>
      <p className="mb-2 text-sm text-gray-500">Address: {address}</p>
      <iframe
        src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        className="rounded shadow-md"
      ></iframe>
    </div>
  );
};

export default MapComponent;
