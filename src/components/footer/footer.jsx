import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import "./footer.scss";

//  Heart - &#128151;

function footer() {
  return (
    <div className="footer">
      <div className="left">
        &#169; 2022 Designed with <FaReact /> By{" "}
        <a
          href="https://www.linkedin.com/in/mdmojahid01/"
          title="LInkedIn profile"
        >
          Mohammad Mojahid
        </a>
      </div>
      <div className="right">
        <div className="number">
          <a
            target="blank"
            href="https://wa.me/7903109130"
            title="WhatsApp Number"
          >
            <BsWhatsapp />
          </a>
        </div>
        <div className="email">
          <a href="mailto:mojahidmd92@gmail.com" title="Email">
            <HiOutlineMail />
            mojahidmd92@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default footer;
