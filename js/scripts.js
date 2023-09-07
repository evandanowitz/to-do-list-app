function newItem() {

// 1. Adding a new item to the list of items:
    let list = $('#list');
    let inputValue = $('#input').val();
    let li = $('<li></li>');
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        list.append(li);
    }

// 2. Crossing out an item from the list of items:
    li.on('dblclick', function() {
        li.toggleClass('strike');
    });

// 3(i). Adding the delete button 'X': 
    let crossOutButton = $('<button></button>');
    crossOutButton.text('X');
    li.append(crossOutButton);

// 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the CSS:
    crossOutButton.on('click', function() {
        li.addClass('delete');
    });

// 4. Reordering the items:
    list.sortable();

// Clear the input field after adding an item:
    $('#input').val('');

}

