class Greetings extends React.Component {
	render() {
		return (
			<h1>
				Good Morning from {this.props.from} to {this.props.who}
			</h1>
		);
	}
}
