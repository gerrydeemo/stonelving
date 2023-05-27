import React, { use, useState } from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import sendEmail from "./sendMail";
import { motion } from "framer-motion";

const Contact = () => {
  const [theFromEmail, setTheFromEmail] = useState("");
  const [theSubject, setTheSubject] = useState("");
  const [theDescription, setTheDescription] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    sendEmail({ theFromEmail, theSubject, theDescription });
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px]  m-auto px-2 py-16 w-full ">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl tracking-widest uppercase font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-black to-green-600">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
        >
          <div className="p-4">
            <form
              onSubmit={sendMail}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={theFromEmail}
                  onChange={(e) => setTheFromEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="service"
                >
                  Service:
                </label>
                <select
                  id="service"
                  value={theSubject}
                  onChange={(e) => setTheSubject(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Lawn Care">Lawn Care</option>
                  <option value="Hedge Trimming">Hedge Trimmming</option>
                  <option value="Weeding">Weeding</option>
                  <option value="Power Washing">Power Washing</option>
                  <option value="Gutter Cleaning">Gutter Cleaning</option>
                  <option value="Fencing">Fencing</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  value={theDescription}
                  onChange={(e) => setTheDescription(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  placeholder="Enter your description"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="p-4">
              <iframe
                title="Google Maps"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37055.55516406943!2d-6.103491500656928!3d54.51635169865119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4860fd87d4a2c71d%3A0xc297ab8d94f3183b!2sLisburn!5e0!3m2!1sen!2suk!4v1685204171782!5m2!1sen!2suk"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="#db2777" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
