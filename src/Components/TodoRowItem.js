function TodoRowItem(props){
    return (
        <tr onClick={ () => props.deleteTodo(props.rowNumber) }>
            <th scope="row">{ props.rowNumber }</th>
            <td>{ props.description }</td>
            <td>{ props.assigned }</td>
        </tr>
    );
}

export default TodoRowItem