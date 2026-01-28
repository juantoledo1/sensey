
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Landing Pages',
      icon: 'target',
      desc: 'Diseños de alto impacto optimizados para convertir visitantes en clientes de forma inmediata. Máxima velocidad de carga.',
    },
    {
      title: 'Web Corporativa',
      icon: 'corporate_fare',
      desc: 'Presencia digital profesional que proyecta autoridad. Arquitectura de información diseñada para el SEO y la marca.',
    },
    {
      title: 'Ecommerce',
      icon: 'shopping_cart',
      desc: 'Tiendas online escalables con experiencia de usuario fluida, pasarelas seguras y gestión de inventario inteligente.',
    },
    {
      title: 'Sistemas CRM',
      icon: 'database',
      desc: 'Automatización personalizada para optimizar la eficiencia de tu equipo y centralizar la inteligencia de tus clientes.',
    }
  ];

  return (
    <div className="pt-20">
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Boutique Quality Development
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#111618] dark:text-white leading-tight tracking-tight mb-8">
          Escalamos tu visión con <br/> <span className="text-primary italic">ingeniería de alta velocidad.</span>
        </h1>
        <p className="text-xl text-[#617c89] dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-20">
          Impulsamos tu negocio con soluciones digitales personalizadas, optimizadas para la conversión y preparadas para el crecimiento ilimitado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {services.map((s, idx) => (
            <div key={idx} className="group p-8 rounded-lg border border-[#dbe2e6] dark:border-[#2a3a42] bg-white dark:bg-card-dark transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full">
              <div className="size-14 mb-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">{s.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#111618] dark:text-white mb-3 tracking-tight">{s.title}</h3>
              <p className="text-[#617c89] dark:text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                {s.desc}
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all cursor-pointer">
                Saber más
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Section */}
      <section className="bg-white dark:bg-card-dark/30 py-24 border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-[#111618] dark:text-white tracking-tight">¿Por qué <span className="text-primary italic">SenseyIT?</span></h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="size-12 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#111618] dark:text-white">Velocidad Extrema</h4>
                    <p className="text-[#617c89] dark:text-gray-400">Tiempos de carga récord para mejorar el SEO y retener a tus usuarios.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="size-12 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">security</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#111618] dark:text-white">Seguridad de Nivel</h4>
                    <p className="text-[#617c89] dark:text-gray-400">Protocolos modernos y código auditado para proteger los datos de tu empresa.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="size-12 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">query_stats</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#111618] dark:text-white">Arquitectura Escalable</h4>
                    <p className="text-[#617c89] dark:text-gray-400">Sistemas que crecen sin fricciones a medida que tu negocio se expande.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-2xl grayscale group hover:grayscale-0 transition-all duration-700">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnutNgSCr8eLSemUYOgvpeANn9BuSVQRKyZfBWc2yXCOFf_OtHNCGFDTd4pYI4fN2M5qQwi-Yos2VoT4SzvXtPh8QQ8Jo7QJnv6AdFMklmE217ADVzXP0EcJ5hBRKrgpvifQJNHZoyY4flTTmdu2G84klJyP0p0NnurLGsJR7oVj6admpPZXp9bijGJoSh-7axzGQ6VuUYPmTw1dyFdG9AZ9ZYWWWuFQ3hCLZLKXUEdAIc0S3BtiVywnbbnAufpheqmvy1RAOMAmGd" className="object-cover w-full h-full" alt="Oficina SenseyIT" />
               <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-2">Technical Excellence</p>
                  <p className="text-2xl font-bold">Código limpio para mentes brillantes.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
