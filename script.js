const menuButton = document.querySelector('#menu-button')
const menuButtonClose = document.querySelector('#menu-button-close')

const navMenu = document.querySelector('header nav')

var menuActive = false

function navButton(){
    if(menuActive){
        menuButton.style.display = 'inline-block'
        menuButtonClose.style.display = 'none'
        navMenu.style.left = '100vw'
        navMenu.style.boxShadow = 'none'
        document.body.style.overflow = 'scroll'

        menuActive = false
    }else{
        menuButton.style.display = 'none'
        menuButtonClose.style.display = 'inline-block'
        navMenu.style.left = '45vw'
        navMenu.style.display = 'flex'
        navMenu.style.boxShadow = '-55vw 0px 0px 55vw rgba(0,0,0,0.5)'
        document.body.style.overflow = 'hidden'
        menuActive = true
    }
}