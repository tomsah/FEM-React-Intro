// @flow

import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

/*
Trick to quickly dump data on a screen good for state/props/Json
<pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
*/

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show>
}) => (
  <div className="search">
    <Header showSearch />

    <div>
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
