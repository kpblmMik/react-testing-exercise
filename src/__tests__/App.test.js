import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders the Todo App header', () => {
  render(<App />);
  const headerElement = screen.getByText(/todo app/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders the TodoList component', () => {
  render(<App />);
  const todoListElement = screen.getByRole('list');
  expect(todoListElement).toBeInTheDocument();
});