import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

const gallery = [
  { img: "https://images.unsplash.com/photo-1582791656463-54cd671c36fc?q=80&w=600&auto=format&fit=crop", style: "row-span-2 col-span-2 md:col-span-1" },
  { img: "https://images.unsplash.com/photo-1490262100803-d6cfa98b6da2?q=80&w=600&auto=format&fit=crop", style: "col-span-1" },
  { img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop", style: "row-span-2 col-span-1" },
  { img: "https://images.unsplash.com/photo-1583095368383-f61b02b54248?q=80&w=600&auto=format&fit=crop", style: "col-span-1" },
  { img: "https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?q=80&w=600&auto=format&fit=crop", style: "col-span-2" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-semibold tracking-[2px] uppercase text-[11px] mb-3 block">Inspire-se</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A]">Galeria Visual</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {gallery.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-[20px] group cursor-pointer shadow-sm hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ${item.style}`}
            >
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-300 z-10" />
              <img 
                src={item.img} 
                alt={`Floricultura Gallery ${idx + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-300 ease-in-out" 
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Camera className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
