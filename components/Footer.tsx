import React from 'react';
import { Github, MessageCircle } from 'lucide-react';
import { ContactInfo } from '../types';

interface FooterProps {
    isPdfMode: boolean;
    contact?: ContactInfo;
    isRtl?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isPdfMode, contact, isRtl }) => {
    if (isPdfMode) return null;

    const cleanPhone = contact?.phone.replace(/\s+/g, '').replace('+', '') || '';
    const whatsappMessage = isRtl
        ? "مرحباً، لقد اطلعت على سيرتك الذاتية وأود التواصل معك."
        : "Hello, I viewed your resume and I'd like to get in touch.";
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <footer data-html2canvas-ignore className="py-12 text-center border-t border-slate-200 mt-16 bg-white relative">
            <div className="flex justify-center gap-6 mb-8">
                {/* GitHub */}
                <a href="https://github.com/younuskamal" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
                    <Github size={22} />
                    <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-slate-900 text-white text-xs py-1 px-2 rounded-lg whitespace-nowrap">
                        GitHub
                    </span>
                </a>

                {/* WhatsApp */}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-1">
                    <MessageCircle size={22} />
                    <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-[#25D366] text-white text-xs py-1 px-2 rounded-lg whitespace-nowrap">
                        WhatsApp
                    </span>
                </a>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">
                    © {new Date().getFullYear()} YOUNIS YASSER KAMAL
                </p>
                <p className="text-slate-300 text-xs font-medium">
                    Built with React, TypeScript & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
