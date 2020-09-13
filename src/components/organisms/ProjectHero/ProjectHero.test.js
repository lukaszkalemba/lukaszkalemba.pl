import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import ProjectHero from './ProjectHero';

const fakeProps = {
  title: 'Fake project hero title',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  image: {
    aspectRatio: 0,
    sizes: '',
    src: '',
    srcSet: '',
  },
};

describe('<ProjectHero />', () => {
  it('renders correctly with proper content values', () => {
    const { getByRole, getByText } = render(<ProjectHero {...fakeProps} />);

    const contentHeading = getByRole('heading');
    const contentDescription = getByText(fakeProps.description);

    expect(contentHeading).toHaveTextContent(fakeProps.title);
    expect(contentDescription).toBeInTheDocument();
  });
});
