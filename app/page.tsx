'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { Features } from '@/components/sections/Features';
import { InteractiveShowcase } from '@/components/sections/InteractiveShowcase';
import { WorkflowSection } from '@/components/sections/WorkflowSection';
import { IntegrationsSection } from '@/components/sections/IntegrationsSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { CommandPalette } from '@/components/modals/CommandPalette';
import { NewTaskModal } from '@/components/modals/NewTaskModal';
import { TaskDetailModal } from '@/components/modals/TaskDetailModal';
import { VideoTourModal } from '@/components/modals/VideoTourModal';
import { WorkspaceView } from '@/components/sections/WorkspaceView';
import { INITIAL_TASKS, INITIAL_PROJECTS } from '@/lib/data/initial-data';
import { TaskItem, TaskStatus } from '@/types';

export default function Page() {
  const [tasks, setTasks] = useState<TaskItem[]>(() => {
    if (typeof window === 'undefined') {
      return INITIAL_TASKS;
    }
    try {
      const saved = localStorage.getItem('novi_tasks');
      return saved ? (JSON.parse(saved) as TaskItem[]) : INITIAL_TASKS;
    } catch {
      return INITIAL_TASKS;
    }
  });

  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [activeProjectId, setActiveProjectId] = useState('growth');
  const [activeView, setActiveView] = useState('board');
  const [activeNavSection, setActiveNavSection] = useState('product');

  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);
  const [isVideoTourOpen, setIsVideoTourOpen] = useState(false);
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('novi_tasks', JSON.stringify(tasks));
    } catch (e) {
      console.error(e);
    }
  }, [tasks]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      if (
        e.key === 'c' &&
        !isCommandPaletteOpen &&
        !selectedTask &&
        !isNewTaskModalOpen
      ) {
        const target = e.target as HTMLElement;
        if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
          return;
        setIsNewTaskModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, selectedTask, isNewTaskModalOpen]);

  const handleAddTask = (taskData: Omit<TaskItem, 'id' | 'code'>) => {
    const nextNum = 120 + tasks.length + 1;
    const newTask: TaskItem = {
      ...taskData,
      id: `task-${Date.now()}`,
      code: `NOV-${nextNum}`,
    };
    setTasks((prev) => [newTask, ...prev]);

    setProjects((prev) =>
      prev.map((p) =>
        p.id === activeProjectId ? { ...p, count: p.count + 1 } : p,
      ),
    );
  };

  const handleUpdateTaskStatus = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t)),
    );
    if (selectedTask && selectedTask.id === taskId) {
      setSelectedTask((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
    setSelectedTask(null);
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveNavSection(sectionId);
    if (sectionId === 'preview') {
      const el = document.getElementById('preview');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'features') {
      const el = document.getElementById('features');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'integrations') {
      const el = document.getElementById('integrations');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'pricing' || sectionId === 'product') {
      const el = document.getElementById('hero');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'docs') {
      setActiveView('docs');
      const el = document.getElementById('preview');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setIsWorkspaceOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] selection:bg-[#3525cd] selection:text-white flex flex-col font-['Inter']">
      {isWorkspaceOpen ? (
        <WorkspaceView
          tasks={tasks}
          projects={projects}
          activeProjectId={activeProjectId}
          onSelectProject={setActiveProjectId}
          activeView={activeView}
          onSelectView={setActiveView}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onOpenNewTaskModal={() => setIsNewTaskModalOpen(true)}
          onSelectTask={(task) => setSelectedTask(task)}
          onCloseWorkspace={() => setIsWorkspaceOpen(false)}
          onMoveTaskStatus={handleUpdateTaskStatus}
        />
      ) : (
        <>
          <Navbar
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            onOpenWorkspace={() => setIsWorkspaceOpen(true)}
            onOpenAuth={handleOpenAuth}
            onNavigateSection={handleNavigateSection}
            activeSection={activeNavSection}
            isWorkspaceOpen={isWorkspaceOpen}
          />

          <Hero
            tasks={tasks}
            projects={projects}
            activeProjectId={activeProjectId}
            onSelectProject={setActiveProjectId}
            activeView={activeView}
            onSelectView={(v) => {
              setActiveView(v);
              const el = document.getElementById('preview');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            onOpenNewTaskModal={() => setIsNewTaskModalOpen(true)}
            onSelectTask={(task) => setSelectedTask(task)}
            onOpenVideoTour={() => setIsVideoTourOpen(true)}
            onOpenWorkspace={() => setIsWorkspaceOpen(true)}
          />

          <SocialProof />

          <Features />

          <InteractiveShowcase />

          <WorkflowSection />

          <IntegrationsSection />

          <FinalCta
            onStartFree={() => setIsWorkspaceOpen(true)}
            onContact={() => setIsVideoTourOpen(true)}
          />

          <Footer />
        </>
      )}

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        tasks={tasks}
        projects={projects}
        onSelectTask={(task) => setSelectedTask(task)}
        onSelectView={(view) => {
          setActiveView(view);
          if (!isWorkspaceOpen) {
            const el = document.getElementById('preview');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onSelectProject={(projId) => setActiveProjectId(projId)}
        onOpenNewTaskModal={() => setIsNewTaskModalOpen(true)}
      />

      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onClose={() => setIsNewTaskModalOpen(false)}
        onAddTask={handleAddTask}
      />

      <TaskDetailModal
        task={selectedTask}
        onClose={() => setSelectedTask(null)}
        onUpdateStatus={handleUpdateTaskStatus}
        onDeleteTask={handleDeleteTask}
      />

      <VideoTourModal
        isOpen={isVideoTourOpen}
        onClose={() => setIsVideoTourOpen(false)}
        onOpenWorkspace={() => setIsWorkspaceOpen(true)}
      />
    </div>
  );
}
