import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const get_hr_round_series = createAsyncThunk("get_hr_round_series", async (thunkAPI) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}getHrRoundSeries`, requestOptions)
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

export const getHrSeriesRound = createSlice({
    name: "getHrSeriesRound",
    initialState: {
        data: [],
        isSuccess: false,
        isError: false,
        isLoading: false,
        error: false
    },
    reducers: {
        clear_hr_series_state: (state) => {
            state.data = []
            state.isSuccess = false
            state.isError = false
            state.isLoading = false
            state.error = null
            return state
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_hr_round_series.pending, (state) => {
                state.isLoading = true
            })
            .addCase(get_hr_round_series.fulfilled, (state, action) => {
                state.data = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(get_hr_round_series.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
            })
    }
})
export const { clear_hr_series_state } = getHrSeriesRound.actions
export default getHrSeriesRound.reducer