// app/projects/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";

type ProjectData = {
  name: string;
  category: string;
  description: string;
  year: string;
  client: string;
  services: string[];
  images: string[];
};

const projects: Record<string, ProjectData> = {
  alpha: {
    name: "OTBASY",
    category: "Motion & Graphic Design",
    year: "2024",
    client: "Отбасы Банк",
    // Өзгеріссіз (онсыз да орысша)
    services: ["Моушн-дизайн", "Анимация", "Брендинг"],
    description:
      'Я отвечал за полный цикл визуала: от идей до 3D-анимаций и моушн-дизайна. Создал логотип к 20-летию банка, разработал мерч, организовал съемки YouTube-проекта "Без воды" и активно использовал AI-инструменты.',
    images: [
      "/projects/otbasy/otbasy.jpg",
       "/projects/otbasy/1-13.png",
       "/projects/otbasy/1-15.png",
       "/projects/otbasy/1-14.png",
       "/projects/otbasy/1-6.png",
       "/projects/otbasy/1-7.png",
       "/projects/otbasy/1-16.png",
       "/projects/otbasy/1-10.png",
       "/projects/otbasy/14.png",
       "/projects/otbasy/1-1.png",
       "/projects/otbasy/otbasy2.jpg",
       "/projects/otbasy/1-2.png",
       "/projects/otbasy/1-3.png",
       "/projects/otbasy/1-4.png",
       "/projects/otbasy/1-5.png",
       "/projects/otbasy/15.png",
       "/projects/otbasy/16.png",
       "/projects/otbasy/12.png",
       "/projects/otbasy/13.png",
       "/projects/otbasy/1-9.png",
       "/projects/otbasy/18.png",
       "/projects/otbasy/1-11.png",
       "/projects/otbasy/1-12.png",
       "/projects/otbasy/1-8.png",
       "/projects/otbasy/4.png",
       "/projects/otbasy/5.png",
       "/projects/otbasy/6.png",
       "/projects/otbasy/7.png",
       "/projects/otbasy/8.png",
       "/projects/otbasy/9.png",
       "/projects/otbasy/10.png",
      ],
  },
  beta: {
    name: "CHANGAN",
    category: "Motion & Graphic Design",
    year: "2024",
    client: "Changan Auto KZ",
    // "Түсірілім" -> "Съемка", "Постпродакшн" өзгеріссіз
    services: ["VFX", "Съемка", "Постпродакшн"],
    description:
      "Я разработал Key Visual и развернул на его основе масштабную кампанию 360°. Охватил всё: от digital и наружной рекламы до 3D-конструкций для ивентов. Полностью взял на себя 20-страничный буклет (написал текст и сделал дизайн). Также я создал рекламный AI-ролик, который снизил цену за лид (CPL) ровно в два раза — с $8 до $4.",
    images: [
      "/projects/changan/changan.jpg",
      "/projects/changan/changan2.jpg",
      "/projects/changan/changan3.jpg",
      "/projects/changan/changan4.jpg",
      "/projects/changan/changan5.jpg",
      "/projects/changan/changan6.jpg",
      "/projects/changan/changan7.jpg",
    ],
  },
  gamma: {
    name: "CITADEL",
    category: "Брендинг",
    year: "2023",
    client: "Citadel Development",
    // "Визуалды айдентика" -> "Визуальная айдентика"
    services: ["Логотип", "Бренд-гайд", "Визуальная айдентика"],
    description:
      "Создание визуальной айдентики. Логотип, гайдлайн, носители.",
    images: [
      "/projects/cita/cita_v.mp4",
      "/projects/cita/cita.jpg",
      "/projects/cita/cita2.jpg",
      "/projects/cita/cita3.jpg",
      "/projects/cita/cita4.jpg",
      "/projects/cita/cita5.jpg",
      "/projects/cita/cita6.jpg",
      "/projects/cita/cita7.jpg",
      "/projects/cita/cita8.jpg",
      "/projects/cita/cita9.jpg",
      "/projects/cita/cita10.jpg",
      "/projects/cita/cita11.jpg",
      "/projects/cita/cita12.jpg",
      "/projects/cita/cita13.mp4",
    ],
  },
  delta: {
    name: "AYU BURGER",
    category: "Графика",
    year: "2023",
    client: "AYU Food Co.",
    // Өзгеріссіз
    services: ["Иллюстрация", "Упаковка", "Брендинг"],
    description:
      "Бренд с нуля для сети бургерных. Нейминг, айдентика, упаковка.",
    images: [
      "/projects/ayu/ayu.jpg",
      "/projects/ayu/ayu2.jpg",
      "/projects/ayu/ayu3.jpg",
      "/projects/ayu/ayu4.jpg",
      "/projects/ayu/ayu5.jpg",
      "/projects/ayu/ayu6.jpg",
      "/projects/ayu/ayu7.jpg",
      "/projects/ayu/ayu8.jpg",
      "/projects/ayu/ayu9.jpg",
    ],
  },
  nur: {
    name: "NUR BOLASHAK",
    category: "Графика",
    year: "2023",
    client: "Нұр Болашақ Қоры",
    // "Корпоративті стиль" -> "Корпоративный стиль"
    services: ["Инфографика", "Визуал", "Корпоративный стиль"],
    description:
      "Корпоративный ребрендинг образовательного фонда. Новый стиль, отражающий миссию и ценности.",
    images: [
      "/projects/nur/nur.jpg",
      "/projects/nur/nur2.jpg",
      "/projects/nur/nur3.png",
      "/projects/nur/nur4.png",
      "/projects/nur/nur5.png",
      "/projects/nur/nur6.png",
      "/projects/nur/nur7.png",
      "/projects/nur/nur8.png",
      "/projects/nur/nur9.png",
      "/projects/nur/nur10.png",
      "/projects/nur/nur11.png",
      "/projects/nur/nur12.png",
      "/projects/nur/nur13.png",
      "/projects/nur/nur14.png",
      "/projects/nur/nur15.png",
      "/projects/nur/nur16.png",
      "/projects/nur/nur17.png",
      "/projects/nur/nur18.png",
      "/projects/nur/nur19.png",
    ],
  },
  get: {
    name: "THE GENTLEMEN'S",
    category: "Моушен дизайн",
    year: "2022",
    client: "The Gentlemen's Club",
    // Өзгеріссіз ("Моушн" деп сәл дұрыстадым)
    services: ["Моушн-дизайн", "Анимация", "Брендинг"],
    description:
      "Брендинг для мужского барбершопа. Премиальный стиль и внимание к деталям.",
    images: [
      "/projects/get/get.jpg",
      "/projects/get/get2.jpg",
      "/projects/get/get3.png",
      "/projects/get/get4.png",
      "/projects/get/get5.png",
      "/projects/get/get6.png",
      "/projects/get/get7.jpg",
      "/projects/get/get8.jpg",
    ],
  },
};

const allSlugs = Object.keys(projects);

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <p className="text-red-500 text-2xl font-bold uppercase tracking-widest">Проект табылмады</p>
      </div>
    );
  }

  // Next / prev
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* ─── HERO COVER ─── */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        {/* First image as hero */}
        {project.images[0] && (
          project.images[0].toLowerCase().endsWith(".mp4") ? (
            <video src={project.images[0]} autoPlay muted loop playsInline className="w-full h-full object-cover" />
          ) : (
            <Image src={project.images[0]} alt={project.name} fill className="object-cover" priority />
          )
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

        {/* Back button */}
        <Link href="/" className="absolute top-8 left-8 z-10 flex items-center gap-2 text-white/50 hover:text-white transition-colors no-underline group">
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="text-[0.7rem] uppercase tracking-[0.2em] font-bold">Назад</span>
        </Link>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-10 lg:px-12 pb-16 max-w-[1320px] mx-auto">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-red-500 font-bold mb-4">
            {project.category}
          </p>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.9]" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #FF1E50 60%, #7C3AFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {project.name}
          </h1>
        </div>
      </section>

      {/* ─── PROJECT INFO ─── */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
          {/* Description */}
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-red-500 font-bold mb-4">О проекте</p>
            <p className="text-xl sm:text-2xl leading-relaxed text-white/60 font-light max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Meta sidebar */}
          <div className="flex flex-col gap-8 lg:border-l lg:border-white/5 lg:pl-10">
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/25 font-bold mb-2">Клиент</p>
              <p className="text-base font-bold text-white/80">{project.client}</p>
            </div>
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/25 font-bold mb-2">Год</p>
              <p className="text-base font-bold text-white/80">{project.year}</p>
            </div>
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/25 font-bold mb-2">Услуги</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.services.map((s) => (
                  <span key={s} className="px-4 py-1.5 rounded-full border border-white/10 text-[0.7rem] text-white/50 font-bold uppercase tracking-wide">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10">
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,30,80,0.3) 30%, rgba(120,60,255,0.3) 70%, transparent)' }} />
      </div>

      {/* ─── GALLERY ─── */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-12 py-20">
        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-red-500 font-bold mb-10">
          Галерея · {project.images.length} файл
        </p>

        <div className="flex flex-col gap-6">
          {project.images.map((src, index) => {
            const lower = src.toLowerCase();
            const isVideo = lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".ogg");

            return (
              <div key={index} className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/5">
                {isVideo ? (
                  <video src={src} controls playsInline preload="metadata" className="w-full h-full object-cover" />
                ) : (
                  <Image src={src} alt={`${project.name} — ${index + 1}`} fill className="object-cover" />
                )}
                {/* Index number */}
                <span className="absolute top-4 left-5 text-[3rem] font-black leading-none text-white/[0.06]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── PREV / NEXT ─── */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-10">
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,30,80,0.3) 30%, rgba(120,60,255,0.3) 70%, transparent)' }} />
      </div>

      <section className="max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-12 py-16">
        <div className="flex justify-between items-center">
          {prevSlug ? (
            <Link href={`/projects/${prevSlug}`} className="group flex items-center gap-3 no-underline">
              <svg className="w-5 h-5 text-white/30 group-hover:text-red-500 transform group-hover:-translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/25 font-bold">Пред. проект</p>
                <p className="text-lg font-black uppercase tracking-tight text-white/60 group-hover:text-white transition-colors">{projects[prevSlug].name}</p>
              </div>
            </Link>
          ) : <div />}

          {nextSlug ? (
            <Link href={`/projects/${nextSlug}`} className="group flex items-center gap-3 no-underline text-right">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/25 font-bold">След. проект</p>
                <p className="text-lg font-black uppercase tracking-tight text-white/60 group-hover:text-white transition-colors">{projects[nextSlug].name}</p>
              </div>
              <svg className="w-5 h-5 text-white/30 group-hover:text-red-500 transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ) : <div />}
        </div>
      </section>
    </div>
  );
}