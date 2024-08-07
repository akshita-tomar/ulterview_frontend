import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const get_single_candidate_data = createAsyncThunk("get_single_candidate_data", async ({ id }, thunkAPI) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}getSingleCandidate?candidateId=${id}`, requestOptions)
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

export const getSingleCandidateSlice = createSlice({
    name: "getSingleCandidateSlice",
    initialState: {
        data: [],
        isSuccess: false,
        isError: false,
        isLoading: false,
        error: null
    },
    reducers: {
        clear_get_single_candidate_slice: (state) => {
            state.data = []
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.error = null
            return state
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_single_candidate_data.pending, (state) => {
                state.isLoading = true
            })
            .addCase(get_single_candidate_data.fulfilled, (state, action) => {
                state.data = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(get_single_candidate_data.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
            })
    }
})
export const { clear_get_single_candidate_slice } = getSingleCandidateSlice.actions
export default getSingleCandidateSlice.reducer