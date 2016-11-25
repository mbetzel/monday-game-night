import Ember from 'ember';

export default Ember.Component.extend({
  numberOfPlayers: 1,

  actions: {
    filter() {
      this.onFilter(this.get('numberOfPlayers'));
    },

    changeNumberOfPlayers() {
      this.set('numberOfPlayers', +this.$('[name="numberOfPlayers"]').val());
    },
  }
});
