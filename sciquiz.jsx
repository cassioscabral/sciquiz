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
    ServiceConfiguration.configurations.upsert(
        { service: "facebook" },
        {
            $set: {
                clientId: "clientId",
                loginStyle: "popup",
                secret: "secretId"
            }
        }
    );
}

Meteor.methods({

});
