import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag, Truck, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed w-full top-0 z-50 transition-all duration-300"
      style={{
      backgroundColor: scrolled ? 'rgb(246, 241, 231)' : 'transparent',
      paddingTop: scrolled ? '0.5rem' : '1rem',
      paddingBottom: scrolled ? '0.5rem' : '1rem',
      }}
    >
      <div className="w-full flex justify-between items-center px-8">
        <div className="flex items-center">
          <NavLink 
            to="/" 
            className="font-heading text-2xl md:text-3xl font-bold text-brown-900 flex items-center"
          >
            <img src="./images/store.png" alt="Logo La Boutique dell’Usato" className="h-10 mr-7" />
            <span>La Boutique dell'Usato</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link'}>
            {t('nav.home')}
          </NavLink>
          {/*<NavLink to="/boutique" className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link'}>
            {t('nav.boutique')}
          </NavLink>*/}
          <NavLink to="/moving-services" className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link'}>
            {t('nav.movingServices')}
          </NavLink>
         {/* <NavLink to="/donate" className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link'}>
            {t('nav.donate')}
          </NavLink>*/}
          <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link'}>
            {t('nav.contact')}
          </NavLink>
          <button 
            className="btn btn-primary"
            onClick={() => {
              const newLang = i18n.language === 'it' ? 'en' : 'it';
              i18n.changeLanguage(newLang);
            }}
          >
            {i18n.language === 'it' ? 'EN' : 'IT'}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-brown-900"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`
          fixed inset-0 bg-cream-dark md:hidden transition-transform duration-300 ease-in-out z-40 pt-20
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-6 pt-6">
          <NavLink 
            to="/"
            onClick={() => setIsOpen(false)}
            className={({isActive}) => 
              `text-xl flex items-center ${isActive ? 'text-emerald-700 font-medium' : 'text-brown-800'}`
            }
          >
            <Home className="mr-3" size={22} />
            {t('nav.home')}
          </NavLink>
          
         {/* <NavLink 
            to="/boutique"
            onClick={() => setIsOpen(false)}
            className={({isActive}) => 
              `text-xl flex items-center ${isActive ? 'text-emerald-700 font-medium' : 'text-brown-800'}`
            }
          >
            <ShoppingBag className="mr-3" size={22} />
            {t('nav.boutique')}
          </NavLink>*/}


          <NavLink 
            to="/moving-services"
            onClick={() => setIsOpen(false)}
            className={({isActive}) => 
              `text-xl flex items-center ${isActive ? 'text-emerald-700 font-medium' : 'text-brown-800'}`
            }
          >
            <Truck className="mr-3" size={22} />
            {t('nav.movingServices')}
          </NavLink>
          <NavLink 
            to="/donate"
            onClick={() => setIsOpen(false)}
            className={({isActive}) => 
              `text-xl flex items-center ${isActive ? 'text-emerald-700 font-medium' : 'text-brown-800'}`
            }
          >
            <svg className="mr-3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
            </svg>
            {t('nav.donate')}
          </NavLink>
          <NavLink 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({isActive}) => 
              `text-xl flex items-center ${isActive ? 'text-emerald-700 font-medium' : 'text-brown-800'}`
            }
          >
            <svg className="mr-3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            {t('nav.contact')}
          </NavLink>
          <div className="pt-4 border-t border-brown-200">
            <button className="btn btn-primary w-full text-center mt-4">
              {i18n.language === 'it' ? 'EN' : 'IT'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
