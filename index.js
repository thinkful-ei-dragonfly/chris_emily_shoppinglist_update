'use strict';



// const STORE = [
//     { id: cuid(), name: "apples", checked: false},
//     { id: cuid(), name: "oranges", checked: false},
//     { id: cuid(), name: "milk", checked: true},
//     { id: cuid(), name: "bread", checked: false},
// ]


'use strict';

///spaghetti code
//what should our code do??
//render shopping list to page
//be able to add items to list
//be able to check items on list
//be able to delete items from list 


//because this is a shopping list, we need a plcae to store our data
//we can do this using and array of objects where each object will 
//represent an item. we will also need other attributes:
//name, whether or not it is checked(can use boolean value) and a way to id
//since items in an array automatically have an id, we can use index of array

//we will rely on mutating our global variable STORE insdie of our functions for adding, deleting and modifying our functions


//cuid = unique IDS commonly used to track data as it moves around a single or multiple systems
//we use cuid so that we do not have identitcal items

const STORE = [
    { id: cuid(), name: "apples", checked: false },
    { id: cuid(), name: "oranges", checked: false },
    { id: cuid(), name: "milk", checked: true },
    { id: cuid(), name: "bread", checked: false }
];

function generateItemElement(item) {
    return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}




function generateShoppingItemsString(shoppingList) {
    const items = shoppingList.map((item) =>
        generateItemElement(item));

    return items.join("");

}


function renderShoppingList() {
    //.preventDefault()
    //makes sure new inputs and old inputs are rendered in the DOM
    //renders current state of shopping list STORE to DOM
    //we will call render shopping list in functions for altering the list
    //will call to update the DOM after adding/deleting/checking
    //we need store to be translated into HTML string that can be sorted to right place in DOM
    const shoppingListItemsString = generateShoppingItemsString(STORE); //create variable to hold item string
    //insert that HTML into DOM
    $('.shopping-list').html(shoppingListItemsString);


}

//reponsible for updating the store with the new item
//we are explicitly mutating our global STORE variable 
function addItemToShoppingList(itemName) {
    STORE.push({ id: cuid(), name: itemName, checked: false });
}





function submitItemEventHandler) {
    //listen for when users submit new list item
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault(); //prevents default form submission behavior

        //get name of new item from text input
        const newItemName = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');
        addItemToShoppingList(newItemName);
        renderShoppingList(); // re-renders the shopping list. 
        //clear out value so new items can be added
        //create an obkect representing the new item and add it to shopping list STORE
        // re-render shopping list in DOM in light of updated STORE


    });

}

function getItemIdFromElement(item) {
    //turn item into jQuery object( why?)
    return $(item)
        .closest('li') //get first parent li element
        .data('item-id'); //fetch value from data-item-id attribute
}

function toggleCheckedForListItem(itemId) {
    const item = STORE.find(item => item.id === itemId);
    item.checked = !item.checked;
}


function checkItemsShoppingList() {

    //listen for when user clicks check button
    $('.shopping-list').on('click', '.shopping-item-toggle', event
        => {
        const itemID = getItemIdFromElement(event.currentTarget);
        toggleCheckedForListItem(id);
        renderShoppingList();

    });
    //retrive item's ID
    //toggle checked property in item in STORE
    //re-render shopping list 

}
function deleteListItem(itemId) {
    const itemIndex = STORE.findIndex(item => item.id === itemId);
    STORE.splice(itemIndex, 1);
}

function deleteItemsFromShoppingList() {
    $('.shopping-list').on('click', '.shopping-item-delete', event => {
        const itemIndex = getItemIdFromElement(event.currentTarget);

        deleteListItem(itemIndex);

        renderShoppingList();

    });


}


function handleShoppingList() {
    //callback function for when the page loads
    //activates individual functions
    //handles new item submissions
    //calls other functions
    renderShoppingList(); //we run this inside of handleshoppinglist in order to initially render the shopping list
    submitItemEventHandler();
    checkItemsShoppingList();
    deleteItemsFromShoppingList();
}

$(handleShoppingList);
//this looks different because we want it to be called when the page loads















$(function () {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        const listItem = $('.js-shopping-list-entry').val();

        $('#shopping-list-entry').val('');


        $('.shopping-list').append(
            `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    });
    //problem below is that the data is stored entirely in the DOM
    //spaghetti code does not scale well
    //always create user stories before writing code
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        $(this).closest('li').remove();
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

});










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


