var React = require('react'),
    StepStore = require('../stores/step_store');


var StepForm = React.createClass({
  getInitialState: function(){
    return {content: ""};
  },

  handleSubmit: function(e){
    e.preventDefault();

    StepStore.create({content: this.state.content, todoId: this.props.todoId});
    this.setState({content: ""});
  },
  handleContent: function(e){
    this.setState({content: e.target.value});
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Step:
          <textarea onChange={this.handleContent} value={this.state.content}></textarea>
        </label>

        <input type='submit' value='submit'></input>
      </form>
    );
  }
});

module.exports = StepForm;
