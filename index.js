import {navbarCompanySubmenu ,navbarResourcesSubmenu , navbarCategoriesSubmenu} from './data.js'


console.log(navbarCompanySubmenu ,navbarResourcesSubmenu , navbarCategoriesSubmenu);

let $ = document

let navbar = $.querySelector('.navbar')
let navbarCompanyList = $.querySelector('.companyList')
let navbarResourcesList = $.querySelector('.resourcesList')
let navbarCategoriesList = $.querySelector('.categoriesList')

let topbar;


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
        <li class="navbar-right_menu-item">
        ${company['name']}
        </li>      
    `)
});
navbarResourcesSubmenu.forEach((resource) => {
    navbarResourcesList.insertAdjacentHTML('beforeend',`
        <li class="navbar-right_menu-item">
        ${resource['name']}
        </li>      
    `)
});
navbarCategoriesSubmenu.forEach((category) => {
    navbarCategoriesList.insertAdjacentHTML('beforeend',`
        <li class="navbar-right_menu-item">
        ${category['name']}
        </li>      
    `)
});