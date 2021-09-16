import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from './store/createStore';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={createStore}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
