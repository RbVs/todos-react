import './App.css';
import TodoTable from './Components/TodoTable';
// import React and useState to update the state of the todos
import React, {useState} from "react";
import NewTodoForm from "./Components/NewTodoForm";

function App(){

    const [showAddTodoForm, setShowAddTodoForm] = useState(false);

    const [todos, setTodos] = useState([
        {rowNumber: 1, description: "Buy groceries", assigned: "John Doe"},
        {rowNumber: 2, description: "Walk the dog", assigned: "Jane Doe"},
        {rowNumber: 3, description: "Do the laundry", assigned: "John Doe"},
        {rowNumber: 4, description: "Wash the car", assigned: "John Doe"},
        {rowNumber: 5, description: "Mow the lawn", assigned: "Jane Doe"},
        {rowNumber: 6, description: "Take out the trash", assigned: "John Doe"},
        {rowNumber: 7, description: "Clean the house", assigned: "Jane Doe"},
        {rowNumber: 8, description: "Water the plants", assigned: "John Doe"},
    ]);

    const addTodo = (description, assigned) => {
        // add a unique rowNumber to the new todo item
        let rowNumber = 0;
        if (todos.length > 0) {
            rowNumber = todos[todos.length - 1].rowNumber + 1;
        } else {
            rowNumber = 1;
        }
        // Create a new todo item with a rowNumber one greater than the last todo item
        const newTodo = {rowNumber: rowNumber, description: description, assigned: assigned};
        // Add the new todo item to the todos array
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (rowNumber) => {
        let filtered = todos.filter(function (value){
            return value.rowNumber !== rowNumber;
        })

        setTodos(filtered);
    };

    return (
        <div className="mt-5 container">
            <div className="card">
                <div className="card-header">
                    Your Todo's
                </div>
                <div className="card-body">
                    <TodoTable todos={ todos } deleteTodo={ deleteTodo }/>
                    <button className="btn btn-primary" onClick={ () => {
                        setShowAddTodoForm(!showAddTodoForm);
                    } }>
                        { showAddTodoForm ? "Close" : "Add Todo" }
                    </button>
                    { showAddTodoForm &&
                        <NewTodoForm addTodo={ addTodo }/> }
                </div>
            </div>
        </div>
    );
}

export default App;
