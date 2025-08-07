const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const services = [
  {
    title: 'Strength Training',
    desc: 'Build power, boost endurance, and sculpt your physique with our professional strength and conditioning programs. Designed for all fitness levels, our training blends modern equipment, personalized coaching, and progressive techniques to help you achieve your strongest version. Whether you are aiming to tone muscles or gain bulk, we tailor each session to meet your goals while ensuring proper form and injury prevention..',
    img: 'strength.jpg',
  },
  {
    title: 'Cardio Sessions',
    desc: 'Get your heart pumping and calories burning with our high-energy cardio sessions. From treadmill sprints to cycling, jump rope drills, and HIIT circuits — our cardio training is designed to improve cardiovascular health, increase stamina, and help in effective weight loss. Each session is fun, dynamic, and suitable for all fitness levels. Stay energized, stay fit!.',
    img: 'cardio2.jpg',
  },
  {
    title: 'Yoga & Flexibility',
    desc: 'Reconnect your body and mind with our Yoga and Flexibility sessions. Designed to enhance balance, mobility, and mental clarity, these classes focus on deep stretches, breathing techniques, and mindful movement. Whether you are recovering from workouts or looking to improve posture and core strength, our yoga and stretching routines bring calm, focus, and resilience to your fitness journey.',
    img: 'Yoga.jpg',
  },
  {
    title: 'Zumba Dance Fitness',
    desc: 'Dance your way to fitness with our fun-filled Zumba classes! Zumba blends Latin and international music with energetic dance moves, creating a dynamic workout that’s both effective and exhilarating. It improves coordination, burns calories, and boosts mood — all while having a blast! Whether you’re a beginner or an experienced dancer, Zumba makes getting fit feel like a party..',
    img: 'zoomba.jpg',
  },
];


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


app.get('/api/services', (req, res) => {
  res.json(services);
});

app.get('/api/trainers', (req, res) => {
  res.json(trainers);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
