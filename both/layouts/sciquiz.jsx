SciquizLayout = React.createClass({
    render() {

    return (<main id="main">
                <HeaderComponent />

                <section id="content">
                    {this.props.content}
                </section>

                <FooterComponent />
            </main>);
    }
});
