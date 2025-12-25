import React from 'react';
import { Star, Sparkles } from 'lucide-react';
import { ResumeData } from '../../types';

interface HighlightsSectionProps {
    data: ResumeData;
    cardClass: string;
    isPdfMode: boolean;
    isDarkMode: boolean;
}

const HighlightsSection: React.FC<HighlightsSectionProps> = ({ data, cardClass, isPdfMode, isDarkMode }) => {
    return (
        <section id="highlights" className="mb-6 animate-fade-in-up">
            <div className={`${cardClass} ${!isPdfMode ? 'border-l-4 border-l-blue-500' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isPdfMode ? 'text-slate-900 bg-transparent' : `${isDarkMode ? 'bg-blue-900/30 text-yellow-400' : 'bg-blue-50 text-yellow-500 shadow-sm'}`}`}>
                        <Star size={24} />
                    </div>
                    <h2 className={`text-2xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        {data.ui.sectionTitles.highlights}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.highlights.map((highlight, index) => (
                        <div key={index} className={`group flex items-start gap-4 p-4 rounded-2xl border border-transparent ${isPdfMode ? 'bg-slate-50' : `${isDarkMode ? 'bg-slate-800/50 hover:bg-slate-800 hover:border-blue-500/30' : 'bg-slate-50 hover:bg-white hover:shadow-lg hover:border-blue-100'} transition-all duration-300 hover:-translate-y-1`}`}>
                            <div className={`mt-1 bg-blue-500/10 p-1.5 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                                <Sparkles size={16} className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                            </div>
                            <span className={`text-[15px] font-medium leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                {highlight}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;
