import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, MapPin, Users, Zap, Camera, Send, CheckCircle2, Wind, Search, X, Calendar } from 'lucide-react';



import img1 from './assets/1.jpeg';
import img2 from './assets/2.jpeg';
import img3 from './assets/3.jpeg';
import img4 from './assets/4.jpeg';

const Benefits = [
  { icon: <Wind className="w-6 h-6 text-brand-600" />, text: "A/C" },
  { icon: <Wifi className="w-6 h-6 text-brand-600" />, text: "High-Speed Wi-Fi" },
  { icon: <MapPin className="w-6 h-6 text-brand-600" />, text: "Κέντρο Λαμίας" },
  { icon: <Zap className="w-6 h-6 text-brand-600" />, text: "Ήσυχο Περιβάλλον" },
];

const galleryImages = [img1, img2, img3, img4];

export default function App() {
  const [useSpace, setUseSpace] = useState('yes');
  const [selectedImage, setSelectedImage] = useState(null);

  return (

    <div className="min-h-screen font-sans text-slate-800 bg-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32 flex items-center justify-center border-b border-slate-100">
        <div className="container mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-bold mb-8 border border-slate-200">
                    <Calendar className="w-4 h-4 text-brand-600" />
                    Στόχος έναρξης: Θερινή περίοδος (6 Ιουνίου)
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-widest uppercase">
                    STUDY HUB <br /> <span className="text-brand-600">ΑΡΙΣΤΕΥΕΙΝ</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl mx-auto">
                    Ένας ήσυχος χώρος μελέτης στο κέντρο της Λαμίας.
                </p>


                <div className="flex flex-col items-center gap-6">
                    <p className="text-lg font-medium text-slate-700">Ενδιαφέρεσαι να υπάρχει StudyHub στη Λαμία;</p>
                    <a 
                        href="#form" 
                        className="bg-brand-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-100"
                    >
                        Συμπλήρωσε τη φόρμα
                    </a>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                          Συγκέντρωση και <span className="text-brand-600">Παραγωγικότητα.</span>
                      </h2>
                      <p className="text-lg text-slate-600 leading-relaxed">
                          Το StudyHub θα βρίσκεται στο κέντρο της Λαμίας, σε έναν χώρο σχεδιασμένο για να προσφέρει την απόλυτη εμπειρία μελέτης.
                      </p>
                      
                      <div className="flex items-center gap-4 text-slate-700">
                        <MapPin className="text-brand-600 w-5 h-5" />
                        <a href="https://maps.app.goo.gl/bWHaMEZQEs5Y3ATeA" className="font-semibold text-lg">Πλ. Ελευθερίας 3, Λαμία</a>
                      </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Benefits.map((benefit, i) => (
                          <div 
                            key={i} 
                            className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm"
                          >
                              <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-4 text-brand-600">
                                  {benefit.icon}
                              </div>
                              <h3 className="text-lg font-bold text-slate-900">{benefit.text}</h3>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Μέσα στον χώρο</h2>
              <p className="text-lg text-slate-500 max-w-xl mx-auto">Preview του μελλοντικού StudyHub στην καρδιά της πόλης.</p>
          </div>
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {galleryImages.map((img, i) => (
                      <div 
                        key={i} 
                        onClick={() => setSelectedImage(img)}
                        className="aspect-[4/5] bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 font-medium border border-slate-200 overflow-hidden cursor-pointer"
                      >
                          <img 
                            src={img} 
                            alt={`StudyHub preview ${i + 1}`} 
                            className="w-full h-full object-cover" 
                          />
                      </div>
                  ))}

              </div>
          </div>

      </section>

      {/* Form Section */}
      <section id="form" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-2xl">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl">
                  <div className="text-center mb-10">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Θα διάβαζες στο κέντρο της Λαμίας;</h2>
                  </div>

                  <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                      <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
                      
                      <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Όνομα</label>
                          <input 
                              name="name" 
                              placeholder="Ονοματεπώνυμο" 
                              className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all"
                              required 
                          />
                      </div>

                      <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Email</label>
                          <input 
                              name="email" 
                              type="email" 
                              placeholder="hello@example.com" 
                              className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all"
                              required 
                          />
                      </div>

                      <div className="space-y-4 pt-2">
                          <p className="text-sm font-bold text-slate-700">Θα χρησιμοποιούσες έναν τέτοιο χώρο στη Λαμία;</p>
                          <div className="grid grid-cols-2 gap-4">
                              <input type="hidden" name="use_space" value={useSpace} />
                              <button
                                  type="button"
                                  onClick={() => setUseSpace('yes')}
                                  className={`py-4 rounded-xl font-bold border-2 transition-all ${
                                      useSpace === 'yes' 
                                      ? 'bg-brand-600 border-brand-600 text-white shadow-lg' 
                                      : 'bg-white border-slate-200 text-slate-600 hover:border-brand-200'
                                  }`}
                              >
                                  Ναι, σίγουρα
                              </button>
                              <button
                                  type="button"
                                  onClick={() => setUseSpace('no')}
                                  className={`py-4 rounded-xl font-bold border-2 transition-all ${
                                      useSpace === 'no' 
                                      ? 'bg-brand-600 border-brand-600 text-white shadow-lg' 
                                      : 'bg-white border-slate-200 text-slate-600 hover:border-brand-200'
                                  }`}
                              >
                                  Όχι
                              </button>
                          </div>
                      </div>

                      <button 
                          type="submit"
                          className="w-full bg-slate-900 text-white py-4 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-3"
                      >
                          Υποβολή
                          <Send className="w-5 h-5" />
                      </button>
                  </form>
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white">
          <div className="container mx-auto px-6 text-center space-y-6">
              <div className="text-2xl md:text-3xl font-bold text-slate-900 tracking-widest uppercase">
                  STUDY HUB <span className="text-slate-300 font-light mx-2">/</span> <span className="text-brand-600">ΑΡΙΣΤΕΥΕΙΝ</span>
              </div>
              
              <div className="pt-8 border-t border-slate-100 text-slate-300 text-xs font-bold uppercase tracking-widest">
                  © 2026 STUDY HUB / ΑΡΙΣΤΕΥΕΙΝ Λαμίας.
              </div>
          </div>
      </footer>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
          {selectedImage && (
              <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedImage(null)}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-zoom-out"
              >
                  <button 
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-6 right-6 text-white hover:text-slate-300 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all z-10"
                  >
                      <X className="w-8 h-8" />
                  </button>
                  <motion.img 
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.95 }}
                      src={selectedImage} 
                      alt="Expanded view" 
                      className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                  />
              </motion.div>
          )}
      </AnimatePresence>
    </div>
  )
}



