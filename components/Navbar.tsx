
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Servicios', path: '/servicios' },
    { name: 'Procesos', path: '/procesos' },
    { name: 'Equipo', path: '/equipo' },
    { name: 'Planes', path: '/planes' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-100 dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="size-8 md:size-9 text-primary group-hover:rotate-12 transition-transform duration-300">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-lg md:text-xl font-bold tracking-tight dark:text-white">SenseyIT</h2>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-sm font-semibold hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-slate-600 dark:text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-gray-200 dark:bg-border-dark mx-2"></div>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-500 dark:text-gray-400"
            aria-label="Alternar modo oscuro"
          >
            <span className="material-symbols-outlined text-[20px]">{isDark ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button 
            onClick={() => navigate('/contacto')} 
            className="bg-primary hover:bg-primary/90 text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
          >
            Cotizar Proyecto
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button 
            onClick={() => setIsDark(!isDark)} 
            className="p-2 text-slate-600 dark:text-gray-300"
            aria-label="Alternar modo oscuro"
          >
            <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button 
            onClick={() => {
              // Simple mobile toggle logic
              const menu = document.getElementById('mobile-menu');
              menu?.classList.toggle('hidden');
            }}
            className="p-2 text-slate-600 dark:text-gray-300"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden lg:hidden bg-white dark:bg-card-dark border-b border-gray-100 dark:border-border-dark py-4 px-6 flex flex-col gap-4">
        {navLinks.map((link) => (
          <Link 
            key={link.path}
            to={link.path} 
            onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
            className={`text-base font-bold ${location.pathname === link.path ? 'text-primary' : 'text-slate-600 dark:text-gray-300'}`}
          >
            {link.name}
          </Link>
        ))}
        <button 
          onClick={() => {
            navigate('/contacto');
            document.getElementById('mobile-menu')?.classList.add('hidden');
          }}
          className="w-full bg-primary text-white py-4 rounded-xl font-bold"
        >
          Cotizar Proyecto
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
