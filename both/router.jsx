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
