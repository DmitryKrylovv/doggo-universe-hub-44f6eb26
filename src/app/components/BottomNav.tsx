import { NavLink } from "react-router-dom";
import { Home, Compass, CalendarHeart, MessageCircle, User, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/app/feed", label: "Лента", icon: Home },
  { to: "/app/explore", label: "Карта", icon: Compass },
  { to: "/app/walks", label: "Прогулки", icon: CalendarHeart },
  { to: "/app/messages", label: "Чаты", icon: MessageCircle },
  { to: "/app/profile", label: "Профиль", icon: User },
];

const BottomNav = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-3">
      <nav
        className="relative flex w-full max-w-[460px] items-center justify-between gap-1 rounded-3xl border border-app-border bg-app-surface/90 px-2 py-2 backdrop-blur-2xl shadow-[0_20px_60px_-20px_hsl(262_83%_25%/0.45)]"
      >
        {items.slice(0, 2).map((item) => (
          <NavItem key={item.to} {...item} />
        ))}

        {/* Floating compose button */}
        <button
          aria-label="Создать пост"
          className="relative -mt-8 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/40 ring-4 ring-app-bg transition-transform hover:scale-105 active:scale-95"
        >
          <Plus className="h-6 w-6" strokeWidth={2.5} />
        </button>

        {items.slice(2).map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>
    </div>
  );
};

const NavItem = ({
  to,
  label,
  icon: Icon,
}: {
  to: string;
  label: string;
  icon: typeof Home;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "group flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-2 py-1.5 transition-colors",
        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
      )
    }
  >
    {({ isActive }) => (
      <>
        <span
          className={cn(
            "grid h-8 w-8 place-items-center rounded-xl transition-colors",
            isActive && "bg-primary/15"
          )}
        >
          <Icon className="h-[18px] w-[18px]" strokeWidth={isActive ? 2.5 : 2} />
        </span>
        <span className={cn("text-[10px] font-semibold tracking-tight", !isActive && "opacity-80")}>
          {label}
        </span>
      </>
    )}
  </NavLink>
);

export default BottomNav;
