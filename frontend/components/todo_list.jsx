var React = require('react'),
    TodoStore = require('../stores/todo_store'),
    TodoListItem = require('./todo_list_item'),
    TodoForm = require('./todo_form');

var TodoList = React.createClass({
  getInitialState: function(){
    return {todos: []};
  },

  todosChanged: function(){
    this.setState({todos: TodoStore.all()});
  },

  componentDidMount: function(){
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function(){
    TodoStore.removeChangedHandler(this.todosChanged);
  },

  render: function(){
    var todos = TodoStore.all().map(function(todo, idx){
      return <TodoListItem key={idx} todo={todo}/>;
    });
    return(
      <div>
        {todos}
        <hr></hr>
        <TodoForm />
      </div>
    );
  }
});

module.exports = TodoList;
