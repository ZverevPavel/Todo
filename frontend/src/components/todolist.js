import React from 'react'

const TodoItem = ({item}) => {
    return (
        <tr>
            <td>{item.text}</td>
            <td>{item.create_at}</td>
            <td>{item.update_at}</td>
            <td>{item.active}</td>
            <td>{item.user}</td>
            <td>{item.project}</td>
        </tr>
    )
}

const TodoList = ({items}) => {
    return (
        <table>
            <tr>
                <th>TEXT</th>
                <th>CREATE_AT</th>
                <th>UPDATE_AT</th>
                <th>ACTIVE</th>
                <th>USER</th>
                <th>PROJECT</th>
            </tr>
            {items.map((item) => <TodoItem item={item} />)}
        </table>
    )
}

export default TodoList
