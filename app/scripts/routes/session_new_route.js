Emberapp.SessionNewRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('session.new', {into: 'application'});
    }
});