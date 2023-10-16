import React, { useState } from "react";
import img from '../../Images/image_2.jpg'
import './Contact.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Corrected the state variable name
  const [lname, setLname] = useState(""); // Corrected the state variable name
  const [feedback, setFeedback] = useState(""); // Corrected the state variable name

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !feedback || !lname) {
      toast.error("Please fill in all required fields.", {
        duration: 2000
      });
      return; 
    }

    try {
      const res = await axios.post('http://localhost:8080/api/v1/feedback', { name, email, feedback, lname });

      console.log("Response:", res);
      if (res && res.data.success) {
        toast.success("Thanks for Feedback");
        // alert("Thanks for Feedback");
        setName("");
        setEmail(""); 
        setLname(""); 
        setFeedback(""); 
      } else {
        toast.error(res.data.error)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div  id="contact">
      <ToastContainer/>
      <div className='cont_container' id="contact">

        <div className='form_cont'>
          <h1 style={{ color: "black", fontFamily: "inter" }} className="about_Heading">Contact Us</h1>
          <form>
            <div className='input_div'>
              <input type='text' placeholder='First name' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className='input_div'>
              <input type='text' placeholder='Last name' value={lname} onChange={(e) => setLname(e.target.value)} />
            </div>
            <div className='input_div'>
              <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='input_div'>
              <textarea id="w3review" placeholder='Message' rows="4" cols="50" value={feedback} onChange={(e) => setFeedback(e.target.value)} required></textarea>
              <div className='sub_btn'>
              <button className='subbtn' onClick={handleSubmit}>Submit</button>
            </div>
            </div>

            
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default Contactus;
