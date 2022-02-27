 let cartArr=JSON.parse(localStorage.getItem("cart"));

 console.log(cartArr);

if(cartArr.length==""){
  let h2=document.createElement("h2");
  h2.textContent="Your Cart is Empty!";

  document.getElementById("products").append(h2);
}



let display=(cartArr)=>{

  // document.getElementById("products").textContent="";
cartArr.forEach(function(el){
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



    let btn2=document.createElement("button");
    btn2.className="wish";
    btn2.textContent="Remove";

    btn2.addEventListener("click",()=>{
        deleteItem(el);
    })
    div3.append(title,type,price,shipping,category,btn2);

    div.append(div2,div3);

    document.getElementById("products").append(div);
});
};

 display(cartArr);






let deleteItem =(el)=>{
    console.log("working");
    let del=cartArr.splice(el, 1);
    document.getElementById("products").textContent = "";
    localStorage.setItem("cart", JSON.stringify(cartArr));

    location.reload();
    // console.log(wishlistArr)
    display(del);
    
    
}


let cost=(del)=>{

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


localStorage.setItem("sum",JSON.stringify(subtotal));
};

cost(cartArr);

let val=cost(cartArr);
console.log(val);


document.getElementById("buy").addEventListener("click",()=>{
     window.location.href="payement.html";
});





