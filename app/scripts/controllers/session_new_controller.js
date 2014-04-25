Emberapp.SessionNewController = Ember.ObjectController.extend({
    username: null,
    password: null,
    actions: {
        loginUser: function() {
            var router = this.get('target');
            data = [this.get('username'), this.get('password')];


            Emberapp.AuthManager.authenticate('175eaafa57ba2150067fa91165756237', '1');
            router.transitionTo('index');
            /*
            $.getJSON('http://webservices.ftv-local.fr/tools/authentication/getToken/role/pf-sport/resource/videoevent', data, function(results) {
                console.log(results);
                Emberapp.AuthManager.authenticate(results.api_key.access_token, results.api_key.user_id);
                router.transitionTo('index');
            });
            */
        }
    }
});