
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white pt-20 pb-12 mt-12 border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-primary size-7">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">SenseyIT</h2>
            </div>
            <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              Software boutique de alta gama. Convertimos ideas complejas en productos digitales de primer nivel.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-slate-300 dark:border-white/10">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a href="#" className="size-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-slate-300 dark:border-white/10">
                <span className="material-symbols-outlined text-lg">group</span>
              </a>
              <a href="#" className="size-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-slate-300 dark:border-white/10">
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-slate-400 dark:text-white uppercase tracking-widest text-xs opacity-70">Empresa</h3>
            <Link to="/" className="text-slate-600 dark:text-white/60 hover:text-primary transition-colors text-sm font-medium">Inicio</Link>
            <Link to="/servicios" className="text-slate-600 dark:text-white/60 hover:text-primary transition-colors text-sm font-medium">Servicios</Link>
            <Link to="/equipo" className="text-slate-600 dark:text-white/60 hover:text-primary transition-colors text-sm font-medium">Nuestro Equipo</Link>
            <Link to="/contacto" className="text-slate-600 dark:text-white/60 hover:text-primary transition-colors text-sm font-medium">Contacto</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-slate-400 dark:text-white uppercase tracking-widest text-xs opacity-70">Legal</h3>
            <a href="#" className="text-slate-600 dark:text-white/60 hover:text-primary transition-colors text-sm font-medium">Términos y Condiciones</a>
            <a href="#" className="text-slate-600 dark:text-white/60 hover:text-primary transition-colors text-sm font-medium">Privacidad</a>
            <a href="#" className="text-slate-600 dark:text-white/60 hover:text-primary transition-colors text-sm font-medium">Seguridad</a>
            <a href="#" className="text-slate-600 dark:text-white/60 hover:text-primary transition-colors text-sm font-medium">Cookies</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-slate-400 dark:text-white uppercase tracking-widest text-xs opacity-70">Newsletter</h3>
            <p className="text-slate-500 dark:text-white/50 text-sm mb-4">Novedades sobre IA y desarrollo cada semana.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3 text-sm focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Tu email" type="email" />
              <button className="absolute right-1.5 top-1.5 size-9 rounded-lg bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 dark:text-white/30 text-xs text-center md:text-left">© 2024 SenseyIT. Expertly crafted in Latin America. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-400 dark:text-white/40 hover:text-primary transition-colors font-medium">English</a>
            <a href="#" className="text-xs font-bold text-primary">Español</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
