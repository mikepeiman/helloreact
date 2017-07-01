var Greeting = React.createClass({
	getDefaultProps: function () {
		return {
			name: 'Dude',
			message: ': Say what?'
		};
	},
	onButtonClick: function (e) {
		e.preventDefault();

		var name = this.refs.name.value;

		alert(name);
	},
	render: function() {
		var name = this.props.name;
		var message = this.props.message;

		return (
			<div class="hero">
				<h1>RelationshipIQ</h1>
				<p>Hello { name }{ message + '!!!'}</p>

				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="name" />
					<button>Set name</button>
				</form>
			</div>
			);
	}
});

var firstName = "Mike";
var greetingMsg = ": You rock!";

ReactDOM.render(
	<Greeting name={firstName} message={greetingMsg}/>,
	document.getElementById('app')
);