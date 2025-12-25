import React from 'react';
import { Settings, Zap, Code, UserCheck, Cpu } from 'lucide-react';
import { ResumeData } from '../../types';

interface MethodologySectionProps {
    data: ResumeData;
    cardClass: string;
    isPdfMode: boolean;
    isDarkMode: boolean;
}

const MethodologySection: React.FC<MethodologySectionProps> = ({ data, cardClass, isPdfMode, isDarkMode }) => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Zap': return <Zap size={20} />;
            case 'Code': return <Code size={20} />;
            case 'UserCheck': return <UserCheck size={20} />;
            default: return <Settings size={20} />;
        }
    };

    return (
        <section className="animate-fade-in-up animation-delay-300 mb-8">
            <div className={`flex items-center gap-4 mb-6 px-2 ${isPdfMode ? 'px-0' : ''}`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isPdfMode ? 'text-slate-900 bg-transparent' : `${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600 shadow-sm'}`}`}>
                    <Cpu size={24} />
                </div>
                <h2 className={`text-2xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{data.ui.sectionTitles.methodology}</h2>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${isPdfMode ? 'md:grid-cols-1' : ''}`}>
                {data.methodology.map((item, index) => (
                    <div
                        key={index}
                        className={`${cardClass} !p-6 flex flex-col items-center text-center group`}
                    >
                        <div className={`
                            w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300
                            ${isPdfMode
                                ? 'bg-slate-100 text-slate-800'
                                : `${isDarkMode
                                    ? 'bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30'
                                    : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200'}`
                            }
                        `}>
                            {getIcon(item.icon)}
                        </div>
                        <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                        <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MethodologySection;
