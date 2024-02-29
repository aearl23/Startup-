// vote tracker for top technologies 
  document.addEventListener('DOMContentLoaded', function() {
    var technologies = [
      { name: 'Technology 1', votes: 0 },
      { name: 'Technology 2', votes: 0 },
    ];
  
    function updateVoteCount(techName) {
      technologies.forEach(function(tech) {
        if (tech.name === techName) {
          tech.votes++;
        }
      });
    }
  
    var voteButtons = document.querySelectorAll('.vote-button');
  
    voteButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var techName = this.getAttribute('data-tech');
        updateVoteCount(techName);
        updateTable();
      });
    });
  
    function updateTable() {
      technologies.sort(function(a, b) {
        return b.votes - a.votes;
      });
  
      var tbody = document.querySelector('#top-technologies tbody');
  
      tbody.innerHTML = '';
  
      technologies.forEach(function(tech, index) {
        var row = `<tr>
                      <td>${index + 1}</td>
                      <td>${tech.name}</td>
                      <td>${tech.votes}</td>
                  </tr>`;
        tbody.innerHTML += row;
      });
    }
  
    updateTable();
  });