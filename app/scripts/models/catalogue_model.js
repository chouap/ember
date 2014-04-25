/*global Ember*/
Emberapp.Catalogue = DS.Model.extend({
    'nom': DS.attr('string'),
    'type': DS.attr('string'),
    'support_diff': DS.attr('string'),
    'diff': DS.attr('string'),
    'service_encodage': DS.attr('string'),
    'format_diffuseur': DS.attr('string'),
    'catalogue': DS.attr('string'),
    'drm_active': DS.attr('string')
});

// probably should be mixed-in...
Emberapp.Catalogue.reopen({
    attributes: function() {
        var model = this;
        return Ember.keys(this.get('data')).map(function(key) {
            return Ember.Object.create({model: model, key: key, valueBinding: 'model.' + key});
        });
    }.property()
});