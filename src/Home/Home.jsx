import React, { useState, useEffect } from 'react';
import './Home.css';

// VotingSystem Component
function VotingSystem() {
  const [technologies, setTechnologies] = useState([
    { name: 'LET Joint', votes: 0 },
    { name: 'Corn Stalk Integration Device', votes: 0 },
  ]);

  function updateVoteCount(techName) {
    const updatedTechnologies = technologies.map(tech => {
      if (tech.name === techName) {
        return { ...tech, votes: tech.votes + 1 };
      }
      return tech;
    });
    setTechnologies(updatedTechnologies);
  }

  return (
    <div>
      <h2>Top Technologies</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {technologies.map((tech, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{tech.name}</td>
              <td>{tech.votes}</td>
              <td><button className="btn btn-primary" onClick={() => updateVoteCount(tech.name)}>Vote</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// WebSocketComponent Component
function WebSocketComponent() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(`ws://${window.location.host}/ws`);

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    socket.onmessage = event => {
      const newMessage = JSON.parse(event.data);
      setMessages(prevMessages => [...prevMessages, newMessage]);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h2>WebSocket Messages</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <p>{msg.from}: {msg.value.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Home Component
export function Home() {
  const [comments, setComments] = useState([]);

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

  function addComment(comment) {
    setComments(prevComments => [...prevComments, comment]);
  }

  function saveComment(comment) {
    const commentsFromStorage = JSON.parse(localStorage.getItem('comments')) || [];
    const updatedComments = [...commentsFromStorage, comment];
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  }

  useEffect(() => {
    const commentsFromStorage = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(commentsFromStorage);
  }, []);

  return (  //main body html with components 
    <div>
      <main>   
        <div className="container mt-4">
          <VotingSystem />
        </div>

        <WebSocketComponent />

        <div id="accordion" className="accordion demo-box">
          <h2>Technologies</h2>

          <div className="accordion-item">
            {/* Content goes here */}
          </div>
        </div>

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
    </div>
  );
}
