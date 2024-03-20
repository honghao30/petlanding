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
const closeButtons = document.querySelectorAll('.modal-close');
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal-wrap').classList.remove('is-active');
    });
})

document.addEventListener("click", function(e) {
    if (document.querySelector('.market-alert.is-active') && !e.target.closest('.alert-wrap-inner')) {
        document.querySelector('.market-alert.is-active').classList.remove('is-active');
    }
});

// 댓글 
const commonButton = document.querySelector('.btn-write-commond');
commonButton.addEventListener('click', (e) => {
    e.stopPropagation(); // 이벤트 버블링을 막음
    document.querySelector('.market-alert').classList.add('is-active');
});

