import React from 'react';
import { render } from '@testing-library/react';
import { BasicUniheartRichFooter } from './uniheart-rich-footer.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicUniheartRichFooter />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
