import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const get_hr_and_developer_details_slice = createAsyncThunk("get_hr_and_developer_details_slice", async ({ role, search, page, limit = 10 }, thunkAPI) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}get-HR-or-Developer-Details?role=${role}&limit=${limit}&page=${page}&search=${search}`, requestOptions)
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

export const getHrAndDeveloperDetails = createSlice({
    name: "getHrAndDeveloperDetails",
    initialState: {
        data: [],
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_hr_and_developer_details_slice.pending, (state) => {
                state.isLoading = true
            })
            .addCase(get_hr_and_developer_details_slice.fulfilled, (state, action) => {
                state.data = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(get_hr_and_developer_details_slice.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
                state.isLoading = false
            })
    }
})

export default getHrAndDeveloperDetails.reducer