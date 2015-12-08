var React = require('react'),
    StepListItem = require('./step_list_item'),
    StepStore = require('../stores/step_store'),
    StepForm = require('./step_form');


var StepList = React.createClass({
  getInitialState: function() {
    return {steps: []};
  },

  stepsChanged: function() {
    this.setState({steps: StepStore.all(this.props.todoId)});
  },

  componentDidMount: function(){
    StepStore.addChangedHandler(this.stepsChanged);
    StepStore.fetch(this.props.todoId);
  },

  componentWillUnmount: function(){
    StepStore.removeChangedHandler(this.stepsChanged);
  },
  render: function(){
    var stepItems = this.state.steps.map(function(step, idx){
      return <StepListItem key={idx} step={step}/>;
    });
    return(
      <div>
        <ul>
          {stepItems}
        </ul>
        <StepForm todoId={this.props.todoId}/>
      </div>
    );
  }
});

module.exports = StepList;
