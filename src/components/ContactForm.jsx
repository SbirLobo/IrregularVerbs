import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

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
          console.log("SUCCESS!");
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
        className="rounded-md py-1 px-2 root"
      />
      <label className="text-left pt-3 pb-1">Email</label>
      <input
        required
        type="email"
        name="user_email"
        className="rounded-md py-1 px-2"
      />
      <label className="text-left pt-3 pb-1">Message</label>
      <textarea required name="message" className="rounded-md py-1 px-2 h-60" />
      <input
        type="submit"
        value="Send"
        className="rounded-md py-1 px-2 cursor-pointer border-2 border-red-700 mt-4"
      />
    </form>
  );
}
