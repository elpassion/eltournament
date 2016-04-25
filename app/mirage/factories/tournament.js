import {uuid} from 'ember-cli-uuid';

/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: uuid(),
  name() { return faker.lorem.words(3).join(' '); }
});
