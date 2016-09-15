import React from 'react';
import classNames from 'classnames';
import { StyleSheet, css } from 'aphrodite/no-important';
import Tile from './tile';
import TileTitle from './tileTitle';

const Styles = StyleSheet.create({
    tileLayout: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
    },
    dataCellLayout: {
        flexGrow: 1,
        flexShrink: 1,
    },
    dataContentLayout: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: 'auto',
    },
});

const tiledata = [];
for(let i = 0; i < 50; i += 1) {
    tiledata.push(<li key={i}>row {i}</li>);
}

const DataTile = props => (
    <Tile className={classNames(css(Styles.tileLayout), props.className)}>
        <TileTitle text='Generated Data'/>
        <div className={css(Styles.dataCellLayout)}>
            <ul className={css(Styles.dataContentLayout)}>{tiledata}</ul>
        </div>
    </Tile>
);

DataTile.propTypes = {
    className: React.PropTypes.string,
};

export default DataTile;
