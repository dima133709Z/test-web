import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CommentItem = ({ comment, onDelete }) => {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                    {comment.user.username}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {comment.body}
                </Typography>
                <IconButton
                    edge="end"
                    color="secondary"
                    aria-label="delete"
                    onClick={onDelete}
                    sx={{ float: 'right' }}
                >
                    <DeleteIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default CommentItem;
