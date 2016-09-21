import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import Tile from './tile';
import TileTitle from './tileTitle';
import AppStore from './appStore';
import ViewStore from './viewStore';
import FormTopic from './formTopic';
import TextInput from './textInput';

@observer
class ConfigTile extends React.Component {
    constructor() {
        super();
        this.updateStore = this.updateStore.bind(this);
    }

    @action updateStore(key, value) {
        ViewStore.configIsDirty = true;
        AppStore.configSpec[key] = value;
    }

    render() {
        return (
            <Tile className={this.props.className}>
                <TileTitle text='Configuration'/>
                <FormTopic text='amount of data'/>
                <div>
                    <TextInput label='x' numeric size='small' name='xDataPts' value={AppStore.configSpec.xDataPts} onChange={this.updateStore}/>
                    <span>x</span>
                    <TextInput label='y' numeric size='small' name='yDataPts' value={AppStore.configSpec.yDataPts} onChange={this.updateStore}/>
                    <span>data points</span>
                </div>
                <FormTopic text='shape of data'/>
                <FormTopic text='data formula'/>
                <div>
                    <span>f(k) = </span>
                    <TextInput name='xLinearVar1' numeric size='xsmall' value={AppStore.configSpec.xLinearVar1} onChange={this.updateStore}/>
                    <span>k + </span>
                    <TextInput name='xLinearVar2' numeric size='xsmall' value={AppStore.configSpec.xLinearVar2} onChange={this.updateStore}/>
                </div>
                <FormTopic text='random noise'/>
                <p>{AppStore.configSpec.validationMsg}</p>
            </Tile>
        );
    }
}

ConfigTile.propTypes = {
    className: React.PropTypes.string,
};

export default ConfigTile;
