var React = require('react'),
    TodoStore = require('../stores/todo_store'),
    DoneButton = require('./done_button'),
    TodoDetailView = require('./todo_detail_view');


var TodoListItem = React.createClass({
  getInitialState: function(){
    return {details: ""};
  },


  toggleDetails: function(){
    var newDetails = this.state.details ? "" : <TodoDetailView todo={this.props.todo}/>;
  this.setState({details: newDetails});
  },

  render: function(){
    var todo = this.props.todo;
    return(
      <div>
        <div className="title" onClick={this.toggleDetails}>
          {todo.title}
        </div>
        <div>{this.state.details}</div>
        <DoneButton store={TodoStore} item={todo}/>
      </div>
    );
  }
});

module.exports = TodoListItem;
