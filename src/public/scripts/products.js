
// import navbar from '../components/navbar'

// let navbar_section =  document.getElementById("navbar");
// navbar_section.innerHTML = navbar();

// // Adding  Footer --------------------------------------

// import footer from '../components/footer'

// let footer_section = document.getElementById("footer");
// footer_section.innerHTML = footer();

let twotaglh = document.getElementById("twotaglh");
let twotaghl = document.getElementById("twotaghl");


twotaghl.onclick = () => {
    let arr = data.sort((a, b) => (a.newPrice < b.newPrice ? 1 : -1));

    showProducts(arr);
}

  // sort low to high

twotaglh.onclick = () => {
    let arr = data.sort((a, b) => (a.newPrice > b.newPrice ? 1 : -1));

    showProducts(arr);
}



function purity() {

    let arr = data.sort((a, b) => (a.purity > b.purity ? 1 : -1));

showProducts(arr);

}



function product() {

let arr = data.sort((a, b) => (a.product > b.product ? 1 : -1));

showProducts(arr);

}


function type() {

let arr = data.sort((a, b) => (a.jewelleryType > b.jewelleryType ? 1 : -1));

showProducts(arr);

}

function Occasion() {

let arr = data.sort((a, b) => (a.occasion > b.occasion ? 1 : -1));

showProducts(arr);

}



function showmore() {

let arr = data.sort((a, b) => (a.name > b.name ? 1 : -1));

showProducts(arr);

}

