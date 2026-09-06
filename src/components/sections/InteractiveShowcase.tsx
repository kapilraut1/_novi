import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { TaskItem, ConversationMessage } from '@/types';
import { INITIAL_MESSAGES } from '@/lib/data/initial-data';

export const InteractiveShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'tasks' | 'docs' | 'convos' | 'timeline'
  >('tasks');

  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number>(0);

  const [slashCommandOpen, setSlashCommandOpen] = useState(false);
  const [docContent, setDocContent] = useState(
    'Our primary objective this quarter is eliminating every millisecond of perceived delay between thinking about a task and logging it.',
  );

  const [messages, setMessages] =
    useState<ConversationMessage[]>(INITIAL_MESSAGES);
  const [replyText, setReplyText] = useState('');

  const sampleInspectorTasks = [
    {
      id: '#402',
      badge: 'IN CODE REVIEW',
      badgeBg: 'bg-[#4f46e5] text-white',
      title: 'GraphQL schema cache invalidation',
      desc: 'Prevent stale query results after team permissions update.',
      approvals: '3 approvals',
      assigneeName: 'Sarah Mitchell (Lead Engineer)',
      prUrl: 'github.com/novi/app/pull/189',
      estimate: '5 Story Points (4h remaining)',
      avatar: 'DA',
      avatarBg: 'bg-[#4f46e5]',
    },
    {
      id: '#403',
      badge: 'READY FOR QA',
      badgeBg: 'bg-[#eaedff] text-[#131b2e]',
      title: 'Export invoices to PDF / Quickbooks',
      desc: 'Client requested batch downloading format for Q3 reconciliation.',
      approvals: 'Due tomorrow',
      assigneeName: 'David Hwang (Backend Engineer)',
      prUrl: 'github.com/novi/app/pull/192',
      estimate: '3 Story Points (2h remaining)',
      avatar: 'SM',
      avatarBg: 'bg-[#4953bc]',
    },
  ];

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const newMessage: ConversationMessage = {
      id: `m-${Date.now()}`,
      author: 'You',
      initials: 'YO',
      avatarBg: 'bg-[#3525cd]',
      time: 'Just now',
      content: replyText,
      isReply: true,
    };
    setMessages([...messages, newMessage]);
    setReplyText('');
  };

  const currentInspector = sampleInspectorTasks[selectedTaskIndex];

  return (
    <section
      className="w-full bg-[#f2f3ff]/40 py-16 sm:py-24 border-y border-[#eaedff]"
      id="preview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-wider text-[#3525cd] font-bold">
            Interactive Preview
          </span>
          <h2 className="mt-2 font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight">
            One workspace. Every moving part.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#464555]">
            From the first sketch to the final deployment, Novi gives every
            discipline the right view.
          </p>
        </div>

        <div className="inline-flex p-1.5 rounded-xl bg-white shadow-2xs border border-[#eaedff] gap-1 mb-10 overflow-x-auto max-w-full">
          {[
            { id: 'tasks', label: 'Tasks', icon: 'check_circle' },
            { id: 'docs', label: 'Docs', icon: 'description' },
            { id: 'convos', label: 'Conversations', icon: 'chat' },
            { id: 'timeline', label: 'Timeline', icon: 'calendar_view_week' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(
                    tab.id as 'tasks' | 'docs' | 'convos' | 'timeline',
                  )
                }
                className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#3525cd] text-white shadow-xs'
                    : 'text-[#464555] hover:text-[#131b2e] hover:bg-[#f2f3ff]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border border-[#eaedff] overflow-hidden min-h-[460px] flex flex-col transition-all">
          {activeTab === 'tasks' && (
            <div className="flex flex-col md:flex-row flex-1 p-6 sm:p-8 gap-6 animate-in fade-in duration-200">
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#eaedff]">
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-[#131b2e]">
                      Sprint Execution Board
                    </h4>
                    <p className="text-xs sm:text-sm text-[#464555]">
                      Click items below to inspect details in the right
                      inspector pane.
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#eaedff] font-['JetBrains_Mono'] text-xs font-semibold text-[#131b2e]">
                    Linear Sync: ON
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sampleInspectorTasks.map((item, idx) => {
                    const isSelected = selectedTaskIndex === idx;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedTaskIndex(idx)}
                        className={`p-4 rounded-xl shadow-2xs border transition-all cursor-pointer text-left ${
                          isSelected
                            ? 'bg-[#f2f3ff] border-[#3525cd] ring-2 ring-[#c3c0ff]'
                            : 'bg-[#f2f3ff]/60 border-[#eaedff] hover:bg-white hover:border-[#8792fe]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-bold ${item.badgeBg}`}
                          >
                            {item.badge}
                          </span>
                          <span className="font-['JetBrains_Mono'] text-xs text-[#464555] font-semibold">
                            {item.id}
                          </span>
                        </div>
                        <h5 className="text-xs sm:text-sm font-bold text-[#131b2e] leading-snug">
                          {item.title}
                        </h5>
                        <p className="text-xs text-[#464555] mt-1 line-clamp-2">
                          {item.desc}
                        </p>
                        <div className="mt-4 flex items-center justify-between pt-2 border-t border-[#eaedff]/60">
                          <span className="font-['JetBrains_Mono'] text-[11px] text-[#005338] font-bold">
                            {item.approvals}
                          </span>
                          <div
                            className={`w-6 h-6 rounded-full ${item.avatarBg} text-white flex items-center justify-center text-[10px] font-bold`}
                          >
                            {item.avatar}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-auto p-3 rounded-lg bg-[#f2f3ff]/50 border border-dashed border-[#c7c4d8] text-center text-xs text-[#464555]">
                  <span>
                    ✨ Interactive demo: Dragging items updates Linear & GitHub
                    webhooks automatically.
                  </span>
                </div>
              </div>

              <div className="w-full md:w-80 bg-[#f2f3ff]/70 p-5 rounded-xl flex flex-col gap-3 shrink-0 border border-[#eaedff]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#464555]">
                  Inspector Pane
                </span>
                <div className="p-3 rounded-lg bg-white shadow-2xs border border-[#eaedff]">
                  <span className="text-[11px] font-semibold text-[#464555]">
                    Assignee
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#131b2e] mt-0.5">
                    {currentInspector.assigneeName}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white shadow-2xs border border-[#eaedff]">
                  <span className="text-[11px] font-semibold text-[#464555]">
                    Pull Request
                  </span>
                  <p className="font-['JetBrains_Mono'] text-xs text-[#3525cd] underline truncate mt-0.5">
                    {currentInspector.prUrl}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white shadow-2xs border border-[#eaedff]">
                  <span className="text-[11px] font-semibold text-[#464555]">
                    Estimate
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#131b2e] mt-0.5">
                    {currentInspector.estimate}
                  </p>
                </div>
                <div className="mt-auto pt-2">
                  <button
                    onClick={() =>
                      alert(
                        `Task ${currentInspector.id} status synced to linear!`,
                      )
                    }
                    className="w-full py-2 px-3 rounded-lg bg-white hover:bg-[#eaedff] text-xs font-semibold text-[#3525cd] border border-[#eaedff] transition-colors cursor-pointer"
                  >
                    View in Linear →
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'docs' && (
            <div className="flex flex-col flex-1 p-6 sm:p-8 animate-in fade-in duration-200">
              <div className="max-w-3xl mx-auto w-full flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#eaedff]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-[#eaedff] text-[#464555] font-bold">
                      SHARED SPEC
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#464555]">
                      Updated 4m ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#005338] animate-pulse" />
                    <span className="text-xs font-semibold text-[#131b2e]">
                      3 collaborators typing
                    </span>
                  </div>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight">
                  Q4 Product Strategy: Core Velocity
                </h3>

                <div className="relative">
                  <textarea
                    value={docContent}
                    onChange={(e) => setDocContent(e.target.value)}
                    rows={3}
                    className="w-full text-base sm:text-lg text-[#131b2e] leading-relaxed p-2 rounded-lg border border-transparent hover:border-[#eaedff] focus:border-[#3525cd] focus:outline-none transition-colors resize-none"
                    placeholder="Type spec details..."
                  />
                </div>

                <div
                  onClick={() => setSlashCommandOpen(!slashCommandOpen)}
                  className="p-3.5 rounded-xl bg-[#f2f3ff] shadow-2xs border border-[#eaedff] flex items-center justify-between cursor-pointer hover:border-[#8792fe] transition-all"
                >
                  <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs sm:text-sm text-[#3525cd]">
                    <span className="font-bold">/table</span>
                    <span className="text-[#464555]">
                      — Insert connected database view
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[11px] px-2 py-0.5 bg-white rounded text-[#464555] font-semibold border border-[#eaedff]">
                    Press Enter
                  </span>
                </div>

                {slashCommandOpen && (
                  <div className="p-4 bg-white rounded-xl shadow-md border border-[#eaedff] animate-in fade-in">
                    <span className="text-xs font-bold text-[#464555] uppercase tracking-wider block mb-2">
                      Connected Views
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded bg-[#f2f3ff] hover:bg-[#eaedff] cursor-pointer font-medium">
                        📊 Live Sprint Velocity Table
                      </div>
                      <div className="p-2 rounded bg-[#f2f3ff] hover:bg-[#eaedff] cursor-pointer font-medium">
                        🎯 OKR Progress Rollup
                      </div>
                    </div>
                  </div>
                )}

                <div className="relative mt-2 p-4 bg-[#f2f3ff]/60 rounded-xl border border-[#eaedff]">
                  <p className="text-xs sm:text-sm text-[#131b2e] italic">
                    “All milestone dates must automatically sync to the customer
                    success dashboard.”
                  </p>
                  <div className="absolute -top-3 right-8 px-2 py-0.5 rounded bg-[#3525cd] text-white font-['JetBrains_Mono'] text-[10px] flex items-center gap-1 shadow-xs">
                    <span>Sarah (Typing...)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'convos' && (
            <div className="flex flex-col flex-1 p-6 sm:p-8 animate-in fade-in duration-200">
              <div className="max-w-2xl mx-auto w-full flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#eaedff]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#3525cd] text-[20px]">
                      tag
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-[#131b2e]">
                      launch-checklist
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#464555]">
                    Anchored to Task #381
                  </span>
                </div>

                <div className="flex flex-col gap-4 max-h-72 overflow-y-auto pr-1">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex items-start gap-3 ${
                        msg.isReply
                          ? 'ml-8 p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#eaedff]'
                          : ''
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full ${msg.avatarBg} text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-2xs`}
                      >
                        {msg.initials}
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs sm:text-sm font-bold text-[#131b2e]">
                            {msg.author}
                          </span>
                          <span className="font-['JetBrains_Mono'] text-[11px] text-[#777587]">
                            {msg.time}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#131b2e] mt-1 leading-relaxed">
                          {msg.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <form
                  onSubmit={handleSendReply}
                  className="mt-2 flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Reply to thread... (anchored to ticket)"
                    className="flex-1 px-3 py-2 rounded-lg bg-[#f2f3ff] border border-[#eaedff] text-xs sm:text-sm text-[#131b2e] focus:outline-none focus:border-[#3525cd] focus:bg-white"
                  />
                  <Button type="submit" className="shrink-0">
                    Reply
                  </Button>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="flex flex-col flex-1 p-6 sm:p-8 animate-in fade-in duration-200">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#eaedff]">
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-[#131b2e]">
                      Release Roadmap
                    </h4>
                    <p className="text-xs sm:text-sm text-[#464555]">
                      Q4 Delivery Milestones & Launch Readiness
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-xs text-[#464555]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3525cd]" />
                      Engineering
                    </span>
                    <span className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-xs text-[#464555]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#005338]" />
                      Go-to-market
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex items-center gap-4">
                    <span className="w-28 sm:w-36 text-xs sm:text-sm font-bold text-[#131b2e] shrink-0">
                      API Engine v2
                    </span>
                    <div className="flex-1 bg-[#eaedff] rounded-lg h-8 relative flex items-center p-1 overflow-hidden">
                      <div className="w-3/4 h-full bg-[#3525cd] rounded text-white font-['JetBrains_Mono'] text-[11px] font-semibold flex items-center px-3 shadow-xs">
                        75% Complete • Oct 10 - Nov 15
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="w-28 sm:w-36 text-xs sm:text-sm font-bold text-[#131b2e] shrink-0">
                      Mobile App Beta
                    </span>
                    <div className="flex-1 bg-[#eaedff] rounded-lg h-8 relative flex items-center p-1 overflow-hidden">
                      <div className="ml-[25%] w-1/2 h-full bg-[#8792fe] text-white rounded font-['JetBrains_Mono'] text-[11px] font-semibold flex items-center px-3 shadow-xs">
                        Design Freeze • Nov 01
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="w-28 sm:w-36 text-xs sm:text-sm font-bold text-[#131b2e] shrink-0">
                      Public Launch
                    </span>
                    <div className="flex-1 bg-[#eaedff] rounded-lg h-8 relative flex items-center p-1 overflow-hidden">
                      <div className="ml-[70%] w-[28%] h-full bg-[#005338] text-white rounded font-['JetBrains_Mono'] text-[11px] font-bold flex items-center px-3 shadow-xs">
                        Nov 28 — GA
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-lg bg-[#f2f3ff]/60 border border-[#eaedff] flex items-center justify-between text-xs text-[#464555]">
                  <span>
                    Dependencies automatically shift if preceding ticket status
                    changes.
                  </span>
                  <span className="font-['JetBrains_Mono'] font-bold text-[#3525cd]">
                    Auto-leveling ON
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
