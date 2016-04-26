import Ember from 'ember';

export default Ember.Component.extend({
  sessionPath: Ember.computed('session', function(){
    return window.location.origin + '/' + this.get('session.name');
  })
});
