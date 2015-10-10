Quizzes = new Meteor.Collection('quizzes');
Questions = new Meteor.Collection('questions');
Answers =  new Meteor.Collection('answers');

if(Meteor.isServer) {
    // cleanning
    Quizzes.remove({});
    Questions.remove({});
    Answers.remove({});

    answer1_1 = Answers.insert({
        title: 'I have not stopped trying to get what I want',
        value: 0
    });
    answer2_1 = Answers.insert({
        title: 'I have stopped trying to get what I want in some situations',
        value: 1
    });
    answer3_1 = Answers.insert({
        title: 'I have stopped trying to get what I want in most situations',
        value: 2
    });
    answer4_1 = Answers.insert({
        title: 'I have stopped trying to get what I want in all situations',
        value: 3
    });
    question1_1 = Questions.insert({
        title:'Motivational Deficit 1',
        answers:[
            Answers.findOne(answer1_1),
            Answers.findOne(answer2_1),
            Answers.findOne(answer3_1),
            Answers.findOne(answer4_1)
        ]
    });

    Quizzes.insert({
        title: 'Motivational Deficit',
        name: 'MotivationalDeficit',
        type: 'scoredQuiz',
        questions:[
            Questions.findOne(question1_1)
        ]
    });
}


// 1.
// 0= I have not stopped trying to get what I want.
// 1=I have stopped trying to get what I want in some situations.
// 2= I have stopped trying to get what I want in most situations.
// 3= I have stopped trying to get what I want in all situations.
// 2.
// 0= I am not passive when it comes to getting what I want these days.
// 1= In some situations I'm passive when it comes to getting what I want
// these days.
// 2= In most situations I'm passive when it comes to getting what I want
// these days.
// 3= In all situations I'm passive when it comes to getting what I want these days.
// 3.
// 0= I have not given up trying to accomplish what's important to me.
// 1= I have given up trying to accomplish some things that are important
// to me.
// 2= I have given up trying to accomplish most things that are important to
// me.
// 3= I have given up trying to accomplish all things that are important to
// me.
// 4.
// 0= My motivation to get things done is as good as usual.
// 1= In some situations, my motivation to get things done is lower than usual.
// 2= In most situations my motivation to get things done is lower than usual.
// 3= In all situations my motivation to get things done is lower than usual
