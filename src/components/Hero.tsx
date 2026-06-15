import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-[#FDFCFB]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCFB] via-[#FDFCFB]/80 to-transparent z-10 md:bg-gradient-to-r md:from-[#FDFCFB] md:via-[#FDFCFB]/60 md:to-transparent" />
        <img 
          src="https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80&w=2629" 
          alt="Arranjo floral premium" 
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center">
        <div className="max-w-2xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#D4AF37] uppercase tracking-[2px] text-[11px] font-semibold mb-6">
              Referência Desde 1999
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1A1A1A] leading-[1.1] mb-6"
          >
            A arte de transformar <br/><span className="italic">sentimentos</span> em flores.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#666666] mb-10 max-w-lg leading-relaxed font-light"
          >
            Elegância, sofisticação e o perfume das flores mais frescas do mercado. Criamos arranjos exclusivos para momentos inesquecíveis.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contato"
              className="group flex items-center justify-center gap-2 bg-[#4A6741] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(74,103,65,0.3)] transition-all"
            >
              <Phone className="w-4 h-4 group-hover:animate-pulse" />
              WhatsApp
            </a>
            <a 
              href="#destaques"
              className="group flex items-center justify-center gap-2 bg-white border border-[#E2E8F0] text-[#1A1A1A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#F8F4FF] transition-all shadow-sm"
            >
              Ver Produtos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
