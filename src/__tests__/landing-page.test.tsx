import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('Novi landing page', () => {
  it('renders the hero headline', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Run your team without the tab switching/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the primary call to action', () => {
    render(<Page />);
    expect(screen.getAllByText('Start free').length).toBeGreaterThan(0);
  });
});
