import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingEmojis from "@/components/FloatingEmojis";
import {
  Users,
  MapPin,
  Calendar,
  MessageCircle,
  Download,
  Heart,
  Shield,
  Bell,
  Camera,
  Route,
  Star,
  CheckCircle2,
  Sparkles,
  Dog,
} from "lucide-react";

const UsersPage = () => {
  const mainFeatures = [
    {
      icon: Route,
      title: "Совместные прогулки",
      description:
        "Находите компаньонов рядом, планируйте маршруты и гуляйте вместе. Социализация для собаки и новые друзья для вас.",
      emoji: "🐕‍🦺",
    },
    {
      icon: Calendar,
      title: "Мероприятия",
      description:
        "Выставки, тренировки, встречи пород, благотворительные забеги — всё в одном месте с удобной записью.",
      emoji: "🎉",
    },
    {
      icon: MapPin,
      title: "Карта мест",
      description:
        "Dog-friendly кафе, парки, ветклиники, зоомагазины — с отзывами, фото и рейтингами от сообщества.",
      emoji: "📍",
    },
    {
      icon: MessageCircle,
      title: "ИИ-помощник",
      description:
        "Персональный ассистент по вопросам здоровья, питания, поведения и ухода за собакой. 24/7, без ожидания.",
      emoji: "🤖",
    },
  ];

  const extras = [
    { icon: Camera, text: "Профиль питомца с фото и документами" },
    { icon: Bell, text: "Уведомления о мероприятиях рядом" },
    { icon: Shield, text: "Ветеринарный дневник и напоминания" },
    { icon: Heart, text: "Избранные места и маршруты" },
    { icon: Star, text: "Рейтинг и отзывы на заведения" },
    { icon: Users, text: "Сообщество единомышленников" },
  ];

  const steps = [
    {
      step: "01",
      title: "Скачайте приложение",
      description: "Бесплатно в App Store и Google Play",
      emoji: "📱",
    },
    {
      step: "02",
      title: "Создайте профиль",
      description: "Добавьте себя и своего питомца",
      emoji: "🐶",
    },
    {
      step: "03",
      title: "Исследуйте",
      description: "Находите прогулки, места и мероприятия",
      emoji: "🗺️",
    },
    {
      step: "04",
      title: "Наслаждайтесь",
      description: "Проводите больше времени с питомцем",
      emoji: "❤️",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-foreground text-background relative overflow-hidden">
        <FloatingEmojis count={20} className="opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Для пользователей
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Всё для жизни с{" "}
              <span className="text-primary">вашей собакой</span>
            </h1>
            <p className="text-xl text-background/70 mb-8 max-w-2xl">
              Прогулки, мероприятия, лучшие места и умный помощник — Dogza
              делает каждый день с питомцем особенным.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Download className="mr-2 h-5 w-5" />
                App Store
              </Button>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-background/10 border border-background/30 text-background hover:bg-background/20"
              >
                <Download className="mr-2 h-5 w-5" />
                Google Play
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
              { value: "50K+", label: "Пользователей" },
              { value: "200K+", label: "Прогулок" },
              { value: "1000+", label: "Мест на карте" },
              { value: "4.9 ⭐", label: "Рейтинг" },
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

      {/* Main Features */}
      <section className="py-20 px-4 relative overflow-hidden">
        <FloatingEmojis count={10} />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ключевые возможности
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Четыре мощных инструмента для счастливой жизни с собакой
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group bg-card border border-border rounded-2xl p-8 hover-lift relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {feature.emoji}
                </div>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Features */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                И ещё больше возможностей
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Dogza — это полноценный компаньон, который всегда под рукой
              </p>
              <div className="space-y-5">
                {extras.map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-foreground text-background rounded-3xl p-10">
              <h3 className="text-2xl font-bold mb-4">
                Dogza — бесплатно 🎉
              </h3>
              <p className="text-background/70 mb-8">
                Все основные функции доступны бесплатно. Никаких скрытых
                платежей.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Совместные прогулки",
                  "Карта dog-friendly мест",
                  "Мероприятия и события",
                  "ИИ-помощник",
                  "Профиль питомца",
                  "Уведомления",
                ].map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 py-2 border-b border-background/10"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{f}</span>
                    <span className="ml-auto text-primary font-semibold text-sm">
                      Бесплатно
                    </span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="w-full text-lg py-6">
                <Download className="mr-2 h-5 w-5" />
                Скачать Dogza
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Как начать
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="text-5xl mb-4">{s.emoji}</div>
                <div className="text-sm text-primary font-bold mb-2">
                  Шаг {s.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Присоединяйтесь к Dogza
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            50 000+ собачников уже используют Dogza. Скачайте бесплатно и
            начните прямо сейчас.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              <Download className="mr-2 h-5 w-5" />
              App Store
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              <Download className="mr-2 h-5 w-5" />
              Google Play
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UsersPage;
