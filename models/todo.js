const todos = [];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function getAll(){
    return todos;
}

function getOne(id) {
    return todos[id];
}

function create(todo){
    todos.push(todo);
}

function deleteOne(id){
    todos.splice(id, 1);
}