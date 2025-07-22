new Vue({
  el: '#app',
  data: {
    todo: '',
    todos: [],
    isEditing: false,
    editingIndex: null
  },
  methods: {
    storeTodo() {
      if (this.todo.trim() !== '') {
        this.todos.push(this.todo);
        this.todo = '';
      }
    },
    editTodo(index, todo) {
      this.isEditing = true;
      this.editingIndex = index;
      this.todo = todo;
    },
    updateTodo() {
      if (this.todo.trim() !== '') {
        this.todos.splice(this.editingIndex, 1, this.todo);
        this.todo = '';
        this.isEditing = false;
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
});
