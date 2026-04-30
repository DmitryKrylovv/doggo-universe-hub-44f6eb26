import { Bell, Search } from "lucide-react";
import { Link } from "react-router-dom";

const AppTopBar = () => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 px-4 py-3 backdrop-blur-xl bg-app-bg/70 border-b border-app-border">
      <Link to="/app/feed" className="flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-2xl bg-primary text-primary-foreground font-extrabold shadow-lg shadow-primary/30">
          D
        </div>
        <span className="text-lg font-extrabold tracking-tight">Dogza</span>
      </Link>

      <div className="flex items-center gap-2">
        <button
          aria-label="Поиск"
          className="grid h-10 w-10 place-items-center rounded-full bg-app-surface border border-app-border hover:bg-app-surface-hover transition-colors"
        >
          <Search className="h-[18px] w-[18px]" />
        </button>
        <button
          aria-label="Уведомления"
          className="relative grid h-10 w-10 place-items-center rounded-full bg-app-surface border border-app-border hover:bg-app-surface-hover transition-colors"
        >
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary ring-2 ring-app-bg" />
        </button>
      </div>
    </header>
  );
};

export default AppTopBar;
