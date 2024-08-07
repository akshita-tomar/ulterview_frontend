import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const register_slice = createAsyncThunk("register_slice", async ({ userName, email, password, role, experience, profile }, thunkAPI) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

        const raw = JSON.stringify({
            "userName": userName,
            "email": email,
            "password": password,
            "role": role,
            "experience": experience,
            "profile": profile
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}signUp`, requestOptions)
        if (!response.ok) {
            const errorMessage = await response.json();
            if (errorMessage) {
                throw new Error(errorMessage.message);
            }
        }
        const result = await response.json();
        return result;
    } catch (error) {
        return thunkAPI.rejectWithValue({
            message: error.message,
        });
    }
})

const registerSlice = createSlice({
    name: "registerSlice",
    initialState: {
        data: [],
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: null
    },
    reducers: {
        clear_register_slice: (state) => {
            state.data = []
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.error = null
            return state
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register_slice.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register_slice.fulfilled, (state, action) => {
                state.data = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(register_slice.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
                state.isLoading = false
            })
    }
})
export const { clear_register_slice } = registerSlice.actions
export default registerSlice.reducer