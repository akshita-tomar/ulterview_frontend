import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const sign_in_slice = createAsyncThunk("sign_in_slice", async ({ email, password }, thunkAPI) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": email,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}signIn`, requestOptions)
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

export const signInSlice = createSlice({
    name: "signInSlice",
    initialState: {
        data: [],
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: null
    },
    reducers: {
        clear_sign_in_slice: (state) => {
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
            .addCase(sign_in_slice.pending, (state) => {
                state.isLoading = true
            })
            .addCase(sign_in_slice.fulfilled, (state, action) => {
                state.data = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(sign_in_slice.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
                state.isLoading = false
            })
    }
})
export const { clear_sign_in_slice } = signInSlice.actions
export default signInSlice.reducer

