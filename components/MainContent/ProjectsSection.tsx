import React, { useState } from 'react';
import { Rocket, ChevronDown, ChevronUp, ShoppingCart, Activity, Shield, ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { ResumeData } from '../../types';

interface ProjectsSectionProps {
    data: ResumeData;
    cardClass: string;
    isPdfMode: boolean;
    isDarkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data, cardClass, isPdfMode, isDarkMode }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        if (isPdfMode) return;
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const getProjectIcon = (title: string) => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('pos') || lowerTitle.includes('sales')) return <ShoppingCart size={24} />;
        if (lowerTitle.includes('clinic') || lowerTitle.includes('medical')) return <Activity size={24} />;
        if (lowerTitle.includes('source') || lowerTitle.includes('license')) return <Shield size={24} />;
        return <Rocket size={24} />;
    };

    return (
        <section id="projects" className="animate-fade-in-up animation-delay-200 mb-8">
            <div className={`flex items-center gap-4 mb-6 px-2 ${isPdfMode ? 'px-0' : ''}`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isPdfMode ? 'text-slate-900 bg-transparent' : `${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600 shadow-sm'}`}`}>
                    <Rocket size={24} />
                </div>
                <h2 className={`text-2xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{data.ui.sectionTitles.projects}</h2>
            </div>

            <div className={`grid grid-cols-1 gap-6 ${isPdfMode ? 'gap-8' : ''}`}>
                {data.projects.map((project, index) => {
                    const isExpanded = isPdfMode || expandedIndex === index;

                    return (
                        <div
                            key={index}
                            className={`${cardClass} group relative overflow-hidden transition-all duration-300 transform ${!isPdfMode && isExpanded ? `ring-2 ${isDarkMode ? 'ring-blue-500/50' : 'ring-blue-200'} scale-[1.01]` : 'hover:scale-[1.01] cursor-pointer'}`}
                            onClick={() => toggleExpand(index)}
                        >
                            {/* Project Header */}
                            <div className="flex items-start gap-5">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${isPdfMode ? 'bg-slate-100 text-slate-800' : `${isDarkMode ? 'bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white shadow-sm'}`}`}>
                                    {getProjectIcon(project.title)}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <h3 className={`text-xl font-black tracking-tight mb-2 truncate pr-4 transition-colors ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'}`}>
                                            {project.title}
                                        </h3>
                                        {!isPdfMode && (
                                            <div className={`p-1.5 rounded-full transition-all duration-300 ${isExpanded ? 'rotate-180 bg-blue-500/10 text-blue-500' : `text-slate-400 group-hover:translate-x-1`}`}>
                                                {isExpanded ? <ChevronUp size={20} /> : <ArrowUpRight size={20} />}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <span key={i} className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${isDarkMode ? 'bg-slate-800/50 border-slate-700 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-500'}`}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Content */}
                            <div
                                className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
                            >
                                <div className={`pt-6 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                                    <p className={`text-[15px] leading-relaxed font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {project.description}
                                    </p>

                                    {/* Project Links */}
                                    {!isPdfMode && (project.githubUrl || project.demoUrl) && (
                                        <div className="mt-6 flex flex-wrap gap-3">
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${isDarkMode ? 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg'}`}
                                                >
                                                    <Github size={18} />
                                                    <span>View on GitHub</span>
                                                    <ExternalLink size={14} className="opacity-60" />
                                                </a>
                                            )}
                                            {project.demoUrl && (
                                                <a
                                                    href={project.demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'}`}
                                                >
                                                    <Rocket size={18} />
                                                    <span>Live Demo</span>
                                                    <ExternalLink size={14} className="opacity-60" />
                                                </a>
                                            )}
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

export default ProjectsSection;
