import React from 'react';
import API, {OPTION_JSON} from '../lib/api';
import TodosComponent from '../components/todos/todos.jsx';

class Todos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            name: ''
        }

        this.handleTodo = this.handleTodo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }


    componentDidMount() { 
        this.getAllTodos();
    }

    getAllTodos () {
        API.get('api/todos', OPTION_JSON)
        .then(res => {
            this.setState({todos: res.data})
        } 
        )
        .catch(err => {
            console.error(err);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const body = {
            'data': {
                'name': this.state.name
            }
        };
        const bodyString = JSON.stringify(body);
        API.post('api/todos', bodyString, OPTION_JSON)
        .then(res => {
            this.getAllTodos();
        }
        );
    }

    handleTodo(e) {
        this.setState({name: e.target.value})
    }

    handleDelete(id) {
        API.delete('api/todos/' + id,OPTION_JSON)
        .then(() => {
            this.getAllTodos();
        }
        );
    }

    handleComplete(id, completed) {
        const body = {
            'data': {
                'completed': !completed
            }
        };
        const bodyString = JSON.stringify(body);
        API.put('api/todos/' + id, bodyString, OPTION_JSON)
        .then(() => {
            this.getAllTodos();
        }
        );
    }


    render () {
        return (
            <TodosComponent
                todos={this.state.todos}
                onHandleTodo={this.handleTodo}
                onHandleSubmit={this.handleSubmit}
                onHandleDelete={this.handleDelete}
                onHandleComplete={this.handleComplete}
            />
        )
    }

}

export default Todos;

