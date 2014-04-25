Emberapp.CatalogueCreateRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').createRecord('catalogue');
    },
    setupController: function(controller, model) {
        console.log(model);
        controller.set('model', model);
    },
    renderTemplate: function() {
        this.render('catalogue.edit', {into: 'application'});
    }
});

