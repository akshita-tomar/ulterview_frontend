import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const delete_hr_round_questions = createAsyncThunk("delete_hr_round_questions", async ({ id, quetionId }, thunkAPI) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

        const raw = JSON.stringify({
            "seriesId": id,
            "questionId": quetionId
        });

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}deleteHrRoundQuestion`, requestOptions)
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

export const deleteHrRoundQuestions = createSlice({
    name: "deleteHrRoundQuestions",
    initialState: {
        message: {},
        isError: false,
        isSuccess: false,
        isLoading: false,
        error: null
    },
    reducers: {
        clear_hr_deleted_question_state: (state) => {
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
            .addCase(delete_hr_round_questions.pending, (state) => {
                state.isLoading = true
            })
            .addCase(delete_hr_round_questions.fulfilled, (state, action) => {
                state.message = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(delete_hr_round_questions.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
            })
    }
})
export const { clear_hr_deleted_question_state } = deleteHrRoundQuestions.actions
export default deleteHrRoundQuestions.reducer