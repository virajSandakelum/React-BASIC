import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
import {colorFun} from '../store/ColorChangeSlice'

function Login () {

    const dispatch = useDispatch();

    function add () {
        const name = document.querySelector('.name').value;
        const age = document.querySelector('.age').value;
        const email = document.querySelector('.email').value;

        dispatch(addUser({name:name, age:age, email:email}))
    }


    function color(){
        const color = document.querySelector('#color');
        dispatch(colorFun(color));
    }


    return (
        <div>
            <input placeholder='Enter the name' type='text' className='name' /><br></br><br></br>
            <input placeholder='Enter the age' type='number' className='age' /><br></br><br></br>
            <input type="text" placeholder='Enter the email' className='email' /><br></br><br></br>
            <a href="#" onClick={() => add()}>Submit</a><br></br><br></br>


            <input type="text" name="" id="color" placeholder='Color' /><br></br>
            <a href="#" className='color' onClick={()=>color()}>Color Change</a>
        </div>
    )
}

export default Login
