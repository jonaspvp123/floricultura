import { Flower2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FDFCFB] text-[#666666] py-12 border-t border-[#F0EAE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start group">
          <h2 className="font-serif text-[24px] font-bold text-[#1A1A1A] flex items-center gap-1">
            Arco <span className="text-[#D4AF37]">Íris</span>
          </h2>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mt-1">
            Desde 1999
          </span>
        </div>
        
        <div className="text-[13px] font-[400]">
          &copy; {new Date().getFullYear()} Floricultura Arco Íris.<br className="md:hidden" /> Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
