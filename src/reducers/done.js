import Immutable from 'immutable';

import initialState from '../initial-state';
import { CREATE_DONE } from '../constants';

export default function Done (state = initialState, action) {
  switch (action.type) {
    // When the "CREATE_DONE" action is dispatched,
    // we insert the new item into the beginning
    // of the Immutable.List.
    case CREATE_DONE:
      return state.set('done',
        state.get('done')
          .insert(0, Immutable.Map(action.payload))
      );

    // Nothing to do, return the state "as-is".
    default:
      return state;
  }
}