function addComment() {
    var commentInput = document.getElementById('commentInput');
    var commentText = commentInput.value.trim();
    console.log(commentText)
  
    if (commentText !== '') {
      var comment = {
        text: commentText,
        timestamp: new Date().toISOString()
      };
  
      // Save the comment to storage
      saveComment(comment);
  
      // Clear input field
      commentInput.value = '';
  
      // Reload comments
      loadComments();
    }
  }
  
  // Function to save a comment to local storage
  function saveComment(comment) {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
  }
  
  // Function to load comments from local storage and display them
  function loadComments() {
    var commentsContainer = document.getElementById('comments');
    commentsContainer.innerHTML = '';
  
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(function(comment, index) {
      var commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      commentDiv.innerHTML = `<p>${comment.text}</p><span class="timestamp">${formatTimestamp(comment.timestamp)}</span>`;
      commentsContainer.appendChild(commentDiv);
    });
  }
  
  // Function to format timestamp
  function formatTimestamp(timestamp) {
    var date = new Date(timestamp);
    return date.toLocaleString();
  }
  
  // Load comments from storage when the page loads
  loadComments();