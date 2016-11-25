import Ember from 'ember';

export default Ember.Controller.extend({
  bgg: Ember.inject.service(),

  actions: {
    setFilterOnModel(numberOfPlayers) {
      this.get('bgg').applyFilter(numberOfPlayers);
    },
  }
});
