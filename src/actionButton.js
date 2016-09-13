import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import StyleGuide from './styleGuide';

const normalBorder = `2px solid ${StyleGuide.colorGreen}`;
const darkBorder = '2px solid #01bd4f';

const Styles = StyleSheet.create({
    base: {
        padding: '12px 18px',
        fontSize: '16px',
        borderRadius: '4px',
        cursor: 'pointer',
        ':focus': {
            outline: 'none',
        },
    },
    button: {
        color: StyleGuide.colorGreen,
        border: normalBorder,
        backgroundColor: '#ffffff',
        fontWeight: StyleGuide.weight3,
        ':hover': {
            color: '#ffffff',
            backgroundColor: StyleGuide.colorGreen,
            borderLeft: normalBorder,
            borderRight: normalBorder,
            borderTop: normalBorder,
            borderBottom: darkBorder,
            fontWeight: StyleGuide.weight4,
        },
        ':active': {
            color: '#ffffff',
            backgroundColor: StyleGuide.colorGreen,
            borderLeft: normalBorder,
            borderRight: normalBorder,
            borderTop: darkBorder,
            borderBottom: normalBorder,
            fontWeight: StyleGuide.weight4,
        },
    },
    buttonActive: {
        color: '#ffffff',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottom: normalBorder,
        borderTop: normalBorder,
        backgroundColor: StyleGuide.colorGreen,
        fontWeight: StyleGuide.weight4,
        ':hover': {
            borderBottom: darkBorder,
        },
        ':active': {
            borderTop: darkBorder,
            borderBottom: normalBorder,
        },
    },
});

const ActionButton = props => (
    <button className={`${css(Styles.base)} ${css(props.active ? Styles.buttonActive : Styles.button)}`}>{props.text}</button>
);

ActionButton.propTypes = {
    text: React.PropTypes.string,
    active: React.PropTypes.bool,
};

export default ActionButton;
