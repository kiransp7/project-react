import React, { useState } from "react";
import "./contactus.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contactus() {
  const [done, setDone] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4skr10c",
        "template_w5l901e",
        form.current,
        "KIzSR5bVUywF4yBAW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="c-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact Me</span>
          <div
            className="blur s-blur"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        {/*   Form tag.........................  */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          ></input>
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          ></input>
          <textarea
            name="message"
            className="user"
            placeholder="Message"
          ></textarea>
          <input
            type="submit"
            name="message"
            value="send"
            className="button"
          ></input>
          
          <span>{done && "Thank you for contacting me!!"}</span>
          <div
            className="blur s-blur"
            style={{ background: "val(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}
