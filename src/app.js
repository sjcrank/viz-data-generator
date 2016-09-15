import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { observer } from 'mobx-react';

import Header from './header';
import FixedWidthContainer from './fixedWidthContainer';
import ActionButton from './actionButton';
import ConfigTile from './configTile';
import DataTile from './dataTile';
import VizTile from './vizTile';
import ViewStore from './viewStore';
import GenDataAction from './genDataAction';

const Styles = StyleSheet.create({
    actionRowLayout: {
        margin: '24px 0',
        textAlign: 'center',
    },
    configDataRowLayout: {
        marginBottom: '24px',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'stretch',
    },
    dataCellLayout: {
        marginLeft: '24px',
        flexGrow: 1,
        flexShrink: 1,
    },
    dataTileLayout: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    vizRowLayout: {
        marginBottom: '24px',
    },
});

const App = observer(() => (
    <div>
        <Header/>
        <FixedWidthContainer>
            <div className={css(Styles.actionRowLayout)}>
                <ActionButton text='Generate Data' active={ViewStore.configIsDirty} onAction={GenDataAction.exec}/>
            </div>
            <div className={css(Styles.configDataRowLayout)}>
                <ConfigTile/>
                <div className={css(Styles.dataCellLayout)}>
                    <DataTile className={css(Styles.dataTileLayout)}/>
                </div>
            </div>
            <div className={css(Styles.vizRowLayout)}>
                <VizTile/>
            </div>
        </FixedWidthContainer>
    </div>
));


export default App;
