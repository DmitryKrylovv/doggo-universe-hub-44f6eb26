import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { Users, MapPin, Calendar, MessageCircle, Download, ArrowRight } from "lucide-react";
import dogHero from "@/assets/dog-hero.png";
import appMockup from "@/assets/app-mockup.png";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Совместные прогулки",
      description: "Находите компаньонов для прогулок рядом с вами. Социализация для вашего питомца и новые знакомства для вас.",
    },
    {
      icon: Calendar,
      title: "Мероприятия",
      description: "Участвуйте в событиях для собачников: выставки, тренировки, встречи пород и многое другое.",
    },
    {
      icon: MapPin,
      title: "Места для собачников",
      description: "Карта с dog-friendly местами: парки, кафе, ветклиники, зоомагазины с отзывами.",
    },
    {
      icon: MessageCircle,
      title: "ИИ-помощник",
      description: "Задавайте любые вопросы о собаках нашему умному ассистенту — он всегда на связи.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                Лучший друг для <span className="text-primary">вашего друга</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Dogza — приложение, которое делает жизнь с собакой ещё интереснее. 
                Прогулки, друзья, места и умный помощник в одном месте.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Download className="mr-2 h-5 w-5" />
                  Скачать бесплатно
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Узнать больше
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute -z-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img 
                src={appMockup} 
                alt="Dogza App" 
                className="w-72 md:w-80 animate-float drop-shadow-2xl"
              />
              <img 
                src={dogHero} 
                alt="Happy Dog" 
                className="absolute -bottom-10 -left-10 w-40 md:w-48 animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Всё для вас и вашей собаки
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Функции, которые превращают каждый день с питомцем в приключение
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-foreground text-background rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <MessageCircle className="w-4 h-4" />
                  ИИ-помощник
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Спросите что угодно о собаках
                </h2>
                <p className="text-background/70 text-lg mb-8">
                  Наш ИИ-агент знает всё о здоровье, питании, поведении и уходе за собаками. 
                  Получайте персональные рекомендации 24/7.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Чем кормить щенка?", "Как отучить лаять?", "Симптомы болезни"].map((q) => (
                    <span key={q} className="bg-background/10 px-4 py-2 rounded-full text-sm">
                      {q}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-background/10">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Dogza ИИ</p>
                    <p className="text-xs text-background/50">Всегда онлайн</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-background/10 rounded-lg p-3 text-sm max-w-[80%]">
                    Моя собака не хочет есть сухой корм. Что делать?
                  </div>
                  <div className="bg-primary rounded-lg p-3 text-sm ml-auto max-w-[80%]">
                    Это частая проблема! Попробуйте размочить корм тёплой водой или добавить немного влажного корма...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Скачайте Dogza бесплатно и присоединяйтесь к сообществу счастливых собачников
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              App Store
            </Button>
            <Button size="lg" className="text-lg px-8 py-6">
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

export default Index;
