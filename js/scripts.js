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

}
