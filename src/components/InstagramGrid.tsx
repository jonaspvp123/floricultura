import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const posts = [
  "https://images.unsplash.com/photo-1490262100803-d6cfa98b6da2?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542458428-21d3fca85dec?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?q=80&w=400&auto=format&fit=crop"
];

export default function InstagramGrid() {
  return (
    <section className="py-24 bg-[#FDFCFB] border-t border-[#F0EAE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
        >
          <div className="text-center md:text-left">
            <h2 className="font-serif text-[32px] text-[#1A1A1A] flex items-center justify-center md:justify-start gap-3">
              <Instagram className="w-8 h-8 text-[#D4AF37]" />
              @floricultura_arcoiris
            </h2>
            <p className="mt-2 text-[#666666] font-[400]">Acompanhe nossas criações diárias e bastidores.</p>
          </div>
          
          <a 
            href="#"
            className="flex items-center justify-center gap-2 bg-white border border-[#E2E8F0] text-[#1A1A1A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#F8F4FF] transition-all shadow-sm"
          >
            Seguir no Instagram
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {posts.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="aspect-square relative overflow-hidden rounded-[16px] group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <img 
                src={img} 
                alt="Instagram post" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
