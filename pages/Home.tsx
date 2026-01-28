
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const projects = [
    { 
      title: 'Fintech Dashboard', 
      category: 'Web App', 
      img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      title: 'Luxury E-shop', 
      category: 'E-commerce', 
      img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      title: 'HealthAI Platform', 
      category: 'HealthTech', 
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' 
    }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-12 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 size-[400px] md:size-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 md:gap-10 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] w-fit">
                <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>
                Software Boutique de Alta Gama
              </div>
              <div className="flex flex-col gap-4 md:gap-6">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[1.1] lg:leading-[0.95] tracking-[-0.05em] text-slate-900 dark:text-white">
                  Diseñamos el <span className="text-primary italic">futuro</span> de tu negocio.
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-relaxed">
                  Desarrollo boutique para marcas que no aceptan lo ordinario. Código limpio, diseño impecable y escalabilidad real.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button 
                  onClick={() => navigate('/contacto')}
                  className="group w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-base md:text-lg shadow-2xl shadow-primary/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Iniciar Proyecto
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
                <button 
                  onClick={() => navigate('/servicios')}
                  className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border-2 border-slate-200 dark:border-border-dark hover:bg-slate-50 dark:hover:bg-white/5 rounded-full font-bold text-base md:text-lg transition-all text-slate-900 dark:text-white"
                >
                  Nuestra Oferta
                </button>
              </div>
              
              <div className="flex items-center gap-6 md:gap-8 pt-10 border-t border-slate-100 dark:border-border-dark">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">100%</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fixed Pricing</span>
                </div>
                <div className="h-10 w-px bg-slate-200 dark:bg-border-dark"></div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">3</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lead Devs</span>
                </div>
                <div className="h-10 w-px bg-slate-200 dark:bg-border-dark"></div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">24h</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Soporte VIP</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative group flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[400px] lg:max-w-[450px] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border-8 border-white dark:border-card-dark shadow-2xl transition-transform duration-700 lg:hover:rotate-2">
                <img 
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGOZHg6Jmqaf0y14fWeVQGlwXiV6L_dpiUhZx49k4qd_DPb32FjrO14FYYKvLK8tbMTbu8R5CXXX260XXKQklnp3xkvF1QR-1aBki45i9GnX_VaN6EccQNu0EANDAUKpNPql-V_eekOJQv9Yv_TadKpiTQY_Z7NPbZNQGC5TkmSdeMGyta4gcvDZLYxR7buYY3UgatIcAxtRnnkT36CiI97iypUkK_OF7Pp-LRpqj7f51nJXEuf7orABcCuNY7rVnbyKOfRBlY5Z-l"
                  alt="SenseyIT Experience"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 p-4 md:p-6 bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20">
                   <p className="text-primary font-bold text-[8px] md:text-[10px] uppercase tracking-[0.3em] mb-1">Status Report</p>
                   <p className="text-white font-black text-base md:text-lg">99.9% Uptime Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 md:py-24 px-6 bg-slate-50 dark:bg-card-dark/40 border-y border-slate-100 dark:border-border-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
            <div className="max-w-xl text-left">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Proyectos que <span className="text-primary italic">hablan por sí solos.</span></h2>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">No hacemos "solo webs", creamos activos digitales de alto rendimiento.</p>
            </div>
            <button onClick={() => navigate('/servicios')} className="w-fit text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Ver todo el portfolio <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((p, i) => (
              <div key={i} className="group relative rounded-2xl md:rounded-[2rem] overflow-hidden aspect-[4/3] bg-slate-200 dark:bg-border-dark cursor-pointer shadow-lg">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-left">
                  <p className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1">{p.category}</p>
                  <h3 className="text-white font-bold text-lg md:text-xl">{p.title}</h3>
                </div>
                <div className="absolute top-6 md:top-8 right-6 md:right-8 size-10 md:size-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all">
                  <span className="material-symbols-outlined text-sm md:text-base">call_made</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us? */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="size-12 md:size-16 rounded-xl md:rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined !text-2xl md:!text-3xl">verified</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">Calidad Boutique</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base">Limitamos nuestros proyectos mensuales para garantizar que tu producto reciba la atención meticulosa que merece.</p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="size-12 md:size-16 rounded-xl md:rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <span className="material-symbols-outlined !text-2xl md:!text-3xl">terminal</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">Ingeniería Moderna</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base">Usamos el stack tecnológico más actual (React, Next.js, Node) para asegurar velocidad, SEO y seguridad.</p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="size-12 md:size-16 rounded-xl md:rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <span className="material-symbols-outlined !text-2xl md:!text-3xl">handshake</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">Socio Estratégico</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base">No somos solo programadores. Entendemos tu modelo de negocio para que el software sea una palanca de crecimiento.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
