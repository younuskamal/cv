import React, { useState, useEffect, useRef } from 'react';
import { resumeData } from './locales';
import { LanguageCode } from './types';

// Components
import Preloader from './components/Preloader';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import ProfileCard from './components/Sidebar/ProfileCard';
import SkillsCard from './components/Sidebar/SkillsCard';
import LanguagesCard from './components/Sidebar/LanguagesCard';
import AboutSection from './components/MainContent/AboutSection';
import ExperienceSection from './components/MainContent/ExperienceSection';
import EducationSection from './components/MainContent/EducationSection';
import HighlightsSection from './components/MainContent/HighlightsSection';
import ProjectsSection from './components/MainContent/ProjectsSection';
import MethodologySection from './components/MainContent/MethodologySection';
import TechStack from './components/MainContent/TechStack';
import ScrollToTop from './components/ScrollToTop';

import BackgroundAnimation from './components/BackgroundAnimation';
import QuickNav from './components/QuickNav';

// Profile image path
const profileImage = "/images/wp.jpg";

const App: React.FC = () => {
  const [lang, setLang] = useState<LanguageCode>('en');
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPdfMode, setIsPdfMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Define isRtl here so it's available for the return statement
  const isRtl = lang === 'ar' || lang === 'ku';
  const data = resumeData[lang];

  useEffect(() => {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }

    // Simulate loading for smooth entrance
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleDownload = async () => {
    setIsDownloading(true);
    setIsPdfMode(true);
    const wasDarkMode = isDarkMode;
    setIsDarkMode(false); // Force Light Mode for clean PDF

    // Wait longer for complete render + animations to settle
    await new Promise(resolve => setTimeout(resolve, 1500));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof (window as any).html2pdf === 'undefined') {
      window.print();
      setIsDownloading(false);
      setIsPdfMode(false);
      setIsDarkMode(wasDarkMode);
      return;
    }

    const element = document.getElementById('cv-content');

    // Optimized settings for professional PDF
    const opt = {
      margin: [12, 12, 12, 12], // Balanced margins in mm
      filename: `Younis_Yasser_Kamal_CV_${lang.toUpperCase()}.pdf`,
      image: {
        type: 'jpeg',
        quality: 0.95 // High quality
      },
      html2canvas: {
        scale: 3, // Ultra-high quality
        useCORS: true,
        scrollY: -window.scrollY,
        scrollX: 0,
        windowWidth: 1100, // Optimal for A4
        windowHeight: element?.scrollHeight || 2500,
        logging: false,
        letterRendering: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        imageTimeout: 0,
        removeContainer: true,
        ignoreElements: (element: Element) => {
          return (
            element.classList.contains('print:hidden') ||
            element.hasAttribute('data-html2canvas-ignore') ||
            element.getAttribute('data-pdf-ignore') === 'true'
          );
        }
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        compress: true,
        precision: 2
      },
      pagebreak: {
        mode: ['avoid-all', 'css', 'legacy'],
        before: ['.page-break-before', '.break-before'],
        after: ['.page-break-after', '.break-after'],
        avoid: [
          '.break-inside-avoid',
          'img',
          'table',
          'tr',
          '.card',
          '.profile-section',
          '.experience-item',
          '.education-item',
          '.project-card'
        ]
      }
    };

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (window as any).html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('PDF generation failed', error);
      window.print();
    } finally {
      setIsDownloading(false);
      setIsPdfMode(false);
      setIsDarkMode(wasDarkMode);
    }
  };

  const cardClass = isPdfMode
    ? "bg-white border border-slate-200 shadow-lg rounded-3xl p-6 mb-6 break-inside-avoid relative overflow-hidden" // PDF Mode: Boxed, Shadowed, Clean
    : `${isDarkMode
      ? 'bg-slate-900/60 backdrop-blur-xl border-slate-700/50 shadow-lg'
      : 'bg-white/70 backdrop-blur-xl border-white/50 shadow-xl shadow-slate-200/50'}
      rounded-3xl border p-6 lg:p-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl spotlight-card relative overflow-hidden`;

  const requestRef = useRef<number>();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (requestRef.current) return;

    // Capture event properties needed
    const clientX = e.clientX;
    const clientY = e.clientY;

    requestRef.current = requestAnimationFrame(() => {
      const cards = document.getElementsByClassName('spotlight-card');
      for (const card of cards) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cardEl = card as HTMLElement;
        const rect = cardEl.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        cardEl.style.setProperty('--mouse-x', `${x}px`);
        cardEl.style.setProperty('--mouse-y', `${y}px`);
      }
      requestRef.current = undefined;
    });
  };

  useEffect(() => {
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen font-sans selection:bg-blue-500 selection:text-white ${isDarkMode ? 'dark text-slate-100' : 'text-slate-800'}`}
      onMouseMove={handleMouseMove}
    >
      <Preloader isLoading={isLoading} isDarkMode={isDarkMode} />

      {!isPdfMode && <div className="bg-noise print:hidden"></div>}

      {!isPdfMode && (
        <div className="print:hidden">
          <BackgroundAnimation isDarkMode={isDarkMode} />
        </div>
      )}

      {!isPdfMode && (
        <div className="print:hidden">
          <QuickNav isDarkMode={isDarkMode} />
        </div>
      )}

      <Header lang={lang} setLang={setLang} isPdfMode={isPdfMode} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <main id="cv-content" className={`max-w-7xl mx-auto px-4 py-6 md:py-16 relative z-10 ${isPdfMode ? 'bg-white !max-w-[190mm] mx-auto !p-0 !px-[15mm] !py-[15mm]' : ''} spotlight-group transform transition-all duration-700 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className={`items-start gap-6 md:gap-10 ${isPdfMode ? 'flex flex-col !gap-6' : 'grid grid-cols-1 lg:grid-cols-12'}`}>

          {/* LEFT SIDEBAR (Or Top Section in PDF) */}
          <div className={`${isPdfMode ? 'w-full break-inside-avoid' : 'lg:col-span-4 lg:sticky lg:top-28'} flex flex-col gap-8`}>
            <ProfileCard
              data={data}
              isPdfMode={isPdfMode}
              isDownloading={isDownloading}
              handleDownload={handleDownload}
              isRtl={isRtl}
              profileImage={profileImage}
              isDarkMode={isDarkMode}
            />
            <SkillsCard data={data} isPdfMode={isPdfMode} isDarkMode={isDarkMode} />
            <LanguagesCard data={data} isPdfMode={isPdfMode} isDarkMode={isDarkMode} />
          </div>

          {/* RIGHT CONTENT */}
          <div className={`${isPdfMode ? 'w-full' : 'lg:col-span-8'} flex flex-col gap-8`}>
            <AboutSection data={data} cardClass={cardClass} isPdfMode={isPdfMode} isDarkMode={isDarkMode} />
            <HighlightsSection data={data} cardClass={cardClass} isPdfMode={isPdfMode} isDarkMode={isDarkMode} />
            <MethodologySection data={data} cardClass={cardClass} isPdfMode={isPdfMode} isDarkMode={isDarkMode} />
            <ExperienceSection data={data} cardClass={cardClass} isPdfMode={isPdfMode} isDarkMode={isDarkMode} />
            <ProjectsSection data={data} cardClass={cardClass} isPdfMode={isPdfMode} isDarkMode={isDarkMode} />
            <EducationSection data={data} cardClass={cardClass} isPdfMode={isPdfMode} isDarkMode={isDarkMode} />
            <TechStack isPdfMode={isPdfMode} isDarkMode={isDarkMode} />
          </div>
        </div>
      </main>

      <Footer isPdfMode={isPdfMode} contact={data.contact} isRtl={isRtl} />

      <ScrollToTop />
    </div>
  );
};

export default App;