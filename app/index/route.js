import Ember from 'ember';
import { USERS } from 'monday-game-night/bgg/service';

export default Ember.Route.extend({
  bgg: Ember.inject.service(),

  stateChanged: Ember.observer('bgg.state', function () {
    this.refresh();
  }),

  model() {
    return this.get('bgg').fetchState()
      .then(results => {
        return {
          collectionItems: results,
          users: USERS
        };
      });
  },
});
