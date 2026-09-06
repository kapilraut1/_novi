import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useFocusTrap } from '@/lib/use-focus-trap';
import { NOVI_LOGO_URL } from '@/lib/data/initial-data';
import { useMobileMenuStore } from '@/store/use-mobile-menu-store';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenWorkspace: () => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onNavigateSection: (sectionId: string) => void;
  activeSection?: string;
  isWorkspaceOpen?: boolean;
}

const FOCUS_RING =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3525cd]';

export const Navbar: React.FC<NavbarProps> = ({
  onOpenWorkspace,
  onOpenAuth,
  onNavigateSection,
  activeSection = 'product',
  isWorkspaceOpen = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isOpen = useMobileMenuStore((s) => s.isOpen);
  const close = useMobileMenuStore((s) => s.close);
  const toggle = useMobileMenuStore((s) => s.toggle);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    const update = () => {
      rafId = 0;
      setIsScrolled(window.scrollY > 20);
    };
    const handleScroll = () => {
      if (rafId === 0) rafId = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        !menuPanelRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        close();
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) close();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, close]);

  useFocusTrap({
    active: isOpen,
    containerRef: menuPanelRef,
    onEscape: close,
    restoreFocusRef: triggerRef,
  });

  const navItems = [
    { id: 'product', label: 'Product' },
    { id: 'features', label: 'Features' },
    { id: 'preview', label: 'Interactive Demo' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'docs', label: 'Docs' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(19,27,46,0.06)] border-b border-[#eaedff]'
          : 'bg-white/40 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-[#131b2e] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-[#3525cd]"
      >
        Skip to content
      </a>
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection('hero');
            }}
            className={`flex items-center gap-2 group cursor-pointer ${FOCUS_RING}`}
            id="brand-logo-nav"
          >
            <Image
              alt="Novi Brand Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              height={64}
              priority
              src={NOVI_LOGO_URL}
              unoptimized
              width={64}
            />
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#131b2e] tracking-tight">
              Novi
            </span>
          </a>
        </div>

        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                id={`nav-link-${item.id}`}
                onClick={() => onNavigateSection(item.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${FOCUS_RING} ${
                  isActive
                    ? 'bg-surface-container-high text-[#131b2e] font-semibold shadow-xs'
                    : 'text-on-surface-variant hover:bg-surface-container/70 hover:text-[#131b2e]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            id="nav-login-btn"
            variant="secondary"
            size="md"
            onClick={() => onOpenAuth('login')}
            className="shadow-xs group"
          >
            <span>Login</span>
          </Button>
          <Button
            id="nav-start-free-btn"
            size="sm"
            onClick={onOpenWorkspace}
            className={`shadow-[0_4px_14px_rgba(53,37,205,0.25)] hover:shadow-[0_6px_20px_rgba(53,37,205,0.35)] active:scale-[0.98] ${FOCUS_RING}`}
          >
            <span>{isWorkspaceOpen ? 'Back to Overview' : 'Start free'}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <button
            type="button"
            id="nav-profile-toggle"
            onClick={onOpenWorkspace}
            title="Open Calm Workspace"
            className={`w-9 h-9 rounded-full bg-surface-container text-primary flex items-center justify-center hover:bg-surface-container-high hover:ring-2 hover:ring-secondary-container transition-all cursor-pointer shadow-2xs ${FOCUS_RING}`}
          >
            <User className="w-4 h-4" />
          </button>

          <button
            ref={triggerRef}
            type="button"
            id="nav-mobile-menu-toggle"
            aria-label={
              isOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            aria-controls="mobile-nav-dialog"
            onClick={toggle}
            className={`md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#464555] hover:bg-[#eaedff] hover:text-[#131b2e] transition-colors cursor-pointer ${FOCUS_RING}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuPanelRef}
            key="mobile-nav"
            id="mobile-nav-dialog"
            role="dialog"
            aria-modal="false"
            aria-label="Mobile navigation menu"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.98, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden origin-top overflow-hidden border-t border-surface-container bg-white/95 backdrop-blur-xl shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      onNavigateSection(item.id);
                      close();
                    }}
                    className={`text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${FOCUS_RING} ${
                      isActive
                        ? 'bg-surface-container-high text-[#3525cd] font-semibold'
                        : 'text-[#464555] hover:bg-[#eaedff] hover:text-[#131b2e]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#eaedff] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onOpenAuth('login');
                    close();
                  }}
                  className={`text-left sm:text-center text-sm font-medium text-[#464555] px-3.5 py-2 rounded-lg hover:bg-[#eaedff] cursor-pointer ${FOCUS_RING}`}
                >
                  Log in
                </button>
                <Button
                  onClick={() => {
                    onOpenWorkspace();
                    close();
                  }}
                  className={`gap-2 shadow-sm ${FOCUS_RING}`}
                >
                  <span>Start free</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
