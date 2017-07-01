var Greeting = React.createClass({
	getDefaultProps: function () {
		return {
			name: 'Dude',
			message: ': Say what?'
		};
	},
	render: function() {
		var name = this.props.name;
		var message = this.props.message;

		return (
			<div>
				<h1>RelationshipIQ</h1>
				<p>Hello { name }{ message }</p>
			</div>
			);
	}
});

var firstName = "Mike";
var greetingMsg = ": You rock!";

ReactDOM.render(
	<Greeting name={ firstName } message={ greetingMsg }/>,
	document.getElementById('app')
);