import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Silva",
    text: "O arranjo do meu casamento foi simplesmente perfeito. A equipe da Arco Íris entendeu exatamente o que eu sonhava e entregou uma obra de arte com flores.",
    date: "Há 2 semanas"
  },
  {
    name: "Carlos Eduardo",
    text: "Sempre confio na Arco Íris para os presentes de aniversário da minha esposa. As orquídeas duram meses e o acabamento é impecável.",
    date: "Há 1 mês"
  },
  {
    name: "Fernanda Costa",
    text: "Precisei de uma coroa de flores de última hora. O atendimento humanizado e a entrega rápida mostraram muito profissionalismo nesse momento delicado.",
    date: "Há 2 meses"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#FFF5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-semibold tracking-[2px] uppercase text-[11px] mb-3 block">Reconhecimento</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A]">Nossos Clientes</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[16px] border border-[#F0EAE5] shadow-[0_12px_24px_rgba(0,0,0,0.04)] relative transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex text-[#D4AF37] mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current mr-1" />)}
              </div>
              <p className="text-[#666666] font-serif italic text-[15px] leading-relaxed mb-6">
                "{test.text}"
              </p>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-[#1A1A1A] text-[16px]">{test.name}</span>
                <span className="text-[10px] text-[#666666] uppercase tracking-widest mt-1">{test.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
