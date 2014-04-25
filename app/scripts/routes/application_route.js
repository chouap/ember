Emberapp.ApplicationRoute = Ember.Route.extend({
    init: function() {
        this._super();
        Emberapp.AuthManager = Emberapp.AuthManager.create();
    },
    renderTemplate: function() {
        this.render('application');
    },
    actions: {
        logout: function() {
          App.AuthManager.reset();
          this.transitionTo('index');
        }
    }
});
