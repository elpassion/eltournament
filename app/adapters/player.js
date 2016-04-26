import DS from 'ember-data';
import config from '../config/environment';
import UrlTemplates from 'ember-data-url-templates';

export default DS.JSONAPIAdapter.extend(UrlTemplates, {
  namespace: config.api.namespace,
  host: config.api.host,
  createRecordUrlTemplate: '{+host}/{namespace}/tournaments/{tournamentId}/{pathForType}',

  urlSegments: {
    tournamentId: function(type, id, snapshot) {
      return snapshot.belongsTo('tournament', { id: true });
    },
  }
});
