const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        for (let anchor of anchors) {
            anchor.style.color = '#ffffff';
        }
        anchor.style.color = '#f06c64';
        const blockID = anchor.getAttribute('href').substr(1);


        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let colors = ['#f06c64', '#648bf0'];
    let sections = document.getElementsByClassName("slider-section");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        sections[0].style.backgroundColor = colors[slideIndex - 1];
    }
    slides[slideIndex - 1].style.display = "flex";
}

onOff();

function onOff() {
    const verticalPhone = document.querySelector(".phone-vertical");
    const horizontalPhone = document.querySelector(".phone-horizontal");
    let showedH = false, showedV = false;
    verticalPhone.addEventListener('click', function (e) {
        let black = document.querySelector(".black-vertical");
        if (showedV) {
            black.style.display = "none";
            showedV = false;
        } else {
            black.style.display = "block";
            showedV = true;
        }
    });
    horizontalPhone.addEventListener('click', function (e) {
        let black = document.querySelector(".black-horizontal");
        if (showedH) {
            black.style.display = "none";
            showedH = false;
        } else {
            black.style.display = "block";
            showedH = true;
        }
    });
}

const pictures = document.querySelectorAll('.portfolio-images');

for (let picture of pictures) {
    picture.addEventListener('click', function (e) {
        for (let picture of pictures) {
            picture.style.border = "none";
            picture.style.margin = "10px";
        }
        picture.style.border = "solid 5px #F06C64";
        picture.style.margin = "5px";
    });
}


function showModal() {
    let form = document.forms.quote;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });
    if (form.elements.username.value.length !== 0 && form.elements.usermail.value.length !== 0) {
        let lines = document.querySelectorAll('.modal-line');
        let modalWindow = document.querySelector('.modal');
        modalWindow.style.display = "block";
        lines[0].innerHTML = form.subject.value.length === 0 ? "No subject" : "Subject: " + form.subject.value;
        lines[1].innerHTML = form.description.value.length === 0 ? "No description" : "Description: " + form.description.value;
        form.reset();
    }


}

function closeModal() {
    let modalWindow = document.querySelector('.modal');
    modalWindow.style.display = "none";
}

function sortImg() {
    let images = Array.from(document.querySelectorAll('.portfolio-images'));
    let imagesBuf = shuffle(images.slice());
    let imageContainer = document.querySelector('.image-container');
    images.forEach(img => img.remove());
    for (let i = 0; i < imagesBuf.length; i++) {
        imageContainer.append(imagesBuf[i])
    }
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

