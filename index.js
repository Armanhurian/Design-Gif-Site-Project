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