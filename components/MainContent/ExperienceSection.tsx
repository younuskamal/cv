import React from 'react';
import { Briefcase, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { ResumeData } from '../../types';

interface ExperienceSectionProps {
    data: ResumeData;
    cardClass: string;
    isPdfMode: boolean;
    isDarkMode: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data, cardClass, isPdfMode, isDarkMode }) => {
    const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

    const toggleExpand = (index: number) => {
        if (isPdfMode) return;
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="experience" className="animate-fade-in-up animation-delay-100 mb-8">
            <div className={`flex items-center gap-4 mb-8 px-2 ${isPdfMode ? 'px-0 mb-6' : ''}`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isPdfMode ? 'text-slate-900 bg-transparent' : `${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600 shadow-sm'}`}`}>
                    <Briefcase size={24} />
                </div>
                <h2 className={`text-2xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{data.ui.sectionTitles.experience}</h2>
            </div>

            <div className={`space-y-4 group/list ${isPdfMode ? 'space-y-0 gap-8 block' : ''}`}>
                {data.experience.map((job, index) => {
                    const isExpanded = isPdfMode || expandedIndex === index;
                    return (
                        <div
                            key={index}
                            className={`${cardClass} break-inside-avoid group cursor-pointer transition-all duration-500 
                                ${!isPdfMode && isExpanded ? `ring-2 ${isDarkMode ? 'ring-blue-900' : 'ring-blue-100'}` : ''}
                                ${!isPdfMode ? 'hover:!opacity-100 hover:!scale-[1.02] hover:!shadow-2xl hover:!filter-none group-hover/list:opacity-40 group-hover/list:blur-[1px] group-hover/list:scale-[0.98]' : ''}
                            `}
                            onClick={() => toggleExpand(index)}
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4 mb-2">
                                <div className="flex-1">
                                    <h3 className={`text-xl font-extrabold mb-1 group-hover:text-blue-600 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                        {job.role}
                                    </h3>
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <span className={`font-bold text-sm tracking-wide ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{job.company}</span>
                                        <span className="hidden md:inline w-1 h-1 bg-slate-300 rounded-full"></span>
                                        <span className="text-slate-400 text-xs font-semibold uppercase">{job.location}</span>
                                    </div>
                                </div>
                                {!isPdfMode && (
                                    <div className={`self-end md:self-start p-2 rounded-xl transition-colors ${isExpanded ? 'bg-blue-50 text-blue-600' : 'text-slate-400'}`}>
                                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                )}
                            </div>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                <ul className={`grid grid-cols-1 gap-3 pt-4 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                                    {job.description.map((desc, i) => (
                                        <li key={i} className={`flex items-start gap-4 text-[15px] leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                            <div className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${isPdfMode ? 'bg-slate-800' : `${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}`}></div>
                                            <span className="opacity-90">{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ExperienceSection;
