import test from 'ava';
import ViewStore from '../store/viewStore';
import GenDataAction from '../action/genDataAction';

test.beforeEach('init view store', () => {
    ViewStore.configIsDirty = true;
});

test('updates view store', (t) => {
    GenDataAction.exec();
    t.is(ViewStore.configIsDirty, false);
});
