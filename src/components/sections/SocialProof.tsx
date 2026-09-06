import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="w-full bg-[#f2f3ff]/50 py-8 sm:py-10 border-y border-[#eaedff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-[#464555] mb-6 text-center font-bold">
          Built for teams that move fast — trusted by leaders at
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center w-full opacity-70 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#131b2e] hover:text-[#3525cd] transition-colors cursor-default">
            <span className="material-symbols-outlined text-[20px] text-[#3525cd]">
              speed
            </span>
            <span className="font-extrabold tracking-widest">KINETIC</span>
          </div>

          <div className="flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#131b2e] hover:text-[#3525cd] transition-colors cursor-default">
            <span className="material-symbols-outlined text-[18px]">
              view_in_ar
            </span>
            <span className="font-semibold tracking-tight">
              voxel<span className="text-[#3525cd] font-normal">labs</span>
            </span>
          </div>

          <div className="flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#131b2e] tracking-wider hover:text-[#3525cd] transition-colors cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4953bc]" />
            <span className="font-bold">AURA.AI</span>
          </div>

          <div className="flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#131b2e] uppercase tracking-widest font-black hover:text-[#3525cd] transition-colors cursor-default">
            <span className="material-symbols-outlined text-[18px]">
              layers
            </span>
            <span>MONOLITH</span>
          </div>

          <div className="flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#131b2e] hover:text-[#3525cd] transition-colors cursor-default">
            <span className="material-symbols-outlined text-[18px]">
              filter_vintage
            </span>
            <span className="font-semibold">
              Prism<span className="font-light">Studio</span>
            </span>
          </div>

          <div className="flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#131b2e] font-extrabold tracking-tight hover:text-[#3525cd] transition-colors cursor-default">
            <span className="material-symbols-outlined text-[#3525cd] text-[20px]">
              expand
            </span>
            <span>HyperScale</span>
          </div>
        </div>
      </div>
    </section>
  );
};
