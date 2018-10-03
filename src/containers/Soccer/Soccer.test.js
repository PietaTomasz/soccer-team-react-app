import React from 'react';
import ReactDOM from 'react-dom';
import Soccer from './Soccer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( <Soccer /> , div);
  ReactDOM.unmountComponentAtNode(div);
});