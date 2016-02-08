import React from 'react';
import ReactDOM from 'react-dom';
import Rectangle from '../../dist/index';

ReactDOM.render(
  <div className="container" style={{ background: '#9e9e9e', width: '100vw', height: '50vh' }}>
    <div className="box1">
      <Rectangle style={{ background: '#607d8b' }} />
    </div>
    <div className="box2">
      <Rectangle aspectRatio={2} style={{ background: '#f44336' }} />
    </div>
    <div className="box3">
      <Rectangle aspectRatio={'0.33'} style={{ background: '#e91e63' }} />
    </div>
    <div className="box4">
      <Rectangle aspectRatio={[5, 3]} style={{ background: '#9c27b0' }} />
    </div>
    <div className="box5">
      <Rectangle aspectRatio={{width: 1.54, height: 2.11}} style={{ background: '#673ab7' }} />
    </div>
  </div>,
  document.getElementById('app')
);
