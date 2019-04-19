// On document ready, console log "something".
$(document).ready(onReady);

let peopleArray = [];

peopleArray.push({
    name: 'Scott',
    salary: 600000000,
});

peopleArray.push({
    name: 'Cory',
    salary: 600000,
});

peopleArray.push({
    name: 'Konou',
    salary: 1000000,
});

function onReady() {
    render();

    $('.container').on('click', '.deleteBtn', clickDeleteButton);
    $('#newEmployee').on('submit', submitForm);
}

function clickDeleteButton() {
    let indexForDelete = $(this).parent().data('id');
    peopleArray.splice(indexForDelete, 1);
    render();
}

function submitForm(event) {
    event.preventDefault();

    let entry = {};

    $(this).serializeArray().forEach(function(item){
        entry[item.name] = item.value;
    });

    $(this).trigger('reset');

    //At this point, we can decide what to
    //do with the object, 'entry'.
    peopleArray.push(entry);
    render();
}

function render() {
    $('.container').empty();
    for (let i = 0; i < peopleArray.length; i++) {
        $('.container').append('<div></div>');
        let newDiv = $('.container').children().last();
        newDiv.data('id', i);
        let person = peopleArray[i];
        newDiv.append('<p>' + person.name + '</p>');
        newDiv.append('<p>' + person.salary + '</p>');
        newDiv.append('<button class="deleteBtn">Fire</button>');
    }
}