import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const BallsCanvas = lazy(() => import("./canvas/Ball"));

// 3D balls only for a fine pointer on a wide enough screen; phones and
// tablets get plain icons and never download three.js for this section.
const BALLS_QUERY = "(pointer: fine) and (min-width: 768px)";

const useBallsEnabled = () => {
  const [enabled, setEnabled] = useState(
    () => window.matchMedia(BALLS_QUERY).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(BALLS_QUERY);
    const handleChange = (event) => setEnabled(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return enabled;
};

const TechIcons = () => (
  <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-10">
    {technologies.map((technology) => (
      <div
        key={technology.name}
        className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#fff8eb] flex justify-center items-center"
        title={technology.name}
      >
        <img
          src={technology.icon}
          alt={technology.name}
          loading="lazy"
          className="w-1/2 h-1/2 object-contain"
        />
      </div>
    ))}
  </div>
);

const Tech = () => {
  const ballsEnabled = useBallsEnabled();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="mt-20">
        {ballsEnabled ? (
          <Suspense fallback={<TechIcons />}>
            <BallsCanvas technologies={technologies} />
          </Suspense>
        ) : (
          <TechIcons />
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
