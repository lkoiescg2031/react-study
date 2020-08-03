import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    // state를 사용할 때에는 반드시 생성자에서 초기화를 해주어야 한다.
    this.state = {
      loading: true,
      formData: 'no data',
    };
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    // state 변경
    // state 의 값을 변경할 때에는 반드시 setState 함수를 이용해 주어야 합니다.
    // setState는 비동기로 실행이 된다.
    const data = 'new Data';
    const { formData } = this.state;
    this.setState({
      loading: false,
      formData: data + formData,
    });

    this.setState((prevState) => ({
      loading: false,
      formData: data + prevState.formData,
    }));
    
    // this.state.loading은 현재 true입니다.
    console.log('loading 값', this.state.loading);
    //이후 호출될 render() 함수에서의 this.state.loading은 false입니다.
  }

  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능합니다. */}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
