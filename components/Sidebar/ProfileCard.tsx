import React from 'react';
import { Mail, Phone, MapPin, Download, Loader2, Briefcase } from 'lucide-react';
import { ResumeData } from '../../types';
import CodingTimer from '../CodingTimer';

interface ProfileCardProps {
    data: ResumeData;
    isPdfMode: boolean;
    isDownloading: boolean;
    handleDownload: () => void;
    isRtl: boolean;
    profileImage: string;
    isDarkMode: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    data, isPdfMode, isDownloading, handleDownload, isRtl, profileImage, isDarkMode
}) => {
    // Typewriter effect
    const [displayedTitle, setDisplayedTitle] = React.useState('');
    const [typingIndex, setTypingIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        const titles = data.typewriterTitles || [data.title];
        const currentTitle = titles[typingIndex % titles.length];

        const handleType = () => {
            if (isDeleting) {
                setDisplayedTitle(prev => prev.substring(0, prev.length - 1));
            } else {
                setDisplayedTitle(prev => currentTitle.substring(0, prev.length + 1));
            }
        };

        let timer: NodeJS.Timeout;

        if (!isDeleting && displayedTitle === currentTitle) {
            // Wait before deleting
            timer = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayedTitle === '') {
            // Wait before typing next
            setIsDeleting(false);
            setTypingIndex((prev) => prev + 1);
        } else {
            // Typing or deleting
            const speed = isDeleting ? 30 : 60;
            timer = setTimeout(handleType, speed);
        }

        return () => clearTimeout(timer);
    }, [displayedTitle, isDeleting, typingIndex, data]);

    return (
        <div className={`${isPdfMode ? 'text-center mb-6 border-b border-slate-100 pb-8' : `${isDarkMode ? 'bg-slate-900/60 backdrop-blur-xl border-slate-700/50' : 'bg-white/60 backdrop-blur-xl border-white/50'} shadow-2xl rounded-[2.5rem] border p-8 text-center lg:text-start overflow-hidden relative animate-fade-in-up spotlight-card`}`}>

            {!isPdfMode && (
                <div className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-br ${isDarkMode ? 'from-slate-800 via-slate-900 to-blue-950' : 'from-slate-900 via-slate-800 to-blue-900'}`}>
                    <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                </div>
            )}

            <div className={`relative ${isPdfMode ? 'mb-6' : 'mt-16 mb-8'} inline-block lg:block`}>
                <div className={`relative w-44 h-44 mx-auto ${isPdfMode ? '' : `lg:mx-0 ${isDarkMode ? 'bg-slate-800/50 border-white/10' : 'bg-white/40 border-white/60'} backdrop-blur-md p-2 rounded-[3rem] shadow-2xl transition-all hover:scale-[1.05] hover:rotate-2 animate-float border`}`}>
                    <div className={`w-full h-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'} rounded-[2.5rem] overflow-hidden relative shadow-inner`}>
                        <img
                            src={profileImage}
                            alt={data.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                                (e.target as any).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=0f172a&color=fff&size=200`;
                            }}
                        />
                    </div>
                    {!isPdfMode && (
                        <>
                            <div className={`absolute -bottom-3 -right-3 w-12 h-12 ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'} rounded-2xl flex items-center justify-center shadow-xl z-10 ring-2 ${isDarkMode ? 'ring-slate-700/50' : 'ring-slate-100'}`}>
                                <Briefcase size={20} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                            </div>
                            <div className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-white/20 ${isDarkMode ? 'bg-black/50 text-emerald-400' : 'bg-white/80 text-emerald-600'}`}>
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider">{data.ui.labels.availableForWork}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="relative">
                <h1 className={`text-3xl lg:text-4xl font-black mb-2 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {data.name}
                </h1>
                <p className={`text-lg font-medium mb-6 flex items-center justify-center lg:justify-start gap-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {isPdfMode ? data.title : <span className="typewriter-cursor">{displayedTitle}</span>}
                </p>

                <div className="flex flex-col gap-3">
                    {/* Email */}
                    <a href={`mailto:${data.contact.email}`} className={`flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 hover:scale-105 group ${isPdfMode ? '' : 'hover:bg-slate-100/50 dark:hover:bg-slate-800/50'}`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-sm ${isDarkMode ? 'bg-slate-800 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' : 'bg-slate-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white'}`}>
                            <Mail size={18} />
                        </div>
                        <span className={`text-sm font-semibold transition-colors ${isDarkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>{data.contact.email}</span>
                    </a>

                    {/* Phone */}
                    <a href={`tel:${data.contact.phone.replace(/\s/g, '')}`} className={`flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 hover:scale-105 group ${isPdfMode ? '' : 'hover:bg-slate-100/50 dark:hover:bg-slate-800/50'}`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-sm ${isDarkMode ? 'bg-slate-800 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' : 'bg-slate-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white'}`}>
                            <Phone size={18} />
                        </div>
                        <span dir="ltr" className={`text-sm font-semibold transition-colors ${isDarkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>{data.contact.phone}</span>
                    </a>

                    {/* Location */}
                    <div className={`flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 hover:scale-105 group ${isPdfMode ? '' : 'hover:bg-slate-100/50 dark:hover:bg-slate-800/50 cursor-default'}`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-sm ${isDarkMode ? 'bg-slate-800 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' : 'bg-slate-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white'}`}>
                            <MapPin size={18} />
                        </div>
                        <span className={`text-sm font-semibold transition-colors ${isDarkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>{data.contact.location}</span>
                    </div>

                    {/* Birth Date */}
                    {data.contact.birthDate && (
                        <div className={`flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 hover:scale-105 group ${isPdfMode ? '' : 'hover:bg-slate-100/50 dark:hover:bg-slate-800/50 cursor-default'}`}>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-sm ${isDarkMode ? 'bg-slate-800 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' : 'bg-slate-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white'}`}>
                                <span className="text-lg">🎂</span>
                            </div>
                            <span className={`text-sm font-semibold transition-colors ${isDarkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>{data.contact.birthDate}</span>
                        </div>
                    )}

                    <CodingTimer isDarkMode={isDarkMode} isPdfMode={isPdfMode} data={data} />
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 print:hidden" data-html2canvas-ignore>
                    <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className={`w-full py-4 rounded-2xl font-bold text-sm disabled:opacity-70 disabled:cursor-wait transition-all flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-95 group relative overflow-hidden ${isDarkMode
                            ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-blue-900/40 hover:shadow-blue-600/50 border border-blue-500/30'
                            : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-300'
                            }`}
                    >
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>

                        {isDownloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} className="group-hover:animate-bounce" />}
                        <span className="relative z-10">
                            {isDownloading
                                ? (isRtl ? 'جاري التحميل...' : 'Preparing PDF...')
                                : (data.ui.labels.download || (isRtl ? 'تحميل السيرة الذاتية' : 'Download Resume'))}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
