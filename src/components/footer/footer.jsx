import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import "./footer.scss";
import { CONNECT_ME } from "../../constants";

//  Heart - &#128151;

function footer() {
  return (
    <div className="footer">
      <div className="left">
        &#169; {new Date().getFullYear()} Designed with <FaReact /> By{" "}
        <a href={CONNECT_ME.LINKEDIN_PROFILE} title="LInkedIn profile">
          Mohammad Mojahid
        </a>
      </div>
      <div className="right">
        <div className="number">
          <a
            target="blank"
            href={CONNECT_ME.WHATSAPP_NUMBER}
            title="WhatsApp Number"
          >
            <BsWhatsapp />
          </a>
        </div>
        <div className="email">
          <a href={`mailto:${CONNECT_ME.EMAIL_ID}`} title="Email">
            <HiOutlineMail />
            {CONNECT_ME.EMAIL_ID}
          </a>
        </div>
      </div>
    </div>
  );
}

export default footer;
