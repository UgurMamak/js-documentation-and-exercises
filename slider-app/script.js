var models = [
    {
        name: 'Bmw 418d 0',
        image: 'img/bmw.jpg',
        link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name: 'Mazda CX-3 1',
        image: 'img/mazda.jpg',
        link: 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name: 'Volvo S60 2',
        image: 'img/volvo.jpg',
        link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name: 'Skoda Superb 3',
        image: 'img/skoda.jpg',
        link: 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name: 'Honda Civic 4',
        image: 'img/honda.jpg',
        link: 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

var index = 0;
var slaytCount = models.length;

var settings = {
    dots: true
}

//create-dots
const footer = document.querySelector(".card-footer");


init();
//initial settings definition
function init() {

    if (settings.dots) {
        createSliderDots();
    }


}





function createSliderDots() {
    const sliderDots = document.createElement("div");
    sliderDots.className = "slider-dots"

    models.forEach(function (item, index) {
        const dot = document.createElement("button");
        dot.className = "dot"
        dot.setAttribute("data-id", index)

        dot.addEventListener("click", dotClick);

        sliderDots.appendChild(dot);

    });
    footer.appendChild(sliderDots);
}


function dotClick(index) {

    var dots=document.querySelector(".slider-dots").children;
 
    //other dots remove active class
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }

    index.target.classList.add("active");
    showSlide(index.target.getAttribute("data-id"));

}


document.querySelector(".fa-arrow-circle-left").addEventListener("click", function () {

    index--;
    showSlide(index)
    console.log(index);


});
document.querySelector(".fa-arrow-circle-right").addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);

});

function showSlide(i) {


    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }

    if (i >= slaytCount) {
        index = 0;
    }


    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-img-top").setAttribute("src", models[index].image);
    document.querySelector(".card-link").setAttribute("href", models[index].link)
}