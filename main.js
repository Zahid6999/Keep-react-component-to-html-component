import { computePosition } from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.5/+esm';

document.getElementById('faq').addEventListener('click', () => {

  const faqContent = document.getElementById('faqContent')

  faqContent.classList.toggle('active')


  // faqContent.classList.remove('hidden')

});

//  Multiple Accordion----------

const multiAccordion = document.querySelectorAll('#accordion .item')

multiAccordion.forEach((accordion) => {
  accordion.addEventListener('click', (e) => {

    console.log()
    e.currentTarget.children[1].classList.toggle('active')
    // e.currentTarget.

  })
});



// Drop down------------------------------------
document.querySelector('#dropdown').addEventListener('click', () => {
  const dropdownBox = document.getElementById('dropdownBox')

  dropdownBox.classList.toggle('dropdown-show')

})
window.onclick = function (event) {
  if (!event.target.matches('#dropdown')) {
    const dropdownContent = document.getElementsByClassName('dropdown-content')
    for (let i = 0; i < dropdownContent.length; i++) {
      const openDropdown = dropdownContent[i]
      if (openDropdown.classList.contains('dropdown-show')) {
        openDropdown.classList.remove('dropdown-show')
      }
    }

  }
}

// Dropdown 2
document.getElementById('dropdownBtn2').addEventListener('click', () => {
  const dropdownContentBox = document.getElementById('dropdownBox2')
  dropdownContentBox.classList.toggle('dropdown-show')
})


// ====================Drawer Interaction=======================

document.querySelector('#drawer-button').addEventListener('click', function () {
  const drawer = document.getElementById('drawer')
  drawer.classList.toggle('hidden')
})


window.addEventListener('click', function (e) {
  const drawer = document.getElementById('drawer')
  if (e.target === drawer) {
    drawer.style.display = 'none'
  }

})


// ==========================Modal Section============================
const modalContainer = document.querySelector('#modal-container')
const button = document.getElementById('modal-btn')
const close = document.getElementById('close-modal')
const confirm = document.getElementById('confirm-modal')

button.addEventListener('click', () => {
  modalContainer.classList.remove('hidden')
})
close.addEventListener('click', () => {
  modalContainer.classList.add('hidden')

})
confirm.addEventListener('click', () => {
  modalContainer.classList.add('hidden')
})
window.addEventListener('click', (e) => {
  if (e.target === modalContainer) {

    modalContainer.classList.add('hidden')
  }
})

// Modal-2-----------------
const modalButton2 = document.getElementById('modal-btn2')
const modalContainer2 = document.querySelector('.modal2')

modalButton2.addEventListener('click', () => {
  modalContainer2.classList.remove('hidden')
})
window.addEventListener('click', (e) => {
  if (e.target === modalContainer2) {
    modalContainer2.classList.add('hidden')
  }
})




// Input Number----------------------------------------
const plusBtn = document.querySelector('.plusBtn')
const minusBtn = document.querySelector('.minusBtn')
const inputField = document.querySelector('.inputField')

plusBtn.addEventListener('click', () => {
  const previousValue = parseInt(inputField.value)
  inputField.value = previousValue + 1
});

minusBtn.addEventListener('click', () => {
  const previousValue = parseInt(inputField.value)
  inputField.value = previousValue - 1
})


// Label With Input---------------------
const plusBtn2 = document.querySelector('.plusBtn2')
const minusBtn2 = document.querySelector('.minusBtn2')
const inputField2 = document.getElementById('inputField2')

plusBtn2.addEventListener('click', () => {
  const previousValue = parseInt(inputField2.value)
  inputField2.value = previousValue + 1
});
minusBtn2.addEventListener('click', () => {
  const previousValue = parseInt(inputField2.value)
  inputField2.value = previousValue - 1
})


// -------Popover----------
const popoverContainer = document.getElementById('popover-container')
const firstPopoverBtn = document.getElementById('firstPopover')
const firstPopoverContent = document.getElementById('firstPopoverContent')

firstPopoverBtn.addEventListener('click', () => {
  firstPopoverContent.classList.remove('hidden')
})
window.addEventListener('click', function (e) {
  if (e.target === popoverContainer) {
    firstPopoverContent.classList.add('hidden')
  }
})


// Second popover--------------------
const secondPopover = document.getElementById('secondPopover')
const secondPopoverContent = document.getElementById('secondPopoverContent')
secondPopover.addEventListener('click', function () {
  secondPopoverContent.classList.remove('hidden')
})
window.addEventListener('click', function (e) {
  if (e.target === popoverContainer) {
    secondPopoverContent.classList.add('hidden')
  }
})

// Third Popover------------------------------
const thirdPopoverBtn = document.getElementById('thirdPopover')
const thirdPopoverContent = document.getElementById('thirdPopoverContent')
thirdPopoverBtn.addEventListener('click', function () {
  thirdPopoverContent.classList.remove('hidden')
})
window.addEventListener('click', function (e) {
  if (e.target === popoverContainer) {
    thirdPopoverContent.classList.add('hidden')
  }
})


// forth Popover------------------------------
const forthPopoverBtn = document.getElementById('forthPopover')
const forthPopoverContent = document.getElementById('forthPopoverContent')
forthPopoverBtn.addEventListener('click', function () {
  forthPopoverContent.classList.remove('hidden')
})
window.addEventListener('click', function (e) {
  if (e.target === popoverContainer) {
    forthPopoverContent.classList.add('hidden')
  }
})
