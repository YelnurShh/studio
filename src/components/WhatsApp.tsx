'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 100 мс кідіріс беру арқылы React-тің синхронды қатесінен құтыламыз
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Компонент толық жүктелмейінше ештеңе көрсетпейміз
  if (!mounted) return null;

  const phone = '77773531376';
  const message = encodeURIComponent('Сәлем, мен khanmedia сайтынан жазып тұрмын');
  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110">
        <FaWhatsapp size={28} />
      </div>
    </a>
  );
}