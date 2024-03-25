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
    document.body.classList.add('modal-open');
}

// 모달 닫기
const closeButtons = document.querySelectorAll('.modal-close');
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal-wrap').classList.remove('is-active');
        document.body.classList.remove('modal-open');
    });
})

document.addEventListener("click", function(e) {
    if (document.querySelector('.market-alert.is-active') && !e.target.closest('.alert-wrap-inner')) {
        document.querySelector('.market-alert.is-active').classList.remove('is-active');
        document.body.classList.remove('modal-open');
    }
});

// 모달 
const alertOpeners = document.querySelectorAll('.alert-open');
alertOpeners.forEach(opener => {
    opener.addEventListener('click', (e) => {
        e.stopPropagation();
        document.body.classList.add('modal-open');
        document.querySelector('.market-alert').classList.add('is-active');
    });
});

// 드랍다운
const selectedOptionButton = document.querySelector('.selected-option');
const optionList = document.querySelectorAll('.option-list li button');

selectedOptionButton && selectedOptionButton.addEventListener('click', function() {    
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

// 공지팝업
const toggleMainPopup = () => {
    const handleCookie = {
        setCookie: (name, val, exp) => {
            const date = new Date();
            date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + val + ";expires=" + date.toUTCString() + ";";
        },
        getCookie: (name) => {
            const value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
            return value ? value[2] : null;
        }
    };
    
    if (handleCookie.getCookie("today") == "y") {
        document.querySelector(".popupModal").classList.remove("is-active");
    } else {
        document.querySelector(".popupModal").classList.add("is-active");
    }

    const todayChk = document.getElementById("chk-pop");
    todayChk.addEventListener('change', () => {
        if (todayChk.checked) {        
            handleCookie.setCookie("today", "y", 1);
        } else {        
            handleCookie.setCookie("today", "", -1);
        }
    });

    const noticePopupClose = document.querySelector(".btn-close-popup .btn_close");
    noticePopupClose.addEventListener("click", () => {
        const popupModal = noticePopupClose.closest(".popupModal.is-active");
        if (popupModal && !todayChk.checked) {
            handleCookie.setCookie("today", "y", 1);
        }
        if (popupModal) {
            popupModal.classList.remove("is-active");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    toggleMainPopup();
});

//상세 
const listTrigger = document.querySelectorAll('.story-list li a');
listTrigger.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const listId = trigger.getAttribute('data-id');
        document.querySelector('.detail-section').style.display = 'block';
        document.querySelector('.detail-section').setAttribute('data-id', listId);
    });
});

//상세 닫기
const detailClose = document.querySelector('.btn-back');
detailClose && detailClose.addEventListener('click', () => {
    document.querySelector('.detail-section').style.display = "";
})

// 스크롤 탑
document.querySelector('.btn-arrow-down').addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});
