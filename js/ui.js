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
commonButton && commonButton.addEventListener('click', (e) => {
    e.stopPropagation(); // 이벤트 버블링을 막음
    document.querySelector('.market-alert').classList.add('is-active');
});

// 드랍다운
const selectedOptionButton = document.querySelector('.selected-option');
const optionList = document.querySelectorAll('.option-list li button');

selectedOptionButton.addEventListener('click', function() {    
    selectedOptionButton.classList.toggle('is-active');
    selectedOptionButton.parentElement.classList.toggle('is-active');
    selectedOptionButton.nextElementSibling.classList.toggle('is-active');    
});
optionList.forEach(option => {
    option.addEventListener('click', () => {
        const selectedValue = option.getAttribute('data-option');
        selectedOptionButton.textContent = selectedValue;
        
        const allOptionItems = document.querySelectorAll('.option-list li');
        allOptionItems.forEach(item => {
            if (item !== option.parentElement) {
                item.classList.remove('is-active');
            }
        });
        option.parentElement.classList.add('is-active');
        selectedOptionButton.classList.toggle('is-active');
        selectedOptionButton.parentElement.parentElement.classList.toggle('is-active');
        selectedOptionButton.nextElementSibling.classList.toggle('is-active');            
    });
})
// 영역 외를 클릭하면 드랍다운 닫기
document.addEventListener("click", function(e) {
    if (document.querySelector('.fillter-option.is-active') && !e.target.closest('.fillter-option')) {
        document.querySelector('.fillter-option.is-active').classList.remove('is-active');
        selectedOptionButton.classList.remove('is-active');        
        selectedOptionButton.nextElementSibling.classList.remove('is-active');    

    }
});

//tabMenu
const tabButtons = document.querySelectorAll('.tab-area .btn-tab');
const tabList = document.querySelector('.tab-area ul');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const clickedLi = button.parentElement;
        const isActive = clickedLi.classList.contains('is-active');

        if (!isActive) {
            tabList.querySelector('.is-active').classList.remove('is-active');
            clickedLi.classList.add('is-active');
        }        
    });
});

const calcTabWidth = () => {
    
}
