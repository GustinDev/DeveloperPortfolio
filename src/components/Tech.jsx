import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { styles } from "../styles";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <motion.div>
        <h2 className={styles.sectionHeadText}>Habilidades</h2>
        <br />

        <p className={styles.sectionSubText}>
          (PRO TIP: Sujeta y mueve las skills)
        </p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* Se mapean las technologies por el BallCanvas - Que es como una card*/}

        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* Each Ball has a Canvas or Card - BallCavas. TODA la textura y personalización está ahí */}
            <h1 className="text-center font-bold">{technology.name}</h1>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
