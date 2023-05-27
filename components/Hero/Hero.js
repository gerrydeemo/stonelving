import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaLocationArrow,
} from "react-icons/fa";
import {
  SiGooglemaps,
  SiLeetcode,
  SiNextdoor,
  SiWhatsapp,
} from "react-icons/si";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const Hero = () => {
  const bag2 = "/assets/hero.JPG";
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
      >
        <div
          style={{ backgroundImage: `url(${bag2})` }}
          className="w-full h-screen  text-center "
        >
          <div className="flex justify-center items-center p-3 max-w-[1240px] w-full h-full mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-50, 0], opacity: 3 }}
            >
              <h1 className="  font-bold text-white text-6xl sm:text-3xl md:text-4xl lg:text-5xl ">
                J Livingstone Landscaping
              </h1>
              <h2 className="text-white  py-3">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("Lawn Care")

                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Hedge Trimming")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Power Washing")

                      .start();
                  }}
                />
              </h2>

              {/* <h2 className='text-gray-600  py-3'>Frontend Developer</h2> */}
              <div className="flex justify-between items-center m-auto max-w-[280px] py-5">
                <div className="rounded-full shadow-lg shadow-gray-600 bg-white p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a
                    href="https://goo.gl/maps/zPeBoFaJMi6JXtq39?coh=178572&entry=tt"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <SiGooglemaps />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 bg-white p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a
                    href="https://www.facebook.com/profile.php?id=100093183574803"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <FaFacebook />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 bg-white p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a href="tel:7383556320" target={"_blank"} rel={"noreferrer"}>
                    <SiWhatsapp />
                  </a>
                </div>
                <div
                  onClick={() =>
                    (window.location.href =
                      "mailto:jonnylivingstone@icloud.com")
                  }
                  className="rounded-full shadow-lg shadow-gray-600 bg-white p-5 cursor-pointer hover:scale-110 ease-in duration-300"
                >
                  <AiOutlineMail />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
