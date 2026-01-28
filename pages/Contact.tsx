
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado con éxito. Nos pondremos en contacto pronto.');
  };

  return (
    <div className="pt-20">
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-black tracking-[0.2em] uppercase">Comencemos tu proyecto</span>
              <h1 className="text-5xl lg:text-7xl font-black text-[#111618] dark:text-white leading-[1.05] tracking-tight">
                Contanos tu idea y la llevamos a <span className="text-primary italic">producción</span>
              </h1>
              <p className="text-xl text-[#617c89] dark:text-white/60 leading-relaxed max-w-lg">
                Estamos listos para transformar tu visión en una solución digital de alto impacto. Nuestro equipo boutique prioriza la comunicación directa.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a 
                href="https://wa.me/yournumber" 
                target="_blank" 
                className="group w-full md:w-fit flex items-center justify-between gap-10 bg-whatsapp text-white px-10 py-6 rounded-2xl font-black text-2xl hover:bg-[#20bd5c] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl shadow-whatsapp/30"
              >
                <span className="flex items-center gap-4">
                   <svg className="size-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                   </svg>
                   WhatsApp
                </span>
                <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </a>
              <div className="flex items-center gap-4 px-2">
                <div className="flex -space-x-3">
                  <div className="size-10 rounded-full bg-primary border-2 border-white dark:border-background-dark"></div>
                  <div className="size-10 rounded-full bg-blue-300 border-2 border-white dark:border-background-dark"></div>
                  <div className="size-10 rounded-full bg-blue-100 border-2 border-white dark:border-background-dark flex items-center justify-center text-xs font-black text-primary">+5</div>
                </div>
                <div>
                   <p className="text-sm font-black text-[#111618] dark:text-white uppercase tracking-widest">Respuesta en minutos</p>
                   <p className="text-xs text-[#617c89] dark:text-white/50">Expertos en línea ahora</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-[#dbe2e6] dark:border-white/10 flex flex-wrap gap-12">
              <div className="flex items-center gap-3">
                 <span className="material-symbols-outlined text-whatsapp text-2xl">verified</span>
                 <div>
                    <p className="text-sm font-black text-[#111618] dark:text-white">Sin Intermediarios</p>
                    <p className="text-xs text-[#617c89] dark:text-white/40">Contacto directo con devs</p>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <span className="material-symbols-outlined text-primary text-2xl">speed</span>
                 <div>
                    <p className="text-sm font-black text-[#111618] dark:text-white">Prioridad 24/7</p>
                    <p className="text-xs text-[#617c89] dark:text-white/40">Soporte post-lanzamiento</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white dark:bg-card-dark p-10 md:p-14 rounded-[2.5rem] border border-[#dbe2e6] dark:border-white/5 shadow-2xl">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-black text-[#111618] dark:text-white mb-2">Envíanos un mail</h2>
                <p className="text-[#617c89] dark:text-white/50">Recibirás una respuesta personalizada en menos de 2h.</p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-500 uppercase tracking-widest px-2" htmlFor="name">Nombre</label>
                  <input 
                    className="w-full bg-gray-50 dark:bg-background-dark/50 border-none rounded-2xl px-6 py-4 text-[#111618] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-300" 
                    id="name" 
                    placeholder="Ej: Juan Pérez" 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-500 uppercase tracking-widest px-2" htmlFor="email">Email</label>
                  <input 
                    className="w-full bg-gray-50 dark:bg-background-dark/50 border-none rounded-2xl px-6 py-4 text-[#111618] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-300" 
                    id="email" 
                    placeholder="juan@empresa.com" 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-500 uppercase tracking-widest px-2" htmlFor="message">Proyecto</label>
                  <textarea 
                    className="w-full bg-gray-50 dark:bg-background-dark/50 border-none rounded-2xl px-6 py-4 text-[#111618] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-300 resize-none" 
                    id="message" 
                    placeholder="¿Qué estás buscando construir?" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  className="w-full bg-[#111618] dark:bg-white dark:text-[#111618] text-white font-black py-5 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3 group/btn shadow-xl shadow-black/10" 
                  type="submit"
                >
                  Enviar Consulta
                  <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">send</span>
                </button>
                <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-black pt-4">Garantizamos privacidad absoluta</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
