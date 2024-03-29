document.addEventListener('DOMContentLoaded', function() {

  // Function to add comment to the DOM
  function addComment(comment) {
    var ul = document.querySelector('#comments');
    var li = document.createElement('li');
    li.textContent = comment.text;
    ul.appendChild(li);
  }

  const commentmade = 'comment';
  // Function to handle submitting a comment
  document.getElementById('submitComment').addEventListener('click', function() {
    var commentInput = document.getElementById('commentInput').value;
    if (commentInput) {
      var commentText = commentInput.value;}
      if (commentText !== '') {

        var comment = {
          text: commentText,
          timestamp: new Date().toISOString()
        };

        saveComment(comment);
        // Add the comment to the DOM
        addComment(comment);
        
        // Send the comment over WebSocket
        broadcastEvent(username, commentmade, { comment: commentText });
        
        // Clear the comment input field
        commentInput.value = '';
    }
  });

  // Function to display messages on the screen
  function displayMsg(from, msg) {
    const chatText = document.querySelector('#comments');
    chatText.innerHTML = `<div class="event"><span class="user-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  // WebSocket configuration
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  socket.onopen = (event) => {
    displayMsg('System', 'WebSocket connection established');
  };
  socket.onclose = (event) => {
    displayMsg('System', 'WebSocket connection closed');
  };
  socket.onmessage = async (event) => {
    const msg = JSON.parse(event.data);
    if (msg.type === commentmade) {
      // Display comments received over WebSocket
      displayMsg(msg.from, `commented: ${msg.value.comment}`);
    }
  };

  // Function to broadcast events over WebSocket
  function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    socket.send(JSON.stringify(event));
  }

  // Retrieve username from local storage or set a default
  const username = localStorage.getItem('userName') || 'Mystery user';

  // Initial message to display username
  displayMsg('System', `You are logged in as: ${username}`);

})