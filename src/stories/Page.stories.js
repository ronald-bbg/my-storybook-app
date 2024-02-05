import { within, userEvent, expect } from '@storybook/test';

import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Template = {

};
