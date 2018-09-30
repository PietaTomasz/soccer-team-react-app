import React from 'react';
import ReactDOM from 'react-dom';
import BallList from './BallList';

it('renders without crashing', ()=> {
  const div = document.createElement('div');
  ReactDOM.render(<BallList />, div);
  ReactDOM.unmountComponentAtNode(div);
})