let addToDoButton = document.getElementById("btnAdd");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inpField")

addToDoButton.addEventListener("click",function(){
    var paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = " ";
    
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener("dblclick",function(){
        toDoContainer.removeChild(paragraph);
    })

});

