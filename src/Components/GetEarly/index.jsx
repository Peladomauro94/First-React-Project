import { Button } from "../GeneralComponents/Button";
import { PharagraphBold } from "../GeneralComponents/PharagraphBold";
import { PharagraphLight } from "../GeneralComponents/PharagraphLight";
import React, { useState } from "react";

export const GetEarly = () => {
  const [email, setEmail] = useState ("");
  const [error, setError] = useState("");
  
  const handleEmail = (e) =>{
    setEmail(e.target.value);
    setError("");
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    if ((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(email)) {
      setError('');
      
    } else {
      setError('Please enter a valid email adress');
    }
    e.target.reset(setEmail(""));
  }






  return (
    <div className="container getEarly-div">
      <div className="getEarly-title">
        <PharagraphBold text="Get early access today" />
      </div>
      <div className="getEarly-text">
      <PharagraphLight text="It only takes a minute to sing up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you." />
      </div>
      
      <form className="getEarly-second__part" onSubmit={handleSubmit} noValidate>
        <div className="getEarly-form_div">
        <input className="getEarly-input" type="email" value={email} placeholder="email@example.com" onChange={ handleEmail } name="email" id="email"/>
        <span className='getEarly-error'>{error}</span> 
        </div>
        <Button type="getEarly-button" buttonText="Get Started For Free" />
      </form>
    </div>
  );
};
