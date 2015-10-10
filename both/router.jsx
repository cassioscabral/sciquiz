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
        ReactLayout.render(SciquizLayout, {
            content: <QuizPage _id={params._id} />
        });
    }
});