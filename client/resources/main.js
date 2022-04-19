window.onload = function() {
    // getProducts();
    document.getElementById('submit').onclick= function(event) {
        event.preventDefault();
        validate_user();
    }
    // document.getElementById('nav-home').onclick = function(event) {
    //     event.preventDefault();
    //     getProducts();
    // }

    // add/update product
    // document.getElementById('product-btn').onclick = function(event) {
    //     event.preventDefault();
    //     if (!document.getElementById('product-btn').dataset.id) {
    //         addProduct();
    //     } else {
    //         editProduct();  
    //     }
    // }
}
async function validate_user(){
    let users = await fetch('http://localhost:4000/login', {
method: 'POST',
headers:{
    'Content-type': 'application/json'
},
body:JSON.stringify({
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
})

    }).then(res=>res.json())

    // console.log(users)
    if(users.error){
        console.log("password failed");
    }else{
        
        console.log("user loggend in");
    }
}

