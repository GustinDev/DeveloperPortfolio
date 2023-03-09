import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

//HIGHER ORDER COMPONENT - CONTAINS ALL ABOUT
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 0.5,
            speed: 200,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Sobre mí</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        ¡Hola! Soy un desarrollador web frontend bilingüe apasionado por la
        tecnología y la programación. He trabajado en varios proyectos en los
        que he creado interfaces de usuario responsive, escalables y eficientes.
        Me encanta trabajar en equipo y compartir conocimientos para lograr los
        objetivos del proyecto de manera efectiva. Si necesitas un desarrollador
        frontend confiable, altamente motivado y especializado en React, no
        dudes en contactarme. ¡Estoy emocionado por trabajar contigo!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 flex items-center justify-center">
        {
          //Go to services to change experience
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
