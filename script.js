const content = document.querySelector('.content');

setTimeout(removeLoading, 2000);

function removeLoading() {
    content.classList.remove('loading');
}