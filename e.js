const menuBtn = document.querySelectorId('menu-btn')
const closeBtn = document.querySelector('.close-btn')
const menu = document.querySelector('.nav_links')
const overlay = document.querySelector('.overlay')
const mainThumbnail = document.querySelector('.main-thumbnail')
const mainThumbnailBox = document.querySelector(
  '.lightbox-conteiner .main-thumbnail'
)
const images = document.querySelectorAll('.preview img')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const amount = document.querySelector('#amount')
const nextBtn = document.getElementById('#next')
const prevBtn = document.getElementById('#previos')
const slider = document.querySelector('.mobile-thumb')
const thumbNob = document.querySelector('.thumb-nob')
const cartBtn = document.querySelector('.cart-btn')
const cart = document.querySelector('.cart-wrp')
const closeLightboxBtn = document.querySelector('.close-lightbox')
const lightbox = document.querySelector('.lightbox')
const addBtn = document.querySelector('.add_btn')
const indicator = document.querySelector('.indicator')
const wrp = document.querySelector('.cart-content')

let amountValue = 0
let currentImg = 1
indicator.computedStyleMap.display = 'none'
function openMenu() {
  menu.classList.add('active')
  overlay.classList.add('active')
}
