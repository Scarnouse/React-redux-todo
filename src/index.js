import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import registerServiceWorker from './registerServiceWorker';

import store from './store';
import TodoList from './views/todo-list';
import DoneList from './views/done-list';

// Renders the "TodoList" and the "DoneList"
// components. The "Provider" component is
// used to connect the store to the components.
// When the store changes state, the children
// of "Provider" are re-rendered.
render(
  <Provider store={store}>
    <div>
      <TodoList/>
      <DoneList/>
    </div>
  </Provider>,
  document.getElementById('root')
);

//registerServiceWorker();
