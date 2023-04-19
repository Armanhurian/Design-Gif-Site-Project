import {navbarCompanySubmenu ,navbarResourcesSubmenu , navbarCategoriesSubmenu} from './data.js'

let $ = document

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
let navbarCompanyList = $.querySelector('.companyList')
let navbarResourcesList = $.querySelector('.resourcesList')
let navbarCategoriesList = $.querySelector('.categoriesList')
let categoryHeaderTitle = $.querySelector('.category-header_title')
let categoryHeaderContainerListPage1 = $.querySelector('.category-header_container-list-page1')
let categoryHeaderContainerListPage2 = $.querySelector('.category-header_container-list-page2')


navbarRightLinkBtn.addEventListener('click',()=>{
 
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
