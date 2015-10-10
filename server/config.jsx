if (Meteor.isServer) {
    ServiceConfiguration.configurations.upsert(
        { service: "facebook" },
        {
            $set: {
                appId: "1714984282067881",
                loginStyle: "popup",
                secret: "c15307e9fb70a79b53e7dcc3ed274c90",
                requestPermissions: ['public_profile', 'email', 'user_about_me', 'user_actions.music', 'user_actions.video', 'user_actions.books', 'user_actions.fitness', 'user_likes', 'user_hometown', 'user_location', 'user_relationships', ]
            }
        }
    );
}