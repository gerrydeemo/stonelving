import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const ava = "/assets/about.png";
  return (
    <div id="about" className="w-full md:h-screen p-8 flex items-center ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ x: [-250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-black to-green-600">
              About
            </p>
            <h2 className="py-4">J Livingstone</h2>
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="py-2 text-gray-600">
              Welcome to Livingstone Landscaping! We are a dedicated team of
              professionals based in Lisburn, specializing in transforming
              ordinary yards into extraordinary outdoor living spaces.
              <br />
              <br />
              <p style={{ fontSize: 22 }}>We offer: </p>
              <li>Lawn Care</li>
              <li>Hedge Trimming</li>
              <li>Weeding</li>
              <li>Power Washing</li>
              <li>Gutter Cleaning</li>
              <li>Fencing</li>
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-auto m-auto  flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <Image src={ava} className="rounded-[50%]" width={350} height={350} />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
