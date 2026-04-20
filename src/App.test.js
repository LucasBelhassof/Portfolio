import { render, screen } from '@testing-library/react';
import Button from './components/ui/Button';

test('renders a link button when href is provided', () => {
  render(<Button href="mailto:lucasbelhassof@gmail.com">Email me</Button>);

  expect(screen.getByRole('link', { name: /email me/i })).toHaveAttribute(
    'href',
    'mailto:lucasbelhassof@gmail.com',
  );
});
