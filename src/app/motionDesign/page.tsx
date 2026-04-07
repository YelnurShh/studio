'use client';

import { useState, useRef, useEffect } from 'react';

const motionPosts = [
  { id: 'motion-9', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767905495/9_pfckhm.mp4" },
  { id: 'motion-10', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767906272/11_y401ba.mp4" },
  { id: 'motion-1', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903059/1_zgaekn.mp4" },
  { id: 'motion-2', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903434/2_cbtpks.mp4" },
  { id: 'motion-3', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903526/3_pzzto5.mp4" },
  { id: 'motion-4', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903330/4_dgt5ww.mp4" },
  { id: 'motion-5', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767905233/5_hajbyp.mp4" },
  { id: 'motion-6', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903342/6_sejofe.mp4" },
  { id: 'motion-7', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903498/7_wswlek.mp4" },
  { id: 'motion-8', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903169/8_tgr5lr.mp4" },
  { id: 'motion-11', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903074/12_algvvc.mp4" },
  { id: 'motion-12', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767906625/13_yfnhju.mp4" },
  { id: 'motion-13', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903516/14_pwdvox.mp4" },
  { id: 'motion-14', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903285/15_eq7vra.mp4" },
  { id: 'motion-15', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903156/16_jufpro.mp4" },
  { id: 'motion-16', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903168/17_ehcbh2.mp4" },
  { id: 'motion-17', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903181/18_eiqs9j.mp4" },
  { id: 'motion-18', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903206/19_lshqfi.mp4" },
  { id: 'motion-19', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903486/20_znv2xv.mp4" },
  { id: 'motion-20', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903185/21_vb9ndt.mp4" },
  { id: 'motion-21', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903495/22_cqunzn.mp4" },
  { id: 'motion-22', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903418/34_ejmtab.mp4" },
  { id: 'motion-23', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903537/24_pkmxg6.mp4" },
  { id: 'motion-24', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903189/25_k9e3dm.mp4" },
  { id: 'motion-25', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903458/26_wsphh5.mp4" },
  { id: 'motion-26', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903481/27_axultx.mp4" },
  { id: 'motion-27', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767907508/28_iicvjv.mp4" },
  { id: 'motion-28', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903303/29_mowgld.mp4" },
  { id: 'motion-29', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767907867/30_nkovgd.mp4" },
  { id: 'motion-31', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903255/31_safbzo.mp4" },
  { id: 'motion-32', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903402/33_gishvs.mp4" },
  { id: 'motion-33', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903390/23_gwynyy.mp4" },
  { id: 'motion-34', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903266/35_e1w9wy.mp4" },
  { id: 'motion-35', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767903278/36_hiwti0.mp4" },
];

const aiPosts = [
  { id: 'ai-1', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1775594478/35_max_kaz_l1aw4i.mp4" },
  { id: 'ai-2', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1775594476/WhatsApp_Video_2026-04-07_at_16.04.20_quemmk.mp4" },
  { id: 'ai-3', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1775594474/CS75rus_1920%D1%851080_hpdjbw.mp4" },
  { id: 'ai-4', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1775594465/WhatsApp_Video_2026-04-07_at_15.41.59_youbsk.mp4" },
  { id: 'ai-5', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767908167/1_lfqjxh.mp4" },
  { id: 'ai-6', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767908183/2_upop5r.mp4" },
  { id: 'ai-7', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767908173/3_uyolaj.mp4" },
  { id: 'ai-8', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767908194/4_gsppds.mp4" },
  { id: 'ai-9', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767908187/5_gxwquh.mp4" },
  { id: 'ai-10', video: "https://res.cloudinary.com/djbmtcbex/video/upload/v1767908153/6_uekxef.mp4" },
  
];

function optimizeUrl(url: string) {
  return url.replace('/upload/', '/upload/q_auto,f_auto,br_2m/');
}

function LazyVideo({ src, index }: { src: string; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && video) {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    const video = videoRef.current;
    return () => {
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      // Мұндағы ең басты өзгеріс: "aspect-video" алынып тасталды
      className="relative w-full rounded-2xl overflow-hidden bg-white/5 border border-white/5 break-inside-avoid mb-6 flex flex-col justify-center"
      style={{ minHeight: '200px' }} // Видео жүктелгенше бос орын тұруы үшін
    >
      {visible ? (
        <video
          ref={videoRef}
          src={optimizeUrl(src)}
          playsInline
          preload="metadata"
          loop
          controls
          // Мұндағы басты өзгеріс: "object-cover" орнына видео өз пропорциясын сақтайды
          className="w-full h-auto max-h-[85vh] object-contain bg-black/40"
        />
      ) : (
        <div className="w-full h-64 bg-white/[0.03] animate-pulse" />
      )}

      {/* Нөмірді жазу, бұл да сақталды */}
      <span className="absolute top-4 left-5 text-[2.5rem] font-black leading-none text-white/[0.2] drop-shadow-md pointer-events-none z-10 mix-blend-difference">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  );
}

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<'motion' | 'ai'>('motion');
  const currentPosts = activeTab === 'motion' ? motionPosts : aiPosts;

  const tabs = [
    { key: 'motion' as const, label: 'Моушен Дизайн', count: motionPosts.length },
    { key: 'ai' as const, label: 'ИИ Видео', count: aiPosts.length },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      {/* ─── HERO ─── */}
      <section className="relative pt-44 pb-16 px-5 sm:px-10 lg:px-12 max-w-[1320px] mx-auto">
        <div className="absolute -top-28 -left-28 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,30,80,0.12), transparent 70%)' }} />
        <div className="absolute top-32 right-0 w-[350px] h-[350px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(120,60,255,0.1), transparent 70%)' }} />



        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.95] max-w-[800px]" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #FF1E50 60%, #7C3AFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Моушен Дизайн
        </h1>

        
      </section>

      {/* ─── TABS ─── */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-12 pb-6">
        <div className="flex gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full text-[0.75rem] font-bold uppercase tracking-[0.15em] transition-all duration-300 border ${activeTab === tab.key
                  ? 'bg-red-500 border-red-500 text-white shadow-[0_0_24px_rgba(255,30,80,0.3)]'
                  : 'bg-transparent border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'
                }`}
            >
              {tab.label}
              <span className={`ml-2 text-[0.6rem] ${activeTab === tab.key ? 'text-white/70' : 'text-white/20'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10">
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,30,80,0.3) 30%, rgba(120,60,255,0.3) 70%, transparent)' }} />
      </div>

      {/* ─── VIDEO GRID ─── */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-12 py-16">
        <div className="flex justify-between items-center mb-10">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/25 font-bold">
            {activeTab === 'motion' ? 'Моушен дизайн' : 'ИИ видео'} · {currentPosts.length} видео
          </p>
          <p className="text-[0.6rem] text-white/15 uppercase tracking-widest">
            Нажмите на видео для воспроизведения
          </p>
        </div>

        {/* CSS Columns қолданылды (Pinterest стиліндегі Masonry сетка). 
          Осының арқасында әртүрлі пропорциялы видеолар (16:9, 9:16) әдемі орналасады 
        */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {currentPosts.map((post, i) => (
            <LazyVideo key={post.id} src={post.video} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}