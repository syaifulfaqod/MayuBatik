"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-cream/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/gambar/4.png" alt="Mayu Batik" className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
          <span className="text-xl font-bold tracking-tighter text-brand-black font-playfair uppercase">
            Mayu <span className="text-brand-gold">Batik</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {[
            { name: "Home", href: "#home" },
            { name: "Collection", href: "#collection" },
            { name: "Process", href: "#process" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-brand-black hover-gold font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-b border-brand-gold/10 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              {[
                { name: "Home", href: "#home" },
                { name: "Collection", href: "#collection" },
                { name: "Process", href: "#process" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg uppercase tracking-widest text-brand-black font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
