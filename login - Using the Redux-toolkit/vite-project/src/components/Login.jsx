import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';

function Login () {

    const dispatch = useDispatch();

    function add () {
        const name = document.querySelector('.name').value;
        const age = document.querySelector('.age').value;
        const email = document.querySelector('.email').value;

        dispatch(addUser({name:name, age:age, email:email}))
    }

    return (
        <div>
            <input placeholder='Enter the name' type='text' className='name' /><br></br><br></br>
            <input placeholder='Enter the age' type='number' className='age' /><br></br><br></br>
            <input type="text" placeholder='Enter the email' className='email' /><br></br><br></br>
            <a href="#" onClick={() => add()}>Submit</a><br></br><br></br>
        </div>
    )
}

export default Login