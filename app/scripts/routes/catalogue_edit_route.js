Emberapp.CatalogueEditRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').find('catalogue', this.modelFor('catalogue').id);
    },
    setupController: function(controller, model) {
        controller.set('model', model);
    },
    renderTemplate: function() {
        this.render('catalogue.edit', {into: 'application'});
    }
});

