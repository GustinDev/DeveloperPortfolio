import React from "react";
import { styles } from "../styles";
import Pdf from "../CV.pdf";

const Downloader = () => {
  return (
    <div className="flex items-center justify-center flex-col m-10">
      <h2 className={"text-white text-[50px] font-bold"}>Curriculum Vitae</h2>
      <p className={`${styles.sectionSubText} text-center m-2`}>
        ¿Quieres ver mi CV?
      </p>
      <a href={Pdf} target="_blank">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          ¡Descargarlo aqui!
        </button>
      </a>
    </div>
  );
};

export default Downloader;
