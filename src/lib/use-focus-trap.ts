import { RefObject, useEffect } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface UseFocusTrapOptions {
  active: boolean;
  containerRef: RefObject<HTMLElement | null>;
  onEscape?: () => void;
  restoreFocusRef?: RefObject<HTMLElement | null>;
}

export function useFocusTrap({
  active,
  containerRef,
  onEscape,
  restoreFocusRef,
}: UseFocusTrapOptions) {
  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    if (!container) return;

    const previouslyFocused =
      (restoreFocusRef?.current as HTMLElement | null) ??
      (document.activeElement as HTMLElement | null);

    const focusable = Array.from(
      container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onEscape?.();
        return;
      }
      if (event.key !== 'Tab') return;
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }
      const current = document.activeElement as HTMLElement | null;
      const currentInContainer = container.contains(current);
      if (event.shiftKey && (!currentInContainer || current === first)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (!currentInContainer || current === last)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [active, containerRef, onEscape, restoreFocusRef]);
}
