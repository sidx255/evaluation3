import React from 'react';
import { render } from '@testing-library/react';
import Header from '../index';

test('renders Header', () => {
  render(<Header />);
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});