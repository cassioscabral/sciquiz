HeaderComponent = React.createClass({
    _toggleMenu() {
        $('header#header nav').toggleClass('isOpen');
    },
    render() {
        
    return  <header id="header">
                <button id="openMenu" role="toggle" onClick={this._toggleMenu}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <nav id="left" role="navigation">
                    <ul id="menu">
                        <li><a onClick={this._toggleMenu} href="/">Quizzes</a></li>
                        <li><a onClick={this._toggleMenu} href="/statistics">Statistics</a></li>
                        <li><a onClick={this._toggleMenu} href="/about">About</a></li>
                        <li onClick={this._toggleMenu}><AccountsUIWrapper /></li>
                    </ul>
                </nav>
            </header>
    }
});