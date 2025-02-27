import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://bloom-sports.com/wp-content/uploads/2023/10/Bloom-Sports-Video-1.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-slide-down">
          <span className="block">Elevating Athletes.</span>
          <span className="block mt-2 animate-slide-down stagger-1">Maximizing Opportunities.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12 animate-fade-in stagger-2">
          Partnering with elite athletes to unlock their full commercial potential.
        </p>
        <button
          onClick={scrollToServices}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in stagger-3"
        >
          Discover Our Services
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-fade-in stagger-4">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
    </div>
  );
};

export default Hero;