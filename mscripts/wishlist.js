 let wishlistArr=JSON.parse(localStorage.getItem("wishlist"));
console.log(wishlistArr);


if(wishlistArr.length==""){
  let h2=document.createElement("h2");
  h2.textContent="Your Wishlist is Empty!";

  document.getElementById("products").append(h2);
}



let display=(wishlistArr)=>{

  // document.getElementById("products").textContent="";
wishlistArr.forEach(function(el){
    let div=document.createElement("div");
    
    let img=document.createElement("img");
    img.src=el.url;

    let div2=document.createElement("div");
    div2.append(img);

    let div3=document.createElement("div");
    div3.id="contents"
    
    let title=document.createElement("h5");
    title.textContent=el.title;

    let price=document.createElement("h4");
    price.id="bold";
    price.textContent=` $${el.price}`;

    let shipping=document.createElement("h5");
    shipping.id="ship";
    shipping.innerHTML=`Buy It Now<br> +$${el.shipping} shipping <br>from United States`;

    let type=document.createElement("p");
    type.textContent=el.category;

    let category=document.createElement("p");
    category.textContent=el.type;

    let btn=document.createElement("button");
    btn.className="wish";
    btn.textContent="Buy Now";
      btn.addEventListener("click",()=>{
        cartBuy(el);
    })

    let btn2=document.createElement("button");
    btn2.className="wish";
    btn2.textContent="Remove";

    btn2.addEventListener("click",()=>{
        deleteItem(el);
    })
    div3.append(title,type,price,shipping,category,btn,btn2);

    div.append(div2,div3);

    document.getElementById("products").append(div);
});
};

 display(wishlistArr);




var cartArr = JSON.parse(localStorage.getItem("cart")) || [];

let cartBuy=(el)=> {
 
  cartArr.push(el);

  localStorage.setItem("cart", JSON.stringify(cartArr));

  console.log(cartArr);

  window.location.href="cart.html"
}

let deleteItem =(el)=>{
    console.log("working");
    let del=wishlistArr.splice(el, 1);
    document.getElementById("products").textContent = "";
    localStorage.setItem("wishlist", JSON.stringify(wishlistArr));

    location.reload();
    console.log(wishlistArr)
    display(del);
    
    
}


let cost=(del)=>{

let tot = wishlistArr.reduce(function (ac, cv) {
  return ac + cv.price;
}, 0);


var sum = document.querySelector("#sum");
sum.textContent = `$${tot}`;


// display Total shipping
let tot2 = wishlistArr.reduce(function (ac, cv) {
  return ac + cv.shipping;
}, 0);


let s_sum = document.querySelector("#s_sum");
s_sum.textContent = `$${tot2}`;


let subtotal = tot+tot2;
console.log(subtotal);
let sub=document.getElementById("cost");
sub.textContent=`$${subtotal}`;


localStorage.setItem("sum",JSON.stringify(subtotal));
};

cost(wishlistArr);


let button =document.getElementById("buy").addEventListener("click",()=>{
   window.location.href="cart.html"; 
})



