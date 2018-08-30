// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

type Props = {
  searchTerm: string,
  handleSearchTermChange: Function,
  history: RouterHistory
};

class Landing extends Component<Props> {
  props: Props;

  gotToSearch = (event: SyntheticEvent<*>) => {
    event.preventDefault();
    this.props.history.push('/search');
  };

  render() {
    return (
      <div className="landing">
        <h1>Svideo</h1>
        <form onSubmit={this.gotToSearch}>
          <input
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="search"
          />
        </form>
        {/* Create a dispatch action in redux to clear the search word wnen user come back from search*/}
        <Link to="/search">or Browse all</Link>
      </div>
    );
  }
}

// Redux function system
const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
