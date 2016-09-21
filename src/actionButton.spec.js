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

test('applies active style', (t) => {
    const wrapper = shallow(<ActionButton active text='btnName'/>);
    t.is(wrapper.find('button').at(0).text(), 'btnName');
    t.true(wrapper.find('button').at(0).prop('className').indexOf('buttonActive_') >= 0);
});

test('handles click', (t) => {
    let actionReceived = false;
    const wrapper = shallow(<ActionButton text='btnName' onAction={() => { actionReceived = true; }}/>);
    wrapper.find('button').simulate('click');
    t.true(actionReceived);
});
