import React, { Component } from 'react';

//  js class based component (to able it to interact with other components)
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

// functional component
// const SearchBar = () => {
//   return <input />;
// };

export default SearchBar;
