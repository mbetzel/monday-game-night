import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['row'],

  game: null,

  gameName: Ember.computed.readOnly('game.name'),

  gameImage: Ember.computed.readOnly('game.thumbnail'),

  minPlayers: Ember.computed.readOnly('game.minplayers'),

  maxPlayers: Ember.computed.readOnly('game.maxplayers'),

  staticNumberOfPlayers: Ember.computed.equal('game.minplayers', 'game.maxplayers'),
});
