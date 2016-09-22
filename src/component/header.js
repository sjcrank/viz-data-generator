import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import StyleGuide from '../util/styleGuide';

import FixedWidthContainer from './fixedWidthContainer';

const Styles = StyleSheet.create({
    header: {
        backgroundColor: StyleGuide.colorBlue,
    },
    headerContent: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'baseline',
        padding: '9px 12px',
    },
    title: {
        flex: 1,
        color: '#ffffff',
        fontSize: StyleGuide.fontSize2,
        letterSpacing: '1px',
    },
    link: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: StyleGuide.fontSize3,
        fontWeight: StyleGuide.weight4,
        letterSpacing: '1px',
        textDecoration: 'none',
        ':hover': {
            textDecoration: 'underline',
            color: 'rgba(255,255,255,0.8)',
        },
    },
});

const Header = () => (
    <div className={css(Styles.header)}>
        <FixedWidthContainer className={css(Styles.headerContent)}>
            <span className={css(Styles.title)}>Viz Data Generator</span>
            <a className={css(Styles.link)} href='https://github.com/sjcrank/viz-data-generator'>source code</a>
        </FixedWidthContainer>
    </div>
);

export default Header;
