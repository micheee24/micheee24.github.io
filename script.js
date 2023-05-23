let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + '}').classList.add('active');
            });
        };
    });
};

let number1 = document.getElementById("number1");
let counter = 0; 
setInterval(() => {
    if(counter == 65){
        clearInterval
    }
    else{
    counter += 1;
    number1.innerHTML = counter + "%";
    }
}, 30);

let number2 = document.getElementById("number2");
let counter2 = 0; 
setInterval(() => {
    if(counter2 == 65){
        clearInterval
    }
    else{
    counter2 += 1;
    number2.innerHTML = counter + "%";
    }
}, 30);

let number3 = document.getElementById("number3");
let counter3 = 0; 
setInterval(() => {
    if(counter3 == 65){
        clearInterval
    }
    else{
    counter3 += 1;
    number3.innerHTML = counter + "%";
    }
}, 30);

let number4 = document.getElementById("number4");
let counter4 = 0; 
setInterval(() => {
    if(counter4 == 65){
        clearInterval
    }
    else{
    counter4 += 1;
    number4.innerHTML = counter + "%";
    }
}, 30);

let number5 = document.getElementById("number5");
let counter5 = 0; 
setInterval(() => {
    if(counter5 == 65){
        clearInterval
    }
    else{
    counter5 += 1;
    number5.innerHTML = counter + "%";
    }
}, 30);