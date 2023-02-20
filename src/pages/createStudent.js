import React, { useState } from 'react';
import '../css/page/newUser.css'
import { useDispatch } from 'react-redux';
//import {addStudent} from '../redux/slices/studentSlice';
//import { createStudent } from "../redux/slices/studentSlice";
import {addStudent} from '../redux/slices/studentsSlice';
function CreateStudent(){
    
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [rollno, setrollno] = useState('');

    const dispatch = useDispatch();

    const addstudentHandler = (e) => {
        e.preventDefault();
        dispatch(addStudent({ name, email, rollno }));
      };
    
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Student</h1>
      <form className="newUserForm">
            <div className="newUserItem">
                <label>Name</label>
                <input 
                name="name"
                type="text"
                placeholder="mohamed"
                value ={name}
                onChange={(e) => setname(e.target.value)}

                />
            </div>
            <div className="newUserItem">
                <label >Email</label>
                <input
                name ="email"
                type="email"
                placeholder="mohamed@gmail.com" 
                value ={email}
                onChange={(e) => setemail(e.target.value)}
        
                />
            </div>

            <div className="newUserItem">
                <label>Roll No.</label>
                <input 
                name="rollno"
                type="Number" 
                placeholder="0089" 
                value ={rollno}
                onChange={(e) => setrollno(e.target.value)}
        
                
                />
            </div>
            
            <button className="newUserButton" type="submit" onClick={ addstudentHandler} >Create</button>
      </form>
    </div>

  );

}

export default CreateStudent;