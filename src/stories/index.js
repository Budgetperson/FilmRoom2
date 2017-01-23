import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Players from '../components/Players'

const thePlayers = [{id: 0, name: 'Yash'}]

storiesOf('Players', module)
  .add('with Yash', () => (
    <Players players={thePlayers} />
  ));
