import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Styles = StyleSheet.create({
    tile: {
        backgroundColor: '#ffffff',
        border: '4px solid #f5f5f5',
        borderRadius: '4px',
        padding: '12px 18px',
    },
});

const Tile = props => (
    <div className={css(Styles.tile)}>
        {props.children}
    </div>
);

Tile.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node,
    ]),
};

export default Tile;
