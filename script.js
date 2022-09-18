"use strict"

const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")
const mobileMenuEl = document.querySelector(".mobile__links--link")

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  if (!mobileMenu.classList.contains("active")) {
    mobileMenu.inert = true
  } else {
    mobileMenu.inert = false
  }
})