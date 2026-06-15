import { motion } from 'motion/react';
import { Phone, Menu, X, Flower2 } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-[10px] border-b border-[#F0EAE5] transition-all shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex flex-col cursor-pointer">
            <h1 className="font-serif text-[24px] font-bold text-[#1A1A1A] flex items-center gap-1">
              Arco <span className="text-[#D4AF37]">Íris</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#destaques" className="text-[12px] uppercase tracking-[1px] font-semibold text-[#1A1A1A] hover:text-[#D4AF37] transition-colors">Destaques</a>
            <a href="#galeria" className="text-[12px] uppercase tracking-[1px] font-semibold text-[#1A1A1A] hover:text-[#D4AF37] transition-colors">Galeria</a>
            <a href="#ocasioes" className="text-[12px] uppercase tracking-[1px] font-semibold text-[#1A1A1A] hover:text-[#D4AF37] transition-colors">Ocasiões</a>
            <a href="#depoimentos" className="text-[12px] uppercase tracking-[1px] font-semibold text-[#1A1A1A] hover:text-[#D4AF37] transition-colors">Depoimentos</a>
          </nav>

          {/* WhatsApp Button Desktop */}
          <div className="hidden md:flex">
            <a 
              href="#contato"
              className="flex items-center gap-2 bg-[#D4AF37] text-white px-6 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(212,175,55,0.3)] transition-all"
            >
              <Phone className="w-4 h-4" />
              Encomendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#1A1A1A]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-[#F0EAE5] px-4 pt-2 pb-6 flex flex-col gap-4 shadow-xl"
        >
          <a href="#destaques" onClick={() => setIsOpen(false)} className="text-[12px] uppercase tracking-[1px] font-semibold text-[#1A1A1A] py-2">Destaques</a>
          <a href="#galeria" onClick={() => setIsOpen(false)} className="text-[12px] uppercase tracking-[1px] font-semibold text-[#1A1A1A] py-2">Galeria</a>
          <a href="#ocasioes" onClick={() => setIsOpen(false)} className="text-[12px] uppercase tracking-[1px] font-semibold text-[#1A1A1A] py-2">Ocasiões</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="text-[12px] uppercase tracking-[1px] font-semibold text-[#1A1A1A] py-2">Contato</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 bg-[#D4AF37] text-white px-5 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest mt-2">
            <Phone className="w-4 h-4" />
            Encomendar
          </a>
        </motion.div>
      )}
    </header>
  );
}
