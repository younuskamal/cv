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
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

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
            <div className="space-y-5">
                {data.languages.map((lang, index) => (
                    <div
                        key={index}
                        className={`group relative p-3 -mx-3 rounded-2xl transition-all duration-300 ${isPdfMode ? '' : 'hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:scale-[1.02] cursor-default'}`}
                        style={{
                            opacity: hasMounted ? 1 : 0,
                            transform: hasMounted ? 'translateY(0)' : 'translateY(10px)',
                            transition: `opacity 600ms ease-out ${index * 100}ms, transform 600ms ease-out ${index * 100}ms`
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="flex justify-between items-center mb-3">
                            <span className={`text-sm font-bold transition-all duration-300 ${isDarkMode ? 'text-slate-200 group-hover:text-blue-400' : 'text-slate-700 group-hover:text-blue-600'} ${hoveredIndex === index ? 'scale-110' : ''}`}>
                                {lang.name}
                            </span>

                            <div className="relative h-6 flex justify-end overflow-hidden">
                                {/* Default Level Label */}
                                <span className={`block transition-all duration-300 ${hoveredIndex === index ? '-translate-y-8 opacity-0' : 'translate-y-0 opacity-100'} text-[10px] font-black ${isDarkMode ? 'text-blue-400 bg-blue-900/30' : 'text-blue-600 bg-blue-50'} px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap`}>
                                    {lang.level}
                                </span>
                                {/* Hover Percentage */}
                                <span className={`absolute right-0 top-0 transition-all duration-300 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-xs font-black ${isDarkMode ? 'text-emerald-400 bg-emerald-900/30' : 'text-emerald-600 bg-emerald-50'} px-2.5 py-0.5 rounded-full`}>
                                    {lang.proficiencyPercent}%
                                </span>
                                {/* Hover Greeting - Below */}
                                <span className={`absolute right-0 top-7 transition-all duration-300 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} text-xs font-bold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                                    {getGreeting(lang.name)}
                                </span>
                            </div>
                        </div>

                        {/* Progress Bar Container */}
                        <div className={`relative h-4 w-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} rounded-full overflow-hidden shadow-inner ring-1 ${isDarkMode ? 'ring-slate-700/50' : 'ring-slate-200/50'} transition-all duration-300 ${hoveredIndex === index ? 'h-5 shadow-lg' : ''}`}>
                            {/* Progress Bar Fill */}
                            <div
                                className={`relative h-full rounded-full transition-all duration-[1500ms] ease-out ${isPdfMode
                                    ? 'bg-slate-800'
                                    : hoveredIndex === index
                                        ? `bg-gradient-to-r ${isDarkMode ? 'from-emerald-500 via-blue-500 to-purple-500' : 'from-emerald-400 via-blue-500 to-purple-600'} bg-[length:200%_auto] animate-[gradientShift_2s_ease-in-out_infinite]`
                                        : `bg-gradient-to-r ${isDarkMode ? 'from-blue-600 via-indigo-500 to-purple-500' : 'from-blue-500 via-cyan-500 to-blue-700'} bg-[length:200%_auto] animate-[gradientMove_3s_linear_infinite]`
                                    }`}
                                style={{
                                    width: hasMounted || isPdfMode ? `${lang.proficiencyPercent}%` : '0%',
                                    willChange: 'width',
                                    boxShadow: hoveredIndex === index ? (isDarkMode ? '0 0 20px rgba(59, 130, 246, 0.5)' : '0 0 20px rgba(59, 130, 246, 0.3)') : 'none'
                                }}
                            >
                                {/* Shimmer Effect */}
                                {!isPdfMode && hoveredIndex === index && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
                                )}

                                {/* Moving Stripes Overlay */}
                                {!isPdfMode && (
                                    <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[stripes_1s_linear_infinite] opacity-30"></div>
                                )}

                                {/* Glow Tip */}
                                {!isPdfMode && (
                                    <div className={`absolute top-0 right-0 bottom-0 w-3 blur-[3px] transition-all duration-300 ${hoveredIndex === index ? 'bg-white shadow-[0_0_15px_3px_rgba(255,255,255,0.8)] animate-pulse' : 'bg-white/50 shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]'}`}></div>
                                )}
                            </div>
                        </div>

                        {/* Hover Ripple Effect */}
                        {!isPdfMode && hoveredIndex === index && (
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-[ripple_1.5s_ease-out]"></div>
                        )}
                    </div>
                ))}
            </div>
            {/* Custom Keyframes */}
            <style>{`
                @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
                @keyframes gradientShift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes stripes {
                    0% { background-position: 1rem 0; }
                    100% { background-position: 0 0; }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
                @keyframes ripple {
                    0% { opacity: 1; transform: scale(0.9); }
                    100% { opacity: 0; transform: scale(1.1); }
                }
            `}</style>
        </div>
    );
};

export default LanguagesCard;
