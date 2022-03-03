var pets = [
   
    {   id:0,
        name:"Honey Bunny",
        age:4,
        gender:"Female",
        size:"Medium",
        image:"img/pic01.jpg",
        price:300,
        qtty: 1

    },
    {   id:1,
        name:"Charlie",
        age:35,
        gender:"Male",
        size:"Large",
        image:"img/pic02.jpg",
        price:400,
        qtty: 1

    },
    {   id:2,
        name:"Frodo",
        age:2,
        gender:"Male",
        size:"Small",
        image:"img/pic03.jpg",
        price:350,
        qtty: 1

    },
   {    id:3,
        name:"Ziggy",
        age:3,
        gender:"Male",
        size:"Small",
        image:"img/pic04.jpg",
        price:300,
        qtty: 1

    },
    {   id:4,
        name:"Cooper",
        age:8,
        gender:"Male",
        size:"Large",
    image:"img/pic05.jpg",
        price:800,
        qtty: 1

    },
    {   id:5,
        name:"Dolly",
        age:4,
        gender:"Female",
        size:"Medium",
        image:"img/pic06.jpg",
        price:350,
        qtty: 1

    },
    {  id:6,
        name:"Buffy",
        age:5,
        gender:"Female",
        size:"Medium",
        image:"img/pic07.jpg",
        price:500,
        qtty: 1

    },
    {
        id:7,
        name:"Lexi",
        age:4,
        gender:"Female",
        size:"Medium",
        image:"img/pic08.jpg",
        price:600,
        qtty: 1
    },
    {   id:8,
        name:"Leo",
        age:3,
        gender:"Male",
        size:"Medium",
        image:"img/pic09.jpg",
        price:700,
        qtty: 1
    }


];


for(let val of pets){
document.getElementById("result").innerHTML +=`
     <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card m-1 mx-3 pb-2 cards-style ">
            <figure class="imghvr-hinge-left">
            <img src="${val.image}" class="card-img-top" alt="${val.name}"> 
            
            <figcaption>
            <img src="${val.image}" class="card-img-top" alt="${val.name}"> 
            
             
            </figcaption>
          </figure>
            <h3 class="card-text text-light bg-dark text-center fs-5 p-2">${val.name}</h3>
            <p class="card-text text-dark fs-6 m-2"><b>Gender: ${val.gender}</b></p>
            <p class="card-text text-dark fs-6 m-2"><b>Age: ${val.age}</b></p>
            <p class="card-text text-dark fs-6 m-2"><b>Size: ${val.size}</b></p>
            <p class="card-text btn-danger fs-6 m-2 p-1 w-25 rounded"><b> ${val.price}€</b></p>
            <i class="carts bi bi-cart-plus-fill text-primary p-4 fa-3x"></i>
            </div>
        </div>    
            `
    }

    var cart = [];

    function addToCart(product){
        let item = cart.find((val) => val.name == product.name);
        if (item) {
            item.qtty++;
        }
        else{
            cart.push(product);
          
        }
       
       
            createRows(); 
            Total();
        console.table(cart); 
       
    }

    let cartBtn = document.getElementsByClassName("carts");

    for(let i = 0; i < cartBtn.length; i++)
    {
        cartBtn[i].addEventListener("click", function(){
            addToCart(pets[i]);
        })
    }

   
   
    function createRows() {
       
        
        var result = "";
    
        `<h2 class="title">Your Cart</h2>`
        for (let val of cart) {
    
            result += `
            <div class="card-container row  summary-section g-3">
            <div class="col">
                <!-- Card with default left text alignment -->
                <div class="card">
                    <div class="card-body">
                        
                        <img src="${val.image}" class="summary-image" alt="${val.name}">  
                    </div>
                </div>
            </div>
            <div class="col">
                <!-- Card with center text alignment -->
                <div class="card ">
                    <div class="card-body">
                       
                        <h5 class="card-title">${val.name}</h5>
                      
                      
                    </div>
                </div>
            </div>
            <div class="col">
            <!-- Card with right text alignment -->
                <div class="card text-end">
                    <div class="card-body">
                       
                        <h5 class="card-title">Price: €${val.price}</h5>
                     
                    </div>
                </div>
                
        </div>
            <!-- Card with center text alignment -->
            <div class="col">
                <!-- Card with right text alignment -->
                    <div class="card text-end">
                        <div class="card-body">
                        <i class=" del bi bi-trash fa-2x text-danger"></i> 
                        <span>
                        <i class="minus fa fa-minus-circle fa-2x text-warning" ></i>            

                        <div class="cart-quantity text-center h4">${val.qtty}</div>            
            
                        <i class="plus fa fa-plus-circle fa-2x text-success"></i>
                        <i class="fa-solid fa-circle-trash fa-2x text-danger"></i> 
                        
                        
                       
                        </span>
                        </div>
                    </div>
                    
            </div> 
        </div>
        
        `;
    
        }
    
        document.getElementById("cart-items").innerHTML = result;
       
    
        let plus = document.getElementsByClassName("plus");
        let minus = document.getElementsByClassName("minus");
        let del = document.getElementsByClassName("del");
        for(let i = 0; i < plus.length; i++){
            plus[i].addEventListener("click", function(){
                plusQtty(i);
                Total();
            });
            minus[i].addEventListener("click", function(){
                minusQtty(i);
                Total();
            });
            del[i].addEventListener("click", function() {

                deleteItem(i);
    
                Total();
    
            });
        }
    }
    function Total(){
        let total = 0;  
        for(let val of cart){
            total = total + (val.price * val.qtty);
        }
           
         
                document.getElementById("total").innerHTML = total.toFixed(2) + "€";
            
        }
    
        function plusQtty(i){
            cart[i].qtty++;
            document.getElementsByClassName("cart-quantity")[i].innerHTML=cart[i].qtty;
        }

        function minusQtty(i){
            if(cart[i].qtty == 1){
                cart.splice(i,1);
                createRows();
            }
            else{
                cart[i].qtty -= 1;
                document.getElementsByClassName("cart-quantity")[i].innerHTML=cart[i].qtty
            }
        }
        function deleteItem(i) {

            cart[i].qtty = 1;
        
            cart.splice(i, 1);
        
            createRows();
        
        }
        
        
    
    
 

    