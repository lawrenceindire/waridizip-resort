import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // State to store rooms fetched from the backend
  const [rooms, setRooms] = useState([]);

  // useEffect runs once when the component mounts
  useEffect(() => {
    // Replace with your actual backend URL if deployed, otherwise use localhost
    axios.get('http://localhost:5000/api/rooms')
      .then(response => {
        setRooms(response.data);
      })
      .catch(error => {
        console.error('Error fetching rooms:', error);
      });
  }, []); // empty array means run once after the first render

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>WaridiZip Ventures Resorts</h1>
      <h2>Luxury Hotel & Accommodation</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {rooms.length === 0 && <p>No rooms available right now.</p>}
        {rooms.map(room => (
          <div
            key={room._id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '15px',
              width: '280px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={room.image}
              alt={room.title}
              style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3>{room.title}</h3>
            <p>{room.description}</p>
            <h4>KES {room.price}</h4>
            <button style={{ padding: '10px', width: '100%', background: '#0f766e', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
       