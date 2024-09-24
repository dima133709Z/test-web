import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/commentsSlice';
import { TextField, Button, Box } from '@mui/material';

const AddComment = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            const newComment = {
                id: Date.now(),
                user: { username: 'Anonymous' },
                body: text,
            };
            dispatch(addComment(newComment));
            setText('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
            <TextField
                label="Комментарий"
                variant="outlined"
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Добавить
            </Button>
        </Box>
    );
};

export default AddComment;
