import Ember from 'ember';
import { USERS } from 'monday-game-night/bgg/service';

export default Ember.Route.extend({
  bgg: Ember.inject.service(),

  model() {
    return this.get('bgg').fetchCollections()
      .then(results => {
        return {
          collectionItems: results,
          users: USERS
        };
      });
  }
});
