import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <span>Viz Data Generator</span>
                <a href='https://github.com/sjcrank/viz-data-generator'>source code</a>
            </div>
        );
    }
}