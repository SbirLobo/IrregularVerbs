import PropTypes from "prop-types";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import UpdateStyles from "./UpdateStyle";

export default function ContactForm({ whiteMode }) {
  const form = useRef();
  UpdateStyles(whiteMode);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_irr00tap&learn",
        "template_irr00tap&learn",
        form.current,
        {
          publicKey: "8MqHyIRSa1VQKQLE8",
        }
      )
      .then(
        () => {
          alert("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col p-8">
      <label className="text-left pt-3 pb-1">Name</label>
      <input
        required
        type="text"
        name="user_name"
        className="rounded-md py-1 px-2 text-[var(--text-white-theme)] root"
      />
      <label className="text-left pt-3 pb-1">Email</label>
      <input
        required
        type="email"
        name="user_email"
        className="rounded-md py-1 px-2 text-[var(--text-white-theme)]"
      />
      <label className="text-left pt-3 pb-1">Message</label>
      <textarea
        required
        name="message"
        className="rounded-md py-1 px-2 text-[var(--text-white-theme)] h-60"
      />
      <input
        type="submit"
        value="Send"
        className={`mainButton text-center w-full rounded-md py-1 px-2 cursor-pointer border-2 ${
          whiteMode
            ? "bg-[--bg-white-theme-mainButton]"
            : "bg-[--bg-dark-theme-mainButton]"
        }`}
      />
    </form>
  );
}

ContactForm.propTypes = {
  whiteMode: PropTypes.bool,
};
