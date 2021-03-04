import React from 'react';
import { SignInBtn } from '../../components';
import './style.css';

export default function CreatePost(){
    return (
        <div className='createPost'>
             <SignInBtn /> 
             {/* style property allows there to be spacing between button and p tag */}
             <p style={{ marginLeft: "12px"}}>To connect with others</p>
        </div>
    )
}