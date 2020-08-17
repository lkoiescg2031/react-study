import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent';
import { setAge } from '../actions/collectionActions';

const mapDispatchToProps = {
  ////하위와 같은 형태인 경우
  //// dispatch가 arrowfunc의 함수인자를 setAge에 전달만 하는 경우
  ////                        2번과 같이 생략할 수 있다.
  //1. setAge: (id, age) => dispatch(setAge(id, age)),
  //2. setAge: setAge //동일하므로 완전 생략하여 아래와 같이 줄일 수 있다.
  setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
