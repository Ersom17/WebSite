import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Heart, ShoppingBag, Facebook, Instagram } from 'lucide-react';
import Gallery from './Gallery';


const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg" 
            alt="Vintage Furniture Store"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white fade-in">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
              Entrate a curiosare
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
            Scoprite tesori unici del passato, di provenienza etica e curati con amore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#store-info" className="btn btn-primary text-center">
                Esplora la nostra collezione
              </a>
              <Link to="/moving-services" className="btn btn-secondary bg-white/20 border-white text-white text-center">
                Servizi di trasloco
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-vintage-bg pb-0"  >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Incontra il cuore de La Boutique dell’Usato</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
            Passione per i tesori d'epoca e servizio eccezionale, personificato
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-vintage hover:shadow-vintage-hover transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="font-heading text-3xl mb-2">Georgina Bernardi</h3>
                  <p className="text-vintage-primary font-medium mb-4">Owner Curator</p>
                  <p className="text-vintage-text/80 mb-6">
                  Georgina ti accoglie col sorriso nella sua Boutique dell’Usato a Muralto, dove ogni oggetto ha una storia e niente si butta. Con passione e calore, trasforma il vintage in qualcosa di vivo, unico e tutto da scoprire.  <span className="text-emerald-700">Entra a curiosare</span>!
                  </p>
                  <div className="flex gap-4">

                  <a
                      href="https://www.instagram.com/labudelus/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-vintage-primary hover:text-vintage-primary/80 transition-colors"
                      aria-label="Visit Georgina's Instagram"
                    >
                      <Facebook size={26} />
                    </a>
                    
                    <a
                      href="https://www.instagram.com/labudelus/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-vintage-primary hover:text-vintage-primary/80 transition-colors"
                      aria-label="Visit Georgina's Instagram"
                    >
                      <Instagram size={26} />
                    </a>
                  </div>
                </div>
                <div className="lg:flex-1">
                  <div className="aspect-square overflow-hidden rounded-lg bg-vintage-gold/10">
                    <img
                      src=".\images\-georgina-casa-oggetti-veracruz-figli-qoa0.jpg"
                      alt="Georgina Bernardi - Owner placeholder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Gallery Section*/ }

      <div className="my-12">
        <Gallery />
      </div>


      {/* Services Overview */}
      <section className="section-padding bg-cream-dark pt-8">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">I nostri servizi</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
            Più di un semplice negozio di seconda mano
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Boutique Card */}
            <div className="card vintage-shadow hover:shadow-lg transition-all p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                <ShoppingBag className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Vintage Boutique</h3>
              <p className="text-brown-700 mb-6">
              Collezione curata di mobili, arte, abbigliamento e tesori unici con carattere e storia.
              </p>
              <Link to="/boutique" className="mt-auto inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium">
              Sfoglia la collezione <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            {/* Moving Services Card */}
            <div className="card vintage-shadow hover:shadow-lg transition-all p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                <Truck className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Servizi di trasloco</h3>
              <p className="text-brown-700 mb-6">
              Servizi professionali di trasloco, rimozione di mobili e trasporto per abitazioni e aziende.
              </p>
              <Link to="/moving-services" className="mt-auto inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium">
                Learn More <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            {/* Donations Card */}
            <div className="card vintage-shadow hover:shadow-lg transition-all p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                <Heart className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Sostegno alla comunità</h3>
              <p className="text-brown-700 mb-6">
              Date ai vostri oggetti una seconda vita e sostenete i nostri programmi comunitari attraverso le donazioni.
              </p>
              <Link to="/donate" className="mt-auto inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium">
              Come donare <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      {/* Store Information */}
      <section id="store-info" className="bg-cream-dark py-16 pb-5" >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl mb-6 font-bold">
              Visitate la nostra boutique
              </h2>
              <p className="text-brown-700 mb-8">
              Il nostro inventario è in continua evoluzione, in quanto troviamo sempre nuovi tesori.
              Per avere la selezione più aggiornata, vi invitiamo a visitare il nostro negozio e ad esplorare di persona.
              Il nostro personale esperto è pronto ad aiutarvi a trovare il pezzo perfetto.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-emerald-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p>Via Luigi Canonica 17, 6900 Lugano, Switzerland</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-emerald-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Hours</h4>
                    <p>Monday - Friday: 9:30 AM - 6:30 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-emerald-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Contact</h4>
                    <p>Phone: +41 76 526 92 00</p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden vintage-shadow">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5525.716437700003!2d8.798239276654362!3d46.173477985835525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4785c9d49246051b%3A0x9286b4148bbd448e!2sLa%20Boutique%20dell&#39;Usato!5e0!3m2!1sen!2sch!4v1745747161825!5m2!1sen!2sch" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Store Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding wood-texture pt-18">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">Cosa dicono i nostri clienti</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
            Storie dalla nostra comunità
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex text-yellow-500 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="italic text-brown-700 mb-6">
                "Ho trovato la più bella credenza vintage per la mia sala da pranzo. La qualità e il prezzo erano imbattibili e il servizio di consegna era eccellente!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brown-200 flex items-center justify-center mr-3 text-brown-700 font-semibold">
                  ML
                </div>
                <div>
                  <h4 className="font-semibold">Maria Lunardi</h4>
                  <p className="text-sm text-brown-600">Lugano</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex text-yellow-500 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="italic text-brown-700 mb-6">
                "Il loro servizio di trasloco è stato professionale e attento a tutte le mie cose. Il team è stato cordiale ed efficiente. Raccomando vivamente Vintagio per qualsiasi trasloco!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brown-200 flex items-center justify-center mr-3 text-brown-700 font-semibold">
                  TB
                </div>
                <div>
                  <h4 className="font-semibold">Thomas Bernasconi</h4>
                  <p className="text-sm text-brown-600">Mendrisio</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex text-yellow-500 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} stroke="currentColor" fill="none" />
              </div>
              <p className="italic text-brown-700 mb-6">
                "Che gioiello di negozio! Mi piace sfogliare la loro collezione in continua evoluzione. Il personale è competente e appassionato di articoli vintage."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brown-200 flex items-center justify-center mr-3 text-brown-700 font-semibold">
                  SG
                </div>
                <div>
                  <h4 className="font-semibold">Sophie Girard</h4>
                  <p className="text-sm text-brown-600">Locarno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Pronto a transformare il tuo spazio?
            </h2>
            <p className="text-xl mb-10">
            Visitate la nostra boutique per scoprire pezzi unici o contattateci per un servizio di trasloco professionale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-white text-emerald-700 hover:bg-cream">
              Contatto
              </Link>
             {/* <Link to="/boutique" className="btn border-2 border-white hover:bg-emerald-800">
              Scopri la boutique
              </Link>*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;