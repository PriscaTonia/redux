const redux = require("redux");
const createStore = redux.legacy_createStore;
const produce = require("immer").produce;

// Initial State
const initialState = {
  name: "Prisca",
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
};

// action type
const STREET_UPDATED = "STREET_UPDATED";

// action creator
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      /* 
     // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // }; 
      */

      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State:", store.getState());

// To subscribe
const unSubscribe = store.subscribe(() =>
  console.log("Updated State:", store.getState())
);

store.dispatch(updateStreet("456 Next st"));

unSubscribe();
