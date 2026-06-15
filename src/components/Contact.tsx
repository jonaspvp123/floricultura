import { motion } from 'motion/react';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#FDFCFB] text-[#1A1A1A] border-t border-[#F0EAE5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4AF37] font-semibold tracking-[2px] uppercase text-[11px] mb-3 block">Entre em contato</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Pronto para encomendar?</h2>
            <p className="text-[#666666] font-[400] text-[14px] leading-relaxed mb-10 max-w-md">
              Encante alguém especial ou adorne seu evento com nossos arranjos. Fale conosco diretamente pelo WhatsApp para um atendimento personalizado.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF5F7] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-[12px] uppercase tracking-widest text-[#D4AF37] font-bold mb-1">WhatsApp / Telefone</h4>
                  <p className="text-[16px] font-[500] text-[#1A1A1A]">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF5F7] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-[12px] uppercase tracking-widest text-[#D4AF37] font-bold mb-1">Endereço</h4>
                  <p className="text-[16px] font-[500] text-[#1A1A1A]">Av. das Flores, 123 - Centro<br />São Paulo, SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF5F7] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-[12px] uppercase tracking-widest text-[#D4AF37] font-bold mb-1">Horário</h4>
                  <p className="text-[16px] font-[500] text-[#1A1A1A]">Seg a Sáb: 08:00 às 19:00<br />Dom: 08:00 às 13:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Box / Map Placeholder Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="bg-[#FFF5F7] rounded-[16px] border border-[#F0EAE5] p-8 sm:p-10 text-[#1A1A1A] shadow-sm">
              <h3 className="font-serif text-[24px] mb-2 text-[#1A1A1A]">Faça seu Pedido</h3>
              <p className="text-[#666666] text-[14px] font-[400] mb-8 leading-relaxed">
                Agilize seu atendimento. Clique no botão abaixo e seja redirecionado ao nosso WhatsApp com todo suporte necessário.
              </p>
              
              <a 
                href="#"
                className="w-full flex items-center justify-center gap-2 bg-[#4A6741] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(74,103,65,0.3)] transition-all mb-6"
              >
                <Phone className="w-4 h-4" />
                Conversar no WhatsApp
              </a>

              <div className="space-y-4">
                <a href="#" className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#1A1A1A] border border-[#E2E8F0] bg-white hover:bg-[#F8F4FF] transition-colors">
                  <Instagram className="w-4 h-4 text-[#D4AF37]" />
                  Siga nosso Instagram
                </a>
                <a href="#" className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#1A1A1A] border border-[#E2E8F0] bg-white hover:bg-[#F8F4FF] transition-colors">
                  <Mail className="w-4 h-4 text-[#666666]" />
                  Enviar E-mail
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
