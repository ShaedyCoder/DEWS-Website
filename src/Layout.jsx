import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Menu, 
  X, 
  Droplets,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setSolutionsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'About', page: 'About' },
    { 
      name: 'Solutions', 
      page: 'FreshwaterSolutions',
      dropdown: [
        { name: 'RO Systems', page: 'ROSystems' },
        { name: 'Desalinated Water', page: 'DesalinatedWater' },
        { name: 'Demineralised Water', page: 'FreshwaterSolutions' }
      ]
    },
    { name: 'Fleet', page: 'Fleet' },
    { name: 'News', page: 'News' },
  ];

  const isHomePage = currentPageName === 'Home';

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage 
            ? 'bg-white/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696d9f184eda294465cb2a7e/8c2c37fae_TransparentDewsLogo.png"
                alt="DEWS Logo"
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <button 
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        isScrolled || !isHomePage 
                          ? 'text-slate-600 hover:text-[#C6E832]' 
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {solutionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-2"
                        >
                          <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[200px]">
                            {link.dropdown.map((sublink) => (
                              <Link
                                key={sublink.page}
                                to={createPageUrl(sublink.page)}
                                className="block px-4 py-2 text-sm text-slate-600 hover:text-[#C6E832] hover:bg-slate-50 transition-colors"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`text-sm font-medium transition-colors ${
                      currentPageName === link.page
                        ? isScrolled || !isHomePage ? 'text-[#C6E832]' : 'text-white'
                        : isScrolled || !isHomePage 
                          ? 'text-slate-600 hover:text-[#C6E832]' 
                          : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link to={createPageUrl('Contact')}>
                <Button 
                  className={`${
                    isScrolled || !isHomePage
                      ? 'bg-[#2E3B8E] hover:bg-[#253075] text-white'
                      : 'bg-white text-[#2E3B8E] hover:bg-white/90'
                  }`}
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled || !isHomePage ? 'text-slate-900' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100"
            >
              <div className="container mx-auto px-6 py-6">
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    link.dropdown ? (
                      <div key={link.name} className="space-y-2">
                        <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                          {link.name}
                        </p>
                        {link.dropdown.map((sublink) => (
                          <Link
                            key={sublink.page}
                            to={createPageUrl(sublink.page)}
                            className="block py-2 text-slate-600 hover:text-[#C6E832]"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={link.page}
                        to={createPageUrl(link.page)}
                        className={`block py-2 font-medium ${
                          currentPageName === link.page
                            ? 'text-[#C6E832]'
                            : 'text-slate-700 hover:text-[#C6E832]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                  <Link to={createPageUrl('Contact')} className="block pt-4">
                    <Button className="w-full bg-[#2E3B8E] hover:bg-[#253075] text-white">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className={currentPageName === 'Home' ? '' : 'pt-24'}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to={createPageUrl('Home')} className="flex items-center gap-3 mb-6">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696d9f184eda294465cb2a7e/8c2c37fae_TransparentDewsLogo.png"
                  alt="DEWS Logo"
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your trusted partner for freshwater solutions. Singapore-based desalinated water supply 
                and water treatment services.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Fleet', 'News'].map((page) => (
                  <li key={page}>
                    <Link 
                      to={createPageUrl(page)} 
                      className="text-slate-400 hover:text-[#C6E832] transition-colors text-sm"
                    >
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to={createPageUrl('ROSystems')} 
                    className="text-slate-400 hover:text-[#C6E832] transition-colors text-sm"
                  >
                    RO Systems
                  </Link>
                </li>
                <li>
                  <Link 
                    to={createPageUrl('DesalinatedWater')} 
                    className="text-slate-400 hover:text-[#C6E832] transition-colors text-sm"
                  >
                    Desalinated Water
                  </Link>
                </li>
                <li>
                  <Link 
                    to={createPageUrl('FreshwaterSolutions')} 
                    className="text-slate-400 hover:text-[#C6E832] transition-colors text-sm"
                  >
                    Demineralised Water
                  </Link>
                </li>
                <li>
                  <Link 
                    to={createPageUrl('About')} 
                    className="text-slate-400 hover:text-[#C6E832] transition-colors text-sm"
                  >
                    Design, Build & Operate
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>Singapore</li>
                <li>enquiries@dews.sg</li>
                <li>+65 6297 1100</li>
              </ul>
              <Link to={createPageUrl('Contact')} className="inline-block mt-6">
                <Button variant="outline" size="sm" className="border-slate-600 text-black hover:bg-slate-800 hover:text-white">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} DEWS Pte Ltd. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

}
