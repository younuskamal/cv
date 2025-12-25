import React, { useEffect, useState } from 'react';

const snippets = [
  "const", "return", "function", "=>", "import", "export",
  "<div>", "</div>", "npm", "git", "python", "docker",
  "{}", "[]", "&&", "||", "async", "await", "class",
  "if", "else", "try", "catch", "interface", "type"
];

interface BackgroundAnimationProps {
  isDarkMode: boolean;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ isDarkMode }) => {
  const [items, setItems] = useState<{ id: number; text: string; left: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const newItems = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      text: snippets[Math.floor(Math.random() * snippets.length)],
      left: Math.random() * 100,
      duration: 15 + Math.random() * 25, // Slower: 15-40s
      delay: Math.random() * 10,
    }));
    setItems(newItems);
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-0 select-none transition-colors duration-500 ${isDarkMode ? 'bg-[#0B1120]' : 'bg-slate-50'}`}>

      {/* GRID PATTERN FOR DARK MODE - SOFTENED */}
      {isDarkMode && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      )}

      {/* LIGHT MODE GRADIENT BLOBS (Kept for light mode as it works well there) */}
      {!isDarkMode && (
        <>
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] animate-blob bg-blue-300 opacity-40"></div>
          <div className="absolute top-[20%] right-[-10%] w-[45%] h-[50%] rounded-full blur-[120px] animate-blob animation-delay-4000 bg-indigo-300 opacity-40"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full blur-[120px] animate-blob animation-delay-8000 bg-blue-200 opacity-40"></div>
        </>
      )}

      {/* DARK MODE VIGNETTE & GLOW */}
      {isDarkMode && (
        <>
          {/* Central Blue Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          {/* Bottom Purple Glow */}
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        </>
      )}

      {/* Subtle Floating Code */}
      {items.map((item) => (
        <div
          key={item.id}
          className={`absolute bottom-0 opacity-0 animate-float-up font-mono text-xs font-bold tracking-wider ${isDarkMode ? 'text-blue-400/20' : 'text-slate-400/40'
            }`}
          style={{
            left: `${item.left}%`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.text}
        </div>
      ))}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 15s infinite ease-in-out;
        }
        .animation-delay-4000 {
          animation-delay: 5s;
        }
        .animation-delay-8000 {
          animation-delay: 10s;
        }
        @keyframes floatUp {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-20vh) rotate(20deg); opacity: 0; }
        }
        .animate-float-up {
          animation-name: floatUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnimation;
