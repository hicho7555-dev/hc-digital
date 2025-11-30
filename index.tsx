import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ArrowRight, Instagram, Facebook, Monitor, Code, PenTool, Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

// --- Translations ---
const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      contact: "Contact",
      cta: "Get Started"
    },
    hero: {
      title: "Enhance Your Digital Presence",
      subtitle: "We craft professional, high-performance websites for visionaries who want to build their brand and leave a lasting mark.",
      btnPrimary: "View Services",
      btnSecondary: "Contact Us"
    },
    services: {
      title: "Our Expertise",
      desc: "Comprehensive digital solutions tailored to your business goals.",
      cards: [
        {
          title: "UI/UX Design",
          desc: "User-centric interfaces that engage and convert. We design with empathy and precision.",
          icon: PenTool
        },
        {
          title: "Web Development",
          desc: "Robust, scalable, and fast websites built with modern technologies to future-proof your business.",
          icon: Code
        },
        {
          title: "Brand Identity",
          desc: "Cohesive visual systems that tell your story and resonate with your target audience.",
          icon: Monitor
        }
      ]
    },
    contact: {
      title: "Let's Build Something Great",
      desc: "Ready to transform your digital vision into reality? Reach out to us.",
      form: {
        name: "Your Name",
        email: "Email Address",
        message: "Tell us about your project",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Something went wrong. Please try again."
      },
      info: {
        email: "cheikhhicham007@gmail.com",
        phone: "+213 778 85 55 66",
        address: "Djelfa, Algeria"
      }
    },
    footer: {
      rights: "© 2024 HC Digital. All rights reserved."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      contact: "تواصل معنا",
      cta: "ابدأ الآن"
    },
    hero: {
      title: "عزز حضورك الرقمي",
      subtitle: "نصمم مواقع احترافية وعالية الأداء لأصحاب الرؤى الذين يرغبون في بناء علامتهم التجارية وترك أثر دائم.",
      btnPrimary: "تصفح خدماتنا",
      btnSecondary: "تواصل معنا"
    },
    services: {
      title: "خبراتنا",
      desc: "حلول رقمية شاملة مصممة خصيصاً لتحقيق أهداف عملك.",
      cards: [
        {
          title: "تصميم واجهة المستخدم",
          desc: "واجهات تركز على المستخدم وتجذب العملاء. نصمم بتعاطف ودقة متناهية.",
          icon: PenTool
        },
        {
          title: "تطوير المواقع",
          desc: "مواقع قوية، قابلة للتوسع، وسريعة مبنية بأحدث التقنيات لضمان مستقبل عملك.",
          icon: Code
        },
        {
          title: "الهوية البصرية",
          desc: "أنظمة بصرية متماسكة تروي قصتك وتصل إلى جمهورك المستهدف.",
          icon: Monitor
        }
      ]
    },
    contact: {
      title: "لنبدأ العمل معاً",
      desc: "هل أنت مستعد لتحويل رؤيتك الرقمية إلى واقع؟ تواصل معنا الآن.",
      form: {
        name: "الاسم الكريم",
        email: "البريد الإلكتروني",
        message: "حدثنا عن مشروعك",
        submit: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        success: "تم إرسال الرسالة بنجاح!",
        error: "حدث خطأ ما. يرجى المحاولة مرة أخرى."
      },
      info: {
        email: "cheikhhicham007@gmail.com",
        phone: "+213 778 85 55 66",
        address: "الجلفة، الجزائر"
      }
    },
    footer: {
      rights: "© ٢٠٢٤ إتش سي ديجيتال. جميع الحقوق محفوظة."
    }
  }
};

// --- Components ---

const Logo = () => (
  // Forced LTR to maintain brand lockup (Icon + Text) even in RTL mode
  <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter" dir="ltr">
    <div className="w-8 h-8 bg-orange-600 rounded-sm flex items-center justify-center text-white">
      HC
    </div>
    <span className="text-white">DIGITAL</span>
  </div>
);

const Navbar = ({ lang, setLang, page, setPage, t, isMenuOpen, setIsMenuOpen }) => {
  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
  
  const navLinks = [
    { key: 'home', label: t.nav.home },
    { key: 'services', label: t.nav.services },
    { key: 'contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setPage('home')}>
            <Logo />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => setPage(link.key)}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${page === link.key ? 'text-orange-500' : 'text-zinc-300'}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 border-s border-white/10 ps-6">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <Globe size={16} />
                {lang === 'en' ? 'AR' : 'EN'}
              </button>
              <button 
                onClick={() => setPage('contact')}
                className="bg-white text-black hover:bg-zinc-200 px-4 py-2 rounded-sm text-sm font-bold transition-all"
              >
                {t.nav.cta}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={toggleLang}
                className="flex items-center gap-1 text-xs text-zinc-400"
              >
                <Globe size={14} />
                {lang === 'en' ? 'AR' : 'EN'}
              </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zinc-300 hover:text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => { setPage(link.key); setIsMenuOpen(false); }}
                  className={`block w-full text-start px-3 py-4 text-base font-medium border-b border-white/5 ${page === link.key ? 'text-orange-500' : 'text-zinc-300'}`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 px-3">
                 <button 
                  onClick={() => { setPage('contact'); setIsMenuOpen(false); }}
                  className="w-full bg-orange-600 text-white px-4 py-3 rounded-sm font-bold"
                >
                  {t.nav.cta}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero: React.FC<{ t: any; setPage: any }> = ({ t, setPage }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen flex items-center relative overflow-hidden pt-20"
  >
    {/* Background Effects */}
    <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blob blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blob blur-3xl"></div>
    <div className="absolute inset-0 bg-grid z-0"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div className="max-w-3xl">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
        >
          {t.hero.title.split(' ').map((word: any, i: number) => (
             <span key={i} className={i === 1 || i === 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600' : ''}>
               {word} {' '}
             </span>
          ))}
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 mb-10 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button onClick={() => setPage('services')} className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2 group">
            {t.hero.btnPrimary} <ArrowRight className="group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" size={20} />
          </button>
          <button onClick={() => setPage('contact')} className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white rounded-sm font-bold text-lg transition-all">
            {t.hero.btnSecondary}
          </button>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const Services: React.FC<{ t: any }> = ({ t }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="min-h-screen py-32 relative z-10"
  >
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.services.title}</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{t.services.desc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.services.cards.map((card: any, idx: number) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-orange-500/50 hover:bg-zinc-900 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all"></div>
                
                <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
     </div>
  </motion.div>
);

const Contact: React.FC<{ t: any }> = ({ t }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mwpgvggg", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-32 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none uppercase">
              {t.contact.title}
            </h2>
            <p className="text-xl text-zinc-400 mb-12">
              {t.contact.desc}
            </p>
            
            <div className="space-y-8">
               <div className="flex items-center gap-4 text-zinc-300">
                 <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-orange-500 border border-white/10">
                   <Mail size={20} />
                 </div>
                 <span className="text-lg">{t.contact.info.email}</span>
               </div>
               <div className="flex items-center gap-4 text-zinc-300">
                 <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-orange-500 border border-white/10">
                   <Phone size={20} />
                 </div>
                 <span className="text-lg" dir="ltr">{t.contact.info.phone}</span>
               </div>
               <div className="flex items-center gap-4 text-zinc-300">
                 <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-orange-500 border border-white/10">
                   <MapPin size={20} />
                 </div>
                 <span className="text-lg">{t.contact.info.address}</span>
               </div>
            </div>

            <div className="mt-16">
              <h4 className="text-sm font-bold tracking-widest uppercase text-zinc-500 mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1Bc5rEpeRS/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/hicham_cheikh?igsh=MTRocjhqOGN4ZTE5bw==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-8 md:p-10 rounded-xl border border-white/5 backdrop-blur-sm relative">
            <form className="space-y-6" onSubmit={handleSubmit} action="https://formspree.io/f/mwpgvggg" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">{t.contact.form.name}</label>
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-sm p-4 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all disabled:opacity-50" 
                  disabled={status === 'submitting' || status === 'success'}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">{t.contact.form.email}</label>
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-sm p-4 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all disabled:opacity-50" 
                  disabled={status === 'submitting' || status === 'success'}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">{t.contact.form.message}</label>
                <textarea 
                  name="message"
                  id="message"
                  rows={5} 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-sm p-4 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all disabled:opacity-50"
                  disabled={status === 'submitting' || status === 'success'}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 rounded-sm hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    {t.contact.form.sending}
                  </>
                ) : status === 'success' ? (
                   <>
                    <CheckCircle size={20} />
                    {t.contact.form.success}
                   </>
                ) : (
                  t.contact.form.submit
                )}
              </button>
              
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-sm text-red-500 text-sm flex items-center gap-2"
                >
                  <AlertCircle size={16} />
                  {t.contact.form.error}
                </motion.div>
              )}
              
               {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-sm text-green-500 text-sm flex items-center gap-2"
                >
                  <CheckCircle size={16} />
                  {t.contact.form.success}
                </motion.div>
              )}

            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Footer = ({ t }) => (
  <footer className="border-t border-white/5 py-12 bg-black relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <Logo />
      <p className="text-zinc-500 text-sm">{t.footer.rights}</p>
    </div>
  </footer>
);

// --- Main Application ---

const App = () => {
  const [page, setPage] = useState('home');
  const [lang, setLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} 
      className={`min-h-screen bg-zinc-950 text-white selection:bg-orange-500 selection:text-white ${lang === 'ar' ? 'font-ar' : 'font-en'}`}
    >
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        page={page} 
        setPage={setPage} 
        t={t} 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="relative">
        <AnimatePresence mode="wait">
          {page === 'home' && <Hero key="home" t={t} setPage={setPage} />}
          {page === 'services' && <Services key="services" t={t} />}
          {page === 'contact' && <Contact key="contact" t={t} />}
        </AnimatePresence>
      </main>

      <Footer t={t} />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);