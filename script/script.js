/*VARIABLES*/

const value = document.querySelector("#value");
const input = document.querySelector("#gridSize");
const grid = document.querySelector('#grid');
    

/*GRID SIZE UPDATER */
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
        gridElement.style.width= width;
        gridElement.style.height= height;
        grid.appendChild(gridElement);
    }
    

}





/*EVENT LISTENERS*/
input.addEventListener("input", gridSizeUpdater);
