QuizList = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {};
        data.quizzes = Quizzes.find({}, {sort: {_id: 1}}).fetch();
        return data;
    },
    getList() {
        return <ul id="quiz-list">
               {this.data.quizzes.map(function(quiz) {
                    var path = FlowRouter.path('quiz', {_id: quiz._id});
                    return <li key={quiz._id}><a href={path}>{quiz.title}</a></li>;
                })}
                </ul>;
    },
    render() {
        return <section id="quiz-section">
                    <div className="container">
                        <div>
                            <header className="title"><h1>Choose your quiz and have a good time!!!</h1></header>
                            {(this.data.quizzes)? this.getList() : "loading..."}
                        </div>
                    </div>
                </section>;
    }
});
