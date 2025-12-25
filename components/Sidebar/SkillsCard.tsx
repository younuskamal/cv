import React, { useState } from 'react';
import { Terminal, Cpu, Globe, Wrench } from 'lucide-react';
import { ResumeData } from '../../types';

interface SkillsCardProps {
    data: ResumeData;
    isPdfMode: boolean;
    isDarkMode: boolean;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ data, isPdfMode, isDarkMode }) => {
    // If PDF mode, maybe show all? Or just default to first category. Let's show all flattened for PDF.
    const [activeTab, setActiveTab] = useState(0);

    // Flatten skills for PDF
    const allSkills = data.skills.flatMap(cat => cat.items);

    if (isPdfMode) {
        return (
            <div className="mb-6">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                    <Terminal size={18} className="text-blue-600" />
                    {data.ui.sectionTitles.skills}
                </h3>
                <div className="flex flex-wrap gap-2">
                    {allSkills.map((skill, index) => (
                        <span key={index} className="px-3 py-1.5 text-[10px] font-bold rounded-lg bg-white border border-slate-200 text-slate-800">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        );
    }

    const categories = data.skills;

    // Icon Mapping
    const skillIcons: { [key: string]: string } = {
        "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        "Electron.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
        "Python (PyQt)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "Arduino": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
        "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        "Git/GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "SQLite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    };

    const getCategoryIcon = (index: number) => {
        if (index === 0) return <Globe size={14} />;
        if (index === 1) return <Cpu size={14} />;
        return <Wrench size={14} />;
    };

    return (
        <div className={`${isDarkMode ? 'bg-slate-900/60 backdrop-blur-xl border-slate-700/50' : 'bg-white/60 backdrop-blur-xl border-white/50'} rounded-[2rem] shadow-lg border p-6 lg:p-8 animate-fade-in-up animation-delay-100 spotlight-card relative overflow-hidden`}>
            <h3 className={`text-xs font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                <Terminal size={18} className="text-blue-500" />
                {data.ui.sectionTitles.skills}
            </h3>

            {/* Tabs */}
            <div className="flex bg-slate-100/10 p-1 rounded-xl mb-6 relative border border-white/5 overflow-hidden">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 relative z-10 ${activeTab === index
                            ? `${isDarkMode ? 'bg-slate-700 text-white shadow-md' : 'bg-white text-blue-600 shadow-md'}`
                            : `${isDarkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'}`
                            }`}
                    >
                        {getCategoryIcon(index)}
                        <span className="hidden sm:inline">{cat.category}</span>
                    </button>
                ))}
            </div>

            {/* Skills Content */}
            <div className="min-h-[120px]">
                <div className="flex flex-wrap gap-2.5">
                    {categories[activeTab]?.items.map((skill, index) => (
                        <span
                            key={`${activeTab}-${index}`}
                            className={`
                                flex items-center gap-2 animate-pop-in px-3 py-1.5 text-[11px] font-bold rounded-xl transition-all cursor-default select-none group
                                ${isDarkMode
                                    ? 'bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-blue-600 hover:border-blue-500 hover:text-white hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                                    : 'bg-white text-slate-600 border border-slate-100 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-100'
                                }
                            `}
                            style={{ animationDelay: `${index * 50}ms`, opacity: 0, animationFillMode: 'forwards' }}
                        >
                            {skillIcons[skill] && (
                                <img src={skillIcons[skill]} alt="" className="w-4 h-4 object-contain group-hover:scale-125 transition-transform" />
                            )}
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;
