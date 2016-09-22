import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import TileTitle from './tileTitle';

test.beforeEach('disable style injection', () => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test.afterEach('resume style injection', () => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('contains title text', (t) => {
    const wrapper = shallow(<TileTitle text='titleTxt'/>);
    t.is(wrapper.text(), 'titleTxt');
});
