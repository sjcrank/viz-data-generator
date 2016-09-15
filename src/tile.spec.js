import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import Tile from './tile';

test.beforeEach('disable style injection', () => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test.afterEach('resume style injection', () => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders children when passed in', (t) => {
    const wrapper = shallow(
        <Tile>
            <div className='unique1'/>
            <div className='unique2'/>
        </Tile>
    );
    t.true(wrapper.contains(<div className='unique1'/>));
    t.true(wrapper.contains(<div className='unique2'/>));
});

test('uses passed in class', (t) => {
    const wrapper = shallow(<Tile className='testClass'/>);
    t.true(wrapper.find('div').hasClass('testClass'));
});
