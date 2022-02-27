

document.getElementById("buy").addEventListener("click",()=>{
let card=document.getElementById("inputcard").value;
let date=document.getElementById("inputdate").value;
let cvv=document.getElementById("inputcode").value;
let name1=document.getElementById("fname").value;
let last=document.getElementById("lname").value;
    if(card==""){
      document.getElementById("car").textContent="Please Enter Details";   
    }
    else{
       document.getElementById("car").textContent=""; 
    }
    
    if(date==""){
      document.getElementById("exp").textContent="Please Enter Details";   
    }
    else{
        document.getElementById("exp").textContent="";
    }
    if(cvv==""){
      document.getElementById("Cvvv").textContent="Please Enter Details";   
    }
    else{
        document.getElementById("Cvvv").textContent=""; 
    }
    if(name1==""){
      document.getElementById("finame").textContent="Please Enter Details";   
    }
    else{
        document.getElementById("finame").textContent=""; 
    }
    if(last==""){
      document.getElementById("laname").textContent="Please Enter Details";   
    }
    else{
       document.getElementById("laname").textContent=""; 
    }

    if(card=="" || date=="" || cvv=="" || name1=="" || last==""){
    
    document.getElementById("alert").textContent="Please Enter Correct Details"; 
    }

    else{
        window.location.href="otp.html";
    }
        

});

let cartArr = JSON.parse(localStorage.getItem("cart"));
console.log(cartArr);






let tot = cartArr.reduce(function (ac, cv) {
  return ac + cv.price;
}, 0);


var sum = document.querySelector("#sum");
sum.textContent = `$${tot}`;


// display Total shipping
let tot2 = cartArr.reduce(function (ac, cv) {
  return ac + cv.shipping;
}, 0);


let s_sum = document.querySelector("#s_sum");
s_sum.textContent = `$${tot2}`;


let subtotal = tot+tot2;
console.log(subtotal);
let sub=document.getElementById("cost");
sub.textContent=`$${subtotal}`;

let cou_btn=document.getElementById("bton").addEventListener("click",()=>{
       let coupon =document.getElementById("cou").value;

   if(coupon=="ebay30" ){
       subtotal=subtotal*0.7;
   }

let sub=document.getElementById("cost");
sub.textContent=`$${subtotal}`;
});









