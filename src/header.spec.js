import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './header';

test.beforeEach('disable style injection', () => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test.afterEach('resume style injection', () => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('contains a link to source', (t) => {
    const wrapper = shallow(<Header/>);
    t.is(wrapper.find('a').at(0).props().href, 'https://github.com/sjcrank/viz-data-generator');
});

