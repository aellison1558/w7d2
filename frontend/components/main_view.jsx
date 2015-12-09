var React = require('react'),
    TodoList = require('./todo_list'),
    TodoDetailView = require('./todo_detail_view');

var MainView = React.createClass({
  render: function(){
  var contents = this.props.selected ? <TodoDetailView todo={this.props.selected}/> : "";
    return(
      <div className="main">
        {contents}
      </div>
    );
  }
});

module.exports = MainView;
