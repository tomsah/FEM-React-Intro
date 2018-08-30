// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApiDetails } from './actionCreators';
import Header from './Header';
import Spinner from './Spinner';

type Props = {
  show: Show,
  rating: string,
  getApiData: Function
};

class Details extends Component<Props> {
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getApiData();
    }
  }

  props: Props;

  render() {
    const { title, description, year, trailer, poster } = this.props.show;

    let ratingComponent;
    if (this.props.rating) {
      ratingComponent = <h3>{this.props.rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }

    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`http://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};
  return {
    rating: apiData.rating
  };
};

const mapDispatchToPops = (dispatch: Function, ownProps) => ({
  getApiData() {
    dispatch(getApiDetails(ownProps.show.imdbID));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToPops
)(Details);
