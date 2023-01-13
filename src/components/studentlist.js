import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveStudents,
  //findTutorialsByTitle,
 // deleteAllTutorials,
} from "../redux/slices/studentSlice";
import { Link } from "react-router-dom";

class StudentsList extends Component {
  constructor(props) {
    super(props);
   // this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveStudent = this.setActiveStudent.bind(this);
  //  this.findByTitle = this.findByTitle.bind(this);
  //  this.removeAllTutorials = this.removeAllTutorials.bind(this);

    this.state = {
      currentStudent: null,
    //  currentId: -1
    //  searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveStudents();
  }
/*
  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }
*/
  refreshData() {
    this.setState({
      currentStudent: null,
     // currentId: -1,
    });
  }

  setActiveStudent(student) {
    this.setState({
      currentStudent: student,
    //  currentId: id,
    });
  }
/*
  removeAllTutorials() {
    this.props
      .deleteAllTutorials()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByTitle() {
    this.refreshData();

    this.props.findTutorialsByTitle({ title: this.state.searchTitle });
  }
*/
  render() {
    const {  currentStudent } = this.state;
    const { students } = this.props;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
             // value={searchTitle}
            //  onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
             //   onClick={this.findByTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Tutorials List</h4>

          <ul className="list-group">
            {students &&
              students.map((student) => (
                <li
               //   className={
                //    "list-group-item " +
                  //  (id === currentId ? "active" : "")
                //  }
                  onClick={() => this.setActiveStudent(student)}
                //  key={id}
                >
                  {student.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            //onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentStudent ? (
            <div>
              <h4>Students</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentStudent.name}
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                </label>{" "}
                {currentStudent.email}
              </div>
              <div>
                <label>
                  <strong>Roll no:</strong>
                </label>{" "}
                {currentStudent.rollno}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentStudent.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/edit-student/" + currentStudent.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students.students,
  };
};

export default connect(mapStateToProps, {
    retrieveStudents
  //findTutorialsByTitle,
//  deleteAllTutorials,
})(StudentsList);
