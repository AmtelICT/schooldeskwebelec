import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStudent, deleteStudent } from "../redux/slices/studentSlice";
import StudentDataService from "../services/student.service";
import { withRouter } from '../common/with-router';

class Studentdetail extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeRollno = this.onChangeRollno.bind(this);
    this.getStudent= this.getStudent.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.removeStudent = this.removeStudent.bind(this);

    this.state = {
      currentStudent: {
        id: null,
        name: "",
        email: "",
        rollno: "",
        published: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getStudent(this.props.router.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStudent: {
          ...prevState.currentStudent,
          name: name,
        },
      };
    });
  }

  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStudent: {
          ...prevState.currentStudent,
          email: email,
        },
      };
    });
  }

  onChangeRollno(e) {
    const rollno = e.target.value;

    this.setState(function (prevState) {
      return {
        currentStudent: {
          ...prevState.currentStudent,
          rollno: rollno,
        },
      };
    });
  }

  getStudent(id) {
    StudentDataService.get(id)
      .then((response) => {
        this.setState({
            currentStudent: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStatus(status) {
    var data = {
      id: this.state.currentStudent.id,
      name: this.state.currentStudent.name,
      email: this.state.currentStudent.email,
      rollno: this.state.currentStudent.rollno,
      published: status,
    };

    this.props
      .updateStudent({ id: this.state.currentStudent.id, data })
      .unwrap()
      .then((reponse) => {
        console.log(reponse);

        this.setState((prevState) => ({
          currentStudent: {
            ...prevState.currentStudent,
            published: status,
          },
        }));

        this.setState({ message: "The status was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContent() {
    this.props
      .updateStudent({ id: this.state.currentStudent.id, data: this.state.currentStudent })
      .unwrap()
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The tutorial was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeStudent() {
    this.props
      .deleteStudent({ id: this.state.currentStudent.id })
      .then(() => {
        this.props.router.navigate('/studentlist');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentStudent } = this.state;

    return (
      <div>
        {currentStudent ? (
          <div className="edit-form">
            <h4>Tutorial</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentStudent.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentStudent.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">roll</label>
                <input
                  type="number"
                  className="form-control"
                  id="rollno"
                  value={currentStudent.rollno}
                  onChange={this.onChangeRollno}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentStudent.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentStudent.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.removeStudent}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateContent}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateStudent, deleteStudent })(withRouter(Studentdetail));
