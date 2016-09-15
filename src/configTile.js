import React from 'react';
import Tile from './tile';
import TileTitle from './tileTitle';

const ConfigTile = props => (
    <Tile className={props.className}>
        <TileTitle text='Configuration'/><p>this is the text inside the first tile which has a form for configuration</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
    </Tile>
);

ConfigTile.propTypes = {
    className: React.PropTypes.string,
};

export default ConfigTile;
