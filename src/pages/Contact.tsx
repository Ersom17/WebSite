import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Contact Header */}
      <section className="bg-brown-100 py-16">
        <div className="container-custom text-center">
          <h1 className="section-title">Contatto</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
          Saremo lieti di ascoltarvi. Contattateci per domande, preventivi o per programmare una visita.
          </p>
        </div>
      </section>
      
      {/* Contact Details */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-heading text-2xl font-semibold mb-6">
              Entrare in contatto
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full p-3 mr-4">
                    <Phone className="text-emerald-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-brown-700">+41 76 526 92 00</p>
                    <p className="text-sm text-brown-500 mt-1">
                      Lun-Ven, 9:00 - 18:00
                    </p>
                  </div>
                </div>
                
                
            
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full p-3 mr-4">
                    <MapPin className="text-emerald-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Indirizzo</h3>
                    <p className="text-brown-700">
                      Via Sempione 6<br />
                      6600 Muralto<br />
                      Switzerland
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full p-3 mr-4">
                    <Clock className="text-emerald-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Orari di apertura</h3>
                    <div className="grid grid-cols-2 gap-2 text-brown-700">
                    <p>Lunedì - Venerdì:</p>
                    <p>9:00 - 18:00</p> 
                    <p>Sabato:</p> 
                    <p>10:00 - 12:00</p> 
                    <p>Domenica:</p> 
                    <p>Chiuso</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Connettiti con noi</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/share/1CARhpwTWD/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-emerald-100 p-3 rounded-full text-emerald-700 hover:bg-emerald-200 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/labudelus/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-emerald-100 p-3 rounded-full text-emerald-700 hover:bg-emerald-200 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="http://wa.me/41765269200" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-emerald-100 p-3 rounded-full text-emerald-700 hover:bg-emerald-200 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-heading text-2xl font-semibold mb-6">
              Inviaci un messaggio
              </h2>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">Nome *</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Cognome *</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Indirizzo e-mail *</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Numero di telefono</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Selezionare un argomento</option>
                    <option value="boutique">Richiesta di boutique</option>
                    <option value="moving">Servizi di trasloco</option>
                    <option value="donation">Donazione</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Come possiamo aiutarvi?"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" required />
                    <span className="text-sm text-brown-700">
                    Acconsento a che questo sito web memorizzi le informazioni da me inviate per poter rispondere alla mia richiesta. Per ulteriori informazioni, consultare la nostra politica sulla privacy.
                    </span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="bg-emerald-700 text-white py-3 px-6 rounded-md hover:bg-emerald-800 transition-colors flex items-center"
                >
                  <Send className="mr-2" size={18} />
                  Invia il messaggio
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="container-custom mb-20">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5525.716810940783!2d8.798239276010541!3d46.17347427109447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4785c9d49246051b%3A0x9286b4148bbd448e!2sLa%20Boutique%20dell&#39;Usato!5e0!3m2!1sen!2sch!4v1745594901545!5m2!1sen!2sch" 
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Store Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;