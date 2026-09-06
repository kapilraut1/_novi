import React from 'react';
import { IconButton } from '@/components/ui/IconButton';
import { TaskItem, TaskStatus } from '@/types';

interface TaskDetailModalProps {
  task: TaskItem | null;
  onClose: () => void;
  onUpdateStatus: (taskId: string, newStatus: TaskStatus) => void;
  onDeleteTask: (taskId: string) => void;
}

export const TaskDetailModal: React.FC<TaskDetailModalProps> = ({
  task,
  onClose,
  onUpdateStatus,
  onDeleteTask,
}) => {
  if (!task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#eaedff] p-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#eaedff]">
          <div className="flex items-center gap-2">
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#3525cd] px-2 py-0.5 rounded bg-[#eaedff]">
              {task.code}
            </span>
            {task.tag && (
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#464555] px-2 py-0.5 rounded bg-[#f2f3ff]">
                {task.tag}
              </span>
            )}
            {task.priority === 'urgent' && (
              <span className="text-[10px] font-bold text-[#ba1a1a] bg-[#ffdad6] px-2 py-0.5 rounded">
                URGENT
              </span>
            )}
          </div>
          <IconButton label="Close task detail modal" onClick={onClose}>
            <span className="material-symbols-outlined text-[20px]">close</span>
          </IconButton>
        </div>

        <div className="mt-4">
          <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e]">
            {task.title}
          </h3>
          <p className="mt-2 text-sm text-[#464555] leading-relaxed">
            {task.description ||
              'No additional description provided. Context is linked with connected Git commits and Linear issues.'}
          </p>
        </div>

        <div className="mt-6">
          <label className="block text-xs font-bold text-[#464555] uppercase tracking-wider mb-2">
            Move to Column
          </label>
          <div className="grid grid-cols-4 gap-2">
            {(['backlog', 'in_progress', 'review', 'done'] as TaskStatus[]).map(
              (st) => {
                const isActive = task.status === st;
                const labelMap: Record<TaskStatus, string> = {
                  backlog: 'Backlog',
                  in_progress: 'In Progress',
                  review: 'Review',
                  done: 'Done',
                };
                return (
                  <button
                    key={st}
                    onClick={() => onUpdateStatus(task.id, st)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#3525cd] text-white shadow-xs'
                        : 'bg-[#f2f3ff] text-[#464555] hover:bg-[#eaedff] hover:text-[#131b2e]'
                    }`}
                  >
                    {labelMap[st]}
                  </button>
                );
              },
            )}
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-[#f2f3ff]/60 border border-[#eaedff] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full ${task.assignee.color} text-white flex items-center justify-center font-bold text-xs`}
            >
              {task.assignee.initials}
            </div>
            <div>
              <span className="text-[11px] text-[#464555] block">Assignee</span>
              <span className="text-xs sm:text-sm font-bold text-[#131b2e]">
                {task.assignee.name}
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[11px] text-[#464555] block">Due Date</span>
            <span className="text-xs sm:text-sm font-['JetBrains_Mono'] font-bold text-[#131b2e]">
              {task.dueDate || 'Sprint End'}
            </span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#eaedff] flex items-center justify-between">
          <button
            onClick={() => {
              onDeleteTask(task.id);
              onClose();
            }}
            className="text-xs font-semibold text-[#ba1a1a] hover:underline cursor-pointer"
          >
            Delete Task
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#3525cd] text-white text-xs font-semibold hover:bg-[#4f46e5] cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
