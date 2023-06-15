import React, { useState } from "react";
import "./contact.scss";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const txt = "Send Message";
  const dataObj = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(dataObj);
  const [loader, setLoader] = useState(false);
  const [btnText, setBtnText] = useState(txt);

  const handleChange = (e) => {
    setFormData((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let lengthOfMessage =
      formData.message.split(" ").length + formData.message.split("\n").length;
    let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (formData.name.length === 0) {
      toast.error("Name field is required!");
    } else if (formData.email.length === 0) {
      toast.error("Email field is required!");
    } else if (!regex.test(formData.email)) {
      toast.error("Enter correct email!");
    } else if (formData.message.length === 0) {
      toast.error("Message field is required!");
    } else if (lengthOfMessage <= 20) {
      toast.error("Atleast message having 20 words only!");
    } else if (lengthOfMessage >= 100) {
      toast.error("Max 100 words is allowed in message!");
    } else {
      try {
        setLoader(true);
        const response = await fetch(
          "https://sendmail-9fac.onrender.com/api/send-mail",
          {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "include", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(formData), // body data type must match "Content-Type" header
          }
        ); // parses JSON response into native JavaScript objects
        const message = await response.json();
        setLoader(false);
        setBtnText("✔️" + message.message);
        setFormData(dataObj);
        setTimeout(() => {
          setBtnText(txt);
        }, 3000);
      } catch (err) {
        console.log(err);
      }
    }
  };

  // -------------------------------------------
  return (
    <div className="contact" id="contact">
      <h1>Contact me</h1>
      <div className="inner-contact">
        <div className="left">
          <img
            src={process.env.PUBLIC_URL + "/images/contact.svg"}
            alt="contact images"
          />
        </div>
        <div className="right">
          <form
            // action="https://formspree.io/f/xnqrzagk"
            onSubmit={handleFormSubmit}
            method="post"
            target="_blank"
            className="inputAddressContainer"
          >
            {/* <div className="inputAddressContainer"> */}
            {/* ------------------- */}
            <div className="inpContainer">
              <input
                type="text"
                name="name"
                value={formData.name}
                id="name"
                className="inputAdd"
                autoComplete="off"
                placeholder="   "
                onChange={handleChange}
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
                value={formData.email}
                id="email"
                className="inputAdd"
                autoComplete="off"
                placeholder="   "
                onChange={handleChange}
              />
              <label htmlFor="email" className="label">
                Email
              </label>
            </div>
            {/* ---------------------- */}
            <div className="inpContainer messageContainer">
              <textarea
                name="message"
                value={formData.message}
                id="message"
                className="inputAdd"
                autoComplete="off"
                placeholder="   "
                onChange={handleChange}
              />
              <label htmlFor="message" className="label">
                Message
              </label>
            </div>
            <div className="btnCon">
              <button type="submit" disabled={loader}>
                {loader && (
                  <section className="dots-container">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </section>
                )}
                {!loader && btnText}
              </button>
            </div>
            {/* </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
