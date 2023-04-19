import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import "./CommentSection.scss";

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Comment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
`;

const CommentSection: React.FC = () => {
    const [comments, setComments] = useState<string[]>([]);
    const [commentText, setCommentText] = useState<string>("");

    const addComment = () => {
        setComments([...comments, commentText]);
        setCommentText("");
    };

    return (
        <CommentContainer className="comment-container">
            <Typography variant="h6">Comments</Typography>
            <CommentList className="comment-list">
                {comments.map((comment, index) => (
                    <Comment key={index} className="comment">
                        <Typography variant="body1">{comment}</Typography>
                    </Comment>
                ))}
            </CommentList>
            <TextField
                label="Your comment"
                multiline
                rows={4}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="text-field"
            />
            <Button variant="contained" onClick={addComment} className="button">
                Add Comment
            </Button>
        </CommentContainer>
    );
};

export default CommentSection;
