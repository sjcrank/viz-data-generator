import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import StyleGuide from './styleGuide';

const Styles = StyleSheet.create({
    topic: {
        margin: '18px 0 6px 0',
        color: '#828282',
        fontSize: StyleGuide.fontSize5,
        fontWeight: StyleGuide.weight3,
    },
});

const FormTopic = props => (
    <p className={css(Styles.topic)}>{props.text}</p>
);

FormTopic.propTypes = {
    text: React.PropTypes.string,
};

export default FormTopic;
