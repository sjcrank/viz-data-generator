import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './app';
import Header from './component/header';
import ActionButton from './component/actionButton';
import ConfigTile from './configTile';
import DataTile from './dataTile';
import VizTile from './vizTile';
import ViewStore from './store/viewStore';

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

test('button is active if config is dirty', (t) => {
    ViewStore.configIsDirty = true;
    const wrapper = shallow(<App/>);
    t.is(wrapper.find(ActionButton).prop('active'), true);
});

test('button is inactive if config is clean', (t) => {
    ViewStore.configIsDirty = false;
    const wrapper = shallow(<App/>);
    t.is(wrapper.find(ActionButton).prop('active'), false);
});
