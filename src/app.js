import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import Header from './header';
import FixedWidthContainer from './fixedWidthContainer';
import ActionButton from './actionButton';
import Tile from './tile';
import TileTitle from './tileTitle';

const Styles = StyleSheet.create({
    actionBar: {
        padding: '24px 0',
        textAlign: 'center',
    },
});

const tiledata = [];
for(let i = 0; i < 50; i += 1) {
    tiledata.push(<p key={i}>row {i}</p>);
}

const App = () => (
    <div>
        <Header/>
        <FixedWidthContainer>
            <div className={css(Styles.actionBar)}>
                <ActionButton text='Generate Data' active/>
            </div>
            <Tile><TileTitle text='Configuration'/><p>this is the text inside the first tile which has a form for configuration</p></Tile>
            <Tile><TileTitle text='Generated Data'/>{tiledata}</Tile>
            <Tile><TileTitle text='Data Visualized'/></Tile>
        </FixedWidthContainer>
    </div>
);

export default App;
