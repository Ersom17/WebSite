import React, { useState } from 'react';
import { Star, Search, Filter } from 'lucide-react';

// Define categories for filtering
const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'furniture', name: 'Furniture' },
  { id: 'lighting', name: 'Lighting' },
  { id: 'decor', name: 'Decor' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'art', name: 'Artwork' },
];

// Sample product data
const products = [
  {
    id: 1,
    name: 'Antique Oak Cabinet',
    category: 'furniture',
    originalPrice: 620,
    currentPrice: 248,
    discount: 60,
    rating: 5,
    description: 'Beautifully preserved oak cabinet with original brass hardware, circa 1920s.',
    image: 'https://images.pexels.com/photos/2275294/pexels-photo-2275294.jpeg',
  },
  {
    id: 2,
    name: 'Mid-Century Armchair',
    category: 'furniture',
    originalPrice: 450,
    currentPrice: 249,
    discount: 45,
    rating: 4,
    description: 'Elegant mid-century modern armchair with newly reupholstered green velvet.',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
  },
  {
    id: 3,
    name: 'Vintage Pendant Lamp',
    category: 'lighting',
    originalPrice: 180,
    currentPrice: 126,
    discount: 30,
    rating: 5,
    description: 'Hand-blown glass pendant lamp with brass accents, restored and rewired.',
    image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg',
  },
  {
    id: 4,
    name: 'Retro Record Player',
    category: 'decor',
    originalPrice: 350,
    currentPrice: 245,
    discount: 30,
    rating: 4,
    description: 'Fully functional vintage record player, carefully restored with new components.',
    image: 'https://images.pexels.com/photos/6195090/pexels-photo-6195090.jpeg',
  },
  {
    id: 5,
    name: 'Antique Writing Desk',
    category: 'furniture',
    originalPrice: 520,
    currentPrice: 364,
    discount: 30,
    rating: 5,
    description: 'Elegant writing desk with inlaid wood details and original leather top.',
    image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg',
  },
  {
    id: 6,
    name: 'Vintage Oil Painting',
    category: 'art',
    originalPrice: 280,
    currentPrice: 168,
    discount: 40,
    rating: 5,
    description: 'Charming landscape oil painting in ornate gilt frame, signed by the artist.',
    image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg',
  },
  {
    id: 7,
    name: 'Retro Wall Clock',
    category: 'decor',
    originalPrice: 120,
    currentPrice: 72,
    discount: 40,
    rating: 4,
    description: 'Authentic 1950s starburst wall clock, fully functional with new movement.',
    image: 'https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg',
  },
  {
    id: 8,
    name: 'Vintage Designer Jacket',
    category: 'clothing',
    originalPrice: 380,
    currentPrice: 190,
    discount: 50,
    rating: 5,
    description: 'Rare vintage designer jacket in excellent condition, perfect for collectors.',
    image: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg',
  },
  {
    id: 9,
    name: 'Antique Side Table',
    category: 'furniture',
    originalPrice: 290,
    currentPrice: 174,
    discount: 40,
    rating: 4,
    description: 'Beautiful mahogany side table with carved details and original finish.',
    image: 'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg',
  },
];

const Boutique = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter products based on active category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16">
      {/* Boutique Hero */}
      <section className="bg-brown-100 py-16">
        <div className="container-custom">
          <h1 className="section-title text-center">La nostra collezione vintage</h1>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
          Ogni pezzo racconta una storia e dà carattere al vostro spazio.
          </p>
          
          {/* Search and Filter Bar */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search our collection..."
                  className="w-full py-3 pl-12 pr-4 rounded-lg border border-brown-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brown-400" size={20} />
              </div>
              <button 
                className="md:w-auto w-full py-3 px-6 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={20} />
                <span>Filters</span>
              </button>
            </div>
            
            {/* Category Filters */}
            <div className={`mt-4 flex flex-wrap gap-2 transition-all duration-300 ${showFilters ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-40 md:opacity-100 overflow-hidden'}`}>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-emerald-700 text-white'
                      : 'bg-white border border-brown-300 text-brown-700 hover:bg-brown-50'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Grid */}
      <section className="py-16">
        <div className="container-custom">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-heading mb-4">No items found</h3>
              <p className="text-brown-600 mb-6">
              Non abbiamo trovato nessun articolo che corrisponda ai tuoi criteri di ricerca.
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
               Cancella i filtri
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="vintage-border rounded-lg overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-700 text-white text-sm px-3 py-1 rounded-full">
                      -{product.discount}%
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-brown-400 line-through text-sm">CHF {product.originalPrice}</span>
                        <span className="text-emerald-700 font-bold ml-2">CHF {product.currentPrice}</span>
                      </div>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            fill={i < product.rating ? "currentColor" : "none"}
                            stroke="currentColor"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-brown-600 mb-4">
                      {product.description}
                    </p>
                    <button 
                      className="block w-full text-center py-2 border border-emerald-700 text-emerald-700 rounded hover:bg-emerald-50 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Store Information */}
      <section className="bg-cream-dark py-16">
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
                    <p>Phone: +41 91 234 56 78</p>
                    <p>Email: info@vintagio.com</p>
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



      
    </div>
  );
};

export default Boutique;