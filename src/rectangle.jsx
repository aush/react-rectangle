import React from 'react';

export default ({ aspectRatio, children }) => {
  let multiplier = 1;
  if (aspectRatio !== undefined) {
    if (aspectRatio[0] !== undefined && aspectRatio[1] !== undefined) {
      multiplier = aspectRatio[1] / aspectRatio[0];
    } else {
      multiplier = 1 / aspectRatio;
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'block', paddingTop: 100 * multiplier + '%' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, top: 0, right: 0 }}>{children}</div>
    </div>
  );
};
