Quizzes = new Meteor.Collection('quizzes');
Beers = new Meteor.Collection("Beers");

if(Meteor.isServer) {
    Quizzes.remove({});
    Quizzes.insert({_id: 'one', title: 'New Meteor Rocks'});
    Quizzes.insert({_id: 'two', title: 'MeteorHacks + Kadira => Kadira++'});
    Quizzes.insert({_id: 'three', title: 'My Secret Post'});

    Beers.remove({});
    Beers.insert({beers: 2, date: moment().toDate()});
    Beers.insert({beers: 1, date: moment().add(1, 'days').toDate()});
    Beers.insert({beers: 1, date: moment().add(2, 'days').toDate()});
}
