import { SET_FILTER, RESET_FILTER } from '../actions/searchFilterActions';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER: {
      const { filterName, value } = payload;
      return {
        ...state,
        [filterName]: value,
      };
    }

    case RESET_FILTER:
      return initialState;

    default:
      return state;
  }
};
