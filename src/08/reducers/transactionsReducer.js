import { SET_TRANSACTION_LIST } from '../actions/transactionActions';

const initialState = {
  ids: [],
  entities: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TRANSACTION_LIST: {
      const ids = payload.map((entity) => entity['id']);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity['id']]: entity,
        }),
        {},
      );
      return { ...state, ids, entities };
    }
    default:
      return state;
  }
};
