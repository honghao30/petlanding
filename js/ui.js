// 토글 기능
const toggleBtns = document.querySelectorAll('.toggle-btn');
toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('is-active');
    });
});
// 공유
const snsShare = () => {
    const modalLayer = document.querySelector('.sns-share');
    modalLayer.classList.add('is-active');
}

// 모달 닫기
const closeButton = document.querySelector('.modal-close');
closeButton && closeButton.addEventListener('click', () => {
    closeButton.parentElement.parentElement.classList.remove('is-active');
})