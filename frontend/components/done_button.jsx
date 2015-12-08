var React = require('react');
var TodoStore = require('../stores/todo_store');
var StepStore = require('../stores/step_store');

var DoneButton = React.createClass({
  handleDone: function(){
    this.props.store.toggleDone(this.props.item.id);
  },

  render: function(){
    var doneButtonText = this.props.item.done ? "Undo" : "Done";
    return(
      <button onClick={this.handleDone}>{doneButtonText}</button>
    );
  }
});

module.exports = DoneButton;
