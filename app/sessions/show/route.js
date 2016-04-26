import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('tournament', params.id);
    // let _that = this;
    // let s = this.store.createRecord('tournament', {name: 'asd'});
    // s.get('players').addObject(
    //   _that.store.createRecord('player', {name: 'John', id:98324792387, points:'987'})
    // );
    // s.get('players').addObject(
    //   _that.store.createRecord('player', {name: 'John', id:325324, points:'987'})
    // );
    // s.get('players').addObject(
    //   _that.store.createRecord('player', {name: 'John', id:962436, points:'987'})
    // );
    // s.get('players').addObject(
    //   _that.store.createRecord('player', {name: 'John', id:147746254, points:'987'})
    // );
    // return s;
  }
});
