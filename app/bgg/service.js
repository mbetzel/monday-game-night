import Ember from 'ember';

const BASE_PATH = 'http://localhost:3000';
export const USERS = ['Deliverator', 'Aramd', 'seehafma'];

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  originalState: null,

  state: null,

  applyFilter(numberOfPlayers) {
    const newState = this.get('originalState').reduce((games, item) => {
      if (item.minplayers <= numberOfPlayers && item.maxplayers >= numberOfPlayers) {
        return games.concat([item]);
      } else {
        return games;
      }
    }, []);

    this.set('state', _.cloneDeep(newState));
  },

  fetchFromBGG(path) {
    return this.get('ajax').request(path);
  },

  fetchState() {
    const state = this.get('state');

    if (this.get('state') != null) {
      return Ember.RSVP.resolve(state)
    }

    const usersString = USERS.join(';');

    return this.fetchFromBGG(`${BASE_PATH}/collections/${usersString}`)
      .then(results => {
        this.set('originalState', results);
        this.set('state', _.cloneDeep(results));
        return this.get('state');
      });
  }
});
