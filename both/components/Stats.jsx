Stats = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            beers: Beers.find({}).fetch()
        };
    },

    mapData: function() {
        // generate data labeled by options
        var data = [
            { qty: 0, xLabel: "Sun" },
            { qty: 0, xLabel: "Mon" },
            { qty: 0, xLabel: "Tue" },
            { qty: 0, xLabel: "Wed" },
            { qty: 0, xLabel: "Thu" },
            { qty: 0, xLabel: "Fri" },
            { qty: 0, xLabel: "Sat" },
        ];

        // quiz

        // get the answers

        // create labels

        // add qty of "votes"(answers selecteds) to each label
        this.data.beers.map(function(d) {
            data[moment(d.date).weekday()].qty += d.beers;
        });

        return data;
    },

    render() {
        return (
            <BarChart data={this.mapData()} width="480" height="320"/>
        );
    }
});
