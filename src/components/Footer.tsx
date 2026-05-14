"use client";

import React from "react";
import Link from "next/link";
import { Camera, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-cream pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-brand-cream font-playfair mb-6 block">
              MAYU <span className="text-brand-gold">BATIK</span>
            </Link>
            <p className="text-brand-cream/60 max-w-md mb-8 leading-relaxed">
              Website ini dibuat sebagai tugas Digital Marketing: Optimasi Aset Visual Mode Batik. 
              Mengeksplorasi sinergi antara warisan budaya dan teknologi digital.
            </p>
            <div className="flex space-x-6">
              {/* EDIT LINK SOSIAL MEDIA DI SINI */}
              <a href="https://www.instagram.com/mayu_batik?igsh=MXYzaHFqN2tvcHhleg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                <Camera size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Navigation</h4>
            <ul className="space-y-4 text-sm text-brand-cream/60">
              <li><a href="#home" className="hover:text-brand-cream transition-colors">Home</a></li>
              <li><a href="#collection" className="hover:text-brand-cream transition-colors">Collection</a></li>
              <li><a href="#process" className="hover:text-brand-cream transition-colors">Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold">Newsletter</h4>
            <p className="text-xs text-brand-cream/50 mb-4">Dapatkan update terbaru tentang koleksi kami.</p>
            <div className="flex border-b border-brand-gold/30 pb-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none outline-none text-xs w-full placeholder:text-brand-cream/30"
              />
              <button className="text-brand-gold hover:translate-x-1 transition-transform">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-brand-cream/40">
          <p>© 2026 Mayu Batik. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Design for Digital Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
