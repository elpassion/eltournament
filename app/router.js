import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about-us');

  this.route('sessions', function() {
    this.route('show', { path: '/:session_id' });
    this.route('new');
  });

});

export default Router;
