import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const edit_user_details_slice = createAsyncThunk("edit_user_details_slice", async ({ userId, username, experience, profile }, thunkAPI) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

        const raw = JSON.stringify({
            "userId": userId,
            "username": username,
            "experience": experience,
            "profile": profile
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}editUserDetails`, requestOptions)
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

export const editUsersDetails = createSlice({
    name: "editUsersDetails",
    initialState: {
        message: {},
        isError: false,
        isSuccess: false,
        isLoading: false,
        error: null
    },
    reducers: {
        clear_user_edit_slice: (state) => {
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
            .addCase(edit_user_details_slice.pending, (state) => {
                state.isLoading = true
            })
            .addCase(edit_user_details_slice.fulfilled, (state, action) => {
                state.message = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(edit_user_details_slice.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
            })
    }
})
export const { clear_user_edit_slice } = editUsersDetails.actions
export default editUsersDetails.reducer