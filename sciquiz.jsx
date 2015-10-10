if (Meteor.isClient) {
    Meteor.startup(function () {

        Meteor.loginWithFacebook({
            requestPermissions: ['user']
        }, function (err) {
            if (err)
            Session.set('errorMessage', err.reason || 'Unknown error');
        });
        // Use Meteor.startup to render the component after the page is ready
        React.render(<App />, document.getElementById("render-target"));
    });
}

if (Meteor.isServer) {
    ServiceConfiguration.configurations.remove({
        service: 'facebook'
    });
 
    ServiceConfiguration.configurations.insert({
        service: 'facebook',
        appId: '1001129963234030',
        secret: '81176a1122c93513c28585b244130126'
    });
}

Meteor.methods({

});
