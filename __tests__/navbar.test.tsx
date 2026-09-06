import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Navbar } from '@/components/sections/Navbar';
import { useMobileMenuStore } from '@/store/use-mobile-menu-store';

const noop = () => {};

function renderNavbar() {
  return render(
    <Navbar
      onOpenCommandPalette={noop}
      onOpenWorkspace={noop}
      onOpenAuth={noop}
      onNavigateSection={noop}
    />,
  );
}

describe('Navbar mobile menu', () => {
  beforeEach(() => {
    useMobileMenuStore.setState({ isOpen: false });
  });

  it('opens and closes from the trigger with aria-expanded', () => {
    renderNavbar();
    const trigger = screen.getByRole('button', {
      name: 'Open navigation menu',
    });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(trigger);

    const dialog = screen.getByRole('dialog', {
      name: 'Mobile navigation menu',
    });
    expect(dialog).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Close navigation menu' }),
    ).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(
      screen.getByRole('button', { name: 'Close navigation menu' }),
    );
    expect(
      screen.getByRole('button', { name: 'Open navigation menu' }),
    ).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes on Escape and restores focus to the trigger', async () => {
    renderNavbar();
    const trigger = screen.getByRole('button', {
      name: 'Open navigation menu',
    });
    fireEvent.click(trigger);

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
    expect(trigger).toHaveFocus();
  });

  it('closes on outside click', async () => {
    renderNavbar();
    fireEvent.click(
      screen.getByRole('button', { name: 'Open navigation menu' }),
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.mouseDown(document.body);

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
