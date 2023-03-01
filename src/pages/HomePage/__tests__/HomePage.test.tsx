import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../index';

describe('<HomePage />', () => {
  it('handles search', () => {
    const { getByTestId } = render(<HomePage />);
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
});

// 