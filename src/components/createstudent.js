import React, { Component } from "react";
import { connect } from "react-redux";
//import { createStudent } from "../redux/slices/studentSlice";
import { addStudent } from "../redux/slices/studentsSlice";
import '../css/page/newUser.css'
class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeRollno = this.onChangeRollno.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
    this.newStudent = this.newStudent.bind(this);

    this.state = {
      id: null,
      name: "",
      email: "",
      rollno: "",
   //   published: false,
    //  submitted: false,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeRollno(e) {
    this.setState({
      rollno: e.target.value,
    });
  }

  saveStudent() {
    const { name,email, rollno} = this.state;

    this.props
      .addStudent({ name,email, rollno })
      .unwrap()
      .then((data) => {
        this.setState({
          id: data.id,
          name: data.name,
          email: data.email,
          rollno: data.rollno,
         // published: data.published,
         // submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newStudent() {
    this.setState({
      id: null,
      name: "",
      email: "",
      rollno: "",
    //  published: false,
    //  submitted: false,
    });
  }

  render() {
    return (
     <div className="newUser">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newStudent}>
              Add New
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="roll no">Roll Number</label>
              <input
                type="Number"
                className="form-control"
                id="rollno"
                required
                value={this.state.rollno}
                onChange={this.onChangeRollno}
                name="rollno"
              />
            </div>

            <button onClick={this.saveStudent} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { addStudent })(AddStudent);
