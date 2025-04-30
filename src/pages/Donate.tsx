import React from 'react';
import { Heart, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Donate = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="wood-texture py-20">
        <div className="container-custom text-center">
          <Heart className="text-emerald-700 mx-auto mb-6" size={48} />
          <h1 className="section-title">Donate & Support Local</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Give your pre-loved items a second life and support our community initiatives
          </p>
        </div>
      </section>

      {/* Donation Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">How to Donate</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A simple process with a big impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-700 text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Prepare Your Items</h3>
              <p className="text-brown-700">
                Clean and organize items you wish to donate. Check our acceptance guidelines below to ensure your items qualify.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-700 text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Contact Us</h3>
              <p className="text-brown-700">
                Fill out our donation form, call us, or send photos via WhatsApp. For large items, we can schedule a free assessment.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-700 text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Drop Off or Pick Up</h3>
              <p className="text-brown-700">
                Bring items to our boutique during donation hours, or schedule a pickup for larger items (free for substantial donations).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Accept */}
      <section className="py-20 bg-cream-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Items We Accept
              </h2>
              <p className="text-brown-700 mb-8">
                We focus on quality items in good condition that can be resold in our boutique. 
                All proceeds support our community initiatives.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-700 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-lg">Furniture</h4>
                    <p className="text-brown-700">
                      Vintage, antique, and contemporary pieces in good condition. Wood furniture, 
                      tables, chairs, cabinets, bookshelves, etc.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-700 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-lg">Home Decor</h4>
                    <p className="text-brown-700">
                      Lamps, mirrors, artwork, vases, decorative objects, picture frames, and vintage accessories.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-700 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-lg">Clothing & Accessories</h4>
                    <p className="text-brown-700">
                      Quality clothing, designer items, vintage pieces, shoes, bags, and jewelry in excellent condition.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-700 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-lg">Books & Media</h4>
                    <p className="text-brown-700">
                      Books in good condition, particularly hardcovers, art books, and vintage editions. Vinyl records and vintage media.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-700 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-lg">Kitchenware</h4>
                    <p className="text-brown-700">
                      Quality cookware, dinnerware sets, vintage kitchen items, and unique culinary tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Items We Cannot Accept
              </h2>
              <p className="text-brown-700 mb-8">
                For various reasons including safety, hygiene, and resale potential, 
                we are unable to accept the following items:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-lg">Damaged or Broken Items</h4>
                    <p className="text-brown-700">
                      Items with significant damage, missing parts, or requiring major repairs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-lg">Mattresses & Bedding</h4>
                    <p className="text-brown-700">
                      For hygiene reasons, we cannot accept used mattresses, pillows, duvets, or bedding.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-lg">Certain Electronics</h4>
                    <p className="text-brown-700">
                      Old CRT TVs, non-working appliances, obsolete technology, and damaged electronics.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-lg">Hazardous Materials</h4>
                    <p className="text-brown-700">
                      Paint, chemicals, building materials containing asbestos or lead, or any toxic substances.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-lg">Heavily Used or Stained Items</h4>
                    <p className="text-brown-700">
                      Clothing with stains, tears, or excessive wear; furniture with significant upholstery issues.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-brown-100 p-6 rounded-lg">
                <p className="text-brown-800 italic">
                  If you're unsure whether we can accept a particular item, please send us photos
                  via WhatsApp or email before bringing it in. We're happy to help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Your Donation's Impact</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              How your contributions make a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden h-80">
              <img 
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" 
                alt="Community Support"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6">
                Supporting Local Initiatives
              </h3>
              <p className="text-brown-700 mb-4">
                Your donations make a triple impact: they reduce waste, provide affordable goods to the community, and support local social initiatives. A portion of our proceeds goes to:
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-emerald-100 rounded-full p-1 mt-1 mr-3">
                    <Heart className="text-emerald-700" size={16} />
                  </div>
                  <p>
                    <span className="font-medium">Local Food Bank</span> - Providing meals to families in need throughout Ticino
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 rounded-full p-1 mt-1 mr-3">
                    <Heart className="text-emerald-700" size={16} />
                  </div>
                  <p>
                    <span className="font-medium">Youth Arts Program</span> - Supporting creative education for underprivileged children
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 rounded-full p-1 mt-1 mr-3">
                    <Heart className="text-emerald-700" size={16} />
                  </div>
                  <p>
                    <span className="font-medium">Senior Community Center</span> - Funding activities and resources for local seniors
                  </p>
                </li>
              </ul>
              
              <p className="italic text-brown-700">
                "Each donation, no matter how small, helps build a stronger, more sustainable community."
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-brown-50 p-8 rounded-lg shadow-sm border border-brown-100">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="md:mr-8 mb-6 md:mb-0">
                <Clock className="text-emerald-700" size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-2">Donation Hours</h3>
                <p className="text-brown-700 mb-4">
                  We accept drop-off donations during these dedicated hours when our staff is available to assist you:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <li>
                    <span className="font-medium">Monday - Wednesday:</span>
                    <br /> 10:00 AM - 12:00 PM
                  </li>
                  <li>
                    <span className="font-medium">Thursday - Friday:</span>
                    <br /> 2:00 PM - 5:00 PM
                  </li>
                  <li>
                    <span className="font-medium">Saturday:</span>
                    <br /> 10:00 AM - 2:00 PM
                  </li>
                </ul>
                <p className="mt-4 text-brown-600 italic">
                  For donations outside these hours or to schedule a pickup, please contact us in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">
                Ready to Donate?
              </h2>
              <p className="text-xl mb-6">
                Fill out our quick form to let us know what you'd like to donate, or contact us directly.
              </p>
              <p className="mb-8">
                For large items or multiple pieces, we offer free pickup services within Lugano and surrounding areas. 
                Photos are helpful for us to assess items beforehand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn bg-white text-emerald-700 hover:bg-cream">
                  Contact Us
                </Link>
                <a 
                  href="https://wa.me/41912345678" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border-2 border-white hover:bg-emerald-800 flex items-center justify-center"
                >
                  <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            <div className="bg-white text-brown-900 p-8 rounded-lg shadow-lg">
              <h3 className="font-heading text-2xl font-semibold mb-6">Donation Form</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="items" className="block text-sm font-medium mb-2">Items to Donate *</label>
                  <textarea
                    id="items"
                    rows={4}
                    className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Please describe the items you wish to donate (type, condition, quantity, etc.)"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Donation Method</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="method" className="mr-2" value="dropoff" defaultChecked />
                      <span>I'll drop off items at the boutique</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="method" className="mr-2" value="pickup" />
                      <span>I'd like to request a pickup</span>
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-700 text-white py-3 rounded-md hover:bg-emerald-800 transition-colors"
                >
                  Submit Donation Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;