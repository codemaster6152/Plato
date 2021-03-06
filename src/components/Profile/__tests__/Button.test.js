import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from '../Button';

describe('Profile <Button/>', () => {
  it('Compare snapshots', () => {
    const Component = renderer.create(<Button />);

    const Tree = Component.toJSON();
    expect(Tree).toMatchSnapshot();
  });

  it('Renders without crashing', () => {
    mount(<Button />);
  });
});
