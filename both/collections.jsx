Quizzes = new Meteor.Collection('quizzes');
if(Meteor.isServer) {
    Quizzes.remove({});
    Quizzes.insert({_id: 'one', title: 'New Meteor Rocks'});
    Quizzes.insert({_id: 'two', title: 'MeteorHacks + Kadira => Kadira++'});
    Quizzes.insert({_id: 'three', title: 'My Secret Post'});
}