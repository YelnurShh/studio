'use client';

import { useState } from 'react';

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<'motion' | 'ai'>('motion');

  // Моушен дизайн видеолары (Сілтемелерді осы жерге тізіп шығыңыз)
  const motionPosts = [
    { 
      id: 'motion-9', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767905495/9_pfckhm.mp4" 
    },
    { 
      id: 'motion-10', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767906272/11_y401ba.mp4" 
    },
    { 
      id: 'motion-1', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903059/1_zgaekn.mp4" 
    },
    { 
      id: 'motion-2', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903434/2_cbtpks.mp4" 
    },
    { 
      id: 'motion-3', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903526/3_pzzto5.mp4" 
    },
    { 
      id: 'motion-4', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903330/4_dgt5ww.mp4" 
    },
    { 
      id: 'motion-5', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767905233/5_hajbyp.mp4" 
    },
    { 
      id: 'motion-6', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903342/6_sejofe.mp4" 
    },
    { 
      id: 'motion-7', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903498/7_wswlek.mp4" 
    },
    { 
      id: 'motion-8', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903169/8_tgr5lr.mp4" 
    },
    { 
      id: 'motion-11', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903074/12_algvvc.mp4" 
    },
    { 
      id: 'motion-12', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767906625/13_yfnhju.mp4" 
    },
    { 
      id: 'motion-13', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903516/14_pwdvox.mp4" 
    },
    { 
      id: 'motion-14', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903285/15_eq7vra.mp4" 
    },
    { 
      id: 'motion-15', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903156/16_jufpro.mp4" 
    },
    { 
      id: 'motion-16', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903168/17_ehcbh2.mp4" 
    },
    { 
      id: 'motion-17', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903181/18_eiqs9j.mp4" 
    },
    { 
      id: 'motion-18', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903206/19_lshqfi.mp4" 
    },
    { 
      id: 'motion-19', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903486/20_znv2xv.mp4" 
    },
    { 
      id: 'motion-20', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903185/21_vb9ndt.mp4" 
    },
    { 
      id: 'motion-21', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903495/22_cqunzn.mp4" 
    },
    { 
      id: 'motion-22', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903418/34_ejmtab.mp4" 
    },
    { 
      id: 'motion-23', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903537/24_pkmxg6.mp4" 
    },
    { 
      id: 'motion-24', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903189/25_k9e3dm.mp4" 
    },
    { 
      id: 'motion-25', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903458/26_wsphh5.mp4" 
    },
    { 
      id: 'motion-26', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903481/27_axultx.mp4" 
    },
    { 
      id: 'motion-27', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767907508/28_iicvjv.mp4" 
    },
    { 
      id: 'motion-28', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903303/29_mowgld.mp4" 
    },
    { 
      id: 'motion-29', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767907867/30_nkovgd.mp4" 
    },
    { 
      id: 'motion-31', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903255/31_safbzo.mp4" 
    },
    { 
      id: 'motion-32', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903402/33_gishvs.mp4" 
    },
    { 
      id: 'motion-33', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903390/23_gwynyy.mp4" 
    },
    { 
      id: 'motion-34', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903266/35_e1w9wy.mp4" 
    },
    { 
      id: 'motion-35', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903278/36_hiwti0.mp4" 
    },
    
    // Жаңа видео қосу үшін осы блокты көшіріп, сілтемесін ауыстырасыз:
    /* { 
      id: 'motion-25', 
      video: "келесі_видео_сілтемесі" 
    }, 
    */
  ];

  // ИИ видеолары
  const aiPosts = [
    { 
      id: 'ai-1', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767908167/1_lfqjxh.mp4" 
    },
    { 
      id: 'ai-2', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767908183/2_upop5r.mp4" 
    },
    { 
      id: 'ai-3', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767908173/3_uyolaj.mp4" 
    },
    { 
      id: 'ai-4', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767908194/4_gsppds.mp4" 
    },
    { 
      id: 'ai-5', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767908187/5_gxwquh.mp4" 
    },
    { 
      id: 'ai-6', 
      video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767908153/6_uekxef.mp4" 
    },
  ];

  const currentPosts = activeTab === 'motion' ? motionPosts : aiPosts;

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Навигация (Вкладкалар) */}
      <div className="flex justify-center gap-8 mb-12 border-b border-gray-200 pb-4">
        <button
          onClick={() => setActiveTab('motion')}
          className={`text-xl uppercase tracking-widest transition-all ${
            activeTab === 'motion' 
            ? 'font-medium text-black border-b-2 border-black' 
            : 'font-light text-gray-400 hover:text-black'
          }`}
        >
          Моушен Дизайн
        </button>
        <button
          onClick={() => setActiveTab('ai')}
          className={`text-xl uppercase tracking-widest transition-all ${
            activeTab === 'ai' 
            ? 'font-medium text-black border-b-2 border-black' 
            : 'font-light text-gray-400 hover:text-black'
          }`}
        >
          ИИ
        </button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentPosts.map((post) => (
          <div 
            key={post.id} 
            className="relative w-full aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center"
          >
            <video
              key={post.video} 
              src={post.video}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain"
            >
              Сіздің браузеріңіз видеоны қолдамайды.
            </video>
          </div>
        ))}
      </div>
    </main>
  );
}