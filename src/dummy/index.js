import { strings, colors } from '../constants';

const dummyStory = {
  title: 'Discover AR',
  createdAt: 'December 6th, 2020',
  body: strings.discoverARReadme,
  tags: [
    { name: 'Diary', backgroundColor: colors.primary },
    { name: 'Coding', backgroundColor: '#6554C0' },
    { name: 'Test', backgroundColor: colors.primary },
  ],
};

export {
  dummyStory,
};
