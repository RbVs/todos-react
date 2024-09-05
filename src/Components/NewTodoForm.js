import React, {useState} from "react";


function NewTodoForm(props){
    // Create state variables for the description and assigned fields
    const [description, setDescription] = useState("");
    const [assigned, setAssigned] = useState("");

    const submitTodo = (event) => {
        event.preventDefault();
        if (description !== "" && assigned !== "") {
            props.addTodo(description, assigned);
            // Clear the form fields
            setDescription("");
            setAssigned("");
        }
    }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label"> Assigned</label>
                    <input type="text" className="form-control" required
                           onChange={ event => setAssigned(event.target.value) }
                           value={ assigned }/>
                </div>
                <div className="mb-3">
                    <label className="form-label"> Description</label>
                    <textarea className="form-control" rows={ 3 } required
                              onChange={ event => setDescription(event.target.value) }
                              value={ description }/>
                </div>
                <button className="btn btn-primary mt-3" onClick={ submitTodo }>Add Todo</button>
            </form>
        </div>
    );
}

export default NewTodoForm;