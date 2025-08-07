import React, { useEffect, useState } from 'react'
import './Trainers.css';
import axios from 'axios';

export const Trainers = () => {
   const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/trainers')
      .then((res) => setTrainers(res.data))
      .catch((err) => console.error('Error fetching trainers:', err));
  }, []);
  return (
   <section id="trainers" className="trainers-section">
      <h2 className="trainers-title">💪 Meet Our Trainers</h2>
      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <div key={trainer.id} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} className="trainer-img" />
            <h3>{trainer.name}</h3>
            <p>{trainer.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
