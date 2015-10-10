
//app.jsx
injectTapEventPlugin();

var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    DatePicker
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;

var App = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    },

    render: function () {
        return (
            <AppCanvas>
                <AccountsUIWrapper />

                <AppBar title="Sciquiz"/>
                <div style={{padding: '80px',}}>
                    <RaisedButton primary={true} label="Tap" />
                    <br/>
                    <DatePicker hintText="Portrait Dialog" />
                    <br/>
                    <DatePicker
                        hintText="Landscape Dialog"
                        mode="landscape"/>
                </div>
            </AppCanvas>
        );
    }
});

if (Meteor.isClient) {
    Meteor.startup(() => React.render(<App/>, document.getElementById("render-target")));
}

// React.render(<App />, document.getElementById("render-target"));
