// On document ready, console log "something".
$(document).ready(function () {
    console.log(peopleArray);

    for (let i = 0; i < peopleArray.length; i++) {
        $('.container').append('<div></div>');
        let newDiv = $('.container').children().last();
        let person = peopleArray[i];
        newDiv.append('<p>' + person.name + '</p>');
        newDiv.append('<p>' + person.salary + '</p>');
    }
});

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