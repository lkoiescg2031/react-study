import { SET_FILTER } from '../actions/searchFilterActions';

const initialState = {
  params: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER: {
      const { params } = payload;
      return { ...state, params };
    }
    default:
      return state;
  }
};
