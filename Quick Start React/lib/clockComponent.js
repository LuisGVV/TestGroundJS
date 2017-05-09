class Clock extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Hello, world!'
            ),
            React.createElement(
                'h2',
                null,
                'It is ',
                this.props.date.toLocaleTimeString(),
                '.'
            )
        );
    }
}

function tick() {
    ReactDOM.render(React.createElement(Clock, { date: new Date() }), document.getElementById('root'));
}

setInterval(tick, 1000);