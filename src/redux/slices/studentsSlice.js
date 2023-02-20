import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import dayjs from 'dayjs';
import { studentService } from "../../services/studentService";

// Redux thunk async
export const fetchStudents = createAsyncThunk(
  'students/fetchStudents',
  async (id) => {
    const students = await studentService.getTodos(id);
    return students;
  }
);
/*
export const subscribeTodosChange = createAsyncThunk(
  'todos/subscribeTodosChange',
  async (uid, { dispatch }) => {
    todoService.subscribeTodosChange(uid, (snapshot) => {
      // prevent add 2x
      if (snapshot.metadata.hasPendingWrites) return;

      snapshot.docChanges().forEach((change) => {
        const { type } = change;
        const data = change.doc.data();

        const todo = {
          id: change.doc.id,
          ...data,
          createdAt: data.createdAt.toDate()
        };

        if (type == "added") {
          dispatch(addTodo(todo));
        }
      });
    });
  }
);
*/
export const fetchAddStudent = createAsyncThunk(
  'students/fetchAddstudent',
  async (data, { dispatch }) => {
    data.completed = false;
   // data.date = data.date ? dayjs(data.date).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD');
    data.createdAt = new Date();

    try {
      dispatch(addStudent({
        ...data,
        id: null
      }));

      const { id } = await studentService.addStudent(data);

      dispatch(updateStudent({ id: null, student: { ...data, id } }));
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchUpdateStudent = createAsyncThunk(
  'students/fetchUpdateStudent',
  async (data, { dispatch }) => {
    const { id, student } = data;
    dispatch(updateStudent(data));

    await studentService.updateStudent(id, student);
  }
);

export const fetchRemoveStudent = createAsyncThunk(
  'students/fetchRemoveStudent',
  async (id, thunkApi) => {
    thunkApi.dispatch(removeStudent({ id }));
    const res = await studentService.removeStudent(id);
  }
);

const initialState = [];

const studentsSlice = createSlice({
  name: "students",
  initialState,
 //initialState: {
 //   students: [],
   
  
  reducers : {
    replaceState(state, { payload }) {
      return payload;
    },
 //   addStudent(state, action) {
    //  const { id, name, email, rollno } = action.payload;
   //   state.push(action.payload);
/*
      state.students.push({
        id,
        name,
        email,
        rollno,
     //   createdAt,
        completed: false,
      });*/
  //  },
    updateStudent(state, action) {
      const { id, student } = action.payload;
      const index = state.findIndex(item => item.id == id);
      state[index] = { ...state[index], ...student };
    },
    removeStudent(state, action) {
      const { id } = action.payload;
      return state.filter(item => item.id != id);
    }
  },
  extraReducers: builder => {
    builder
    .addCase(fetchStudents.fulfilled, (state, action) => {
      return action.payload;
    })

    .addCase(addStudent.completed, (state, action) => {
        state.push(action.payload);
    });
  }
});

export const { addStudent, updateStudent, removeStudent, replaceState  } = studentsSlice.actions;

/*
export const selector = {
  getTodos: (date) => {
    return (state) => {
      const todos = state.todos.filter(item => {
        return date == item.date;
      });

      return todos;
    };
  },
  getAllTodo: (state) => state.todos
};
*/
//const { reducer } = studentsSlice;
//export default reducer;


export default studentsSlice.reducer;