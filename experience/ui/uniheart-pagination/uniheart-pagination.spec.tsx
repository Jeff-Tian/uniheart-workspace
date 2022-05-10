import React from 'react';
import { render } from '@testing-library/react';
import { BasicUniheartPagination } from './uniheart-pagination.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicUniheartPagination />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
