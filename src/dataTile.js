import React from 'react';
import classNames from 'classnames';
import { StyleSheet, css } from 'aphrodite/no-important';
import { observer } from 'mobx-react';
import StyleGuide from './util/styleGuide';
import Tile from './component/tile';
import TileTitle from './component/tileTitle';
import AppStore from './store/appStore';

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
        top: '18px',
        left: 0,
        bottom: 0,
        right: 0,
        overflow: 'auto',
    },
    dataLine: {
        whiteSpace: 'nowrap',
        fontFamily: 'monospace',
        fontSize: StyleGuide.fontSize5,
        color: '#808080',
    },
});

const DataTile = observer((props) => {
    const rows = AppStore.generatedData.map((row, i) => <div key={i} className={css(Styles.dataLine)}>&nbsp;&nbsp;{`[ ${row.join(' ')} ]`}</div>);
    return (
        <Tile className={classNames(css(Styles.tileLayout), props.className)}>
            <TileTitle text='Generated Data'/>
            <div className={css(Styles.dataCellLayout)}>
                <div className={css(Styles.dataContentLayout)}>
                    <div className={css(Styles.dataLine)}>[</div>
                    {rows}
                    <div className={css(Styles.dataLine)}>]</div>
                </div>
            </div>
        </Tile>
    );
});

DataTile.propTypes = {
    className: React.PropTypes.string,
};

export default DataTile;
