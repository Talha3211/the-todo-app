import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks for API calls
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://reqres.in/api/users');
    const data = await response.data;
    return data;
});

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    const data = await response.data;
    return data;
});

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const response = await axios.post('https://reqres.in/api/login', credentials);
        const data = response.data;
        return data;
    } catch (err) {
        return rejectWithValue(err.response.data.error); // Return the error message from the server
    }
});

export const register = createAsyncThunk('auth/register', async (credentials, { rejectWithValue }) => {
    try {
        const response = await axios.post('https://reqres.in/api/register', credentials);
        const data = response.data;
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.error); // Return the error message from the server
    }
});

// Slice
const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        user: null,
        status: 'idle',
        error: null,
        successMessage: null, // To store success messages
    },
    reducers: {
        clearUser: (state) => {
            state.user = null;
            state.status = 'idle';
            state.error = null;
            state.successMessage = null; // Clear success message
        },
        clearMessage:(state)=>{
            state.status='idle'
            state.successMessage=null
            state.error = null;


        }
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.users = action.payload.data;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchUserById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.data;
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.successMessage = null; // Clear previous success messages
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.error = null;
                state.successMessage = "Login successful!"; // Set success message
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                state.successMessage = null; // Clear success message on error
            })
            .addCase(register.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.successMessage = null; // Clear previous success messages
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.error = null;
                state.successMessage = "registeration successful!"; // Set success message
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                state.successMessage = null; // Clear success message on error
            });
    }
});

export const { clearUser ,clearMessage} = userSlice.actions;
export default userSlice.reducer;
