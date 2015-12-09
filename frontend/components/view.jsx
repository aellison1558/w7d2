var React = require('react'),
    MainView = require('./main_view'),
    SidebarView = require('./sidebar_view');

var View = React.createClass({
  getInitialState: function(){
    return {selected: ""};
  },

  handleSelect: function(todo){
    this.setState({selected: todo});
  },

  render: function(){
    return(
      <div>
        <MainView selected={this.state.selected}/>
        <SidebarView handleSelect={this.handleSelect}/>
      </div>
    );
  }
});

module.exports = View;
