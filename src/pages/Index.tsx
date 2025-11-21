import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Approach from '@/components/Approach';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';

const Index = () => {
  useEffect(() => {
    document.title = 'Максимов Вячеслав - Коуч | Бизнес-коучинг | Арт-коучинг | LEGO | Песочное моделирование';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Профессиональный коуч Максимов Вячеслав в Москве. Индивидуальные и групповые коуч-сессии, бизнес-коучинг, арт-коучинг, LEGO Serious Play, песочное моделирование. Бесплатный созвон.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Approach />
      <Services />
      <Testimonials />
      <Contact />
      <SEO />
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 Максимов Вячеслав. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
