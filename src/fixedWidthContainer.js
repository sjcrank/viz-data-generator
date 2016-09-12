import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Styles = StyleSheet.create({
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
    },
});

const FixedWidthContainer = props => (
    <div className={css(Styles.container)}>
        {props.children}
    </div>
);

FixedWidthContainer.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node,
    ]),
};

export default FixedWidthContainer;
