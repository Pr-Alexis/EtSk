/*VARIABLES*/

const gridSize = document.querySelector("#gridSize");
const grid = document.querySelector('#grid');
const buttons = document.querySelectorAll(".color-button");
const resetButton= document.querySelector(".reset-button")
let penColor= "#000000";
let penToggler= false;

/*Grid initialization*/
gridSizeUpdater();


/*GRID SIZE UPDATER*/
function gridSizeUpdater(){
    let gridSizeValue=gridSize.value;
    let width=
        height= (100/gridSizeValue)+"%";
    //Clearing grid and css rules
    grid.innerHTML="";

    //Creating grid elements and adding them to the grid
    for(let i=0; i<gridSizeValue**2;i++){
        let gridElement=document.createElement('div');
        gridElement.className='grid-element';
        gridElement.id=i;
        gridElement.style.width= width;
        gridElement.style.height= height;
        grid.appendChild(gridElement);
    }
}

/*ACTRIVATE PEN*/
function activatePen(){
    let gridElements= document.querySelectorAll('.grid-element')
    if(penToggler==false){
        gridElements.forEach(gridElement=>{
            gridElement.addEventListener("mouseover",penActivation);
            });
        penToggler=true;
    }
    else if(penToggler==true){
        gridElements.forEach(gridElement=>{
            gridElement.removeEventListener("mouseover",penActivation);
            });
        penToggler=false;
    }
}


/*COLOR CHANGING FUNCTION*/
function penActivation(event){
    event.target.style.backgroundColor=penColor;
}

function colorChange(color){
    penColor=color;
}

/*RESET FUNCTION*/
function resetFunction(){
    gridSize.value=16;
    gridSizeUpdater();
}

/*EVENT LISTENERS*/
gridSize.addEventListener("input", gridSizeUpdater);
grid.addEventListener("click",activatePen);
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        colorChange(button.value);
    });
});
resetButton.addEventListener("click", resetFunction);