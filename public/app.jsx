var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Mike',
      greeting: 'Welcome to RelationshipIQ Default message!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }
  },
  render: function () {
    var name = this.state.name;
    var greeting = this.props.greeting;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{greeting + '!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Michael';
var message = "Yo yo yo";

ReactDOM.render(
  <Greeter name={firstName} greeting={message} />,
  document.getElementById('app')
);
