import React, { useEffect, useState } from 'react';
import { User, Code, FileText, Send, Briefcase, GraduationCap } from 'lucide-react';

interface QuickNavProps {
    isDarkMode: boolean;
}

const QuickNav: React.FC<QuickNavProps> = ({ isDarkMode }) => {
    const [activeSection, setActiveSection] = useState('about');

    const sections = [
        { id: 'about', icon: <User size={16} />, label: 'About' },
        { id: 'highlights', icon: <Code size={16} />, label: 'Highlights' },
        { id: 'experience', icon: <Briefcase size={16} />, label: 'Experience' },
        { id: 'projects', icon: <FileText size={16} />, label: 'Projects' },
        { id: 'education', icon: <GraduationCap size={16} />, label: 'Education' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 300; // Offset

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - (window.innerWidth < 1024 ? 150 : 100),
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4 p-2 rounded-full ${isDarkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white/50 border-white/50'} backdrop-blur-md border shadow-lg`}>
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`
                            relative group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                            ${activeSection === section.id
                                ? `${isDarkMode ? 'bg-blue-600 text-white shadow-blue-900/50' : 'bg-blue-600 text-white shadow-blue-200'} shadow-lg scale-110`
                                : `${isDarkMode ? 'text-slate-500 hover:text-slate-300 hover:bg-slate-800' : 'text-slate-400 hover:text-slate-600 hover:bg-white'} `}
                        `}
                        aria-label={`Scroll to ${section.label}`}
                    >
                        {section.icon}

                        {/* Tooltip */}
                        <span className={`
                            absolute right-14 py-1 px-3 rounded-lg text-xs font-bold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap
                            ${isDarkMode ? 'bg-slate-800 text-white shadow-xl border border-slate-700' : 'bg-white text-slate-800 shadow-xl border border-slate-100'}
                        `}>
                            {section.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* Mobile/Tablet nav */}
            <div className="xl:hidden fixed inset-x-0 bottom-5 z-40 px-4">
                <div className={`mx-auto w-full max-w-md rounded-full border shadow-2xl backdrop-blur-xl px-2.5 py-1.5 flex items-center justify-between gap-1 ${isDarkMode ? 'bg-slate-900/85 border-slate-800 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-600'}`}>
                    {sections.map((section) => (
                        <button
                            key={`mobile-${section.id}`}
                            onClick={() => scrollToSection(section.id)}
                            className={`
                                w-12 h-12 rounded-full flex items-center justify-center transition-all relative
                                ${activeSection === section.id
                                    ? `${isDarkMode ? 'bg-blue-600/40 text-white ring-2 ring-blue-500/70' : 'bg-blue-100/80 text-blue-700 ring-2 ring-blue-200 shadow-inner'}`
                                    : `${isDarkMode ? 'text-slate-400 hover:bg-slate-800/70 hover:text-white' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'}`}
                            `}
                            aria-label={`Scroll to ${section.label}`}
                        >
                            <span className="w-6 h-6 flex items-center justify-center text-base">
                                {section.icon}
                            </span>
                            <span className="sr-only">{section.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default QuickNav;
