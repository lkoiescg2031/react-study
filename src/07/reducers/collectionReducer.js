import { SET_COLLECTION } from '../actions/collectionActions01';
import { SET_AGE } from '../actions/collectionActions02';

const initialState = {
  ids: [],
  entities: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COLLECTION: {
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
    case SET_AGE: {
      const { id, age } = payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: { ...state.entities[id], age },
        },
      };
    }

    default:
      return state;
  }
};