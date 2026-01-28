
import React from 'react';

const Team: React.FC = () => {
  const team = [
    { 
      name: 'Facundo', 
      role: 'Fullstack Lead', 
      skills: 'React, Node.js, AWS & Architecture', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1eeRXxOfag6SaDvaVluvzZA7eFxACJtIrb4NONo5_qJKiOyysz3UXJb_PIQpT0z5VIrCaI-3-HB4nIYa-ZlhnVtuvlYSORXZpjsRHLoIGfxlng_PAjuB3f0HFnnj7tY_LIji0cRfwn9FYkAlIgMeGeOViexkhV2Q0vFwYaUkCQZSohrUyq9Vq2BzN2vD9otgre61KbZWWnWBSe0Sw5hGz02SH-N3V0HNDjl9d8IYZ66VlT0wWUDhkX-JQZOGoFBTEXX1eqBGykoQy' 
    },
    { 
      name: 'Mateo', 
      role: 'Frontend Specialist', 
      skills: 'Tailwind, Next.js, Figma & Motion', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCZAwKB13aECRd_5KlUNYABrlbw9hfw9OTqqMrW07rDLLjxkO4IaN6jv-P9fasBhMeF05_Q6A0bNGv8i4mpSSJzJB-vyS5_hYzrLxEqW3g9qGzcI1LJl_p9VTDWWHxDN4yexiLOFC_oJ5UwzCLa8mIcqdOTtJyycWpHlXGNAwoR_b4zOQkDDQhaHCJTLD8opdJey9xP2UpRwHlGjZK37wzNFq9v6tY_OIWl8B7hoq6Kbp0tzDH3ULn-nLiVfKCup93DBIW5Tcj1rri' 
    },
    { 
      name: 'Lucía', 
      role: 'Backend Architect', 
      skills: 'Python, PostgreSQL, Docker & Scale', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5s5Fe9smd5JFZsr2za8Nhska854TBQ9Yy8zSmX8tEi63UOzMsSf6pZ4NB1M9FbLbHoNwEBlKoEE3GXoSM0AOQyIg81Nkm_sTHdXliwnzk2gw6OMpQmRZZrBVkIPUiC_Rr_SPcaKzyov_3Rd7QIlbjqXOhgfuCl8jS9ZIqayphHuoobW1-N-G0-PSxf30FyTn7gcQVPlDwZKpPxDornke3fPuyyiBk4FbIizAnVIB_GM5kMZ89MRNFYkV5Yu4nkHozTatNcuCZh194' 
    },
  ];

  return (
    <div className="pt-20">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-24 max-w-3xl mx-auto space-y-4">
          <span className="text-primary font-bold text-sm tracking-[0.3em] uppercase">Expertise Garantizado</span>
          <h1 className="text-5xl lg:text-7xl font-black text-[#111618] dark:text-white tracking-tight">Nuestro Equipo</h1>
          <p className="text-[#617c89] dark:text-[#a1b3bc] text-lg lg:text-xl">
            Calidad Boutique: 3 Desarrolladores, Foco Total. Priorizamos la excelencia técnica y la comunicación directa sin intermediarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((m, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-white dark:bg-card-dark border border-[#dbe2e6] dark:border-[#2d3a43] transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
              <div className="w-full aspect-square rounded-full border-8 border-background-light dark:border-background-dark group-hover:border-primary/20 transition-all duration-500 overflow-hidden mb-8 shadow-xl">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
              </div>
              <h3 className="text-3xl font-black text-[#111618] dark:text-white mb-2">{m.name}</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">{m.role}</p>
              <div className="h-px w-12 bg-primary/30 mx-auto mb-6"></div>
              <p className="text-[#617c89] dark:text-[#a0b3bc] text-sm font-medium leading-relaxed italic">{m.skills}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Section inside Team */}
        <div className="mt-40 bg-primary/5 dark:bg-white/5 rounded-[3rem] p-10 lg:p-24 relative overflow-hidden text-center">
           <div className="absolute top-10 left-10 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined !text-[120px]">format_quote</span>
           </div>
           <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-black italic mb-10 leading-relaxed max-w-4xl mx-auto text-[#111618] dark:text-white">
                "SenseyIT transformó nuestro sistema heredado en una potencia moderna. Su atención al detalle es realmente boutique."
              </h2>
              <div className="flex flex-col items-center gap-4">
                 <div className="size-16 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-background-dark">
                    <img src="https://picsum.photos/100/100" alt="Elena Rodriguez" className="w-full h-full object-cover" />
                 </div>
                 <div className="text-center">
                    <p className="font-bold text-lg text-[#111618] dark:text-white">Elena Rodriguez</p>
                    <p className="text-primary text-sm font-bold uppercase tracking-widest">CTO at TechFlow Systems</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
