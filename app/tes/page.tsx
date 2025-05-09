// app/page.tsx
'use client';

import { useState } from 'react';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = async () => {
    const res = await fetch('/api/addPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Add a New Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default AddPost;
