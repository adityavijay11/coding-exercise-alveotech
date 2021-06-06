import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders server logs', () => {
  render(<App />);
  const linkElement = screen.getByText(/Server Logs/i);
  expect(linkElement).toBeInTheDocument();
});
