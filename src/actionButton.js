import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import StyleGuide from './styleGuide';

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
        color: '#ffffff',
        backgroundColor: '#a0a0a0',
        borderLeft: '2px solid #a0a0a0',
        borderRight: '2px solid #a0a0a0',
        borderTop: '2px solid #a0a0a0',
        borderBottom: '2px solid #a0a0a0',
        fontWeight: StyleGuide.weight4,
        ':hover': {
            color: '#ffffff',
            borderTop: '2px solid #a0a0a0',
            borderBottom: '2px solid #808080',
        },
        ':active': {
            color: '#ffffff',
            borderTop: '2px solid #808080',
            borderBottom: '2px solid #a0a0a0',
        },
    },
    buttonActive: {
        color: '#ffffff',
        borderLeft: `2px solid ${StyleGuide.colorGreen}`,
        borderRight: `2px solid ${StyleGuide.colorGreen}`,
        borderBottom: `2px solid ${StyleGuide.colorGreen}`,
        borderTop: `2px solid ${StyleGuide.colorGreen}`,
        backgroundColor: StyleGuide.colorGreen,
        fontWeight: StyleGuide.weight4,
        ':hover': {
            borderBottom: '2px solid #01bd4f',
        },
        ':active': {
            borderTop: '2px solid #01bd4f',
            borderBottom: `2px solid ${StyleGuide.colorGreen}`,
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
