import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['video-player'],
  didRender() {
    this._super(...arguments);
    setTimeout(()=>{
      this.$().addClass("video-player-is-in");
    }, 500);
  }
});
