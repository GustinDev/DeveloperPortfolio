import Footer from "./Footer";
import Downloader from "./Downloader";
import { styles } from "../styles";

const Personal = () => {
  return (
    <div className="flex flex-col">
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Información Personal
      </h2>
      <div className="flex fle-col items-center justify-center space-x-4">
        <Downloader />
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default Personal;
