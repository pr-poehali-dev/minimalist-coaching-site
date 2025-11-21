import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    image: 'https://cdn.poehali.dev/files/c148addd-b234-451e-9069-8d251c803be4.jpg',
    type: 'image',
  },
  {
    image: 'https://cdn.poehali.dev/files/2d7350b4-ffc3-4226-9f93-7ed9cea7f44e.jpg',
    type: 'image',
  },
  {
    image: 'https://cdn.poehali.dev/files/33d8c869-27c2-4e92-905b-c4552cf1894a.jpg',
    type: 'image',
  },
  {
    image: 'https://cdn.poehali.dev/files/f0a69a9f-b79f-43f1-9d34-1f7e61499f4e.jpg',
    type: 'image',
  },
  {
    image: 'https://cdn.poehali.dev/files/c11507c7-f239-4be4-b56c-8146b6134e74.jpg',
    type: 'image',
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
          <p className="text-xl text-gray-700">Что говорят мои клиенты</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in border border-gray-100">
            <img
              src={testimonials[currentIndex].image}
              alt={`Отзыв ${currentIndex + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button 
              onClick={prevTestimonial} 
              variant="outline" 
              size="icon" 
              className="rounded-full border-accent text-accent hover:bg-accent hover:text-white"
            >
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
            <Button 
              onClick={nextTestimonial} 
              variant="outline" 
              size="icon" 
              className="rounded-full border-accent text-accent hover:bg-accent hover:text-white"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;