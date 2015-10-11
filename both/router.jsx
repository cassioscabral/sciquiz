FlowRouter.route("/", {
    action: function() {
        ReactLayout.render(SciquizLayout, {
            content: <QuizList />
        });
    }
});

FlowRouter.route('/quiz/:_id', {
    name: 'quiz',
    action: function(params) {
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }else{
            ReactLayout.render(SciquizLayout, {
                content: <QuizPage _id={params._id} />
            });
        }
    }
});

FlowRouter.route('/statistics', {
    name: 'statistics',
    action: function(params) {
        ReactLayout.render(SciquizLayout, {
            content: <StatsList />
        });
    }
});

FlowRouter.route('/stats/:_id', {
    name: 'stats',
    action: function(params) {
        ReactLayout.render(SciquizLayout, {
            content: <Stats _id={params._id} />
        });
    }
});

FlowRouter.route('/about', {
    name: 'about',
    action: function(params) {
        ReactLayout.render(SciquizLayout, {
            content: <AboutPage />
        });
    }
});
