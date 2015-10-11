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

        var data2 = [{
            "Client": "ABC",
            "sale": "202",
            "year": "2000"
        }, {
            "Client": "ABC",
            "sale": "215",
            "year": "2002"
        }, {
            "Client": "ABC",
            "sale": "179",
            "year": "2004"
        }, {
            "Client": "ABC",
            "sale": "199",
            "year": "2006"
        }, {
            "Client": "ABC",
            "sale": "134",
            "year": "2008"
        }, {
            "Client": "ABC",
            "sale": "176",
            "year": "2010"
        }, {
            "Client": "XYZ",
            "sale": "100",
            "year": "2000"
        }, {
            "Client": "XYZ",
            "sale": "215",
            "year": "2002"
        }, {
            "Client": "XYZ",
            "sale": "179",
            "year": "2004"
        }, {
            "Client": "XYZ",
            "sale": "199",
            "year": "2006"
        }, {
            "Client": "XYZ",
            "sale": "134",
            "year": "2008"
        }, {
            "Client": "XYZ",
            "sale": "176",
            "year": "2013"
        }];

        var wantedData = [
            {
                "gender": "masculine",
                "qty": "1",
                "score": "0"
            },
            {
                "gender": "masculine",
                "qty": "3",
                "score": "1"
            },
            {
                "gender": "masculine",
                "qty": "5",
                "score": "2"
            },
            {
                "gender": "masculine",
                "qty": "3",
                "score": "3"
            },
            {
                "gender": "masculine",
                "qty": "3",
                "score": "4"
            },
            {
                "gender": "masculine",
                "qty": "6",
                "score": "5"
            },
            {
                "gender": "feminine",
                "qty": "5",
                "score": "2"
            },
            {
                "gender": "feminine",
                "qty": "10",
                "score": "4"
            },
            {
                "gender": "feminine",
                "qty": "5",
                "score": "5"
            },
            {
                "gender": "feminine",
                "qty": "6",
                "score": "7"
            }
        ];

        // quiz

        // get the answers

        // create labels

        // add qty of "votes"(answers selecteds) to each label
        // this.data.beers.map(function(d) {
        //     data[moment(d.date).weekday()].qty += d.beers;
        // });

        return wantedData;
    },

    render() {
        return (
            // <BarChart data={this.mapData()} width="480" height="320"/>
            // <MultilineChart data={this.mapData()} width="1000" height="500" x="year" y="sale"/>
            <MultilineChart data={this.mapData()} width="1000" height="500" x="score" y="qty" group="gender"/>
        );
    }
});
