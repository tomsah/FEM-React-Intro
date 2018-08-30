import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';

test('search renderes correctly', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
  expect(component).toMatchSnapshot();
});

test('search should render the correct amount of shows', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

xtest('search should render the correct amount of shows based on a search term', () => {
  const searchWord = 'black';
  const component = shallow(<Search shows={preload.shows} />);

  component.find('input').simulate('change', { target: { value: searchWord } });
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});
