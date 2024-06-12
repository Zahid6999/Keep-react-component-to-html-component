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