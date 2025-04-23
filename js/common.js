// footer
const thisYear = document.querySelector('footer .year');
thisYear.textContent = new Date().getFullYear();

// Fade In Animation
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                fadeObserver.unobserve(entry.target); // 한 번 나타난 요소는 더 이상 관찰하지 않음
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // 요소가 조금 더 일찍 나타나도록 설정
    });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
});

// Lottie Animation (존재할 경우 생성)
if(document.getElementById('lottie-update')) {
    const animation = lottie.loadAnimation({
        container: document.getElementById('lottie-update'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/json/lottie-update.json'
    });
}