'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/motionDesign', label: 'Моушен Дизайн' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Өзіңнің WhatsApp нөміріңді осында жаз (плюссіз, мысалы 77012345678)
  const whatsappLink = "https://wa.me/77773531376";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-12 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="no-underline">
          <span className="text-2xl font-black uppercase tracking-tighter text-white">
            Khan<span className="text-red-500">Media</span>
          </span>
        </Link>

        {/* Mobile menu icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/70 hover:text-white transition-colors focus:outline-none" aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[0.75rem] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-white transition-colors duration-300 no-underline">
              {link.label}
            </Link>
          ))}
          <Link 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2.5 bg-red-500 hover:bg-red-400 text-white text-[0.7rem] font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 hover:shadow-[0_0_24px_rgba(255,30,80,0.35)] no-underline"
          >
            Связаться
          </Link>
        </nav>
      </div>

      {/* Mobile nav */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col items-center px-5 py-6 gap-5 bg-[#0A0A0A]/95 border-t border-white/5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-colors no-underline">
              {link.label}
            </Link>
          ))}
          <Link 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)} 
            className="mt-2 px-8 py-3 bg-red-500 text-white text-xs font-bold uppercase tracking-[0.15em] rounded-full no-underline"
          >
            Связаться
          </Link>
        </nav>
      </div>
    </header>
  );
}