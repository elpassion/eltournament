import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  init(){
    this._super(...arguments);
    if (!this.get('model.players.length')){
      this.get('model.players').addObject(
        this.get('store').createRecord('player')
      );
    }
  },

  actions: {
    noop(){},

    removePlayer(player){
      this.get('model.players').removeObject(player);
    },

    addPlayer(){
      this.get('model.players').addObject(
        this.get('store').createRecord('player')
      );
    },

    save(){
      this.get('model').save().then(
        ()=>{
          this.get("routing").transitionTo("sessions.show", [this.get('model.id')]);
        },
        ()=>{
          console.log('error');
        }
      );
    }
  }
});
