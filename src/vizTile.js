import React from 'react';
import Tile from './component/tile';
import TileTitle from './component/tileTitle';

const VizTile = props => (
    <Tile className={props.className}>
        <TileTitle text='Data Visualized'/>
    </Tile>
);

VizTile.propTypes = {
    className: React.PropTypes.string,
};

export default VizTile;
