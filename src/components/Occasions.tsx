import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const occasions = [
  { title: "Aniversários", img: "https://images.unsplash.com/photo-1542458428-21d3fca85dec?q=80&w=800&auto=format&fit=crop" },
  { title: "Casamentos", img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800&auto=format&fit=crop" },
  { title: "Datas Comemorativas", img: "https://images.unsplash.com/photo-1558231221-cda317de9017?q=80&w=800&auto=format&fit=crop" },
  { title: "Homenagens", img: "https://images.unsplash.com/photo-1494955870715-ddca9dd62aa1?q=80&w=800&auto=format&fit=crop" },
  { title: "Coroas Funerárias", img: "https://images.unsplash.com/photo-1608889476518-738c6b1dc0c6?q=80&w=800&auto=format&fit=crop" },
  { title: "Presentes Românticos", img: "https://images.unsplash.com/photo-1518086055598-6eef927282b0?q=80&w=800&auto=format&fit=crop" }
];

export default function Occasions() {
  return (
    <section id="ocasioes" className="py-24 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <span className="text-[#D4AF37] font-semibold tracking-[2px] uppercase text-[11px] mb-3 block">Momentos Únicos</span>
            <h2 className="font-serif text-[42px] text-[#1A1A1A]">Para toda Ocasião</h2>
          </div>
          <p className="text-[#666666] font-[400] text-[14px] max-w-md leading-relaxed">
            Independente de qual seja o sentimento, nós temos a linguagem floral perfeita para transmiti-lo com sofisticação.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {occasions.map((occ, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[250px] md:h-[300px] overflow-hidden rounded-[20px] cursor-pointer shadow-sm hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-300 z-10" />
              <img 
                src={occ.img} 
                alt={occ.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-300 ease-out" 
              />
              <div className="absolute left-0 right-0 bottom-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-[13px] font-semibold uppercase tracking-[1px] text-white">
                  {occ.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
