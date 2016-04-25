import DS from 'ember-data';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Validator from '../mixins/model-validator';

export default Model.extend(Validator, {
  name: attr('string'),

  tournament: DS.belongsTo('tournament'),

  validations: {
    name: {
      presence: true
    }
  }
});
