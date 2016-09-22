import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import StyleGuide from '../util/styleGuide';

const Styles = StyleSheet.create({
    title: {
        color: StyleGuide.colorGreen,
        fontSize: '18px',
    },
});

const TileTitle = props => (
    <span className={css(Styles.title)}>{props.text}</span>
);

TileTitle.propTypes = {
    text: React.PropTypes.string,
};

export default TileTitle;
