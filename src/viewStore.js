import { observable } from 'mobx';

const ViewStore = {
    @observable configIsDirty: true,
    @observable selectedConfigTab: 'x',
};

export default ViewStore;
