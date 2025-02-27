import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const getHref = useCallback((path: string) => {
    if (path.startsWith('#')) {
      return isHomePage ? path : `/${path}`;
    }
    return path;
  }, [isHomePage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && isHomePage) {
      e.preventDefault();
      handleScroll(href.substring(1));
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: isHomePage ? '#home' : '/' },
    {
      name: 'Company',
      href: '#',
      dropdown: [
        { name: 'About Us', href: isHomePage ? '#about' : '/#about' },
        { name: 'Services', href: isHomePage ? '#services' : '/#services' },
      ]
    },
    {
      name: 'Athletes & News',
      href: '#',
      dropdown: [
        { name: 'Our Athletes', href: '/athletes' },
        { name: 'News & Insights', href: '/news' },
        { name: 'Brand Partnerships', href: '/brands' },
      ]
    },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }
      ${isMobileMenuOpen ? 'bg-black' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              BLOOM SPORTS
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => link.dropdown ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                      activeDropdown === link.name
                        ? 'opacity-100 visible transform translate-y-0 scale-100'
                        : 'opacity-0 invisible transform -translate-y-2 scale-95'
                    }`}
                  >
                    <div className="py-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={getHref(item.href)}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={getHref(link.href)}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.href ? 'text-white' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm absolute w-full animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {navLinks.map((link) => link.dropdown ? (
              <div key={link.name} className="space-y-1">
                <div
                  className="text-gray-300 px-3 py-2 text-base font-medium border-b border-gray-800"
                >
                  {link.name}
                </div>
                <div className="pl-6 space-y-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={getHref(item.href)}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-gray-400 hover:text-white block px-3 py-2 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={getHref(link.href)}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar