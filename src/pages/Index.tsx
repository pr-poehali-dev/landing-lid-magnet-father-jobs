const IMG_DAD_CHILD = "https://cdn.poehali.dev/projects/8939daf8-2cf0-46fb-a1d6-2dbf2af6eff2/files/04e0b51f-4362-4610-b1f3-5f27a6898459.jpg";

const benefits = [
  { icon: "⏱️", text: "Подходят для занятых людей — от 1–2 часов в день" },
  { icon: "💰", text: "Реальный доп. доход от 15 000 до 80 000 ₽ в месяц" },
  { icon: "🏠", text: "Можно работать из дома, без офиса и командировок" },
  { icon: "✅", text: "Проверено реальными папами — не теория, а практика" },
  { icon: "🚀", text: "Стартовать можно уже сегодня — без вложений" },
];

const CtaButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4">
    <a
      href="#"
      className="flex-1 flex items-center justify-center gap-3 bg-[#0077FF] hover:bg-[#0060cc] text-white font-montserrat font-bold text-base sm:text-lg py-5 px-6 rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" fill="#0077FF"/>
        <path d="M12.748 16.5c-4.966 0-7.797-3.41-7.915-9.083h2.487c.08 4.162 1.924 5.93 3.379 6.29V7.417h2.344v3.587c1.437-.155 2.945-1.797 3.457-3.587h2.344c-.393 2.222-2.036 3.864-3.205 4.537 1.17.545 3.04 1.99 3.757 4.546h-2.579c-.56-1.754-1.955-3.111-3.775-3.286V16.5h-.294Z" fill="white"/>
      </svg>
      Смотреть ВКонтакте
    </a>
    <a
      href="#"
      className="flex-1 flex items-center justify-center gap-3 bg-[#ffA500] hover:bg-[#e69400] text-white font-montserrat font-bold text-base sm:text-lg py-5 px-6 rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4.93 7.07-1.75 8.23c-.13.58-.47.72-.95.45l-2.62-1.93-1.26 1.22c-.14.14-.26.26-.53.26l.19-2.68 4.87-4.4c.21-.19-.05-.29-.33-.1L7.9 14.73l-2.56-.8c-.56-.17-.57-.56.12-.83l10-3.85c.46-.17.87.11.47 1.82Z" fill="white"/>
      </svg>
      Смотреть в Telegram
    </a>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-golos overflow-x-hidden">

      <div className="h-1.5 w-full bg-[#ffA500]" />

      {/* Hero */}
      <section className="relative pt-14 pb-10 px-5 max-w-2xl mx-auto text-center">

        <div
          className="inline-flex items-center gap-2 bg-[#fff4e0] border border-[#ffA500] rounded-full px-4 py-1.5 mb-7 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-[#ffA500] font-montserrat text-xs tracking-widest uppercase font-bold">Бесплатный лид-магнит</span>
        </div>

        <h1
          className="font-montserrat font-black text-4xl sm:text-5xl leading-tight text-gray-900 mb-5 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Более{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#ffA500]">17 проверенных</span>
            <span className="absolute left-0 w-full h-3 bg-[#fff4e0] -z-0 rounded" style={{ bottom: "2px" }} />
          </span>
          <br />
          подработок
          <br />
          <span className="text-gray-700 font-extrabold">для работающих пап</span>
        </h1>

        <p
          className="text-gray-500 text-lg leading-relaxed mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.35s" }}
        >
          Собрал только рабочие варианты — без лишней воды.<br />
          Заработок рядом с семьёй, без ущерба для основной работы.
        </p>

        {/* Кнопки — верхний блок (до картинки) */}
        <div
          className="mb-3 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <CtaButtons />
          <p className="text-gray-400 text-xs mt-4">🔒 Бесплатно · Без регистрации · Моментальный доступ</p>
        </div>
      </section>

      {/* Фото */}
      <section className="px-5 max-w-2xl mx-auto mb-10">
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.55s" }}
        >
          <img
            src={IMG_DAD_CHILD}
            alt="Папа с ребёнком"
            className="w-full h-72 sm:h-80 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#ffA500]/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#ffA500]/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Выгоды */}
      <section className="px-5 max-w-2xl mx-auto mb-10">
        <div className="bg-[#fffaf2] border border-[#ffe0a0] rounded-2xl p-6 sm:p-8">
          <h2 className="font-montserrat font-bold text-gray-900 text-lg mb-5">Что внутри:</h2>
          <ul className="space-y-4">
            {benefits.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + i * 0.1}s` }}
              >
                <span className="text-2xl leading-none mt-0.5">{b.icon}</span>
                <span className="text-gray-700 text-base leading-snug">{b.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Кнопки — нижний блок */}
      <section className="px-5 max-w-2xl mx-auto mb-16">
        <div className="text-center mb-7">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-gray-900 mb-2">
            Выберите, где читать:
          </h2>
          <p className="text-gray-400 text-sm">Материал доступен в двух местах — выбери удобное</p>
        </div>
        <CtaButtons />
        <p className="text-center text-gray-400 text-xs mt-5">🔒 Бесплатно · Без регистрации · Моментальный доступ</p>
      </section>

      <footer className="border-t border-gray-100 py-6 text-center">
        <p className="text-gray-300 text-xs font-golos">© 2026 · Все подработки проверены лично</p>
      </footer>

    </div>
  );
};

export default Index;
