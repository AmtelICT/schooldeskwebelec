import http from "../http-common";

class StudentDataService {
  getAll() {
    return http.get("/students");
  }

  get(id) {
    return http.get(`/students/${id}`);
  }

  create(data) {
    return http.post("/students/create-student", data);
  }

  update(id, data) {
    return http.put(`/students/update-student/${id}`, data);
  }

  delete(id) {
    return http.delete(`/students/delete-student/${id}`);
  }
/*
  deleteAll() {
    return http.delete(`/delete-student`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }*/
}

export default new StudentDataService();