import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import {
  updateInputValue,
  createTodo,
  createDone,
  removeTodo
} from '../actions';

class TodoList extends Component {
  constructor(...args) {
    super(...args);
    this.onClick = this.onClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    // The revelant state from the "todo" store
    // that we're rendering here.
    const { todos, inputValue } = this.props;

    // Renders an input for new todos, and the list
    // of current todos. When the user types
    // and then hits enter, the new todo is created.
    // When the user clicks a todo, it's moved to the
    // "done" array.
    return (
      <div>
        <h3>TODO</h3>
        <div>
          <input
            value={inputValue}
            placeholder="TODO..."
            onKeyUp={this.onKeyUp}
            onChange={this.onChange}
            autoFocus
          />
        </div>
        <ul>
          {todos.map(({ title }, i) =>
            <li key={i}>
              <a
                href="#"
                onClick={this.onClick.bind(null, i)}
              >{title}</a>
            </li>
          )}
        </ul>
      </div>
    );
  }

  // An active Todo was clicked. The "key" is the
  // index of the Todo within the store. This is
  // passed as the payload to the "createDone()"
  // action, and next to the "removeTodo()" action.
  onClick(key) {
    const { dispatch, todos } = this.props;

    dispatch(createDone(todos[key]));
    dispatch(removeTodo(key));
  }

  // If the user has entered some text and the
  // "enter" key is pressed, we use the
  // "createTodo()" action to create a new
  // item using the entered text. Then we clear
  // the input using the "updateInputValue()"
  // action, passing it an empty string.
  onKeyUp(e) {
    const { dispatch } = this.props;
    const { value } = e.target;

    if (e.which === 13 && value) {
      dispatch(createTodo(e.target.value));
      dispatch(updateInputValue(''));
    }
  }

  // The text input value changed - upadte the store.
  onChange (e) {
    this.props.dispatch(
      updateInputValue(e.target.value)
    );
  }
}

// The props that get passed to this component
// from the store. We just neew to convert the
// "Todo" Immutable.js structure to plain JS.
function mapStateToProps(state) {
  return state.Todo.toJS();
}

// Exports the "connected" version of the
// component that's connect to the Redux store.
export default connect(mapStateToProps)(TodoList);