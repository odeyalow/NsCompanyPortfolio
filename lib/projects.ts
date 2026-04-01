import type { StaticImageData } from "next/image";

import alashCoffeeIcon from "@/icons/alash_coffee.png";
import goMarketIcon from "@/icons/go_market.png";
import type { Locale } from "@/lib/i18n";

type LocalizedText = Record<Locale, string>;

export type ProjectFact = {
  label: LocalizedText;
  value: LocalizedText;
};

export type ProjectSection = {
  title: LocalizedText;
  text: LocalizedText;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  year: string;
  summary: LocalizedText;
  description: LocalizedText;
  status: "Published" | "Draft";
  placeholder?: boolean;
  accent: string;
  siteUrl?: string;
  icon?: StaticImageData;
  tags: string[];
  facts: ProjectFact[];
  sections: ProjectSection[];
};

export type LocalizedProject = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  status: "Published" | "Draft";
  placeholder?: boolean;
  accent: string;
  siteUrl?: string;
  icon?: StaticImageData;
  tags: string[];
  facts: Array<{
    label: string;
    value: string;
  }>;
  sections: Array<{
    title: string;
    text: string;
  }>;
};

function t(ru: string, kz: string, en: string): LocalizedText {
  return { ru, kz, en };
}

function same(value: string): LocalizedText {
  return t(value, value, value);
}

export const featuredCaseSlug = "alash-coffee";

export const projects: Project[] = [
  {
    slug: "go-market",
    title: same("Go Market"),
    category: t("Коммерческая платформа", "Коммерциялық платформа", "Commerce platform"),
    year: "2026",
    summary: t(
      "Легкий e-commerce проект с каталогом, быстрым сценарием покупки и современной витриной товаров.",
      "Каталогы, жылдам сатып алу сценарийі және заманауи тауар витринасы бар жеңіл e-commerce жоба.",
      "A lightweight e-commerce project with a catalog, fast purchase flow, and a modern product showcase."
    ),
    description: t(
      "Временное описание для маркетплейс-проекта. Страница уже подготовлена под реальные материалы, пользовательские сценарии и фактические результаты.",
      "Маркетплейс жобасына арналған уақытша сипаттама. Бет нақты материалдар, пайдаланушы сценарийлері және нәтижелер үшін дайын.",
      "Temporary copy for a marketplace project. The page is already prepared for real materials, user flows, and actual results."
    ),
    status: "Draft",
    placeholder: true,
    accent: "#5eead4",
    icon: goMarketIcon,
    tags: ["Marketplace", "Web App", "UI System"],
    facts: [
      { label: t("Тип", "Түрі", "Type"), value: t("B2C / Marketplace", "B2C / Marketplace", "B2C / Marketplace") },
      { label: t("Фокус", "Фокус", "Focus"), value: t("Каталог и покупка", "Каталог және сатып алу", "Catalog and checkout") },
      { label: t("Статус", "Күйі", "Status"), value: t("Контент дополняется", "Контент толықтырылуда", "Content is being updated") }
    ],
    sections: [
      {
        title: t("Контекст", "Контекст", "Context"),
        text: t(
          "Go Market оформлен как гибкая витрина для товаров и акций. Пока нет финальных бизнес-данных, поэтому кейс заполнен нейтральным временным текстом без выдуманных метрик.",
          "Go Market тауарлар мен акцияларға арналған икемді витрина ретінде берілген. Соңғы бизнес-деректер жоқ болғандықтан, кейс ойдан шығарылған метрикаларсыз уақытша мәтінмен толтырылған.",
          "Go Market is positioned as a flexible showcase for products and promotions. Since final business data is not available yet, the case uses neutral temporary copy without invented metrics."
        )
      },
      {
        title: t("Следующий шаг", "Келесі қадам", "Next step"),
        text: t(
          "После получения подробностей сюда можно добавить структуру каталога, сценарии оформления заказа, интеграции и реальные показатели продукта.",
          "Толық ақпарат алынғаннан кейін мұнда каталог құрылымын, тапсырыс беру сценарийлерін, интеграцияларды және нақты көрсеткіштерді қосуға болады.",
          "Once more details are available, the page can be expanded with catalog structure, checkout flows, integrations, and real product metrics."
        )
      }
    ]
  },
  {
    slug: "alash-coffee",
    title: same("Alash Coffee"),
    category: t("Франшиза и retail", "Франшиза және retail", "Franchise and retail"),
    year: "2026",
    summary: t(
      "Сайт кофейной франшизы с фокусом на партнерскую воронку, форматы запуска и сильную leadgen-подачу.",
      "Серіктестік воронкасына, іске қосу форматтарына және leadgen логикасына бағытталған кофейня франшизасының сайты.",
      "A coffee franchise website focused on the partner funnel, launch formats, and strong lead-generation flow."
    ),
    description: t(
      "По данным сайта Alash Coffee, проект продвигает франшизу и партнерскую модель вокруг кофейных точек, вендинга и островков. Основа подачи - сильный оффер, цифры сети и понятный путь к заявке.",
      "Alash Coffee сайтының мәліметіне сүйенсек, жоба кофейня нүктелері, вендинг және арал форматтары айналасындағы франшиза мен серіктестік моделін ілгерілетеді. Негізгі екпін - күшті оффер, желі көрсеткіштері және өтінімге апаратын түсінікті жол.",
      "According to the Alash Coffee website, the project promotes a franchise and partner model around coffee points, vending, and island formats. The presentation is built around a strong offer, network metrics, and a clear path to the application."
    ),
    status: "Published",
    accent: "#d4a14d",
    siteUrl: "https://alash-coffee.kz/rus",
    icon: alashCoffeeIcon,
    tags: ["Franchise", "Leadgen", "Retail"],
    facts: [
      { label: t("Партнеры сети", "Желі серіктестері", "Network partners"), value: same(">250") },
      { label: t("Активные точки", "Белсенді нүктелер", "Active locations"), value: same(">270") },
      { label: t("Города присутствия", "Қалалар саны", "Cities"), value: same("38") },
      { label: t("Проданных стаканов", "Сатылған стақандар", "Cups sold"), value: same(">3 млн") }
    ],
    sections: [
      {
        title: t("Контекст", "Контекст", "Context"),
        text: t(
          "Alash Coffee продвигает несколько форматов запуска: вендинг, островок, павильон и кофейню. Для такого продукта критично быстро объяснить бизнес-модель и показать доверие к бренду через цифры и социальное доказательство.",
          "Alash Coffee бірнеше іске қосу форматын ұсынады: вендинг, арал, павильон және кофехана. Мұндай өнім үшін бизнес-модельді тез түсіндіру және брендке сенімді цифрлар мен әлеуметтік дәлел арқылы көрсету маңызды.",
          "Alash Coffee promotes several launch formats: vending, island, pavilion, and coffee shop. For this type of product, it is critical to explain the business model quickly and establish trust through metrics and social proof."
        )
      },
      {
        title: t("Что выделяет проект", "Жобаның ерекшелігі", "What stands out"),
        text: t(
          "Кейс хорошо показывает связку бренда, партнерской воронки и коммерческого лендинга. На уровне структуры это пример сайта, который работает и как презентация, и как инструмент продаж.",
          "Бұл кейс бренд, серіктестік воронкасы және коммерциялық лендингтің байланысын жақсы көрсетеді. Құрылым тұрғысынан бұл әрі таныстырылым, әрі сату құралы ретінде жұмыс істейтін сайттың мысалы.",
          "This case clearly shows the combination of brand presentation, partner funnel, and commercial landing page. Structurally, it is a good example of a website that works as both a presentation layer and a sales tool."
        )
      }
    ]
  },
  {
    slug: "grand-park-face-recognition",
    title: t(
      "Grand Park: система распознавания лиц",
      "Grand Park: бет-әлпетті тану жүйесі",
      "Grand Park: face recognition system"
    ),
    category: t("AI и безопасность", "AI және қауіпсіздік", "AI and security"),
    year: "2026",
    summary: t(
      "Корпоративная AI-система для идентификации, контроля доступа и анализа потока посетителей.",
      "Идентификация, кіруді бақылау және келушілер ағынын талдауға арналған корпоративтік AI-жүйе.",
      "An enterprise AI system for identification, access control, and visitor-flow analytics."
    ),
    description: t(
      "Временное описание для enterprise-проекта. Страница уже готова под архитектуру решения, этапы внедрения и реальные сценарии эксплуатации.",
      "Enterprise жобаға арналған уақытша сипаттама. Бет шешім архитектурасын, енгізу кезеңдерін және нақты пайдалану сценарийлерін қосуға дайын.",
      "Temporary copy for an enterprise project. The page is already prepared for solution architecture, implementation stages, and real operating scenarios."
    ),
    status: "Draft",
    placeholder: true,
    accent: "#8f8de7",
    tags: ["Computer Vision", "Security", "Analytics"],
    facts: [
      { label: t("Тип", "Түрі", "Type"), value: t("Enterprise system", "Enterprise system", "Enterprise system") },
      { label: t("Направление", "Бағыт", "Direction"), value: t("AI / Face ID", "AI / Face ID", "AI / Face ID") },
      { label: t("Статус", "Күйі", "Status"), value: t("Контент дополняется", "Контент толықтырылуда", "Content is being updated") }
    ],
    sections: [
      {
        title: t("Контекст", "Контекст", "Context"),
        text: t(
          "Такие системы требуют точной обработки событий, понятного интерфейса для операторов и прозрачной истории действий. Это хороший пример кейса на стыке AI и прикладного корпоративного продукта.",
          "Мұндай жүйелер оқиғаларды дәл өңдеуді, операторларға түсінікті интерфейсті және әрекеттердің айқын тарихын талап етеді. Бұл AI мен қолданбалы корпоративтік өнімнің қиылысындағы жақсы кейс.",
          "Systems like this require accurate event handling, a clear operator interface, and a transparent activity history. It is a strong example of a case at the intersection of AI and enterprise software."
        )
      },
      {
        title: t("Следующий шаг", "Келесі қадам", "Next step"),
        text: t(
          "После получения фактических данных можно добавить архитектуру, интеграции с камерами, ключевые сценарии и показатели точности распознавания.",
          "Нақты деректер алынғаннан кейін архитектураны, камералармен интеграцияларды, негізгі сценарийлерді және тану дәлдігін қосуға болады.",
          "Once actual details are available, the page can include architecture, camera integrations, key scenarios, and recognition-accuracy metrics."
        )
      }
    ]
  },
  {
    slug: "forpay-kz",
    title: same("ForPay.kz"),
    category: t("Fintech-сервис", "Fintech сервисі", "Fintech service"),
    year: "2026",
    summary: t(
      "Сервис подключения Kaspi QR для аппаратов самообслуживания с мониторингом, статистикой и техподдержкой.",
      "Өзіне-өзі қызмет көрсету аппараттарына арналған Kaspi QR қосу сервисі: мониторинг, статистика және техникалық қолдау.",
      "A Kaspi QR connection service for self-service machines with monitoring, statistics, and technical support."
    ),
    description: t(
      "По данным сайта ForPay.kz, продукт ориентирован на бизнесы с аппаратами самообслуживания и помогает внедрять Kaspi QR, отслеживать продажи и получать техническое сопровождение.",
      "ForPay.kz сайтының мәліметіне сәйкес, өнім өзіне-өзі қызмет көрсету аппараттары бар бизнеске арналған және Kaspi QR енгізуге, сатылымды бақылауға және техникалық қолдау алуға көмектеседі.",
      "According to the ForPay.kz website, the product is aimed at businesses with self-service machines and helps them implement Kaspi QR, track sales, and receive technical support."
    ),
    status: "Published",
    accent: "#64b6f7",
    siteUrl: "https://forpay.kz/#ru",
    tags: ["Fintech", "Kaspi QR", "Self-service"],
    facts: [
      { label: t("Продукт", "Өнім", "Product"), value: t("Kaspi QR для автоматов", "Автоматтарға арналған Kaspi QR", "Kaspi QR for machines") },
      { label: t("Функция", "Функция", "Feature"), value: t("Удаленный мониторинг", "Қашықтан мониторинг", "Remote monitoring") },
      { label: t("Функция", "Функция", "Feature"), value: t("Статистика продаж", "Сатылым статистикасы", "Sales statistics") },
      { label: t("Поддержка", "Қолдау", "Support"), value: t("Техническое сопровождение", "Техникалық сүйемелдеу", "Technical support") }
    ],
    sections: [
      {
        title: t("Контекст", "Контекст", "Context"),
        text: t(
          "ForPay.kz работает в нише аппаратов самообслуживания, где важны безналичная оплата, быстрый запуск и стабильное сопровождение. Сайт объясняет ценность сервиса коротко и по делу.",
          "ForPay.kz өзіне-өзі қызмет көрсету аппараттары сегментінде жұмыс істейді, мұнда қолма-қолсыз төлем, жылдам іске қосу және тұрақты сүйемелдеу маңызды. Сайт сервистің құндылығын қысқа әрі нақты түсіндіреді.",
          "ForPay.kz operates in the self-service machine niche, where cashless payments, quick setup, and stable support are important. The website explains the value of the service clearly and directly."
        )
      },
      {
        title: t("Что выделяет проект", "Жобаның ерекшелігі", "What stands out"),
        text: t(
          "Проект показывает удобный баланс между B2B-подачей и сервисной логикой: оплата, мониторинг и поддержка соединяются в одном понятном продукте.",
          "Жоба B2B ұсыну мен сервистік логиканың жақсы балансын көрсетеді: төлем, мониторинг және қолдау бір түсінікті өнімде біріктірілген.",
          "The project shows a strong balance between B2B communication and service logic: payment, monitoring, and support are presented as one clear product."
        )
      }
    ]
  },
  {
    slug: "docsign-kz",
    title: same("DocSign.kz"),
    category: t("Документооборот", "Құжат айналымы", "Document workflow"),
    year: "2026",
    summary: t(
      "Сервис цифрового подписания документов с акцентом на согласование, статус документа и понятный процесс.",
      "Келісу, құжат статусы және түсінікті процеске бағытталған құжаттарды цифрлық қол қою сервисі.",
      "A digital signing service focused on approvals, document status, and a clear workflow."
    ),
    description: t(
      "Временное описание для платформы цифровой подписи. Страница готова под будущие сценарии подписания, роли участников и системные интеграции.",
      "Цифрлық қолтаңба платформасына арналған уақытша сипаттама. Бет болашақта қол қою сценарийлері, қатысушылар рөлдері және жүйелік интеграциялар үшін дайын.",
      "Temporary copy for a digital-signature platform. The page is ready for future signing flows, participant roles, and system integrations."
    ),
    status: "Draft",
    placeholder: true,
    accent: "#e59a64",
    tags: ["Digital Signature", "B2B", "Workflow"],
    facts: [
      { label: t("Тип", "Түрі", "Type"), value: t("SaaS / Documents", "SaaS / Documents", "SaaS / Documents") },
      { label: t("Сценарий", "Сценарий", "Scenario"), value: t("Подписание и согласование", "Қол қою және келісу", "Signing and approvals") },
      { label: t("Статус", "Күйі", "Status"), value: t("Контент дополняется", "Контент толықтырылуда", "Content is being updated") }
    ],
    sections: [
      {
        title: t("Контекст", "Контекст", "Context"),
        text: t(
          "DocSign.kz логично подается как B2B-сервис для договоров, внутренних согласований и контроля статусов. Для такой платформы особенно важны доверие, прозрачность и простой интерфейс.",
          "DocSign.kz келісімшарттар, ішкі келісулер және статустарды бақылауға арналған B2B-сервис ретінде берілгені орынды. Мұндай платформа үшін сенім, айқындық және қарапайым интерфейс маңызды.",
          "DocSign.kz is naturally positioned as a B2B service for contracts, internal approvals, and status control. For this kind of platform, trust, transparency, and a simple interface are especially important."
        )
      },
      {
        title: t("Следующий шаг", "Келесі қадам", "Next step"),
        text: t(
          "После появления реальных материалов сюда можно добавить процесс подписания, роли пользователей, цепочку согласования и интеграции с ЭЦП.",
          "Нақты материалдар пайда болғаннан кейін мұнда қол қою процесін, пайдаланушы рөлдерін, келісу тізбегін және ЭЦҚ интеграцияларын қосуға болады.",
          "Once real materials are available, the page can be expanded with the signing flow, user roles, approval chain, and digital-signature integrations."
        )
      }
    ]
  },
  {
    slug: "docstorage",
    title: same("DocStorage"),
    category: t("Безопасное хранение", "Қауіпсіз сақтау", "Secure storage"),
    year: "2026",
    summary: t(
      "Платформа для хранения, поиска и версионирования корпоративных документов с ролевым доступом.",
      "Рөлдік қолжетімділігі бар корпоративтік құжаттарды сақтау, іздеу және нұсқалау платформасы.",
      "A platform for storing, searching, and versioning corporate documents with role-based access."
    ),
    description: t(
      "Временное описание для проекта document storage. Страница уже готова к наполнению данными о доступах, аудите действий и структуре архива.",
      "Құжат сақтау жобасына арналған уақытша сипаттама. Бет қолжетімділік, аудит және архив құрылымы туралы деректермен толтыруға дайын.",
      "Temporary copy for a document-storage project. The page is ready to be expanded with access rules, audit data, and archive structure."
    ),
    status: "Draft",
    placeholder: true,
    accent: "#6bbf87",
    tags: ["Storage", "Access Control", "Enterprise"],
    facts: [
      { label: t("Тип", "Түрі", "Type"), value: t("Enterprise platform", "Enterprise platform", "Enterprise platform") },
      { label: t("Фокус", "Фокус", "Focus"), value: t("Хранение и доступ", "Сақтау және қолжетімділік", "Storage and access") },
      { label: t("Статус", "Күйі", "Status"), value: t("Контент дополняется", "Контент толықтырылуда", "Content is being updated") }
    ],
    sections: [
      {
        title: t("Контекст", "Контекст", "Context"),
        text: t(
          "DocStorage подходит для сценариев, где документами нужно не только управлять, но и искать, версионировать и распределять их по ролям в компании.",
          "DocStorage құжаттарды тек басқару емес, сонымен қатар іздеу, нұсқалау және компания ішінде рөлдер бойынша бөлу қажет болатын сценарийлерге сай келеді.",
          "DocStorage is suited to scenarios where documents must not only be managed, but also searched, versioned, and distributed across company roles."
        )
      },
      {
        title: t("Следующий шаг", "Келесі қадам", "Next step"),
        text: t(
          "После уточнения продукта сюда можно добавить кейсы по доступам, аудиту действий, экспорту документов и интеграциям с корпоративными системами.",
          "Өнім нақтыланғаннан кейін мұнда қолжетімділік, әрекеттер аудиті, құжат экспорттау және корпоративтік жүйелермен интеграциялар бойынша кейстерді қосуға болады.",
          "After the product is clarified, the page can be extended with cases around permissions, action auditing, document export, and integrations with corporate systems."
        )
      }
    ]
  },
  {
    slug: "iifn",
    title: same("ИИФН"),
    category: t("Образование и исследования", "Білім және зерттеу", "Education and research"),
    year: "2026",
    summary: t(
      "Сайт института, объединяющего обучение, исследования и практику в инженерии, программировании и робототехнике.",
      "Инженерия, бағдарламалау және робототехника салаларындағы оқу, зерттеу және практиканы біріктіретін институттың сайты.",
      "A website for an institute that combines education, research, and practice in engineering, programming, and robotics."
    ),
    description: t(
      "По данным сайта iifn.kz, ИИФН позиционируется как Институт Информационных Фундаментальных Технологий с направлениями в образовании, исследованиях, конференциях и журналах.",
      "iifn.kz сайтының мәліметіне сәйкес, ИИФН білім, зерттеу, конференциялар және журналдар бағыттары бар Ақпараттық іргелі технологиялар институты ретінде ұсынылады.",
      "According to iifn.kz, IIFN is positioned as the Institute of Information Fundamental Technologies with directions in education, research, conferences, and journals."
    ),
    status: "Published",
    accent: "#c9ab4a",
    siteUrl: "https://iifn.kz/ru",
    tags: ["Education", "Research", "Institution"],
    facts: [
      { label: t("Формат", "Формат", "Format"), value: t("Институт / EdTech", "Институт / EdTech", "Institute / EdTech") },
      { label: t("Направления", "Бағыттар", "Directions"), value: t("Инженерия и программирование", "Инженерия және бағдарламалау", "Engineering and programming") },
      { label: t("Дополнительно", "Қосымша", "Also"), value: t("Конференции и журналы", "Конференциялар мен журналдар", "Conferences and journals") },
      { label: t("Фокус", "Фокус", "Focus"), value: t("Практика и исследования", "Практика және зерттеу", "Practice and research") }
    ],
    sections: [
      {
        title: t("Контекст", "Контекст", "Context"),
        text: t(
          "ИИФН сочетает образовательную подачу и исследовательский контент. На сайте присутствуют разделы об институте, конференциях, журналах и новостях, поэтому структура должна удерживать доверие и ясную навигацию.",
          "ИИФН білім беру мазмұны мен зерттеу контентін біріктіреді. Сайтта институт, конференциялар, журналдар және жаңалықтар туралы бөлімдер бар, сондықтан құрылым сенім мен түсінікті навигацияны ұстауы керек.",
          "IIFN combines educational presentation with research content. The site includes sections about the institute, conferences, journals, and news, so the structure has to maintain trust and clear navigation."
        )
      },
      {
        title: t("Что выделяет проект", "Жобаның ерекшелігі", "What stands out"),
        text: t(
          "Этот кейс показывает работу с институциональным сайтом, где важно одновременно передать академическую серьезность и современный технологичный характер.",
          "Бұл кейс академиялық салмақ пен заманауи технологиялық мінезді қатар жеткізу маңызды болатын институционалдық сайтпен жұмысты көрсетеді.",
          "This case demonstrates work on an institutional website where academic credibility and a modern technology-driven character must coexist."
        )
      }
    ]
  }
];

function isVisibleProject(project: Project) {
  return !project.placeholder;
}

export const projectCount = projects.filter(isVisibleProject).length;

export function localizeProject(project: Project, locale: Locale): LocalizedProject {
  return {
    slug: project.slug,
    title: project.title[locale],
    category: project.category[locale],
    year: project.year,
    summary: project.summary[locale],
    description: project.description[locale],
    status: project.status,
    placeholder: project.placeholder,
    accent: project.accent,
    siteUrl: project.siteUrl,
    icon: project.icon,
    tags: project.tags,
    facts: project.facts.map((fact) => ({
      label: fact.label[locale],
      value: fact.value[locale]
    })),
    sections: project.sections.map((section) => ({
      title: section.title[locale],
      text: section.text[locale]
    }))
  };
}

export function getLocalizedProjects(locale: Locale) {
  return projects.filter(isVisibleProject).map((project) => localizeProject(project, locale));
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getVisibleProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug && isVisibleProject(project));
}

export function getLocalizedProjectBySlug(slug: string, locale: Locale) {
  const project = getProjectBySlug(slug);
  return project ? localizeProject(project, locale) : undefined;
}

export function getRelatedProjects(slug: string) {
  return projects.filter((project) => project.slug !== slug && isVisibleProject(project)).slice(0, 3);
}

export function getRelatedLocalizedProjects(slug: string, locale: Locale) {
  return projects
    .filter((project) => project.slug !== slug && isVisibleProject(project))
    .slice(0, 3)
    .map((project) => localizeProject(project, locale));
}
