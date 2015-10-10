if (Meteor.isClient) {
    Meteor.startup(function () {

        Meteor.loginWithFacebook({
            requestPermissions: ['public_profile', 'email', 'user_about_me', 'user_actions.music', 'user_actions.video', 'user_actions.books', 'user_actions.fitness', 'user_likes', 'user_hometown', 'user_location', 'user_relationships', ]
        }, function (err) {
            if (err)
            Session.set('errorMessage', err.reason || 'Unknown error');
        });
        // // Use Meteor.startup to render the component after the page is ready
        // React.render(<App />, document.getElementById("render-target"));
    });
}

if (Meteor.isServer) {
    ServiceConfiguration.configurations.upsert(
        { service: "facebook" },
        {
            $set: {
                appId: "1714984282067881",
                loginStyle: "popup",
                secret: "c15307e9fb70a79b53e7dcc3ed274c90"
            }
        }
    );
}

Meteor.methods({

});
