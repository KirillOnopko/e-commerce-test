const menCatalogueButton = document.querySelector("#men-catalogue-button")
const womenCatalogueButton = document.querySelector("#women-catalogue-button")

const catalogueMen = document.querySelector("#catalogue-men")
const catalogueWomen = document.querySelector("#catalogue-women")

const buttonSupport = document.querySelector("#buttonSupport")
const wrapperSupport = document.querySelector("#wrapperSupport")
const iconSupport = document.querySelector("#icon-support")

const buttonContact = document.querySelector("#buttonContact")
const wrapperContact = document.querySelector("#wrapperContact")
const iconContact = document.querySelector("#icon-contact")

const buttonPayment = document.querySelector("#buttonPayment")
const wrapperPayment = document.querySelector("#wrapperPayment")
const iconPayment = document.querySelector("#icon-payment")

const buttonReadMe = document.querySelector("#buttonReadMe")
const wrapperReadMe = document.querySelector("#wrapperReadMe")
const iconReadMe = document.querySelector("#icon-readMe")

womenCatalogueButton.addEventListener("click", e => {
    menCatalogueButton.classList.remove("active-catalogue-button")
    womenCatalogueButton.classList.add("active-catalogue-button")
    catalogueMen.style.opacity = "0"
    catalogueWomen.style.opacity = "1"
    setTimeout(() => {
        catalogueMen.classList.add("inactive-catalogue")
        catalogueWomen.classList.remove("inactive-catalogue")
        catalogueWomen.classList.add("active-catalogue")
    }, 300)
})

menCatalogueButton.addEventListener("click", e => {
    womenCatalogueButton.classList.remove("active-catalogue-button")
    menCatalogueButton.classList.add("active-catalogue-button")
    catalogueWomen.style.opacity = "0"
    catalogueMen.style.opacity = "1"
    setTimeout(() => {
        catalogueWomen.classList.add("inactive-catalogue")
        catalogueMen.classList.remove("inactive-catalogue")
        catalogueMen.classList.add("active-catalogue")
    }, 300)
})

buttonSupport.addEventListener("click", e => {
    wrapperSupport.classList.toggle("is-open")
    iconSupport.classList.toggle("icon-open")
})

buttonContact.addEventListener("click", e => {
    wrapperContact.classList.toggle("is-open")
    iconContact.classList.toggle("icon-open")
})

buttonPayment.addEventListener("click", e => {
    wrapperPayment.classList.toggle("is-open")
    iconPayment.classList.toggle("icon-open")
})

buttonReadMe.addEventListener("click", e => {
    wrapperReadMe.classList.toggle("is-open")
    iconReadMe.classList.toggle("icon-open")
})

const currentFact = document.querySelector("#currentFact")
const leftArrow = document.querySelector("#left-arrow")
const rightArrow = document.querySelector("#right-arrow")

const allFacts = ["Free shipping on orders over €50", "30-day free returns, no questions asked", "Sustainable materials in every product", "2-year warranty on all shoes"]
let currentIndex = 0
currentFact.innerHTML = allFacts[currentIndex]

rightArrow.addEventListener("click", e => {
    currentFact.style.opacity = "0"
    setTimeout(() => {
        currentIndex = (currentIndex+1)%4
        currentFact.innerHTML = allFacts[currentIndex]
    }, 150)
    setTimeout(() => {
        currentFact.style.opacity = "1" 
    }, 300)
    
})

leftArrow.addEventListener("click", e => {
    currentFact.style.opacity = "0"
    setTimeout(() => {
        currentIndex = (currentIndex-1+allFacts.length) % 4
        currentFact.innerHTML = allFacts[currentIndex]
    }, 150)
    setTimeout(() => {
        currentFact.style.opacity = "1" 
    }, 300)
})
