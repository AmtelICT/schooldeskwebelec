/*
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent(state, action) {
      state.students.push(action.payload);
    },
    deleteStudent(state, action) {
      state.students = state.students.filter((student) => student.id !== action.payload.id);
    },
  },
});
*/
import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import StudentDataService from "../../services/student.service";



//export const studentAdapter = createEntityAdapter();
//export const studentSelectors = studentAdapter.getSelectors((state) => state.students);

/*
const initialState = {
    students: [],
  };
*/
//const initialState = [];

export const createStudent = createAsyncThunk(
  "students/create",
  async ({ name, email, rollno }) => {
    const res = await StudentDataService.create({ name, email, rollno });
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

export const updateStudent = createAsyncThunk(
  "students/update",
  async ({ id, data }) => {
    const res = await StudentDataService.update(id, data);
    return res.data;
  }
);

export const deleteStudent = createAsyncThunk(
  "students/delete",
  async ({ id }) => {
    await StudentDataService.delete(id);
    return { id };
  }
);
/*
export const deleteAllTutorials = createAsyncThunk(
  "tutorials/deleteAll",
  async () => {
    const res = await TutorialDataService.deleteAll();
    return res.data;
  }
);

export const findTutorialsByTitle = createAsyncThunk(
  "tutorials/findByTitle",
  async ({ title }) => {
    const res = await TutorialDataService.findByTitle(title);
    return res.data;
  }
);
*/
const studentSlice = createSlice({
  name: 'students',
  initialState: {
    students: [],
   
  },

/*
  extraReducers:
    {
      
    [createStudent.fulfilled]: (state, action) => {
      state.students.push(action.payload);
    },
    [retrieveStudents.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updateStudent.fulfilled]: (state, action) => {
      const index = state.students.findIndex(student => student.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteStudent.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.students.splice(index, 1);
    },
    /*
    [deleteAllTutorials.fulfilled]: (state, action) => {
      return [];
    },
    [findTutorialsByTitle.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    
  },
  */

  extraReducers: (builder) => {
    builder
      .addCase(createStudent.fulfilled, (state, action) => {
        state.students.students.push(action.payload);
    })
     // .addCase(retrieveStudents.fulfilled, (state, action) => {
    //    return [...action.payload];   
   //   })

      .addCase(retrieveStudents.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully!");
        return {...state, students: payload };
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
       // state.students = state.students.filter((student) => student.id !== action.payload.id);
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state.students.splice(index, 1);
      })
      
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.students.findIndex(student => student.id === action.payload.id);
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      })
     
  
  }

});



console.log(studentSlice);

//export const { addStudent,  } = studentSlice.actions;

//export default studentSlice.reducer;

//export const allstudents= state => state.student.students;

const { reducer } = studentSlice;
export default reducer;
