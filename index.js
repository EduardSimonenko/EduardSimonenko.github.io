const rangeBlockItems = document.querySelectorAll('.range-selection-block-item')
const rangeContent = document.querySelectorAll('.range-content')
const rangeBlock = document.querySelector('.range-selection-block')
function changeRangeBlock() {
  rangeBlockItems.forEach((el) => {
    el.classList.toggle('active')
  })
  rangeContent.forEach((el) => {
    el.classList.toggle('active')
  })
}

if (rangeBlock) {
  rangeBlock.addEventListener('click', changeRangeBlock)
}

const body = document.querySelector('body')
const loginForm = document.querySelector('.icon-login')
const loginBlank = document.querySelector('.login-blank')
const cross = document.querySelector('.cross')
function showLoginForm() {
  body.classList.add('orange-shadow')
  loginBlank.classList.add('active')
}

function hideLoginForm() {
  body.classList.remove('orange-shadow')
  loginBlank.classList.remove('active')
}

if (loginForm) {
  loginForm.addEventListener('click', showLoginForm)
}

if (cross) {
  cross.addEventListener('click', hideLoginForm)
}

const catalogNavLink = document.querySelectorAll('.catalog-nav-link')
const catalogNav = document.querySelector('.catalog-nav')

function changeCatalogPage(event) {
  if (event.target.classList.contains('catalog-nav-link')) {
    catalogNavLink.forEach((el) => el.classList.remove('active'))
    event.target.classList.add('active')
  }
}

if (catalogNav) {
  catalogNav.addEventListener('click', changeCatalogPage)
}

const cartForm = document.querySelector('.icon-cart')
const cartBlankCross = document.querySelector('.cart-blank-cross')
const cartBlank = document.querySelector('.cart-blank')

function showCartForm() {
  body.classList.add('orange-shadow')
  cartBlank.classList.add('active')
}

function hideCartForm() {
  body.classList.remove('orange-shadow')
  cartBlank.classList.remove('active')
}

if (cartForm) {
  cartForm.addEventListener('click', showCartForm)
}

if (cartBlankCross) {
  cartBlankCross.addEventListener('click', hideCartForm)
}

const iconBowl = document.querySelectorAll('.icon-bowl')

function collapseMenu() {
  catalogNav.classList.toggle('catalog-nav_collapsed')
}

if (catalogNav) {
  iconBowl.forEach((el) => el.addEventListener('click', collapseMenu))
}

const productCartImg = document.querySelector('.product-card-image')
const slideArrowBack = document.querySelector('.slide-arrow.back')
const slideArrowNext = document.querySelector('.slide-arrow.next')
let slideIndex = 1

function slideNext() {
  if (slideIndex < 3) {
    slideIndex += 1;
    productCartImg.src = `assets/img/Chicken${slideIndex}.jpg`
  }
}

function slideBack() {
  if (slideIndex > 1) {
    slideIndex -= 1;
    productCartImg.src = `assets/img/Chicken${slideIndex}.jpg`
  }
}

if (slideArrowNext) {
  slideArrowNext.addEventListener('click', slideNext)
}

if (slideArrowBack) {
  slideArrowBack.addEventListener('click', slideBack)
}

const productFormButton = document.querySelector('.product-form-button')
const productQuantity = document.querySelector('.product-quantity-input')
const navbarLinkCart = document.querySelector('.navbar-link.icon-cart')

function addCart() {
  const valueProductQuantity = productQuantity.value
  navbarLinkCart.innerHTML = `корзина(${valueProductQuantity})`
}

if (productFormButton) {
  productFormButton.addEventListener('click', addCart)
}

const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-items')
const hamburgerLine = document.querySelectorAll('.line')
const navLink = document.querySelectorAll('.nav-link')

function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  body.classList.toggle('orange-shadow');
}

if (hamburger) {
  hamburger.addEventListener('click', toggleMenu);
}

function closeMenu(event) {
  if (event.target.classList.contains('nav-link')) {
    hamburger.classList.remove('open');
    nav.classList.remove('open')
  }
}
nav.addEventListener('click', closeMenu)



