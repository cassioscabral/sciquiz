Quizzes = new Meteor.Collection('quizzes');
Questions = new Meteor.Collection('questions');
Answers = new Meteor.Collection('answers');

if(Meteor.isServer) {
    // cleanning
    Quizzes.remove({});
    Questions.remove({});
    Answers.remove({});

    answer1_1 = Answers.insert({
        title: "I have not stopped trying to get what I want",
        value: 0
    });
    answer2_1 = Answers.insert({
        title: "I have stopped trying to get what I want in some situations",
        value: 1
    });
    answer3_1 = Answers.insert({
        title: "I have stopped trying to get what I want in most situations",
        value: 2
    });
    answer4_1 = Answers.insert({
        title: "I have stopped trying to get what I want in all situations",
        value: 3
    });
    question1_1 = Questions.insert({
        title:"Motivational Deficit 1",
        answers:[
            Answers.findOne(answer1_1),
            Answers.findOne(answer2_1),
            Answers.findOne(answer3_1),
            Answers.findOne(answer4_1)
        ]
    });

    answer1_2 = Answers.insert({
        title: "I am not passive when it comes to getting what I want these days",
        value: 0
    });
    answer2_2 = Answers.insert({
        title: "In some situations I'm passive when it comes to getting what I want",
        value: 1
    });
    answer3_2 = Answers.insert({
        title: "In most situations I'm passive when it comes to getting what I want",
        value: 2
    });
    answer4_2 = Answers.insert({
        title: "In all situations I'm passive when it comes to getting what I want these days",
        value: 3
    });
    question2_1 = Questions.insert({
        title:"Motivational Deficit 2",
        answers:[
            Answers.findOne(answer1_2),
            Answers.findOne(answer2_2),
            Answers.findOne(answer3_2),
            Answers.findOne(answer4_2)
        ]
    });


    answer1_3 = Answers.insert({
        title: "I have not given up trying to accomplish what's important to me",
        value: 0
    });
    answer2_3 = Answers.insert({
        title: "I have given up trying to accomplish some things that are important to me",
        value: 1
    });
    answer3_3 = Answers.insert({
        title: "I have given up trying to accomplish most things that are important to me",
        value: 2
    });
    answer4_3 = Answers.insert({
        title: "I have given up trying to accomplish all things that are important to me",
        value: 3
    });
    question3_1 = Questions.insert({
        title:'Motivational Deficit 3',
        answers:[
            Answers.findOne(answer1_3),
            Answers.findOne(answer2_3),
            Answers.findOne(answer3_3),
            Answers.findOne(answer4_3)
        ]
    });

    answer1_4 = Answers.insert({
        title: "My motivation to get things done is as good as usual",
        value: 0
    });
    answer2_4 = Answers.insert({
        title: "In some situations, my motivation to get things done is lower than usual",
        value: 1
    });
    answer3_4 = Answers.insert({
        title: "In most situations my motivation to get things done is lower than usual",
        value: 2
    });
    answer4_4 = Answers.insert({
        title: "In all situations my motivation to get things done is lower than usual",
        value: 3
    });
    question4_1 = Questions.insert({
        title:'Motivational Deficit 4',
        answers:[
            Answers.findOne(answer1_4),
            Answers.findOne(answer2_4),
            Answers.findOne(answer3_4),
            Answers.findOne(answer4_4)
        ]
    });

    Quizzes.insert({
        title: 'Motivational Deficit',
        name: 'MotivationalDeficit',
        type: 'scoredQuiz',
        maxScore: 0,
        result: {
            0: "below average",
            1: "below average",
            2: "below average",
            3: "average",
            4: "average",
            5: "average",
            6: "average",
            7: "average",
            8: "above average",
            9: "above average",
            10: "above average",
            11: "above average",
            12: "above average"
        },
        users:{},
        questions:[
            Questions.findOne(question1_1),
            Questions.findOne(question2_1),
            Questions.findOne(question3_1),
            Questions.findOne(question4_1),
        ]
    });

    masculine = Answers.insert({
        title: "Masculine",
        value: 0
    });

    feminine = Answers.insert({
        title: "Feminine",
        value: 1
    });

    sex = Questions.insert({
        title:'SEX',
        answers:[
            Answers.findOne(masculine),
            Answers.findOne(feminine)
        ]
    });

    Quizzes.insert({
        title: 'Sex',
        name: 'sex',
        type: 'scoredQuiz',
        result: {
            0: "Masculine",
            1: "Feminine",
        },
        maxScore: 0,
        users:{},
        questions:[
            Questions.findOne(sex),
        ]
    });

}
