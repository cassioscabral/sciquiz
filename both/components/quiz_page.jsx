QuizPage = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {};
        data.quiz = Quizzes.findOne({_id: this.props._id});
        return data;
    },
    getContent() {
        return <form ref="form">
            <a href="/">Back</a>
            <h3>{this.data.quiz.title}</h3>
            {this.data.quiz.questions.map(function(question) {
                return <div>
                    <p>{question.title}</p>
                    {question.answers.map(function(answer) {
                        return <input type="radio" name={question.title} value={answer.value}>{answer.title}<br/></input>
                    })}
                </div>
            })}
            <button onClick={this.save}>
                Send
            </button>
        </form>;
    },
    getQuestions(){

    },
    save(event){
        event.preventDefault();
    },
    render() {
        return (this.data.quiz)? this.getContent() : <div>loading...</div>;
    }
});
