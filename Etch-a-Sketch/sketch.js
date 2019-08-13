const container=document.getElementById('container');
const gridContainer=document.getElementById('div');


// Create initial 16x16 grid
createGrid(16);

// Function that creates the grid and sets dimensions of squares
function createGrid(r){
  for(let i = 0; i < r; i++) {
  let squares = document.createElement('div');
  squares.style.width=(480/r - 0.2) + "px";
  squares.style.height=(480/r -0.2) + "px";
  squares.className="grids";
  gridContainer.appendChild(squares);
  container.appendChild(gridContainer);
  
  // Create a function to clear all squares
  const clearGrid = document.getElementById('clear');
  clearGrid.addEventListener('click' function clearAll() {
  gridContainer.removeChild(squares);
  })
  
  }
  
  // Create black paint
  // Add more colors in future?
  
  let coloring='';
        const dark=document.getElementById('black');
        dark.addEventListener('click',function(){
            coloring='black'
        })
  
  // Make squares black on mouseover
  const everyGrid = document.querySelectorAll('.grids');
  everyGrid.forEach(function (e) {
  e.addEventListener('mouseover', function(hover) {
  hover.target.style.background='black'
  }
  
  // Empty grid and prompt user for new grid
  function emptyGrid(){
document.querySelectorAll('.grids').forEach(function(grid){
grid.parentNode.removeChild(grid)
})
}
const newGrid=document.getElementById('new');
newGrid.addEventListener('click',function(){
    emptyGrid();
    let rowNumber=prompt ('How many squares per row would you like to create?');
    
    createGrids(rowNumber);

})
