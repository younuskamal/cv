import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed right-4 sm:right-6 bottom-24 sm:bottom-6 z-50 p-4 bg-slate-900 text-white rounded-2xl shadow-2xl hover:bg-slate-800 transition-all hover:-translate-y-1 active:translate-y-0 print:hidden"
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} />
        </button>
    );
};

export default ScrollToTop;
