import { render, screen, fireEvent } from '@testing-library/react';
import { Hero } from '@/components/sections/Hero';

const noop = () => {};

describe('Hero', () => {
  it('renders the headline, supporting copy and section landmark', () => {
    const { container } = render(
      <Hero onOpenWorkspace={noop} onOpenVideoTour={noop} />,
    );

    const section = container.querySelector('#hero');
    expect(section).toHaveAttribute('aria-labelledby', 'hero-headline');
    expect(
      screen.getByRole('heading', { level: 1, name: /run your team/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/without the tab switching/i)).toBeInTheDocument();
    expect(screen.getByText(/One workspace. Zero context switching/i));
    expect(screen.getByText(/calm workspace/i)).toBeInTheDocument();
  });

  it('renders both CTAs and fires their handlers on click', () => {
    const onOpenWorkspace = jest.fn();
    const onOpenVideoTour = jest.fn();

    render(
      <Hero
        onOpenWorkspace={onOpenWorkspace}
        onOpenVideoTour={onOpenVideoTour}
      />,
    );

    const startFree = screen.getByRole('button', { name: /start free/i });
    expect(startFree).toBeInTheDocument();
    fireEvent.click(startFree);
    expect(onOpenWorkspace).toHaveBeenCalledTimes(1);

    const seeHow = screen.getByRole('button', { name: /see how it works/i });
    expect(seeHow).toBeInTheDocument();
    fireEvent.click(seeHow);
    expect(onOpenVideoTour).toHaveBeenCalledTimes(1);
  });

  it('marks the kanban board graphic as decorative and hidden from the a11y tree', () => {
    const { container } = render(
      <Hero onOpenWorkspace={noop} onOpenVideoTour={noop} />,
    );

    const graphic = container.querySelector('svg[viewBox="0 0 680 470"]');
    expect(graphic).toHaveAttribute('aria-hidden', 'true');
    expect(graphic).toHaveAttribute('focusable', 'false');
  });
});
