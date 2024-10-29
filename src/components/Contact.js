import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_smif0no', // Replace with your EmailJS service ID
      'template_iamq5nx', // Replace with your EmailJS template ID
      formData,
      'WDOafP1EDXLcaMnaa' // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('There was an error sending the email:', error);
    });
  };

  return (
    <section id="contact" className="py-10 px-6 bg-white">
      <h2 className="text-2xl font-semibold text-center text-blue-800">Contact</h2>
      <form onSubmit={handleSubmit} className="flex flex-col mt-4 space-y-4 max-w-md mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-800 text-white py-2 rounded hover:bg-blue-600">
          Send Message
        </button>
        {isSent && <p className="text-green-500 text-center mt-4">Your valuable Message sent successfully!</p>}
      </form>
    </section>
  );
};

export default Contact;
