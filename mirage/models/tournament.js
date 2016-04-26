import { Model, faker } from 'ember-cli-mirage';

export default Model.extend({
  name() {
    return faker.lorem.words(3).join(' ');
  },

  players(){
    return [
      { name: faker.name.firstName(), points: 4 },
      { name: faker.name.firstName(), points: 5 },
      { name: faker.name.firstName(), points: 6 }
    ];
  }
});
