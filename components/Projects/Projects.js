import React from "react";
const lawncare1 = "/assets/lawncare.JPG";
const lawncare2 = "/assets/lawncare2.JPG";
const lawncare3 = "/assets/lawncare3.JPG";
const stones1 = "/assets/stones.JPG";
const stones2 = "/assets/stones2.JPG";
const stones3 = "/assets/stones3.JPG";
const powerwashing1 = "/assets/powerwashing.JPG";
const powerwashing2 = "/assets/powerwashing2.JPG";
const powerwashing3 = "/assets/powerwashing3.JPG";
const weeding1 = "/assets/weeding.JPG";
const weeding2 = "/assets/weeding2.JPG";
const weeding3 = "/assets/weeds.JPG";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl tracking-widest uppercase font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-black to-green-600">
            Jobs
          </p>
          <h2 className="py-4">Catalogue</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center">
          <motion.div
            className="transition-transform duration-300 transform hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
          >
            <div className="flex flex-col items-center mb-8 hover:bg-gray-100 rounded-md shadow-md p-4">
              <div className="relative">
                <Image
                  src={lawncare1}
                  height={350}
                  width={350}
                  alt="Project"
                  className="mr-4"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-lg font-medium mt-4">Lawn Care</p>
            </div>
          </motion.div>
          <motion.div
            className="transition-transform duration-300 transform hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
          >
            <div className="flex flex-col items-center mb-8 hover:bg-gray-100 rounded-md shadow-md p-4">
              <div className="relative">
                <Image
                  src={lawncare2}
                  height={350}
                  width={350}
                  alt="Project"
                  className="mr-4"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-lg font-medium mt-4">Lawn Care</p>
            </div>
          </motion.div>
          <motion.div
            className="transition-transform duration-300 transform hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
          >
            <div className="flex flex-col items-center mb-8 hover:bg-gray-100 rounded-md shadow-md p-4">
              <div className="relative">
                <Image
                  src={lawncare3}
                  height={350}
                  width={350}
                  alt="Project"
                  className="mr-4"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-lg font-medium mt-4">Lawn Care</p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center">
          <motion.div
            className="transition-transform duration-300 transform hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
          >
            <div className="flex flex-col items-center mb-8 hover:bg-gray-100 rounded-md shadow-md p-4">
              <div className="relative">
                <Image
                  src={stones1}
                  height={350}
                  width={350}
                  alt="Project"
                  className="mr-4"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-lg font-medium mt-4">Stone Laying</p>
            </div>
          </motion.div>
          <motion.div
            className="transition-transform duration-300 transform hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
          >
            <div className="flex flex-col items-center mb-8 hover:bg-gray-100 rounded-md shadow-md p-4">
              <div className="relative">
                <Image
                  src={stones2}
                  height={350}
                  width={350}
                  alt="Project"
                  className="mr-4"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-lg font-medium mt-4">Stone Laying</p>
            </div>
          </motion.div>
          <motion.div
            className="transition-transform duration-300 transform hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
          >
            <div className="flex flex-col items-center mb-8 hover:bg-gray-100 rounded-md shadow-md p-4">
              <div className="relative">
                <Image
                  src={stones3}
                  height={350}
                  width={350}
                  alt="Project"
                  className="mr-4"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-lg font-medium mt-4">Stone Laying</p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-wrap justify-center">
          <motion.div
            className="transition-transform duration-300 transform hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
          >
            <div className="flex flex-col items-center mb-8 hover:bg-gray-100 rounded-md shadow-md p-4">
              <div className="relative">
                <Image
                  src={powerwashing1}
                  height={350}
                  width={350}
                  alt="Project"
                  className="mr-4"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-lg font-medium mt-4">Power Washing</p>
            </div>
          </motion.div>
          <motion.div
            className="transition-transform duration-300 transform hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
          >
            <div className="flex flex-col items-center mb-8 hover:bg-gray-100 rounded-md shadow-md p-4">
              <div className="relative">
                <Image
                  src={powerwashing2}
                  height={350}
                  width={350}
                  alt="Project"
                  className="mr-4"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-lg font-medium mt-4">Power Washing</p>
            </div>
          </motion.div>
          <motion.div
            className="transition-transform duration-300 transform hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
          >
            <div className="flex flex-col items-center mb-8 hover:bg-gray-100 rounded-md shadow-md p-4">
              <div className="relative">
                <Image
                  src={powerwashing3}
                  height={350}
                  width={350}
                  alt="Project"
                  className="mr-4"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-lg font-medium mt-4">Power Washing</p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-wrap justify-center">
          <motion.div
            className="transition-transform duration-300 transform hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
          >
            <div className="flex flex-col items-center mb-8 hover:bg-gray-100 rounded-md shadow-md p-4">
              <div className="relative">
                <Image
                  src={weeding1}
                  height={350}
                  width={350}
                  alt="Project"
                  className="mr-4"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-lg font-medium mt-4">Weeding</p>
            </div>
          </motion.div>
          <motion.div
            className="transition-transform duration-300 transform hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
          >
            <div className="flex flex-col items-center mb-8 hover:bg-gray-100 rounded-md shadow-md p-4">
              <div className="relative">
                <Image
                  src={weeding2}
                  height={350}
                  width={350}
                  alt="Project"
                  className="mr-4"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-lg font-medium mt-4">Weeding</p>
            </div>
          </motion.div>
          <motion.div
            className="transition-transform duration-300 transform hover:scale-110"
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
          >
            <div className="flex flex-col items-center mb-8 hover:bg-gray-100 rounded-md shadow-md p-4">
              <div className="relative">
                <Image
                  src={weeding3}
                  height={350}
                  width={350}
                  alt="Project"
                  className="mr-4"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-lg font-medium mt-4">Weeding</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
