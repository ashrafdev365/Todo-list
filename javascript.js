"use strict";

let openHumberger = document.querySelector(".openHum");
let closeHumberger = document.querySelector(".closeHum");
let searchIcon = document.querySelector(".searchIcon");
let serachBar = document.querySelector(".serachBar");
//this is for openHumberger Menu
openHumberger.addEventListener("click", () => {
  document.querySelector(".slide").style.width = "400px";
  document.querySelector(".closeHum").style.display = "block";
  serachBar.style.display = "block"
  searchIcon.style.display = "none";
});
//this is for closeHumberger Menu
closeHumberger.addEventListener("click", () => {
  document.querySelector(".slide").style.width = "120px";
  document.querySelector(".closeHum").style.display = "none";
  serachBar.style.display = "none";
  searchIcon.style.display = "block";
});
searchIcon.addEventListener("click", () => {
  document.querySelector(".slide").style.width = "400px";
  document.querySelector(".closeHum").style.display = "block";
  serachBar.style.display = "block"
  searchIcon.style.display = "none";

});





let addNote = document.querySelector(".add");

const updateLcalStorage = () =>{
  let textData = document.querySelectorAll("textarea");

  let updateNote = [];
  textData.forEach((element) =>{
  updateNote.push(element.value);

  localStorage.setItem('updateNote', JSON.stringify(updateNote));
  });
};

const addNewNote = (text = "") => {
  //let's create a new div
  let noteDiv = document.createElement("div");
  noteDiv.classList.add("contentBox");
  
  const Data = ` 
    <div class="Buttons">
    <button class="edit" title="Click to Write text"><i class="fas fa-edit"></i></button>
    <button class="trash" title="Remove"><i class="fas fa-trash"></i></button>
    <button class="copy" title="Copy text"><i class="fas fa-copy"></i></button>
    <button class="check" title="Completed"><i class="fas fa-check"></i></button>
    <button class="clock" title="set Time"><i class="fas fa-clock"></i></button>
    </div>
    <div class="mine ${text ? "" : "hidden"}"></div>
    <textarea class="note ${text ? "hidden" : ""}"></textarea>
    `
    

  noteDiv.insertAdjacentHTML("afterbegin", Data);

  //getting the references..
  const editBtn = noteDiv.querySelector(".edit");
  const trashBtn = noteDiv.querySelector(".trash");
  const mineDiv = noteDiv.querySelector(".mine");
  const textarea = noteDiv.querySelector("textarea");
  const copyBtn = noteDiv.querySelector(".copy");
  const checkBtn = noteDiv.querySelector(".check");
  const clockBtn = noteDiv.querySelector(".clock");

  // trash Button..
  trashBtn.addEventListener("click", () => {
    noteDiv.style.transform = "translateX(-350px)"
    noteDiv.style.transitionDuration = "1s"
    noteDiv.style.opacity = "0.3"
    setTimeout(() => noteDiv.remove(), 500)
  });

  //toggle using edit icon..
   textarea.value = text;
   mineDiv.innerHTML = text;

  editBtn.addEventListener("click", () => {
    mineDiv.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
    //this is for checkBtns code remove.. 
    mineDiv.style.textDecoration = "none"
    mineDiv.style.opacity = "1"
  });


  //Check Button..
  checkBtn.addEventListener("click", () => {
    mineDiv.style.textDecoration = "line-through"
    mineDiv.style.opacity = "0.6"
  });
  //textarea..
  textarea.addEventListener("change", (evant) =>{
      const value = evant.target.value;
      mineDiv.innerHTML = value;

      updateLcalStorage();
  })

  document.body.appendChild(noteDiv);
};
const updateNote = JSON.parse(localStorage.getItem('updateNote'));
if(updateNote){ updateNote.forEach((noteDiv) => addNewNote(noteDiv))};

addNote.addEventListener("click", () => addNewNote());

//this is jquery..
$(document).ready(function(){
  $(".serachBar").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".contentBox").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$("").click( () => {
  alert("this is clicked")
})




  
