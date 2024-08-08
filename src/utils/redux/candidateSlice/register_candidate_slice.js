import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const register_candidate = createAsyncThunk("register_candidate", async ({ username, email, profile, experience, languageId }, thunkAPI) => {
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
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}registerCandidate`, requestOptions)
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

export const registerCandidate = createSlice({
    name: "registerCandidate",
    initialState: {
        data: {},
        isError: false,
        isSuccess: false,
        isLoading: false,
        error: null
    },
    reducers: {
        clear_register_candidate_slice: (state) => {
            state.data = {}
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.error = null
            return state
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register_candidate.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register_candidate.fulfilled, (state, action) => {
                state.data = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(register_candidate.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
            })
    }
})
export const { clear_register_candidate_slice } = registerCandidate.actions
export default registerCandidate.reducer