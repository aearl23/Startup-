// JavaScript code for adding comments and displaying user activity 

document.getElementById('submitComment').addEventListener('click', function() {
    var comment = document.getElementById('commentInput').value;
    if (comment.trim() !== '') {
      addComment(comment);
      document.getElementById('commentInput').value = '';
    }
  });
  
  function addComment(comment) {
    var ul = document.querySelector('.notification');
    var li = document.createElement('li');
    li.textContent = comment;
    ul.appendChild(li);
  }