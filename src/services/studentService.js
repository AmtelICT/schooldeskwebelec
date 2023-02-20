import { getDocs, collection, query, where, addDoc, doc, getDoc, updateDoc, deleteDoc, orderBy, documentId, onSnapshot } from "firebase/firestore";
import { db } from "../configs/firebase";

const studentRef = collection(db, "students");

const getStudents = async (uid) => {
  const queryStudents = query(studentRef, orderBy(documentId()), where('uid', '==', uid));

  const querySnapshot = await getDocs(queryStudents);

  const students = [];
  querySnapshot.forEach((doc) => {
    const { name, email, rollno, createdAt } = doc.data();

    students.push({
      id: doc.id,
      name,
      email,
      rollno,
    //  createdAt: createdAt?.toDate()
    });
  });

  return students;
};
/*
const subscribeTodosChange = (uid, callback) => {
  const queryTodos = query(todosRef, orderBy(documentId()), where('uid', '==', uid));

  return onSnapshot(queryTodos, callback);
};

const subscribeTodoChange = (id, callback) => {
  const queryTodos = doc(db, 'todos', id);
  return onSnapshot(queryTodos, callback);
};

const getTodosByDate = async (date) => {
  const q = query(todosRef, where("date", "==", date));
  const querySnapshot = await getDocs(q);

  const todos = [];
  querySnapshot.forEach(doc => {
    const { task, description, completed, time } = doc.data();

    todos.push({
      id: doc.id,
      task,
      description,
      completed,
      time: time.toDate()
    });
  });

  return todos;
};

const getTodoById = async (id) => {
  const ref = doc(db, "todos", id);
  const document = await getDoc(ref);
  if (!document.exists()) return null;
  return document.data();
};
*/
const addStudent = async (data) => {
  const res = await addDoc(studentRef, data);
  return res;
};

const updateStudent = async (id, data) => {
  const ref = doc(db, "students", id);

  await updateDoc(ref, data);
};

const removeStudent = async (id) => {
  await deleteDoc(doc(db, "students", id));
};

export const studentService = {
  getStudents,
  //subscribeTodosChange,
  //subscribeTodoChange,
 // getTodosByDate,
  //getTodoById,
  addStudent,
  updateStudent,
  removeStudent
};