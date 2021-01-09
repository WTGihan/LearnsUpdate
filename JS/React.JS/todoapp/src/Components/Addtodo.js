import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Addtodo extends Component {
    //component state
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    // onChange = (e) => this.setState({ title: e.target.value});
    onChange = (e) => this.setState({ [e.target.name]: e.target.value}); // Can use more input fields

    render() {
        return (
            <form action="#" onSubmit={this.onSubmit} style={{display: 'flex'}} >
                <input 
                    type="text" 
                    name="title" 
                    style={{flex: '10', padding: '5px'}} 
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="submit" 
                    className="btn" 
                    style={{flex:'1'}} 
                />
            </form>
        )
    }
}

Addtodo.propTypes = {
    addTodo: PropTypes.func.isRequired

}

export default Addtodo
