import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import StyleGuide from './styleGuide';

export default function(props) {
    return (
        <div className={css(styles.container)}>
            {props.children}
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
    },
});