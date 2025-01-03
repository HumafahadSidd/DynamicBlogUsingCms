'use client';
import React, { useState } from 'react';

interface Comment {
  text: string;
  replies: Comment[];
}

const CommentSection: React.FC = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {
    if (comment.trim()) {
      setComments([...comments, { text: comment, replies: [] }]);
      setComment('');
    }
  };

  const handleReply = (index: number, replyText: string) => {
    const newComments = [...comments];
    newComments[index].replies.push({ text: replyText, replies: [] });
    setComments(newComments);
  };

  return (
    <div className="comment-section border rounded-sm shadow-md p-4 w-full max-w-4xl mx-auto">
      <textarea
        className="border rounded-sm shadow-md p-2 w-full"
        name="comment"
        id="comment"
        placeholder="Write your comment here"
        value={comment}
        onChange={handleInputChange}
      ></textarea>
      <button
        className="bg-accentDarkSecondary text-light px-4 py-2 rounded-md mt-2 w-full"
        onClick={handlePostComment}
      >
        Post Comment
      </button>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="border rounded-sm shadow-md p-2 mb-2 w-full">
            <p>{comment.text}</p>
            <ReplySection
              commentIndex={index}
              replies={comment.replies}
              handleReply={handleReply}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ReplySection: React.FC<{
  commentIndex: number;
  replies: Comment[];
  handleReply: (index: number, replyText: string) => void;
}> = ({ commentIndex, replies, handleReply }) => {
  const [reply, setReply] = useState('');

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value);
  };

  const handlePostReply = () => {
    if (reply.trim()) {
      handleReply(commentIndex, reply);
      setReply('');
    }
  };

  return (
    <div className="ml-4">
      <textarea
        className="border rounded-sm shadow-md p-2 w-full mt-2"
        name="reply"
        id={`reply-${commentIndex}`}
        placeholder="Write your reply here"
        value={reply}
        onChange={handleReplyChange}
      ></textarea>
      <button
        className="bg-accentDarkSecondary text-light px-4 py-2 rounded-md mt-2 w-full"
        onClick={handlePostReply}
      >
        Post Reply
      </button>
      <div className="mt-2">
        {replies.map((reply, index) => (
          <div key={index} className="border rounded-sm shadow-md p-2 mb-2 w-full">
            <p>{reply.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
