import React from "react";
import "./contact.scss";

function contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h1>Contact</h1>
      </div>
      <div className="right">
        <div className="inputAddressContainer">
          {/* ------------------- */}
          <div className="inpContainer">
            <input
              type="text"
              name="name"
              id="name"
              className="inputAdd"
              autoComplete="off"
              placeholder="   "
            />
            <label htmlFor="name" className="label">
              Name
            </label>
          </div>
          {/* -------------- */}
          <div className="inpContainer">
            <input
              type="text"
              name="email"
              id="email"
              className="inputAdd"
              autoComplete="off"
              placeholder="   "
            />
            <label htmlFor="email" className="label">
              Email
            </label>
          </div>
          {/* ---------------------- */}
          <div className="inpContainer messageContainer">
            <textarea
              name="message"
              id="message"
              className="inputAdd"
              autoComplete="off"
              placeholder="   "
            />
            <label htmlFor="message" className="label">
              Message
            </label>
          </div>
          <div className="btnCon">
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
