import { render, screen } from '@testing-library/react';
import { Features } from '@/components/sections/Features';

describe('Features', () => {
  it('renders exactly four feature cards', () => {
    render(<Features />);

    const cards = screen.getAllByRole('article');
    expect(cards).toHaveLength(4);
  });

  it('renders the expected card titles as headings', () => {
    render(<Features />);

    const titles = [
      'Boards that move at your speed',
      'Threads, not an inbox',
      'One unified timeline',
      'Works the way you already do',
    ];

    for (const title of titles) {
      expect(
        screen.getByRole('heading', { level: 3, name: title }),
      ).toBeInTheDocument();
    }
  });

  it('renders the section heading and kicker badge', () => {
    render(<Features />);

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Everything your team needs to keep moving.',
      }),
    ).toBeInTheDocument();
    expect(screen.getByText('Calm Orchestration')).toBeInTheDocument();
  });
});
