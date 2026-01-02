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
      <section className="pt-32 pb-20 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Store className="w-4 h-4" />
              Для бизнеса
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Привлекайте <span className="text-primary">собачников</span> в ваше заведение
            </h1>
            <p className="text-xl text-background/70 mb-8">
              Dogza Business помогает кафе, ресторанам, магазинам и сервисам находить 
              новых клиентов среди владельцев собак.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Стать партнёром
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-background/20 text-background hover:bg-background/10">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Преимущества для бизнеса
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Развивайте свой бизнес вместе с растущим сообществом Dogza
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="text-center p-8 rounded-2xl bg-secondary/50 hover-lift"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Что входит в Dogza Business
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Полный набор инструментов для привлечения и удержания клиентов
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-foreground text-background rounded-3xl p-10">
              <h3 className="text-2xl font-bold mb-6">Начните бесплатно</h3>
              <p className="text-background/70 mb-8">
                Зарегистрируйте своё заведение и получите доступ к базовым функциям бесплатно. 
                Премиум-функции доступны по подписке.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-background/10">
                  <span>Базовый профиль</span>
                  <span className="text-primary font-semibold">Бесплатно</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-background/10">
                  <span>Продвижение</span>
                  <span className="font-semibold">от 990 ₽/мес</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-background/10">
                  <span>Полный пакет</span>
                  <span className="font-semibold">от 2990 ₽/мес</span>
                </div>
              </div>
              
              <Button size="lg" className="w-full text-lg py-6">
                Зарегистрировать заведение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Business */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Для кого подходит
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                className="bg-secondary/50 rounded-2xl p-6 text-center hover-lift cursor-pointer"
              >
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <span className="font-medium text-foreground">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Присоединяйтесь к Dogza Business
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Тысячи собачников ищут места рядом с вами. Будьте там, где ваши клиенты.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Начать сейчас
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Business;
