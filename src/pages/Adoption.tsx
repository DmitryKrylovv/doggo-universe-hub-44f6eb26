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
      <section className="pt-32 pb-20 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Для приютов
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Помогите питомцам найти <span className="text-primary">свой дом</span>
            </h1>
            <p className="text-xl text-background/70 mb-8">
              Dogza Adoption — платформа для приютов и волонтёров, которая помогает 
              находить любящие семьи для животных.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
                Присоединиться бесплатно
              </Button>
              <Button size="lg" className="text-lg px-8 py-6 bg-white/10 border border-white/30 text-white hover:bg-white/20">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground mt-2">Питомцев пристроено</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary">50+</p>
              <p className="text-muted-foreground mt-2">Приютов-партнёров</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary">10K+</p>
              <p className="text-muted-foreground mt-2">Просмотров в месяц</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary">100%</p>
              <p className="text-muted-foreground mt-2">Бесплатно для приютов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Почему Dogza Adoption
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы помогаем приютам эффективнее находить дом для питомцев
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
                Возможности платформы
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Всё необходимое для успешного пристройства животных
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
              <div className="flex items-center gap-2 mb-6">
                <Heart className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Бесплатно навсегда</h3>
              </div>
              <p className="text-background/70 mb-8">
                Dogza Adoption полностью бесплатен для приютов и волонтёрских организаций. 
                Наша миссия — помочь каждому животному найти дом.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 py-3 border-b border-background/10">
                  <Share2 className="w-5 h-5 text-primary" />
                  <span>Публикация профилей в соцсетях</span>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-background/10">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Неограниченные сообщения</span>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-background/10">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Подробная аналитика</span>
                </div>
              </div>
              
              <Button size="lg" className="w-full text-lg py-6">
                Зарегистрировать приют
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
              Как это работает
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Регистрация", desc: "Создайте аккаунт приюта за 5 минут" },
              { step: "02", title: "Добавьте питомцев", desc: "Загрузите фото и опишите каждого" },
              { step: "03", title: "Найдите семью", desc: "Получайте заявки и общайтесь с хозяевами" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Начните помогать сегодня
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Присоединяйтесь к сообществу приютов, которые уже используют Dogza Adoption
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Зарегистрироваться бесплатно
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Adoption;