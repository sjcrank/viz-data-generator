import React from 'react';
import classNames from 'classnames';
import { StyleSheet, css } from 'aphrodite/no-important';
import StyleGuide from '../util/styleGuide';

const Styles = StyleSheet.create({
    container: {
        display: 'inline-block',
    },
    label: {
        display: 'inline-block',
        boxShadow: 'inset 0 1px 0 0 #e0e6ed,inset 0 -1px 0 0 #e0e6ed,inset 1px 0 0 #e0e6ed',
        borderRadius: '4px 0 0 4px',
        padding: '0 18px',
        lineHeight: '40px',
        fontSize: StyleGuide.fontSize2,
        height: '40px',
        color: '#8492a6',
        backgroundColor: '#f9fafc',
        textAlign: 'center',
        fontWeight: StyleGuide.weight4,
        verticalAlign: 'middle',
        margin: '0',
    },
    textInput: {
        padding: '0 12px',
        fontSize: StyleGuide.fontSize2,
        color: '#3c4858',
        boxShadow: 'inset 0 0 0 1px #e0e6ed',
        borderWidth: 0,
        backgroundColor: '#ffffff',
        outlineStyle: 'none',
        transitionProperty: 'all',
        transitionTimingFunction: 'ease-in-out',
        transitionDuration: '80ms',
        fontWeight: StyleGuide.weight4,
        verticalAlign: 'middle',
        height: '40px',
        lineHeight: '1',
        margin: '0',
        ':hover': {
            boxShadow: 'inset 0 0 0 1px #bacddb',
        },
        ':focus': {
            boxShadow: `inset 0 0 0 1px ${StyleGuide.colorBlue}`,
        },
    },
    textInputWithoutLabel: {
        borderRadius: '3px',
    },
    textInputWithLabel: {
        borderRadius: '0 3px 3px 0',
    },
    textInputNumeric: {
        textAlign: 'right',
    },
    textInputXSmall: {
        width: '58px',
    },
    textInputSmall: {
        width: '74px',
    },
});

class TextInput extends React.Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        if(this.props.onChange) { this.props.onChange(event.target.name, event.target.value); }
    }

    render() {
        const cn = classNames(
            { [css(Styles.textInput)]: true },
            { [css(Styles.textInputWithLabel)]: this.props.label },
            { [css(Styles.textInputWithoutLabel)]: !this.props.label },
            { [css(Styles.textInputNumeric)]: this.props.numeric },
            { [css(Styles.textInputSmall)]: this.props.size === 'small' },
            { [css(Styles.textInputXSmall)]: this.props.size === 'xsmall' },
        );
        return (
            <div className={classNames(css(Styles.container), this.props.className)}>
                {this.props.label && <div className={css(Styles.label)}>{this.props.label}</div>}
                <input className={cn} type='text' name={this.props.name} value={this.props.value} onChange={this.onChange}/>
            </div>
        );
    }
}

TextInput.propTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.node.isRequired,
    onChange: React.PropTypes.func,
    className: React.PropTypes.string,
    label: React.PropTypes.string,
    numeric: React.PropTypes.bool,
    size: React.PropTypes.oneOf(['small', 'xsmall']),
};

export default TextInput;
