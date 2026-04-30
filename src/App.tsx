import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Business from "./pages/Business";
import Adoption from "./pages/Adoption";
import UsersPage from "./pages/Users";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";
import AppLayout from "./app/components/AppLayout";
import Feed from "./app/pages/Feed";
import Placeholder from "./app/pages/Placeholder";
import Profile from "./app/pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/business" element={<Business />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/partners" element={<Partners />} />

          {/* Mobile app */}
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Feed />} />
            <Route path="feed" element={<Feed />} />
            <Route path="explore" element={<Placeholder title="Карта" hint="Догфрендли места, парки и встречи рядом." />} />
            <Route path="walks" element={<Placeholder title="Прогулки" hint="Создавайте и присоединяйтесь к встречам." />} />
            <Route path="messages" element={<Placeholder title="Сообщения" hint="Личные чаты и сообщества по породам." />} />
            <Route path="notifications" element={<Placeholder title="Уведомления" hint="Лайки, комментарии и приглашения." />} />
            <Route path="saved" element={<Placeholder title="Сохранённое" hint="Посты и места, которые вы сохранили." />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
