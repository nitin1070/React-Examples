class App extends React.Component {
	render() {
		return (
			<div>
				<Greetings from="Sachin" to="Rajat" />
			</div>
		);
	}
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<App />);
