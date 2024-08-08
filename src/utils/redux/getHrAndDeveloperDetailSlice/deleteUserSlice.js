import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const delete_user = createAsyncThunk("delete_user", async ({ id }, thunkAPI) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

        const raw = JSON.stringify({
            "userId": id
        });

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}deleteUser`, requestOptions)
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

export const deleteUser = createSlice({
    name: "deleteUser",
    initialState: {
        message: {},
        isSuccess: false,
        isError: false,
        isLoading: false,
        error: null
    },
    reducers: {
        clear_user_delete_slice: (state) => {
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
            .addCase(delete_user.pending, (state) => {
                state.isLoading = true
            })
            .addCase(delete_user.fulfilled, (state, action) => {
                state.message = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(delete_user.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
                state.isLoading = false
            })
    }
})
export const { clear_user_delete_slice } = deleteUser.actions
export default deleteUser.reducer