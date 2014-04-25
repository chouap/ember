Emberapp.CataloguesController = Ember.ObjectController.extend({
    actions: {
        removeItem: function(catalogue) {
            console.log(catalogue);
            catalogue.deleteRecord();
            catalogue.transaction.commit();
        }
    }
});

