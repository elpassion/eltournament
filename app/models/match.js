import DS from 'ember-data';
import Model from 'ember-data/model';
import Validator from '../mixins/model-validator';

export default Model.extend(Validator, {
  tournament: DS.belongsTo('tournament'),
});
