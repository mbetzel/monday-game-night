import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    if (transition.queryParams.fixtures) {
      this.set('pretender', new Pretender(function () {
        fixtures.serve(this, {});
        this.get('/config/app.json', this.passthrough);
      }));
    }
  }
});
