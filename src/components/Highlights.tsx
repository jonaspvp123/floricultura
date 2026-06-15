import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const arranjos = [
  {
    title: "Ramalhetes Personalizados",
    img: "https://images.unsplash.com/photo-1591886960571-74d15c6147bb?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-8 lg:col-span-8"
  },
  {
    title: "Orquídeas Finas",
    img: "https://images.unsplash.com/photo-1508611130325-10493863d596?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-4 lg:col-span-4"
  },
  {
    title: "Coroas Funerárias",
    img: "https://images.unsplash.com/photo-1627883226792-75ca4937bf26?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-4 lg:col-span-4"
  },
  {
    title: "Presentes Especiais",
    img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-4 lg:col-span-4"
  },
  {
    title: "Arranjos Florais Premium",
    img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-4 lg:col-span-4"
  }
];

export default function Highlights() {
  return (
    <section id="destaques" className="py-24 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-semibold tracking-[2px] uppercase text-[11px] mb-3 block">Nossas Especialidades</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A]">Criações Exclusivas</h2>
          <p className="mt-4 text-[#666666] max-w-2xl mx-auto font-light text-[14px] leading-relaxed">
            Da delicadeza das orquídeas à imponência dos arranjos especiais, trazemos a essência da natureza para seus melhores momentos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {arranjos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-[20px] cursor-pointer ${item.colSpan} h-[350px] shadow-sm hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300`}
            >
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-300 z-10" />
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex justify-between items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h3 className="text-[13px] font-semibold uppercase tracking-[1px] text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contato" className="inline-block text-[#1A1A1A] font-bold text-[12px] uppercase tracking-[1px] hover:text-[#D4AF37] transition-colors border-b border-[#1A1A1A] hover:border-[#D4AF37] pb-1">
            Visualizar catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
}
