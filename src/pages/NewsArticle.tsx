import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { articles } from '../data/newsArticles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const NewsArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    navigate('/news');
    return null;
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Back Button */}
        <Link
          to="/news"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
          Back to News
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center text-gray-600 gap-4">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              {article.readTime}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden mb-12">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  to={`/news/${related.slug}`}
                  className="group"
                >
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {related.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {related.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default NewsArticle;