import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Container, Row, Col} from 'reactstrap';

import store from './store';
import TodoList from './views/todo-list';
import DoneList from './views/done-list';

import 'bootstrap/dist/css/bootstrap.css';

// Renders the "TodoList" and the "DoneList"
// components. The "Provider" component is
// used to connect the store to the components.
// When the store changes state, the children
// of "Provider" are re-rendered.
render(
  <Provider store={store}>
    <Container>
      <Row>
        <Col xs="6">
          <TodoList/>
        </Col>
        <Col xs="6">
          <DoneList/>
        </Col>
      </Row>
    </Container>
  </Provider>,
  document.getElementById('root')
);
