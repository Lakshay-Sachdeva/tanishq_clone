
function function_alert(id,input){
    let check = document.getElementById(input)
    console.log('check:', check)
    
    let tem = document.getElementById(id)

    if(check.value.length == 0){
        
        // console.log('tem:', tem)
        tem.style.display = "block"
        check.style.border = "1px solid red"
    }else{
        tem.style.display = "none"
        check.style.border = "1px solid #8e8e8e"
    }
    
}

function go_to() {
    window.location.href = "../html/thankyou.html"
}

let Checkout_Data = JSON.parse(localStorage.getItem("Checkout_Data"))
        console.log('Checkout_Data:', Checkout_Data)
get_total()

function get_total() {
    let cart_val = document.getElementById("cart-val")
        cart_val.innerText = Checkout_Data.Total

    

    let sum = document.getElementById("final-total")
        sum.innerText = `₹${cart_val}`
}