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
                        <li><a href="/">Quizzes</a></li>
                        <li><a href="/output">benefit research</a></li>
                        <li><a href="/about">About</a></li>
                        <li><AccountsUIWrapper /></li>
                    </ul>
                </nav>
            </header>
    }
});