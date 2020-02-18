import React from 'react';

function Comment(props) {
  const { author, content } = props;
  return (
    <li className="comment-item">
      <img src={author.avatar} className="author-avatar" />
      <div className="comment-content">
        <span className="author-name">{author.name}</span> {content}
      </div>
    </li>
  );
}

export default Comment;
