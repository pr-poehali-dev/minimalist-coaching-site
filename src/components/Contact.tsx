import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    sessionType: 'session',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Я свяжусь с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', message: '', sessionType: 'session' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <select
                      name="sessionType"
                      value={formData.sessionType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="session">Разовая сессия</option>
                      <option value="business">Бизнес-коучинг</option>
                      <option value="month">Сопровождение 1 месяц</option>
                      <option value="lego-individual">LEGO (индивидуально)</option>
                      <option value="lego-group">LEGO (групповое)</option>
                      <option value="sand-individual">Песочное (индивидуально)</option>
                      <option value="sand-group">Песочное (группа)</option>
                      <option value="corporate">Корпоративная сессия</option>
                      <option value="free-call">Бесплатный 15-минутный созвон</option>
                    </select>
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Расскажите о вашем запросе"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent-dark text-lg py-6">
                    Отправить заявку
                  </Button>
                </form>
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
