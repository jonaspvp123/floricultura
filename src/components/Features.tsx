import { motion } from 'motion/react';
import { ShieldCheck, Heart, Truck, Leaf, Flower2, Gem } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
    title: "Desde 1999",
    desc: "Mais de duas décadas de tradição, entregando qualidade, beleza e segurança em cada pedido."
  },
  {
    icon: <Heart className="w-6 h-6 text-[#D4AF37]" />,
    title: "Atendimento Especializado",
    desc: "Aconselhamento humanizado para ajudar você a escolher as flores perfeitas para sua ocasião."
  },
  {
    icon: <Truck className="w-6 h-6 text-[#D4AF37]" />,
    title: "Entrega Rápida",
    desc: "Logística ágil e cuidadosa para garantir que seu arranjo chegue impecável ao destino."
  },
  {
    icon: <Leaf className="w-6 h-6 text-[#D4AF37]" />,
    title: "Flores Sempre Frescas",
    desc: "Trabalhamos com os melhores produtores, garantindo flores exuberantes e máxima duração."
  },
  {
    icon: <Flower2 className="w-6 h-6 text-[#D4AF37]" />,
    title: "Diversidade de Produtos",
    desc: "Orquídeas, ramalhetes, coroas, vasos e decorações desenvolvidas para todos os gostos."
  },
  {
    icon: <Gem className="w-6 h-6 text-[#D4AF37]" />,
    title: "Qualidade Premium",
    desc: "Cuidado absoluto nos detalhes: fitas, papeis, acabamentos e estética superior."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-[#FDFCFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-semibold tracking-[2px] uppercase text-[11px] mb-3 block">Excelência</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A]">Nossos Diferenciais</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[16px] bg-white border border-[#F0EAE5] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 relative group"
            >
              <div className="w-14 h-14 bg-[#FFF5F7] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-[18px] font-semibold text-[#1A1A1A] mb-3">{feature.title}</h3>
              <p className="text-[#666666] font-[400] text-[14px] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
