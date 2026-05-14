"use client";

import React from "react";
import { motion } from "framer-motion";

const collections = [
  {
    id: 1,
    title: 'Batik "Merak Kusuma Wening"',
    description: "Motif merak yang elegan dengan bingkai klasik.",
    image: "/gambar/1.png",
    meanings: [
      { key: "Merak", value: "Kemewahan dan pesona" },
      { key: "Kusuma", value: "Bunga / keharuman" },
      { key: "Wening", value: "Tenang dan anggun" },
    ],
  },
  {
    id: 2,
    title: 'Batik "Samudra Cendrawasih"',
    description: "Dominasi biru laut dan burung eksotis yang dinamis.",
    image: "/gambar/2.png",
    meanings: [
      { key: "Samudra", value: "Latar biru luas dan aliran motif" },
      { key: "Cendrawasih", value: "Keindahan dan kemewahan Nusantara" },
    ],
  },
  {
    id: 3,
    title: 'Batik "Lembayung Garuda Sekar"',
    description: "Perpaduan warna jingga keemasan dengan ornamen burung dan bunga memberi kesan hangat, agung, dan klasik.",
    image: "/gambar/3.png",
    meanings: [
      { key: "Lembayung", value: "Nuansa senja keemasan" },
      { key: "Garuda", value: "Simbol kekuatan dan kebebasan" },
      { key: "Sekar", value: "Bunga / keindahan" },
    ],
  },
];

const Collection = () => {
  return (
    <section id="collection" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">Curated Collection</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-brown/70 max-w-2xl mx-auto uppercase tracking-[0.2em] text-xs font-semibold">
            Optimized Visual Assets for Modern Fashion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {collections.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.id * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-sm shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-brand-black/0 transition-colors duration-500"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-black mb-2">{item.title}</h3>
              <p className="text-brand-brown/80 font-light mb-6 leading-relaxed">{item.description}</p>
              
              <div className="space-y-3 pt-4 border-t border-brand-brown/10">
                <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Filosofi & Makna</p>
                {item.meanings.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[11px] font-bold text-brand-brown uppercase tracking-wider">{m.key}</span>
                    <span className="text-xs text-brand-brown/60 italic">{m.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Collection;
