import { NavLink, Link } from "react-router-dom";
import {
  Home,
  Compass,
  CalendarHeart,
  MessageCircle,
  User,
  Bell,
  Bookmark,
  Settings,
  Plus,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const mainItems = [
  { to: "/app/feed", label: "Лента", icon: Home, end: true },
  { to: "/app/explore", label: "Карта", icon: Compass },
  { to: "/app/walks", label: "Прогулки", icon: CalendarHeart },
  { to: "/app/messages", label: "Сообщения", icon: MessageCircle, badge: 3 },
  { to: "/app/notifications", label: "Уведомления", icon: Bell, badge: 12 },
  { to: "/app/saved", label: "Сохранённое", icon: Bookmark },
  { to: "/app/profile", label: "Профиль", icon: User },
];

const DesktopSidebar = () => {
  return (
    <aside className="sticky top-0 hidden h-screen w-[260px] shrink-0 flex-col border-r border-app-border bg-app-surface/60 px-4 py-6 backdrop-blur-xl lg:flex xl:w-[280px]">
      <Link to="/app/feed" className="mb-8 flex items-center gap-2.5 px-2">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground font-extrabold shadow-lg shadow-primary/30">
          D
        </div>
        <span className="text-xl font-extrabold tracking-tight">Dogza</span>
      </Link>

      <nav className="flex flex-1 flex-col gap-1">
        {mainItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              cn(
                "group relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition-all",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "text-foreground/80 hover:bg-app-surface-hover hover:text-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className="h-[20px] w-[20px] shrink-0"
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span
                    className={cn(
                      "grid h-5 min-w-[20px] place-items-center rounded-full px-1.5 text-[10px] font-bold",
                      isActive
                        ? "bg-primary-foreground text-primary"
                        : "bg-primary text-primary-foreground"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}

        <button className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:brightness-110 active:scale-[0.98]">
          <Plus className="h-4 w-4" strokeWidth={2.5} />
          Создать пост
        </button>
      </nav>

      <div className="mt-4 border-t border-app-border pt-4">
        <button className="mb-2 flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-semibold text-foreground/70 transition-colors hover:bg-app-surface-hover hover:text-foreground">
          <Settings className="h-[20px] w-[20px]" />
          Настройки
        </button>
        <div className="flex items-center gap-3 rounded-2xl bg-app-surface p-2 ring-1 ring-app-border">
          <img
            src="https://i.pravatar.cc/120?u=anya"
            alt="Аня"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold">Аня Соколова</p>
            <p className="truncate text-xs text-muted-foreground">@anya.husky</p>
          </div>
          <button
            aria-label="Выйти"
            className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-app-surface-hover hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
