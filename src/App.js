import React from 'react';
import { Container, Typography } from '@mui/material';
import CommentList from './components/CommentList';
import AddComment from './components/AddComment';

const App = () => {
    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Тестовое задание
            </Typography>
            <AddComment />
            <CommentList />
        </Container>
    );
};

export default App;
