import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

//import { connect } from "react-redux";
import { useSelector } from 'react-redux';
//import {allstudents} from '../redux/slices/studentSlice';
import {fetchStudents} from '../redux/slices/studentsSlice';
//import {studentSelectors, retrieveStudents} from '../redux/slices/studentSlice';  


function StudentList() {
//export default function StudentList() {
 /*class StudentList extends Component {
        constructor(props) {
          super(props);
          this.state = {
            name: "",
            email: "",
            rollno: "",
          };
        }

        componentDidMount() {
            this.props.retrieveStudents();
          }
           
        render(){
            const {students} = this.props;    
       */        
    //const testList = useSelector(retrieveStudents({ name, email, rollno }));  
    const studentList = useSelector((state) => state.students.students);
   //const studentList = useSelector(allstudents);
    //const allstudents = useSelector(studentSelectors.selectEntities);
  //  const studentswote= [allstudents]
 return (
    
   <TableContainer component={Paper}>
    <h1 className="newUserTitle">Students</h1>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell align="right">Student Name</TableCell>
           <TableCell align="right">Student Email</TableCell>
           <TableCell align="right">Student Roll No.</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {studentList.map((student) => (
         //  <TableRow key={row.number}>
        //     <TableCell component="th" scope="row">
          //     {row.number}
          //   </TableCell>
          <TableRow >
             <TableCell align="right">{student.name}</TableCell>
             <TableCell align="right">{student.email}</TableCell>
             <TableCell align="right">{student.rollno}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
 );
}
//}

 export default StudentList;

 /*
const mapStateToProps = (state) => {
  return {
    students: state.students.students,
  };
};

export default connect(mapStateToProps, {
  retrieveStudents,
 // findTutorialsByTitle,
 // deleteAllTutorials,
})(StudentList);
*/