import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/layouts/Header';
import Todo from './Components/Todo';
import Addtodo from './Components/Addtodo';
import About from './Components/pages/About';
// import {v4 as uuid} from 'uuid';
import axios from 'axios';


import './App.css';

class App extends Component {
  // state = {
  //   todo : [{
  //     id: uuid(),
  //     title: 'Take out the trash',
  //     completed: false
  //   },
  //   {
  //     id: uuid(),
  //     title: 'Dinner with wife',
  //     completed: true
  //   },
  //   {
  //     id: uuid(),
  //     title: 'Meeting with boss',
  //     completed: false
  //   }
    
  // ]
  // }

  state = {
    todo : []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todo: res.data}) );
  }
 
  // Toggle Complete
  markComplete = (id) => {
    // console.log(id)
    this.setState({ todo: this.state.todo.map(task => {
      if(task.id === id) {
        task.completed = !task.completed;
      }
      
      return task;

    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    // console.log(id);
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(rest => this.setState({ todo: [...this.state.todo.filter(task => task.id !== id)]}));
  }

  // Add Todo
  addTodo = (title) => {
    // console.log(title);

    // When use axios this doesn't want
    // const newTodo = {
    //   id: uuid(), 
    //   title: title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState({ todo: [...this.state.todo, res.data]}));
    
  }

  render() {
    // console.log(this.state.todo);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                  <Addtodo addTodo={this.addTodo} />
                  <Todo todo ={this.state.todo} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
