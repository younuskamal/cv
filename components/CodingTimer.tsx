import React, { useState, useEffect } from 'react';
import { Timer, Clock } from 'lucide-react';
import { ResumeData } from '../types';

interface CodingTimerProps {
    isDarkMode: boolean;
    isPdfMode: boolean;
    data: ResumeData;
}

const CodingTimer: React.FC<CodingTimerProps> = ({ isDarkMode, isPdfMode, data }) => {

    // Start date: Jan 1, 2022
    const startDate = new Date('2022-01-01T00:00:00');

    const [time, setTime] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = now.getTime() - startDate.getTime();

            const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
            const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
            const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTime({ years, months, days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (isPdfMode) return null;

    return (
        <div className={`mt-6 p-4 rounded-2xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-50 border border-slate-100'}`}>
            {/* Background Pulse */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-slate-700 text-blue-400' : 'bg-white text-blue-600 shadow-sm'}`}>
                    <Clock size={16} className="animate-[spin_4s_linear_infinite]" />
                </div>
                <h3 className={`text-xs font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {data.ui.codingTimer.title}
                </h3>
            </div>

            <div className="flex justify-between items-end">
                <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-center">
                    <div className="flex flex-col items-center">
                        <span className={`text-xl font-black font-mono leading-none ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                            {String(time.years).padStart(2, '0')}
                        </span>
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{data.ui.codingTimer.years}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className={`text-xl font-black font-mono leading-none ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                            {String(time.months).padStart(2, '0')}
                        </span>
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{data.ui.codingTimer.months}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className={`text-xl font-black font-mono leading-none ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                            {String(time.days).padStart(2, '0')}
                        </span>
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{data.ui.codingTimer.days}</span>
                    </div>

                    {/* Second Row for precision */}
                    <div className="flex flex-col items-center mt-1">
                        <span className={`text-sm font-bold font-mono leading-none ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            {String(time.hours).padStart(2, '0')}
                        </span>
                        <span className={`text-[7px] font-bold uppercase ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>{data.ui.codingTimer.hours}</span>
                    </div>
                    <div className="flex flex-col items-center mt-1">
                        <span className={`text-sm font-bold font-mono leading-none ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            {String(time.minutes).padStart(2, '0')}
                        </span>
                        <span className={`text-[7px] font-bold uppercase ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>{data.ui.codingTimer.minutes}</span>
                    </div>
                    <div className="flex flex-col items-center mt-1">
                        <span className={`text-sm font-bold font-mono leading-none ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} animate-pulse`}>
                            {String(time.seconds).padStart(2, '0')}
                        </span>
                        <span className={`text-[7px] font-bold uppercase ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>{data.ui.codingTimer.seconds}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodingTimer;
