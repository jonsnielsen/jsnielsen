// Button.stories.ts | Button.stories.tsx

import React, { ReactNode } from 'react';

import { Meta } from '@storybook/react';

import { WorkItem } from './WorkItem';
import jonasImage from '../../.storybook/assets/jonaselsgaard-storybook.png';

export default {
  component: WorkItem,
  title: 'Components/WorkItem',
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <WorkItemWrapper>
    <WorkItem
      itemNumber="01/"
      description="Frontend developer on the amazing digital team at SOUNDBOKS.  Main responsibilities included working on the webshop and on the  mobile app."
      title="Soundboks"
      image={{
        alt: 'some alt',
        src: jonasImage,
      }}
    />
  </WorkItemWrapper>
);

function WorkItemWrapper({ children }: { children: ReactNode }) {
  return (
    <div style={{ border: '2px solid black', width: '100%' }}>{children}</div>
  );
}
