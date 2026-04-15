import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingEmojis from "@/components/FloatingEmojis";
import {
  Handshake,
  TrendingUp,
  Users,
  Megaphone,
  CheckCircle2,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const Partners = () => {
  const benefits = [
    {
      icon: Users,
      title: "Доступ к аудитории",
      description: "50 000+ активных пользователей, заинтересованных в товарах для собак",
    },
    {
      icon: TrendingUp,
      title: "Рост продаж",
      description: "Размещайте офферы и спецпредложения для целевой аудитории",
    },
    {
      icon: BarChart3,
      title: "Прозрачная аналитика",
      description: "Отслеживайте эффективность кампаний, охваты и конверсии",
    },
    {
      icon: Megaphone,
      title: "Кросс-промо",
      description: "Совместные маркетинговые активности и интеграции в приложении",
    },
  ];

  const partnerTypes = [
    { title: "Бренды кормов", emoji: "🍖" },
    { title: "Зоомагазины", emoji: "🛍️" },
    { title: "Производители аксессуаров", emoji: "🦮" },
    { title: "Ветеринарные сети", emoji: "💊" },
    { title: "Страховые компании", emoji: "🛡️" },
    { title: "Медиа и блогеры", emoji: "📱" },
    { title: "Сервисы для животных", emoji: "✂️" },
    { title: "Благотворительные фонды", emoji: "❤️" },
  ];

  const formats = [
    "Баннерная реклама в приложении",
    "Спонсорство мероприятий",
    "Интеграция в ИИ-рекомендации",
    "Брендированные маршруты прогулок",
    "Спецпредложения для пользователей",
    "Коллаборации с сообществом",
    "Нативные публикации",
    "Размещение в каталоге мест",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-24 px-4 bg-foreground text-background relative overflow-hidden">
        <FloatingEmojis count={15} className="opacity-15" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-8">
              <Handshake className="w-3.5 h-3.5" />
              Партнёрам
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              Развивайтесь вместе с{" "}
              <span className="text-primary">Dogza</span>
            </h1>
            <p className="text-lg text-background/60 mb-10 max-w-2xl">
              Станьте партнёром платформы #1 для собачников. Рекламные
              интеграции, спонсорство и совместные проекты.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base px-8 py-6">
                Стать партнёром
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 border-background/20 text-background hover:bg-background/10">
                Скачать медиакит
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Активных пользователей" },
              { value: "85%", label: "Вовлечённость" },
              { value: "300K+", label: "Просмотров/мес" },
              { value: "4.9 ⭐", label: "Рейтинг" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Почему Dogza
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Прямой доступ к вовлечённой аудитории собачников
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="text-center p-8 rounded-2xl bg-card shadow-sm hover-lift"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-24 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Форматы сотрудничества
              </h2>
              <p className="text-muted-foreground mb-10">
                Гибкие решения для брендов любого масштаба
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formats.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-foreground text-background rounded-3xl p-10">
              <h3 className="text-xl font-bold mb-4 tracking-tight">Индивидуальные условия</h3>
              <p className="text-background/60 mb-8 text-sm leading-relaxed">
                Мы подбираем формат партнёрства под ваши цели и бюджет.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-background/10">
                  <span className="text-sm">Базовое размещение</span>
                  <span className="text-primary font-semibold text-sm">от 15 000 ₽/мес</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-background/10">
                  <span className="text-sm">Спонсорство событий</span>
                  <span className="font-semibold text-sm">от 50 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-background/10">
                  <span className="text-sm">Стратегическое партнёрство</span>
                  <span className="font-semibold text-sm">Индивидуально</span>
                </div>
              </div>
              <Button size="lg" className="w-full text-base py-6">
                Обсудить сотрудничество
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Кого мы ищем
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partnerTypes.map((item) => (
              <div
                key={item.title}
                className="bg-card shadow-sm rounded-2xl p-6 text-center hover-lift cursor-pointer"
              >
                <span className="text-3xl mb-3 block">{item.emoji}</span>
                <span className="font-medium text-foreground text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Давайте расти вместе
          </h2>
          <p className="text-primary-foreground/70 mb-10 max-w-md mx-auto">
            Свяжитесь с нами и мы подберём идеальный формат сотрудничества.
          </p>
          <Button size="lg" variant="secondary" className="text-base px-8 py-6">
            Связаться с нами
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
