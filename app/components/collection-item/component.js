import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['row'],

  game: null,

  gameName: Ember.computed.readOnly('game.items.item.name.0.value'),

  gameImage: Ember.computed.readOnly('game.items.item.thumbnail'),

  minPlayers: Ember.computed.readOnly('game.items.item.minplayers.value'),

  maxPlayers: Ember.computed.readOnly('game.items.item.maxplayers.value'),
});
