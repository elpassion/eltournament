import DS from 'ember-data';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Validator from '../mixins/model-validator';

export default Model.extend(Validator, {
  name: attr('string'),
  disciplineType: attr('string'),

  players: DS.hasMany('player', {async: true}),
  rounds: DS.hasMany('round', {async: true}),
  matches: DS.hasMany('match', {async: true}),

  validations: {
    name: {
      presence: true
    },

    players:{
      relations: ['hasMany']
    }
  }
});
