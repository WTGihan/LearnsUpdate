import React, {Component} from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todo extends Component {
//   markComplete = () => {
//       console.log('Hello')
//   }

  render() {
    // console.log(this.props.todo)
    return this.props.todo.map((task) => (
        // <h3>{ task.title }</h3>
        <Todoitem key={task.id} task ={task} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

// PropTypes
Todo.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default Todo;
