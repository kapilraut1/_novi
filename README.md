# Novi — Landing Page

A responsive and interactive landing page for **Novi**, a project and task management tool designed for small, fast-moving teams.

The project focuses on creating a polished product experience with strong visual hierarchy, responsive design, smooth interactions, and attention to detail.

## Live Preview

🔗 **[View the live project](https://novi-teal.vercel.app/)**

## Repository

🔗 **[View the source code](https://github.com/kapilraut1/_novi/)**

---

## Overview

Novi is designed as a calm, all-in-one workspace that brings tasks, conversations, and project planning together for small, fast-moving teams.

The implementation goes beyond the core landing page requirements by introducing interactive product experiences, modals, animations, and reusable components to demonstrate both frontend implementation and interaction design.

---

## Requirements Coverage

| Requirement | Implementation |
| --- | --- |
| Navigation | Responsive navigation with links, CTA, and animated mobile menu |
| Hero Section | Headline, supporting text, CTAs, animations, and product-inspired visual |
| Feature Section | Four feature cards highlighting Novi's core capabilities |
| Footer | Navigation groups, newsletter signup, social links, and legal links |
| Responsiveness | Optimized layouts for mobile, tablet, and desktop |
| Interactions | Interactive workspace, command palette, modals, buttons, and animations |
| Accessibility | Keyboard support, focus states, semantic HTML, accessible dialogs, and reduced motion support |

---

## Features

### Responsive Navigation

- Desktop navigation with primary links and CTA
- Animated mobile navigation menu
- Keyboard accessibility
- Escape key support
- Focus management

### Interactive Hero

- Clear product-focused messaging
- Primary and secondary calls to action
- Animated entrance effects
- Product-inspired visual

### Feature Highlights

The landing page showcases Novi's core capabilities:

- **Boards that move at your speed**  
  Plan sprints and track tasks without hunting through spreadsheets.

- **Threads, not another inbox**  
  Keep project conversations attached to the work itself.

- **One timeline for the whole team**  
  Keep deadlines and milestones visible in one shared view.

- **Works the way you already do**  
  Import your existing workflow and get started quickly.

### Interactive Product Experience

Beyond the required sections, the project includes additional interactive elements such as:

- Interactive workspace showcase
- Task interactions
- Command palette
- New task modal
- Task detail modal
- Video tour modal
- Animated UI transitions and micro-interactions

### Newsletter Signup

The footer includes a client-side newsletter form with:

- Email validation using Zod
- Loading state
- Success state
- Error feedback

---

## Tech Stack

- **Next.js 14**
- **React 18**
- **TypeScript**
- **Tailwind CSS v4**
- **Motion**
- **Zustand**
- **Zod**
- **Lucide React**
- **Jest**
- **React Testing Library**

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Clone the Repository

```bash
git clone https://github.com/kapilraut1/_novi.git
cd _novi
npm install
npm run dev
