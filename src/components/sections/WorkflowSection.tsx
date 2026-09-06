import React from 'react';

export const WorkflowSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <span className="px-3.5 py-1 rounded-full bg-[#eaedff] text-xs uppercase tracking-wider text-[#3525cd] font-bold mb-3 border border-[#c7c4d8]/40">
          Frictionless Flow
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] max-w-xl tracking-tight leading-tight">
          From idea to shipped. Without losing context.
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#464555] max-w-lg">
          Three simple principles that keep your small team moving at
          extraordinary speed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
        <div className="flex flex-col p-6 sm:p-8 bg-white rounded-2xl shadow-xs hover:shadow-lg border border-[#eaedff] transition-all relative group hover:border-[#8792fe]">
          <div className="flex items-center justify-between mb-6">
            <span className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#3525cd]/30 font-black">
              01
            </span>
            <span className="w-10 h-10 rounded-full bg-[#e2dfff] text-[#3525cd] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[20px]">
                lightbulb
              </span>
            </span>
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e] mb-2">
            Plan with intent
          </h3>
          <p className="text-sm sm:text-base text-[#464555] leading-relaxed">
            Turn abstract ideas into structured projects and clear subtasks
            without bureaucratic sprint overhead.
          </p>
          <div className="mt-6 p-2.5 rounded-lg bg-[#f2f3ff] font-['JetBrains_Mono'] text-xs text-[#464555] flex items-center gap-2 border border-[#eaedff]">
            <span className="material-symbols-outlined text-[#3525cd] text-[15px]">
              bolt
            </span>
            <span>Instant spec generation via templates</span>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8 bg-white rounded-2xl shadow-xs hover:shadow-lg border border-[#eaedff] transition-all relative group hover:border-[#8792fe]">
          <div className="flex items-center justify-between mb-6">
            <span className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#4953bc]/30 font-black">
              02
            </span>
            <span className="w-10 h-10 rounded-full bg-[#e0e0ff] text-[#4953bc] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[20px]">
                diversity_3
              </span>
            </span>
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e] mb-2">
            Collaborate in context
          </h3>
          <p className="text-sm sm:text-base text-[#464555] leading-relaxed">
            Keep discussions, design iterations, and decisions connected
            directly to the deliverable itself.
          </p>
          <div className="mt-6 p-2.5 rounded-lg bg-[#f2f3ff] font-['JetBrains_Mono'] text-xs text-[#464555] flex items-center gap-2 border border-[#eaedff]">
            <span className="material-symbols-outlined text-[#4953bc] text-[15px]">
              chat_bubble
            </span>
            <span>Zero context-loss across handoffs</span>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8 bg-white rounded-2xl shadow-xs hover:shadow-lg border border-[#eaedff] transition-all relative group hover:border-[#8792fe]">
          <div className="flex items-center justify-between mb-6">
            <span className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#005338]/30 font-black">
              03
            </span>
            <span className="w-10 h-10 rounded-full bg-[#6ffbbe]/40 text-[#005338] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[20px]">
                rocket_launch
              </span>
            </span>
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e] mb-2">
            Ship with clarity
          </h3>
          <p className="text-sm sm:text-base text-[#464555] leading-relaxed">
            Track real-time progress, celebrate completions, and deploy features
            with total stakeholder visibility.
          </p>
          <div className="mt-6 p-2.5 rounded-lg bg-[#f2f3ff] font-['JetBrains_Mono'] text-xs text-[#464555] flex items-center gap-2 border border-[#eaedff]">
            <span className="material-symbols-outlined text-[#005338] text-[15px]">
              verified
            </span>
            <span>Automated changelog generation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
