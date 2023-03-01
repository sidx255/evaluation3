import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../index';

test('renders app', () => {
  render(<Footer />);
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});