'use strict';



// const STORE = [
//     { id: cuid(), name: "apples", checked: false},
//     { id: cuid(), name: "oranges", checked: false},
//     { id: cuid(), name: "milk", checked: true},
//     { id: cuid(), name: "bread", checked: false},
// ]







console.log("hello");

let AddItemEventHandler = function (event) {
    event.preventDefault();
    let submittedData = $('#shopping-list-entry').val();

    let html_str = `
    <li><span class='shopping-item'> ${submittedData} </span>
        <div class='shopping-item-controls'> 
          <button class='shopping-item-toggle'> 
          <span class='button-label'>check</span> 
        </button> 
        <button class='shopping-item-delete'> 
          <span class='button-label'>delete</span> 
        </button> 
        </div>
      </li> `;

    $("ul").append(html_str);

    $(".shopping-item-delete").click(deleteItemEventHandler);
    $(".shopping-item-toggle").click(checkItemEventHandler);


}


const deleteItemEventHandler = function (event) {
    let clickedBtn = event.target;
    let parentLi = clickedBtn.closest("li");
    $(parentLi).remove();
}

const checkItemEventHandler = function (event) {

    let clickedCheck = event.target;
    let closestDiv = $(clickedCheck).closest("li");
    let closestChild = $(closestDiv).children("span");
    $(closestChild).toggleClass("shopping-item__checked");
}



$('#js-shopping-list-form').submit(AddItemEventHandler); //number of form dpesnt change
$(".shopping-item-delete").click(deleteItemEventHandler);
$(".shopping-item-toggle").click(checkItemEventHandler);


