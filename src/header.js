import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import StyleGuide from './styleGuide';

import FixedWidthContainer from './fixedWidthContainer';

export default class Header extends React.Component {
    render() {
        return (
            <div className={css(styles.header)}>
                <FixedWidthContainer>
                    <div className={css(styles.headerContent)}>
                        <span className={css(styles.title)}>Viz Data Generator</span>
                        <a className={css(styles.link)} href='https://github.com/sjcrank/viz-data-generator'>source code</a>
                    </div>
                </FixedWidthContainer>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: StyleGuide.colorBlue,
    },
    headerContent: {
        padding: '9px 12px',
    },
    title: {
        color: '#ffffff',
        fontSize: StyleGuide.fontSize2,
        lineHeight: StyleGuide.lineHeight2,
        letterSpacing: '1px',
    },
    link: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: StyleGuide.fontSize3,
        lineHeight: StyleGuide.lineHeight2,
        fontWeight: StyleGuide.weight4,
        letterSpacing: '1px',
        float: 'right',
        textDecoration: 'none',
        ':hover': {
            textDecoration: 'underline',
            color: 'rgba(255,255,255,0.8)',
        }
    },
});