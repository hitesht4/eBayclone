let navbar=()=>{
    return `<div id="nav1">


  <div>
    <p id="onep">Hi</p><a style="color:blue" href="signin.html">SignIn</a>
    <p id="twop">or</p><a style="color:blue"href="signup.html">Register</a>
    
    <a href="" class="nav1item">Daily Deals</a>
    <a href="" class="nav1item">Contact & Help</a>
  </div>






  <div>
    <a href="" class="nav1item">Sell</a>
    <a href="wishlist.html" class="nav1item">wishlist</a>
    <a href="" class="nav1item icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg></a>
    <a href="cart.html" class="nav1item icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg></a>
  </div>
</div>

 <!-- navbar -->
    <div id="navbar"class="">
      <img src="images/logo.png" alt="" id="logo" class="image-fluid">
    <li class="nav-item dropdown" id="dr1">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Shop by<br>
            Category
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="electronics.html">Electronics</a></li>
            <li><a class="dropdown-item" href="mens.html">Mens Fashion</a></li>
            <li><a class="dropdown-item" href="womens.html">Womens Fashion</a></li>
        </ul>
    </li>
      <input placeholder="Search any Category" class="col-6" id="input">
    <li class="nav-item dropdown" id="dr1">
        <a class="nav-link dropdown-toggle two" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
           See All Categories
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="electronics.html">Electronics</a></li>
            <li><a class="dropdown-item" href="mens.html">Fashion Mens</a></li>
            <li><a class="dropdown-item" href="womens.html">Fashion Womens</a></li>
        </ul>
    </li>
    <button type="button" class="btn btn-primary btn-lg" id="search_btn">Search</button>
    <p id="drop2">Advanced</p>
    </div> `;
};


export default navbar;