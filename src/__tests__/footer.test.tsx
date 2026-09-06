import { act, fireEvent, render, screen } from '@testing-library/react';
import { Footer } from '@/components/sections/Footer';

const EMAIL_LABEL = 'Email address';

describe('Footer newsletter form', () => {
  const fetchMock = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
    global.fetch = fetchMock as unknown as typeof fetch;
  });

  afterEach(() => {
    jest.useRealTimers();
    fetchMock.mockReset();
  });

  it('shows success for a valid email without calling the API', async () => {
    render(<Footer />);

    fireEvent.change(screen.getByLabelText(EMAIL_LABEL), {
      target: { value: 'agent@example.com' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }));

    await act(async () => {
      jest.runOnlyPendingTimers();
    });
    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.getByText('Successfully subscribed!')).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('shows a validation error without calling the API', async () => {
    render(<Footer />);

    fireEvent.change(screen.getByLabelText(EMAIL_LABEL), {
      target: { value: 'not-an-email' },
    });
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }));
    });

    expect(
      screen.getByText(/Enter your valid email address/),
    ).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
