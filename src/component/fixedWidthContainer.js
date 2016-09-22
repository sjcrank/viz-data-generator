import React from 'react';
import classNames from 'classnames';
import { StyleSheet, css } from 'aphrodite/no-important';

const Styles = StyleSheet.create({
    container: {
        maxWidth: '1100px',
        minWidth: '900px',
        margin: '0 auto',
    },
});

const FixedWidthContainer = props => (
    <div className={classNames(css(Styles.container), props.className)}>
        {props.children}
    </div>
);

FixedWidthContainer.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node,
    ]),
    className: React.PropTypes.string,
};

export default FixedWidthContainer;
