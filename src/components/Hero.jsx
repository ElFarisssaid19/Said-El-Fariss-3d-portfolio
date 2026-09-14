import { useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  const videoRef = useRef(null);

  const handleContainerClick = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().catch(() => {});
    }
  };

  return (
    <section
      className={`relative w-full h-screen mx-auto overflow-hidden`}
      onClick={handleContainerClick}
    >
      <video
        ref={videoRef}
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        style={{ pointerEvents: "none" }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Said El Fariss</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full-Stack Developer creating 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
            href="/ElFarissSaid_CV.pdf"
            download="Said_El_Fariss_CV.pdf"
            target="_blank"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#915EFF] text-white font-medium bg-transparent hover:bg-[#915EFF] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path
                d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download CV
          </motion.a>
        </div>
      </div>

      <motion.img
        src="/said-photo.png"
        alt="Said El Fariss"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.85, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="hidden md:block absolute right-8 bottom-0 h-full w-auto object-contain object-bottom z-20 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
