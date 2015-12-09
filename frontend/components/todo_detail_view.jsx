var React = require('react'),
    TodoStore = require('../stores/todo_store'),
    StepList = require('./step_list');

var TodoDetailView = React.createClass({
  handleDelete: function(e){
    e.preventDefault();

    TodoStore.destroy(this.props.todo.id);
  },

  render: function(){
    var todo = this.props.todo;
    return(
      <div>
        <h1>{todo.title}</h1>
        <div className="body">
          {todo.body}
        </div>

        <StepList todoId={todo.id}/>

        <button onClick={this.handleDelete}>Delete Todo</button>
      </div>
    );
  }
});

module.exports = TodoDetailView;
