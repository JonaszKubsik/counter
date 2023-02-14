let number = document.getElementById('counter');
let add = document.getElementById('plus');
let del = document.getElementById('minus');
let integer = 0;


add.addEventListener('click', function() {
    integer++
    number.innerHTML = integer;
})

del.addEventListener('click', function() {
    if (integer > 0) {
        integer--
        number.innerHTML = integer;
    } else {
        integer = 0;
    }  
})

