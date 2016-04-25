import DS from 'ember-data';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),

  tournament: DS.belongsTo('tournament')
});
