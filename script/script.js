/*VARIABLES*/

const value = document.querySelector("#value");
const input = document.querySelector("#gridSize");
    

/*GRID SIZE UPDATER */
function gridSizeUpdater(){
    let gridSizeValue=gridSize.value;
    value.textContent=gridSizeValue;
}





/*EVENT LISTENERS*/
input.addEventListener("input", gridSizeUpdater);
