import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { IconButton } from '@/components/ui/IconButton';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWorkspace: () => void;
}

export const VideoTourModal: React.FC<VideoTourModalProps> = ({
  isOpen,
  onClose,
  onOpenWorkspace,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const tourSteps = [
    {
      title: 'Zero-Lag Sprint Planning',
      time: '0:30',
      desc: 'Drag tasks directly between backlog, in-progress, review, and done. State is saved locally and mirrored across webhooks in real time.',
      icon: 'view_kanban',
      highlight: '60 FPS drag & drop, instant keyboard shortcuts',
    },
    {
      title: 'Contextual Document Specs',
      time: '1:00',
      desc: 'Embed live database filters directly inside product specs using /table. No more outdated Google Docs or disconnected Notion pages.',
      icon: 'description',
      highlight: 'Slash commands, markdown, collaborative cursors',
    },
    {
      title: 'Ticket-Anchored Threads',
      time: '1:30',
      desc: 'Never lose another architecture decision in an endless Slack channel. Conversations are pinned to tickets where they belong.',
      icon: 'forum',
      highlight:
        'Smart reactions, automated changelogs, zero notification fatigue',
    },
    {
      title: 'Automatic Roadmaps & Gantt',
      time: '2:00',
      desc: 'Milestones reschedule automatically when blocker tickets move. Full visibility for founders, managers, and clients alike.',
      icon: 'timeline',
      highlight: 'Auto-leveling, dependency trees, client share links',
    },
  ];

  const current = tourSteps[activeStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#eaedff] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#131b2e] text-white p-6 sm:p-8 relative">
          <IconButton
            label="Close video tour"
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </IconButton>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-['JetBrains_Mono'] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
            <span>Interactive Walkthrough • 2 min</span>
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold">
            The Calm Workspace Experience
          </h3>
          <p className="text-sm text-white/80 mt-1 max-w-md">
            Learn why high-velocity engineering and design teams switch to Novi.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#f2f3ff] border border-[#eaedff] mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#3525cd] text-white flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined text-[28px]">
                {current.icon}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#131b2e]">
                  {current.title}
                </h4>
                <span className="font-['JetBrains_Mono'] text-xs text-[#3525cd] font-bold">
                  {current.time}
                </span>
              </div>
              <p className="text-sm text-[#464555] mt-1 leading-relaxed">
                {current.desc}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#005338]">
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>
                <span>{current.highlight}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {tourSteps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeStep === idx
                      ? 'w-8 bg-[#3525cd]'
                      : 'w-2.5 bg-[#eaedff] hover:bg-[#c7c4d8]'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              {activeStep > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveStep((s) => s - 1)}
                  className="text-xs"
                >
                  Previous
                </Button>
              )}
              {activeStep < tourSteps.length - 1 ? (
                <Button onClick={() => setActiveStep((s) => s + 1)}>
                  Next Step →
                </Button>
              ) : (
                <Button
                  variant="success"
                  onClick={() => {
                    onClose();
                    onOpenWorkspace();
                  }}
                >
                  Try Workspace Now →
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
