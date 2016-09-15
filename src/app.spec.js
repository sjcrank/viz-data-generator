import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './app';
import Header from './header';
import ActionButton from './actionButton';
import ConfigTile from './configTile';
import DataTile from './dataTile';
import VizTile from './vizTile';

test.beforeEach('disable style injection', () => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test.afterEach('resume style injection', () => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('contains key children', (t) => {
    const wrapper = shallow(<App/>);
    t.true(wrapper.contains(<Header/>));
    t.true(wrapper.find(ActionButton).length === 1);
    t.true(wrapper.find(ConfigTile).length === 1);
    t.true(wrapper.find(DataTile).length === 1);
    t.true(wrapper.find(VizTile).length === 1);
});

