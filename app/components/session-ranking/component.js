import Ember from 'ember';

export default Ember.Component.extend({
  sortedPlayers: Ember.computed('session.players', function(){
    return this.get('session.players').sortBy('points');
  })
});
