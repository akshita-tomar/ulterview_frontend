import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const get_candidates = createAsyncThunk("get_candidates", async ({ page, search, selectedField, selectedStatus }, thunkAPI) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}getCandidates?page=${page}&limit=10&search=${search}&selectedField=${selectedField}&selectedStatus=${selectedStatus}`, requestOptions)
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

export const getCandidates = createSlice({
    name: "getCandidates",
    initialState: {
        data: [],
        isSuccess: false,
        isLoading: false,
        isError: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_candidates.pending, (state) => {
                state.isLoading = true
            })
            .addCase(get_candidates.fulfilled, (state, action) => {
                state.data = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(get_candidates.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
            })
    }
})

export default getCandidates.reducer