// JavaScript code for adding comments and displaying user activity 

const commentmade = 'comment';

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


const usernameEl = document.querySelector('.userName');
playerNameEl.textContent = this.getuserName();
this.configurewebSocket();
this.broadcastEvent(this.getuserName(), commentmade, {});


get
  // Websocket for peer communication

  configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg('session', 'connected');
    };
    this.socket.onclose = (event) => {
      this.displayMsg('session', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameEndEvent) {
        this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
      } else if (msg.type === GameStartEvent) {
        this.displayMsg('player', msg.from, `started a new game`);
      }
    };
  }

  displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }

