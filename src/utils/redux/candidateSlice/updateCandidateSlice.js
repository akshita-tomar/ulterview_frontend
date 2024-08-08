import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const update_candidate = createAsyncThunk("update_candidate", async ({ username, email, profile, experience, id, languageId }, thunkAPI) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

        const raw = JSON.stringify({
            "username": username,
            "email": email,
            "profile": profile,
            "experience": experience,
            "languageId": languageId
        })

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}updateCandidate?candidateId=${id}`, requestOptions)
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

export const updateCandidateSlice = createSlice({
    name: "updateCandidate",
    initialState: {
        message: {},
        isSuccess: false,
        isError: false,
        isLoading: false,
        error: null
    },
    reducers: {
        clear_update_candidate_slice: (state) => {
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
            .addCase(update_candidate.pending, (state) => {
                state.isLoading = true
            })
            .addCase(update_candidate.fulfilled, (state, action) => {
                state.message = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(update_candidate.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
            })
    }
})
export const { clear_update_candidate_slice } = updateCandidateSlice.actions
export default updateCandidateSlice.reducer