import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from 'react-leaflet';
import { useLocation } from 'react-router-dom';
import L from 'leaflet';

function RecenterAutomatically({ userLocation }) {
  const map = useMap();
  useEffect(() => {
    if (userLocation) {
      map.setView(userLocation, 18);
    }
  }, [userLocation, map]);
  return null;
}

function MapView() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const selectedDepartment = params.get('department');

  const departmentCoordinates = {
    CSE: [19.867831, 75.323296],
    ENTC: [19.867472, 75.323414],
    Mechanical: [19.868380, 75.323473],
    Electrical: [19.868683, 75.324433],
    Civil: [19.867457, 75.324411],
  };

  const departmentLocation = departmentCoordinates[selectedDepartment] || [19.867831, 75.323296];

  const [userLocation, setUserLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported!");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const newLocation = [position.coords.latitude, position.coords.longitude];
        setUserLocation(newLocation);
        fetchRoute(newLocation, departmentLocation);
      },
      (error) => {
        console.error("Location error:", error);
        alert("Unable to access your location.");
      },
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  const fetchRoute = async (start, end) => {

    try{

        const response = await fetch("https://college-campus-navigation-backend.onrender.com/route",{

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify({

                coordinates:[
                    [start[1],start[0]],
                    [end[1],end[0]]
                ],

                profile:"foot-walking",

                format:"geojson",

                instructions:false

            })

        });
const data = await response.json();

console.log("Response:", data);

if (!response.ok) {
    console.error("Backend Error:", data);
    return;
}

if (!data.features) {
    console.error("No route returned:", data);
    return;
}


        const coords = data.features[0].geometry.coordinates.map(c=>[c[1],c[0]]);

        setRouteCoordinates(coords);

        setDistance(data.features[0].properties.summary.distance);

        setDuration(data.features[0].properties.summary.duration);

    }

    catch(err){

        console.log(err);

    }

}

  const formatDistance = (meters) => {
    return meters < 1000 ? `${Math.round(meters)} meters` : `${(meters / 1000).toFixed(2)} km`;
  };

  const formatDuration = (seconds) => {
    return `${Math.round(seconds / 60)} min`;
  };

  return (
    <div style={{ position: 'relative' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>Real-Time Navigation to {selectedDepartment}</h3>

      <div style={{
        position: 'absolute',
        top: '70px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white',
        padding: '10px 20px',
        borderRadius: '10px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        zIndex: 1000,
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
        display: distance > 0 ? 'block' : 'none'
      }}>
        Distance: {formatDistance(distance)} | ETA: {formatDuration(duration)}
      </div>

      <MapContainer
        className="map-container"
        center={userLocation || [19.867831, 75.323296]}
        zoom={18}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>You are here!</Popup>
          </Marker>
        )}
        <Marker position={departmentLocation}>
          <Popup>Destination: {selectedDepartment}</Popup>
        </Marker>
        {routeCoordinates.length > 0 && (
          <Polyline positions={routeCoordinates} pathOptions={{ color: 'blue', weight: 5 }} />
        )}
        <RecenterAutomatically userLocation={userLocation} />
      </MapContainer>
    </div>
  );
}

export default MapView;





