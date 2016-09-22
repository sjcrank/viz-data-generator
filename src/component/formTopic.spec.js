import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import FormTopic from './formTopic';

test.beforeEach('disable style injection', () => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test.afterEach('resume style injection', () => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('contains text', (t) => {
    const wrapper = shallow(<FormTopic text='topicText'/>);
    t.is(wrapper.find('p').at(0).text(), 'topicText');
});
