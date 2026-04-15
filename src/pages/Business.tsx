import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Store, Users, Star, TrendingUp, CheckCircle2 } from "lucide-react";

const Business = () => {
  const benefits = [
    {
      icon: Users,
      title: "Привлечение клиентов",
      description: "Доступ к активному сообществу собачников, которые ищут места для посещения",
    },
    {
      icon: Star,
      title: "Отзывы и рейтинг",
      description: "Получайте отзывы от реальных посетителей и повышайте свой рейтинг",
    },
    {
      icon: TrendingUp,
      title: "Аналитика",
      description: "Детальная статистика посещений, просмотров и взаимодействий с вашим профилем",
    },
  ];

  const features = [
    "Размещение в каталоге dog-friendly мест",
    "Профиль заведения с фото и описанием",
    "Возможность публикации мероприятий",
    "Специальные предложения для пользователей",
    "Отзывы и рейтинговая система",
    "Продвижение в приложении",
    "Прямые сообщения от клиентов",
    "Статистика и аналитика",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 pb-24 px-4 bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-8">
              <Store className="w-3.5 h-3.5" />
              Для бизнеса
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              Привлекайте <span className="text-primary">собачников</span> в ваше заведение
            </h1>
            <p className="text-lg text-background/60 mb-10 max-w-2xl">
              Dogza Business помогает кафе, ресторанам, магазинам и сервисам находить 
              новых клиентов среди владельцев собак.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base px-8 py-6">
                Стать партнёром
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 border-background/20 text-background hover:bg-background/10">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Преимущества для бизнеса
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Развивайте свой бизнес вместе с растущим сообществом Dogza
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="text-center p-8 rounded-2xl bg-card shadow-sm hover-lift"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-24 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Что входит в Dogza Business
              </h2>
              <p className="text-muted-foreground mb-10">
                Полный набор инструментов для привлечения и удержания клиентов
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-foreground text-background rounded-3xl p-10">
              <h3 className="text-xl font-bold mb-6 tracking-tight">Начните бесплатно</h3>
              <p className="text-background/60 mb-8 text-sm leading-relaxed">
                Зарегистрируйте своё заведение и получите доступ к базовым функциям бесплатно. 
                Премиум-функции доступны по подписке.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-background/10">
                  <span className="text-sm">Базовый профиль</span>
                  <span className="text-primary font-semibold text-sm">Бесплатно</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-background/10">
                  <span className="text-sm">Продвижение</span>
                  <span className="font-semibold text-sm">от 990 ₽/мес</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-background/10">
                  <span className="text-sm">Полный пакет</span>
                  <span className="font-semibold text-sm">от 2990 ₽/мес</span>
                </div>
              </div>
              
              <Button size="lg" className="w-full text-base py-6">
                Зарегистрировать заведение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Business */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Для кого подходит
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Кафе и рестораны", emoji: "☕" },
              { title: "Зоомагазины", emoji: "🛒" },
              { title: "Ветклиники", emoji: "🏥" },
              { title: "Груминг-салоны", emoji: "✂️" },
              { title: "Отели", emoji: "🏨" },
              { title: "Парки", emoji: "🌳" },
              { title: "Кинологи", emoji: "🎓" },
              { title: "Фотографы", emoji: "📸" },
            ].map((item) => (
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

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Присоединяйтесь к Dogza Business
          </h2>
          <p className="text-primary-foreground/70 mb-10 max-w-md mx-auto">
            Тысячи собачников ищут места рядом с вами. Будьте там, где ваши клиенты.
          </p>
          <Button size="lg" variant="secondary" className="text-base px-8 py-6">
            Начать сейчас
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Business;
