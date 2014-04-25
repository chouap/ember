Emberapp.User = DS.Model.extend({
    name:     DS.attr('string'),
    email:    DS.attr('string'),
    username: DS.attr('string')
});

// probably should be mixed-in...
Emberapp.User.reopen({
    attributes: function() {
        var model = this;
        return Ember.keys(this.get('data')).map(function(key) {
            return Ember.Object.create({model: model, key: key, valueBinding: 'model.' + key});
        });
    }.property()
});