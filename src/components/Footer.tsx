'use client';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 mt-0 py-16 px-5 sm:px-10 lg:px-12 text-sm">
      <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-10">
        <div>
          <p className="text-white/90 font-black text-base uppercase tracking-tight">
            &copy; 2024 Khan Media
          </p>
          <p className="text-white/25 text-xs tracking-widest uppercase mt-1">
            Design + Motion Design
          </p>
          <p className="text-white/15 text-xs mt-3 hover:text-white/40 transition-colors cursor-pointer">
            Политика конфиденциальности
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-2">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-red-500 font-bold">
            Контакты
          </p>
          <p className="text-white/60 font-bold tracking-tight text-lg">
            +7 777 353 13 76
          </p>
          <a href="mailto:yelnurshakhar@gmail.com" className="text-white/30 hover:text-white/70 transition-colors text-sm no-underline">
            xanburkit.shakhar@gmail.com
          </a>

          <div className="flex gap-4 mt-3">
            <a href="https://t.me/Khanburkit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 hover:border-red-500/50 flex items-center justify-center text-white/40 hover:text-red-400 transition-all duration-300 text-lg">
              <FaTelegramPlane />
            </a>
            <a href="https://instagram.com/khanburkit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 hover:border-purple-500/50 flex items-center justify-center text-white/40 hover:text-purple-400 transition-all duration-300 text-lg">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}