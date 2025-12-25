import React from 'react';
import { GraduationCap, Brackets, Cpu } from 'lucide-react';
import { ResumeData } from '../../types';

interface EducationSectionProps {
    data: ResumeData;
    cardClass: string;
    isPdfMode: boolean;
    isDarkMode: boolean;
}

const EducationSection: React.FC<EducationSectionProps> = ({ data, cardClass, isPdfMode, isDarkMode }) => {
    return (
        <section id="education" className="mb-8 animate-fade-in-up animation-delay-300">
            <div className={`flex items-center gap-4 mb-8 px-2 mt-4 ${isPdfMode ? 'px-0 mt-0 mb-6' : ''}`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isPdfMode ? 'text-slate-900 bg-transparent' : `${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600 shadow-sm'}`}`}>
                    <GraduationCap size={24} />
                </div>
                <h2 className={`text-2xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{data.ui.sectionTitles.education}</h2>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isPdfMode ? 'grid-cols-1 gap-0' : ''}`}>
                {data.education.map((edu, index) => (
                    <div key={index} className={`${cardClass} ${isPdfMode ? 'h-auto py-4 border-slate-100' : 'flex flex-col h-full hover:border-blue-200 group'}`}>
                        <div className="mb-6">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all ${isPdfMode ? 'hidden' : `${isDarkMode ? 'bg-slate-800 text-slate-400 group-hover:bg-blue-600 group-hover:text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white shadow-sm'}`}`}>
                                {edu.degree.toLowerCase().includes('computer') || edu.degree.toLowerCase().includes('programming') ? <Brackets size={24} /> : <Cpu size={24} />}
                            </div>
                            <h3 className={`text-lg font-extrabold leading-snug mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{edu.degree}</h3>
                            <p className={`text-sm font-bold opacity-80 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{edu.institution}</p>
                        </div>

                        <div className={`mt-auto pt-6 space-y-3 ${isPdfMode ? 'pt-2 border-0' : `border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-50'}`}`}>
                            {edu.keyValues.map((val, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${isPdfMode ? 'bg-slate-800' : 'bg-blue-400'}`}></div>
                                    <p className={`text-xs font-medium leading-relaxed opacity-90 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{val}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;
