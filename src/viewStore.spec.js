import test from 'ava';
import { autorun } from 'mobx';
import ViewStore from './viewStore';

test('observable props', (t) => {
    ['configIsDirty', 'selectedConfigTab'].forEach((prop) => {
        let value = false;
        ViewStore[prop] = false;
        const disposer = autorun(() => {
            value = ViewStore[prop];
        });
        ViewStore[prop] = true;
        disposer();
        t.is(value, true);
    });
});
