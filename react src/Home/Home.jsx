import React, { useState, useEffect } from 'react';
import './Home.css'

export function Home() {
  const [comments, setComments] = useState([]);

  // Function to add comment to the state
  function addComment(comment) {
    setComments(prevComments => [...prevComments, comment]);
  }

  // Function to save a comment to local storage
  function saveComment(comment) {
    const commentsFromStorage = JSON.parse(localStorage.getItem('comments')) || [];
    const updatedComments = [...commentsFromStorage, comment];
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  }

  // Function to load comments from local storage and set them to the state
  useEffect(() => {
    const commentsFromStorage = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(commentsFromStorage);
  }, []);

  // Function to handle submitting a comment
  function handleCommentSubmit(event) {
    event.preventDefault();
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    if (commentText) {
      const comment = {
        text: commentText,
        timestamp: new Date().toISOString()
      };
      saveComment(comment);
      addComment(comment);
      commentInput.value = '';
    }
  }

  return (
    <div>
      <header className="sticky-top">
        {/* Header content goes here */}
      </header>
      <main>
        {/* Main content goes here */}
        <div id="commentsSection">
          <h2>Comments Section:</h2>
          <form onSubmit={handleCommentSubmit}>
            <input type="text" id="commentInput" placeholder="Add your comment..." />
            <button type="submit">Submit</button>
          </form>
          <div id="comments">
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <p>{comment.text}</p>
                <span className="timestamp">{comment.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}

