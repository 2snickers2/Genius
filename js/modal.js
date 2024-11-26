const modal = document.querySelector('.backdrop')
const modalButtonOpen = document.querySelector('.modal-btn-open')
const modalButtonClose = document.querySelector('.modal-btn-close')

const toggleModal = () => modal.classList.toggle('is-hidden')

modalButtonOpen.addEventListener('click', toggleModal);
modalButtonClose.addEventListener('click', toggleModal);