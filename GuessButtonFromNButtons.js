function generateButtons() {
  let n = document.getElementById("numberOfButtons").value;
  let container = document.createElement("div");
  document.body.appendChild(container);
  container.className = "container";
  container.innerHTML = `<div class="card text-center" id="card">
                          <div class="card-body" id="card_body">
                            <p>Choose only one button from this list with ` + n + ` buttons. </p>
                          </div>
                        </div>`;
  let winningButton = generateWinningButton(n);
  for (let i = 0; i < n; ++i) {
    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.innerHTML = 'Button ' + (i + 1);
    button.setAttribute("onclick", "checkWinningButton(" + (i + 1) + "," + winningButton + ")");
    document.getElementById("card_body").appendChild(button);
  }
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
