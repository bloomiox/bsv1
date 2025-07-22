import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Zap, BarChart } from 'lucide-react';

const AthletesSection = () => {
  const highlights = [
    {
      icon: <Zap className="h-10 w-10 text-yellow-400 mb-3" />,
      title: 'Global Reach',
      description: 'Connecting talent with worldwide opportunities and audiences.',
    },
    {
      icon: <Users className="h-10 w-10 text-yellow-400 mb-3" />,
      title: 'Athlete-Centric',
      description: 'A personalized approach focusing on individual goals and aspirations.',
    },
    {
      icon: <BarChart className="h-10 w-10 text-yellow-400 mb-3" />,
      title: 'Proven Results',
      description: 'A track record of successful partnerships and career milestones.',
    },
  ];

  return (
    <section id="representation" className="py-20 sm:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Empowering Athletic Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are dedicated to nurturing talent, building powerful brands, and maximizing opportunities for professional athletes across diverse sports. Our comprehensive representation services are tailored to elevate careers to new heights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center sm:justify-start">{highlight.icon}</div>
              <h3 className="text-2xl font-semibold text-white mt-4 mb-3">{highlight.title}</h3>
              <p className="text-gray-400">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/athletes"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Learn More About Our Representation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AthletesSection;
