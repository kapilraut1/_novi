import React, { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { TaskItem, Project, TaskStatus } from '@/types';
import { NOVI_LOGO_URL } from '@/lib/data/initial-data';

interface WorkspaceViewProps {
  tasks: TaskItem[];
  projects: Project[];
  activeProjectId: string;
  onSelectProject: (id: string) => void;
  activeView: string;
  onSelectView: (view: string) => void;
  onOpenCommandPalette: () => void;
  onOpenNewTaskModal: () => void;
  onSelectTask: (task: TaskItem) => void;
  onCloseWorkspace: () => void;
  onMoveTaskStatus: (taskId: string, newStatus: TaskStatus) => void;
}

export const WorkspaceView: React.FC<WorkspaceViewProps> = ({
  tasks,
  projects,
  activeProjectId,
  onSelectProject,
  activeView,
  onSelectView,
  onOpenCommandPalette,
  onOpenNewTaskModal,
  onSelectTask,
  onCloseWorkspace,
  onMoveTaskStatus,
}) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const filteredTasks = tasks.filter((t) => {
    const matchesQuery =
      t.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      t.code.toLowerCase().includes(filterQuery.toLowerCase());
    const matchesTag = selectedTag === 'ALL' || t.tag === selectedTag;
    return matchesQuery && matchesTag;
  });

  const columns: { id: TaskStatus; label: string; dotColor: string }[] = [
    { id: 'backlog', label: 'Backlog', dotColor: 'bg-[#777587]' },
    { id: 'in_progress', label: 'In Progress', dotColor: 'bg-[#3525cd]' },
    { id: 'review', label: 'Review', dotColor: 'bg-[#8792fe]' },
    { id: 'done', label: 'Done', dotColor: 'bg-[#005338]' },
  ];

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col font-['Inter']">
      {/* Top Workspace Bar */}
      <header className="h-14 bg-white border-b border-[#eaedff] px-4 flex items-center justify-between gap-4 sticky top-0 z-30 shadow-2xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onCloseWorkspace}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#f2f3ff] hover:bg-[#eaedff] text-xs font-semibold text-[#3525cd] transition-colors cursor-pointer"
            title="Return to landing page"
          >
            <span className="material-symbols-outlined text-[16px]">
              arrow_back
            </span>
            <span>Landing Page</span>
          </button>

          <div className="h-4 w-px bg-[#eaedff]" />

          <div className="flex items-center gap-2">
            <Image
              alt="Novi"
              className="h-6 w-auto"
              height={64}
              src={NOVI_LOGO_URL}
              unoptimized
              width={64}
            />
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#131b2e]">
              Novi Workspace
            </span>
          </div>

          <Badge className="hidden sm:inline-flex bg-[#eaedff] font-['JetBrains_Mono'] text-xs text-[#464555]">
            Sprint 34
          </Badge>
        </div>

        {/* Global Search & Command trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f2f3ff] hover:bg-[#eaedff] text-xs text-[#464555] border border-[#eaedff] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">
              search
            </span>
            <span className="hidden md:inline">Command Palette</span>
            <kbd className="font-['JetBrains_Mono'] text-[10px] px-1 py-0.5 rounded bg-white border border-[#eaedff]">
              ⌘K
            </kbd>
          </button>

          <Button onClick={onOpenNewTaskModal} className="shadow-xs">
            <span className="material-symbols-outlined text-[16px]">add</span>
            <span className="hidden sm:inline">New Task</span>
          </Button>

          <div className="flex -space-x-1.5 overflow-hidden ml-2">
            <div className="w-7 h-7 rounded-full ring-2 ring-white bg-[#4f46e5] text-white text-xs flex items-center justify-center font-bold">
              SM
            </div>
            <div className="w-7 h-7 rounded-full ring-2 ring-white bg-[#4953bc] text-white text-xs flex items-center justify-center font-bold">
              AL
            </div>
            <div className="w-7 h-7 rounded-full ring-2 ring-white bg-[#005338] text-white text-xs flex items-center justify-center font-bold">
              JK
            </div>
          </div>
        </div>
      </header>

      {/* Main split view */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-60 bg-white border-r border-[#eaedff] p-4 flex flex-col gap-6 shrink-0 hidden md:flex">
          {/* Projects */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-[#464555] text-[11px] uppercase tracking-wider font-bold px-2 mb-1">
              <span>Projects</span>
              <button
                onClick={onOpenNewTaskModal}
                className="hover:text-[#3525cd] transition-colors"
                title="Create Task"
              >
                <span className="material-symbols-outlined text-[16px]">
                  add
                </span>
              </button>
            </div>
            {projects.map((proj) => {
              const isSelected = activeProjectId === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => onSelectProject(proj.id)}
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs sm:text-sm transition-all text-left cursor-pointer ${
                    isSelected
                      ? 'bg-[#eaedff] text-[#131b2e] font-semibold'
                      : 'text-[#464555] hover:bg-[#f2f3ff] hover:text-[#131b2e]'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: proj.color }}
                    />
                    <span className="truncate">{proj.name}</span>
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#464555]">
                    {proj.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Views */}
          <div className="flex flex-col gap-1">
            <div className="text-[#464555] text-[11px] uppercase tracking-wider font-bold px-2 mb-1">
              Views
            </div>
            {[
              { id: 'board', label: 'Kanban Board', icon: 'view_kanban' },
              { id: 'docs', label: 'Docs & Specs', icon: 'description' },
              { id: 'timeline', label: 'Roadmap Timeline', icon: 'timeline' },
              {
                id: 'threads',
                label: 'Team Threads',
                icon: 'chat_bubble',
                count: 3,
              },
            ].map((v) => {
              const isSelected = activeView === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => onSelectView(v.id)}
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs sm:text-sm transition-all text-left cursor-pointer ${
                    isSelected
                      ? 'bg-[#eaedff] text-[#3525cd] font-semibold'
                      : 'text-[#464555] hover:bg-[#f2f3ff] hover:text-[#131b2e]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {v.icon}
                  </span>
                  <span>{v.label}</span>
                  {v.count && (
                    <span className="ml-auto px-1.5 py-0.5 rounded-full bg-[#4f46e5] text-white font-['JetBrains_Mono'] text-[10px] font-bold">
                      {v.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Calming Quote */}
          <div className="mt-auto p-3 rounded-xl bg-[#f2f3ff] border border-[#eaedff] text-xs text-[#464555]">
            <p className="italic">
              “Calmness is not a luxury; it is the prerequisite for velocity.”
            </p>
            <span className="mt-2 block font-['JetBrains_Mono'] text-[10px] text-[#3525cd] font-semibold">
              Live sync active • 60fps
            </span>
          </div>
        </aside>

        {/* Workspace Main Panel */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {/* View: BOARD */}
          {activeView === 'board' && (
            <div className="flex flex-col gap-5">
              {/* Filter and View Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-[#eaedff] shadow-2xs">
                <div className="flex items-center gap-2 flex-1 min-w-[220px]">
                  <span className="material-symbols-outlined text-[#777587] text-[18px]">
                    filter_alt
                  </span>
                  <input
                    type="text"
                    value={filterQuery}
                    onChange={(e) => setFilterQuery(e.target.value)}
                    placeholder="Filter cards in Sprint 34..."
                    className="w-full text-xs text-[#131b2e] placeholder:text-[#777587] bg-transparent focus:outline-none"
                  />
                  {filterQuery && (
                    <button
                      onClick={() => setFilterQuery('')}
                      className="text-xs text-[#777587] hover:text-[#131b2e]"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Tag Pills */}
                <div className="flex items-center gap-1 overflow-x-auto">
                  {['ALL', 'INFRA', 'DESIGN', 'GROWTH', 'CORE'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTag(t)}
                      className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                        selectedTag === t
                          ? 'bg-[#3525cd] text-white'
                          : 'bg-[#f2f3ff] text-[#464555] hover:bg-[#eaedff]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4 Kanban Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {columns.map((col) => {
                  const colTasks = filteredTasks.filter(
                    (t) => t.status === col.id,
                  );
                  return (
                    <div
                      key={col.id}
                      className="bg-[#f2f3ff]/60 rounded-2xl p-3 border border-[#eaedff] flex flex-col gap-3 min-h-[450px]"
                    >
                      {/* Col Header */}
                      <div className="flex items-center justify-between px-2 pt-1">
                        <span className="text-xs font-bold text-[#131b2e] flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${col.dotColor}`}
                          />
                          {col.label}
                        </span>
                        <span className="font-['JetBrains_Mono'] text-xs text-[#464555] font-semibold">
                          {colTasks.length}
                        </span>
                      </div>

                      {/* Card list */}
                      <div className="flex flex-col gap-2.5 flex-1">
                        {colTasks.map((task) => (
                          <div
                            key={task.id}
                            onClick={() => onSelectTask(task)}
                            className="bg-white p-3.5 rounded-xl border border-[#eaedff] shadow-2xs hover:shadow-md hover:border-[#8792fe] transition-all cursor-pointer group text-left"
                          >
                            <div className="flex items-center justify-between mb-2">
                              {task.tag && (
                                <span className="px-1.5 py-0.5 rounded bg-[#eaedff] font-['JetBrains_Mono'] text-[10px] font-bold text-[#464555]">
                                  {task.tag}
                                </span>
                              )}
                              <span className="font-['JetBrains_Mono'] text-[11px] text-[#464555]">
                                {task.code}
                              </span>
                            </div>

                            <p className="text-xs sm:text-sm font-semibold text-[#131b2e] group-hover:text-[#3525cd] transition-colors leading-snug">
                              {task.title}
                            </p>

                            {task.description && (
                              <p className="text-[11px] text-[#464555] mt-1 line-clamp-2">
                                {task.description}
                              </p>
                            )}

                            {/* Quick Column Shift Buttons on Hover */}
                            <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#f2f3ff]">
                              <div className="flex items-center gap-1">
                                {col.id !== 'backlog' && (
                                  <button
                                    title="Move left"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const prevMap: Record<
                                        TaskStatus,
                                        TaskStatus
                                      > = {
                                        done: 'review',
                                        review: 'in_progress',
                                        in_progress: 'backlog',
                                        backlog: 'backlog',
                                      };
                                      onMoveTaskStatus(
                                        task.id,
                                        prevMap[col.id],
                                      );
                                    }}
                                    className="p-1 rounded hover:bg-[#eaedff] text-[#464555] transition-colors"
                                  >
                                    <span className="material-symbols-outlined text-[14px]">
                                      arrow_back
                                    </span>
                                  </button>
                                )}
                                {col.id !== 'done' && (
                                  <button
                                    title="Move right"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const nextMap: Record<
                                        TaskStatus,
                                        TaskStatus
                                      > = {
                                        backlog: 'in_progress',
                                        in_progress: 'review',
                                        review: 'done',
                                        done: 'done',
                                      };
                                      onMoveTaskStatus(
                                        task.id,
                                        nextMap[col.id],
                                      );
                                    }}
                                    className="p-1 rounded hover:bg-[#eaedff] text-[#464555] transition-colors"
                                  >
                                    <span className="material-symbols-outlined text-[14px]">
                                      arrow_forward
                                    </span>
                                  </button>
                                )}
                              </div>

                              <div
                                className={`w-5 h-5 rounded-full ${task.assignee.color} text-white flex items-center justify-center text-[9px] font-bold`}
                                title={task.assignee.name}
                              >
                                {task.assignee.initials}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Add button inside column */}
                      <button
                        onClick={onOpenNewTaskModal}
                        className="w-full py-2 rounded-lg text-xs font-semibold text-[#464555] hover:text-[#3525cd] hover:bg-white transition-colors flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          add
                        </span>
                        <span>Add item</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* View: DOCS */}
          {activeView === 'docs' && (
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-[#eaedff] shadow-xs text-left">
              <div className="flex items-center justify-between pb-4 border-b border-[#eaedff] mb-6">
                <div>
                  <span className="px-2 py-0.5 rounded bg-[#eaedff] text-[#3525cd] text-xs font-bold">
                    SPECIFICATION DOCUMENT
                  </span>
                  <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#131b2e] mt-1">
                    System Architecture & API v2 Contract
                  </h2>
                </div>
                <span className="text-xs font-['JetBrains_Mono'] text-[#464555]">
                  Auto-saved 2s ago
                </span>
              </div>

              <div className="prose prose-slate max-w-none text-sm leading-relaxed text-[#464555] flex flex-col gap-4">
                <p>
                  This document serves as the unified technical specification
                  for the upcoming billing v2 migration and public API
                  endpoints.
                </p>
                <div className="p-4 rounded-xl bg-[#f2f3ff] border border-[#eaedff] font-['JetBrains_Mono'] text-xs text-[#131b2e]">
                  <code>POST /v2/workspaces/:id/events</code>
                  <div className="mt-1 text-[#464555]">
                    Payload: &#123; &quot;event&quot;:
                    &quot;ticket.resolved&quot;, &quot;author&quot;:
                    &quot;SM&quot;, &quot;timestamp&quot;: 1729800000 &#125;
                  </div>
                </div>
                <h4 className="font-bold text-base text-[#131b2e]">
                  Milestones & Signoffs
                </h4>
                <ul className="list-disc pl-5 flex flex-col gap-1">
                  <li>
                    Security audit by third party (SOC2 compliance verified)
                  </li>
                  <li>Realtime avatar broadcast latency under 35ms</li>
                  <li>Zero breaking changes for existing SDK clients</li>
                </ul>
              </div>
            </div>
          )}

          {/* View: TIMELINE */}
          {activeView === 'timeline' && (
            <div className="bg-white rounded-2xl p-6 border border-[#eaedff] shadow-xs text-left">
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e] mb-4">
                Quarterly Delivery Roadmap
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="w-32 font-bold text-xs">Core API V2</span>
                  <div className="flex-1 bg-[#eaedff] h-8 rounded-lg relative overflow-hidden flex items-center px-3">
                    <div className="w-3/4 h-full bg-[#3525cd] rounded text-white text-xs font-semibold flex items-center px-3">
                      Oct 10 - Nov 15
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-32 font-bold text-xs">
                    Mobile App Beta
                  </span>
                  <div className="flex-1 bg-[#eaedff] h-8 rounded-lg relative overflow-hidden flex items-center px-3">
                    <div className="ml-[25%] w-1/2 h-full bg-[#8792fe] rounded text-white text-xs font-semibold flex items-center px-3">
                      Design Freeze Nov 01
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* View: THREADS */}
          {activeView === 'threads' && (
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 border border-[#eaedff] shadow-xs text-left">
              <div className="flex items-center gap-2 pb-3 border-b border-[#eaedff] mb-4">
                <span className="material-symbols-outlined text-[#3525cd]">
                  forum
                </span>
                <h3 className="font-bold text-base">#sprint-34-sync</h3>
              </div>
              <div className="flex flex-col gap-3">
                <div className="p-3 rounded-xl bg-[#f2f3ff] text-xs">
                  <span className="font-bold text-[#131b2e]">
                    Sarah Mitchell
                  </span>
                  : We pushed the updated token listener to staging!
                </div>
                <div className="p-3 rounded-xl bg-[#f2f3ff] text-xs">
                  <span className="font-bold text-[#131b2e]">Alex Lin</span>:
                  Verified test coverage is at 98.4%. Ready to merge to main.
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
