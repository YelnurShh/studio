'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const projects = [
  {
    name: 'OTBASY',
    tag: 'Брендинг · Айдентика',
    description: '«Я отвечал за полный цикл визуала: от идей до 3D-анимаций и моушн-дизайна. Создал логотип к 20-летию банка, разработал мерч, организовал съемки YouTube-проекта "Без воды" и активно использовал AI-инструменты.»',
    year: '2024',
    link: '/projects/alpha',
    image1: '/projects/otbasy/otbasy.jpg',
    image2: "/projects/otbasy/1-13.png",
  },
  {
    name: ' ASTANA MOTORS / CHANGAN',
    tag: 'Кампания · Диджитал',
    description: 'Я разработал Key Visual и развернул на его основе масштабную кампанию 360°. Охватил всё: от digital и наружной рекламы до 3D-конструкций для ивентов. Полностью взял на себя 20-страничный буклет (написал текст и сделал дизайн). Также я создал рекламный AI-ролик, который снизил цену за лид (CPL) ровно в два раза — с $8 до $4.',
    year: '2024',
    link: '/projects/beta',
    image1: '/projects/changan/changan.jpg',
    image2: '/projects/changan/changan2.jpg',
  },
  {
    name: 'CITADEL',
    tag: 'Визуальная айдентика',
    description: 'Создание визуальной айдентики. Логотип, гайдлайн, носители.',
    year: '2023',
    link: '/projects/gamma',
    image1: '/projects/cita/cita.jpg',
    image2: '/projects/cita/cita2.jpg',
  },
  {
    name: 'AYU BURGER',
    tag: 'Упаковка · Бренд',
    description: 'Бренд с нуля для сети бургерных. Нейминг, айдентика, упаковка.',
    year: '2023',
    link: '/projects/delta',
    image1: '/projects/ayu/ayu.jpg',
    image2: '/projects/ayu/ayu2.jpg',
  },
  {
    name: 'NUR BOLASHAK',
    tag: 'Корпоративный · Айдентика',
    description: 'Корпоративный ребрендинг образовательного фонда. Новый стиль, отражающий миссию и ценности.',
    year: '2023',
    link: '/projects/nur',
    image1: '/projects/nur/nur.jpg',
    image2: '/projects/nur/nur2.jpg',
  },
  {
    name: "THE GENTLEMEN'S",
    tag: 'Лайфстайл · Брендинг',
    description: 'Брендинг для мужского барбершопа. Премиальный стиль и внимание к деталям.',
    year: '2022',
    link: '/projects/get',
    image1: '/projects/get/get.jpg',
    image2: '/projects/get/get2.jpg',
  },
];

function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) skewY(0deg)' : 'translateY(60px) skewY(2deg)',
        transition:
          'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ─── HERO ─── */}
      <section className="relative pt-44 pb-28 px-5 sm:px-10 lg:px-12 max-w-[1320px] mx-auto">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,30,80,0.15), transparent 70%)' }}
        />
        <div
          className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(120,60,255,0.12), transparent 70%)' }}
        />

        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(80px)',
            transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1) 0.15s',
          }}
        >
          {/* БАСКЕЛІ ЕКІ БАҒАНДЫҚ (КОЛОНКАЛЫҚ) ҚҰРЫЛЫМ */}
          <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-16 xl:gap-12">
            
            {/* 1-ШІ БАҒАН (СОЛ ЖАҚ): Привет + Рад видеть + Текст + Кнопкалар + ИНСТРУМЕНТТЕР */}
            <div className="flex flex-col xl:w-[55%]">
              <h1
                className="text-[clamp(3.2rem,9vw,8rem)] leading-[0.85] tracking-tighter max-w-[1000px] font-black uppercase"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FF1E50 50%, #7C3AFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Привет!
              </h1>

              <h2 className="mt-8 sm:mt-10 text-[clamp(1.4rem,3vw,2.4rem)] font-bold uppercase tracking-tight text-white/80 max-w-[800px]">
                Рад видеть вас в моём портфолио!
              </h2>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#work"
                  className="px-8 py-3.5 bg-red-500 hover:bg-red-400 text-white text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,30,80,0.4)] no-underline"
                >
                  Смотреть работы
                </Link>
                <Link
                  href="#contact"
                  className="px-8 py-3.5 border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 no-underline"
                >
                  Связаться
                </Link>
              </div>

              {/* ─── МОИ ИНСТРУМЕНТЫ ─── */}
              <div className="mt-16">
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-red-500 font-bold mb-6">
                  Мои инструменты
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Photoshop', color: '#31A8FF', icon: 'https://www.adobe.com/cc-shared/assets/img/product-icons/svg/photoshop-64.svg' },
                    { name: 'Illustrator', color: '#FF9A00', icon: 'https://www.adobe.com/cc-shared/assets/img/product-icons/svg/illustrator-40.svg' },
                    { name: 'Premiere Pro', color: '#9999FF', icon: 'https://www.adobe.com/cc-shared/assets/img/product-icons/svg/premiere-pro.svg' },
                    { name: 'After Effects', color: '#9999FF', icon: 'https://www.adobe.com/cc-shared/assets/img/product-icons/svg/after-effects-40.svg' },
                    { name: 'Blender 3D', color: '#EA7600', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
                    { name: 'Figma', color: '#A259FF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                    { name: 'CorelDRAW', color: '#00A651', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ySgOzvSiLp3fwHD2g9OudESCrXKpDlgURw&s' },
                    { name: 'AI Creator', color: '#00A651', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png' },
                  ].map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 transition-all duration-300 group"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${tool.color}15` }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={tool.icon} alt={tool.name} className="w-5 h-5 object-contain" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-white/50 group-hover:text-white/80 transition-colors">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* 2-ШІ БАҒАН (ОҢ ЖАҚ): Обо мне */}
            <div className="xl:w-[45%] border-t xl:border-t-0 xl:border-l border-red-500/50 pt-8 xl:pt-2 xl:pl-10 max-w-[650px]">
              <span className="block text-sm sm:text-base uppercase tracking-[0.4em] text-red-500 font-extrabold mb-5">
                Обо мне
              </span>

              <div className="text-sm sm:text-base text-white/70 leading-relaxed font-medium space-y-5">
                <p>
                  <span className="text-white font-bold text-lg sm:text-xl">
                    Меня зовут Ханбүркіт.
                  </span>{' '}
                  Я графический и моушн-дизайнер с более чем 6-летним опытом создания визуального контента для рекламы, медиа и бренд-коммуникаций.
                </p>

                <p>
                  Я работал над кампаниями формата 360°, концептуальным и BTL-дизайном, включая такие проекты, как{' '}
                  <span className="text-white font-semibold">
                    Ирина Кайратовна, телеканалы Qazaqstan и Балапан, Отбасы банк, Евразийский банк, Астана Моторс, Sman
                  </span>{' '}
                  и другие бренды. Участвовал более чем в 15 проектах как VFX-артист, а также создал 10-серийный мультфильм для телеканала Балапан.
                </p>

                <p>
                  Мои сильные стороны — это не только визуальное исполнение, но и разработка концепций, маркетинговых идей и офферов. Я тот дизайнер, который думает как маркетолог: придумываю идеи, концепции и стратегии, а затем воплощаю их в визуальном контенте.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10 mt-10 xl:mt-0">
        <div
          className="h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,30,80,0.3) 30%, rgba(120,60,255,0.3) 70%, transparent)',
          }}
        />
      </div>

      {/* ─── PROJECTS ─── */}
      <section id="work" className="max-w-[1320px] mx-auto py-28 px-5 sm:px-10 lg:px-12">
        <RevealOnScroll>
          <div className="flex justify-between items-end mb-10"> {/* mb-20-ны mb-10 етіп азайттым */}
            <div>
              <h2 className="text-[clamp(2rem,4.5vw,4rem)] tracking-tighter font-black uppercase">
                <span className="text-white">
                  Проекты
                </span>
              </h2>
            </div>
            <span className="text-[0.65rem] text-white/25 uppercase tracking-[0.2em] font-bold">
              0{projects.length} проектов
            </span>
          </div>
        </RevealOnScroll>

        {/* ─── ОРТАДАҒЫ ЖАҢА ЕКІ БАТЫРМА ─── */}
        <RevealOnScroll delay={100}>
          <div className="flex justify-center flex-wrap gap-4 mb-20 mt-4">
            <button className="px-6 sm:px-8 py-3.5 bg-red-500 text-white text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_24px_rgba(255,30,80,0.4)]">
              Графический дизайн
            </button>
            <Link
              href="/motionDesign" // Бұл сенің моушн дизайн бетіңе сілтеме жасайды
              className="px-6 sm:px-8 py-3.5 border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 no-underline text-center"
            >
              Моушен дизайн
            </Link>
          </div>
        </RevealOnScroll>

        {/* Project list — image + description side by side, alternating */}
        <div className="flex flex-col gap-24">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <RevealOnScroll key={project.name} delay={0}>
                <Link href={project.link} className="no-underline text-inherit block">
                  <article
                    className={`group cursor-pointer flex flex-col ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-8 lg:gap-12 items-center`}
                  >
                    {/* Image */}
                    <div className="relative w-full lg:w-[58%] aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 border border-white/5 flex-shrink-0">
                      <Image
                        src={project.image1}
                        alt={project.name}
                        fill
                        className="object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:opacity-0"
                      />
                      <Image
                        src={project.image2}
                        alt={`${project.name} hover`}
                        fill
                        className="object-cover absolute top-0 left-0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Number */}
                      <span className="absolute bottom-4 left-5 text-[4rem] font-black leading-none text-white/10 group-hover:text-white/20 transition-colors duration-500">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Description side */}
                    <div className="w-full lg:w-[42%] flex flex-col justify-center">
                      
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-black uppercase group-hover:text-red-400 transition-colors duration-300">
                        {project.name}
                      </h3>

                      <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/40 max-w-md">
                        {project.description}
                      </p>

                      {/* Arrow CTA */}
                      <div className="mt-8 flex items-center gap-3 text-white/30 group-hover:text-white/70 transition-colors duration-300">
                        <span className="text-xs uppercase tracking-[0.2em] font-bold">
                          Подробнее
                        </span>
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>

                      {/* Underline */}
                      <div
                        className="h-[2px] mt-6 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 max-w-[200px]"
                        style={{
                          background: 'linear-gradient(90deg, #FF1E50, #7C3AFF)',
                        }}
                      />
                    </div>
                  </article>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>
    </div>
  );
}