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
  Gift,
  Globe,
  ArrowRight,
} from "lucide-react";

const Partners = () => {
  const benefits = [
    {
      icon: Users,
      title: "Доступ к аудитории",
      description:
        "50 000+ активных пользователей, заинтересованных в товарах и услугах для собак",
    },
    {
      icon: TrendingUp,
      title: "Рост продаж",
      description:
        "Размещайте офферы и специальные предложения для целевой аудитории",
    },
    {
      icon: BarChart3,
      title: "Прозрачная аналитика",
      description:
        "Отслеживайте эффективность кампаний, охваты, клики и конверсии",
    },
    {
      icon: Megaphone,
      title: "Кросс-промо",
      description:
        "Совместные маркетинговые активности и интеграции внутри приложения",
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
      <section className="pt-32 pb-20 px-4 bg-foreground text-background relative overflow-hidden">
        <FloatingEmojis count={15} className="opacity-20" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Handshake className="w-4 h-4" />
              Партнёрам
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Развивайтесь вместе с{" "}
              <span className="text-primary">Dogza</span>
            </h1>
            <p className="text-xl text-background/70 mb-8 max-w-2xl">
              Станьте партнёром платформы #1 для собачников. Рекламные
              интеграции, спонсорство и совместные проекты с вовлечённой
              аудиторией.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Стать партнёром
              </Button>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-background/10 border border-background/30 text-background hover:bg-background/20"
              >
                Скачать медиакит
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Активных пользователей" },
              { value: "85%", label: "Ежемесячная вовлечённость" },
              { value: "300K+", label: "Просмотров в месяц" },
              { value: "4.9 ⭐", label: "Рейтинг приложения" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Почему Dogza
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прямой доступ к платёжеспособной и вовлечённой аудитории
              собачников
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="text-center p-8 rounded-2xl bg-secondary/50 hover-lift"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <b.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{b.title}</h3>
                <p className="text-muted-foreground">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Форматы сотрудничества
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Гибкие решения для брендов любого масштаба
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formats.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-foreground text-background rounded-3xl p-10">
              <h3 className="text-2xl font-bold mb-4">
                Индивидуальные условия
              </h3>
              <p className="text-background/70 mb-8">
                Мы подбираем формат партнёрства под ваши цели и бюджет.
                Свяжитесь с нами для обсуждения деталей.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-background/10">
                  <span>Базовое размещение</span>
                  <span className="text-primary font-semibold">
                    от 15 000 ₽/мес
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-background/10">
                  <span>Спонсорство событий</span>
                  <span className="font-semibold">от 50 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-background/10">
                  <span>Стратегическое партнёрство</span>
                  <span className="font-semibold">Индивидуально</span>
                </div>
              </div>
              <Button size="lg" className="w-full text-lg py-6">
                Обсудить сотрудничество
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Кого мы ищем
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerTypes.map((item) => (
              <div
                key={item.title}
                className="bg-secondary/50 rounded-2xl p-6 text-center hover-lift cursor-pointer"
              >
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <span className="font-medium text-foreground">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Давайте расти вместе
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами и мы подберём идеальный формат сотрудничества для
            вашего бренда.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6"
          >
            Связаться с нами
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
