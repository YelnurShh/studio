import ProjectSwiper from '@/components/ProjectSwiper';

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-20">

      {/* INTRO */}
      <section className="mb-16 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          О нас
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl leading-relaxed mx-auto sm:mx-0">
          Всем привет, наша команда — это символ креативной ярости.
          У нас самые уникальные проекты и идеи. Поэтому вы смело можете
          доверить нам реализацию своих крутых задумок!
        </p>
      </section>

      {/* SWIPER */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Наши проекты
        </h2>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md">
          <ProjectSwiper
            images={[
              '/projects/otbasy/otbasy.jpg',
              '/projects/changan/changan.jpg',
              '/projects/cita/cita.jpg',
              '/projects/ayu/ayu.jpg',
              '/projects/nur/nur.jpg',
              '/projects/get/get.jpg',
            ]}
            links={[
              '/projects/alpha',
              '/projects/beta',
              '/projects/gamma',
              '/projects/delta',
              '/projects/nur',
              '/projects/get',
            ]}
          />
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div className="p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
          <p className="text-3xl sm:text-4xl font-bold text-gray-900">5</p>
          <p className="mt-2 text-sm text-gray-600">лет опыта</p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
          <p className="text-3xl sm:text-4xl font-bold text-gray-900">1000+</p>
          <p className="mt-2 text-sm text-gray-600">проекты</p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
          <p className="text-3xl sm:text-4xl font-bold text-gray-900">50+</p>
          <p className="mt-2 text-sm text-gray-600">моушен дизайнов</p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
          <p className="text-3xl sm:text-4xl font-bold text-gray-900">300+</p>
          <p className="mt-2 text-sm text-gray-600">брендинг</p>
        </div>
      </section>

    </main>
  );
}
