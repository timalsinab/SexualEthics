import React, { useState, useEffect } from "react";

const Forum = ({ topicTitle }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [replyContent, setReplyContent] = useState({});

  // Unique key for each topic in localStorage
  const storageKey = `forumPosts_${topicTitle.replace(/\s+/g, "_").toLowerCase()}`;

  // Load posts for this specific forum topic from localStorage
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem(storageKey)) || [];
    setPosts(savedPosts);
  }, [storageKey]);

  // Save posts to localStorage for this specific forum topic whenever posts change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(posts));
  }, [posts, storageKey]);

  const handleAddPost = () => {
    if (newPost.trim()) {
      setPosts([
        ...posts,
        { id: posts.length + 1, content: newPost, replies: [] },
      ]);
      setNewPost("");
    }
  };

  const handleReplyChange = (postId, content) => {
    setReplyContent((prev) => ({
      ...prev,
      [postId]: content,
    }));
  };

  const handleAddReply = (postId) => {
    const content = replyContent[postId];
    if (content?.trim()) {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...post, replies: [...post.replies, content] }
            : post
        )
      );
      setReplyContent((prev) => ({
        ...prev,
        [postId]: "",
      }));
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">{topicTitle}</h1>
      
      {/* New Post Input */}
      <div className="mb-6">
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-2"
          rows="3"
          placeholder="Write your post here..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleAddPost}
        >
          Add Post
        </button>
      </div>

      {/* Display Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-white rounded shadow">
            <p className="text-gray-700 mb-2">{post.content}</p>
            
            {/* Replies Section */}
            <div className="space-y-2 pl-4 border-l-2 border-gray-200">
              {post.replies.map((reply, index) => (
                <p key={index} className="text-gray-600">
                  {reply}
                </p>
              ))}
            </div>

            {/* Reply Input */}
            <div className="mt-2">
              <textarea
                className="w-full p-2 border border-gray-300 rounded mb-2"
                rows="2"
                placeholder="Write your reply here..."
                value={replyContent[post.id] || ""}
                onChange={(e) => handleReplyChange(post.id, e.target.value)}
              />
              <button
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                onClick={() => handleAddReply(post.id)}
              >
                Post Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
