import { useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://forms.yandex.ru/_static/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь со мной удобным способом</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Записаться на сессию</h3>
                <div className="w-full max-w-[650px]">
                  <iframe 
                    src="https://forms.yandex.ru/u/692da2df1f1eb57fc3ef1a7a?iframe=1" 
                    frameBorder="0" 
                    name="ya-form-692da2df1f1eb57fc3ef1a7a" 
                    width="100%"
                    height="600"
                    className="border-0"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Прямая связь</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+79857554311"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Телефон</div>
                      <div className="text-lg font-semibold text-gray-900">+7 985 755 43 11</div>
                    </div>
                  </a>

                  <a
                    href="https://t.me/VyacheslavMaks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Send" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Telegram</div>
                      <div className="text-lg font-semibold text-gray-900">@VyacheslavMaks</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/79857554311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" size={24} className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">WhatsApp</div>
                      <div className="text-lg font-semibold text-gray-900">+7 985 755 43 11</div>
                    </div>
                  </a>

                  <a
                    href="https://t.me/Maksimov1987"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Radio" size={24} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Telegram канал</div>
                      <div className="text-lg font-semibold text-gray-900">@Maksimov1987</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-accent/5 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Бесплатный созвон</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Не уверены, подойдёт ли вам формат? Запишитесь на бесплатный 15-минутный созвон, где мы обсудим ваш
                  запрос и я расскажу, как могу помочь.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;