import React from 'react';
import { shallow } from 'enzyme';
import { BackNavButton } from '../BackNav';

describe('<BackNav/>', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<BackNavButton/>);
  });

  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
