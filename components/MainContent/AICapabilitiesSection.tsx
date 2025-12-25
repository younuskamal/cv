import React, { useState } from 'react';
import { Brain, Cpu, Sparkles, Rocket, Eye, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import { ResumeData } from '../../types';

interface AICapabilitiesSectionProps {
    data: ResumeData;
    cardClass: string;
    isPdfMode: boolean;
    isDarkMode: boolean;
}

const AICapabilitiesSection: React.FC<AICapabilitiesSectionProps> = ({ data, cardClass, isPdfMode, isDarkMode }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(isPdfMode ? null : 0);

    const toggleExpand = (index: number) => {
        if (isPdfMode) return;
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ReactNode } = {
            'Brain': <Brain size={24} />,
            'Cpu': <Cpu size={24} />,
            'Sparkles': <Sparkles size={24} />,
            'Rocket': <Rocket size={24} />,
            'Eye': <Eye size={24} />
        };
        return icons[iconName] || <Zap size={24} />;
    };

    return (
        <section className="animate-fade-in-up animation-delay-300 mb-8">
            <div className="flex items-center gap-4 mb-6 px-2">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white' : 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-200'}`}>
                    <Brain size={24} className="animate-pulse" />
                </div>
                <h2 className={`text-2xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {data.ui.sectionTitles.aiCapabilities}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.aiCapabilities.map((capability, index) => {
                    const isExpanded = isPdfMode || expandedIndex === index;

                    return (
                        <div
                            key={index}
                            className={`${cardClass} group relative overflow-hidden transition-all duration-300 transform ${!isPdfMode && isExpanded ? `ring-2 ${isDarkMode ? 'ring-purple-500/50' : 'ring-purple-300'} scale-[1.02]` : 'hover:scale-[1.01] cursor-pointer'}`}
                            onClick={() => toggleExpand(index)}
                        >
                            {/* Gradient Overlay */}
                            <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-3xl transition-opacity duration-300 ${isExpanded ? 'opacity-20' : ''} ${isDarkMode ? 'bg-purple-500' : 'bg-purple-400'}`}></div>

                            {/* Header */}
                            <div className="flex items-start gap-5 relative z-10">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${isPdfMode ? 'bg-purple-100 text-purple-600' : `${isDarkMode ? 'bg-gradient-to-br from-purple-900/50 to-blue-900/50 text-purple-400 group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white' : 'bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600 group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white shadow-sm'}`}`}>
                                    {getIcon(capability.icon)}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <h3 className={`text-lg font-black tracking-tight mb-2 pr-4 transition-colors ${isDarkMode ? 'text-white group-hover:text-purple-400' : 'text-slate-900 group-hover:text-purple-600'}`}>
                                            {capability.title}
                                        </h3>
                                        {!isPdfMode && (
                                            <div className={`p-1.5 rounded-full transition-all duration-300 ${isExpanded ? 'rotate-180 bg-purple-500/10 text-purple-500' : `text-slate-400 group-hover:translate-y-[-2px]`}`}>
                                                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                            </div>
                                        )}
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {capability.tags.slice(0, isExpanded ? capability.tags.length : 2).map((tag, i) => (
                                            <span key={i} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg border transition-all duration-300 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-700'} ${isExpanded ? 'scale-100' : 'scale-95'}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Content */}
                            <div
                                className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? 'max-h-[400px] opacity-100 mt-5' : 'max-h-0 opacity-0'}`}
                            >
                                <div className={`pt-5 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                                    <p className={`text-sm leading-relaxed font-medium mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {capability.description}
                                    </p>

                                    {/* Applications */}
                                    {capability.applications.length > 0 && (
                                        <div>
                                            <div className={`text-xs font-black uppercase tracking-wider mb-3 flex items-center gap-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                                                <Zap size={14} />
                                                <span>Real Applications</span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                {capability.applications.map((app, i) => (
                                                    <div
                                                        key={i}
                                                        className={`text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-slate-800/70 text-slate-300 hover:bg-slate-700' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'} border ${isDarkMode ? 'border-slate-700/50' : 'border-slate-200'}`}
                                                    >
                                                        • {app}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AICapabilitiesSection;
