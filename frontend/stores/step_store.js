var _steps = {};
var _callbacks = [];

var StepStore = {
  all: function(todoId){
    return _steps[todoId];
  },

  fetch: function(todoId){
    $.get('/api/todos/' + todoId + '/steps', {}, function(result){
      _steps[todoId] = result;
      StepStore.changed();
    });
  },

  create: function(data){
    $.post('/api/todos/' + data.todoId + '/steps', {step: {content: data.content}}, function(result){
      StepStore.fetch(data.todoId);
      StepStore.changed();
    });
  },
  find: function(id, todoId) {
    var foundStep = _steps[todoId].find(function(step){
      return step.id === id;
    });
    if (!foundStep) {return false;}
    return _steps[todoId].indexOf(foundStep);
  },

  destroy: function(id, todoId) {
    if (StepStore.find(id, todoId) === -1) {
      return false;
    }
    $.ajax({
      url: '/api/steps/' + id,
      type: 'DELETE',
      success: function(result) {
        _steps[todoId].splice(StepStore.find(id, todoId), 1);
        StepStore.changed();
        StepStore.all();
      }
    });
  },

  toggleDone: function(id, todoId) {
    var foundStep = StepStore.find(id, todoId);
    if (!foundStep) { return false;}
    foundStep.done = !foundStep.done;

    $.ajax({
      url: '/api/steps/' + id,
      type: 'PATCH',
      dataType: 'json',
      data: {step: {done: foundStep.done}},
      success: function(result) {
        StepStore.changed();
        return result;
      }
    });

  },

  changed: function(){
    _callbacks.forEach(function(cb){
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
  }
};

module.exports = StepStore;
