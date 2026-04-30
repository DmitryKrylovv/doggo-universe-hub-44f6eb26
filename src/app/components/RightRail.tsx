import { Search, TrendingUp, MapPin, Users } from "lucide-react";

const trends = [
  { tag: "#утренниепрогулки", posts: "2 480" },
  { tag: "#корги", posts: "1 920" },
  { tag: "#dogfest2026", posts: "1 244" },
  { tag: "#догфрендли", posts: "984" },
  { tag: "#адопция", posts: "612" },
];

const suggested = [
  {
    name: "Школа «Хвост и лапа»",
    handle: "@hvostlapa",
    avatar: "https://i.pravatar.cc/120?u=school",
    meta: "Тренировки · Москва",
  },
  {
    name: "Вет-клиника Bemby",
    handle: "@bemby.vet",
    avatar: "https://i.pravatar.cc/120?u=vet",
    meta: "Ветеринария · 24/7",
  },
  {
    name: "Корги-клуб Москва",
    handle: "@corgi.msk",
    avatar: "https://i.pravatar.cc/120?u=corgi",
    meta: "Сообщество · 4.2k",
  },
];

const nearbyWalks = [
  { title: "Утренняя пробежка", place: "Парк Горького", dist: "1.2 км", going: 6 },
  { title: "Йорки и друзья", place: "Парк Сокольники", dist: "3.4 км", going: 4 },
];

const RightRail = () => {
  return (
    <aside className="sticky top-0 hidden h-screen w-[320px] shrink-0 flex-col gap-5 overflow-y-auto border-l border-app-border bg-app-surface/40 px-5 py-6 backdrop-blur-xl xl:flex">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          placeholder="Искать собак, людей, места"
          className="h-11 w-full rounded-full border border-app-border bg-app-surface pl-10 pr-4 text-sm font-medium outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <section className="rounded-3xl border border-app-border bg-app-surface p-4 shadow-[0_8px_30px_-12px_hsl(262_83%_15%/0.18)]">
        <header className="mb-3 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-extrabold">В тренде</h3>
        </header>
        <ul className="space-y-2.5">
          {trends.map((t) => (
            <li key={t.tag}>
              <button className="flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-left transition-colors hover:bg-app-surface-hover">
                <span className="text-sm font-bold text-primary">{t.tag}</span>
                <span className="text-[11px] font-medium text-muted-foreground">
                  {t.posts} постов
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-app-border bg-app-surface p-4 shadow-[0_8px_30px_-12px_hsl(262_83%_15%/0.18)]">
        <header className="mb-3 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-extrabold">Прогулки рядом</h3>
        </header>
        <ul className="space-y-3">
          {nearbyWalks.map((w) => (
            <li key={w.title} className="rounded-2xl bg-primary/5 p-3 ring-1 ring-primary/15">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">{w.title}</p>
                  <p className="truncate text-[11px] text-muted-foreground">{w.place}</p>
                </div>
                <span className="shrink-0 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                  {w.dist}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Users className="h-3 w-3" /> {w.going} участников
                </span>
                <button className="rounded-full border border-primary px-3 py-1 text-[11px] font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  Иду
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-app-border bg-app-surface p-4 shadow-[0_8px_30px_-12px_hsl(262_83%_15%/0.18)]">
        <header className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-extrabold">Кого добавить</h3>
          <button className="text-[11px] font-semibold text-primary hover:underline">
            Все
          </button>
        </header>
        <ul className="space-y-3">
          {suggested.map((s) => (
            <li key={s.handle} className="flex items-center gap-3">
              <img
                src={s.avatar}
                alt={s.name}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-app-border"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">{s.name}</p>
                <p className="truncate text-[11px] text-muted-foreground">{s.meta}</p>
              </div>
              <button className="rounded-full bg-foreground px-3 py-1.5 text-[11px] font-bold text-background hover:opacity-90">
                Подписаться
              </button>
            </li>
          ))}
        </ul>
      </section>

      <p className="px-2 text-[11px] leading-relaxed text-muted-foreground">
        © 2026 Dogza · О нас · Помощь · Конфиденциальность · Условия
      </p>
    </aside>
  );
};

export default RightRail;
