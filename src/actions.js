import {
  CREATE_TODO,
  CREATE_DONE,
  REMOVE_TODO,
  UPDATE_INPUT_VALUE
} from './constants';

// Creates a new Todo item. The "payload" should
// be an object with a "title" property.
export function createTodo(payload) {
  return {
    type: CREATE_TODO,
    payload
  };
}

// Creates a new Done item. The "payload" should
// be an object with a "title" property.
export function createDone(payload) {
  return {
    type: CREATE_DONE,
    payload
  };
}

// Removes the todo and the given "payload" index.
export function removeTodo(payload) {
  return {
    type: REMOVE_TODO,
    payload
  }
}

// Updates the "inputValue" state with the given
// "payload" string value
export function updateInputValue(payload) {
  return {
    type: UPDATE_INPUT_VALUE,
    payload
  };
}