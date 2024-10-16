import React, { useState } from 'react';
import './Contact.css';
import { acessKey } from '../../../accesskey';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const notifySuccess = () => toast.success("Form submitted successfully!");
  const notifyError = () => toast.warn("Please fill out all required fields!");

  const onSubmit = async (event) => {
    event.preventDefault();
    let name = document.getElementById("name");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if (name.value === "" || email.value === "" || lname.value === "" || message.value === "") {
      notifyError();
    } else {
      setIsSubmitting(true); // Disable button during submission

      const formData = new FormData(event.target);
      formData.append("access_key", acessKey);

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      name.value = "";
      lname.value = "";
      email.value = "";
      message.value = "";

      if (res.success) {
        notifySuccess();
      }
      setIsSubmitting(false); // Re-enable button after submission
    }
  };

  return (
    <div id='Contact' className='w-full h-auto flex flex-col items-center pb-20 mt-20 gap-10 px-4 sm:px-8 lg:px-16'>
      <h1 className='text-3xl sm:text-4xl md:text-[2.5vw] font-semibold text-center'>GET IN TOUCH</h1>
      <form onSubmit={onSubmit} className='w-full max-w-[800px] flex flex-col justify-center items-center gap-12'>
        <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-5'>
          <input
            id='name'
            className='w-full sm:w-1/2 outline-none border-b-4 border-b-orange-400 bg-transparent text-base sm:text-lg md:text-2xl pb-2'
            type="text"
            name='First Name'
            placeholder='First Name'
            autoComplete='off'
          />
          <input
            id='lname'
            className='w-full sm:w-1/2 outline-none border-b-4 border-b-orange-400 bg-transparent text-base sm:text-lg md:text-2xl pb-2'
            type="text"
            name='Last Name'
            placeholder='Last Name'
            autoComplete='off'
          />
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-10'>
          <input
            id='email'
            className='w-full outline-none border-b-4 border-b-orange-400 bg-transparent text-base sm:text-lg md:text-2xl pb-2'
            type="email"
            name='Email'
            placeholder='Email'
            autoComplete='off'
          />
          <textarea
            id='message'
            className='w-full outline-none border-b-4 border-b-orange-400 bg-transparent text-base sm:text-lg md:text-2xl pb-2'
            placeholder='Your Message'
            name='Message'
            rows="4"
          />
        </div>
        <button
          id='btn'
          className='contact relative border-2 w-1/3 px-3 py-3 rounded-xl text-xl font-semibold overflow-hidden hover:text-white'
          type="submit"
          disabled={isSubmitting} // Disable button while submitting
        >
          <span className="relative z-10">{isSubmitting ? "Submitting..." : "Submit"}</span>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
