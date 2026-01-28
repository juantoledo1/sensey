
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { n: '1', title: 'Análisis', icon: 'search', desc: 'Estrategia y requerimientos' },
    { n: '2', title: 'Diseño', icon: 'palette', desc: 'UX/UI y prototipado' },
    { n: '3', title: 'Desarrollo', icon: 'memory', desc: 'Codificación ágil' },
    { n: '4', title: 'Testing', icon: 'verified_user', desc: 'QA y optimización' },
    { n: '5', title: 'Lanzamiento', icon: 'rocket_launch', desc: 'Producción y soporte' },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-[#111618] dark:text-white tracking-tight mb-4">Nuestra Metodología</h2>
            <p className="text-[#617c89] dark:text-[#a0b3bc] text-lg max-w-xl mx-auto">Del concepto al lanzamiento en cinco pasos estratégicos para asegurar el éxito.</p>
          </div>

          <div className="relative hidden lg:block mb-32">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-white/10 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 w-1/5 h-1 bg-primary -translate-y-1/2"></div>
            
            <div className="grid grid-cols-5 relative z-10">
              {steps.map((s, idx) => (
                <div key={idx} className="flex flex-col items-center px-4 group">
                  <div className={`size-16 rounded-full flex items-center justify-center mb-6 border-4 shadow-xl transition-all duration-300 ${idx === 0 ? 'bg-primary text-white border-white dark:border-background-dark scale-110' : 'bg-white dark:bg-card-dark text-[#111618] dark:text-white border-gray-100 dark:border-white/10 group-hover:border-primary group-hover:scale-110'}`}>
                    <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-[#111618] dark:text-white">{s.title}</h3>
                  <p className="text-sm text-[#617c89] dark:text-[#a0b3bc] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Process */}
          <div className="lg:hidden flex flex-col gap-12 text-left max-w-sm mx-auto">
            {steps.map((s, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                <div className="flex flex-col items-center">
                  <div className={`size-12 rounded-full flex items-center justify-center font-black text-lg ${idx === 0 ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-card-dark text-gray-400 border border-gray-200 dark:border-white/5'}`}>
                    {s.n}
                  </div>
                  {idx < steps.length - 1 && <div className="w-0.5 h-12 bg-gray-200 dark:bg-white/10 mt-2"></div>}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111618] dark:text-white group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-[#617c89] dark:text-gray-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Container */}
          <div className="mt-32 p-10 md:p-20 rounded-[3rem] bg-primary text-white text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,1),transparent)]"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl lg:text-6xl font-black leading-tight tracking-tight">¿Listo para escalar tu idea?</h2>
              <p className="text-white/80 text-lg lg:text-2xl max-w-2xl mx-auto">
                Convirtamos tu visión en un producto digital de clase mundial con la metodología SenseyIT.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <button 
                  onClick={() => window.location.hash = '#/contacto'}
                  className="bg-white text-primary font-black px-10 py-5 rounded-full hover:scale-105 transition-all shadow-xl shadow-black/10 text-lg"
                >
                  Hablemos ahora
                </button>
                <button 
                  onClick={() => window.location.hash = '#/servicios'}
                  className="bg-transparent border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all text-lg"
                >
                  Ver Servicios
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
