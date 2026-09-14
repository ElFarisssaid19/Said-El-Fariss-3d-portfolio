import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";

const ServiceCard = ({ index, title, description, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[250px] w-full"
  >
    <img src={icon} alt={title} className="w-16 h-16 object-contain" />

    <h3 className="mt-4 text-white font-bold text-[20px]">{title}</h3>
    <p className="mt-2 text-secondary text-[14px]">{description}</p>
  </motion.div>
);

const Services = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I offer</p>
          <h2 className={styles.sectionHeadText}>Services.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
