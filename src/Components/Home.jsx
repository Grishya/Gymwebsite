import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const JoinClick = () => {
    navigate('/Login'); 
  };
  return (
   <section className="hero">
      <div className="hero-content">
        <h1>Unleash Your Power</h1>
        <p>Train with the best. Push your limits. Become stronger.</p>
        <button onClick={JoinClick}>Join Now</button>
      </div>
    </section> 
     )
}

export default Home