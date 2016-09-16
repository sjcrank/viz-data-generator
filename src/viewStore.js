import { observable } from 'mobx';

const ViewStore = {
    @observable configIsDirty: true,
    @observable selectedConfigTab: 'x',
    // generate in progress
    // selected viz
};

export default ViewStore;
