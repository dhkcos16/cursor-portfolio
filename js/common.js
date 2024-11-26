// footer
const thisYear = document.querySelector('footer .year');
thisYear.textContent = new Date().getFullYear();

const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-visual-animation'), // 애니메이션을 표시할 DOM 요소
    renderer: 'svg', // 렌더링 방식: 'svg', 'canvas', 'html' 중 선택
    loop: true, // 애니메이션 반복 여부
    autoplay: true, // 자동 재생 여부
    path: '/json/lottie-man.json', // Lottie JSON 파일 경로
});