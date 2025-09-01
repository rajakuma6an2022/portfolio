import React, { useState } from "react";
import { motion } from "framer-motion";
import Popup from "./Popup";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log('form', form)
    // try {
    //   await axios.post("https://api.rajakumaran.dev/send-email", form, {
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   setStatus("✅ Message sent successfully!");
    //   setForm({ name: "", email: "", message: "" });
    // } catch (err) {
    //   console.error(err);
    //   setStatus("❌ Failed to send message. Please try again later.");
    // }
  };
  return (
    <Popup title="Contact Me">
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form?.name}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form?.email}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form?.message}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          required
        />
        <motion.button
          type="submit"
          onClick={handleSubmit}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Send
        </motion.button>
      </form>
    </Popup>
  );
};

export default ContactForm;
