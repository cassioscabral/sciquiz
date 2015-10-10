injectTapEventPlugin();

var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    DatePicker
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;

SciquizLayout = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    },
  render() {
    return  <div className="container">

        <div className="navigation">
        <a href="/">Home</a>
        </div>
        <h1> My Blog </h1>
        {this.props.content}
    </div>;
  }
});
