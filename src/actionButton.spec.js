import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import ActionButton from './actionButton';

test.beforeEach('disable style injection', () => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test.afterEach('resume style injection', () => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('contains button text', (t) => {
    const wrapper = shallow(<ActionButton text='btnName'/>);
    t.is(wrapper.find('button').at(0).text(), 'btnName');
});
