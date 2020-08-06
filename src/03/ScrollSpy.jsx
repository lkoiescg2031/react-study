import React, { Component } from 'react';

export default class ScrollSpy extends Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
  }
  setRef(ref) {
    this.ref = ref;
  }
  checkPosition() {
    const top = this.ref.getBoundingClientRect().top;
    const innerHeight = window.innerHeight;
    console.log(top);
    console.log(innerHeight);
    if (top < innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.checkPosition);
    this.checkPosition();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition);
  }
  render() {
    return <div ref={this.setRef}></div>;
  }
}
