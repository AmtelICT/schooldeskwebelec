import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../configs/firebase";

const initialState = {
   
    students: [],
  };


  export const createStudent = createAsyncThunk(
    "students/create",
    async ({ name, email, rollno }) => {
     // const res = await StudentDataService.create({ name, email, rollno });
     const res = await addDoc(collection(db, "todos")) ;
      return res.data;
    }
  );  

  export const retrieveStudents = createAsyncThunk(
    "students/retrieve",
    async () => {
      const res = await StudentDataService.getAll();
      return res.data;
    }
  );