import React from 'react';

interface PreloaderProps {
    isLoading: boolean;
    isDarkMode: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading, isDarkMode }) => {
    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none scale-105'
                } ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}
        >
            <div className="relative mb-8">
                {/* Pulse Effect */}
                <div className={`absolute inset-0 rounded-2xl animate-ping opacity-20 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>

                {/* Spinner Ring */}
                <div className={`absolute -inset-4 border-2 border-t-blue-500 rounded-full animate-spin ${isDarkMode ? 'border-blue-500/20' : 'border-blue-600/10'}`}></div>

                {/* Main Logo Box */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                    <span className="text-white font-black text-4xl tracking-tighter animate-pulse">YY</span>
                </div>
            </div>

            {/* Welcome Text */}
            <div className="text-center space-y-2">
                <h2 className={`text-2xl font-bold tracking-tight animate-fade-in-up ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Welcome
                </h2>
                <p className={`text-sm font-medium tracking-widest uppercase animate-pulse ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    Loading Experience...
                </p>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 z-[-1] overflow-hidden opacity-20">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse ${isDarkMode ? 'bg-blue-600' : 'bg-blue-200'}`}></div>
            </div>
        </div>
    );
};

export default Preloader;
