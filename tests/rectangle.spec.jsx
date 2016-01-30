import React from 'react';
import sd from 'skin-deep';
import { expect } from 'chai';
import Rectangle from '../src/rectangle';

describe('Rectangle', () => {
  let vdom;
  let tree;

  beforeEach(() => {
    tree = sd.shallowRender(<Rectangle />);
    vdom = tree.getRenderOutput();
  });

  it('should exist', () => { expect(Rectangle).to.be.ok; });

  it('should render', () => {
    expect(tree).to.be.ok;
    expect(vdom).to.be.ok;
  });

  it('should render a react component', () => {
    expect(vdom).to.have.property('type', 'div');
  });
});
