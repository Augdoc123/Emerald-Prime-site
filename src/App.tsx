/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Diamond, 
  Stethoscope, 
  Stethoscope as StethoscopeIcon, 
  Database, 
  Pill, 
  FlaskConical, 
  MonitorSmartphone, 
  ShieldCheck, 
  Zap, 
  Users, 
  ChevronRight,
  Menu,
  X,
  CreditCard,
  Headphones,
  BookOpen,
  Server,
  Search,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "EMR Solutions",
    description: "Streamlined Electronic Medical Records designed for speed and accuracy. Manage patient history, clinical notes, and prescriptions with ease.",
    icon: Database,
    color: "bg-midnight-green"
  },
  {
    title: "Pharmacy Management & POS",
    description: "Advanced inventory tracking, stock alerts, and high-speed checkout specifically built for modern retail pharmacies.",
    icon: Pill,
    color: "bg-royal-blue"
  },
  {
    title: "Medical Lab Software",
    description: "Efficient laboratory information systems for test tracking, automated reports, and patient notification systems.",
    icon: FlaskConical,
    color: "bg-emerald-green"
  }
];

const ictServices = [
  {
    title: "Tech Support",
    description: "24/7 dedicated support for all our clinical and retail software platforms.",
    icon: Headphones
  },
  {
    title: "Professional Training",
    description: "On-site and remote training for medical staff to ensure 100% platform competency.",
    icon: BookOpen
  },
  {
    title: "Hardware Supply",
    description: "End-to-end supply of POS terminals, label printers, and clinical workstations.",
    icon: Server
  },
  {
    title: "Med ICT Consultancy",
    description: "Strategic advice on infrastructure, data migration, and healthcare digitization.",
    icon: Search
  }
];

const features = [
  {
    title: "Cloud-Based & Offline",
    description: "Access your data anywhere, with smart syncing that works even in locations with limited connectivity.",
    icon: MonitorSmartphone
  },
  {
    title: "Data Security",
    description: "HIPAA-aligned encryption and secure database backups ensure patient confidentiality is never compromised.",
    icon: ShieldCheck
  },
  {
    title: "Fast Implementation",
    description: "Our solutions are modular and ready to deploy, getting your facility digital in weeks, not months.",
    icon: Zap
  },
  {
    title: "Client-Centric Design",
    description: "Intuitive interfaces that medical professionals actually enjoy using, reducing training time and burnout.",
    icon: Users
  }
];

function EmeraldLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-[0_4px_10px_rgba(80,200,120,0.2)]">
        <defs>
          <linearGradient id="g-top-center" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a3f7bf" />
            <stop offset="100%" stopColor="#2ecc71" />
          </linearGradient>
          <linearGradient id="g-top-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5cf29d" />
            <stop offset="100%" stopColor="#27ae60" />
          </linearGradient>
          <linearGradient id="g-top-right" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5cf29d" />
            <stop offset="100%" stopColor="#1e8449" />
          </linearGradient>
          <linearGradient id="g-mid-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2ecc71" />
            <stop offset="100%" stopColor="#145a32" />
          </linearGradient>
          <linearGradient id="g-mid-right" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#27ae60" />
            <stop offset="100%" stopColor="#0d3e1e" />
          </linearGradient>
          <linearGradient id="g-lower-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e8449" />
            <stop offset="100%" stopColor="#0a2a14" />
          </linearGradient>
          <linearGradient id="g-lower-right" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#145a32" />
            <stop offset="100%" stopColor="#051a0b" />
          </linearGradient>
        </defs>
        
        {/* Facet 1: Top Center */}
        <polygon points="50,5 38,28 62,28" fill="url(#g-top-center)" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
        
        {/* Facet 2: Top Left */}
        <polygon points="50,5 15,30 38,28" fill="url(#g-top-left)" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
        
        {/* Facet 3: Top Right */}
        <polygon points="50,5 85,30 62,28" fill="url(#g-top-right)" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
        
        {/* Facet 4: Upper Mid Left */}
        <polygon points="38,28 15,30 50,65" fill="url(#g-top-center)" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
        
        {/* Facet 5: Upper Mid Right */}
        <polygon points="62,28 85,30 50,65" fill="url(#g-top-center)" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
        
        {/* Facet 6: Lower Mid Left */}
        <polygon points="15,30 15,90 50,65" fill="url(#g-mid-left)" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
        
        {/* Facet 7: Lower Mid Right */}
        <polygon points="85,30 85,90 50,65" fill="url(#g-mid-right)" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
        
        {/* Facet 8: Bottom Left */}
        <polygon points="15,90 50,115 50,65" fill="url(#g-lower-left)" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
        
        {/* Facet 9: Bottom Right */}
        <polygon points="85,90 50,115 50,65" fill="url(#g-lower-right)" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      {/* Superimposed Stethoscope Icon */}
      <Stethoscope className="w-5 h-5 text-white absolute top-[48%] left-[50%] -translate-x-[50%] -translate-y-[50%] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] pointer-events-none transition-transform group-hover:rotate-12" strokeWidth={2.5} />
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-green selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <EmeraldLogo className="w-10 h-10 transition-transform group-hover:scale-110" />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight text-midnight-green uppercase font-display">Emerald</span>
                <span className="text-xs font-semibold tracking-widest text-royal-blue uppercase opacity-80">Prime</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#services" className="hover:text-midnight-green transition-colors">Services</a>
              <a href="#features" className="hover:text-midnight-green transition-colors">Features</a>
              <a href="#about" className="hover:text-midnight-green transition-colors">About Us</a>
              <button className="bg-midnight-green text-white px-6 py-2.5 rounded-full hover:bg-royal-blue transition-all shadow-lg shadow-midnight-green/20">
                Get Started
              </button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-b border-slate-200 px-4 py-6 flex flex-col gap-4 text-center shadow-xl"
            >
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-medium text-slate-600">Services</a>
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-medium text-slate-600">Features</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-medium text-slate-600">About Us</a>
              <button className="bg-midnight-green text-white px-8 py-3 rounded-full font-semibold">
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-green/10 text-emerald-green rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-green animate-pulse" />
              Empowering Healthcare through Technology
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Affordable <span className="text-royal-blue">Medical Software</span> Solutions.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              We build specialized EMR, Pharmacy Management, and Laboratory Information Systems that help medical facilities provide better care without the high enterprise costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-midnight-green text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-royal-blue transition-all shadow-xl shadow-midnight-green/20 flex items-center justify-center gap-2 group">
                Explore Our Apps
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Book a Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-green/20 to-royal-blue/20 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=2070" 
              alt="Medical Software Dashboard"
              className="relative rounded-2xl shadow-2xl border border-slate-200 object-cover w-full aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:flex items-center gap-4 max-w-xs"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-green/10 flex items-center justify-center text-emerald-green">
                <StethoscopeIcon size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-midnight-green">Fast Diagnosis Support</div>
                <div className="text-xs text-slate-500">Integrated AI analytics</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Vertical Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our core software stack is designed to handle the critical operations of healthcare environments with zero friction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-green/20 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-black/5`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 border-b border-transparent group-hover:border-slate-100 pb-2 transition-all">
                  {service.title}
                </h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-royal-blue font-bold text-sm flex items-center gap-2 group/btn cursor-pointer">
                  Learn more <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              Software That Works as <span className="text-emerald-green italic">Hard as You Do.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-midnight-green">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-slate-800">{feature.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="bg-midnight-green rounded-3xl overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1579154235884-331c0ef49460?auto=format&fit=crop&q=80&w=2000" 
                  alt="Modern futuristic lab with technician"
                  className="opacity-40 w-full h-[600px] object-cover mix-blend-luminosity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end text-white">
                  <div className="max-w-md">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-green text-midnight-green rounded text-[10px] font-black uppercase mb-4">
                      Featured Success Story
                    </div>
                    <h3 className="text-3xl font-bold mb-4 leading-tight">Bridging the Gap in Nigerian Healthcare Diagnostics</h3>
                    <p className="text-slate-200 text-sm mb-6 leading-relaxed">
                      Our latest deployment features high-tech lab integration with real-time holographic data visualizations for faster patient triage.
                    </p>
                    <div className="flex items-center gap-4 text-xs font-bold text-emerald-green">
                      <span className="flex items-center gap-1"><CheckCircle2 size={14} /> CLOUD READY</span>
                      <span className="flex items-center gap-1"><CheckCircle2 size={14} /> ISO CERTIFIED</span>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ICT Services Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-midnight-green mb-2">Medical ICT Services</h2>
              <p className="text-slate-600">Beyond software—we provide the complete technology ecosystem.</p>
            </div>
            <button className="text-royal-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View Service Packages <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ictServices.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-royal-blue/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-royal-blue/5 text-royal-blue flex items-center justify-center mb-4">
                  <service.icon size={20} />
                </div>
                <h4 className="font-bold text-midnight-green mb-2">{service.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <div>
              <div className="w-12 h-1 bg-emerald-green mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 italic font-display">Crafting Excellence in <br/><span className="text-royal-blue">Medical Innovation</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Founded on the belief that high-quality medical software should not be a luxury restricted to large hospital chains, 
                <span className="text-midnight-green font-bold uppercase tracking-wider"> Emerald Prime</span> builds tools that empower independent clinics, pharmacies, and labs to deliver exceptional healthcare through modern, efficient, and affordable technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden relative group">
                  <img 
                    src="dr_godwin.jpg" 
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964";
                    }}
                    alt="Dr Godwin Udele"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-green to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-bold">Dr Godwin Udele (MD)</div>
                    <div className="text-[10px] uppercase font-bold text-emerald-green">CEO</div>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-500 italic">"Technology is the heartbeat of modern medicine."</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden relative group">
                  <img 
                    src="mercy_udele.jpg" 
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976";
                    }}
                    alt="Mercy Udele"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-blue to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-bold">Mercy Udele</div>
                    <div className="text-[10px] uppercase font-bold text-sky-400">Project Manager</div>
                  </div>
                </div>
                <div className="p-4 bg-emerald-green text-midnight-green rounded-2xl">
                  <p className="text-xs font-bold leading-tight uppercase">Streamlining Delivery Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Highlight - Lab & Pharmacy */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
           <div className="relative group overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1599493356626-9f79626ca6c1?q=80&w=2070" 
                alt="Nigerian woman in futuristic lab"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-midnight-green/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8 text-center backdrop-blur-sm">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Emerald Med Lab</h4>
                  <p className="text-emerald-green text-sm font-medium">Empowering diagnostics with intelligent reporting interfaces.</p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-white font-bold text-lg bg-black/40 px-4 py-2 rounded-lg backdrop-blur-md">
                Laboratory Visualization
              </div>
           </div>
           <div className="relative group overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=2070" 
                alt="Pharmacy POS Visualization"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-royal-blue/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8 text-center backdrop-blur-sm">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Pharmacy POS</h4>
                  <p className="text-emerald-green text-sm font-medium">Seamless inventory tracking with futuristic hologram-touch support.</p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-white font-bold text-lg bg-black/40 px-4 py-2 rounded-lg backdrop-blur-md">
                Next-Gen Retail Pharmacy
              </div>
           </div>
        </div>
      </section>

      {/* Final Contact Section */}
      <section className="py-20 bg-midnight-green text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 font-display">Get in Touch</h2>
            <p className="text-slate-300 mb-8 max-w-md">
              Have questions about our software or ICT consultancy services? Reach out to our team of experts today.
            </p>
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-emerald-green">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Us</div>
                    <div className="text-lg font-medium hover:text-emerald-green transition-colors cursor-pointer">drgodwinudele@gmail.com</div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-emerald-green">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Call Us</div>
                    <div className="text-lg font-medium">+234 807 942 9527</div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-emerald-green">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</div>
                    <div className="text-lg font-medium">Headquarters: Nigeria</div>
                  </div>
               </div>
            </div>
          </div>
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Inquiry Form</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Full Name" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-green" />
              <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-green" />
            </div>
            <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-green mb-4 text-slate-400">
              <option>Select Service</option>
              <option>EMR Software</option>
              <option>Pharmacy Management</option>
              <option>Lab Systems</option>
              <option>ICT Consultancy</option>
            </select>
            <textarea placeholder="Your Message" rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-green mb-6"></textarea>
            <button className="w-full bg-emerald-green text-midnight-green font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all transform hover:-translate-y-1">
              Send Message <Zap size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-20 pb-10 text-slate-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <EmeraldLogo className="w-10 h-10 scale-75" />
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-bold tracking-tight text-white uppercase font-display">Emerald</span>
                  <span className="text-xs font-semibold tracking-widest text-royal-blue uppercase">Prime</span>
                </div>
              </div>
              <p className="max-w-sm mb-6 text-sm leading-relaxed">
                Making medical software accessible, secure, and user-friendly for healthcare providers of all sizes.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-royal-blue transition-colors cursor-pointer text-white">
                  <MonitorSmartphone size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-royal-blue transition-colors cursor-pointer text-white">
                  <Database size={18} />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Products</h4>
              <ul className="space-y-4 text-sm">
                <li className="hover:text-emerald-green cursor-pointer">Emerald EMR</li>
                <li className="hover:text-emerald-green cursor-pointer">Pharma Inventory</li>
                <li className="hover:text-emerald-green cursor-pointer">LabConnect LIS</li>
                <li className="hover:text-emerald-green cursor-pointer">POS for Health</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li className="hover:text-emerald-green cursor-pointer">Our Mission</li>
                <li className="hover:text-emerald-green cursor-pointer">Case Studies</li>
                <li className="hover:text-emerald-green cursor-pointer">Privacy Policy</li>
                <li className="hover:text-emerald-green cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-xs tracking-widest text-slate-500 uppercase">
            © {new Date().getFullYear()} Emerald Prime Medical Solutions. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
