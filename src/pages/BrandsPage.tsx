import React, { useEffect } from 'react';
import { Shield, Target, BarChart as ChartBar, Users, Zap, Globe, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BrandsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: 'Strategic Alignment',
      description: 'We carefully match brands with athletes whose values, audience, and goals align perfectly with your marketing objectives.'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: 'Global Reach',
      description: 'Access a diverse portfolio of international athletes with significant followings across multiple platforms and markets.'
    },
    {
      icon: <ChartBar className="h-8 w-8 text-blue-500" />,
      title: 'Performance Metrics',
      description: 'Detailed analytics and reporting on campaign performance, engagement rates, and ROI measurements.'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: 'Creative Excellence',
      description: 'Our in-house creative team ensures high-quality content that resonates with your target audience.'
    }
  ];

  const services = [
    {
      title: 'Brand Ambassadorship',
      features: [
        'Long-term athlete partnerships',
        'Exclusive content creation',
        'Event appearances',
        'Social media campaigns'
      ]
    },
    {
      title: 'Digital Campaigns',
      features: [
        'Social media activations',
        'Content series production',
        'Live streaming events',
        'Behind-the-scenes access'
      ]
    },
    {
      title: 'Event Integration',
      features: [
        'Tournament appearances',
        'Meet & greets',
        'Product launches',
        'VIP experiences'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-black text-white py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
            alt="Brand Partnership"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Partner with Elite Athletes
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect your brand with world-class athletes and tap into authentic storytelling that resonates with millions of engaged fans globally.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start a Partnership
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive partnership solutions that deliver measurable results and authentic brand connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Customize your partnership with our comprehensive range of services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Partnership Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to building successful brand partnerships.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2" />
            <div className="space-y-16">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  description: 'We discuss your brand objectives, target audience, and campaign goals to understand your needs fully.'
                },
                {
                  step: '02',
                  title: 'Strategy Development',
                  description: 'Our team creates a tailored partnership strategy, including athlete selection and campaign concepts.'
                },
                {
                  step: '03',
                  title: 'Campaign Execution',
                  description: 'We manage all aspects of the campaign, from content creation to event coordination.'
                },
                {
                  step: '04',
                  title: 'Performance Analysis',
                  description: 'Regular reporting and analytics to measure campaign success and optimize performance.'
                }
              ].map((phase, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center">
                    <div className="absolute left-1/2 w-8 h-8 bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{phase.step}</span>
                    </div>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 ml-auto'}`}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create impactful partnerships that drive results and connect with audiences authentically.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandsPage;