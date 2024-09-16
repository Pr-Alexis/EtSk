/*VARIABLES*/

const value = document.querySelector("#value");
const input = document.querySelector("#gridSize");
const grid = document.querySelector('#grid');
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
    value.textContent=width;

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
    event.target.style.backgroundColor='red';
}



/*EVENT LISTENERS*/
input.addEventListener("input", gridSizeUpdater);
grid.addEventListener("click",activatePen);