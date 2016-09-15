import { action } from 'mobx';
import ViewStore from './viewStore';

const GenDataAction = {
    @action exec() {
        ViewStore.configIsDirty = false;
    },
};

export default GenDataAction;
