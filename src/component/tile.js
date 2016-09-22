import React from 'react';
import classNames from 'classnames';
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
    <div className={classNames(css(Styles.tile), props.className)}>
        {props.children}
    </div>
);

Tile.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node,
    ]),
    className: React.PropTypes.string,
};

export default Tile;
