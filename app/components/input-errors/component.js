import Ember from 'ember';

export default Ember.Component.extend({
  flattenErrors: Ember.computed('errors', function(){
    return this.get('errors').mapBy('message');
  })
});
