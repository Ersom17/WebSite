import React from 'react';
import { Truck, Package, Home, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovingServices = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg" 
            alt="Moving Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>
        
        <div className="relative z-10 container-custom py-32 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Servizi di trasloco professionali
            </h1>
            <p className="text-xl mb-8">
            Affidabile, attento ed efficiente. Trattiamo i vostri beni come se fossero i nostri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-primary">
              Richiedi un preventivo
              </Link>
              <a href="#services" className="btn bg-white/20 hover:bg-white/30 text-white">
              I nostri servizi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-cream-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">I nostri servizi di trasloco</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
            Da singoli articoli a case complete, siamo in grado di soddisfare tutte le vostre esigenze
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                <Home className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Trasferimenti di casa</h3>
              <p className="text-brown-700 mb-6 ">
              Soluzioni complete per il trasloco di case, dall'imballaggio al trasporto e all'allestimento. Gestiamo tutto con cura ed efficienza.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-700 mr-2" size={18} />
                  <span>Servizio di imballaggio completo</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-700 mr-2" size={18} />
                  <span>Smontaggio e montaggio di mobili</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-700 mr-2" size={18} />
                  <span>Trasporto sicuro</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-700 mr-2" size={18} />
                  <span>Posizionamento nella nuova sede</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full text-center mt-auto">
              Richiesta di servizio
              </Link>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                <Truck className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Trasporto di mobili</h3>
              <p className="text-brown-700 mb-6 flex-grow">
              Avete bisogno di spostare singoli mobili? Il nostro servizio specializzato garantisce un trasporto sicuro di oggetti delicati o ingombranti.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start mt-0">
                  <CheckCircle className="text-emerald-700 mr-2 mt-1" size={22} />
                  <span>Manipolazione di oggetti antichi e di valore</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-700 mr-2" size={18} />
                  <span>Imbottitura e protezione adeguate</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-700 mr-2" size={18} />
                  <span>Carico e scarico in sicurezza</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-700 mr-2" size={18} />
                  <span>Assistenza al collocamento</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full text-center mt-auto">
              Richiesta di servizio
              </Link>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                <Package className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Decluttering e rimozione</h3>
              <p className="text-brown-700 mb-0">
              Vi aiutiamo a ridimensionare, a svuotare o a liberare gli spazi. Gli oggetti possono essere donati alla nostra boutique o smaltiti correttamente.
              </p>

              <ul className="space-y-5 mb-12 mt-6">
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-700 mr-2" size={18} />
                  <span>Sgombero della proprietà</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-700 mr-2" size={18} />
                  <span>Smaltimento ecologico</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-700 mr-2" size={18} />
                  <span>Rimozione organizzata</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full text-center mt-auto">
              Richiesta di servizio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Come funziona</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
            Il nostro semplice processo rende il trasloco privo di stress
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-700 flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-emerald-100 text-3xl font-bold">1</span>
                
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Contatto</h3>
              <p className="text-brown-700">
              Compilate il nostro modulo di contatto o chiamateci per discutere le vostre esigenze di trasloco e richiedere un preventivo.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-700 flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-emerald-100 text-3xl font-bold">2</span>
                
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Richiedi un preventivo</h3>
              <p className="text-brown-700">
              Valuteremo le vostre esigenze e vi forniremo un preventivo dettagliato con prezzi trasparenti.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-700 flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-emerald-100 text-3xl font-bold">3</span>
                
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Schedule Service</h3>
              <p className="text-brown-700">
              Scegliete una data e un orario convenienti e vi confermeremo tutti i dettagli.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-700 flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-100 text-3xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Rilassarsi e divertirsi</h3>
              <p className="text-brown-700">
              Il nostro team di professionisti si occupa di tutto, mentre voi vi concentrate sull'ambientamento nel nuovo spazio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-brown-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Cosa dicono i nostri clienti</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
            Ascoltate le testimonianze di chi ha sperimentato i nostri servizi di trasloco
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex text-yellow-500 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="italic text-brown-700 mb-6 text-lg">
                "Ero preoccupato per il trasloco della mia collezione di mobili antichi, ma il team di Vintagio ha gestito tutto con una cura eccezionale. Sono stati professionali, puntuali e hanno trattato i miei oggetti come se fossero i loro tesori. Altamente raccomandato!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brown-200 flex items-center justify-center mr-3 text-brown-700 font-semibold">
                  CB
                </div>
                <div>
                  <h4 className="font-semibold">Chiara Bernasconi</h4>
                  <p className="text-sm text-brown-600">Lugano → Bellinzona</p>
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
              <p className="italic text-brown-700 mb-6 text-lg">
                "Dovevamo sgomberare l'appartamento di mia madre e Vintagio ha reso il processo molto più semplice. Ci hanno aiutato a identificare gli oggetti da donare alla loro boutique e hanno gestito il resto con rispetto ed efficienza. Il loro servizio è stato una benedizione in un momento difficile."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brown-200 flex items-center justify-center mr-3 text-brown-700 font-semibold">
                  LR
                </div>
                <div>
                  <h4 className="font-semibold">Lorenzo Rossi</h4>
                  <p className="text-sm text-brown-600">Sgombero delle proprietà</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Domande frequenti</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
            Risposte alle domande più comuni sui nostri servizi di trasloco
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-brown-100">
                <h3 className="text-xl font-heading font-semibold mb-3">Quali aree servite?</h3>
                <p className="text-brown-700">
                Serviamo principalmente Lugano e la regione Ticino, tra cui Bellinzona, Locarno, Mendrisio e le aree circostanti. Per spostamenti al di fuori di queste aree, contattateci per conoscere la disponibilità.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-brown-100">
                <h3 className="text-xl font-heading font-semibold mb-3">Fornite il materiale di imballaggio?</h3>
                <p className="text-brown-700">
                Sì, offriamo materiali di imballaggio di alta qualità, tra cui scatole, pluriball, carta da imballaggio e contenitori speciali per oggetti delicati. Questi materiali possono essere acquistati separatamente o inclusi nei nostri pacchetti di trasloco completi.
                </p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-brown-100">
                <h3 className="text-xl font-heading font-semibold mb-3">Con quanto anticipo devo prenotare?</h3>
                <p className="text-brown-700">
                Si consiglia di prenotare con almeno 2-3 settimane di anticipo per i traslochi regolari e 3-4 settimane per i traslochi più grandi o durante le stagioni di punta (mesi estivi e fine/inizio mese). Tuttavia, quando possibile, accogliamo anche le richieste dell'ultimo minuto.
                </p>
              </div>
              
              {/* FAQ Item 4 */}
              
              
              {/* FAQ Item 5 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-brown-100">
                <h3 className="text-xl font-heading font-semibold mb-3">Quali articoli accettate per le donazioni?</h3>
                <p className="text-brown-700">
                Per il nostro servizio di decluttering, accettiamo mobili, decorazioni, abbigliamento e articoli per la casa in buone condizioni. Gli articoli accettati per la donazione alla nostra boutique devono essere puliti, funzionali e avere un valore di rivendita. Possiamo discutere i dettagli durante la nostra valutazione.
                </p>
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
            Pronti per un trasloco senza stress?
            </h2>
            <p className="text-xl mb-10">
            Contattateci oggi stesso per discutere le vostre esigenze di trasloco e ottenere un preventivo personalizzato.
            </p>
            <Link to="/contact" className="btn bg-white text-emerald-700 hover:bg-cream">
            Richiedi un preventivo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Define Star component
const Star = ({ size, fill, stroke }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={fill || "none"} 
    stroke={stroke || "currentColor"} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default MovingServices;