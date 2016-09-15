import test from 'ava';
import ViewStore from './viewStore';
import GenDataAction from './genDataAction';

test.beforeEach('init view store', () => {
    ViewStore.configIsDirty = true;
});

test('updates view store', (t) => {
    GenDataAction.exec();
    t.is(ViewStore.configIsDirty, false);
});
