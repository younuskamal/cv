import React from 'react';
import { LanguageCode } from '../types';
import { Sun, Moon, Laptop } from 'lucide-react';

interface HeaderProps {
    lang: LanguageCode;
    setLang: (lang: LanguageCode) => void;
    isPdfMode: boolean;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const languages: LanguageCode[] = ['en', 'tr', 'ar', 'ku'];

const Header: React.FC<HeaderProps> = ({ lang, setLang, isPdfMode, isDarkMode, toggleDarkMode }) => {
    if (isPdfMode) return null;

    const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);
    const mobileLangRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        if (!isLangMenuOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (mobileLangRef.current && !mobileLangRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsLangMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isLangMenuOpen]);

    const handleLanguageChange = (code: LanguageCode) => {
        setLang(code);
        setIsLangMenuOpen(false);
    };

    return (
        <nav
            data-html2canvas-ignore
            className={`sticky top-0 z-40 backdrop-blur-xl border-b px-4 py-3 md:py-4 shadow-sm print:hidden transition-colors duration-300
            ${isDarkMode ? 'bg-slate-900/80 border-slate-700/50' : 'bg-white/80 border-slate-200/60'}`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className={`font-bold flex items-center gap-2 md:gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl text-white flex items-center justify-center font-bold text-base md:text-lg shadow-lg ${isDarkMode ? 'bg-blue-600 shadow-blue-900/50' : 'bg-slate-900 shadow-slate-200'}`}>YY</div>
                    <div className="flex flex-col">
                        <span className="text-xs md:text-sm font-extrabold tracking-tight leading-none uppercase">YOUNIS YASSER</span>
                        <span className="text-[8px] md:text-[10px] text-blue-500 font-bold uppercase tracking-widest mt-0.5">Software Developer</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleDarkMode}
                        className={`
                            relative w-14 h-8 rounded-full p-1 transition-all duration-300 flex items-center shadow-inner
                            ${isDarkMode ? 'bg-slate-700 ring-1 ring-slate-600' : 'bg-blue-100 ring-1 ring-blue-200'}
                        `}
                        aria-label="Toggle Dark Mode"
                        dir="ltr"
                    >
                        {/* Track Icons */}
                        <div className="absolute left-2 text-yellow-500"><Sun size={12} fill="currentColor" /></div>
                        <div className="absolute right-2 text-slate-300"><Moon size={12} fill="currentColor" /></div>

                        {/* Thumb */}
                        <div
                            className={`
                                w-6 h-6 rounded-full shadow-md transform transition-all duration-300 z-10 flex items-center justify-center
                                ${isDarkMode ? 'translate-x-6 bg-slate-900 text-slate-200' : 'translate-x-0 bg-white text-yellow-500'}
                            `}
                        >
                            {isDarkMode ? <Moon size={14} /> : <Sun size={14} />}
                        </div>
                    </button>

                    <div className={`hidden sm:flex p-1 md:p-1.5 rounded-xl md:rounded-2xl gap-1 transition-colors duration-300 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100/80'}`}>
                        {languages.map((code) => (
                            <button
                                key={code}
                                onClick={() => handleLanguageChange(code)}
                                className={`
                                    w-10 h-8 md:w-12 md:h-9 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all uppercase flex items-center justify-center
                                    ${lang === code
                                        ? `${isDarkMode ? 'bg-slate-700 text-white shadow-md ring-1 ring-slate-600' : 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/50'}`
                                        : `${isDarkMode ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50' : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'}`
                                    }
                                `}
                            >
                                {code}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Language Selector */}
                    <div className="relative sm:hidden" ref={mobileLangRef}>
                        <button
                            onClick={() => setIsLangMenuOpen((open) => !open)}
                            className={`w-10 h-10 rounded-2xl text-xs font-bold uppercase flex flex-col items-center justify-center gap-0.5 shadow-sm transition-colors
                                ${isDarkMode ? 'bg-slate-800 text-slate-100 border border-slate-700' : 'bg-white text-slate-800 border border-slate-200'}`}
                            aria-haspopup="true"
                            aria-expanded={isLangMenuOpen}
                        >
                            <span className="text-[9px] tracking-wide">Lang</span>
                            <span className="text-[11px]">{lang}</span>
                        </button>
                        {isLangMenuOpen && (
                            <div
                                className={`absolute right-0 mt-2 w-36 rounded-2xl border shadow-2xl p-2 flex flex-col gap-1 z-50 ${isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'}`}
                                role="menu"
                            >
                                {languages.map((code) => (
                                    <button
                                        key={`mobile-${code}`}
                                        onClick={() => handleLanguageChange(code)}
                                        className={`text-left px-3 py-2 rounded-xl text-sm font-semibold uppercase transition-colors
                                            ${lang === code
                                                ? `${isDarkMode ? 'bg-blue-600/20 text-blue-200' : 'bg-blue-50 text-blue-600'}`
                                                : `${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`
                                            }`}
                                        role="menuitem"
                                    >
                                        {code}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
