import React from 'react';
import { shallow } from 'enzyme';

import Players from './Players';

const noop = () => {}

const playersBootstrap = [
  {id: 0, name: 'Yash'},
  {id: 1, name: 'Quinn'},
  {id: 2, name: 'Tej'},
  {id: 3, name: 'Sam'},
  {id: 4, name: 'Nimish'},
  {id: 5, name: 'Jaydeep'}
];


it('renders without crashing', () => {
  const players = playersBootstrap;
  shallow(<Players players={players} onDelete={noop} />);
});

it('renders players', () => {
  const players = playersBootstrap.slice(0, 2);
  const playersView = shallow(<Players players={players} onDelete={noop} />);
  const yashCell = <td>Yash</td>;
  const quinnCell = <td>Quinn</td>;
  expect(playersView.contains(yashCell));
  expect(playersView.contains(quinnCell));
});

it('deletes players', () => {
  // TODO
  expect(true);
});
