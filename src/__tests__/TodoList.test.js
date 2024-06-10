import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ title: 'Learn React', completed: false }]),
  })
);

test('renders the TodoList component', async () => {
  await act(async () => {
    render(<TodoList />);
  });

  const inputElement = screen.getByPlaceholderText(/add a new todo/i);
  const buttonElement = screen.getByText(/add todo/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('adds a new todo to the list', async () => {
  await act(async () => {
    render(<TodoList />);
  });

  const inputElement = screen.getByPlaceholderText(/add a new todo/i);
  const buttonElement = screen.getByText(/add todo/i);

  fireEvent.change(inputElement, { target: { value: 'Learn TDD' } });
  fireEvent.click(buttonElement);

  const newTodo = await screen.findByText(/learn tdd/i);
  expect(newTodo).toBeInTheDocument();
});

test('fetches and displays initial todos', async () => {
  await act(async () => {
    render(<TodoList />);
  });

  const fetchedTodo = await screen.findByText(/learn react/i);
  expect(fetchedTodo).toBeInTheDocument();
});