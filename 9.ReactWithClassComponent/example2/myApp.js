class MyApp extends React.Component {
	render() {
		let myElement = <h1>Hello UserJee!!!</h1>;
		return myElement;
	}
}

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MyApp />);

