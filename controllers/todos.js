const Todo = require("../models/todo");

module.exports = {
 index,
 create,
 delete: deleteOne,
};

function index(req, res) {
  res.render("index", {
   todos: Todo.getAll(),
 });
}

function create(req, res){
    Todo.create(req.body);
    res.redirect("/")
}

function deleteOne(req, res){
  Todo.deleteOne(req.params.id);
  res.redirect("/");
}