QuizPage = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {};
        data.quiz = Quizzes.findOne({_id: this.props._id});
        return data;
    },
    getQuestions(){
        return <div>
            {this.data.quiz.questions.map(function(question) {
                return <form>
                    <p>{question.title}</p>
                    {question.answers.map(function(answer) {
                        return <input type="radio" name={question.title} value={answer.value}>{answer.title}<br/></input>
                    })}
                </form>
            })}
            </div>;
    },
    getContent() {
        return <div>
            <a href="/">Back</a>
            <h3>{this.data.quiz.title}</h3>
            {this.getQuestions()}
        </div>;
    },
    render() {
        return (this.data.quiz)? this.getContent() : <div>loading...</div>;
    }
});
