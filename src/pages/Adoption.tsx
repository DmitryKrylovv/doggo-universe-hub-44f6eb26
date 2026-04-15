import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, Camera, MessageCircle, CheckCircle2, Share2, BarChart3 } from "lucide-react";

const Adoption = () => {
  const benefits = [
    {
      icon: Users,
      title: "Широкая аудитория",
      description: "Тысячи потенциальных хозяев, которые ищут питомца для своей семьи",
    },
    {
      icon: Camera,
      title: "Фото и видео профили",
      description: "Покажите характер каждого питомца через красивые галереи",
    },
    {
      icon: MessageCircle,
      title: "Прямая связь",
      description: "Общайтесь с заинтересованными напрямую через приложение",
    },
  ];

  const features = [
    "Создание профилей для животных",
    "Фото и видео галереи",
    "История и описание характера",
    "Информация о здоровье и прививках",
    "Прямые сообщения от потенциальных хозяев",
    "Отслеживание заявок на усыновление",
    "Статистика просмотров профилей",
    "Интеграция с соцсетями",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 pb-24 px-4 bg-foreground text-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/4 translate-y-1/3" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-8">
              <Heart className="w-3.5 h-3.5" />
              Для приютов
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              Помогите питомцам найти <span className="text-primary">свой дом</span>
            </h1>
            <p className="text-lg text-background/60 mb-10 max-w-2xl">
              Dogza Adoption — платформа для приютов и волонтёров, которая помогает 
              находить любящие семьи для животных.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base px-8 py-6">
                Присоединиться бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 border-background/20 text-background hover:bg-background/10">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Питомцев пристроено" },
              { value: "50+", label: "Приютов-партнёров" },
              { value: "10K+", label: "Просмотров в месяц" },
              { value: "100%", label: "Бесплатно" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Почему Dogza Adoption
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Мы помогаем приютам эффективнее находить дом для питомцев
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
                Возможности платформы
              </h2>
              <p className="text-muted-foreground mb-10">
                Всё необходимое для успешного пристройства животных
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
              <div className="flex items-center gap-2 mb-6">
                <Heart className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold tracking-tight">Бесплатно навсегда</h3>
              </div>
              <p className="text-background/60 mb-8 text-sm leading-relaxed">
                Dogza Adoption полностью бесплатен для приютов и волонтёрских организаций. 
                Наша миссия — помочь каждому животному найти дом.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 py-3 border-b border-background/10">
                  <Share2 className="w-4 h-4 text-primary" />
                  <span className="text-sm">Публикация профилей в соцсетях</span>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-background/10">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Неограниченные сообщения</span>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-background/10">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm">Подробная аналитика</span>
                </div>
              </div>
              
              <Button size="lg" className="w-full text-base py-6">
                Зарегистрировать приют
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
              Как это работает
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Регистрация", desc: "Создайте аккаунт приюта за 5 минут" },
              { step: "02", title: "Добавьте питомцев", desc: "Загрузите фото и опишите каждого" },
              { step: "03", title: "Найдите семью", desc: "Получайте заявки и общайтесь" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Начните помогать сегодня
          </h2>
          <p className="text-primary-foreground/70 mb-10 max-w-md mx-auto">
            Присоединяйтесь к сообществу приютов, которые уже используют Dogza Adoption
          </p>
          <Button size="lg" variant="secondary" className="text-base px-8 py-6">
            Зарегистрироваться бесплатно
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Adoption;
