import React, { Component } from 'react';

import Post from './Post';

class Timeline extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://www.fillmurray.com/32/32',
        },
        date: 'Jun 20th 2020',
        content:
          'Quisque accumsan sodales arcu eu maximus. Proin a tellus scelerisque, faucibus purus egestas, egestas massa.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://www.fillmurray.com/32/32',
            },
            content:
              'Quisque ornare leo enim, in finibus sem posuere id. Aenean auctor, nibh vulputate volutpat placerat, metus augue vulputate velit, a dignissim nulla erat sit amet magna. Vivamus egestas eu tortor dignissim efficitur. Fusce egestas rhoncus fringilla. Duis blandit nisi lacus, quis consequat ante viverra vitae.',
          },
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://www.fillmurray.com/32/32',
            },
            content:
              'Quisque ornare leo enim, in finibus sem posuere id. Aenean auctor, nibh vulputate volutpat placerat, metus augue vulputate velit, a dignissim nulla erat sit amet magna. Vivamus egestas eu tortor dignissim efficitur. Fusce egestas rhoncus fringilla. Duis blandit nisi lacus, quis consequat ante viverra vitae.',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Mateus Almeida',
          avatar: 'https://www.fillmurray.com/32/32',
        },
        date: 'Jun 22nd 2020',
        content:
          'Quisque accumsan sodales arcu eu maximus. Proin a tellus scelerisque, faucibus purus egestas, egestas massa.',
        comments: [],
      },
    ],
  };
  render() {
    const { posts } = this.state;
    return (
      <ul className="timeline-wrapper">
        {posts.map((post) => <Post key={post.id} {...post} />)}
      </ul>
    );
  }
}

export default Timeline;
