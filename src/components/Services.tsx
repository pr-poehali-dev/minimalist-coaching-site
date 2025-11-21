import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const services = [
  {
    title: 'Разовая сессия',
    image: 'https://cdn.poehali.dev/projects/aaa9eff3-a244-46de-b30e-1d43bbd831d1/files/871822f4-db8e-426e-9685-2930563a81e0.jpg',
    description:
      'Индивидуальная консультация для решения актуальных задач. Если вы чувствуете в глубине души, что хотите изменить что-то в отношениях с близкими, найти энергию, навести порядок в мыслях, прийти в гармонию с собой, — эта сессия для вас.',
    details:
      'В спокойной и поддерживающей атмосфере мы вместе исследуем ваши внутренние переживания, откроем новые горизонты понимания и найдем именно те решения, которые идут от вас. Я сопровождаю вас на пути к глубокой осознанности, уважению своих чувств и настоящему внутреннему равновесию.',
    format: 'онлайн или офлайн в Москве',
    prices: [
      { duration: '1 час', price: '5 000 ₽' },
      { duration: '3 часа (глубокая сессия)', price: '15 000 ₽' },
    ],
  },
  {
    title: 'Бизнес-коучинг (сессия)',
    image: 'https://cdn.poehali.dev/files/af7550a1-310c-4671-a83b-cb6aedc073ed.jpg',
    description:
      'Ваш путь к ясности и результату. Помогаю предпринимателям, руководителям и специалистам увидеть ситуацию под новым углом, определить реальные цели и выстроить план действий.',
    details:
      'Работая в коучинговом формате, я не даю советов — я помогаю вам услышать себя, найти ответы внутри и перейти от размышлений к конкретным шагам. По вашему усмотрению могу поделиться своим видением ситуации или решения, имея длительный опыт в предпринимательстве.',
    format: 'онлайн или офлайн в Москве',
    prices: [{ duration: '1 час', price: '5 000 ₽' }],
  },
  {
    title: 'Сопровождение 1 месяц + трекинг',
    image: 'https://cdn.poehali.dev/files/dec74e57-577c-4620-ab47-77fcc1b3938b.jpg',
    description:
      '4 глубокие сессии 1 раз в неделю, трекинг движения к достижению цели. Мотивация и поддержка, разборы полученных результатов, корректировка пути к цели.',
    details:
      'Здесь вскрываются не рабочие стратегии, иллюзии и паттерны, в которые человек проваливается не замечая. Помогаю увидеть всё что мешает прийти к желаемому. Задача — выйти из старой системы своих действий для перестроения и получения новых результатов.',
    format: 'онлайн или офлайн в Москве',
    prices: [{ duration: '1 месяц', price: '69 000 ₽' }],
  },
  {
    title: '(Индивидуальное) LEGO моделирование',
    image: 'https://cdn.poehali.dev/files/c669462d-7ba1-48b0-ba5f-a6489b302c82.jpg',
    description:
      'Личное путешествие к решениям и осознаниям. В этой сессии вы исследуете свои вопросы и задачи через творческую работу с LEGO под внимательным сопровождением коуча.',
    details:
      'Используя строительные блоки как язык образов, вы сможете выразить чувства, увидеть скрытые смыслы и найти новые идеи для развития. Это безопасное и поддерживающее пространство, где можно без спешки заглянуть внутрь себя, услышать свои настоящие желания и получить ясность.',
    format: 'офлайн в Москве',
    prices: [{ duration: '1 сессия', price: '5 000 ₽' }],
  },
  {
    title: '(Групповое) LEGO моделирование',
    image: 'https://cdn.poehali.dev/files/2de21e73-6ea0-4db1-b049-7130752c3a06.jpg',
    description:
      'Пространство для творчества и личных открытий. Каждый участник приносит свою уникальную задачу — будь то поиск решения, укрепление отношений или развитие личных качеств.',
    details:
      'Через конструктор каждый выражает свои мысли и чувства в образах, что помогает увидеть ситуацию с новой стороны и найти вдохновение для изменений. Вместе вы создаете атмосферу доверия, поддержки и уважения, где важен голос каждого.',
    format: 'офлайн в Москве',
    prices: [{ duration: '1 участник', price: '2 000 ₽' }],
  },
  {
    title: '(Индивидуально) Песочное моделирование',
    image: 'https://cdn.poehali.dev/files/88e33ac5-0950-4a77-9953-b28a837f8156.jpg',
    description:
      'Путь к исцелению и осознанности. В спокойной и доверительной атмосфере вы сможете погрузиться в свой внутренний мир через работу с песком и фигурками.',
    details:
      'Помогает: понимание своих чувств и эмоций, разрешение внутренних конфликтов, поиск ресурсов для преодоления стрессов, улучшение отношений с близкими, осознание жизненных целей, работа с травмами и страхами, повышение уверенности в себе.',
    format: 'офлайн в Москве',
    prices: [{ duration: '1 сессия', price: '5 000 ₽' }],
  },
  {
    title: '(Группа) Песочное моделирование',
    image: 'https://cdn.poehali.dev/files/d7fae1fe-7c13-41ad-9cbe-b216c15b1a43.jpg',
    description:
      'Уникальная возможность для каждого участника погрузиться в свой личный мир через творчество и символы песка и фигурок.',
    details:
      'Все вместе вы создаете особое пространство поддержки, принятия и внимательного слушания. Помогает в понимании чувств, разрешении конфликтов, поиске ресурсов, улучшении отношений, осознании целей, работе с травмами и повышении уверенности.',
    format: 'офлайн в Москве',
    prices: [{ duration: '1 участник', price: '2 000 ₽' }],
  },
  {
    title: 'Корпоративная сессия LEGO Serious Play',
    image: 'https://cdn.poehali.dev/files/e165d54b-3f62-4dfe-9634-5206b0bcb05e.jpg',
    description:
      'Групповая сессия LEGO Serious Play — развитие командного мышления и креативности. Для укрепления командного взаимодействия, стимулирования креативных решений и повышения эффективности работы.',
    details:
      'Использование конструктора LEGO позволяет участникам наглядно и активно выразить идеи, обойти барьеры коммуникации и совместно найти инновационные решения бизнес-задач. Идеальна для стратегических сессий, брейнштормов, определения целей и построения корпоративной культуры.',
    format: 'офлайн в Москве',
    prices: [{ duration: 'под запрос', price: 'договорная' }],
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Услуги</h2>
          <p className="text-xl text-gray-700">Продуктовая линейка для вашей трансформации</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-800 mb-4 leading-relaxed font-medium">{service.description}</p>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{service.details}</p>
                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <Icon name="MapPin" size={16} className="text-accent" />
                    <span>{service.format}</span>
                  </div>
                  <div className="space-y-2 bg-accent/5 rounded-xl p-4 border border-accent/20">
                    {service.prices.map((price, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-800 font-medium">{price.duration}</span>
                        <span className="text-2xl font-bold text-accent">{price.price}</span>
                      </div>
                    ))}
                  </div>
                  <Button onClick={scrollToContact} className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                    Записаться
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 animate-fade-in border-l-4 border-accent">
          <p className="text-gray-800 leading-relaxed text-center font-medium">
            <strong className="text-gray-900">Также доступно:</strong> песочное моделирование в корпоративном сегменте как тимбилдинг мероприятия.
            Песок раскрывает внутренний мир, помогает избавиться от ограничений и блоков за пару часов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
