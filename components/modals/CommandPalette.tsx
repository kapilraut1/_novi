import React, { useState, useEffect } from 'react';
import { TaskItem, Project } from '@/types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  tasks: TaskItem[];
  projects: Project[];
  onSelectTask: (task: TaskItem) => void;
  onSelectView: (view: string) => void;
  onSelectProject: (projectId: string) => void;
  onOpenNewTaskModal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  tasks,
  projects,
  onSelectTask,
  onSelectView,
  onSelectProject,
  onOpenNewTaskModal,
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredTasks = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.code.toLowerCase().includes(query.toLowerCase()) ||
      t.tag?.toLowerCase().includes(query.toLowerCase()),
  );

  const navigationCommands = [
    {
      id: 'board',
      title: 'Go to Kanban Board',
      icon: 'view_kanban',
      action: () => onSelectView('board'),
    },
    {
      id: 'docs',
      title: 'Go to Docs & Specs',
      icon: 'description',
      action: () => onSelectView('docs'),
    },
    {
      id: 'timeline',
      title: 'Go to Timeline & Roadmap',
      icon: 'timeline',
      action: () => onSelectView('timeline'),
    },
    {
      id: 'threads',
      title: 'Go to Threads & Convos',
      icon: 'chat_bubble',
      action: () => onSelectView('threads'),
    },
  ].filter((c) => c.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#c7c4d8]/60 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#eaedff]">
          <span className="material-symbols-outlined text-[#3525cd] text-[22px]">
            search
          </span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search tasks, specs, team..."
            className="flex-1 text-sm sm:text-base text-[#131b2e] placeholder:text-[#777587] focus:outline-none bg-transparent"
          />
          <button
            onClick={onClose}
            className="text-xs font-['JetBrains_Mono'] px-2 py-0.5 rounded bg-[#f2f3ff] text-[#464555] hover:bg-[#eaedff] transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 flex flex-col gap-1">
          {/* Quick Actions */}
          <div className="px-3 py-1.5 text-[11px] font-bold text-[#464555] uppercase tracking-wider">
            Quick Actions
          </div>
          <button
            onClick={() => {
              onOpenNewTaskModal();
              onClose();
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#eaedff] text-left text-xs sm:text-sm text-[#131b2e] font-semibold transition-colors cursor-pointer"
          >
            <span className="w-7 h-7 rounded bg-[#3525cd] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">add</span>
            </span>
            <span>Create new task in Sprint 34</span>
            <span className="ml-auto font-['JetBrains_Mono'] text-[11px] text-[#464555]">
              C
            </span>
          </button>

          {/* Navigation */}
          {navigationCommands.length > 0 && (
            <>
              <div className="px-3 py-1.5 mt-2 text-[11px] font-bold text-[#464555] uppercase tracking-wider">
                Navigate Views
              </div>
              {navigationCommands.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                    onClose();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f2f3ff] text-left text-xs sm:text-sm text-[#131b2e] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#3525cd]">
                    {cmd.icon}
                  </span>
                  <span>{cmd.title}</span>
                </button>
              ))}
            </>
          )}

          {/* Matching Tasks */}
          {filteredTasks.length > 0 && (
            <>
              <div className="px-3 py-1.5 mt-2 text-[11px] font-bold text-[#464555] uppercase tracking-wider">
                Tasks & Specs ({filteredTasks.length})
              </div>
              {filteredTasks.slice(0, 6).map((task) => (
                <button
                  key={task.id}
                  onClick={() => {
                    onSelectTask(task);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#f2f3ff] text-left text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2 truncate pr-2">
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#3525cd]">
                      {task.code}
                    </span>
                    <span className="truncate text-[#131b2e] font-medium">
                      {task.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-['JetBrains_Mono'] uppercase px-1.5 py-0.5 rounded bg-[#eaedff] text-[#464555] shrink-0">
                    {task.status.replace('_', ' ')}
                  </span>
                </button>
              ))}
            </>
          )}

          {/* Projects */}
          <div className="px-3 py-1.5 mt-2 text-[11px] font-bold text-[#464555] uppercase tracking-wider">
            Switch Project
          </div>
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                onSelectProject(proj.id);
                onClose();
              }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f2f3ff] text-left text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: proj.color }}
              />
              <span className="text-[#131b2e] font-medium">{proj.name}</span>
              <span className="ml-auto font-['JetBrains_Mono'] text-xs text-[#464555]">
                {proj.count} tasks
              </span>
            </button>
          ))}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#f2f3ff] border-t border-[#eaedff] flex items-center justify-between text-[11px] text-[#464555]">
          <span className="flex items-center gap-1.5">
            <kbd className="px-1 py-0.5 rounded bg-white border border-[#eaedff]">
              ↑↓
            </kbd>{' '}
            to navigate
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="px-1 py-0.5 rounded bg-white border border-[#eaedff]">
              ↵
            </kbd>{' '}
            to select
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="px-1 py-0.5 rounded bg-white border border-[#eaedff]">
              ESC
            </kbd>{' '}
            to close
          </span>
        </div>
      </div>
    </div>
  );
};
