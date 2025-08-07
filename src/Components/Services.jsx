import React, { useEffect, useState } from 'react'
import './Services.css';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/services')
      .then((res) => setServices(res.data))
      .catch((err) => console.error('Error fetching services:', err));
  }, [])
  return (
 <section id="services">
      <h2 className='head'>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-row ${index % 2 !== 0 ? 'reverse' : ''}`}
          >
            <img src={service.img} alt={service.title} />
            <div className="service-text">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Services ;