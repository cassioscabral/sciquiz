QuizPage = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {};
        data.quiz = Quizzes.findOne({_id: this.props._id});
        return data;
    },
    getContent() {
        return <div>
            <a href="/">Back</a>
            <h3>{this.data.quiz.title}</h3>
        </div>;
    },
    render() {
        return (this.data.quiz)? this.getContent() : <div>loading...</div>;
    }
});