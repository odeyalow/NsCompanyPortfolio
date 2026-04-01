import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { ProjectIcon } from "@/components/project-icon";
import { SiteHeader } from "@/components/site-header";
import { getLocalizedProjects, projectCount } from "@/lib/projects";

const heroStats = [
  { label: "Проектов в витрине", value: String(projectCount) },
  { label: "Реальные сайты как источник", value: "3" },
  { label: "Текущий стек", value: "Next.js / React" }
];

const approachItems = [
  {
    title: "Minimal dark system",
    text: "Сетка, воздух, крупная типографика и мягкие переходы вместо визуального шума."
  },
  {
    title: "Иконки не спорят с дизайном",
    text: "Каждая иконка помещается в нейтральную капсулу с легкой подложкой, поэтому разные стили остаются собранными."
  },
  {
    title: "Карточка ведет в кейс",
    text: "Главная страница продает отбор проектов, а детальная страница раскрывает контекст, задачи и подачу."
  }
];

const stack = ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "App Router", "next/image"];

export default function Home() {
  const localizedProjects = getLocalizedProjects("ru");
  const spotlightProjects = localizedProjects.slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 pb-24 pt-8 sm:px-8 lg:px-12 lg:pt-10">
          <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="panel-glow relative overflow-hidden rounded-[36px] border border-white/8 bg-white/[0.03] p-7 sm:p-9 lg:p-12">
              <div className="absolute -left-24 top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
              <div className="relative space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-white/56">
                  Portfolio / Selected work
                </div>

                <div className="space-y-5">
                  <h1 className="max-w-3xl font-display text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
                    Минималистичное dark-портфолио с акцентом на проекты и быстрый просмотр кейсов.
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                    Главная страница собрана как чистая витрина: сначала сильный оффер, затем карточки
                    проектов, а дальше уже подробные страницы с контекстом, задачами и результатом.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Открыть проекты
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.035] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/[0.08]"
                  >
                    Обсудить следующий проект
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {heroStats.map((item) => (
                    <div key={item.label} className="rounded-[24px] border border-white/10 bg-black/12 p-4">
                      <div className="font-display text-2xl font-semibold tracking-[-0.05em] text-white">
                        {item.value}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-white/55">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              <div className="panel-glow slow-drift relative overflow-hidden rounded-[32px] border border-white/8 bg-white/[0.03] p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_48%)]" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/46">UI library mood</p>
                      <h2 className="mt-1 font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                        Карточечная витрина
                      </h2>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/58">
                      Dark / Modern
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {spotlightProjects.map((project) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="flex items-center gap-4 rounded-[22px] border border-white/10 bg-black/12 p-4 transition-colors duration-200 hover:bg-white/[0.05]"
                      >
                        <ProjectIcon title={project.title} accent={project.accent} icon={project.icon} />
                        <div className="min-w-0">
                          <div className="font-display text-lg tracking-[-0.04em] text-white">
                            {project.title}
                          </div>
                          <div className="mt-1 text-sm leading-6 text-white/55">{project.category}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="panel-glow slow-drift-delay relative overflow-hidden rounded-[32px] border border-white/8 bg-white/[0.03] p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.14),transparent_44%)]" />
                <div className="relative space-y-5">
                  <p className="text-sm text-white/46">Как это выглядит в системе</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-white/10 bg-black/12 p-4">
                      <div className="text-sm text-white/48">Иконки</div>
                      <div className="mt-2 text-base leading-7 text-white/72">
                        Нейтральный контейнер держит вместе и логотипы, и простые пиктограммы.
                      </div>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-black/12 p-4">
                      <div className="text-sm text-white/48">Переходы</div>
                      <div className="mt-2 text-base leading-7 text-white/72">
                        Hover и мягкий сдвиг дают ощущение UI-системы, а не шаблонного лендинга.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/58"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.24em] text-white/42">Selected Projects</p>
                <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                  Карточки стоят сразу после hero и работают как главное содержимое портфолио.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                У каждого проекта есть отдельная страница. Для кейсов без реальных данных уже добавлен
                временный текст, чтобы структура сайта была полностью рабочей с первого запуска.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {localizedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} detailsLabel="Подробнее" />
              ))}
            </div>
          </section>

          <section id="approach" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="panel-glow rounded-[32px] border border-white/8 bg-white/[0.03] p-7 sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-white/42">Approach</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.06em] text-white">
                Сайт строится как продукт, а не как просто набор блоков.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/65">
                Основной фокус здесь на чистоте интерфейса, скорости загрузки и удобной модели данных.
                Это позволит без переделки добавлять новые проекты, иконки, экраны и полноценные кейсы.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {approachItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)]"
                >
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.05em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="panel-glow relative overflow-hidden rounded-[36px] border border-white/8 bg-white/[0.035] p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,234,212,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.14),transparent_40%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.24em] text-white/42">Next Step</p>
                <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                  Можно сразу расширять кейсы, добавлять реальные материалы и ваши контакты.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/68">
                  Блок уже готов под дальнейшее наполнение. При необходимости сюда можно добавить форму,
                  Telegram, почту, фильтр проектов и отдельную страницу обо мне или о компании.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/14 p-5 text-sm leading-7 text-white/62">
                Временный контакт
                <div className="mt-2 font-display text-2xl tracking-[-0.05em] text-white">
                  hello@nscompany.kz
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
