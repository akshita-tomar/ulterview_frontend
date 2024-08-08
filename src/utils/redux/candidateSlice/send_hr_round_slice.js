import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const send_hr_round_que_ans = createAsyncThunk("send_hr_round_que_ans", async ({ candidateId, seriesId, link }, thunkAPI) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

        const raw = JSON.stringify({
            "candidateId": candidateId,
            "seriesId": seriesId,
            "link": link
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}sendHrRoundQuesAns`, requestOptions)
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

export const sendHrRoundLink = createSlice({
    name: "sendHrRoundLink",
    initialState: {
        message: {},
        isSuccess: false,
        isError: false,
        isLoading: false,
        error: null
    },
    reducers: {
        clear_hr_round_link_state: (state) => {
            state.message = {}
            state.isSuccess = false
            state.isError = false
            state.isLoading = false
            state.error = null
            return state
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(send_hr_round_que_ans.pending, (state) => {
                state.isLoading = true
            })
            .addCase(send_hr_round_que_ans.fulfilled, (state, action) => {
                state.message = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(send_hr_round_que_ans.rejected, (state, action) => {
                state.isError = true
                state.error = action.payload
            })
    }
})
export const { clear_hr_round_link_state } = sendHrRoundLink.actions
export default sendHrRoundLink.reducer