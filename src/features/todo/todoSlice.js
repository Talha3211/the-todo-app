import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, query, onSnapshot, deleteDoc, doc, updateDoc, where } from 'firebase/firestore';
import { auth, db } from '../../firebase';

// Async thunk for adding a new todo
export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (title, { rejectWithValue }) => {

    try {
        const user= auth.currentUser
        if(!user) throw new Error("User is not aunthenticated")

      const newTodo = {
        title,
        completed: false,
        created_at: new Date(),
        userId:user.uid
      };
      const docRef = await addDoc(collection(db, 'todos'), newTodo);
      return { ...newTodo, id: docRef.id }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for deleting a todo
export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, 'todos', id));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for toggling a todo's completed status
export const toggleTodo = createAsyncThunk(
  'todos/toggleTodo',
  async (todo, { rejectWithValue }) => {
    try {
      const todoDoc = doc(db, 'todos', todo.id);
      await updateDoc(todoDoc, { completed: !todo.completed });
      return { id: todo.id, completed: !todo.completed };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetching todos from Firestore

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
        const user = auth.currentUser;
        if(!user) throw new Error('User is not auntheticated')

      const q = query(collection(db, 'todos'),where("userId","==",user.uid));
      return new Promise((resolve, reject) => {
        onSnapshot(q, (querySnapshot) => {
          const todos = [];
          querySnapshot.forEach((doc) => {
            todos.push({ ...doc.data(), id: doc.id });
          });
          resolve(todos);
        }, (error) => reject(rejectWithValue(error.message)));
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice definition
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    loading: false,
    addTodoLoading:false,
    fetchTodoLoading:false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.pending, (state) => {
        state.addTodoLoading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.addTodoLoading = false;
        state.todos.push(action.payload); // Add the new todo to the state
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetching todos
      .addCase(fetchTodos.pending, (state) => {
        state.fetchTodoLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.fetchTodoLoading = false;
        state.todos = action.payload; // Set the todos in the state
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.fetchTodoLoading = false;
        state.error = action.payload;
      })

      // Deleting a todo
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload); // Remove the deleted todo
      })
      
      // Toggling a todo's completed status
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index].completed = action.payload.completed; // Update the todo's completed status
        }
      });
  },
});

export default todoSlice.reducer;
