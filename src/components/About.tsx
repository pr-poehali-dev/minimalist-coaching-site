const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Обо мне</h2>
            <p className="text-xl text-gray-600">Максимов Вячеслав</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Авторский стиль работы</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-16 text-accent font-bold text-lg">45%</div>
                  <div className="text-gray-700">Мягкий, поддерживающий подход</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 text-accent font-bold text-lg">10%</div>
                  <div className="text-gray-700">Прямой, честный</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 text-accent font-bold text-lg">30%</div>
                  <div className="text-gray-700">Осознанность + действия</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 text-accent font-bold text-lg">15%</div>
                  <div className="text-gray-700">Арт-коучинг</div>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 rounded-2xl p-8 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Почему мне доверяют</h3>
              <p className="text-gray-700 leading-relaxed">
                Использую классические вопросные технологии, а также арт-коучинговые LEGO® Serious Play, песочное
                моделирование и Мак-карты, что поможет раскрыть ваш потенциал и достичь целей.
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 text-center">Коротко об опыте</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-accent font-bold text-lg mb-2">2023</div>
                <p className="text-gray-700">Селлер на Wildberries (оборот за год 14 млн руб.)</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-accent font-bold text-lg mb-2">2023</div>
                <p className="text-gray-700">Наставник-коуч 40+ предпринимателей в бизнес-клубе "Terra"</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-accent font-bold text-lg mb-2">2024</div>
                <p className="text-gray-700">Преподаватель онлайн-курса в РАНХиГС</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-accent font-bold text-lg mb-2">2025</div>
                <p className="text-gray-700">Коуч / бизнес-коуч (МАК-карты, песочное моделирование, Lego Serious Play)</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-accent font-bold text-lg mb-2">2025</div>
                <p className="text-gray-700">Ведущий бизнес-завтраков в клубе "Terra"</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-accent font-bold text-lg mb-2">15 лет</div>
                <p className="text-gray-700">7 твёрдых бизнесов (3 в партнёрстве)</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 space-y-4 animate-fade-in">
            <p className="text-gray-700 leading-relaxed">
              Прошёл собственную трансформацию, взлёты и падения в отношениях, бизнесе, внутри себя. Есть ребёнок,
              живём отдельно (отношения прекрасные). Пережил два развода в жизни.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Сегодня у меня есть любимая женщина, которую мне хочется радовать просто потому, что она есть. А пришёл я
              к этим отношениям через собственную трансформацию. И теперь в них нет "должен", "баш на баш", "сделать
              потому что надо", "буду терпеть ради чего-то", "замалчивать", "не доверять" и всего этого "Г".
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Только взаимность, трепет и желание сделать друг друга счастливее, потому что хочется. И я сделаю всё,
              чтобы таких счастливых людей стало больше на этой планете. Звучит амбициозно и безумно, но это "Я" —
              приятно познакомиться =)
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <p className="text-gray-700 leading-relaxed">
              В первую очередь, хочу, чтобы вы знали, что в работе я опираюсь на доверие, искренность и поддержку. Меня
              рекомендуют потому, что я погружаюсь полностью в ситуацию человека, и мы безопасно двигаемся в принятии
              текущего момента, без осуждений — это обеспечивает раскрытие человека и лёгкость в работе.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Вы всегда можете рассчитывать, что я мягко буду сохранять фокус, и время не пройдёт даром в пустых
              разговорах. Мой железобетонный постулат в жизни — конфиденциальность.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            <div className="bg-white border-l-4 border-accent p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Личная работа</h4>
              <p className="text-gray-700 text-sm">
                Энергия, истинные желания, хочешь изменений, но не понимаешь, как это сделать
              </p>
            </div>
            <div className="bg-white border-l-4 border-accent p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Для экспертов</h4>
              <p className="text-gray-700 text-sm">
                Распаковка уникальности, продуктовая линейка, точки роста, сдвинуть ситуацию
              </p>
            </div>
            <div className="bg-white border-l-4 border-accent p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Предприниматели</h4>
              <p className="text-gray-700 text-sm">
                Ускорение, план, новый уровень, взаимодействие команды, стратегия
              </p>
            </div>
          </div>

          <div className="text-center bg-accent/10 rounded-2xl p-8 animate-fade-in">
            <p className="text-xl text-gray-900 font-semibold mb-4">
              Для себя понял такую истину в жизни: вчера уже прошло, а завтра никогда не наступит, идеальное время
              именно сегодня.
            </p>
            <p className="text-lg text-gray-700">
              Подумай, если ты сейчас читаешь эти строки, возможно, для этого пришло время, и ты готов сделать новый
              шаг!
            </p>
            <p className="text-xl text-accent font-bold mt-6">Работаю только с теми, кто реально хочет что-то изменить!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
