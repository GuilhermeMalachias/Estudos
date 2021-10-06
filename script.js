function startModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    modal.addEventListener('click', (event) => {
        if(event.target.id == modalId || event.target.className == 'close') {
            modal.classList.remove('show')
        }  //target é uma função que mostra a onde clicamos com o mouse
    });
}

const linkModal = document.querySelector('#link-newsletter');
linkModal.addEventListener('click', () => startModal('modal-newsletter'));