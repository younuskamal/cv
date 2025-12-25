import React from 'react';
import { Globe } from 'lucide-react';
import { ResumeData } from '../../types';

interface LanguagesCardProps {
    data: ResumeData;
    isPdfMode: boolean;
    isDarkMode: boolean;
}

const LanguagesCard: React.FC<LanguagesCardProps> = ({ data, isPdfMode, isDarkMode }) => {
    const getGreeting = (name: string) => {
        const lower = name.toLowerCase();
        if (lower.includes('arab') || lower.includes('عرب') || lower.includes('arap')) return "مرحباً 👋";
        if (lower.includes('kurd') || lower.includes('kürt') || lower.includes('كرد') || lower.includes('کورد')) return "سڵاو ✨";
        if (lower.includes('turk') || lower.includes('türk') || lower.includes('ترك') || lower.includes('تورک')) return "Merhaba 🚀";
        if (lower.includes('eng') || lower.includes('ing') || lower.includes('إنجل') || lower.includes('ئینگلیز')) return "Hello 💻";
        return "👋";
    };

    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setHasMounted(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${isPdfMode ? '' : `${isDarkMode ? 'bg-slate-900/60 backdrop-blur-xl border-slate-700/50' : 'bg-white/60 backdrop-blur-xl border-white/50'} rounded-[2rem] shadow-lg border p-6 lg:p-8 spotlight-card relative overflow-hidden animate-fade-in-up animation-delay-200`}`}>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                <Globe size={18} className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} animate-pulse`} />
                {data.ui.sectionTitles.languages}
            </h3>
            <div className="space-y-4">
                {data.languages.map((lang, index) => (
                    <div
                        key={index}
                        className={`group p-3 -mx-3 rounded-2xl transition-all duration-300 ${isPdfMode ? '' : 'hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:scale-[1.02] cursor-default'}`}
                        style={{
                            opacity: hasMounted ? 1 : 0,
                            transform: hasMounted ? 'translateY(0)' : 'translateY(10px)',
                            transition: `opacity 600ms ease-out ${index * 100}ms, transform 600ms ease-out ${index * 100}ms`
                        }}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className={`text-sm font-bold transition-colors duration-300 ${isDarkMode ? 'text-slate-200 group-hover:text-blue-400' : 'text-slate-700 group-hover:text-blue-600'}`}>
                                {lang.name}
                            </span>

                            <div className="relative h-6 flex justify-end overflow-hidden">
                                {/* Default Level Label - Relative so container sets width */}
                                <span className={`block transition-transform duration-300 group-hover:-translate-y-8 text-[10px] font-black ${isDarkMode ? 'text-blue-400 bg-blue-900/30' : 'text-blue-600 bg-blue-50'} px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap`}>
                                    {lang.level}
                                </span>
                                {/* Hover Greeting - Absolute */}
                                <span className={`absolute right-0 top-0 transition-transform duration-300 translate-y-8 group-hover:translate-y-0 text-xs font-bold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'} px-2 py-0.5`}>
                                    {getGreeting(lang.name)}
                                </span>
                            </div>
                        </div>

                        <div className={`h-3 w-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} rounded-full overflow-hidden shadow-inner relative`}>
                            <div
                                className={`h-full rounded-full relative transition-all duration-[1500ms] ease-out ${isPdfMode
                                    ? 'bg-slate-800'
                                    : `bg-gradient-to-r ${isDarkMode ? 'from-blue-600 via-indigo-500 to-purple-500' : 'from-blue-500 via-cyan-500 to-blue-700'} bg-[length:200%_auto] animate-[gradientMove_3s_linear_infinite]`
                                    }`}
                                style={{
                                    width: hasMounted || isPdfMode ? `${lang.proficiencyPercent}%` : '0%',
                                    willChange: 'width'
                                }}
                            >
                                {/* Moving Stripes Overlay */}
                                {!isPdfMode && (
                                    <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[stripes_1s_linear_infinite] opacity-30"></div>
                                )}

                                {/* Glow Tip */}
                                {!isPdfMode && (
                                    <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/50 blur-[2px] shadow-[0_0_10px_2px_rgba(255,255,255,0.6)] animate-pulse"></div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Custom Keyframes */}
            <style>{`
                @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
                @keyframes stripes {
                    0% { background-position: 1rem 0; }
                    100% { background-position: 0 0; }
                }
            `}</style>
        </div>
    );
};

export default LanguagesCard;
