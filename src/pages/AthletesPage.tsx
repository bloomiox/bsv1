import React, { useEffect } from 'react';
import { Zap, Shield, Users, BarChart, Target, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const AthletesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Target className="h-12 w-12 text-blue-500 mb-4" />,
      title: 'Strategic Career Management',
      description: 'We provide comprehensive career planning, ensuring long-term success and growth for our athletes, both on and off the field.',
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-500 mb-4" />,
      title: 'Brand Development & Endorsements',
      description: 'Our team excels at building powerful personal brands and securing lucrative endorsement deals that align with our athletes\' values.',
    },
    {
      icon: <Users className="h-12 w-12 text-blue-500 mb-4" />,
      title: 'Public Relations & Media',
      description: 'We manage all aspects of public relations and media engagement, crafting compelling narratives and maximizing positive exposure.',
    },
    {
      icon: <BarChart className="h-12 w-12 text-blue-500 mb-4" />,
      title: 'Financial & Legal Guidance',
      description: 'Partnering with top experts, we offer sound financial planning and legal advice tailored to the unique needs of professional athletes.',
    },
  ];

  const sportsRepresented = [
    { name: 'Tennis', image: 'https://images.unsplash.com/photo-1554068809-56db50704770?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Soccer', image: 'https://images.unsplash.com/photo-1551958219-ff7990a83d8a?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Basketball', image: 'https://images.unsplash.com/photo-1519861531473-920026218875?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'American Football', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Golf', image: 'https://images.unsplash.com/photo-1587174488055-23591979b279?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Esports', image: 'https://images.unsplash.com/photo-1580234810482-870a00dd0172?auto=format&fit=crop&q=80&w=400&h=300' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Elevate Your Athletic Career
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-100 max-w-3xl mx-auto mb-10">
            We are a premier sports management agency dedicated to empowering elite athletes. Our mission is to maximize your potential, build your brand, and secure your legacy in the competitive world of professional sports.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-indigo-700 px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Partner With Us
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why World-Class Athletes Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our holistic approach to athlete representation ensures you receive unparalleled support in every aspect of your career.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center md:justify-start">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports We Represent Section */}
      <section className="py-16 sm:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              A Diverse Portfolio of Champions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly represent top-tier talent across a wide spectrum of professional sports, from global superstars to rising prodigies.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {sportsRepresented.map((sport) => (
              <div key={sport.name} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={sport.image} alt={sport.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold">{sport.name}</h3>
                </div>
                 <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white text-md font-semibold text-center">{sport.name}</h3>
                </div>
              </div>
            ))}
          </div>
           <p className="text-center text-gray-600 mt-12 text-lg">
            ...and many more. We are constantly scouting for exceptional talent in emerging and established sports.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24 bg-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Take Your Career to the Next Level?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your athletic and personal ambitions. Contact us today for a confidential consultation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-indigo-700 px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AthletesPage;
