import React from 'react';
import { Code2, Brackets, Layers, Database, Cpu, Settings, Monitor, Zap } from 'lucide-react';

interface TechStackProps {
    isPdfMode: boolean;
    isDarkMode: boolean;
}

const TechStack: React.FC<TechStackProps> = ({ isPdfMode, isDarkMode }) => {
    if (isPdfMode) return null;

    const skillIcons: { [key: string]: string } = {
        "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "Electron": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
        "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "SQLite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "Arduino": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
        "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    };

    return (
        <section className={`rounded-[2.5rem] p-6 md:p-10 text-white relative overflow-hidden mt-4 ${isDarkMode ? 'bg-slate-900 shadow-[0_0_30px_-5px_rgba(30,58,138,0.4)] border border-slate-800' : 'bg-slate-900 shadow-2xl shadow-blue-200'}`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                        <Code2 size={20} className="text-blue-400" />
                    </div>
                    <h2 className="text-xl font-black uppercase tracking-widest">Tech Stack</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {/* Languages */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 duration-300 group">
                        <Brackets size={20} className="text-blue-400 mb-2 group-hover:animate-pulse" />
                        <div className="text-[9px] font-black uppercase text-slate-400 tracking-wider mb-2">Languages</div>
                        <div className="flex gap-2">
                            {["Python", "JavaScript", "TypeScript"].map(tech => (
                                <img key={tech} src={skillIcons[tech]} title={tech} className="w-6 h-6 hover:scale-125 transition-transform" alt={tech} />
                            ))}
                        </div>
                    </div>

                    {/* Desktop */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 duration-300 group">
                        <Monitor size={20} className="text-blue-400 mb-2 group-hover:animate-pulse" />
                        <div className="text-[9px] font-black uppercase text-slate-400 tracking-wider mb-2">Desktop</div>
                        <div className="flex gap-2 items-center">
                            <img src={skillIcons["Electron"]} title="Electron" className="w-6 h-6 hover:scale-125 transition-transform" alt="Electron" />
                            <img src={skillIcons["Python"]} title="PyQt / Tkinter" className="w-6 h-6 hover:scale-125 transition-transform" alt="Python" />
                            <span className="text-[10px] font-bold text-slate-300">PyQt</span>
                        </div>
                    </div>

                    {/* Web */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 duration-300 group">
                        <Layers size={20} className="text-blue-400 mb-2 group-hover:animate-pulse" />
                        <div className="text-[9px] font-black uppercase text-slate-400 tracking-wider mb-2">Web</div>
                        <div className="flex gap-2">
                            {["React", "Next.js", "Node.js"].map(tech => (
                                <img key={tech} src={skillIcons[tech]} title={tech} className="w-6 h-6 hover:scale-125 transition-transform" alt={tech} />
                            ))}
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 duration-300 group">
                        <Database size={20} className="text-blue-400 mb-2 group-hover:animate-pulse" />
                        <div className="text-[9px] font-black uppercase text-slate-400 tracking-wider mb-2">Databases</div>
                        <div className="flex gap-2">
                            {["SQLite", "PostgreSQL"].map(tech => (
                                <img key={tech} src={skillIcons[tech]} title={tech} className="w-6 h-6 hover:scale-125 transition-transform" alt={tech} />
                            ))}
                        </div>
                    </div>

                    {/* Automation */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 duration-300 group">
                        <Zap size={20} className="text-yellow-400 mb-2 group-hover:animate-pulse" />
                        <div className="text-[9px] font-black uppercase text-slate-400 tracking-wider mb-2">Automation</div>
                        <div className="flex gap-2 items-center">
                            <img src={skillIcons["Arduino"]} title="Arduino" className="w-6 h-6 hover:scale-125 transition-transform" alt="Arduino" />
                            <Cpu size={24} className="text-slate-300" />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold">
                        <Cpu size={12} className="text-blue-400" /> Embedded Systems
                    </span>
                    <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold">
                        <Settings size={12} className="text-blue-400" /> Control Panels
                    </span>
                    <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold">
                        <img src={skillIcons["Git"]} className="w-3 h-3" alt="Git" /> Git/DevOps
                    </span>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
