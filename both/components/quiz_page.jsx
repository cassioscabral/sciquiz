QuizPage = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {};
        data.quiz = Quizzes.findOne({_id: this.props._id});
        return data;
    },
    getContent() {
        return <form>
            <a href="/">Back</a>
            <h3>{this.data.quiz.title}</h3>
            {this.data.quiz.questions.map(function(question) {
                return <div ref={question._id}>
                    <p>{question.title}</p>
                    {question.answers.map(function(answer) {
                        return <input type="radio" ref={answer._id} name={question.title} value={answer.value}>{answer.title}<br/></input>
                    })}
                </div>
            })}
            <button onClick={this.save}>
                Send
            </button>
        </form>;
    },
    sumScore(){
        sum = 0;
        for (q in this.data.quiz.questions){
            for (a in this.data.quiz.questions[q].answers){
                answerID = this.data.quiz.questions[q].answers[a]._id;
                answerValue = parseInt(React.findDOMNode(this.refs[answerID]).value);
                answerChecked = React.findDOMNode(this.refs[answerID]).checked;
                if (answerChecked){
                    sum = sum + answerValue;
                }
            }
        }
        return sum;
    },
    save(event){
        event.preventDefault();
        score = this.sumScore();
        quizID = this.data.quiz._id;
        userId = Meteor.userId();
        previusValue = this.data.quiz.users[userId];
        var setModifier = { $set: {} };
        setModifier.$set['users.' + userId] = score;
        Quizzes.update(quizID,setModifier);

        if (previusValue){
            score = score - previusValue;
        }

        Quizzes.update(quizID,{ $inc: { maxScore: score} });
    },
    render() {
        return (this.data.quiz)? this.getContent() : <div>loading...</div>;
    }
});
