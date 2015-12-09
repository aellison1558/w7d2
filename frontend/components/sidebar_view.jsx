var React = require('react'),
    TodoList = require('./todo_list');

var SidebarView = React.createClass({
  render: function(){
    return(
      <TodoList handleSelect={this.props.handleSelect}/>
    );
  }
});

module.exports = SidebarView;
