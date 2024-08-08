import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const hr_round_questions = createAsyncThunk("hr_round_questions", async ({ id }, thunkAPI) => {
    try {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

        const requestOptions = {
            method: "GET",
            redirect: "follow",
            headers: myHeaders
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}getHrRoundQuestions?seriesId=${id}`, requestOptions)
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

export const hrRoundQuestions = createSlice({
    name: "hrRoundQuestions",
    initialState: {
        message: {},
        isError: false,
        isSuccess: false,
        isLoading: false,
        error: null
    },
    reducers: {
        clear_hr_round_question_state: (state) => {
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
            .addCase(hr_round_questions.pending, (state) => {
                state.isLoading = true
            })
            .addCase(hr_round_questions.fulfilled, (state, action) => {
                state.message = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(hr_round_questions.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
            })
    }
})
export const { clear_hr_round_question_state } = hrRoundQuestions.actions
export default hrRoundQuestions.reducer