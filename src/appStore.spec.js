import test from 'ava';
import { autorun } from 'mobx';
import AppStore from './appStore';

function validateNumericVar(varProp, dataShapeProp, dataShape, t) {
    AppStore.configSpec[dataShapeProp] = dataShape;
    [-12.1, -1, 0, 1, 22.3, 99312].forEach((value) => {
        AppStore.configSpec[varProp] = value;
        t.true(AppStore.configSpec.isValid);
        t.true(AppStore.configSpec.validationMsg.length === 0);
    });
    [NaN, 'abc', null, false].forEach((value) => {
        AppStore.configSpec[varProp] = value;
        t.true(!AppStore.configSpec.isValid);
        t.true(AppStore.configSpec.validationMsg.length > 0);
    });
    AppStore.configSpec[dataShapeProp] = 'other';
    [NaN, 'abc', null, false].forEach((value) => {
        AppStore.configSpec[varProp] = value;
        t.true(AppStore.configSpec.isValid);
        t.true(AppStore.configSpec.validationMsg.length === 0);
    });
}

test.beforeEach('init app store', () => {
    AppStore.configSpec.xDataPts = 100;
    AppStore.configSpec.xDataShape = 'linear';
    AppStore.configSpec.xLinearVar1 = 1;
    AppStore.configSpec.xLinearVar2 = 0;
    AppStore.configSpec.xTrigType = 'sin';
    AppStore.configSpec.xTrigVar1 = 1;
    AppStore.configSpec.xTrigVar2 = 1;
    AppStore.configSpec.xTrigVar3 = 0;
    AppStore.configSpec.yDataPts = 1;
    AppStore.configSpec.yDataShape = 'linear';
    AppStore.configSpec.yLinearVar1 = 1;
    AppStore.configSpec.yLinearVar2 = 0;
    AppStore.configSpec.yTrigType = 'sin';
    AppStore.configSpec.yTrigVar1 = 1;
    AppStore.configSpec.yTrigVar2 = 1;
    AppStore.configSpec.yTrigVar3 = 0;
});

test('observable props', (t) => {
    ['xDataPts', 'xDataShape', 'xLinearVar1', 'xLinearVar2', 'xTrigType', 'xTrigVar1', 'xTrigVar2', 'xTrigVar3', 'yDataPts', 'yDataShape', 'yLinearVar1', 'yLinearVar2', 'yTrigType', 'yTrigVar1', 'yTrigVar2', 'yTrigVar3'].forEach((prop) => {
        let value = false;
        AppStore.configSpec[prop] = false;
        const disposer = autorun(() => {
            value = AppStore.configSpec[prop];
        });
        AppStore.configSpec[prop] = true;
        disposer();
        t.is(value, true);
    });
});

test('xDataPts validation', (t) => {
    [1, 9999].forEach((value) => {
        AppStore.configSpec.xDataPts = value;
        t.true(AppStore.configSpec.isValid);
        t.true(AppStore.configSpec.validationMsg.length === 0);
    });
    [0, 10000, -1, 1.1, NaN, 'abc', null].forEach((value) => {
        AppStore.configSpec.xDataPts = value;
        t.true(!AppStore.configSpec.isValid);
        t.true(AppStore.configSpec.validationMsg.length > 0);
    });
});

test('yDataPts validation', (t) => {
    [1, 9999].forEach((value) => {
        AppStore.configSpec.yDataPts = value;
        t.true(AppStore.configSpec.isValid);
        t.true(AppStore.configSpec.validationMsg.length === 0);
    });
    [0, 10000, -1, 1.1, NaN, 'abc', null].forEach((value) => {
        AppStore.configSpec.yDataPts = value;
        t.true(!AppStore.configSpec.isValid);
        t.true(AppStore.configSpec.validationMsg.length > 0);
    });
});

test('xLinearVar1 validation', validateNumericVar.bind(this, 'xLinearVar1', 'xDataShape', 'linear'));
test('xLinearVar2 validation', validateNumericVar.bind(this, 'xLinearVar2', 'xDataShape', 'linear'));
test('xTrigVar1 validation', validateNumericVar.bind(this, 'xTrigVar1', 'xDataShape', 'trigonometric'));
test('xTrigVar2 validation', validateNumericVar.bind(this, 'xTrigVar2', 'xDataShape', 'trigonometric'));
test('xTrigVar3 validation', validateNumericVar.bind(this, 'xTrigVar3', 'xDataShape', 'trigonometric'));
test('yLinearVar1 validation', validateNumericVar.bind(this, 'yLinearVar1', 'yDataShape', 'linear'));
test('yLinearVar2 validation', validateNumericVar.bind(this, 'yLinearVar2', 'yDataShape', 'linear'));
test('yTrigVar1 validation', validateNumericVar.bind(this, 'yTrigVar1', 'yDataShape', 'trigonometric'));
test('yTrigVar2 validation', validateNumericVar.bind(this, 'yTrigVar2', 'yDataShape', 'trigonometric'));
test('yTrigVar3 validation', validateNumericVar.bind(this, 'yTrigVar3', 'yDataShape', 'trigonometric'));
