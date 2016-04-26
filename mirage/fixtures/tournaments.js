import {uuid} from 'ember-cli-uuid';

export default [
  {
    id: '63cf69b2-6f7c-497c-bb9c-cc55942ae695',
    name: 'Fifa',
    players: [
      { id: uuid(),
        name: 'John',
        points: 4 },
      { id: uuid(),
        name: 'Bob',
        points: 2 }
    ]
  }
];
