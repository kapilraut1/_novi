import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Play,
  CheckCircle2,
  TrendingUp,
  Check,
  Zap,
  MessageSquare,
  Search,
  Plus,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  onOpenVideoTour: () => void;
  onOpenWorkspace: () => void;
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const boardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE, delay: 0.5 },
  },
};

function KanbanBoardGraphic() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="w-full h-auto min-w-[640px]"
      viewBox="0 0 680 470"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
    >
      <defs>
        <filter
          id="hero-card-shadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            floodColor="#131b2e"
            floodOpacity="0.06"
          />
        </filter>
        <linearGradient id="hero-progress-active" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3525cd" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
        <clipPath id="hero-card3-clip">
          <rect x="244" y="48" width="192" height="130" rx="12" />
        </clipPath>
      </defs>

      <rect x="12" y="10" width="208" height="446" rx="12" fill="#f3f4ff" />
      <circle cx="30" cy="32" r="5" fill="#666577" />
      <text x="42" y="37" fontSize="12" fontWeight="700" fill="#131b2e">
        To Do
      </text>
      <rect
        x="196"
        y="21"
        width="20"
        height="18"
        rx="9"
        fill="#ffffff"
        stroke="#e6e9ff"
      />
      <text
        x="206"
        y="34"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#666577"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        3
      </text>

      <rect
        x="20"
        y="48"
        width="192"
        height="112"
        rx="12"
        fill="#ffffff"
        filter="url(#hero-card-shadow)"
      />
      <rect x="28" y="62" width="64" height="16" rx="4" fill="#e2dfff" />
      <text x="36" y="74" fontSize="9.5" fontWeight="700" fill="#3525cd">
        DESIGN
      </text>
      <text
        x="196"
        y="74"
        textAnchor="end"
        fontSize="10"
        fill="#666577"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        NOV-104
      </text>
      <text x="28" y="98" fontSize="11.5" fontWeight="600" fill="#131b2e">
        Design system token
      </text>
      <text x="28" y="112" fontSize="11.5" fontWeight="600" fill="#131b2e">
        synchronization
      </text>
      <rect x="28" y="126" width="140" height="5" rx="2.5" fill="#e6e9ff" />
      <rect x="28" y="126" width="105" height="5" rx="2.5" fill="#3525cd" />
      <text
        x="196"
        y="131"
        textAnchor="end"
        fontSize="9.5"
        fill="#464555"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        3/4
      </text>
      <line x1="28" y1="141" x2="204" y2="141" stroke="#f3f4ff" />
      <text
        x="28"
        y="155"
        fontSize="10.5"
        fill="#666577"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        Today
      </text>
      <circle cx="184" cy="150" r="10" fill="#3525cd" />
      <text
        x="184"
        y="154"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="#ffffff"
      >
        SM
      </text>

      <rect
        x="20"
        y="170"
        width="192"
        height="88"
        rx="12"
        fill="#ffffff"
        filter="url(#hero-card-shadow)"
      />
      <rect x="28" y="184" width="66" height="16" rx="4" fill="#e0e0ff" />
      <text x="36" y="196" fontSize="9.5" fontWeight="700" fill="#4953bc">
        RESEARCH
      </text>
      <text
        x="196"
        y="196"
        textAnchor="end"
        fontSize="10"
        fill="#666577"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        NOV-108
      </text>
      <text x="28" y="220" fontSize="11.5" fontWeight="600" fill="#131b2e">
        Customer migration
      </text>
      <text x="28" y="234" fontSize="11.5" fontWeight="600" fill="#131b2e">
        interview takeaways
      </text>
      <rect x="28" y="242" width="58" height="15" rx="3" fill="#ffdad6" />
      <text x="36" y="253" fontSize="9" fontWeight="700" fill="#ba1a1a">
        P1 HIGH
      </text>
      <circle cx="184" cy="249" r="10" fill="#005338" />
      <text
        x="184"
        y="253"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="#ffffff"
      >
        JK
      </text>

      <rect x="236" y="10" width="208" height="446" rx="12" fill="#f3f4ff" />
      <circle cx="254" cy="32" r="5" fill="#3525cd" />
      <text x="266" y="37" fontSize="12" fontWeight="700" fill="#131b2e">
        In Progress
      </text>
      <rect
        x="420"
        y="21"
        width="20"
        height="18"
        rx="9"
        fill="#ffffff"
        stroke="#e6e9ff"
      />
      <text
        x="430"
        y="34"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#3525cd"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        2
      </text>

      <rect
        x="244"
        y="48"
        width="192"
        height="130"
        rx="12"
        fill="#ffffff"
        stroke="#3525cd"
        strokeWidth="2"
        filter="url(#hero-card-shadow)"
      />
      <g clipPath="url(#hero-card3-clip)">
        <circle cx="356" cy="36" r="32" fill="#e2dfff" opacity="0.5" />
      </g>
      <rect x="252" y="62" width="76" height="16" rx="4" fill="#e2dfff" />
      <text x="260" y="74" fontSize="8.5" fontWeight="700" fill="#3525cd">
        ENGINEERING
      </text>
      <rect x="358" y="62" width="54" height="15" rx="3" fill="#ffdad6" />
      <text
        x="385"
        y="73"
        textAnchor="middle"
        fontSize="8"
        fontWeight="800"
        fill="#ba1a1a"
      >
        CRITICAL
      </text>
      <text x="252" y="98" fontSize="11.5" fontWeight="700" fill="#131b2e">
        Auth token refresh &amp;
      </text>
      <text x="252" y="112" fontSize="11.5" fontWeight="700" fill="#131b2e">
        session cookies
      </text>
      <rect x="252" y="128" width="140" height="6" rx="3" fill="#e6e9ff" />
      <rect
        x="252"
        y="128"
        width="118"
        height="6"
        rx="3"
        fill="url(#hero-progress-active)"
      />
      <text
        x="418"
        y="133"
        textAnchor="end"
        fontSize="10"
        fontWeight="700"
        fill="#3525cd"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        85%
      </text>
      <line x1="252" y1="144" x2="428" y2="144" stroke="#f3f4ff" />
      <circle cx="260" cy="156" r="3" fill="#005338" />
      <text
        x="268"
        y="160"
        fontSize="9.5"
        fontWeight="700"
        fill="#005338"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        Deploy ready
      </text>
      <circle cx="392" cy="157" r="9.5" fill="#4f46e5" stroke="#ffffff" />
      <text
        x="392"
        y="161"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="#ffffff"
      >
        SM
      </text>
      <circle cx="406" cy="157" r="9.5" fill="#005338" stroke="#ffffff" />
      <text
        x="406"
        y="161"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="#ffffff"
      >
        JK
      </text>

      <rect
        x="244"
        y="188"
        width="192"
        height="88"
        rx="12"
        fill="#ffffff"
        filter="url(#hero-card-shadow)"
      />
      <rect x="252" y="202" width="76" height="16" rx="4" fill="#eaedff" />
      <text x="260" y="214" fontSize="8.5" fontWeight="700" fill="#464555">
        INTEGRATIONS
      </text>
      <text
        x="418"
        y="214"
        textAnchor="end"
        fontSize="10"
        fill="#666577"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        NOV-114
      </text>
      <text x="252" y="238" fontSize="11.5" fontWeight="600" fill="#131b2e">
        Linear &amp; GitHub 2-way
      </text>
      <text x="252" y="252" fontSize="11.5" fontWeight="600" fill="#131b2e">
        sync bridge
      </text>
      <text
        x="252"
        y="266"
        fontSize="10"
        fill="#464555"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        PR #42 linked
      </text>
      <circle cx="418" cy="261" r="10" fill="#3525cd" />
      <text
        x="418"
        y="265"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="#ffffff"
      >
        AL
      </text>

      <rect x="460" y="10" width="208" height="446" rx="12" fill="#f3f4ff" />
      <circle cx="478" cy="32" r="5" fill="#005338" />
      <text x="490" y="37" fontSize="12" fontWeight="700" fill="#131b2e">
        Done
      </text>
      <rect
        x="644"
        y="21"
        width="20"
        height="18"
        rx="9"
        fill="#ffffff"
        stroke="#e6e9ff"
      />
      <text
        x="654"
        y="34"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#005338"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        4
      </text>

      <rect
        x="468"
        y="48"
        width="192"
        height="82"
        rx="12"
        fill="#ffffff"
        fillOpacity="0.92"
        filter="url(#hero-card-shadow)"
      />
      <circle cx="484" cy="66" r="11" fill="#dcfce7" />
      <path
        d="M479 66 l3.3 3.3 5.8-6.4"
        stroke="#005338"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="502"
        y="63"
        fontSize="11.5"
        fontWeight="500"
        fill="#131b2e"
        opacity="0.55"
        style={{ textDecoration: 'line-through' }}
      >
        Unified markdown spec
      </text>
      <text
        x="502"
        y="77"
        fontSize="11.5"
        fontWeight="500"
        fill="#131b2e"
        opacity="0.55"
        style={{ textDecoration: 'line-through' }}
      >
        editor
      </text>
      <text
        x="502"
        y="98"
        fontSize="9.5"
        fontWeight="700"
        fill="#005338"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        Shipped in v2.4
      </text>

      <rect
        x="468"
        y="148"
        width="192"
        height="82"
        rx="12"
        fill="#ffffff"
        fillOpacity="0.92"
        filter="url(#hero-card-shadow)"
      />
      <circle cx="484" cy="166" r="11" fill="#dcfce7" />
      <path
        d="M479 166 l3.3 3.3 5.8-6.4"
        stroke="#005338"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="502"
        y="163"
        fontSize="11.5"
        fontWeight="500"
        fill="#131b2e"
        opacity="0.55"
        style={{ textDecoration: 'line-through' }}
      >
        Interactive Gantt
      </text>
      <text
        x="502"
        y="177"
        fontSize="11.5"
        fontWeight="500"
        fill="#131b2e"
        opacity="0.55"
        style={{ textDecoration: 'line-through' }}
      >
        milestone leveling
      </text>
      <text
        x="502"
        y="198"
        fontSize="9.5"
        fontWeight="700"
        fill="#005338"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        Verified by QA
      </text>
    </svg>
  );
}

export const Hero: React.FC<HeroProps> = ({
  onOpenVideoTour,
  onOpenWorkspace,
}) => {
  return (
    <motion.section
      id="hero"
      aria-labelledby="hero-headline"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.12, 0.94, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-24 left-1/4 w-[550px] h-[550px] bg-gradient-to-br from-[#c3c0ff]/35 via-[#8792fe]/20 to-transparent rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -45, 35, 0],
            y: [0, 40, -35, 0],
            scale: [1, 0.92, 1.08, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-gradient-to-bl from-[#dae2fd]/40 via-[#e2dfff]/25 to-transparent rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 10, -8, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-36 left-12 w-28 h-28 rounded-3xl border border-[#c3c0ff]/30 bg-white/10 backdrop-blur-xs hidden lg:block"
        />

        <motion.div
          animate={{
            y: [0, 22, 0],
            rotate: [0, -12, 6, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-48 right-16 w-36 h-12 rounded-full border border-[#8792fe]/20 bg-[#eaedff]/20 backdrop-blur-xs hidden lg:block"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24 flex flex-col items-center text-center">
        <motion.div variants={itemVariants}>
          <div
            id="hero-announcement-pill"
            role="button"
            tabIndex={0}
            onClick={onOpenWorkspace}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenWorkspace();
              }
            }}
            aria-label="Open the Novi workspace to explore a live demo"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eaedff]/80 backdrop-blur-md shadow-xs mb-6 group cursor-pointer transition-all hover:bg-[#dae2fd] border border-[#c7c4d8]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3525cd]"
          >
            <span className="w-2 h-2 rounded-full bg-[#3525cd] animate-pulse" />
            <span className="text-xs sm:text-sm text-[#3525cd] font-semibold tracking-wide">
              One workspace. Zero context switching.
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#3525cd] transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>

        <motion.h1
          id="hero-headline"
          variants={itemVariants}
          className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-6xl font-extrabold max-w-4xl tracking-tight text-[#131b2e] leading-[1.12]"
        >
          Run your team{' '}
          <span className="bg-gradient-to-r from-[#3525cd] via-[#4f46e5] to-[#8792fe] bg-clip-text text-transparent">
            without the tab switching.
          </span>
        </motion.h1>

        <motion.p
          id="hero-subline"
          variants={itemVariants}
          className="mt-6 text-base sm:text-lg lg:text-xl text-[#464555] max-w-2xl leading-relaxed text-balance"
        >
          Novi brings tasks, docs, and conversations into one calm workspace
          built for small, fast moving teams.
        </motion.p>

        <motion.div
          id="hero-cta-group"
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            id="hero-primary-cta"
            size="lg"
            onClick={onOpenWorkspace}
            className="shadow-[0_10px_25px_rgba(53,37,205,0.3)] hover:shadow-[0_14px_30px_rgba(53,37,205,0.4)]"
          >
            <span>Start free</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            id="hero-secondary-cta"
            variant="secondary"
            size="lg"
            onClick={onOpenVideoTour}
            className="shadow-xs group"
          >
            <Play className="w-4 h-4 text-[#3525cd] fill-[#3525cd]/20 transition-transform group-hover:scale-110" />
            <span>See how it works</span>
            <span className="px-1.5 py-0.5 rounded bg-[#eaedff] font-['JetBrains_Mono'] text-xs text-[#464555] ml-1 font-medium">
              2 min
            </span>
          </Button>
        </motion.div>

        <motion.div
          id="hero-trust-signals"
          variants={itemVariants}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#464555]"
        >
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#005338] shrink-0" />
            Free 14-day trial
          </span>
          <span className="text-[#c7c4d8]">•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#005338] shrink-0" />
            No credit card required
          </span>
          <span className="text-[#c7c4d8]">•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#005338] shrink-0" />
            Instant setup
          </span>
        </motion.div>

        <motion.div
          id="hero-illustrated-kanban-mockup"
          variants={boardVariants}
          className="relative w-full max-w-5xl mt-12 sm:mt-16"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#c3c0ff]/40 via-[#8792fe]/20 to-[#4edea3]/20 rounded-3xl blur-2xl -z-10 opacity-75" />

          <div className="w-full bg-white rounded-2xl shadow-[0_24px_70px_-15px_rgba(19,27,46,0.12)] border border-[#eaedff] overflow-hidden text-left">
            <div className="h-12 bg-[#f8f9ff] px-4 sm:px-6 flex items-center justify-between border-b border-[#eaedff]">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-2xs" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-2xs" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-2xs" />
                <div className="h-4 w-px bg-[#c7c4d8]/40 mx-2" />
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#eaedff] font-['JetBrains_Mono'] text-xs text-[#131b2e] shadow-2xs">
                  <Zap className="w-3.5 h-3.5 text-[#3525cd]" />
                  <span className="font-semibold text-[11px] sm:text-xs">
                    Sprint 34 — Launch Novi 2.0
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#eaedff] text-xs text-[#666577] w-56 shadow-2xs">
                <Search className="w-3.5 h-3.5 text-[#666577]" />
                <span className="truncate">Search tasks & docs...</span>
                <span className="ml-auto font-['JetBrains_Mono'] text-[10px] px-1.5 py-0.5 rounded bg-[#eaedff] text-[#464555]">
                  ⌘K
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-[#4f46e5] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white shadow-2xs">
                    SM
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#005338] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white shadow-2xs">
                    JK
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#3525cd] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white shadow-2xs">
                    AL
                  </div>
                </div>
                <span
                  className="w-2.5 h-2.5 rounded-full bg-[#10b981] ring-2 ring-emerald-100 animate-pulse"
                  title="Active collaboration"
                />
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-gradient-to-b from-white to-[#faf8ff] overflow-x-auto">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#eaedff] flex-wrap gap-2">
                <div className="flex items-center gap-2 font-['Plus_Jakarta_Sans'] font-bold text-sm sm:text-base text-[#131b2e]">
                  <span>Active Sprint Board</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#eaedff] text-xs font-semibold text-[#3525cd]">
                    12 tasks
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenWorkspace}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#eaedff] hover:bg-[#dae2fd] text-xs font-semibold text-[#3525cd] transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Task</span>
                  </button>
                </div>
              </div>

              <KanbanBoardGraphic />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            onClick={onOpenWorkspace}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenWorkspace();
              }
            }}
            aria-label="Open the Novi workspace"
            className="absolute -top-5 -right-3 md:-right-6 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-[0_12px_32px_rgba(19,27,46,0.14)] hidden sm:flex items-center gap-3 z-20 max-w-xs border border-[#eaedff] cursor-pointer hover:scale-105 transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3525cd]"
          >
            <div className="w-9 h-9 rounded-full bg-[#005338] flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-xs">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-[#131b2e] flex items-center gap-1">
                <span>Task completed</span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#005338] font-semibold bg-[#dcfce7] px-1.5 py-0.2 rounded">
                  2m ago
                </span>
              </span>
              <span className="text-[11px] text-[#464555] truncate">
                &quot;Revise landing typography&quot;
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            onClick={onOpenWorkspace}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenWorkspace();
              }
            }}
            aria-label="Open the Novi workspace"
            className="absolute -bottom-6 -left-3 md:-left-6 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-[0_12px_32px_rgba(19,27,46,0.14)] hidden sm:flex items-center gap-3 z-20 max-w-sm border border-[#eaedff] cursor-pointer hover:scale-105 transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3525cd]"
          >
            <div className="w-8 h-8 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#3525cd] shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#005338] animate-ping" />
                <span className="text-[11px] font-bold text-[#131b2e]">
                  Live Thread
                </span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#464555] ml-1">
                  4 replies
                </span>
              </div>
              <span className="text-[12px] text-[#131b2e] italic truncate">
                &ldquo;Should we support dark mode at launch?&rdquo;
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute -bottom-9 right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-[0_14px_35px_rgba(19,27,46,0.14)] hidden lg:flex items-center gap-4 z-20 border border-[#eaedff]"
          >
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1 text-[#005338] text-xs font-bold">
                <TrendingUp className="w-4 h-4 text-[#005338]" />
                <span>+38% Sprint Velocity</span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#464555]">
                vs. previous 3 sprints
              </span>
            </div>
            <div className="w-20 h-8 flex items-end">
              <svg
                aria-hidden="true"
                focusable="false"
                className="w-full h-full text-[#005338]"
                fill="none"
                viewBox="0 0 80 32"
              >
                <path
                  d="M 0 28 Q 15 24 25 18 T 50 14 T 70 6 L 80 4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <circle cx="80" cy="4" fill="currentColor" r="3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
