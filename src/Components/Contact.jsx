import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div> <form className="form-cont">
      <h1>Contact us</h1>
      <div className="form-group">
          <label htmlFor="Name">Name:</label><br/>
          <input type="text" name="name" placeholder="Enter name" id="name" /></div>
        <div className="form-group">
          <label htmlFor="password">Email:</label><br/>
          <input type="email" name="email" placeholder="Enter email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="textbox">Message:</label><br/>
          <textarea type="text" name="message" placeholder="Write a Message" id="message" /><br/>
          <button className="submitCont">Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Contact

