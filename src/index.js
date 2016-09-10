require("file?name=[name].[ext]!../statics/index.html");
require("file?name=[name].[ext]!../statics/app.css");

import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";

import App from './app';

ReactDOM.render(<App/>, document.getElementById('app'));
