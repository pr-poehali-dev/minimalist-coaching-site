import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">Максимов Вячеслав</div>
        <div className="hidden md:flex gap-8 items-center">
          <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-accent transition-colors">
            Главная
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-accent transition-colors">
            Обо мне
          </button>
          <button onClick={() => scrollToSection('approach')} className="text-gray-700 hover:text-accent transition-colors">
            Подход
          </button>
          <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-accent transition-colors">
            Услуги
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-accent transition-colors">
            Отзывы
          </button>
          <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent-dark">
            Связаться
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
