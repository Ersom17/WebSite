import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  ShoppingBag
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-cream pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Store Info */}
          <div>
            <div className="flex items-center mb-6">
              <ShoppingBag className="mr-2" size={28} />
              <span className="font-heading font-bold text-2xl">La Boutique dell'Usato</span>
            </div>
            <p className="mb-6 text-cream-dark">
            La boutique dell'usato di quartiere per tesori unici e servizi di trasloco professionali.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/LaBoutiqueUsato?mibextid=wwXIfr&rdid=tDMBS3Mpq3K3wm6E&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CARhpwTWD%2F%3Fmibextid%3DwwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/labudelus/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="font-heading text-xl mb-6 font-semibold">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock className="mr-2 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-medium">Lunedì- Venerdì</p>
                  <p className="text-cream-dark">9:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-medium">Sabato</p>
                  <p className="text-cream-dark">10:00 -12:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-medium">Domenica</p>
                  <p className="text-cream-dark">Chiuso</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl mb-6 font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <p>Via Sempione 6 6600 Muralto Svizzera</p>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <p>+41 76 526 92 00</p>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl mb-6 font-semibold">Link rapidi</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-emerald-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/boutique" className="hover:text-emerald-300 transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/moving-services" className="hover:text-emerald-300 transition-colors">
                  Traslochi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-300 transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-emerald-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brown-700 mt-12 pt-8 text-center text-cream-dark">
          <p>&copy; {new Date().getFullYear()} La Boutique dell'Usato. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;