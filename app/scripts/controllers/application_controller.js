Emberapp.ApplicationController = Ember.Controller.extend({
    currentUser: function() {
        return Emberapp.AuthManager.get('apiKey.user')
    }.property('App.AuthManager.apiKey'),
    isAuthenticated: function() {
        return Emberapp.AuthManager.isAuthenticated()
    }.property('App.AuthManager.apiKey')
});