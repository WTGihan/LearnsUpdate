import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        // if(this.props.task.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }
        // else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
        
        // Another way
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.task.completed ? 'line-through' : 'none'
        }
    }

    // without array function you have to bind it
    // onChange={this.markComplete.bind(this)}
    // markComplete(e) {
    //     console.log(this.props)
    // }

    // markComplete = (e) => {
    //     console.log(this.props)
    // }
    

    render() {
        // Define the variable
        const { id, title } = this.props.task;
        return (
            // <div style={{ backgroundColor: '#f4f4f4'}}>
            // <div style={itemStyle}>
            <div style={this.getStyle()}>
                <p>
                    {/* <input type="checkbox" onChange={this.markComplete.bind(this)} /> {' '} */}
                    {/* <input type="checkbox" onChange={this.markComplete} /> {' '} */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> {' '}
                    { title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
Todoitem.propTypes = {
    task: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired

}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default Todoitem
