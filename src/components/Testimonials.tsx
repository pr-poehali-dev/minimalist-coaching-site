import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    name: 'Елена Петрова',
    role: 'Предприниматель',
    text: 'Вячеслав помог мне увидеть мой бизнес под совершенно новым углом. После сессии с LEGO я поняла, какие стратегические изменения нужно внести. Результаты превзошли ожидания — за 3 месяца выручка выросла на 40%.',
    rating: 5,
  },
  {
    name: 'Дмитрий Соколов',
    role: 'IT-директор',
    text: 'Работа с песочным моделированием была откровением. Я наконец-то разобрался со своими внутренними блоками, которые мешали мне в карьере и отношениях. Вячеслав — профессионал высочайшего уровня, создает атмосферу полного доверия.',
    rating: 5,
  },
  {
    name: 'Анна Волкова',
    role: 'HR-директор',
    text: 'Корпоративная сессия LEGO Serious Play для нашей команды стала прорывом. Вячеслав мастерски провел нас через процесс, и мы нашли решения для проблем, которые не могли решить месяцами. Атмосфера в команде изменилась к лучшему.',
    rating: 5,
  },
  {
    name: 'Михаил Кузнецов',
    role: 'Владелец ресторана',
    text: 'Сопровождение в течение месяца дало мне не только конкретный план действий, но и постоянную поддержку в его реализации. Вячеслав помог мне увидеть и проработать паттерны, которые тормозили развитие бизнеса. Это было очень ценно.',
    rating: 5,
  },
  {
    name: 'Ольга Смирнова',
    role: 'Психолог',
    text: 'Разовая сессия с Вячеславом помогла мне распутать сложную ситуацию в личной жизни. Его подход — это идеальное сочетание мягкости и честности. Я получила ясность и смогла сделать шаг, который откладывала годами. Благодарю!',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Отзывы</h2>
          <p className="text-xl text-gray-600">Что говорят мои клиенты</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in">
            <div className="absolute top-8 left-8 text-6xl text-accent/20">"</div>
            <div className="relative z-10 space-y-6">
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={24} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-gray-700 leading-relaxed text-center italic">
                {testimonials[currentIndex].text}
              </p>
              <div className="text-center pt-6 border-t border-gray-200">
                <div className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-gray-600">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button onClick={prevTestimonial} variant="outline" size="icon" className="rounded-full">
              <Icon name="ChevronLeft" size={24} />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-accent w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <Button onClick={nextTestimonial} variant="outline" size="icon" className="rounded-full">
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
