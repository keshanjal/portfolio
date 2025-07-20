/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x915eff,
          backgroundColor: 0x0a1f44, // pleasant dark blue
          points: 10.0,
          maxDistance: 20.0,
          spacing: 25.0,
        })
      );
    }
    return () => vantaEffect && vantaEffect.destroy();
  }, [vantaEffect]);

  return (
    <section
      id="home"
      ref={vantaRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden px-6 md:px-20 text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0 backdrop-blur-sm" />

      {/* Centered content */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg font-light tracking-widest text-[#bbbbbb]"
        >
          Welcome to my Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-4 text-[42px] sm:text-[64px] md:text-[80px] font-light tracking-widest uppercase"
        >
          {/* <span className="text-[#00d1ff] neon-text">Anjal</span>{" "} */}
          <span className="text-white neon-text">ANJAL Kesarwani</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl"
        >
          A <span className="text-[#60a5fa]">Android Developer and MERN Stack Developer</span> who blends logic with creativity to build impactful digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-12 text-sm text-white/70 animate-bounce"
        >
          ↓ Scroll to Explore
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
