import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments, removeComment } from '../redux/commentsSlice';
import CommentItem from './CommentItem';
import { CircularProgress, Box } from '@mui/material';

const CommentList = () => {
    const dispatch = useDispatch();
    const { comments, status, error } = useSelector((state) => state.comments);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchComments());
        }
    }, [status, dispatch]);

    if (status === 'loading') return <Box sx={{ textAlign: 'center', mt: 2 }}><CircularProgress /></Box>;
    if (status === 'failed') return <div>Error: {error}</div>;

    return (
        <div>
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} onDelete={() => dispatch(removeComment(comment.id))} />
            ))}
        </div>
    );
};

export default CommentList;
