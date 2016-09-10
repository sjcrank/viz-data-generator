require("file?name=[name].[ext]!../statics/index.html");
require("file?name=[name].[ext]!../statics/app.css");

import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";

import Header from './header';
import FixedWidthContainer from './fixedWidthContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <FixedWidthContainer>
                </FixedWidthContainer>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

/*
                    <Row align='center'><GenerateDataBtn/></Row>
                    <Row>
                        <Cell><ConfigPane/></Cell>
                        <Cell fill='both'><DataPane/></Cell>
                    </Row>
                    <Row>
                        <Cell fill='both'><VisualizationPane/></Cell>
                    </Row>
*/