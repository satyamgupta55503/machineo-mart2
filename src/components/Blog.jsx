
import React, { useState } from 'react';

const posts = [
  {
    id: 1,
    title: 'yocto operating project',
    date: '2024-10-01',
    content: `
    Customization: Build a tailored Linux distribution by selecting specific packages and configurations.
    Layered Architecture: Organize software components into layers for easier management and reuse.
    Cross-Compilation: Create binaries for different architectures on a host machine.
    Wide Hardware Support: Support for various hardware platforms, making it versatile for embedded development.
  `
  },
  {
    id: 2,
    title: 'Linux os',
    date: '2024-10-05',
    content: 'Linux is a good operating system (OS) for making an OS library because it opensource lightweight and efficient'
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 my-28">
      {!selectedPost ? (
        <>
          <h1 className="text-4xl font-bold mb-6">Cybersecurity professionals </h1>
          {posts.map((post) => (
            <div
              key={post.id}
              className="mb-4 p-4 border border-gray-300 rounded-lg cursor-pointer"
              onClick={() => handleSelectPost(post)}
            >
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-500">{post.date}</p>
            </div>
          ))}
        </>
      ) : (
        <div className="mb-4">
          <button onClick={handleBack} className="mb-4 text-blue-500">
            Back to Posts
          </button>
          <h1 className="text-3xl font-bold">{selectedPost.title}</h1>
          <p className="text-gray-500">{selectedPost.date}</p>
          <p className="mt-4">{selectedPost.content}</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
