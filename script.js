let container = document.getElementById("container");


//Creates square grid
function createGrid(size) {
  container.style.setProperty("--grid-rows", size);
  container.style.setProperty("--grid-columns", size);
  for (let j = 0; j < size * size; j++) {
    let cell = document.createElement("div");
    cell.className = "squares";
    
    container.appendChild(cell);
  }
}

//Reset and refresh window
let button = document.getElementById('button');
button.addEventListener('click', (event) =>
{
  window.location.reload();
});



//Change size of grid using input from user
function changeGridSize() {

  let userChoice = Number(window.prompt('Please enter the number of boxes you want on each side of the grid.', '16'));

  if (userChoice > 100) {
    alert('Please choose a smaller number.');
    userChoice;
  } else if (userChoice < 2) {
    alert('Please choose a higher number.')
  } else {
    createGrid(userChoice);
  
  }  
}
//Changes color of square div on hover
container.addEventListener("mouseover", (cell) => {
  cell.target.style.background = "black";
});



changeGridSize();

