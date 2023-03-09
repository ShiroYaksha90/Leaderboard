const userName = document.getElementById('user-name');
const userScore = document.getElementById('user-score');

const player = {
  user: String,
  score: Number,
};

export default class ApiOp {
  static newGame = async () => {
    const reply = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
      {
        method: 'POST',
        body: 'Random scores',
        headers: {
          'content-type': 'application/json',
        },
      });
    const data = await reply.json();
    return data;
  }

  static newScore = async () => {
    if (userName.value.length !== 0 && userScore.value.length !== 0) {
      player.user = userName.value;
      player.score = userScore.value;
    }
    const reply = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ABCDEFGHIJklmnopqrst/scores/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(player),
    });
    const data = reply.json();
    return data;
  }

  static fetchScores = async () => {
    const reply = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ABCDEFGHIJklmnopqrst/scores/', {
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await reply.json();
    return data;
  }

  static render = () => {
    const board = document.querySelector('.scores');
    ApiOp.fetchScores().then((data) => {
      let itemElements = '';
      const scores = data.result;
      scores.map((score) => {
        itemElements += `
          <li class="item"> ${score.user}: ${score.score}`;
        return itemElements;
      });
      board.innerHTML = itemElements;
      return itemElements;
    });
  }

  static clearFormInput() {
    userName.value = '';
    userScore.value = '';
  }
}
