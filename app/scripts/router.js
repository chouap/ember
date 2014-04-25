Emberapp.Router.map(function() {
    this.resource('catalogues');
    this.resource('catalogue', function() {
        this.route('detail', {path: '/detail/:catalogue_id'});
        this.route('edit', {path: '/edit/:catalogue_id'});
        this.route('create', {path: '/create'});
    });
    this.resource('session', function() {
        this.route('new');
    });
});
