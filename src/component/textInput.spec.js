import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import TextInput from './textInput';

test.beforeEach('disable style injection', () => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test.afterEach('resume style injection', () => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('has name and value', (t) => {
    const wrapper = shallow(<TextInput name='inputName' value='abc'/>);
    t.is(wrapper.find('input').at(0).prop('name'), 'inputName');
    t.is(wrapper.find('input').at(0).prop('value'), 'abc');
});

test('handles change', (t) => {
    let changeReceived = false;
    const wrapper = shallow(<TextInput name='inputName' value='abc' onChange={() => { changeReceived = true; }}/>);
    wrapper.find('input').simulate('change', { target: { name: 'inputName', value: '123' } });
    t.true(changeReceived);
});

test('uses passed in class', (t) => {
    const wrapper = shallow(<TextInput name='inputName' value='abc' className='testClass'/>);
    t.true(wrapper.hasClass('testClass'));
});

