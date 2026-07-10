import fs from "node:fs";
import path from "node:path";

const rootDir = path.resolve(process.cwd());
const outputDir = path.join(rootDir, "static-html");
const assetsDir = path.join(outputDir, "assets");

const locales = ["ru", "kz", "en"];

const localeNames = {
  ru: "Русский",
  kz: "Қазақша",
  en: "English"
};

const dictionary = {
  ru: {
    lang: "ru",
    brand: "NS Company",
    nav: {
      projects: "Проекты",
      approach: "Подход",
      contact: "Контакт"
    },
    hero: {
      eyebrow: "NS Company",
      title: "NS Company. Наши проекты и работы.",
      description:
        "В портфолио собраны сайты, цифровые сервисы и внутренние корпоративные продукты, выполненные для разных задач и направлений.",
      primaryAction: "Открыть проекты",
      featuredTitle: "Избранные проекты",
      featuredText: "Несколько проектов, с которых можно начать знакомство с портфолио."
    },
    projects: {
      eyebrow: "Проекты",
      title: "Актуальная подборка работ",
      description: "Коммерческие сайты, внутренние системы и цифровые инструменты в одном портфолио."
    },
    approach: {
      title: "Подход",
      text:
        "В портфолио собраны разные по типу проекты: от публичных сайтов и сервисов до внутренних корпоративных систем. Такой опыт позволяет быстро разбираться в задаче, выстраивать понятную структуру, учитывать бизнес-контекст и собирать решение, которое удобно использовать в реальной работе."
    },
    contact: {
      title: "Контакт",
      text: "Открыты к новым проектам, внедрениям и продуктовым задачам.",
      phoneLabel: "Телефон",
      phone: "+7 708 385 8570",
      emailLabel: "Почта",
      email: "team@ns-company.kz",
      addressLabel: "Адрес",
      address: "г. Алматы, улица Мамыр 7, дом 14а"
    },
    project: {
      details: "Подробнее",
      back: "На главную",
      source: "Открыть исходный сайт",
      related: "Другие проекты",
      placeholder: "Временный контент"
    },
    meta: {
      homeTitle: "NS Company Portfolio",
      homeDescription: "Статическая версия портфолио NS Company для удобного хостинга.",
      notFoundTitle: "Страница не найдена",
      notFoundDescription: "Выберите одну из доступных языковых версий портфолио."
    }
  },
  kz: {
    lang: "kk",
    brand: "NS Company",
    nav: {
      projects: "Жобалар",
      approach: "Тәсіл",
      contact: "Байланыс"
    },
    hero: {
      eyebrow: "NS Company",
      title: "NS Company. Біздің жобалар мен жұмыстар.",
      description:
        "Портфолиода әртүрлі міндеттер мен бағыттарға арналған сайттар, цифрлық сервистер және ішкі корпоративтік өнімдер жинақталған.",
      primaryAction: "Жобаларды ашу",
      featuredTitle: "Таңдалған жобалар",
      featuredText: "Портфолиомен танысуды бастауға болатын бірнеше жоба."
    },
    projects: {
      eyebrow: "Жобалар",
      title: "Жұмыстардың өзекті жинағы",
      description: "Коммерциялық сайттар, ішкі жүйелер және цифрлық құралдар бір портфолиода."
    },
    approach: {
      title: "Тәсіл",
      text:
        "Портфолиода әртүрлі форматтағы жобалар жиналған: ашық сайттар мен сервистерден бастап ішкі корпоративтік жүйелерге дейін. Мұндай тәжірибе міндетті тез түсінуге, логикалық құрылым құруға, бизнес-контексті ескеруге және нақты жұмыста қолдануға ыңғайлы шешім жасауға мүмкіндік береді."
    },
    contact: {
      title: "Байланыс",
      text: "Жаңа жобаларға, енгізулерге және өнімдік міндеттерге ашықпыз.",
      phoneLabel: "Телефон",
      phone: "+7 708 385 8570",
      emailLabel: "Пошта",
      email: "team@ns-company.kz",
      addressLabel: "Мекенжай",
      address: "Алматы қ., Мамыр 7 көшесі, 14а үй"
    },
    project: {
      details: "Толығырақ",
      back: "Басты бетке",
      source: "Бастапқы сайтты ашу",
      related: "Басқа жобалар",
      placeholder: "Уақытша контент"
    },
    meta: {
      homeTitle: "NS Company Portfolio",
      homeDescription: "NS Company портфолиосының ыңғайлы хостингке арналған статикалық нұсқасы.",
      notFoundTitle: "Бет табылмады",
      notFoundDescription: "Портфолионың қолжетімді тілдік нұсқаларының бірін таңдаңыз."
    }
  },
  en: {
    lang: "en",
    brand: "NS Company",
    nav: {
      projects: "Projects",
      approach: "Approach",
      contact: "Contact"
    },
    hero: {
      eyebrow: "NS Company",
      title: "NS Company. Our projects and work.",
      description:
        "The portfolio brings together websites, digital services, and internal corporate products delivered for different business needs and directions.",
      primaryAction: "Open projects",
      featuredTitle: "Featured projects",
      featuredText: "A few projects you can use to start exploring the portfolio."
    },
    projects: {
      eyebrow: "Projects",
      title: "Current selection of work",
      description: "Commercial websites, internal systems, and digital tools collected in one portfolio."
    },
    approach: {
      title: "Approach",
      text:
        "The portfolio includes different kinds of work, from public-facing websites and services to internal corporate systems. This range of experience helps turn business tasks into clear structure, practical interfaces, and solutions that are comfortable to use in real workflows."
    },
    contact: {
      title: "Contact",
      text: "Open to new projects, implementations, and product work.",
      phoneLabel: "Phone",
      phone: "+7 708 385 8570",
      emailLabel: "Email",
      email: "team@ns-company.kz",
      addressLabel: "Address",
      address: "Almaty, Mamyr 7 street, building 14a"
    },
    project: {
      details: "Details",
      back: "Back to home",
      source: "Open source website",
      related: "Other projects",
      placeholder: "Temporary content"
    },
    meta: {
      homeTitle: "NS Company Portfolio",
      homeDescription: "Static export of the NS Company portfolio for simple hosting.",
      notFoundTitle: "Page not found",
      notFoundDescription: "Choose one of the available language versions of the portfolio."
    }
  }
};

const visibleProjects = [
  {
    slug: "go-market",
    year: "2026",
    status: "Published",
    accent: "#5eead4",
    siteUrl: "https://go-market.kz",
    icon: "go_market.png",
    tags: ["Vending", "Cross-platform", "Admin Panel"],
    title: {
      ru: "Go Market",
      kz: "Go Market",
      en: "Go Market"
    },
    category: {
      ru: "Вендинг и IoT",
      kz: "Вендинг және IoT",
      en: "Vending and IoT"
    },
    summary: {
      ru: "Кроссплатформенная панель управления вендинговыми автоматами и умными холодильниками: веб-версия и приложения для Android и iOS.",
      kz: "Вендинг автоматтары мен смарт тоңазытқыштарды басқаруға арналған кроссплатформалық панель: веб-нұсқа және Android пен iOS қосымшалары.",
      en: "A cross-platform control panel for vending machines and smart fridges: a web version plus Android and iOS applications."
    },
    description: {
      ru: "Go Market объединяет управление сетью торговых устройств в одном интерфейсе: товары, партии, инвентаризация, устройства, транзакции, статистика и подписки. Веб-версия и мобильные приложения собираются из одного кодбейза на React Native и Expo.",
      kz: "Go Market сауда құрылғылары желісін басқаруды бір интерфейсте біріктіреді: тауарлар, партиялар, түгендеу, құрылғылар, транзакциялар, статистика және жазылымдар. Веб-нұсқа мен мобильді қосымшалар React Native және Expo негізіндегі бір кодбейзден жиналады.",
      en: "Go Market brings the management of a device network into one interface: products, batches, inventory, devices, transactions, statistics, and subscriptions. The web version and the mobile apps are built from a single React Native and Expo codebase."
    },
    facts: {
      ru: [
        ["Платформы", "Web, Android, iOS"],
        ["Стек", "React Native + Expo"],
        ["Разделы панели", "9"],
        ["Видео", "Просмотр камер"]
      ],
      kz: [
        ["Платформалар", "Web, Android, iOS"],
        ["Стек", "React Native + Expo"],
        ["Панель бөлімдері", "9"],
        ["Видео", "Камераларды көру"]
      ],
      en: [
        ["Platforms", "Web, Android, iOS"],
        ["Stack", "React Native + Expo"],
        ["Panel sections", "9"],
        ["Video", "Camera streaming"]
      ]
    },
    sections: {
      ru: [
        [
          "Контекст",
          "Go Market закрывает операционные задачи владельца сети торговых устройств: заведение товаров и партий, инвентаризация, подключение автоматов, разбор транзакций и статистики. Доступ разделен по ролям: администратор сервиса управляет пользователями и подписками, владелец точек работает с товарами и остатками."
        ],
        [
          "Что выделяет проект",
          "Один кодбейз обслуживает сразу три платформы: браузер, Android и iOS. Наиболее показательная часть - просмотр камер устройств, реализованный под каждую платформу отдельно: в вебе это WASM-плеер, на телефонах - нативный модуль поверх камерного SDK, подключенный через config plugins Expo."
        ]
      ],
      kz: [
        [
          "Контекст",
          "Go Market сауда құрылғылары желісі иесінің операциялық міндеттерін жабады: тауарлар мен партияларды енгізу, түгендеу, автоматтарды қосу, транзакциялар мен статистиканы талдау. Қолжетімділік рөлдер бойынша бөлінген: сервис әкімшісі пайдаланушылар мен жазылымдарды басқарады, нүкте иесі тауарлармен және қалдықтармен жұмыс істейді."
        ],
        [
          "Жобаның ерекшелігі",
          "Бір кодбейз үш платформаны бірден қамтиды: браузер, Android және iOS. Ең көрнекті бөлігі - құрылғы камераларын көру, ол әр платформаға бөлек жасалған: вебте бұл WASM-плеер, телефондарда - Expo config plugins арқылы қосылған камера SDK үстіндегі нативті модуль."
        ]
      ],
      en: [
        [
          "Context",
          "Go Market covers the operational needs of a device network owner: managing products and batches, running inventory, connecting machines, and reviewing transactions and statistics. Access is split by role: the service administrator manages users and subscriptions, while the location owner works with products and stock."
        ],
        [
          "What stands out",
          "A single codebase serves three platforms at once: browser, Android, and iOS. The most telling part is device camera streaming, implemented separately per platform: a WASM player on the web, and a native module on top of the camera SDK wired in through Expo config plugins on phones."
        ]
      ]
    }
  },
  {
    slug: "alash-coffee",
    year: "2026",
    status: "Published",
    accent: "#d4a14d",
    siteUrl: "https://alash-coffee.kz/rus",
    icon: "alash_coffee.png",
    tags: ["Franchise", "Leadgen", "Retail"],
    title: {
      ru: "Alash Coffee",
      kz: "Alash Coffee",
      en: "Alash Coffee"
    },
    category: {
      ru: "Франшиза и retail",
      kz: "Франшиза және retail",
      en: "Franchise and retail"
    },
    summary: {
      ru: "Сайт кофейной франшизы с фокусом на партнерскую воронку, форматы запуска и сильную leadgen-подачу.",
      kz: "Серіктестік воронкасына, іске қосу форматтарына және leadgen логикасына бағытталған кофейня франшизасының сайты.",
      en: "A coffee franchise website focused on the partner funnel, launch formats, and strong lead-generation flow."
    },
    description: {
      ru: "По данным сайта Alash Coffee, проект продвигает франшизу и партнерскую модель вокруг кофейных точек, вендинга и островков. Основа подачи - сильный оффер, цифры сети и понятный путь к заявке.",
      kz: "Alash Coffee сайтының мәліметіне сүйенсек, жоба кофейня нүктелері, вендинг және арал форматтары айналасындағы франшиза мен серіктестік моделін ілгерілетеді. Негізгі екпін - күшті оффер, желі көрсеткіштері және өтінімге апаратын түсінікті жол.",
      en: "According to the Alash Coffee website, the project promotes a franchise and partner model around coffee points, vending, and island formats. The presentation is built around a strong offer, network metrics, and a clear path to the application."
    },
    facts: {
      ru: [
        ["Партнеры сети", ">250"],
        ["Активные точки", ">270"],
        ["Города присутствия", "38"],
        ["Проданных стаканов", ">3 млн"]
      ],
      kz: [
        ["Желі серіктестері", ">250"],
        ["Белсенді нүктелер", ">270"],
        ["Қалалар саны", "38"],
        ["Сатылған стақандар", ">3 млн"]
      ],
      en: [
        ["Network partners", ">250"],
        ["Active locations", ">270"],
        ["Cities", "38"],
        ["Cups sold", ">3 mln"]
      ]
    },
    sections: {
      ru: [
        [
          "Контекст",
          "Alash Coffee продвигает несколько форматов запуска: вендинг, островок, павильон и кофейню. Для такого продукта критично быстро объяснить бизнес-модель и показать доверие к бренду через цифры и социальное доказательство."
        ],
        [
          "Что выделяет проект",
          "Кейс хорошо показывает связку бренда, партнерской воронки и коммерческого лендинга. На уровне структуры это пример сайта, который работает и как презентация, и как инструмент продаж."
        ]
      ],
      kz: [
        [
          "Контекст",
          "Alash Coffee бірнеше іске қосу форматын ұсынады: вендинг, арал, павильон және кофехана. Мұндай өнім үшін бизнес-модельді тез түсіндіру және брендке сенімді цифрлар мен әлеуметтік дәлел арқылы көрсету маңызды."
        ],
        [
          "Жобаның ерекшелігі",
          "Бұл кейс бренд, серіктестік воронкасы және коммерциялық лендингтің байланысын жақсы көрсетеді. Құрылым тұрғысынан бұл әрі таныстырылым, әрі сату құралы ретінде жұмыс істейтін сайттың мысалы."
        ]
      ],
      en: [
        [
          "Context",
          "Alash Coffee promotes several launch formats: vending, island, pavilion, and coffee shop. For this type of product, it is critical to explain the business model quickly and establish trust through metrics and social proof."
        ],
        [
          "What stands out",
          "This case clearly shows the combination of brand presentation, partner funnel, and commercial landing page. Structurally, it is a good example of a website that works as both a presentation layer and a sales tool."
        ]
      ]
    }
  },
  {
    slug: "forpay-kz",
    year: "2026",
    status: "Published",
    accent: "#64b6f7",
    siteUrl: "https://forpay.kz/#ru",
    tags: ["Fintech", "Kaspi QR", "Self-service"],
    title: {
      ru: "ForPay.kz",
      kz: "ForPay.kz",
      en: "ForPay.kz"
    },
    category: {
      ru: "Fintech-сервис",
      kz: "Fintech сервисі",
      en: "Fintech service"
    },
    summary: {
      ru: "Сервис подключения Kaspi QR для аппаратов самообслуживания с мониторингом, статистикой и техподдержкой.",
      kz: "Өзіне-өзі қызмет көрсету аппараттарына арналған Kaspi QR қосу сервисі: мониторинг, статистика және техникалық қолдау.",
      en: "A Kaspi QR connection service for self-service machines with monitoring, statistics, and technical support."
    },
    description: {
      ru: "По данным сайта ForPay.kz, продукт ориентирован на бизнесы с аппаратами самообслуживания и помогает внедрять Kaspi QR, отслеживать продажи и получать техническое сопровождение.",
      kz: "ForPay.kz сайтының мәліметіне сәйкес, өнім өзіне-өзі қызмет көрсету аппараттары бар бизнеске арналған және Kaspi QR енгізуге, сатылымды бақылауға және техникалық қолдау алуға көмектеседі.",
      en: "According to the ForPay.kz website, the product is aimed at businesses with self-service machines and helps them implement Kaspi QR, track sales, and receive technical support."
    },
    facts: {
      ru: [
        ["Продукт", "Kaspi QR для автоматов"],
        ["Функция", "Удаленный мониторинг"],
        ["Функция", "Статистика продаж"],
        ["Поддержка", "Техническое сопровождение"]
      ],
      kz: [
        ["Өнім", "Автоматтарға арналған Kaspi QR"],
        ["Функция", "Қашықтан мониторинг"],
        ["Функция", "Сатылым статистикасы"],
        ["Қолдау", "Техникалық сүйемелдеу"]
      ],
      en: [
        ["Product", "Kaspi QR for machines"],
        ["Feature", "Remote monitoring"],
        ["Feature", "Sales statistics"],
        ["Support", "Technical support"]
      ]
    },
    sections: {
      ru: [
        [
          "Контекст",
          "ForPay.kz работает в нише аппаратов самообслуживания, где важны безналичная оплата, быстрый запуск и стабильное сопровождение. Сайт объясняет ценность сервиса коротко и по делу."
        ],
        [
          "Что выделяет проект",
          "Проект показывает удобный баланс между B2B-подачей и сервисной логикой: оплата, мониторинг и поддержка соединяются в одном понятном продукте."
        ]
      ],
      kz: [
        [
          "Контекст",
          "ForPay.kz өзіне-өзі қызмет көрсету аппараттары сегментінде жұмыс істейді, мұнда қолма-қолсыз төлем, жылдам іске қосу және тұрақты сүйемелдеу маңызды. Сайт сервистің құндылығын қысқа әрі нақты түсіндіреді."
        ],
        [
          "Жобаның ерекшелігі",
          "Жоба B2B ұсыну мен сервистік логиканың жақсы балансын көрсетеді: төлем, мониторинг және қолдау бір түсінікті өнімде біріктірілген."
        ]
      ],
      en: [
        [
          "Context",
          "ForPay.kz operates in the self-service machine niche, where cashless payments, quick setup, and stable support are important. The website explains the value of the service clearly and directly."
        ],
        [
          "What stands out",
          "The project shows a strong balance between B2B communication and service logic: payment, monitoring, and support are presented as one clear product."
        ]
      ]
    }
  },
  {
    slug: "iifn",
    year: "2026",
    status: "Published",
    accent: "#c9ab4a",
    siteUrl: "https://iifn.kz/ru",
    tags: ["Education", "Research", "Institution"],
    title: {
      ru: "ИИФН",
      kz: "ИИФН",
      en: "IIFN"
    },
    category: {
      ru: "Образование и исследования",
      kz: "Білім және зерттеу",
      en: "Education and research"
    },
    summary: {
      ru: "Сайт института, объединяющего обучение, исследования и практику в инженерии, программировании и робототехнике.",
      kz: "Инженерия, бағдарламалау және робототехника салаларындағы оқу, зерттеу және практиканы біріктіретін институттың сайты.",
      en: "A website for an institute that combines education, research, and practice in engineering, programming, and robotics."
    },
    description: {
      ru: "По данным сайта iifn.kz, ИИФН позиционируется как Институт Информационных Фундаментальных Технологий с направлениями в образовании, исследованиях, конференциях и журналах.",
      kz: "iifn.kz сайтының мәліметіне сәйкес, ИИФН білім, зерттеу, конференциялар және журналдар бағыттары бар Ақпараттық іргелі технологиялар институты ретінде ұсынылады.",
      en: "According to iifn.kz, IIFN is positioned as the Institute of Information Fundamental Technologies with directions in education, research, conferences, and journals."
    },
    facts: {
      ru: [
        ["Формат", "Институт / EdTech"],
        ["Направления", "Инженерия и программирование"],
        ["Дополнительно", "Конференции и журналы"],
        ["Фокус", "Практика и исследования"]
      ],
      kz: [
        ["Формат", "Институт / EdTech"],
        ["Бағыттар", "Инженерия және бағдарламалау"],
        ["Қосымша", "Конференциялар мен журналдар"],
        ["Фокус", "Практика және зерттеу"]
      ],
      en: [
        ["Format", "Institute / EdTech"],
        ["Directions", "Engineering and programming"],
        ["Also", "Conferences and journals"],
        ["Focus", "Practice and research"]
      ]
    },
    sections: {
      ru: [
        [
          "Контекст",
          "ИИФН сочетает образовательную подачу и исследовательский контент. На сайте присутствуют разделы об институте, конференциях, журналах и новостях, поэтому структура должна удерживать доверие и ясную навигацию."
        ],
        [
          "Что выделяет проект",
          "Этот кейс показывает работу с институциональным сайтом, где важно одновременно передать академическую серьезность и современный технологичный характер."
        ]
      ],
      kz: [
        [
          "Контекст",
          "ИИФН білім беру мазмұны мен зерттеу контентін біріктіреді. Сайтта институт, конференциялар, журналдар және жаңалықтар туралы бөлімдер бар, сондықтан құрылым сенім мен түсінікті навигацияны ұстауы керек."
        ],
        [
          "Жобаның ерекшелігі",
          "Бұл кейс академиялық салмақ пен заманауи технологиялық мінезді қатар жеткізу маңызды болатын институционалдық сайтпен жұмысты көрсетеді."
        ]
      ],
      en: [
        [
          "Context",
          "IIFN combines educational presentation with research content. The site includes sections about the institute, conferences, journals, and news, so the structure has to maintain trust and clear navigation."
        ],
        [
          "What stands out",
          "This case demonstrates work on an institutional website where academic credibility and a modern technology-driven character must coexist."
        ]
      ]
    }
  }
];

const stylesheet = `
:root {
  --bg: #f4efe7;
  --bg-strong: #efe6d9;
  --panel: rgba(255, 255, 255, 0.72);
  --panel-strong: rgba(255, 255, 255, 0.9);
  --border: rgba(71, 58, 44, 0.12);
  --text: #241d16;
  --muted: #6a5c4f;
  --shadow: 0 24px 70px rgba(52, 41, 30, 0.12);
  --shadow-soft: 0 14px 32px rgba(52, 41, 30, 0.09);
  --radius-xl: 32px;
  --radius-lg: 24px;
  --radius-md: 18px;
  --container: 1180px;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  color: var(--text);
  font-family: "Manrope", "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(212, 161, 77, 0.2), transparent 30%),
    radial-gradient(circle at 80% 20%, rgba(100, 182, 247, 0.18), transparent 26%),
    linear-gradient(180deg, #f8f4ee 0%, var(--bg) 45%, #efe8db 100%);
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

.page-shell {
  width: min(calc(100% - 32px), var(--container));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  background: rgba(248, 244, 238, 0.8);
  border-bottom: 1px solid rgba(71, 58, 44, 0.08);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 0;
}

.brand,
.section-title,
.project-title,
.hero-title,
.fact-value,
.project-card__title,
.related-card__title,
.home-link {
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
}

.brand {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.site-nav,
.locale-switcher,
.action-row,
.hero-grid,
.projects-grid,
.facts-grid,
.section-grid,
.related-grid,
.contact-grid,
.meta-row,
.tag-list,
.badge-list {
  display: flex;
  gap: 12px;
}

.site-nav {
  align-items: center;
  gap: 20px;
}

.site-nav a,
.locale-switcher a {
  color: var(--muted);
  font-size: 0.95rem;
}

.locale-switcher {
  flex-wrap: wrap;
  justify-content: flex-end;
}

.locale-switcher a {
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid transparent;
}

.locale-switcher a.is-active {
  color: var(--text);
  border-color: var(--border);
  background: var(--panel-strong);
  box-shadow: var(--shadow-soft);
}

.main-layout {
  padding: 28px 0 80px;
}

.hero-grid,
.section-grid {
  display: grid;
  gap: 24px;
}

.hero-grid {
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
}

.section-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.surface-card,
.surface-soft,
.project-card,
.fact-card,
.related-card,
.not-found-card {
  border: 1px solid var(--border);
  background: var(--panel);
  box-shadow: var(--shadow);
  backdrop-filter: blur(14px);
}

.surface-card,
.project-card,
.not-found-card {
  border-radius: var(--radius-xl);
}

.surface-soft,
.fact-card,
.related-card {
  border-radius: var(--radius-lg);
}

.hero-card,
.detail-card,
.content-section,
.not-found-card {
  padding: 32px;
}

.hero-badge,
.eyebrow,
.pill,
.accent-pill,
.status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 999px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.hero-badge,
.eyebrow,
.pill,
.status-pill {
  color: var(--muted);
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(71, 58, 44, 0.08);
}

.hero-title,
.project-title,
.section-title {
  margin: 18px 0 0;
  font-weight: 700;
  letter-spacing: -0.06em;
  line-height: 0.95;
}

.hero-title {
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  max-width: 14ch;
}

.project-title {
  font-size: clamp(2.6rem, 5vw, 4.3rem);
  max-width: 12ch;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3.4rem);
}

.lead,
.body-text,
.supporting-text,
.project-card__summary,
.section-copy,
.not-found-copy {
  color: var(--muted);
  line-height: 1.85;
}

.lead {
  max-width: 60ch;
  margin-top: 22px;
  font-size: 1.04rem;
}

.supporting-text {
  font-size: 0.97rem;
}

.button-primary,
.button-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  border: 1px solid transparent;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.button-primary:hover,
.button-secondary:hover,
.project-card:hover,
.related-card:hover {
  transform: translateY(-2px);
}

.button-primary {
  background: #1f1812;
  color: #fffaf5;
  box-shadow: var(--shadow-soft);
}

.button-secondary {
  background: rgba(255, 255, 255, 0.65);
  border-color: var(--border);
}

.featured-list,
.projects-grid,
.facts-grid,
.related-grid,
.contact-grid,
.tag-list,
.badge-list {
  flex-wrap: wrap;
}

.featured-list {
  display: grid;
  gap: 14px;
  margin-top: 22px;
}

.featured-item,
.project-card,
.related-card {
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
}

.featured-item {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 16px;
  padding: 18px;
}

.featured-item:hover,
.project-card:hover,
.related-card:hover {
  border-color: rgba(71, 58, 44, 0.2);
  box-shadow: 0 28px 60px rgba(52, 41, 30, 0.14);
}

.icon-tile {
  position: relative;
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 18px;
  border: 1px solid var(--border);
  overflow: hidden;
  background: radial-gradient(circle at 20% 20%, var(--accent-soft), transparent 65%), rgba(255, 255, 255, 0.44);
}

.icon-tile--large {
  width: 96px;
  height: 96px;
  border-radius: 24px;
}

.icon-tile img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 14px;
}

.icon-fallback {
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.projects-grid,
.facts-grid,
.related-grid,
.contact-grid {
  display: grid;
  gap: 18px;
}

.projects-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.facts-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.related-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.contact-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 24px;
}

.contact-card--wide {
  grid-column: 1 / -1;
}

.contact-email {
  display: block;
  overflow-wrap: anywhere;
  transition: opacity 160ms ease;
}

.contact-email:hover {
  opacity: 0.7;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
}

.meta-row {
  align-items: center;
  justify-content: space-between;
}

.project-card__title,
.related-card__title {
  font-weight: 700;
  letter-spacing: -0.04em;
}

.project-card__title {
  font-size: 1.6rem;
}

.related-card__title {
  font-size: 1.3rem;
}

.project-card__summary,
.section-copy {
  font-size: 0.97rem;
}

.tag-list,
.badge-list {
  gap: 10px;
}

.accent-pill {
  background: var(--accent-soft);
  color: var(--accent);
}

.status-pill {
  background: rgba(31, 24, 18, 0.08);
}

.project-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

.project-sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.fact-card,
.contact-card,
.featured-item,
.related-card {
  padding: 20px;
}

.fact-label,
.meta-note,
.related-card__meta,
.project-year,
.header-note {
  color: var(--muted);
  font-size: 0.92rem;
}

.fact-value {
  margin-top: 12px;
  font-size: 1.65rem;
  letter-spacing: -0.05em;
  font-weight: 700;
}

.stack {
  display: grid;
  gap: 28px;
}

.stack-lg {
  display: grid;
  gap: 56px;
}

.home-link {
  font-size: 2rem;
  font-weight: 700;
}

.not-found-layout {
  min-height: calc(100vh - 88px);
  display: grid;
  place-items: center;
  padding: 32px 0 64px;
}

.not-found-card {
  max-width: 720px;
  text-align: center;
}

.language-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

@media (max-width: 1040px) {
  .hero-grid,
  .section-grid,
  .facts-grid,
  .related-grid,
  .projects-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .project-header,
  .site-header__inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .locale-switcher {
    justify-content: flex-start;
  }
}

@media (max-width: 760px) {
  .site-nav {
    display: none;
  }

  .hero-card,
  .detail-card,
  .content-section,
  .not-found-card {
    padding: 24px;
  }

  .page-shell {
    width: min(calc(100% - 20px), var(--container));
  }
}
`;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function initials(title) {
  return title
    .split(/[\s:.-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function accentSoft(accent) {
  return `${accent}1f`;
}

function renderIcon(project, locale, size = "normal", assetPrefix = "./assets") {
  const title = project.title[locale];

  if (project.icon) {
    return `<div class="icon-tile ${size === "large" ? "icon-tile--large" : ""}" style="--accent:${project.accent};--accent-soft:${accentSoft(project.accent)}"><img src="${assetPrefix}/${project.icon}" alt="${escapeHtml(title)} icon"></div>`;
  }

  return `<div class="icon-tile ${size === "large" ? "icon-tile--large" : ""}" style="--accent:${project.accent};--accent-soft:${accentSoft(project.accent)}"><span class="icon-fallback">${escapeHtml(initials(title))}</span></div>`;
}

function renderLocaleSwitcher(currentLocale, pageType, slug = "") {
  return locales
    .map((locale) => {
      const href =
        pageType === "home"
          ? `../${locale}/`
          : `../../../${locale}/projects/${slug}/`;

      const currentClass = locale === currentLocale ? "is-active" : "";
      return `<a class="${currentClass}" href="${href}">${localeNames[locale]}</a>`;
    })
    .join("");
}

function renderHeader(locale, pageType, slug = "") {
  const t = dictionary[locale];
  const brandHref = pageType === "home" ? "./" : "../../";
  const navPrefix = pageType === "home" ? "" : "../../";

  return `
    <header class="site-header">
      <div class="page-shell site-header__inner">
        <a class="brand" href="${brandHref}">${escapeHtml(t.brand)}</a>
        <nav class="site-nav">
          <a href="${navPrefix}#projects">${escapeHtml(t.nav.projects)}</a>
          <a href="${navPrefix}#approach">${escapeHtml(t.nav.approach)}</a>
          <a href="${navPrefix}#contact">${escapeHtml(t.nav.contact)}</a>
        </nav>
        <div class="locale-switcher">
          ${renderLocaleSwitcher(locale, pageType, slug)}
        </div>
      </div>
    </header>
  `;
}

function renderLayout({ locale, title, description, body, pageType, slug = "" }) {
  const t = dictionary[locale];

  return `<!doctype html>
<html lang="${t.lang}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${pageType === "home" ? "../styles.css" : "../../../styles.css"}">
  </head>
  <body>
    ${renderHeader(locale, pageType, slug)}
    ${body}
  </body>
</html>`;
}

function renderHomePage(locale) {
  const t = dictionary[locale];

  const featured = visibleProjects
    .slice(0, 3)
    .map(
      (project) => `
        <a class="featured-item surface-soft" href="./projects/${project.slug}/">
          ${renderIcon(project, locale, "normal", "../assets")}
          <div>
            <div class="project-card__title">${escapeHtml(project.title[locale])}</div>
            <div class="header-note">${escapeHtml(project.category[locale])}</div>
          </div>
        </a>
      `
    )
    .join("");

  const cards = visibleProjects
    .map(
      (project) => `
        <a class="project-card" href="./projects/${project.slug}/">
          <div class="meta-row">
            ${renderIcon(project, locale, "normal", "../assets")}
            <span class="accent-pill" style="--accent:${project.accent};--accent-soft:${accentSoft(project.accent)};background:${accentSoft(project.accent)};color:${project.accent};">
              ${escapeHtml(project.category[locale])}
            </span>
          </div>
          <div>
            <div class="project-card__title">${escapeHtml(project.title[locale])}</div>
            <p class="project-card__summary">${escapeHtml(project.summary[locale])}</p>
          </div>
          <div class="tag-list">
            ${project.tags
              .map(
                (tag) =>
                  `<span class="accent-pill" style="--accent:${project.accent};--accent-soft:${accentSoft(project.accent)};background:${accentSoft(project.accent)};color:${project.accent};">${escapeHtml(tag)}</span>`
              )
              .join("")}
          </div>
          <div class="meta-row">
            <span class="project-year">${escapeHtml(project.year)}</span>
            <span>${escapeHtml(t.project.details)}</span>
          </div>
        </a>
      `
    )
    .join("");

  const body = `
    <main class="main-layout">
      <div class="page-shell stack-lg">
        <section class="hero-grid">
          <article class="surface-card hero-card">
            <span class="hero-badge">${escapeHtml(t.hero.eyebrow)}</span>
            <h1 class="hero-title">${escapeHtml(t.hero.title)}</h1>
            <p class="lead">${escapeHtml(t.hero.description)}</p>
            <div class="action-row" style="margin-top: 28px;">
              <a class="button-primary" href="#projects">${escapeHtml(t.hero.primaryAction)}</a>
            </div>
          </article>
          <aside class="surface-card hero-card">
            <div class="stack">
              <div>
                <div class="header-note">${escapeHtml(t.hero.featuredTitle)}</div>
                <p class="supporting-text">${escapeHtml(t.hero.featuredText)}</p>
              </div>
              <div class="featured-list">${featured}</div>
            </div>
          </aside>
        </section>

        <section id="projects" class="stack">
          <div class="meta-row" style="align-items:flex-end; gap: 24px; flex-wrap: wrap;">
            <div>
              <span class="eyebrow">${escapeHtml(t.projects.eyebrow)}</span>
              <h2 class="section-title">${escapeHtml(t.projects.title)}</h2>
            </div>
            <p class="supporting-text" style="max-width: 44ch;">${escapeHtml(t.projects.description)}</p>
          </div>
          <div class="projects-grid">${cards}</div>
        </section>

        <section class="section-grid">
          <article id="approach" class="surface-card content-section">
            <span class="eyebrow">${escapeHtml(t.approach.title)}</span>
            <p class="body-text">${escapeHtml(t.approach.text)}</p>
          </article>
          <article id="contact" class="surface-card content-section">
            <span class="eyebrow">${escapeHtml(t.contact.title)}</span>
            <p class="body-text">${escapeHtml(t.contact.text)}</p>
            <div class="contact-grid">
              <div class="surface-soft contact-card">
                <div class="fact-label">${escapeHtml(t.contact.phoneLabel)}</div>
                <div class="fact-value" style="font-size:1.18rem;">${escapeHtml(t.contact.phone)}</div>
              </div>
              <div class="surface-soft contact-card">
                <div class="fact-label">${escapeHtml(t.contact.emailLabel)}</div>
                <a class="fact-value contact-email" style="font-size:1.18rem;" href="mailto:${escapeHtml(t.contact.email)}">${escapeHtml(t.contact.email)}</a>
              </div>
              <div class="surface-soft contact-card contact-card--wide">
                <div class="fact-label">${escapeHtml(t.contact.addressLabel)}</div>
                <div class="fact-value" style="font-size:1.18rem; line-height:1.5;">${escapeHtml(t.contact.address)}</div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  `;

  return renderLayout({
    locale,
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    body,
    pageType: "home"
  });
}

function renderProjectPage(locale, project) {
  const t = dictionary[locale];
  const related = visibleProjects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3)
    .map(
      (item) => `
        <a class="related-card" href="../${item.slug}/">
          <div style="display:flex; align-items:center; gap:16px;">
            ${renderIcon(item, locale, "normal", "../../../assets")}
            <div>
              <div class="related-card__title">${escapeHtml(item.title[locale])}</div>
              <div class="related-card__meta">${escapeHtml(item.category[locale])}</div>
            </div>
          </div>
        </a>
      `
    )
    .join("");

  const facts = project.facts[locale]
    .map(
      ([label, value]) => `
        <div class="fact-card">
          <div class="fact-label">${escapeHtml(label)}</div>
          <div class="fact-value">${escapeHtml(value)}</div>
        </div>
      `
    )
    .join("");

  const sections = project.sections[locale]
    .map(
      ([title, text]) => `
        <article class="surface-card content-section">
          <h2 class="related-card__title">${escapeHtml(title)}</h2>
          <p class="section-copy">${escapeHtml(text)}</p>
        </article>
      `
    )
    .join("");

  const body = `
    <main class="main-layout">
      <div class="page-shell stack">
        <div class="meta-row" style="flex-wrap:wrap; gap:16px;">
          <a class="button-secondary" href="../../">${escapeHtml(t.project.back)}</a>
          <div class="meta-note">${escapeHtml(project.category[locale])} / ${escapeHtml(project.year)}</div>
        </div>

        <section class="surface-card detail-card">
          <div class="project-header">
            <div>
              <div class="badge-list">
                <span class="pill">${escapeHtml(project.category[locale])}</span>
                <span class="status-pill">${escapeHtml(project.status)}</span>
              </div>
              <h1 class="project-title">${escapeHtml(project.title[locale])}</h1>
              <p class="lead">${escapeHtml(project.description[locale])}</p>
              <div class="tag-list">
                ${project.tags.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("")}
              </div>
            </div>
            <div class="project-sidebar">
              ${renderIcon(project, locale, "large", "../../../assets")}
              <a class="button-secondary" href="${project.siteUrl}" target="_blank" rel="noreferrer">${escapeHtml(t.project.source)}</a>
            </div>
          </div>
        </section>

        <section class="facts-grid">${facts}</section>
        <section class="section-grid">${sections}</section>
        <section class="stack">
          <h2 class="section-title" style="font-size:2.2rem;">${escapeHtml(t.project.related)}</h2>
          <div class="related-grid">${related}</div>
        </section>
      </div>
    </main>
  `;

  return renderLayout({
    locale,
    title: `${project.title[locale]} | NS Company Portfolio`,
    description: project.summary[locale],
    body,
    pageType: "project",
    slug: project.slug
  });
}

function renderRootIndex() {
  return `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=./ru/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>NS Company Portfolio</title>
  </head>
  <body>
    <p><a href="./ru/">Open portfolio</a></p>
  </body>
</html>`;
}

function renderNotFound() {
  const t = dictionary.ru;

  return `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(t.meta.notFoundTitle)}</title>
    <meta name="description" content="${escapeHtml(t.meta.notFoundDescription)}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <main class="not-found-layout">
      <div class="page-shell">
        <div class="not-found-card">
          <div class="eyebrow">404</div>
          <h1 class="section-title">${escapeHtml(t.meta.notFoundTitle)}</h1>
          <p class="not-found-copy">${escapeHtml(t.meta.notFoundDescription)}</p>
          <div class="language-list">
            ${locales.map((locale) => `<a class="button-secondary" href="./${locale}/">${localeNames[locale]}</a>`).join("")}
          </div>
        </div>
      </div>
    </main>
  </body>
</html>`;
}

function ensureDir(targetPath) {
  fs.mkdirSync(targetPath, { recursive: true });
}

function writeFile(targetPath, content) {
  ensureDir(path.dirname(targetPath));
  fs.writeFileSync(targetPath, content, "utf8");
}

function copyAssets() {
  ensureDir(assetsDir);

  const files = ["alash_coffee.png", "go_market.png"];

  for (const file of files) {
    fs.copyFileSync(path.join(rootDir, "icons", file), path.join(assetsDir, file));
  }
}

function cleanOutput() {
  fs.rmSync(outputDir, { recursive: true, force: true });
}

function build() {
  cleanOutput();
  ensureDir(outputDir);
  copyAssets();

  writeFile(path.join(outputDir, "styles.css"), stylesheet.trimStart());
  writeFile(path.join(outputDir, "index.html"), renderRootIndex());
  writeFile(path.join(outputDir, "404.html"), renderNotFound());

  for (const locale of locales) {
    writeFile(path.join(outputDir, locale, "index.html"), renderHomePage(locale));

    for (const project of visibleProjects) {
      writeFile(
        path.join(outputDir, locale, "projects", project.slug, "index.html"),
        renderProjectPage(locale, project)
      );
    }
  }

  console.log(`Static site generated in ${outputDir}`);
}

build();