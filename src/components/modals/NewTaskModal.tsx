import React, { useState } from 'react';
import { IconButton } from '@/components/ui/IconButton';
import { Input } from '@/components/ui/Input';
import { TaskItem, TaskStatus } from '@/types';

interface NewTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: Omit<TaskItem, 'id' | 'code'>) => void;
}

export const NewTaskModal: React.FC<NewTaskModalProps> = ({
  isOpen,
  onClose,
  onAddTask,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<TaskStatus>('backlog');
  const [tag, setTag] = useState('INFRA');
  const [priority, setPriority] = useState<
    'P0' | 'P1' | 'P2' | 'urgent' | undefined
  >('P1');
  const [assigneeName, setAssigneeName] = useState('Sarah Mitchell');

  if (!isOpen) return null;

  const assigneesMap: Record<string, { initials: string; color: string }> = {
    'Sarah Mitchell': { initials: 'SM', color: 'bg-[#4f46e5]' },
    'Alex Lin': { initials: 'AL', color: 'bg-[#4953bc]' },
    'David Hwang': { initials: 'DH', color: 'bg-[#005338]' },
    'Jared K.': { initials: 'JK', color: 'bg-[#8792fe]' },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const assigneeInfo = assigneesMap[assigneeName] || {
      initials: 'SM',
      color: 'bg-[#4f46e5]',
    };

    onAddTask({
      title: title.trim(),
      description: description.trim() || undefined,
      status,
      tag,
      priority,
      assignee: {
        name: assigneeName,
        initials: assigneeInfo.initials,
        color: assigneeInfo.color,
        textColor: 'text-white',
      },
      dueDate: 'Nov 12',
    });

    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#eaedff] p-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3525cd]" />
            <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#131b2e]">
              Create Sprint Task
            </h3>
          </div>
          <IconButton label="Close new task modal" onClick={onClose}>
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[20px]"
            >
              close
            </span>
          </IconButton>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold text-[#464555] uppercase tracking-wider mb-1">
              Task Title *
            </label>
            <Input
              type="text"
              required
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Implement webhook retry telemetry"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#464555] uppercase tracking-wider mb-1">
              Description
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Technical specs, context, or PR dependencies..."
              className="w-full px-3.5 py-2 text-sm text-[#131b2e] rounded-lg border border-[#eaedff] focus:outline-none focus:border-[#3525cd] bg-[#f2f3ff]/50 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#464555] uppercase tracking-wider mb-1">
                Column Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as TaskStatus)}
                className="w-full px-3 py-2 text-xs font-semibold rounded-lg border border-[#eaedff] bg-[#f2f3ff]/50 text-[#131b2e]"
              >
                <option value="backlog">Backlog</option>
                <option value="in_progress">In Progress</option>
                <option value="review">Review</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#464555] uppercase tracking-wider mb-1">
                Domain Tag
              </label>
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="w-full px-3 py-2 text-xs font-semibold rounded-lg border border-[#eaedff] bg-[#f2f3ff]/50 text-[#131b2e]"
              >
                <option value="INFRA">INFRA</option>
                <option value="DESIGN">DESIGN</option>
                <option value="GROWTH">GROWTH</option>
                <option value="CORE">CORE</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#464555] uppercase tracking-wider mb-1">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) =>
                  setPriority(
                    e.target.value as 'P0' | 'P1' | 'P2' | 'urgent' | undefined,
                  )
                }
                className="w-full px-3 py-2 text-xs font-semibold rounded-lg border border-[#eaedff] bg-[#f2f3ff]/50 text-[#131b2e]"
              >
                <option value="P1">P1 Normal</option>
                <option value="urgent">Urgent</option>
                <option value="P0">P0 Critical</option>
                <option value="P2">P2 Low</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#464555] uppercase tracking-wider mb-1">
                Assignee
              </label>
              <select
                value={assigneeName}
                onChange={(e) => setAssigneeName(e.target.value)}
                className="w-full px-3 py-2 text-xs font-semibold rounded-lg border border-[#eaedff] bg-[#f2f3ff]/50 text-[#131b2e]"
              >
                <option value="Sarah Mitchell">Sarah Mitchell (SM)</option>
                <option value="Alex Lin">Alex Lin (AL)</option>
                <option value="David Hwang">David Hwang (DH)</option>
                <option value="Jared K.">Jared K. (JK)</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-3 pt-3 border-t border-[#eaedff]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-[#464555] hover:bg-[#f2f3ff] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-[#3525cd] text-white text-xs font-semibold hover:bg-[#4f46e5] shadow-xs transition-all cursor-pointer"
            >
              Add to Sprint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
