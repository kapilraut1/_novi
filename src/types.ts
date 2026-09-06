export type TaskStatus = 'backlog' | 'in_progress' | 'review' | 'done';

export interface TaskItem {
  id: string;
  code: string;
  title: string;
  description?: string;
  status: TaskStatus;
  tag?: string;
  tagColor?: string;
  priority?: 'P0' | 'P1' | 'P2' | 'urgent';
  checklist?: {
    completed: number;
    total: number;
  };
  dueDate?: string;
  assignee: {
    name: string;
    initials: string;
    color: string;
    textColor?: string;
  };
  secondaryAssignee?: {
    name: string;
    initials: string;
    color: string;
  };
  meta?: {
    type: 'specs' | 'comments' | 'commit' | 'shipped' | 'verified' | 'closed';
    text: string;
  };
}

export interface Project {
  id: string;
  name: string;
  count: number;
  color: string;
}

export interface ConversationMessage {
  id: string;
  author: string;
  initials: string;
  avatarBg: string;
  time: string;
  content: string;
  isReply?: boolean;
}

export interface TimelineItem {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  progress: number;
  color: string;
  statusBadge: string;
}
