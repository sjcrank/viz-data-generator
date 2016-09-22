import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import FixedWidthContainer from './fixedWidthContainer';

test.beforeEach('disable style injection', () => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test.afterEach('resume style injection', () => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders children when passed in', (t) => {
    const wrapper = shallow(
        <FixedWidthContainer>
            <div className='unique1'/>
            <div className='unique2'/>
        </FixedWidthContainer>
    );
    t.true(wrapper.contains(<div className='unique1'/>));
    t.true(wrapper.contains(<div className='unique2'/>));
});

