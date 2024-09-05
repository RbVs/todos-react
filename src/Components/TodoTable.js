import TodoRowItem from './TodoRowItem';

function TodoTable(props){
    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
            </tr>
            </thead>
            <tbody>
            {
                props.todos.map((todo) => {
                    return <TodoRowItem
                        key={ todo.rowNumber }
                        rowNumber={ todo.rowNumber }
                        description={ todo.description }
                        assigned={ todo.assigned }
                        deleteTodo={ props.deleteTodo }
                    />
                })
            }
            </tbody>
        </table>
    );
}

export default TodoTable;