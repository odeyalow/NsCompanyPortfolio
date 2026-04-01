export const locales = ["ru", "kz", "en"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  ru: "RU",
  kz: "KZ",
  en: "EN"
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const dictionary = {
  ru: {
    brand: "NS Company",
    nav: {
      projects: "Проекты",
      approach: "Подход",
      contact: "Контакт"
    },
    theme: {
      light: "Светлая тема",
      dark: "Темная тема"
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
    notFound: {
      eyebrow: "404",
      title: "Такой проект не найден",
      description: "Проверьте ссылку или вернитесь на главную страницу портфолио.",
      action: "Вернуться на главную"
    }
  },
  kz: {
    brand: "NS Company",
    nav: {
      projects: "Жобалар",
      approach: "Тәсіл",
      contact: "Байланыс"
    },
    theme: {
      light: "Жарық тақырып",
      dark: "Қараңғы тақырып"
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
    notFound: {
      eyebrow: "404",
      title: "Мұндай жоба табылмады",
      description: "Сілтемені тексеріңіз немесе портфолионың басты бетіне оралыңыз.",
      action: "Басты бетке оралу"
    }
  },
  en: {
    brand: "NS Company",
    nav: {
      projects: "Projects",
      approach: "Approach",
      contact: "Contact"
    },
    theme: {
      light: "Light theme",
      dark: "Dark theme"
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
    notFound: {
      eyebrow: "404",
      title: "This project was not found",
      description: "Check the link or return to the portfolio home page.",
      action: "Return to home"
    }
  }
} as const;

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}
