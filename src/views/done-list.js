import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <div>
        <h3>DONE</h3>
        <ul>
          {done.map(({ title }, i) => 
            <li key={i} style={itemStyle}>{title}</li>
          )}
        </ul>
      </div>
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