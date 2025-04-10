import React from 'react';
import { FileSpreadsheet, ArrowRight, Building2, RefreshCw, Database, Scissors, KeyboardIcon, Phone, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-stone-900 to-stone-800 text-stone-100 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000"
            alt="Financial background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif mb-6">Professional Tally Solutions</h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl mb-12 text-stone-300 font-light leading-relaxed">
              We help businesses manage their finances better with expert Tally services.
            </p>
            <a href="#contact" className="inline-flex items-center bg-amber-600 text-stone-100 px-8 py-4 rounded-sm font-semibold hover:bg-amber-700 transition-colors">
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Building2 size={32} />}
              title="New Company Creation"
              description="We set up and configure your company in Tally with proper accounting structure."
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600"
            />
            <ServiceCard
              icon={<RefreshCw size={32} />}
              title="Tally Updates"
              description="We keep your Tally software up to date with the latest features and rules."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
            />
            <ServiceCard
              icon={<Database size={32} />}
              title="Data Migration"
              description="We safely move your financial data between different versions or systems."
              image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600"
            />
            <ServiceCard
              icon={<Scissors size={32} />}
              title="Company Split"
              description="We help divide company data when needed, following all rules and requirements."
              image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600"
            />
            <ServiceCard
              icon={<KeyboardIcon size={32} />}
              title="Data Entry"
              description="We handle your data entry needs with care and accuracy."
              image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600"
            />
            <ServiceCard
              icon={<FileSpreadsheet size={32} />}
              title="Financial Advice"
              description="We help you use Tally better to manage your business finances."
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                  alt="Professional office environment"
                  className="rounded-sm shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-serif mb-4">Why Choose Us</h2>
                <div className="w-24 h-1 bg-amber-600 mb-12 mx-auto md:mx-0"></div>
                <p className="text-stone-700 text-lg leading-relaxed mb-8">
                  We've been working with Tally for many years, helping businesses of all sizes. 
                  We take pride in our work and make sure every project is done right. Whether you 
                  need help with setup, data handling, or support, we're here to help with all your 
                  Tally needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="relative bg-stone-900 text-stone-100 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Contact background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-16"></div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center bg-stone-800/50 p-6 rounded-sm backdrop-blur-sm">
                <div className="w-16 h-16 bg-amber-600 rounded-sm flex items-center justify-center mr-6">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-2">Kedar D. Butala</h3>
                  <p className="text-stone-300">WhatsApp & Phone: +91 9890221133</p>
                </div>
              </div>
              <div className="flex items-center bg-stone-800/50 p-6 rounded-sm backdrop-blur-sm">
                <div className="w-16 h-16 bg-amber-600 rounded-sm flex items-center justify-center mr-6">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-2">Email</h3>
                  <a href="mailto:kedar.butala@gmail.com" className="text-stone-300 hover:text-amber-600 transition-colors">
                    kedar.butala@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800 py-8">
        <div className="container mx-auto px-4 text-center text-stone-400">
          <p className="font-serif">© {new Date().getFullYear()} Tally Solutions by Kedar Butala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description, image }) {
  return (
    <div className="bg-white rounded-sm shadow-md hover:shadow-xl transition-shadow border border-stone-200 overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-8">
        <div className="text-amber-600 mb-6">{icon}</div>
        <h3 className="text-2xl font-serif mb-4">{title}</h3>
        <p className="text-stone-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default App;