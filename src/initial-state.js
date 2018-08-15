import Immutable from 'immutable';

// The initial state of the Redux store. The
// "shape" of the application state includes
// two domains - "Todo" and "Done". Each domain
// is an Immutable.js structure.
const initialState = {
  Todo: Immutable.fromJS({
    inputValue: '',
    todos: [
      { title: "Build this thing" },
      { title: "Build that thing" },
      { title: "Build all the things" }
    ]
  }),
  Done: Immutable.fromJS({
    done: []
  })
};

export default initialState;