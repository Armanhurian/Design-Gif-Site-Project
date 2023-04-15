import {navbarCompanySubmenu ,navbarResourcesSubmenu , navbarCategoriesSubmenu} from './data.js'


console.log(navbarCompanySubmenu ,navbarResourcesSubmenu , navbarCategoriesSubmenu);

let $ = document

let navbar = $.querySelector('.navbar')
let topbarHeaderMenu = $.querySelector('.topbar')
let navbarCompanyList = $.querySelector('.companyList')
let navbarResourcesList = $.querySelector('.resourcesList')
let navbarCategoriesList = $.querySelector('.categoriesList')
let categoryHeaderTitle = $.querySelector('.category-header_title')
let categoryHeaderContainerListPage1 = $.querySelector('.category-header_container-list-page1')
let categoryHeaderContainerListPage2 = $.querySelector('.category-header_container-list-page2')
let paginationBtn1 = $.querySelector('.paginationBtn1')
let paginationBtn2 = $.querySelector('.paginationBtn2')
let navbarRightLinkBtn = $.querySelector('.navbar-right_link-btn')
let signUpContainer = $.querySelector('.signUp-container')
let signUpContainerIcon = $.querySelector('.signUp-container-icon')
let inputGmailSignup = $.querySelector('.inputGmail-signup')
let inputUsernameSignup = $.querySelector('.inputUsername-signup')
let inputPasswordSignup = $.querySelector('.inputPassword-signup')
let signUpContainerBtn = $.querySelector('.signUp-container-btn')
let gmailParagraph = $.querySelector('.gmail-paragraph')
let usernameParagraph = $.querySelector('.username-paragraph')
let passwordParagraph = $.querySelector('.password-paragraph')
let mySliderProductWrapper = $.querySelector('.mySliderProductWrapper')
let activeHeartLike = $.querySelector('.active-heart-like')
let activeShopCount = $.querySelector('.active-shop-count')
let activeSeenLike = $.querySelector('.active-seen-like')
let activeNotSeenLike = $.querySelector('.active-no-seen-like')
let modalShoppingContainer = $.querySelector('.modal-shopping-container')
//let progressBarInOrderShop = $.querySelector('.progress-bar-in-order-shop')
let shoppingContainerLikeIconLink = $.querySelector('.shopping-container-left-like-icon-link')
let shoppingContainerAccountIconLink = $.querySelector('.shopping-container-left-account-icon-link')
let shoppingBasketContainerIconLink = $.querySelector('.shopping-container-left-shopping-icon-link')
let shoppingCartContainer = $.querySelector('.shopping-cart-container')
let productForBuyContainerWrapper = $.querySelector('.product-for-buy-container-wrapper')
let removeShopCartIcon = $.querySelector('.removeShopCartIcon')
let footerContainer = $.querySelector('.footer-container')
let shoppingDetailsDollorPriceText = $.querySelector('.shopping-details-container-dollor-price-text')



let topbar;


window.addEventListener('load',()=>{

    if(scrollY < 110){  
    
        topbar = -8
        navbar.classList.remove('fixed-header')
        console.log(topbar);
    
    }else if(scrollY > 110 ){
        let mathRound = Math.floor(scrollY)
        topbar = 0
        
        console.log(mathRound);
        
        navbar.classList.add('fixed-header') 
        navbar.style.top = topbar + 'rem'
    }
})

window.addEventListener('scroll',()=>{
    if(scrollY < 110){  

        topbar = -8
        navbar.classList.remove('fixed-header')
        console.log(topbar);

    }else if(scrollY > 110 ){
        let mathRound = Math.floor(scrollY)
        
        if( mathRound++ ){
            topbar++
            if(topbar === 1){
            
                topbar = 0
            }
        } 
        console.log(mathRound);
        
        navbar.classList.add('fixed-header') 
        navbar.style.top = topbar + 'rem'
    }
})

navbarCompanySubmenu.forEach((company) => {
    navbarCompanyList.insertAdjacentHTML('beforeend',`
        <li class="navbar-right_menu-item menu-item1">
        <a href="index.html?Category/name=${company['name']}" class="navbar-right_menu-item-link" >${company['name']}</a>
        </li>      
    `)
});
navbarResourcesSubmenu.forEach((resource) => {
    navbarResourcesList.insertAdjacentHTML('beforeend',`
        <li class="navbar-right_menu-item menu-item2">
        <a href="index.html?Resources/name=${resource['name']}" class="navbar-right_menu-item-link" >${resource['name']}</a>
        </li>      
    `)
});
navbarCategoriesSubmenu.forEach((category) => {
    navbarCategoriesList.insertAdjacentHTML('beforeend',`
        <li class="navbar-right_menu-item menu-item3">
        <a href="index.html?Category/name=${category['name']}" class="navbar-right_menu-item-link" >${category['name']}</a>
        </li>      
    `)
});

let myWord = 'My Dream On...'
let wordCount = 0
let titleOfCategoryLength  =  categoryHeaderTitle.innerHTML.length

setInterval(()=>{
    wordCount++
    categoryHeaderTitle.innerHTML = ''
    categoryHeaderTitle.innerHTML += myWord.slice(0,wordCount);
    titleOfCategoryLength = wordCount

    // console.log(wordCount);
    // console.log(titleOfCategoryLength);
    if(wordCount === 60){
        wordCount = 0
        
    }
},90)

paginationBtn1.addEventListener('click',()=>{

    categoryHeaderContainerListPage2.style.display = 'none'
    categoryHeaderContainerListPage1.style.display = 'flex'
    paginationBtn2.classList.remove('btnPaginationDesign')
    paginationBtn1.classList.add('btnPaginationDesign')
})
paginationBtn2.addEventListener('click',()=>{
    
    categoryHeaderContainerListPage1.style.display = 'none'
    categoryHeaderContainerListPage2.style.display = 'flex'
    paginationBtn1.classList.remove('btnPaginationDesign')
    paginationBtn2.classList.add('btnPaginationDesign')
})

navbarRightLinkBtn.addEventListener('click',()=>{
    topbarHeaderMenu.style.display = 'none'
    signUpContainer.style.display = 'block'
    
    signUpContainerBtn.addEventListener('click',()=>{
        
        if(!inputUsernameSignup.value){
            inputUsernameSignup.style.borderColor = 'red'
            usernameParagraph.innerHTML = 'Enter Username'
            usernameParagraph.style.color = 'red'
            usernameParagraph.style.fontSize = '10px'
        }else if(!inputPasswordSignup.value){
            inputPasswordSignup.style.borderColor = 'red'
            passwordParagraph.innerHTML = 'Enter Password'
            passwordParagraph.style.color = 'red'
            passwordParagraph.style.fontSize = '10px'
            
        }else if(!inputGmailSignup.value){
            inputGmailSignup.style.borderColor = 'red'
            gmailParagraph.innerHTML = 'Enter Gmail'
            gmailParagraph.style.color = 'red'
            gmailParagraph.style.fontSize = '10px'

        }else{
            swal({
                title:'You have successfully registered',
                icons:'succsess',
                buttons:'OK'
            }).then((result)=>{
                localStorage.setItem('username',inputUsernameSignup.value)
                navbarRightLinkBtn.innerHTML = inputUsernameSignup.value
            })
        }
    })
})
window.addEventListener('load',()=>{
    let getLocalUsename = localStorage.getItem('username');
    navbarRightLinkBtn.innerHTML = getLocalUsename

})


signUpContainerIcon.addEventListener('click',()=>{
    signUpContainer.style.display = 'none'
    topbarHeaderMenu.style.display = 'block'
})


//start create slider 

const swiper = new Swiper('.swiper',{

    slidesPerView : 'auto',
    speed:400,
    grabCursor : true,
    spaceBetween:20,

    breakpoints:{
       576:{
        slidesPerView : 2
       },
       768:{
        slidesPerView : 3
       },
       1300:{
        slidesPerView : 4
       },

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

//finish create slider 



let myProductArray = [

    {id : 1 , imageSrc : 'image/Paint Slider/images (1).jfif' , title : 'A beautiful painting by George Anderson ...', price:'$23.99', popularCount:4},
    {id : 2 , imageSrc : 'image/Paint Slider/images.jfif' , title : 'A special design by Michael from Oxford University...', price:'$19.50', popularCount:16},
    {id : 3 , imageSrc : 'image/Paint Slider/images (3).jfif' , title : 'unique painting from the Winter Palace exhibition', price:'$36.89', popularCount:11},
    {id : 4 , imageSrc : 'image/Paint Slider/images (4).jfif' , title : 'Selected painting from the National Gallery of Art', price:'$28.00', popularCount:24},
    {id : 5 , imageSrc : 'image/Paint Slider/images (5).jfif' , title : 'Selected painting by Michael philips in harward university', price:'$16.00', popularCount:18},
    {id : 6 , imageSrc : 'image/Paint Slider/images (6).jfif' , title : 'The most popular work from Florence Art Gallery...', price:'$40.99', popularCount:33},
    {id : 7 , imageSrc : 'image/Paint Slider/images (7).jfif' , title : 'A selected work in Koetser Gallery in the london city...', price:'$34.99', popularCount:22},
]

let myCount = 0


let productGenrate = ()=>{


    
    myProductArray.forEach((product)=>{

        mySliderProductWrapper.insertAdjacentHTML('beforeend',`
          
        <div class="swiper-slide  d-flex gap-4">
                   <div class="slider-product_container">
                                    <div>
                                            <img class="slider-product_container-image"
                                                src="${product.imageSrc}" alt="" srcset="">
                                    </div>
                                        <p class="slider-product_container-title">${product.title}</p>
                                    <div class="d-flex justify-content-between">
                                            <span class="slider-product_container-count">${product.price}</span>
                                            <span id = ${product.popularCount} class="slider-product_container-popular"><i class="popular-heart-icon fa-solid fa-heart"></i><span class="product-count-like-love">${product.popularCount}
                                        </div>
                                    <div style="margin-top: 1rem; display: flex;
                                    align-items: center;">
    
                                    <a onclick="sliderHeartClickHandler(event,${product.id})" href="" class="slider-product_container-heart-icon-link">
                                        <i class="slider-product_container-heart-icon fa-regular fa-heart"></i>
                                    </a>
    
                                <button onclick="sliderShoppingClickHandler(${product.id})" class="slider-product_container-btn">ADD TO CART</button>
                            </div>
                    </div>
            </div>
        
            
            `)
        })
    }
    
    productGenrate()


    shoppingContainerLikeIconLink.addEventListener('click',(e)=>{
       e.preventDefault()
       activeNotSeenLike.style.opacity = 1
       activeNotSeenLike.style.visibility = 'visible'

       setTimeout(()=>{
        activeNotSeenLike.style.opacity = 0
        activeNotSeenLike.style.visibility = 'hidden'
    },1000)
    })
    
    let index = 0

    let like = 0 

    let setCountLike = 0

    const sliderHeartClickHandler = (event,productID) => {
        
        like++
        
         activeHeartLike.innerHTML = like
         activeHeartLike.style.opacity = 1
         activeHeartLike.style.visibility = 'visible'
                    
         shoppingContainerLikeIconLink.addEventListener('click',(e)=>{
            e.preventDefault()
                activeHeartLike.style.opacity = 0
                activeHeartLike.style.visibility = 'hidden'
                activeSeenLike.style.opacity = 1
                activeSeenLike.style.visibility = 'visible'
                activeNotSeenLike.style.opacity = 0
                activeNotSeenLike.style.visibility = 'hidden'
                        
                        
                setTimeout(()=>{
                    activeSeenLike.style.opacity = 0
                    activeSeenLike.style.visibility = 'hidden'
                },1000)
            
                        
            like = 0
                        
        })

        let likeCount = 0
        
        event.preventDefault()
        
        index = productID - 1
        
        let getAttributeElement = mySliderProductWrapper.children[index].children[0].children[2].children[1].children[1];

        likeCount = getAttributeElement.innerHTML++
        
        console.log(getAttributeElement.innerHTML);

        localStorage.setItem('save like count',getAttributeElement.innerHTML)

    }
    
    window.sliderHeartClickHandler = sliderHeartClickHandler



shoppingContainerAccountIconLink.addEventListener('click',()=>{

    topbarHeaderMenu.style.display = 'none'
    signUpContainer.style.display = 'block'


    signUpContainerBtn.addEventListener('click',()=>{
        
        if(!inputUsernameSignup.value){
            inputUsernameSignup.style.borderColor = 'red'
            usernameParagraph.innerHTML = 'Enter Username'
            usernameParagraph.style.color = 'red'
            usernameParagraph.style.fontSize = '10px'
        }else if(!inputPasswordSignup.value){
            inputPasswordSignup.style.borderColor = 'red'
            passwordParagraph.innerHTML = 'Enter Password'
            passwordParagraph.style.color = 'red'
            passwordParagraph.style.fontSize = '10px'
            
        }else if(!inputGmailSignup.value){
            inputGmailSignup.style.borderColor = 'red'
            gmailParagraph.innerHTML = 'Enter Gmail'
            gmailParagraph.style.color = 'red'
            gmailParagraph.style.fontSize = '10px'

        }else{
            swal({
                title:'You have successfully registered',
                icons:'succsess',
                buttons:'OK'
            }).then((result)=>{
                localStorage.setItem('username',inputUsernameSignup.value)
                navbarRightLinkBtn.innerHTML = inputUsernameSignup.value
            })
        }
    })
})


// start shopping cart handler

let count = 0

let widthNavbar = 0

let shoppingBasketArray = []

let sliderShoppingClickHandler = (productID)=>{
   console.log(myProductArray[productID-1]);

   
   shoppingBasketArray.push(myProductArray[productID-1])
   
//    productForBuyContainerWrapper.innerHTML = ''

//    shoppingCartContainer.style.display = 'block'

//    console.log(shoppingBasketArray);

//    shoppingBasketArray.forEach(item => {
//        productForBuyContainerWrapper.insertAdjacentHTML('beforeend',`
//        <div class="product-for-buy-container">
//            <div style="margin-right: 1.3rem;">
//                <img class="product-for-buy-container-image" src="${item.imageSrc}" alt="" srcset="">
//            </div>
//            <div style="width: 63%">
//                <span class="product-for-buy-container-count">1x</span>
//                <h5 class="product-for-buy-container-title">${item.title}</h5>
//                <span class="product-for-buy-container-price">${item.price}</span>
//            </div>
//            <div class="shopping-cart-container-icon-box">
//                <i class="fa-sharp fa-solid fa-trash-can shopping-cart-container-icon"></i>
//            </div>
//        </div>
//        `) 
//    })

   modalShoppingContainer.innerHTML = ''

   modalShoppingContainer.insertAdjacentHTML('beforeend',`
    <div class="text-center mb-3">
     <i class="modal-shopping-container-icon fa-solid fa-circle-check"></i>
     <span class="modal-shopping-container-span">Successfully added to cart.</span>
    </div>

    <div class="modal-shopping-container-bottom-box">
     <div>
         <img class="modal-shopping-container-image" src="${myProductArray[productID-1].imageSrc}" alt="" srcset="">
     </div>
     <div>
       <h3 class="modal-shopping-container-title">${myProductArray[productID-1].title}</h3>
       <span class="modal-shopping-container-price">${myProductArray[productID-1].price}</span>
     </div>
    </div>
    <div class="progress-bar-in-order-shop"></div>
      
   `)

   let progressBarInOrderShop = $.querySelector('.progress-bar-in-order-shop')

   console.log(progressBarInOrderShop);

   count ++


   activeShopCount.innerHTML = count
   activeShopCount.style.opacity = 1
   activeShopCount.style.visibility = 'visible'
   
   
   modalShoppingContainer.style.opacity = 1
   modalShoppingContainer.style.visibility = 'visible'


let intervalNavbar = setInterval(()=>{
 

    widthNavbar++

    //console.log(widthNavbar);
    progressBarInOrderShop.style.width = `${widthNavbar}%`

    progressBarInOrderShop.style.opacity = 1
    progressBarInOrderShop.style.visibility = 'visible'

    if(widthNavbar === 100){
      clearInterval(intervalNavbar)
      modalShoppingContainer.style.opacity = 0
      modalShoppingContainer.style.visibility = 'hidden'
      widthNavbar = 0
    }

},40)

console.log(shoppingBasketArray.length);

shopBasketGenrateFunc(shoppingBasketArray)

}



let shopBasketGenrateFunc = (shoppArray) =>{
    
    shoppingBasketContainerIconLink.addEventListener('click',()=>{
        
        footerContainer.style.display = 'none'
        
        productForBuyContainerWrapper.innerHTML = ''
        
        shoppingCartContainer.style.display = 'block'
        
        console.log(shoppArray);
        
        let totalPrice = 0
        
        shoppArray.forEach(item => {
            
            totalPrice += Number(item.price.slice(1,item.price.length-1))  
    
                
                productForBuyContainerWrapper.insertAdjacentHTML('beforeend',`
                <div class="product-for-buy-container">
                    <div style="margin-right: 1.3rem;">
                        <img class="product-for-buy-container-image" src="${item.imageSrc}" alt="" srcset="">
                        </div>
                        <div style="width: 63%">
                        <span class="product-for-buy-container-count">1x</span>
                        <h5 class="product-for-buy-container-title">${item.title}</h5>
                        <span class="product-for-buy-container-price">${item.price}</span>
                        </div>
                        <div class="shopping-cart-container-icon-box">
                        <i onclick ="trashRemoveShopHandler(${item.id})" class="fa-sharp fa-solid fa-trash-can shopping-cart-container-icon"></i>
                        </div>
                </div>
                `) 

               
            })

            if(shoppingBasketArray.length === 0){
                productForBuyContainerWrapper.insertAdjacentHTML('beforeend',`
                <div class="product-for-buy-container">
                  <div style ="margin: 2rem;" class="alert alert-danger">There are no items in your shopping cart</div>
                </div>  
                `) 
            }
    
            shoppingDetailsDollorPriceText.innerHTML = `$${totalPrice}`

            removeShopCartIcon.addEventListener('click',()=>{
                shoppingCartContainer.style.display = 'none'
                footerContainer.style.display = 'block'
            })
            
        
    }) 

    

}



let trashRemoveShopHandler = (itemID)=>{


    console.log(itemID);
    let findIndexProduct = shoppingBasketArray.findIndex(product =>{
       return product.id === itemID
    })
    console.log(findIndexProduct);

    shoppingBasketArray.splice(findIndexProduct,1)

    console.log(shoppingBasketArray);

    count--

    if(count===0){
        
        activeShopCount.style.opacity = 0
        activeShopCount.style.visibility = 'hidden'
        
    }else{
        
        activeShopCount.innerHTML = count
        activeShopCount.style.opacity = 1
        activeShopCount.style.visibility = 'visible'
    }


    console.log(count);

    productForBuyContainerWrapper.innerHTML = ''
        
    shoppingCartContainer.style.display = 'block'
    
    //console.log(shoppArray);
    
    let totalPrice = 0
    
    shoppingBasketArray.forEach(item => {
        
        totalPrice += Number(item.price.slice(1,item.price.length-1))  

            
            productForBuyContainerWrapper.insertAdjacentHTML('beforeend',`
            <div class="product-for-buy-container">
                <div style="margin-right: 1.3rem;">
                    <img class="product-for-buy-container-image" src="${item.imageSrc}" alt="" srcset="">
                    </div>
                    <div style="width: 63%">
                    <span class="product-for-buy-container-count">1x</span>
                    <h5 class="product-for-buy-container-title">${item.title}</h5>
                    <span class="product-for-buy-container-price">${item.price}</span>
                    </div>
                    <div class="shopping-cart-container-icon-box">
                    <i onclick ="trashRemoveShopHandler(${item.id})" class="fa-sharp fa-solid fa-trash-can shopping-cart-container-icon"></i>
                    </div>
                    </div>
            `) 

           
        })


        if(shoppingBasketArray.length === 0){
            productForBuyContainerWrapper.insertAdjacentHTML('beforeend',`
            <div class="product-for-buy-container">
              <div style ="margin: 2rem;" class="alert alert-danger">There are no items in your shopping cart</div>
            </div>  
            `) 
        }

        shoppingDetailsDollorPriceText.innerHTML = `$${totalPrice}`

}


window.trashRemoveShopHandler = trashRemoveShopHandler
window.sliderShoppingClickHandler = sliderShoppingClickHandler