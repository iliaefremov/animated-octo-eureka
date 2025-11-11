import React from 'react';

const NotFoundScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <div className="relative bg-white/40 dark:bg-slate-900/50 backdrop-blur-3xl border border-white/30 dark:border-white/10 rounded-3xl p-8 shadow-soft-lg dark:shadow-dark-soft-lg animate-fade-in flex flex-col items-center">
        <div className="text-6xl mb-5 animate-swing" role="img" aria-label="Question Mark Icon">❓</div>
        <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-2">Страница не найдена</h2>
        <p className="text-text-secondary dark:text-dark-text-secondary max-w-sm mb-6">
          К сожалению, запрашиваемая вами страница не существует.
        </p>
        <a 
          href="/" 
          className="bg-accent dark:bg-dark-accent px-6 py-3 rounded-full font-bold text-white hover:bg-accent-dark dark:hover:bg-dark-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default NotFoundScreen;
