function generateButtons() {
  let n = document.getElementById("numberOfButtons").value;
  let body = document.createElement("body");
  let container = document.createElement("div");
  container.className = "container";
  let card = document.createElement("div");
  card.className = "card text-center";
  let card_body = document.createElement("div");
  card_body.className = "card-body";
  let paragraph = document.createElement("p");
  let text = document.createTextNode("Choose only one button from this list with " + n + " buttons.");
  paragraph.appendChild(text);
  card_body.appendChild(paragraph);
  let winningButton = generateWinningButton(n);
  for (let i = 0; i < n; ++i) {
    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.innerHTML = 'Button ' + (i + 1);
    button.setAttribute("onclick", "checkWinningButton(" + (i + 1) + "," + winningButton + ")");
    card_body.appendChild(button);
  }
  card.appendChild(card_body);
  container.appendChild(card);
  body.appendChild(container);
  document.body.appendChild(body);
  return false;
}

function generateWinningButton(n) {
  let winningButton = 1 + Math.floor(Math.random() * n);
  return winningButton;
}

function checkWinningButton(button, winningButton) {
  if (button == winningButton) {
    alert("YOU WON THE GAME - Congratulation !!!");
  } else {
    alert("YOU LOST THE GAME - Try Again !!!");
  }
  return false;
}
