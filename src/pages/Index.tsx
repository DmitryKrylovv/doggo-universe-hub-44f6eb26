import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import FloatingEmojis from "@/components/FloatingEmojis";
import { Users, MapPin, Calendar, MessageCircle, Download, ArrowRight, Sparkles } from "lucide-react";

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
      <section className="pt-44 pb-32 px-4 relative overflow-hidden">
        <FloatingEmojis count={25} />
        {/* Soft gradient blob */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-up max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/8 text-primary px-4 py-2 rounded-full text-xs font-semibold mb-8 border border-primary/15">
              <Sparkles className="w-3.5 h-3.5" />
              Приложение #1 для собачников
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] mb-8 tracking-tight">
              Лучший друг для{" "}
              <span className="gradient-text">вашего друга</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
              Dogza — приложение, которое делает жизнь с собакой ещё интереснее. 
              Прогулки, друзья, места и умный помощник.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="text-base px-8 py-6">
                <Download className="mr-2 h-4 w-4" />
                Скачать бесплатно
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6">
                Узнать больше
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="mt-20 flex items-center justify-center gap-10 text-muted-foreground">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">50K+</p>
                <p className="text-xs mt-1">Пользователей</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">4.9</p>
                <p className="text-xs mt-1">Рейтинг</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">1000+</p>
                <p className="text-xs mt-1">Мест на карте</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Всё для вас и вашей собаки
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Функции, которые превращают каждый день с питомцем в приключение
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
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
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="bg-foreground text-background rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold mb-6">
                  <MessageCircle className="w-3.5 h-3.5" />
                  ИИ-помощник
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  Спросите что угодно о собаках
                </h2>
                <p className="text-background/60 text-base mb-8 leading-relaxed">
                  Наш ИИ-агент знает всё о здоровье, питании, поведении и уходе за собаками. 
                  Получайте персональные рекомендации 24/7.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Чем кормить щенка?", "Как отучить лаять?", "Симптомы болезни"].map((q) => (
                    <span key={q} className="bg-background/10 px-3 py-1.5 rounded-full text-xs font-medium">
                      {q}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/10">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-background/10">
                  <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Dogza ИИ</p>
                    <p className="text-xs text-background/40">Всегда онлайн</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-background/10 rounded-xl p-3 text-sm max-w-[80%]">
                    Моя собака не хочет есть сухой корм. Что делать?
                  </div>
                  <div className="bg-primary rounded-xl p-3 text-sm ml-auto max-w-[80%]">
                    Это частая проблема! Попробуйте размочить корм тёплой водой или добавить немного влажного корма...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Готовы начать?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Скачайте Dogza бесплатно и присоединяйтесь к сообществу счастливых собачников
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="text-base px-8 py-6">
              <Download className="mr-2 h-4 w-4" />
              App Store
            </Button>
            <Button size="lg" className="text-base px-8 py-6">
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

export default Index;
