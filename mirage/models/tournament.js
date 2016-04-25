import { Model, faker } from 'ember-cli-mirage';

export default Model.extend({
  name() {
    return faker.lorem.words(3).join(' ');
  }
});
