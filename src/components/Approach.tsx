import Icon from '@/components/ui/icon';

const Approach = () => {
  return (
    <section id="approach" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Мой подход</h2>
            <p className="text-xl text-gray-600">Смешанный стиль работы для максимального результата</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Lightbulb" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Глубина через арт-инструменты</h3>
              <p className="text-gray-700 leading-relaxed">
                Использую LEGO® Serious Play, песочное моделирование и МАК-карты для доступа к подсознательным ресурсам
                и инсайтам
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="MessageCircle" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Практичный коучинг</h3>
              <p className="text-gray-700 leading-relaxed">
                Классические коучинговые техники для структурирования запроса, постановки целей и выстраивания плана
                действий
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Target" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Действия</h3>
              <p className="text-gray-700 leading-relaxed">
                Фокус на конкретных шагах и измеримых результатах. Минимум воды — максимум личных инсайтов и движений
                вперёд
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-lg animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="Sparkles" size={24} className="text-accent" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Уникальность подхода</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Сочетание Lego®, песочного моделирования и классического коучинга создаёт безопасное пространство для
                  трансформации. Вы получаете не только осознанность, но и практические инструменты для достижения целей.
                </p>
                <p className="text-accent font-semibold text-lg">
                  Результат: ясность, энергия и конкретный план действий уже после первой сессии
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
