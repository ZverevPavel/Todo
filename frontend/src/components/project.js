import React from 'react'

const ProjectItem = ({item}) => {
    return (
        <tr>
            <td>{item.title}</td>
            <td>{item.repo_link}</td>
            <td>{item.users}</td>
        </tr>
    )
}

const ProjectList = ({items}) => {
    return (
        <table>
            <tr>
                <th>TITLE</th>
                <th>REPO_LINK</th>
                <th>USERS</th>
            </tr>
            {items.map((item) => <ProjectItem item={item} />)}
        </table>
    )
}

export default ProjectList
