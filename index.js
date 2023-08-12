AOS.init()

let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slideShow");
    let spotlight = document.getElementsByClassName("spotlight");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < spotlight.length; i++) {
        spotlight[i].className = spotlight[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // spotlight[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

const toggle = document.querySelector(".toggle")
const sideBar = document.querySelector(".sideBar")
const navItems = document.querySelectorAll('.navItems li')

toggle.addEventListener("click", expand)


function expand() {
    var state = sideBar.style.width;
    if (state == "60px") {
        sideBar.style.width = "130px";
        navItems.forEach((i) => {
            i.style.justifyContent = "space-between";
            i.style.flexDirection = "row";
            i.style.fontSize = "14px";
        })

    }
    else {
        sideBar.style.width = "60px";
        navItems.forEach((i) => {
            i.style.justifyContent = "center";
            i.style.flexDirection = "column";
            i.style.fontSize = "10px";
        })
    }
}
// const button = document.getElementById("button")
// button.addEventListener("click", show)

// function show() {
//     document.querySelector(".phonesideBar").style.display = "block";
// }

function hide() {
    document.querySelector(".phonesideBar").style.display = "none";
}
// function showSideBar() {
//     document.querySelector(".phonesideBar").style.display = "flex";
// }

const input = document.getElementById('searchBar')

if (window.innerWidth < 430) {
    input.addEventListener("focus", hide)

}






































// var i = 0;
// var imgs = []
// var img2 = []
// var titles = []
// var titles2 = []
// var time = 10000;
// var url1 = "/LandingPage/8949375.jpg"//mario
// var url2 = "/LandingPage/spidermanBack.jpg"//spiderman
// var url3 = "/LandingPage/8482387.jpg"//galaxy



// imgs[0] = `url(${url1})`;//mario
// img2[0] = `/LandingPage/9048118.jpg`

// imgs[1] = `url(${url2})`;//spiderman
// img2[1] = `/LandingPage/spidermanBack.jpg`

// imgs[2] = `url(${url3})`;//galaxy
// img2[2] = `/LandingPage/9112682.jpg`


// titles[0] = '#1 SPOTLIGHT'
// titles[1] = '#2 SPOTLIGHT'
// titles[2] = ' #3 SPOTLIGHT'
// titles2[0] = 'The SUPER MARIO BROS.movie'
// titles2[1] = 'Spider Man: Across the Spider Verse'
// titles2[2] = 'Guardians of the Galaxy. volume3'


// function slider() {
//     // document.getElementById("title").innerText = titles[p];
//     document.getElementById("slideShow").style.backgroundImage = imgs[i];
//     document.querySelector(".spotlight").innerHTML = titles[i];
//     document.querySelector(".title").innerHTML = titles2[i];

//     document.img.src = img2[i]
//     if (i < img2.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }
//     setTimeout('slider()', time)
// }
// window.onload = slider;
// // console.log(imgs.length)



