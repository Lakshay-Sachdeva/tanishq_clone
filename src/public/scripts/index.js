// import { navbar } from '../components/navbar.js'
// import {footer} from '../components/footer.js'
// import navTop from '../components/navTop.js'
// import navTop2 from '../components/navTop2.js'
// import debouncing from '../components/debouncing.js'

// document.querySelector('nav').innerHTML = navbar()
// document.querySelector('footer').innerHTML = footer();

// import navbar from '../components/navbar.js'

//     let navbar_section =  document.getElementById("navbar");
//     navbar_section.innerHTML = navbar();

// // Adding  Footer --------------------------------------

// import footer from '../components/footer.js'

// let footer_section = document.getElementById("footer");
// footer_section.innerHTML = footer();

// navTop();

// navTop2();

// debouncing();

var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1;
	}
	x[myIndex - 1].style.display = "block";
	setTimeout(carousel, 2000); // Change image every 2 seconds
}

const buttonRight = document.getElementById("slideRight");
const buttonLeft = document.getElementById("slideLeft");

buttonRight.onclick = function () {
	document.getElementById("category_img").scrollLeft += 330;
	document.getElementById("slide_num").textContent = "2 / 2";
};
buttonLeft.onclick = function () {
	document.getElementById("category_img").scrollLeft -= 330;
	document.getElementById("slide_num").textContent = "1 / 2";
};

const buttonRight_promises = document.getElementById("slideRight_promises");
const buttonLeft_promises = document.getElementById("slideLeft_promises");
let promises_count = 1;

buttonRight_promises.onclick = function () {
	document.getElementById("category_img_promises").scrollLeft += 1190;
	promises_count++;
	console.log(promises_count);
	document.getElementById(
		"slide_num_promises"
	).textContent = `${promises_count} / 4`;
};
buttonLeft_promises.onclick = function () {
	document.getElementById("category_img_promises").scrollLeft -= 1190;
	promises_count--;
	document.getElementById(
		"slide_num_promises"
	).textContent = `${promises_count} / 4`;
};
