// app/projects/[slug]/page.tsx
import Image from "next/image";

type ProjectData = {
  name: string;
  category: string;
  description: string;
  images: string[]; // can include both local paths (e.g. /projects/otbasy.jpg) and remote URLs and .mp4 files
};

const projects: Record<string, ProjectData> = {
  alpha: {
    name: "OTBASY",
    category: "Motion and Graphic design",
    description:
      "Бұл жоба клиенттің брендін жаңғырту үшін жасалған моушен-дизайн және анимацияны қамтиды.",
    images: [
      "/projects/otbasy/otbasy.jpg", 
      "/projects/otbasy/otbasy2.jpg"
    ],
  },

  beta: {
    name: "CHANGAN",
    category: "Motion and Graphic design",
    description:
      "VFX технологиялары арқылы түсірілім материалдарын толықтыру және жақсарту жобасы.",
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
    description:
      "Брендтің визуалды айдентикасын құру, логотип, түстер палитрасы және бренд-гайд.",
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
    description:
      "Графикалық иллюстрациялар, инфографика және визуалды материалдар дайындау.",
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

  "nur": {
    name: "NUR BOLASHAK",
    category: "Графика",
    description:
      "Графикалық иллюстрациялар, инфографика және визуалды материалдар дайындау.",
    images: [
      '/projects/nur/nur.jpg',
      '/projects/nur/nur2.jpg',
      '/projects/nur/nur3.png',
      '/projects/nur/nur4.png',
      '/projects/nur/nur5.png',
      '/projects/nur/nur6.png',
      '/projects/nur/nur7.png',
      '/projects/nur/nur8.png',
      '/projects/nur/nur9.png',
      '/projects/nur/nur10.png',
      '/projects/nur/nur11.png',
      '/projects/nur/nur12.png',
      '/projects/nur/nur13.png',
      '/projects/nur/nur14.png',
      '/projects/nur/nur15.png',
      '/projects/nur/nur16.png',
      '/projects/nur/nur17.png',
      '/projects/nur/nur18.png',
      '/projects/nur/nur19.png',
    ],
  },

  "get": {
    name: "THE GENTLEMEN'S",
    category: "Моушен дизайн",
    description:
      "Бұл жоба клиенттің брендін жаңғырту үшін жасалған моушен-дизайн және анимацияны қамтиды.",
    images: [
      '/projects/get/get.jpg',
      '/projects/get/get2.jpg',
      '/projects/get/get3.png',
      '/projects/get/get4.png',
      '/projects/get/get5.png',
      '/projects/get/get6.png',
      '/projects/get/get7.jpg',
      '/projects/get/get8.jpg',
    ],
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return <div className="p-8 text-red-500">Проект табылмады</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Заголовок и короткое описание */}
      <div className="flex flex-wrap items-center justify-between gap-6 mb-4">
        <h1 className="text-4xl font-bold">{project.name}</h1>
        <p className="text-lg leading-relaxed max-w-2xl">{project.description}</p>
      </div>

      <p className="text-gray-600 mb-6">{project.category}</p>

      {/* Суреттер / видеолар (order preserved). Каждый элемент в aspect-video (16:9) */}
      <div className="flex flex-col gap-6 mb-8">
        {project.images.map((src, index) => {
          const lower = src.toLowerCase();
          const isVideo = lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".ogg");

          return (
            <div
              key={index}
              className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md bg-gray-100"
            >
              {isVideo ? (
                <video
                  src={src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  // Если хочешь автоплей — добавь autoPlay muted loop (muted требуется для autoplay в браузерах)
                  // autoPlay muted loop
                />
              ) : (
                <Image
                  src={src}
                  alt={`${project.name} image ${index + 1}`}
                  fill
                  className="object-cover"
                  // Если используешь внешние домены (например images.unsplash.com),
                  // не забудь добавить их в next.config.js -> images.domains
                />
              )}
            </div>
          );
        })}
      </div>

      
    </div>
  );
}
