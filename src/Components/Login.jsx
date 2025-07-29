import React, { useState } from 'react'
import './Login.css';

const Login = () => {
    const [fdata, setfdata] = useState({
        Name:"",
        Phone:"",
        email:""
    });
    const handleChange=(e)=>{
    setfdata({...fdata,[e.target.name]:[e.target.value]});
    };
    const submitform=(e)=>{
  e.preventDefault();
  alert(" 🎉Thank you For joining");
  setfdata({
      Name: "",
      Phone: "",
      email: ""
    });
  console.log(fdata);
  
    }
  return (
    <div className='login-main'>
        <div className="login-card">
  
    <div className="fee-section">
      <h2>💳Fee Structure</h2>
      <div className="fee-item">
        <h3>🏋️Strength Training</h3>
        <p>₹1000/month</p>
      </div>
      <div className="fee-item">
        <h3>❤️Cardio Session</h3>
        <p>₹1200/month</p>
      </div>
      <div className="fee-item">
        <h3>🧘Yoga & Flexibility</h3>
        <p>₹800/month</p>
      </div>
      <div className="fee-item">
        <h3>💃Zumba</h3>
        <p>₹900/month</p>
      </div>
        <h3>💳 Payment Options</h3>
  <p>You can complete your payment through the following methods:</p>
  <ul>
    <li><strong>Google Pay (UPI ID):</strong> <span className="upi-id">oxygengym@okhdfcbank</span></li>
    <li><strong>Cash:</strong> Pay directly at the gym reception.</li>
  </ul>
  </div>
        <form onSubmit={submitform} className='form'>
            <h2>Join Our Gym..!.,</h2>
            <input type='text'  name='Name'placeholder='Enter Your Name' onChange={handleChange} value={fdata.Name} required/>
            <input type='tel' name='Phone' placeholder='enter your phnnumber' onChange={handleChange} value={fdata.Phone} pattern='[0-9]{10}' required>
            </input>
            <input type='email' name='email' placeholder='Enter Your mailid' onChange={handleChange} value={fdata.email} required/>
            <button className='fbtn'>Submit</button>
        </form>
    </div>
    </div>
    
  )
}

export default Login