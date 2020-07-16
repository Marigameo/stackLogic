//get refresh button
let refreshBtn = document.getElementById("refresh");

let stackBalls = () => {
  document.getElementById("box").innerHTML = "";

  let inputRows = document.getElementById("noOfRows");
  let noOfRows = inputRows.value;

  let inputBalls = document.getElementById("noOfBalls");
  let noOfBalls = inputBalls.value;

  if (!noOfRows) {
    alert("Please enter a valid input for number of rows");
  } else if (!noOfBalls) {
    alert("Please enter a valid input for number of balls");
  } else {
    let message = document.getElementById("outputMessage");
    message.innerHTML = `Stacking ${noOfRows} rows each with ${noOfBalls} balls`;
    message.classList.add("message");
    message.style.visibility = "visible";
    let box = document.getElementById("box");
    for (let i = 0; i < noOfRows; i++) {
      let row = document.createElement("div");

      if (noOfRows % 2 == 0) {
        if ((i + 1) % 2 == 0) {
          if (noOfBalls < 7) {
            row.style.paddingLeft = (noOfBalls * 1.8) + "%";
          } else {
            row.style.paddingLeft = "2.8%"
          }
          row.style.display = "flex";
          row.style.flexDirection = "row-reverse"
        }
      }
      else {
        if ((i + 1) % 2 != 0) {
          if (noOfBalls < 7) {
            row.style.paddingLeft = (noOfBalls * 1.8) + "%";
          } else {
            row.style.paddingLeft = "2.8%"
          }
          row.style.display = "flex";
          row.style.flexDirection = "row-reverse"
        }
      }
      row.style.width = "600px";
      row.style.overflow = "hidden"
      for (let j = 0; j < noOfBalls; j++) {
        let ball = document.createElement("div");
        ball.classList.add("circle");
        ball.style.width = 600 / noOfBalls + "px";
        ball.style.height = 600 / noOfBalls + "px";
        row.appendChild(ball);
      }
      box.appendChild(row);
    }
    refreshBtn.disabled = false;
  }
};

let refresh = () => {
  document.getElementById("noOfRows").value = null;
  document.getElementById("noOfBalls").value = null;
  document.getElementById("box").innerHTML = "";
  document.getElementById("outputMessage").style.visibility = "hidden";
  refreshBtn.disabled = true;
};

//validation
let validate = e => {
  if (e.value < 1) {
    alert("Please enter a value greater than zero");
    e.value = null;
  }
};

//refresh button disabled by default
refreshBtn.disabled = true;
