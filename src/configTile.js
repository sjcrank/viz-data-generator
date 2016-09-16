import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import Tile from './tile';
import TileTitle from './tileTitle';
import AppStore from './appStore';

@observer
class ConfigTile extends React.Component {
    constructor() {
        super();
        this.updateStore = this.updateStore.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.updateStore(event.target.name, event.target.value);
    }

    @action updateStore(key, value) {
        AppStore.configSpec[key] = value;
    }

    render() {
        return (
            <Tile className={this.props.className}>
                <TileTitle text='Configuration'/>
                <form>
                    <input type='text' name='xDataPts' value={AppStore.configSpec.xDataPts} onChange={this.onChange}/>
                </form>
                <p>{AppStore.configSpec.validationMsg}</p>
            </Tile>
        );
    }
}

ConfigTile.propTypes = {
    className: React.PropTypes.string,
};

export default ConfigTile;
