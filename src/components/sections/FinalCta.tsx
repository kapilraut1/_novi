import React from 'react';
import { Button } from '@/components/ui/Button';

interface FinalCtaProps {
  onStartFree: () => void;
  onContact: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onStartFree,
  onContact,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
      <div className="relative w-full rounded-3xl bg-[#283044] text-[#eef0ff] overflow-hidden p-8 sm:p-14 lg:p-16 flex flex-col items-center text-center shadow-2xl border border-slate-700/50">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[360px] bg-[#4f46e5]/45 rounded-full blur-3xl pointer-events-none" />

        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#dae2fd]/15 font-['JetBrains_Mono'] text-xs sm:text-sm text-[#c3c0ff] mb-6 backdrop-blur-md border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c3c0ff] animate-ping" />
          Ready to reclaim focus?
        </span>

        <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#eef0ff] max-w-3xl tracking-tight leading-[1.1]">
          Less switching. More shipping.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#eef0ff]/80 max-w-xl text-balance">
          Join hundreds of fast-growing teams building cleaner software and
          running calmer operations with Novi.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Button
            variant="inverse"
            size="lg"
            onClick={onStartFree}
            className="shadow-[0_12px_28px_rgba(79,70,229,0.5)] hover:shadow-[0_16px_32px_rgba(79,70,229,0.6)]"
          >
            <span>Start building with Novi</span>
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[18px]"
            >
              arrow_forward
            </span>
          </Button>

          <button
            onClick={onContact}
            className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#eef0ff] text-sm sm:text-base font-medium transition-colors cursor-pointer border border-white/10"
          >
            Talk to team →
          </button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[#eef0ff]/70 text-xs sm:text-sm font-medium">
          <span className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[#6ffbbe] text-[18px]"
            >
              check
            </span>
            Unlimited tasks
          </span>
          <span className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[#6ffbbe] text-[18px]"
            >
              check
            </span>
            Realtime sync
          </span>
          <span className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[#6ffbbe] text-[18px]"
            >
              check
            </span>
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
};
