
import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Landing Impact',
      price: '200',
      tagline: 'Inversión Única',
      desc: 'Optimizado para campañas de marketing y conversiones rápidas.',
      features: [
        'Sección Hero 3D/Premium',
        'Carga en menos de 1s',
        'Optimización móvil total',
        'Copywriting persuasivo',
        'Integración CRM básica'
      ],
      popular: false
    },
    {
      name: 'Empresa Digital',
      price: '350',
      tagline: 'Inversión Única',
      desc: 'El estándar de oro para empresas que buscan autoridad online.',
      features: [
        'Hasta 7 páginas internas',
        'SEO Avanzado (Google ready)',
        'Blog / Sección Noticias',
        'Panel autogestionable',
        'Certificado SSL incluido'
      ],
      popular: true
    },
    {
      name: 'Full Ecommerce',
      price: '550',
      tagline: 'Inversión Única',
      desc: 'Tu tienda abierta al mundo sin comisiones mensuales.',
      features: [
        'Catálogo ilimitado',
        'Multi-pasarela de pagos',
        'Gestión de envíos y stock',
        'Facturación automática',
        'App PWA opcional'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      <section className="px-6 py-24 text-center max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
           <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Transparencia Radical</span>
           <h1 className="text-5xl lg:text-7xl font-black dark:text-white tracking-tight leading-tight">Planes de <span className="text-primary italic">Pago Único.</span></h1>
           <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl mx-auto">
             Sin suscripciones, sin cuotas ocultas. Calidad boutique con una inversión clara y definitiva.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          {plans.map((p, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-12 rounded-[3.5rem] border-2 transition-all duration-500 ${p.popular ? 'border-primary bg-white dark:bg-card-dark scale-105 z-10 shadow-2xl shadow-primary/10' : 'border-slate-100 dark:border-border-dark bg-white/50 dark:bg-card-dark/30'}`}
            >
              {p.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                   <span className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">Elección Sensey</span>
                </div>
              )}
              
              <div className="text-left mb-10">
                <h3 className="text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest text-xs mb-6">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-xl font-bold dark:text-white">USD</span>
                  <span className="text-7xl font-black dark:text-white">{p.price}</span>
                </div>
                <p className="text-primary font-black text-xs uppercase tracking-widest">{p.tagline}</p>
              </div>

              <div className="flex-1 space-y-5 text-left mb-12">
                {p.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary !text-lg mt-1">check_circle</span>
                    <span className="text-sm font-semibold dark:text-slate-300">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-3xl font-black text-lg transition-all ${p.popular ? 'bg-primary text-white shadow-xl shadow-primary/25 hover:bg-primary/80' : 'bg-slate-100 dark:bg-border-dark text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-800'}`}>
                 Iniciar Plan
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-3xl bg-slate-50 dark:bg-card-dark/40 border border-slate-100 dark:border-border-dark inline-block">
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">info</span>
            ¿Necesitas algo a medida? Desarrollamos CRM, ERP y SaaS personalizados. 
            <button onClick={() => window.location.hash = '#/contacto'} className="text-primary font-bold underline ml-1">Consulta por desarrollo custom</button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
