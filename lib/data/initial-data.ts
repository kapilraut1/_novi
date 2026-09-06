import type {
  TaskItem,
  Project,
  ConversationMessage,
  TimelineItem,
} from '@/types';

export const INITIAL_PROJECTS: Project[] = [
  { id: 'growth', name: 'Growth Engine', count: 14, color: '#3525cd' },
  { id: 'mobile', name: 'Mobile Redesign', count: 8, color: '#8792fe' },
  { id: 'design-system', name: 'Design System', count: 22, color: '#005338' },
];

export const INITIAL_TASKS: TaskItem[] = [
  {
    id: 't-1',
    code: 'NOV-128',
    title: 'Stripe Billing v2 Migration',
    status: 'backlog',
    tag: 'INFRA',
    tagColor: 'bg-slate-100 text-slate-700',
    description:
      'Upgrade Stripe SDK to v2 webhook format and handle customer portal session sync.',
    dueDate: 'Nov 04',
    assignee: {
      name: 'Alex Lin',
      initials: 'AL',
      color: 'bg-slate-300',
      textColor: 'text-slate-800',
    },
    meta: { type: 'specs', text: '3 specs' },
  },
  {
    id: 't-2',
    code: 'NOV-142',
    title: 'Onboarding tour UX copy revisions',
    status: 'backlog',
    tag: 'GROWTH',
    tagColor: 'bg-slate-100 text-slate-700',
    description:
      'Refine micro-copy for 3-step setup walkthrough based on UserTesting feedback.',
    dueDate: 'Oct 29',
    assignee: {
      name: 'Sarah Mitchell',
      initials: 'SM',
      color: 'bg-[#4f46e5]',
      textColor: 'text-white',
    },
  },
  {
    id: 't-3',
    code: 'NOV-155',
    title: 'SOC2 audit logging pipeline',
    status: 'backlog',
    priority: 'P2',
    description:
      'Stream immutable audit trail events to cold S3 storage bucket with retention policies.',
    assignee: {
      name: 'David Hwang',
      initials: 'DH',
      color: 'bg-emerald-600',
      textColor: 'text-white',
    },
  },
  {
    id: 't-4',
    code: 'NOV-119',
    title: 'Interactive Canvas Polish & Micro-animations',
    status: 'in_progress',
    tag: 'DESIGN',
    tagColor: 'bg-[#e2dfff] text-[#3525cd]',
    priority: 'urgent',
    description:
      'Optimize 60fps spring transitions, dragging momentum physics, and touch targets.',
    checklist: { completed: 7, total: 10 },
    dueDate: 'Oct 24',
    assignee: {
      name: 'Sarah Mitchell',
      initials: 'SM',
      color: 'bg-[#4f46e5]',
      textColor: 'text-white',
    },
    secondaryAssignee: {
      name: 'Jared K.',
      initials: 'JK',
      color: 'bg-[#4953bc]',
    },
  },
  {
    id: 't-5',
    code: 'NOV-131',
    title: 'Keyboard shortcut overlay engine',
    status: 'in_progress',
    tag: 'CORE',
    tagColor: 'bg-[#e0e0ff] text-[#4953bc]',
    description:
      'Global ⌘K and single-key shortcut listener with conflict resolution across modals.',
    dueDate: 'Oct 28',
    assignee: {
      name: 'David Hwang',
      initials: 'DH',
      color: 'bg-[#005338]',
      textColor: 'text-white',
    },
    meta: { type: 'comments', text: '4 comments' },
  },
  {
    id: 't-6',
    code: 'git #894b1',
    title: 'Realtime presence avatar websocket',
    status: 'review',
    description:
      'Multiplayer room cursor broadcast with low latency heartbeats and reconnect backoff.',
    assignee: {
      name: 'Ryan Kelly',
      initials: 'RK',
      color: 'bg-[#8792fe]',
      textColor: 'text-[#17228f]',
    },
    meta: { type: 'commit', text: 'Tests passing' },
  },
  {
    id: 't-7',
    code: 'NOV-139',
    title: 'Figma token synchronizer plugin',
    status: 'review',
    description:
      'Sync design tokens directly into Tailwind config JSON on merge.',
    assignee: {
      name: 'Alex Lin',
      initials: 'AL',
      color: 'bg-slate-300',
      textColor: 'text-slate-800',
    },
  },
  {
    id: 't-8',
    code: 'NOV-105',
    title: 'Command bar quick search',
    status: 'done',
    description:
      'Instant indexing for sprint items, spec docs, and team threads.',
    assignee: {
      name: 'Sarah Mitchell',
      initials: 'SM',
      color: 'bg-[#4f46e5]',
      textColor: 'text-white',
    },
    meta: { type: 'shipped', text: 'Shipped in v2.3.9' },
  },
  {
    id: 't-9',
    code: 'NOV-112',
    title: 'Dark mode theme preview',
    status: 'done',
    description:
      'Calm night palette with reduced contrast glare for late night coding sprints.',
    assignee: {
      name: 'Alex Lin',
      initials: 'AL',
      color: 'bg-slate-300',
      textColor: 'text-slate-800',
    },
    meta: { type: 'verified', text: 'Verified by QA' },
  },
  {
    id: 't-10',
    code: 'NOV-118',
    title: 'Zapier 2.0 Webhook trigger',
    status: 'done',
    description:
      'Two-way sync automation for customer tickets and sprint notifications.',
    assignee: {
      name: 'David Hwang',
      initials: 'DH',
      color: 'bg-[#005338]',
      textColor: 'text-white',
    },
    meta: { type: 'closed', text: 'Closed yesterday' },
  },
];

export const INITIAL_MESSAGES: ConversationMessage[] = [
  {
    id: 'm-1',
    author: 'Sarah Mitchell',
    initials: 'SM',
    avatarBg: 'bg-[#4f46e5]',
    time: '11:15 AM',
    content:
      'I tested the Stripe webhooks in staging. All 12 edge cases resolved! Ready for final QA.',
    isReply: false,
  },
  {
    id: 'm-2',
    author: 'Alex Lin',
    initials: 'AL',
    avatarBg: 'bg-[#4953bc]',
    time: '11:18 AM',
    content:
      'Confirmed on my end as well. Pushing preview build to production cluster now.',
    isReply: true,
  },
  {
    id: 'm-3',
    author: 'Jared K.',
    initials: 'JK',
    avatarBg: 'bg-[#005338]',
    time: '11:22 AM',
    content:
      'Awesome speed team. Customer success demo scheduled for tomorrow 9am.',
    isReply: true,
  },
];

export const INITIAL_TIMELINE: TimelineItem[] = [
  {
    id: 'tl-1',
    title: 'API Engine v2',
    startDate: 'Oct 10',
    endDate: 'Nov 15',
    progress: 75,
    color: 'bg-[#3525cd]',
    statusBadge: '75% Complete • Oct 10 - Nov 15',
  },
  {
    id: 'tl-2',
    title: 'Mobile App Beta',
    startDate: 'Oct 20',
    endDate: 'Nov 01',
    progress: 50,
    color: 'bg-[#8792fe]',
    statusBadge: 'Design Freeze • Nov 01',
  },
  {
    id: 'tl-3',
    title: 'Public Launch (GA)',
    startDate: 'Nov 10',
    endDate: 'Nov 28',
    progress: 28,
    color: 'bg-[#005338]',
    statusBadge: 'Nov 28 — GA Readiness',
  },
];

export const NOVI_LOGO_URL = '/novi-logo.svg';
