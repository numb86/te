import React from 'react';
import {shallow} from 'enzyme';
import assert from 'assert';

import TestTargetComponent from '../TestTargetComponent';

describe('TestTargetComponent', () => {
  it('props.type に応じて返すコンポーネントが変わる', () => {
    const textWrapper = shallow(<TestTargetComponent type="text" />);
    assert(textWrapper.find('Text').length === 1);
    const listWrapper = shallow(<TestTargetComponent type="list" />);
    assert(listWrapper.find('Text').length === 0);
    assert(listWrapper.find('List').length === 1);
  });
  it('', () => {});
  it('', () => {});
  it('', () => {});
});
