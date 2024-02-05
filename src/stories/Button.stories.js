import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const DiffusionOfExcellence = {
  args: {
    primary: true,
    label: 'Read the Diffusion Playbook',
    backgroundColor: '#3f57a6',
    fontFamily: 'Source Sans Pro Web',
    fontSize: '1rem',
    ariaLabel: 'Read the Diffusion Playbook',
    role: 'button'
  }
};

export const Fellowships = {
  args: {
    primary: true,
    label: 'Learn More',
    backgroundColor: '#93348c',
    fontFamily: 'Source Sans Pro Web',
    fontSize: '1rem',
    ariaLabel: 'Learn More',
    role: 'button'
  }
};


