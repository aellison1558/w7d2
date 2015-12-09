var React = require('react'),
    TodoStore = require('../stores/todo_store'),
    DoneButton = require('./done_button'),
    TodoDetailView = require('./todo_detail_view');


var TodoListItem = React.createClass({
  getInitialState: function(){
    return {details: ""};
  },

  componentWillUnmount: function(){
    this.setState({details: ""});
  },

  toggleDetails: function(){
    var newDetails = this.state.details ? "" : <TodoDetailView todo={this.props.todo}/>;

    this.setState({details: newDetails});
  },

  render: function(){
    var todo = this.props.todo;
    var callback = function(){this.props.handleSelect(todo);}.bind(this);
    return(
      <div>
        <h2 className="title" onClick={callback} data={todo}>
          {todo.title}
          <DoneButton store={TodoStore} item={todo}/>
        </h2>
      </div>
    );
  }
});

module.exports = TodoListItem;
