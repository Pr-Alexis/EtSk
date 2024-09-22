/*VARIABLES*/

const gridSize = document.querySelector("#gridSize");
const grid = document.querySelector('#grid');
const buttons = document.querySelectorAll(".color-button");
const magicPenButton = document.querySelector(".magic-button");
const resetButton= document.querySelector(".reset-button");
let penColor= "#000000";
let penToggler= false;
let magicPen=false;


/*Function to generate a rng for computer */
function rnGen(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNumber(){
    let number= rnGen(0,9);
    return number;   
}

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
            gridElement.addEventListener("mouseover",gridColoring);
            });
        penToggler=true;
    }
    else if(penToggler==true){
        gridElements.forEach(gridElement=>{
            gridElement.removeEventListener("mouseover",gridColoring);
            });
        penToggler=false;
    }
}


/*COLOR CHANGING FUNCTION*/
function gridColoring(event){
    if(magicPen==true){
        penColor=randomColorGenerator()
    }
    event.target.style.backgroundColor=penColor;
}

function colorChange(color){
    magicPen=false;
    penColor=color;
}

function randomColorGenerator(){
    /*generates a color from a pool of 10 colors
     *colors are just string no real need to treat them
     *as hex numbers*/
    let randomColor="#000000";
    switch(generateNumber()){
        case 0:
            randomColor="#8C113E";
        break;
        case 1:
            randomColor="#730E58";
        break;
        case 2:
            randomColor="#390340";
        break;
        case 3:
            randomColor="#16498C";
        break;
        case 4:
            randomColor="#D9765F";
        break;
        case 5:
            randomColor="#B569BF";
        break;
        case 6:
            randomColor="#70BF69";
        break;
        case 7:
            randomColor="#FBD9FF";
        break;
        case 8:
            randomColor="#679539";
        break;
        case 9:
            randomColor="#214003";
        break;
    }
    return randomColor;
}

/*RESET FUNCTION*/
function resetFunction(){
    gridSize.value=16;
    gridSizeUpdater();
}

/*EVENT LISTENERS*/
gridSize.addEventListener("input", gridSizeUpdater);
grid.addEventListener("click",activatePen);
resetButton.addEventListener("click", resetFunction);
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        colorChange(button.value);
    });
});

magicPenButton.addEventListener("click",()=>{
    magicPen=true;
    });