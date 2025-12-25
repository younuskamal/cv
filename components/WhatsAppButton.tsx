import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
    phone: string;
    isRtl: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phone, isRtl }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 3000); // Show after 3 seconds
        return () => clearTimeout(timer);
    }, []);

    const cleanPhone = phone.replace(/\s+/g, '').replace('+', '');
    const message = isRtl
        ? "مرحباً، لقد اطلعت على سيرتك الذاتية وأود التواصل معك."
        : "Hello, I viewed your resume and I'd like to get in touch.";

    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 z-40 flex items-center gap-3 transition-all duration-500 ease-elastic ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                } ${isRtl ? 'left-6' : 'right-6'}`}
        >
            {/* Tooltip Label */}
            <span className={`bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg transition-all duration-300 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 hidden md:block border border-slate-100 whitespace-nowrap`}>
                {isRtl ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
            </span>

            {/* Button Circle */}
            <div className="relative group">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 duration-1000"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 transition-transform duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 border-2 border-white/20">
                    <MessageCircle fill="white" className="text-white w-7 h-7" />
                </div>

                {/* Notification Dot */}
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></span>
                </span>
            </div>
        </a>
    );
};

export default WhatsAppButton;
