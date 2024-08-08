import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addQuestion = createAsyncThunk( 'task/addQuestion',async ({ questionType, question, options, correctAnswer, answer }, thunkAPI) => {
       try{
        var type
        if (questionType === 'mcq') {
            type = 'Objective'
        }else if(questionType==='subjective'){
          type = 'Subjective'
        }else if(questionType==='logical'){
          type = 'Logical'
        }

        const token = localStorage.getItem('token');
        const seriesId = localStorage.getItem('seriesId');
        const url = process.env.REACT_APP_BACKEND_URL;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ question, options, correctAnswer, answer }),
        };

        const response = await fetch(`${url}add${type}?seriesId=${seriesId}`, requestOptions);
        const data = await response.json();

        if (response.ok) {
            return data;
        } else {
            throw new Error(data.message || 'Failed to add question');
        }
       }catch(error){
         return thunkAPI.rejectWithValue({message:error.message})
       }
    }
);

const createTaskSlice = createSlice({
    name: 'task',
    initialState: {
        question: '',
        options: ["", "", "", ""],
        correctAnswer: '',
        answer: '',
        status: 'idle',
        error: null,
    },
    reducers: {
        setQuestion(state, action) {
            state.question = action.payload;
        },
        setOptions(state, action) {
            state.options = action.payload;
        },
        setCorrectAnswer(state, action) {
            state.correctAnswer = action.payload;
        },
        setAnswer(state, action) {
            state.answer = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addQuestion.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addQuestion.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(addQuestion.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setQuestion, setOptions, setCorrectAnswer, setAnswer } = createTaskSlice.actions;

export default createTaskSlice.reducer;
