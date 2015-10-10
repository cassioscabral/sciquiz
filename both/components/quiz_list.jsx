QuizList = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {};
        data.quizzes = Quizzes.find({}, {sort: {_id: 1}}).fetch();
        return data;
    },
    getList() {
        return <ul>
            {this.data.quizzes.map(function(quiz) {
                var path = FlowRouter.path('quiz', {_id: quiz._id})
                return <li key={quiz._id}><a href={path}>{quiz.title}</a></li>
            })}
        </ul>;
    },
    render() {
        return <div>
            This is the quiz list
            {(this.data.quizzes)? this.getList() : "loading..."}
        </div>;
    }
});