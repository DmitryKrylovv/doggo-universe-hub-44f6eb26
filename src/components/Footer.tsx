import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 tracking-tight">Dogza</h3>
            <p className="text-background/60 max-w-md text-sm leading-relaxed">
              Приложение-компаньон для собачников и их питомцев. Гуляйте вместе, 
              находите друзей и лучшие места для вас и вашей собаки.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Продукт</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/60 hover:text-background transition-colors text-sm">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-background/60 hover:text-background transition-colors text-sm">
                  Для бизнеса
                </Link>
              </li>
              <li>
                <a href="#features" className="text-background/60 hover:text-background transition-colors text-sm">
                  Функции
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Связаться</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@dogza.app" className="text-background/60 hover:text-background transition-colors text-sm">
                  hello@dogza.app
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-xs">
            © 2025 Dogza. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/40 text-xs hover:text-background/60 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-background/40 text-xs hover:text-background/60 transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
