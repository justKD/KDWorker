import * as React from 'react';
import { render } from 'react-dom';
import { App } from './client/App';

const rootElement = document.getElementById('app');
render(<App />, rootElement);
