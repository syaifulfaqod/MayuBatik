"use client";

import React from "react";
import { Camera } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="process" className="py-24 bg-brand-black text-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Behind The Scene</h2>
          <p className="text-brand-cream/60 uppercase tracking-[0.2em] text-xs font-semibold mb-8">
            The Journey of Digitalizing Heritage
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl border border-brand-gold/20 bg-brand-brown/10 aspect-video flex items-center justify-center">
            {/* Instagram Reel Preview Mockup */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
              <img 
                src="/gambar/1.png" 
                alt="Reel Preview" 
                className="w-full h-full object-cover blur-[2px]"
              />
            </div>
            
            <div className="relative z-10 text-center px-6">
              <div className="w-20 h-20 bg-brand-gold/90 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <Camera size={32} className="text-brand-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Watch Our Latest Reel</h3>
              <p className="text-brand-cream/70 mb-8 max-w-md mx-auto text-sm">
                Lihat proses pembuatan dan detail koleksi terbaru kami langsung di Instagram.
              </p>
              <a 
                href="https://www.instagram.com/reel/DNMWN6lzTvL/?igsh=cGdyeXZlZWRhMGZq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-xs hover:bg-brand-cream transition-colors duration-300 rounded-full"
              >
                Lihat Reel di Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-brand-cream/40 max-w-xl mx-auto text-sm italic">
            "Mendokumentasikan setiap langkah optimasi untuk transparansi kualitas dan dedikasi terhadap seni batik."
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
