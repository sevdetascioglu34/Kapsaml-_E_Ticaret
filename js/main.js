import headerFunc from "./header.js";
import productsFunc from "./products.js";
import searchFunc from "./search.js";
//add product to localstorage start
fetch('./js/data.json')
    .then(response => response.json())
    .then(data => {
    data ? localStorage.setItem("products",JSON.stringify(data)) : [];
    searchFunc(data);
    })
    .catch(error => console.log(error))
const products=localStorage.getItem("products"); 

//add cartitems to localstorage start
const cartItems=document.querySelector(".header-cart-count");
cartItems.innerHTML=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : "0";

//modal-dialog start
const modalDialogDOM=document.querySelector(".modal-dialog");
const modalContentDOM=document.querySelector(".modal-dialog .modal-content");
const btnCloseDialog=document.querySelector(".modal-dialog .modal-close");
btnCloseDialog.addEventListener("click",function(){
    modalDialogDOM.classList.remove("show");
})


setTimeout(()=>{
 modalDialogDOM.classList.add("show")
},3000)

document.addEventListener("click",function(event){
   if(!event.composedPath().includes(modalContentDOM)){
    modalDialogDOM.classList.remove("show");
   }
})