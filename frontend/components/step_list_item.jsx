var React = require('react'),
    StepStore = require('../stores/step_store'),
    DoneButton = require('./done_button');

var StepListItem = React.createClass({
  handleDelete: function(e){
    e.preventDefault();

    StepStore.destroy(this.props.step.id, this.props.step.todo_id);
  },
  
  render: function(){
    return(
      <div>
        {this.props.step.content}
        <DoneButton store={StepStore} item={this.props.step}/>
        <button onClick={this.handleDelete}>Delete Step</button>
      </div>
    );
  }
});

module.exports = StepListItem;
