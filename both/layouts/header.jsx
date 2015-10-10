HeaderComponent = React.createClass({
    _openMenu() {
        $('header#header nav').toggleClass('isOpen');
    },
    render() {
        
    return  <header id="header">
                <button id="openMenu" role="toggle" onClick={this._openMenu}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <nav id="left" role="navigation">
                    <ul id="menu">
                        <li className="is-active"><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><AccountsUIWrapper /></li>
                    </ul>
                </nav>
                <nav id="right" role="navigation">
                    <ul>
                        <li><a href="#">Logout (UserName)</a></li>
                    </ul>
                </nav>
            </header>
    }
});