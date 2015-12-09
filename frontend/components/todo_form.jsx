var React = require('react'),
    TodoStore = require('../stores/todo_store');

var TodoForm = React.createClass({
  getInitialState: function(){
    return { newTitle: "", newBody: "" };
  },

  handleSubmit: function(e){
    e.preventDefault();

    TodoStore.create({ title: this.state.newTitle, body: this.state.newBody });
    this.setState({ newTitle: "" });
    this.setState({ newBody: "" });
  },
  handleTitle: function(e){
    this.setState({ newTitle: e.target.value });
  },
  handleBody: function(e){
    this.setState({ newBody: e.target.value });
  },

  render: function(){
    var title = this.state.newTitle;
    var body = this.state.newBody;

    return(
      <div>
        <h3>Add New Todo</h3>

        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input name='title' onChange={this.handleTitle} value={title}></input>
          </label>

          <br/>
          <br/>

          <label>
            Body:
            <textarea name='body' onChange={this.handleBody} value={body}></textarea>
          </label>

          <br/>
          <input type='submit' value='Submit' ></input>
        </form>
        
      </div>
    );
  }
});

module.exports = TodoForm;
