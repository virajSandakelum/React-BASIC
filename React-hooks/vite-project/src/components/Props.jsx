import React from 'react'

function Props (props) {
    return (
        <div>{props.title}</div>
    )
}

const userRoles = {
    Admin: 'admin',
    USER: 'user'
}


export { userRoles };

export default Props 