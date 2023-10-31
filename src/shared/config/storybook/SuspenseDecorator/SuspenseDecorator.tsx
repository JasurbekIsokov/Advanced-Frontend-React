import { Story } from '@storybook/react';
import { Loading } from 'entities/Article/ui/ArticleDetails/ArticleDetails.stories';
import { Suspense } from 'react';

export const SuspenseDecorator = (StoryComponent: Story) => (
    <Suspense fallback={<Loading id="" />}>
        <StoryComponent />
    </Suspense>
);
