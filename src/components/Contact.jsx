/* eslint-disable react-refresh/only-export-components */
import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../Utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_6h8o21p',
      'template_8seircd',
      {
        from_name: form.name,
        to_name: 'Anjal Kesarwani',
        from_email: form.email,
        to_email: 'anjalkesarwaniinfo@gmail.com',
        message: form.message,
        reply_to: form.email
      },
      'Xgb0DXsWftgWxEpiQ' 
    )
      .then(() => {
        setLoading(false);
        alert('I will get back to you as soon as possible.');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.');
      });
  };

  return (
    <section
      className="w-full py-20 px-6 md:px-20 bg-gradient-to-br from-[#0f0c29] via-[#1e1536] to-[#221b44] text-white"
    >
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden max-w-7xl mx-auto">
        {/* Contact Form */}
        <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          className="flex-[0.75] bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10"
        >
          <p className={`${styles.sectionSubText}`}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {/* Name */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-black/40 border border-white/20 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none font-medium"
              />
            </label>

            {/* Email */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-black/40 border border-white/20 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none font-medium"
              />
            </label>

            {/* Message */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-black/40 border border-white/20 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none font-medium"
              />
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-fuchsia-500 py-3 px-8 w-fit text-white font-bold shadow-lg hover:shadow-[0_0_25px_rgba(217,70,239,0.6)] rounded-xl transition"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        {/* Earth Animation */}
        <motion.div
          variants={slideIn('right', "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {/* Footer Info */}
      <div className="mt-12 flex flex-col items-center justify-center gap-4 text-sm sm:text-base text-white/80">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/anjal-kesarwani-685508221/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-fuchsia-500 transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.01 8H5V24H.01V8zM7.5 8h4.79v2.4h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 6 3.3 6 7.59V24H17V16c0-1.91-.04-4.38-2.67-4.38-2.67 0-3.08 2.08-3.08 4.23V24H7.5V8z" />
          </svg>
          LinkedIn
        </a>

        {/* Email */}
        <a
          href="mailto:anjalkesarwaniinfo@gmail.com"
          className="flex items-center gap-2 hover:text-fuchsia-500 transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4C2.9 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H20C21.1 20 22 19.11 22 18V6C22 4.89 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
          </svg>
          anjalkesarwaniinfo@gmail.com
        </a>

        {/* Rights Reserved */}
        <p className="text-xs text-gray-400 mt-2">
          © {new Date().getFullYear()} Anjal Kesarwani. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
