// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const color = '#333';

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid ${color};
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

// type Props = {
//   show: Show
// };

class ShowCard extends Component {
  shouldComponentUpdate() {
    return false;
  }

  props: Show;

  render() {
    // console.log(this.props);
    return (
      <Wrapper to={`/details/${this.props.imdbID}`}>
        <Image src={`/public/img/posters/${this.props.poster}`} alt={`${this.props.title} Show poster`} />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}

export default ShowCard;
