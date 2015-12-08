var _todos = [];
var _callbacks = [];

var TodoStore = {
  all: function() {
    return _todos;
  },

  fetch: function() {
    $.get('/api/todos', {}, function(todos){
      _todos = todos;
      TodoStore.changed();
    });
  },

  create: function(data) {
    $.post('/api/todos', {todo: data}, function(){
      TodoStore.fetch();
      TodoStore.changed();
    });
  },

  find: function(id) {
    var foundTodo = _todos.find(function(todo){
      return todo.id === id;
    });
    if (!foundTodo) {return false;}
    return _todos.indexOf(foundTodo);
  },

  destroy: function(id) {
    if (TodoStore.find(id) === -1) {
      return false;
    }
    $.ajax({
      url: '/api/todos/' + id,
      type: 'DELETE',
      success: function(result) {
        _todos.splice(TodoStore.find(id), 1);
        TodoStore.changed();
        TodoStore.all();
      }
    });
  },

  toggleDone: function(id) {
    var foundTodo = _todos[TodoStore.find(id)];
    if (!foundTodo) {
      return false;
    }
    foundTodo.done = !foundTodo.done;
    $.ajax({
      url: '/api/todos/' + id,
      type: 'PATCH',
      dataType: 'json',
      data: {todo: {done: foundTodo.done}},
      success: function(result) {
        TodoStore.changed();
        return result;
      }
    });
  },
  changed: function(){
    _callbacks.forEach(function(cb) {
      cb();
    });
  },

  addChangedHandler: function(cb){
    _callbacks.push(cb);
  },

  removeChangedHandler: function(cb) {
    var idx = _callbacks.indexOf(cb);
    if (idx > -1) {
      _callbacks.splice(idx, 1);
    }
  },
};

module.exports = TodoStore;
