Emberapp.CataloguesRoute = Ember.Route.extend({
    model: function() {
        return this.get('store').find('catalogue');
    }
});

