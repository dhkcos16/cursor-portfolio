document.addEventListener('DOMContentLoaded', function() {
    // 모달 관련 요소들 선택
    const projectItems = document.querySelectorAll('.project-item');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // 모달이 열릴 때 스와이퍼 초기화
    const initModalSwiper = () => {
        new Swiper('.modal-swiper .swiper', {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            resizeObserver: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                }
            }
        });
    };

    // 프로젝트 아이템 클릭 이벤트
    projectItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                initModalSwiper(); // 모달이 열릴 때 스와이퍼 초기화
                // 모달 열릴 때 스크롤 방지
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // 모달 닫기 버튼 클릭 이벤트
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.remove('active');
            
            // 모달 닫힐 때 스크롤 복구
            document.body.style.overflow = 'auto';
        });
    });

    // 모달 외부 영역 클릭 시 닫기
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // ESC 키 누를 때 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
    });
});
