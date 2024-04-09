// vote tracker for top technologies 
  document.addEventListener('DOMContentLoaded', function() {
    var technologies = [
      { name: 'LET Joint', votes: 0 },
      { name: 'Corn Stalk Integration Device', votes: 0 },
    ];
  
    function updateVoteCount(techName) {
      technologies.forEach(function(tech) {
        if (tech.name === techName) {
          tech.votes++;
        }
      });
      updateTable();
    }
  
    var voteButtons = document.querySelectorAll('.vote-button');
  
    voteButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var techName = this.getAttribute('data-tech');
        updateVoteCount(techName);
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