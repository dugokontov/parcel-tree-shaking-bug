import React from 'react';
import { render } from 'react-dom';
import RootComponent from './RootComponent';

window.onload = () => {
    render(<RootComponent />, document.getElementById('application'));
};
