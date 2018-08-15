import Immutable from 'immutable';

import initialState from '../initial-state';
import {
  UPDATE_INPUT_VALUE,
  CREATE_TODO,
  REMOVE_TODO
} from '../constants';

export default function Todo (state = initialState, action) {
  switch (action.type) {
    // When the "UPDATE_INPUT_VALUE" action is dispatched
    // we set the "inputValue" key of the Immutable.Map.
    case UPDATE_INPUT_VALUE:
      return state.set('inputValue', action.payload);

    // When the "CREATE_TODO" action is dispatched
    // we push the new item to the end of the
    // Immutable.List
    case CREATE_TODO:
      return state.set('todos',
        state.get('todos').push(Immutable.Map({
          title: action.payload
        }))
      );

    // When the "REMOVE_TODO" action is dispatched,
    // we delete the item at the given index from
    // the Immutable.List.
    case REMOVE_TODO:
      return state.set('todos',
        state.get('todos').delete(action.payload)
      )

    default:
      return state;
  }
}