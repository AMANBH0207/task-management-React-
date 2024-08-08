import { render, screen } from '@testing-library/react';
import App from './App';
import ActionButtons from './components/ActionButtons';


test('renders learn react link', () => {
  render(<ActionButtons />);
  const linkElement = screen.getByText();
  expect(linkElement).toBeInTheDocument();
});
