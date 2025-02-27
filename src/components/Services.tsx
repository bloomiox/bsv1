import React from 'react';
import { Handshake, LineChart, Megaphone, Briefcase, Scale } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Handshake className="h-12 w-12" />,
      title: 'Sponsorship Acquisition',
      description: 'Strategic partnership development and negotiation with leading brands across industries.',
      features: ['Brand Matching', 'Deal Structuring', 'ROI Optimization'],
    },
    {
      icon: <LineChart className="h-12 w-12" />,
      title: 'Contract Negotiation',
      description: 'Expert negotiation of professional contracts to maximize value and protect athlete interests.',
      features: ['Market Analysis', 'Term Optimization', 'Performance Incentives'],
    },
    {
      icon: <Megaphone className="h-12 w-12" />,
      title: 'Brand Strategy & Media',
      description: 'Comprehensive personal brand development and media presence management.',
      features: ['Social Media Strategy', 'PR Management', 'Content Creation'],
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: 'Career Management',
      description: 'Full-service career guidance and development for long-term success.',
      features: ['Career Planning', 'Financial Advisory', 'Post-Career Transition'],
    },
    {
      icon: <Scale className="h-12 w-12" />,
      title: 'Legal Representation',
      description: 'Expert legal counsel and representation for all sports-related matters.',
      features: ['Contract Review', 'Dispute Resolution', 'Legal Compliance'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Comprehensive Athlete Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We provide end-to-end solutions to help athletes maximize their potential and build lasting legacies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-blue-500 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-300 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;