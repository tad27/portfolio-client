import React, { useState } from "react";
import { MdCall, MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

import SectionLayout from "./SectionLayout";

function Contact() {
  return (
    <section id="contact" className="py-20">
      <SectionLayout title="Contact Me">
        <p className="mb-10 max-w-5xl text-md">
          Thank you for visiting my portfolio website. If you're interested in
          discussing potential job opportunities, feel free to reach out to me.
        </p>
        <div className="flex-cols sflex-row-reverse items-center gap-14 md:flex">
          <div className="flex-1">
            <ContactForm />
          </div>
          <span className="mt-10 block text-center">Or</span>
          <div className="flex-1 sm:w-1/2 ">
            <div className="mt-10 flex flex-col items-start gap-2 bg-light/25 py-2 px-4 dark:bg-dark">
              <a
                href="mailto:tadesseakele27@gmail.com"
                target="_blank"
                className="flex w-full items-center gap-2 py-4 hover:text-brand "
                title="Drop me a line."
              >
                <MdEmail size={20} /> tadesseakele27@gmail.com
              </a>
              <hr className="w-full border-light dark:border-gray/25" />
              <a
                href="tel:0973168516"
                className="flex w-full items-center gap-2 py-4 hover:text-brand"
                title="Call me!"
              >
                <MdCall size={20} /> 0973168516
              </a>
            </div>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}

const ContactForm = () => {
  const [notification, setNotification] = useState("");
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setDetails((details) => ({
      ...details,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Send the Email
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_EMAIL_TEMPLATE,
        details,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);

          // Show Notification to the user
          setNotification(
            `Thanks ${details.name}, your message is sent successfully.`
          );
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Clear the notification
    setTimeout(() => {
      setNotification("");
    }, 5000);

    // Clear the form
    setDetails({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={sendEmail}
      className=" max-w-2xl rounded-md border border-light/50 bg-white p-10 dark:border-gray dark:bg-darkest"
    >
      <h3>Drop me a line here.</h3>
      <div className="flex flex-col">
        <label
          className="text-gray after:ml-0.5 after:text-red-500 after:content-['*']"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          value={details.name}
          onChange={handleChange}
          className=""
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          className="text-gray after:ml-0.5 after:text-red-500 after:content-['*']"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={details.email}
          onChange={handleChange}
          className=""
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          className="text-gray after:ml-0.5 after:text-red-500 after:content-['*']"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          name="message"
          value={details.message}
          onChange={handleChange}
          className=""
          id="message"
          rows="4"
          placeholder="What's on your mind?"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        // value="Send"
        className="mt-4 w-full rounded-md  bg-gradient-to-r from-indigo-600 to-brand py-3 px-2 font-mono uppercase text-white transition-opacity hover:opacity-95"
      >
        Send
      </button>
      {notification && (
        <h5 className="mt-4 w-full bg-brand/5 p-4 text-brand">
          {notification}
        </h5>
      )}
    </form>
  );
};
export default Contact;
