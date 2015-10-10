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