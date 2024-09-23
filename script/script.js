/*VARIABLES*/

const gridSize = document.querySelector("#gridSize");
const grid = document.querySelector('#grid');
const buttons = document.querySelectorAll(".color-button");
const magicPenButton = document.querySelector(".magic-button");
const resetButton= document.querySelector(".reset-button");
const greyButton= document.querySelector(".shader-button");
let penColor= "#000000";
let penToggler= false;
let magicPen=false;
let greyPen=false;


/*Function to generate a rng for computer */
function rnGen(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNumber(){
    let number= rnGen(0,9);
    return number;   
}
function rgbToHex(rgb) {
    let result = rgb.match(/\d+/g);
    return ((1 << 24) + (parseInt(result[0]) << 16) + (parseInt(result[1]) << 8) + parseInt(result[2])).toString(16).slice(1).toUpperCase();
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
        gridElement.style.backgroundColor="#ffffff";
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
    let e=event;
    if(magicPen==true){
        penColor=randomColorGenerator()
    }
    if(greyPen==true){
        penColor=shadeCreator(e);
    }

    event.target.style.backgroundColor=penColor;
}

function colorChange(color){
    magicPen=false;
    greyPen= false;
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

function shadeCreator(e){
    let hexColor=rgbToHex(e.target.style.backgroundColor); 

    console.log(`current Color: ${hexColor}`);
    let currentColor=parseInt(hexColor,16);

    console.log(`current Color: ${currentColor}`);
    let shade=0x000000;
    if(currentColor>0x0){
        shade=currentColor-0x111111;
    }
    
    console.log(`Shade Color: ${shade}`);
    return `#${shade.toString(16).padStart(6, '0')}`;
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
magicPenButton.addEventListener("click",()=>{
    greyPen=false;
    magicPen=true;
    });
greyButton.addEventListener("click",()=>{
    magicPen=false;
    greyPen=true;
});
resetButton.addEventListener("click", resetFunction);