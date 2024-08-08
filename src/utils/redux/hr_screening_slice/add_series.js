import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const hr_add_series = createAsyncThunk("hr_add_series", async ({ questionSeries }, thunkAPI) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

        const raw = JSON.stringify({
            "questionSeries": questionSeries
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}addQuestionSeries`, requestOptions)
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

export const hrAddSeries = createSlice({
    name: "hrAddSeries",
    initialState: {
        message: {},
        isError: false,
        isSuccess: false,
        isLoading: false,
        error: null
    },
    reducers: {
        clear_hr_add_series_state: (state) => {
            state.message = {}
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.error = null
            return state
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(hr_add_series.pending, (state) => {
                state.isLoading = true
            })
            .addCase(hr_add_series.fulfilled, (state, action) => {
                state.message = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(hr_add_series.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
            })
    }
})
export const { clear_hr_add_series_state } = hrAddSeries.actions
export default hrAddSeries.reducer