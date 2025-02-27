import React, { useState, useEffect } from 'react';
import { Users, Target, Award, Rocket } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1551863863-e01bbf274ef6?auto=format&fit=crop&q=80',
      quote: 'Partnering with Bloom Sports was a game-changer for my career.',
      author: 'Tennis Champion'
    },
    {
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80',
      quote: 'They understand the unique challenges athletes face and provide solutions that work.',
      author: 'Olympic Medalist'
    },
    {
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80',
      quote: 'Their strategic approach to brand building has opened incredible opportunities.',
      author: 'Professional Athlete'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Athlete-First Approach',
      description: 'We prioritize our athletes\' long-term success and well-being in every decision.',
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: 'Strategic Vision',
      description: 'Creating comprehensive plans that align with athletes\' career goals and personal brands.',
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results and maintaining the highest professional standards.',
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-500" />,
      title: 'Innovation',
      description: 'Leveraging cutting-edge strategies to maximize opportunities in the evolving sports landscape.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Mission & Values */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              A Boutique Sports Agency Creating Extraordinary Legacies
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              At Bloom Sports, we take pride in being a boutique sports agency that provides personalized, high-touch representation to a select group of elite athletes. Our intentionally limited roster ensures that each client receives the dedicated attention and bespoke strategies they deserve. We understand that every athlete's journey is unique, and our mission is to empower them to reach their full potential both on and off the field, creating lasting impact through strategic partnerships and innovative brand building.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Carousel */}
          <div className="relative h-[600px] rounded-xl overflow-hidden group">
            {/* Slides */}
            <div className="relative h-full w-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={`Athlete testimonial ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <blockquote className="text-2xl font-light italic">
                      "{slide.quote}"
                    </blockquote>
                    <p className="mt-4 text-lg font-semibold">
                      — {slide.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;