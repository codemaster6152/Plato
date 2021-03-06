import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import BriefCardComponent from '../BriefCard';

describe('Profile <BriefCard/>', () => {
  it('Compare snapshots', () => {
    const Component = renderer.create(<BriefCardComponent />);

    const Tree = Component.toJSON();
    expect(Tree).toMatchSnapshot();
  });

  it('Renders without crashing', () => {
    mount(<BriefCardComponent />);
  });
});
