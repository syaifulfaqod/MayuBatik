"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-brand-black">
      {/* Clean Charcoal Background - Matching BTS Section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black to-black opacity-80" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium"
          >
            Mayu Batik Present
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl text-brand-cream font-bold leading-[1.1] mb-6"
          >
            Digitalizing <br />
            <span className="italic font-normal text-brand-gold">the Thread</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-brand-cream/80 mb-10 max-w-xl font-light leading-relaxed"
          >
            Menghadirkan karya batik tradisional ke platform digital dengan visual yang lebih profesional dan modern.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#collection"
              className="inline-block px-10 py-4 bg-brand-gold text-brand-black uppercase tracking-widest text-sm font-bold hover:bg-brand-cream transition-colors duration-300"
            >
              Explore Collection
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border border-brand-gold/30 rounded-full flex items-center justify-center"
        >
          <div className="w-24 h-24 border border-brand-gold/60 rounded-full flex items-center justify-center">
            <div className="text-[10px] text-brand-gold tracking-widest text-center uppercase font-medium">
              Authentic <br /> Batik
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
