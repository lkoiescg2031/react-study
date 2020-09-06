import { SET_LOCATION } from '../actions/routerActions';

const initialState = {
  location: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOCATION: {
      const { location } = payload;
      return { ...state, location };
    }
    default:
      return state;
  }
};
