import React from 'react'
import './Trainers.css';

const trainers = [
  {
    name: "Akshay & Arun",
    specialty: 'Strength Training',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Nandana',
    specialty: 'Yoga & Flexibility',
    image: 'https://img.freepik.com/free-photo/relaxed-stretching-yoga-session_23-2147645846.jpg?size=626&ext=jpg'
  },
  {
    name: "Surabhi & Aswanth",
    specialty: 'Cardio sessions',
    image: 'https://juicedmuscle.com/jmblog/sites/default/files/images/articles/15555.jpg'
  },
  {
    name: 'Lakshmi',
    specialty: 'Zumba Instructor',
    image: 'https://cdn.pixabay.com/photo/2017/06/08/01/47/zumba-2382200_1280.jpg'
  }
];
export const Trainers = () => {
  return (
   <section id="trainers" className="trainers-section">
      <h2 className="trainers-title">💪 Meet Our Trainers</h2>
      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <div key={index} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} className="trainer-img" />
            <h3>{trainer.name}</h3>
            <p>{trainer.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
