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
        borderLeft: normalBorder,
        borderRight: normalBorder,
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

class ActionButton extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.props.onAction) { this.props.onAction(); }
    }

    render() {
        return (
            <button
                className={`${css(Styles.base)} ${css(this.props.active ? Styles.buttonActive : Styles.button)}`}
                onClick={this.handleClick}
            >
                {this.props.text}
            </button>
        );
    }
}

ActionButton.propTypes = {
    text: React.PropTypes.string,
    active: React.PropTypes.bool,
    onAction: React.PropTypes.func,
};

export default ActionButton;
