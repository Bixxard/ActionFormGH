import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './button';
configure({ adapter: new Adapter() });

  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<Button innerText="my text"/>)
      expect(wrap.find('button').text()).toBe('my text');
    })

    it('should render with label', function () {
      const component = shallow(<Button labelText="test" innerText="my text"/>)
      expect(component).toMatchSnapshot();
    })

    it('should return value on click', () => {
      const component = mount(<Button id="nashe id" innerText="my text"/>)
      const button = component.find('button');
      expect(component.state().value).toEqual('');
      button.simulate('click');
      expect(component.state().value).toEqual('nashe id');
    });
  })