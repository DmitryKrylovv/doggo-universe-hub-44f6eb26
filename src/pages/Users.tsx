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
} from "lucide-react";

const UsersPage = () => {
  const mainFeatures = [
    {
      icon: Route,
      title: "Совместные прогулки",
      description: "Находите компаньонов рядом, планируйте маршруты и гуляйте вместе.",
      emoji: "🐕‍🦺",
    },
    {
      icon: Calendar,
      title: "Мероприятия",
      description: "Выставки, тренировки, встречи пород, благотворительные забеги.",
      emoji: "🎉",
    },
    {
      icon: MapPin,
      title: "Карта мест",
      description: "Dog-friendly кафе, парки, ветклиники — с отзывами и рейтингами.",
      emoji: "📍",
    },
    {
      icon: MessageCircle,
      title: "ИИ-помощник",
      description: "Персональный ассистент по здоровью, питанию и уходу. 24/7.",
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
    { step: "01", title: "Скачайте", description: "Бесплатно в App Store и Google Play", emoji: "📱" },
    { step: "02", title: "Создайте профиль", description: "Добавьте себя и питомца", emoji: "🐶" },
    { step: "03", title: "Исследуйте", description: "Прогулки, места, мероприятия", emoji: "🗺️" },
    { step: "04", title: "Наслаждайтесь", description: "Больше времени с питомцем", emoji: "❤️" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-24 px-4 bg-foreground text-background relative overflow-hidden">
        <FloatingEmojis count={20} className="opacity-20" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Для пользователей
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              Всё для жизни с{" "}
              <span className="text-primary">вашей собакой</span>
            </h1>
            <p className="text-lg text-background/60 mb-10 max-w-2xl">
              Прогулки, мероприятия, лучшие места и умный помощник — Dogza
              делает каждый день с питомцем особенным.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base px-8 py-6">
                <Download className="mr-2 h-4 w-4" />
                App Store
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 border-background/20 text-background hover:bg-background/10">
                <Download className="mr-2 h-4 w-4" />
                Google Play
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
              { value: "50K+", label: "Пользователей" },
              { value: "200K+", label: "Прогулок" },
              { value: "1000+", label: "Мест на карте" },
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

      {/* Main Features */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Ключевые возможности
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Четыре мощных инструмента для счастливой жизни с собакой
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {mainFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-8 hover-lift relative overflow-hidden shadow-sm"
              >
                <div className="absolute top-4 right-4 text-3xl opacity-15 group-hover:opacity-30 transition-opacity">
                  {feature.emoji}
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Features */}
      <section className="py-24 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                И ещё больше возможностей
              </h2>
              <p className="text-muted-foreground mb-10">
                Dogza — это полноценный компаньон, который всегда под рукой
              </p>
              <div className="space-y-4">
                {extras.map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-foreground text-background rounded-3xl p-10">
              <h3 className="text-xl font-bold mb-4 tracking-tight">Dogza — бесплатно 🎉</h3>
              <p className="text-background/60 mb-8 text-sm leading-relaxed">
                Все основные функции доступны бесплатно. Никаких скрытых платежей.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Совместные прогулки",
                  "Карта dog-friendly мест",
                  "Мероприятия и события",
                  "ИИ-помощник",
                  "Профиль питомца",
                  "Уведомления",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3 py-2 border-b border-background/10">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{f}</span>
                    <span className="ml-auto text-primary font-semibold text-xs">Бесплатно</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="w-full text-base py-6">
                <Download className="mr-2 h-4 w-4" />
                Скачать Dogza
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Как начать
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="text-4xl mb-4">{s.emoji}</div>
                <div className="text-xs text-primary font-bold mb-2">Шаг {s.step}</div>
                <h3 className="text-base font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-xs">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Присоединяйтесь к Dogza
          </h2>
          <p className="text-primary-foreground/70 mb-10 max-w-md mx-auto">
            50 000+ собачников уже используют Dogza. Скачайте бесплатно.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="secondary" className="text-base px-8 py-6">
              <Download className="mr-2 h-4 w-4" />
              App Store
            </Button>
            <Button size="lg" variant="secondary" className="text-base px-8 py-6">
              <Download className="mr-2 h-4 w-4" />
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
