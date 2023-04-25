import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import "./CommentSection.scss";

const CommentSection: React.FC = () => {
    const [comments, setComments] = useState<string[]>([]);
    const [commentText, setCommentText] = useState<string>("");

    const addComment = () => {
        setComments([...comments, commentText]);
        setCommentText("");
    };

    return (
        <div className="comment-container">
            <Typography variant="h6">Comments</Typography>
            <div className="comment-list">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <Typography variant="body1">{comment}</Typography>
                    </div>
                ))}
            </div>
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
        </div>
    );
};

export default CommentSection;
