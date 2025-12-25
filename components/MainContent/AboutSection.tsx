import React from 'react';
import { User } from 'lucide-react';
import { ResumeData } from '../../types';

interface AboutSectionProps {
    data: ResumeData;
    cardClass: string;
    isPdfMode: boolean;
    isDarkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ data, cardClass, isPdfMode, isDarkMode }) => {
    return (
        <section id="about" className={`${cardClass} relative overflow-hidden animate-fade-in-up`}>
            {!isPdfMode && (
                <div className={`absolute top-0 right-0 -tr-y-1/2 translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-60 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}></div>
            )}
            <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isPdfMode ? 'text-slate-900 bg-transparent' : `${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'}`}`}>
                        <User size={24} />
                    </div>
                    <h2 className={`text-2xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{data.ui.sectionTitles.about}</h2>
                </div>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-lg font-medium opacity-90`}>
                    {data.summary}
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
