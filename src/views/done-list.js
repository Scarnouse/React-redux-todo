import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  ListGroup, 
  ListGroupItem, 
  Card,
  CardBody,
  CardTitle,
  Container
} from 'reactstrap';

class DoneList extends Component {
  render() {
    // The "done" array is the only state we need
    // from the "done" store.
    const { done } = this.props;

    // We want to display these items
    // as strikethrough text
    const itemStyle = {
      textDecoration: 'line-through'
    }

    // Renders the list of done items, with
    // the "itemStyle" applied to each item.
    return (
      <Container>
        <Card>
          <CardBody>
            <Container>
              <CardTitle>DONE</CardTitle>
            </Container>
            <Container>
              <ListGroup>
                {done.map(({ title }, i) => 
                  <ListGroupItem key={i} style={itemStyle}>{title}</ListGroupItem>
                )}
              </ListGroup>
            </Container>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

// The props that get passed to this component
// from the store. We just need to convert the
// "Done" Immutable.js structure to plain JS.
function mapStateToProps(state) {
  return state.Done.toJS();
}

// Exports the "connected" version of the
// component that's connect to the Redux store.
export default connect(mapStateToProps)(DoneList);