import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронное действие для получения комментариев из API
export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
    const response = await axios.get('https://dummyjson.com/comments');
    return response.data.comments;
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        addComment: (state, action) => {
            state.comments.push(action.payload);
        },
        removeComment: (state, action) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addComment, removeComment } = commentsSlice.actions;

export default commentsSlice.reducer;
