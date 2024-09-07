document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.querySelector('.close');

    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
        modal.classList.remove('fadeOut');
        modal.classList.add('fadeIn');
        const modalContent = modal.querySelector('.modal-content');
        modalContent.classList.remove('zoomOut');
        modalContent.classList.add('zoomIn');
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('fadeIn');
        modal.classList.add('fadeOut');
        const modalContent = modal.querySelector('.modal-content');
        modalContent.classList.remove('zoomIn');
        modalContent.classList.add('zoomOut');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); // Match the duration of the fadeOut animation
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.classList.remove('fadeIn');
            modal.classList.add('fadeOut');
            const modalContent = modal.querySelector('.modal-content');
            modalContent.classList.remove('zoomIn');
            modalContent.classList.add('zoomOut');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500); // Match the duration of the fadeOut animation
        }

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    });
});
