'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      name: 'OTBASY',
      link: '/projects/alpha',
      image1: '/projects/otbasy/otbasy.jpg',
      image2: '/projects/otbasy/otbasy2.jpg',
    },
    {
      name: 'CHANGAN',
      link: '/projects/beta',
      image1: '/projects/changan/changan.jpg',
      image2: '/projects/changan/changan2.jpg',
    },
    {
      name: 'CITADEL',
      link: '/projects/gamma',
      image1: '/projects/cita/cita.jpg',
      image2: '/projects/cita/cita2.jpg',
    },
    {
      name: 'AYU BURGER',
      link: '/projects/delta',
      image1: '/projects/ayu/ayu.jpg',
      image2: '/projects/ayu/ayu2.jpg',
    },
    {
      name: 'NUR BOLASHAK',
      link: '/projects/nur',
      image1: '/projects/nur/nur.jpg',
      image2: '/projects/nur/nur2.jpg',
    },
    {
      name: "THE GENTLEMEN'S",
      link: '/projects/get',
      image1: '/projects/get/get.jpg',
      image2: '/projects/get/get2.jpg',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <main className="flex-grow px-5 sm:px-10 lg:px-20 py-14 max-w-7xl mx-auto w-full">

        {/* Титлдар */}
        <div className="mb-16 sm:mb-20 space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Привет!
          </h2>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold opacity-90 leading-tight">
            Добро пожаловать в нашу студию!
          </h2>

          <p className="text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed text-gray-700">
            Мы лучшая казахскоязычная дизайн-студия на рынке. <br className="hidden sm:block" />
            Мы верим в силу бренда и в то, что он повлияет на успех бизнеса.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 w-full">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer space-y-3 sm:space-y-4">

              {/* Image Wrapper */}
              <Link href={project.link}>
                <div className="relative w-full h-56 sm:h-72 lg:h-80 overflow-hidden rounded-xl shadow-lg">

                  {/* Main image */}
                  <Image
                    src={project.image1}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-700 ease-out 
                               group-hover:scale-110 group-hover:opacity-0
                               md:group-hover:opacity-0"
                  />

                  {/* Hover image (desktop only) */}
                  <Image
                    src={project.image2}
                    alt={`${project.name} hover`}
                    fill
                    className="object-cover opacity-0 transition duration-700 ease-out 
                               absolute top-0 left-0 
                               md:group-hover:opacity-100 md:group-hover:scale-110"
                  />

                </div>
              </Link>

              {/* Project Name */}
              <Link
                href={project.link}
                className="text-xl sm:text-2xl font-semibold tracking-wide hover:text-gray-600 transition"
              >
                {project.name}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
