import {
  MapPin,
  CalendarDays,
  Award,
  BadgeCheck,
  Settings,
  Share2,
  Heart,
  Star,
  Plus,
  Camera,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const dogs = [
  {
    id: "1",
    name: "Локи",
    breed: "Сибирский хаски",
    age: "3 года",
    gender: "Мальчик",
    photo:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
    traits: ["Дружелюбный", "Активный", "Ладит со щенками"],
    activity: 92,
    vaccinated: true,
  },
  {
    id: "2",
    name: "Мия",
    breed: "Корги пемброк",
    age: "1 год",
    gender: "Девочка",
    photo:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
    traits: ["Игривая", "Социальная"],
    activity: 76,
    vaccinated: true,
  },
];

const achievements = [
  { icon: "🏆", label: "100 прогулок" },
  { icon: "⭐", label: "Топ-обзорщик" },
  { icon: "🐾", label: "Социальная стая" },
  { icon: "🛟", label: "Помог найти 2 собак" },
];

const galleryPhotos = [
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80",
];

const events = [
  { title: "DogFest 2026", date: "Сб, 16 мая · 12:00", place: "Сокольники" },
  { title: "Утренняя пробежка", date: "Завтра · 8:00", place: "Парк Горького" },
];

const reviews = [
  { place: "Кафе «Hugo & Bear»", rating: 5, text: "Принесли миску с водой ещё до того, как сели." },
  { place: "Парк Коломенское", rating: 4, text: "Идеально для длинных прогулок, много свободного места." },
];

type Tab = "posts" | "dogs" | "events" | "reviews";

const Profile = () => {
  const [tab, setTab] = useState<Tab>("posts");

  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      {/* Cover + identity */}
      <section className="overflow-hidden rounded-none lg:rounded-3xl border-b lg:border border-app-border bg-app-surface shadow-[0_8px_30px_-12px_hsl(262_83%_15%/0.18)]">
        <div className="relative h-32 bg-primary/15 lg:h-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.45),transparent_60%)]" />
          <button className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-app-surface/80 text-foreground backdrop-blur hover:bg-app-surface">
            <Camera className="h-4 w-4" />
          </button>
        </div>

        <div className="relative px-4 pb-5 pt-0 lg:px-8">
          <div className="-mt-12 flex items-end justify-between gap-3 lg:-mt-16">
            <img
              src="https://i.pravatar.cc/240?u=anya"
              alt="Аня"
              className="h-24 w-24 rounded-full object-cover ring-4 ring-app-surface lg:h-32 lg:w-32"
            />
            <div className="flex items-center gap-2 pb-2">
              <button className="grid h-10 w-10 place-items-center rounded-full border border-app-border bg-app-surface text-foreground hover:bg-app-surface-hover">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="grid h-10 w-10 place-items-center rounded-full border border-app-border bg-app-surface text-foreground hover:bg-app-surface-hover">
                <Settings className="h-4 w-4" />
              </button>
              <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/30 hover:brightness-110">
                Редактировать
              </button>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex items-center gap-1.5">
              <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl">
                Аня Соколова
              </h1>
              <BadgeCheck className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">@anya.husky</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed">
              Хаски-мама 🐺 · фотограф · ищу компанию для утренних пробежек по Москве.
              Веду дневник прививок и обзоры догфрендли мест.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Москва
              </span>
              <span className="flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5 text-primary" /> С нами с марта 2024
              </span>
              <span className="flex items-center gap-1">
                <Award className="h-3.5 w-3.5 text-primary" /> Репутация 4.9
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-4 gap-2 rounded-2xl bg-primary/5 p-3 ring-1 ring-primary/15">
            {[
              { v: "184", l: "Постов" },
              { v: "2 480", l: "Подписчиков" },
              { v: "312", l: "Подписки" },
              { v: "27", l: "Прогулок" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-base font-extrabold lg:text-lg">{s.v}</p>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground lg:text-[11px]">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-4 lg:px-0">
        <h2 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-muted-foreground">
          Достижения
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {achievements.map((a) => (
            <div
              key={a.label}
              className="flex shrink-0 items-center gap-2 rounded-full border border-app-border bg-app-surface px-3 py-2 text-xs font-semibold shadow-sm"
            >
              <span className="text-base leading-none">{a.icon}</span>
              {a.label}
            </div>
          ))}
        </div>
      </section>

      {/* Dogs */}
      <section className="px-4 lg:px-0">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-extrabold uppercase tracking-wide text-muted-foreground">
            Мои собаки
          </h2>
          <button className="flex items-center gap-1 text-xs font-bold text-primary hover:underline">
            <Plus className="h-3 w-3" strokeWidth={3} /> Добавить
          </button>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {dogs.map((d) => (
            <article
              key={d.id}
              className="overflow-hidden rounded-3xl border border-app-border bg-app-surface shadow-[0_8px_30px_-12px_hsl(262_83%_15%/0.18)] transition-transform hover:-translate-y-0.5"
            >
              <div className="relative h-36">
                <img src={d.photo} alt={d.name} className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-base font-extrabold text-white">{d.name}</p>
                  <p className="text-[11px] text-white/85">
                    {d.breed} · {d.age} · {d.gender}
                  </p>
                </div>
                {d.vaccinated && (
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[10px] font-bold text-primary backdrop-blur">
                    <BadgeCheck className="h-3 w-3" /> Привит
                  </span>
                )}
              </div>
              <div className="space-y-2.5 p-3">
                <div className="flex flex-wrap gap-1.5">
                  {d.traits.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-[11px] font-medium text-muted-foreground">
                    <span>Активность</span>
                    <span className="font-bold text-foreground">{d.activity}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-app-surface-hover">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${d.activity}%` }}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="px-0 lg:px-0">
        <div className="sticky top-0 z-10 flex gap-1 overflow-x-auto border-b border-app-border bg-app-bg/80 px-4 backdrop-blur-xl lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {(
            [
              { id: "posts", label: "Посты" },
              { id: "dogs", label: "Галерея" },
              { id: "events", label: "События" },
              { id: "reviews", label: "Отзывы" },
            ] as { id: Tab; label: string }[]
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "relative shrink-0 px-4 py-3 text-sm font-bold transition-colors",
                tab === t.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t.label}
              {tab === t.id && (
                <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>

        <div className="px-4 pt-5 lg:px-0">
          {tab === "posts" || tab === "dogs" ? (
            <div className="grid grid-cols-3 gap-1 sm:gap-2">
              {galleryPhotos.map((src, i) => (
                <div
                  key={i}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-app-surface-hover sm:rounded-2xl"
                >
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end justify-end gap-3 bg-black/0 p-2 text-xs font-bold text-white opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3 fill-white" /> 248
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : tab === "events" ? (
            <ul className="space-y-3">
              {events.map((e) => (
                <li
                  key={e.title}
                  className="flex items-center justify-between rounded-2xl border border-app-border bg-app-surface p-4"
                >
                  <div>
                    <p className="text-sm font-bold">{e.title}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {e.date} · {e.place}
                    </p>
                  </div>
                  <button className="rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-bold text-primary">
                    Подробнее
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-3">
              {reviews.map((r) => (
                <li
                  key={r.place}
                  className="rounded-2xl border border-app-border bg-app-surface p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold">{r.place}</p>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-3.5 w-3.5",
                            i < r.rating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground/30"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{r.text}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default Profile;
