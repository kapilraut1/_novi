import React from 'react';
import { motion, type Variants } from 'motion/react';
import { Kanban, MessageSquare, Calendar, ArrowLeftRight } from 'lucide-react';

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

function BoardsVisual() {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl bg-[#f2f3ff]/80 border border-[#eaedff] p-3 flex flex-col gap-2"
    >
      <div className="flex items-center justify-between px-0.5">
        <span className="text-[10px] font-bold text-[#131b2e]">Sprint 34</span>
        <span className="font-['JetBrains_Mono'] text-[10px] text-[#777587]">
          12 tasks
        </span>
      </div>
      <div className="bg-white rounded-lg p-2.5 border border-[#eaedff] shadow-2xs">
        <div className="flex items-center justify-between mb-1.5">
          <span className="px-1.5 py-0.5 rounded bg-[#ffdad6] text-[#ba1a1a] text-[8px] font-extrabold tracking-wider">
            P0 CRITICAL
          </span>
          <span className="font-['JetBrains_Mono'] text-[9px] text-[#777587]">
            NOV-102
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-[#131b2e] leading-snug">
            Auth token expiration bug
          </span>
          <span className="w-4.5 h-4.5 rounded-full bg-[#3525cd] text-white flex items-center justify-center text-[8px] font-bold shrink-0">
            SM
          </span>
        </div>
      </div>
      <div className="bg-white rounded-lg p-2.5 border border-[#eaedff] shadow-2xs">
        <div className="flex items-center justify-between mb-1.5">
          <span className="px-1.5 py-0.5 rounded bg-[#eaedff] text-[#464555] text-[8px] font-extrabold tracking-wider">
            P1 NORMAL
          </span>
          <span className="font-['JetBrains_Mono'] text-[9px] text-[#777587]">
            NOV-111
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-[#131b2e] leading-snug">
            CSV customer export modal
          </span>
          <span className="w-4.5 h-4.5 rounded-full bg-[#4953bc] text-white flex items-center justify-center text-[8px] font-bold shrink-0">
            DH
          </span>
        </div>
      </div>
    </div>
  );
}

function ThreadsVisual() {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl bg-[#f2f3ff]/80 border border-[#eaedff] p-3 flex flex-col gap-2"
    >
      <div className="bg-white rounded-lg p-2.5 border border-[#eaedff] shadow-2xs flex items-start gap-2">
        <span className="w-6 h-6 rounded-full bg-[#005338] text-white text-[9px] font-bold flex items-center justify-center shrink-0">
          JK
        </span>
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-[#131b2e]">
              Jared K.
            </span>
            <span className="font-['JetBrains_Mono'] text-[9px] text-[#777587]">
              10:42 AM
            </span>
          </div>
          <p className="text-[11px] text-[#131b2e] mt-0.5">
            Updated the webhook schema:
          </p>
          <code className="mt-1 px-2 py-1 bg-[#eaedff] font-['JetBrains_Mono'] text-[10px] text-[#131b2e] rounded font-medium block">
            payload.event = &apos;invoice.paid&apos;
          </code>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="px-2 py-0.5 rounded-full bg-white border border-[#eaedff] text-[10px] font-['JetBrains_Mono'] text-[#464555] flex items-center gap-1">
          <span>🚀</span> 3
        </span>
        <span className="px-2 py-0.5 rounded-full bg-white border border-[#eaedff] text-[10px] font-['JetBrains_Mono'] text-[#464555] flex items-center gap-1">
          <span>👍</span> 2
        </span>
      </div>
    </div>
  );
}

function TimelineVisual() {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl bg-[#f2f3ff]/80 border border-[#eaedff] p-3 flex flex-col gap-1.5"
    >
      <div className="flex justify-between font-['JetBrains_Mono'] text-[9px] text-[#777587] pb-1 border-b border-[#eaedff]/60">
        <span>WK1</span>
        <span>WK2</span>
        <span>WK3</span>
      </div>
      <div className="relative h-6 bg-[#eaedff] rounded flex items-center px-1">
        <div className="h-4 bg-[#3525cd] text-white rounded text-[9px] font-bold px-2 flex items-center w-3/5 truncate shadow-xs">
          Core API V2
        </div>
      </div>
      <div className="relative h-6 bg-[#eaedff] rounded flex items-center px-1">
        <div className="ml-[35%] h-4 bg-[#005338] text-white rounded text-[9px] font-bold px-2 flex items-center w-2/5 truncate shadow-xs">
          Public Launch
        </div>
      </div>
    </div>
  );
}

function ImportVisual() {
  const tools = [
    { id: 'trello', label: 'Trello', desc: 'Sync boards' },
    { id: 'asana', label: 'Asana', desc: 'Sync projects' },
    { id: 'notion', label: 'Notion', desc: 'Sync databases' },
    { id: 'csv', label: 'CSV File', desc: 'Auto-mapped', badge: true },
  ];
  return (
    <div
      aria-hidden="true"
      className="rounded-xl bg-[#f2f3ff]/80 border border-[#eaedff] p-3 grid grid-cols-2 gap-2"
    >
      {tools.map((tool) => (
        <div
          key={tool.id}
          className="bg-white rounded-lg border border-[#eaedff] px-2.5 py-2 shadow-2xs"
        >
          <div className="flex items-center justify-between gap-1">
            <span className="text-[11px] font-bold text-[#131b2e]">
              {tool.label}
            </span>
            {tool.badge ? (
              <span className="font-['JetBrains_Mono'] text-[8px] text-[#005338] font-bold bg-[#dcfce7] px-1 py-0.5 rounded">
                READY
              </span>
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-[#005338]" />
            )}
          </div>
          <span className="font-['JetBrains_Mono'] text-[9px] text-[#777587]">
            {tool.desc}
          </span>
        </div>
      ))}
    </div>
  );
}

export const Features: React.FC = () => {
  const cards = [
    {
      id: 'boards',
      title: 'Boards that move at your speed',
      description:
        'Plan sprints and track tasks with zero lag. Micro-interactions and drag physics designed for developer velocity.',
      icon: Kanban,
      iconBg: 'bg-[#e2dfff]',
      iconColor: 'text-[#3525cd]',
      visual: <BoardsVisual />,
    },
    {
      id: 'threads',
      title: 'Threads, not an inbox',
      description:
        'Keep decisions pinned to tickets, not scattered across ephemeral Slack channels.',
      icon: MessageSquare,
      iconBg: 'bg-[#e0e0ff]',
      iconColor: 'text-[#4953bc]',
      visual: <ThreadsVisual />,
    },
    {
      id: 'timeline',
      title: 'One unified timeline',
      description:
        'See dependencies clearly. Automatically reschedule related subtasks without breaking deadlines.',
      icon: Calendar,
      iconBg: 'bg-[#6ffbbe]/30',
      iconColor: 'text-[#005338]',
      visual: <TimelineVisual />,
    },
    {
      id: 'import',
      title: 'Works the way you already do',
      description:
        'Import existing workflows from Trello, Asana, Notion, or custom CSV files in under 3 minutes with smart attribute auto-mapping.',
      icon: ArrowLeftRight,
      iconBg: 'bg-[#eaedff]',
      iconColor: 'text-[#3525cd]',
      visual: <ImportVisual />,
    },
  ];

  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col items-center text-center mb-12 sm:mb-16"
      >
        <span className="px-3.5 py-1 rounded-full bg-[#eaedff] text-xs uppercase tracking-wider text-[#3525cd] font-bold mb-3 border border-[#c7c4d8]/40">
          Calm Orchestration
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] max-w-2xl tracking-tight leading-tight">
          Everything your team needs to keep moving.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#464555] max-w-xl text-balance">
          Plan the work, have the conversation, and see what is next — without
          jumping between five disconnected apps.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={gridVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
      >
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <motion.article
              key={card.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-[#eaedff] hover:border-[#c3c0ff] transition-shadow duration-300 flex flex-col cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor} mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-2xs`}
              >
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e] group-hover:text-[#3525cd] transition-colors">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-[#464555] leading-relaxed">
                {card.description}
              </p>
              <div className="mt-auto pt-6">{card.visual}</div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};
