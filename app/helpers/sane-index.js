import Ember from 'ember';

export function saneIndex(params/*, hash*/) {
  return params[0]+1;
}

export default Ember.Helper.helper(saneIndex);
