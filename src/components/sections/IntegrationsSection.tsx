import React, { useState } from 'react';
import Image from 'next/image';
import { NOVI_LOGO_URL } from '@/lib/data/initial-data';

export const IntegrationsSection: React.FC = () => {
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(
    null,
  );

  const integrationsLeft = [
    {
      id: 'trello',
      name: 'Trello',
      note: '2-way sync',
      icon: 'view_kanban',
      color: 'text-[#3525cd]',
    },
    {
      id: 'asana',
      name: 'Asana',
      note: '1-click import',
      icon: 'checklist',
      color: 'text-[#4953bc]',
    },
    {
      id: 'sheets',
      name: 'Sheets & CSV',
      note: 'Instant map',
      icon: 'table_chart',
      color: 'text-[#666577]',
    },
  ];

  const integrationsRight = [
    {
      id: 'slack',
      name: 'Slack',
      note: 'Real-time alerts',
      icon: 'forum',
      color: 'text-[#ba1a1a]',
    },
    {
      id: 'github',
      name: 'GitHub',
      note: 'PR linking',
      icon: 'terminal',
      color: 'text-[#131b2e]',
    },
    {
      id: 'figma',
      name: 'Figma',
      note: 'Embedded specs',
      icon: 'palette',
      color: 'text-[#8792fe]',
    },
  ];

  return (
    <section
      className="w-full bg-[#f2f3ff]/30 py-16 sm:py-24 border-y border-[#eaedff]"
      id="integrations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <span className="text-xs uppercase tracking-wider text-[#3525cd] font-bold mb-2">
          Ecosystem Connectivity
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] max-w-xl tracking-tight leading-tight">
          Bring your work with you.
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#464555] max-w-lg mb-12 sm:mb-16">
          Move from your existing disconnected tools in minutes — with
          bi-directional syncing.
        </p>

        <div className="relative w-full max-w-4xl py-8 flex items-center justify-center">
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <svg
              aria-hidden="true"
              focusable="false"
              className="w-full h-full text-[#c7c4d8]/50"
              fill="none"
            >
              <line
                x1="20%"
                y1="20%"
                x2="50%"
                y2="50%"
                stroke="currentColor"
                strokeDasharray="4 4"
                strokeWidth="1.5"
              />
              <line
                x1="20%"
                y1="50%"
                x2="50%"
                y2="50%"
                stroke="currentColor"
                strokeDasharray="4 4"
                strokeWidth="1.5"
              />
              <line
                x1="20%"
                y1="80%"
                x2="50%"
                y2="50%"
                stroke="currentColor"
                strokeDasharray="4 4"
                strokeWidth="1.5"
              />
              <line
                x1="80%"
                y1="20%"
                x2="50%"
                y2="50%"
                stroke="currentColor"
                strokeDasharray="4 4"
                strokeWidth="1.5"
              />
              <line
                x1="80%"
                y1="50%"
                x2="50%"
                y2="50%"
                stroke="currentColor"
                strokeDasharray="4 4"
                strokeWidth="1.5"
              />
              <line
                x1="80%"
                y1="80%"
                x2="50%"
                y2="50%"
                stroke="currentColor"
                strokeDasharray="4 4"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div className="z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#3525cd] text-white flex flex-col items-center justify-center shadow-[0_12px_36px_rgba(53,37,205,0.4)] ring-8 ring-white transition-transform hover:scale-105">
            <Image
              alt="Novi Logo"
              className="h-10 sm:h-12 w-auto brightness-0 invert object-contain"
              height={64}
              src={NOVI_LOGO_URL}
              unoptimized
              width={64}
            />
            <span className="font-['JetBrains_Mono'] text-[10px] uppercase font-bold tracking-widest mt-1">
              Novi Core
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <div className="flex flex-col gap-4 sm:gap-8 pointer-events-auto">
              {integrationsLeft.map((item) => (
                <button
                  key={item.id}
                  onClick={() =>
                    setSelectedIntegration(
                      selectedIntegration === item.id ? null : item.id,
                    )
                  }
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white shadow-xs hover:shadow-md transition-all border cursor-pointer ${
                    selectedIntegration === item.id
                      ? 'border-[#3525cd] ring-2 ring-[#c3c0ff]'
                      : 'border-[#eaedff] hover:border-[#8792fe]'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`material-symbols-outlined text-[20px] ${item.color}`}
                  >
                    {item.icon}
                  </span>
                  <div className="text-left">
                    <span className="text-xs sm:text-sm font-bold text-[#131b2e] block">
                      {item.name}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#005338] font-medium">
                      {item.note}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:gap-8 pointer-events-auto">
              {integrationsRight.map((item) => (
                <button
                  key={item.id}
                  onClick={() =>
                    setSelectedIntegration(
                      selectedIntegration === item.id ? null : item.id,
                    )
                  }
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white shadow-xs hover:shadow-md transition-all border cursor-pointer ${
                    selectedIntegration === item.id
                      ? 'border-[#3525cd] ring-2 ring-[#c3c0ff]'
                      : 'border-[#eaedff] hover:border-[#8792fe]'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`material-symbols-outlined text-[20px] ${item.color}`}
                  >
                    {item.icon}
                  </span>
                  <div className="text-left">
                    <span className="text-xs sm:text-sm font-bold text-[#131b2e] block">
                      {item.name}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#005338] font-medium">
                      {item.note}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {selectedIntegration && (
          <div className="mt-8 px-4 py-2.5 rounded-xl bg-white shadow-md border border-[#eaedff] text-xs sm:text-sm text-[#131b2e] animate-in fade-in flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#005338] animate-ping" />
            <span>
              <strong>{selectedIntegration.toUpperCase()}</strong> is ready with
              zero-configuration OAuth sync.
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
