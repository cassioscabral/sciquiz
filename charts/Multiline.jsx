MultilineChart = React.createClass({
    componentDidMount: function() {
        var el = this.getDOMNode(); // This is de div we are rendering
        var svg = d3.select(el)
                                .append("svg")
                                .attr("width", this.props.width)
                                .attr("height", this.props.height);

        this.updateChart(this.props);
    },
    componentWillUpdate: function(nextProps) {
        this.updateChart(nextProps);
    },
    // case width and height are not provided
    getDefaultProps: function() {
        return {
            width: 640,
            height: 480
        };
    },
    updateChart: function(props) {
        var data = props.data;
        MARGINS = {
            top: 50,
            right: 20,
            bottom: 50,
            left: 50
        };
        WIDTH = props.width;
        HEIGHT = props.height;
        x = props.x;
        y = props.y;
        group = props.group;

        xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(data, function(d) {
            return parseInt(d[x]);
        }), d3.max(data, function(d) {
            return parseInt(d[x]);
        })]);

        yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(data, function(d) {
            return parseInt(d[y]);
        }), d3.max(data, function(d) {
            return parseInt(d[y]);
        })]);

        xAxis = d3.svg.axis()
            .scale(xScale);

        yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");

        var vis = d3.select("svg");


        vis.append("svg:g")
        .attr("class","axis")
        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
        .call(xAxis);

        vis.append("svg:g")
        .attr("class","axis")
        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
        .call(yAxis);

        var lineGen = d3.svg.line()
            .x(function(d) {
                return xScale(d[x]);
            })
            .y(function(d) {
                return yScale(d[y]);
            });
            // .interpolate("basis");

        var dataGroup = d3.nest()
        .key(function(d) {
            return d[group];
        })
        .entries(data);

        lSpace = WIDTH/dataGroup.length;

        stroke = 2;
        dataGroup.forEach(function(d, i) {
            colors = ['rgb(92, 21, 224)', 'rgb(145, 231, 92)', 'rgb(190, 66, 181)', 'rgb(46, 199, 214)'];
            color = colors[Math.floor(Math.random() * colors.length)];
            vis.append("text")
            .attr("x", (lSpace / 2) + i * lSpace)
            .attr("y", HEIGHT)
            .style("fill", color)
            .style("cursor", "pointer")
            .attr("class", "legend")
            .text(d.key)
            .on('click', function() {
                var active = d.active ? false : true;
                var opacity = active ? 0 : 1;

                d3.select("#line_" + d.key).style("opacity", opacity);

                d.active = active;
            });

            vis.append('svg:path')
                .attr('d', lineGen(d.values))
                .attr('stroke', function(d, j) {
                    return color;
                })
                .attr('stroke-width', stroke)
                .attr('id', 'line_' + d.key)
                .attr('fill', 'none');

            stroke += stroke + 0.5;
        });
    },
    render () {
        return (
            <div className="multiline-chart"></div>
        );
    }
});
