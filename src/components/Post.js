import React from 'react';

import Comment from './Comment';

function Post(props) {
  const { author, date, content, comments } = props;
  return (
    <li className="post-item">
      <div className="post-header">
        <img src={author.avatar} className="author-avatar" />
        <div className="author-info">
          <div className="author-name">{author.name}</div>
          <div className="post-timestamp">{date}</div>
        </div>
      </div>
      <div className="post-content">{content}</div>
      {comments.length !== 0 && (
        <ul className="post-comments">
          {comments.map((comment) => <Comment key={comment.id} {...comment} />)}
        </ul>
      )}
    </li>
  );
}

export default Post;

