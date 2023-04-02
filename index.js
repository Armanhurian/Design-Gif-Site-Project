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

    {id : 1 , imageSrc : 'image/Paint Slider/images (1).jfif' , title : 'A beautiful painting by George Anderson ...', price:'$23.99', popularCount:12},
    {id : 2 , imageSrc : 'image/Paint Slider/images.jfif' , title : 'A special design by Michael from Oxford University...', price:'$19.50', popularCount:9},
    {id : 3 , imageSrc : 'image/Paint Slider/images (3).jfif' , title : 'unique painting from the Winter Palace exhibition', price:'$36.89', popularCount:20},
    {id : 4 , imageSrc : 'image/Paint Slider/images (4).jfif' , title : 'Selected painting from the National Gallery of Art', price:'$28.00', popularCount:16},
    {id : 5 , imageSrc : 'image/Paint Slider/images (5).jfif' , title : 'Selected painting by Michael Phillips in harward university', price:'$16.00', popularCount:6},
    {id : 6 , imageSrc : 'image/Paint Slider/images (6).jfif' , title : 'The most popular work from Florence Art Gallery...', price:'$40.99', popularCount:31},
    {id : 7 , imageSrc : 'image/Paint Slider/images (7).jfif' , title : 'A selected work in Koetser Gallery in the london city...', price:'$34.99', popularCount:10},
]

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
                                        <span class="slider-product_container-popular">
                                            <i class="popular-heart-icon fa-solid fa-heart"></i>
                                            ${product.popularCount}
                                        </span>
                                    </div>
                                <div style="margin-top: 1rem; display: flex;
                                align-items: center;">

                                <a href="" class="slider-product_container-heart-icon-link">
                                    <i class="slider-product_container-heart-icon fa-regular fa-heart"></i>
                                </a>

                            <button class="slider-product_container-btn">ADD TO CART</button>
                        </div>
                </div>
        </div>
    
    
    `)
})