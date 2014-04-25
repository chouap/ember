Emberapp.CatalogueEditController = Ember.ObjectController.extend({
    needs: 'catalogue',
    actions: {
        save: function() {
            console.log(this.get('model'));
            this.transitionToRoute('catalogue');
        }
    }
});

