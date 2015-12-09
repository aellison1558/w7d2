var React = require('react');
var ReactDOM = require('react-dom');
var View = require('./components/view');



// $(function(){
//   ReactDOM.render(<TodoList/>, $("#root"));
// });

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<View />, document.getElementById('root'));
});
