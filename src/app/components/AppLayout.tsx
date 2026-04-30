import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import AppTopBar from "./AppTopBar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-app-bg text-foreground">
      {/* Ambient premium purple glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Mobile-first canvas centered like a phone on desktop */}
      <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col">
        <AppTopBar />
        <main className="flex-1 pb-28 pt-2">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  );
};

export default AppLayout;
