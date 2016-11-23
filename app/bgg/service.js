import Ember from 'ember';

const BASE_PATH = 'http://localhost:3000';
export const USERS = ['Deliverator', 'Aramd', 'seehafma'];

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  fetchFromBGG(path) {
    return this.get('ajax').request(path);
  },

  fetchCollections() {
    const usersString = USERS.join(';');
    return this.fetchFromBGG(`${BASE_PATH}/collections/${usersString}`);
  }

  // fetchCollection() {
  //   const promises = USERS.map(user => {
  //     return this.fetchFromBGG(`${BASE_PATH}/collection/${user}`);
  //   });

  //   return Ember.RSVP.all(promises)
  //     .then(collections => {
  //       return collections.reduce((allItems, collection) => {
  //         return allItems.concat(collection.items.item);
  //       }, []);
  //     });
  // },

  // fetchGamesFromCollection(collectionItems) {
  //   return Ember.RSVP.all(collectionItems.map(collectionItem => this.fetchGame(collectionItem.objectid)));
  // },

  // fetchGame(gameId) {
  //   return this.fetchFromBGG(`${BASE_PATH}/thing/${gameId}`);
  // }
});
